"use client";

import { Check, X, User } from "lucide-react";

const REQUESTS = [
  { name: "Emily Brown", type: "Initial Consult", time: "Tomorrow, 10:00 AM" },
  { name: "Robert Wilson", type: "Follow-up", time: "Tomorrow, 11:30 AM" },
  { name: "Jessica Garcia", type: "Clinical Therapy", time: "May 14, 02:00 PM" },
];

export default function AppointmentRequests() {
  return (
    <div className="space-y-4">
      {REQUESTS.map((req, idx) => (
        <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex items-center gap-6 group hover:border-primary/20 transition-all">
          <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400">
            <User size={24} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-900 dark:text-white">{req.name}</h4>
            <p className="text-xs text-slate-500 font-medium">{req.type} • {req.time}</p>
          </div>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-xl border border-red-100 text-red-500 flex items-center justify-center hover:bg-red-50 transition-colors">
              <X size={18} />
            </button>
            <button className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
              <Check size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
