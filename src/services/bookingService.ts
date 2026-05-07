import dbConnect from "@/lib/db";
import Appointment from "@/models/Appointment";
import DoctorProfile from "@/models/DoctorProfile";
import { addMinutes, format, parse, startOfDay, isAfter, isBefore } from "date-fns";

export async function getAvailableSlots(doctorSlug: string, date: Date) {
  await dbConnect();
  
  const profile = await DoctorProfile.findOne({ slug: doctorSlug });
  if (!profile) throw new Error("Doctor not found");

  const dayName = format(date, "eeee").toLowerCase();
  const daySlots = profile.availability.get(dayName) || [];

  // Get existing appointments for this day
  const existingAppointments = await Appointment.find({
    doctorProfile: profile._id,
    date: startOfDay(date),
    status: { $in: ["confirmed", "pending"] },
  });

  const bookedSlots = existingAppointments.map(app => app.timeSlot);

  // Return slots that are not booked
  return daySlots.filter((slot: string) => !bookedSlots.includes(slot));
}

export async function bookAppointment(data: {
  patientId: string;
  doctorSlug: string;
  date: Date;
  timeSlot: string;
  reason: string;
}) {
  await dbConnect();
  
  const profile = await DoctorProfile.findOne({ slug: data.doctorSlug });
  if (!profile) throw new Error("Doctor not found");

  // Check if patient already has 3 active bookings
  const activeBookingsCount = await Appointment.countDocuments({
    patient: data.patientId,
    status: { $in: ["pending", "confirmed"] },
  });

  if (activeBookingsCount >= 3) {
    throw new Error("Maximum 3 active bookings allowed per patient.");
  }

  // Check if slot is still available
  const existing = await Appointment.findOne({
    doctorProfile: profile._id,
    date: startOfDay(data.date),
    timeSlot: data.timeSlot,
    status: { $in: ["pending", "confirmed"] },
  });

  if (existing) {
    throw new Error("This slot is already booked.");
  }

  const appointment = await Appointment.create({
    patient: data.patientId,
    doctor: profile.user,
    doctorProfile: profile._id,
    date: startOfDay(data.date),
    timeSlot: data.timeSlot,
    reason: data.reason,
    status: "pending",
  });

  return appointment;
}
