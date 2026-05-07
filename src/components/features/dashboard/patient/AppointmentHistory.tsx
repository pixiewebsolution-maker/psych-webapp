"use client";

import { CheckCircle2, Star } from "lucide-react";

const HISTORY = [
  {
    doctor: "Dr. Emily Williams",
    date: "Apr 20, 2026",
    status: "Completed",
    rating: 5,
  },
  {
    doctor: "Dr. Sarah Johnson",
    date: "Mar 15, 2026",
    status: "Completed",
    rating: 4,
  },
  {
    doctor: "Dr. Michael Chen",
    date: "Feb 10, 2026",
    status: "Cancelled",
    rating: null,
  },
];

export default function AppointmentHistory() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">Doctor</th>
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">Date</th>
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">Status</th>
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">Rating</th>
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {HISTORY.map((item, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                <td className="px-8 py-6 font-bold text-slate-900 dark:text-white">{item.doctor}</td>
                <td className="px-8 py-6 text-sm text-slate-500">{item.date}</td>
                <td className="px-8 py-6">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    item.status === "Completed" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"
                  }`}>
                    {item.status === "Completed" && <CheckCircle2 size={12} />}
                    {item.status}
                  </span>
                </td>
                <td className="px-8 py-6">
                  {item.rating ? (
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className={i < item.rating! ? "fill-amber-400 text-amber-400" : "text-slate-200"} />
                      ))}
                    </div>
                  ) : "-"}
                </td>
                <td className="px-8 py-6">
                  <button className="text-primary font-bold text-xs hover:underline">
                    {item.status === "Completed" ? "Write Review" : "View Reason"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
