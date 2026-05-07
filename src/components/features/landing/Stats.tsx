"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Licensed Doctors", value: "250+" },
  { label: "Successful Consultations", value: "50k+" },
  { label: "Patient Satisfaction", value: "99.2%" },
  { label: "Support Available", value: "24/7" },
];

export default function Stats() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 dark:text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
