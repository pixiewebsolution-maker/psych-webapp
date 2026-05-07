"use client";

import { motion } from "framer-motion";
import { Users, Calendar, DollarSign, Award } from "lucide-react";

const stats = [
  { label: "Total Patients", value: "1,248", icon: Users, color: "bg-blue-500" },
  { label: "Today's Sessions", value: "6", icon: Calendar, color: "bg-indigo-500" },
  { label: "Revenue (MTD)", value: "$4,850", icon: DollarSign, color: "bg-emerald-500" },
  { label: "Avg. Rating", value: "4.92", icon: Award, color: "bg-amber-500" },
];

export default function DoctorStats() {
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
