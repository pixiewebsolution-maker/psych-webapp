import mongoose, { Schema, model, models } from 'mongoose';

const AppointmentSchema = new Schema(
  {
    patient: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    doctor: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    doctorProfile: {
      type: Schema.Types.ObjectId,
      ref: 'DoctorProfile',
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    timeSlot: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'completed', 'cancelled', 'rescheduled', 'missed'],
      default: 'pending',
    },
    reason: {
      type: String,
    },
    cancellationReason: {
      type: String,
    },
    rescheduleCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = models.Appointment || model('Appointment', AppointmentSchema);

export default Appointment;
