"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, History, Star } from "lucide-react";

const stats = [
  { label: "Active Bookings", value: "2", icon: Calendar, color: "bg-blue-500", text: "text-blue-600" },
  { label: "Hours of Care", value: "12.5", icon: Clock, color: "bg-indigo-500", text: "text-indigo-600" },
  { label: "Total Sessions", value: "24", icon: History, color: "bg-violet-500", text: "text-violet-600" },
  { label: "Reviews Written", value: "18", icon: Star, color: "bg-amber-500", text: "text-amber-600" },
];

export default function PatientStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="bg-white dark:bg-slate-900 p-6 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm"
        >
          <div className={`${stat.color} w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-black/5`}>
            <stat.icon size={20} />
          </div>
          <h4 className="text-2xl font-bold font-outfit mb-1">{stat.value}</h4>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
