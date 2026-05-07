"use client";

import { Calendar, Clock, MapPin, MoreHorizontal } from "lucide-react";

const UPCOMING = [
  {
    doctor: "Dr. Sarah Johnson",
    specialization: "Clinical Psychiatry",
    date: "May 12, 2026",
    time: "10:30 AM",
    type: "Follow-up",
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    doctor: "Dr. Michael Chen",
    specialization: "Child & Adolescent",
    date: "May 18, 2026",
    time: "02:00 PM",
    type: "Initial Consult",
    image: "https://i.pravatar.cc/150?u=michael",
  },
];

export default function UpcomingAppointments() {
  return (
    <div className="space-y-6">
      {UPCOMING.map((appt, idx) => (
        <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col md:flex-row items-center gap-8 group hover:shadow-xl transition-all">
          <img src={appt.image} alt={appt.doctor} className="w-16 h-16 rounded-2xl object-cover" />
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h4 className="font-bold text-lg">{appt.doctor}</h4>
              <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                {appt.type}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={14} className="text-primary" />
                <span>{appt.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary" />
                <span>{appt.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span>Online Session</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl text-slate-400 hover:text-primary transition-colors">
              <MoreHorizontal size={20} />
            </button>
            <button className="bg-primary text-white px-6 py-4 rounded-2xl font-bold text-sm shadow-lg shadow-primary/10 hover:opacity-90 transition-all">
              Join Room
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
