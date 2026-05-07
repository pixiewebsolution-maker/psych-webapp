"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Heart, 
  Zap, 
  Users, 
  ShieldAlert, 
  Moon, 
  Dna,
  Search
} from "lucide-react";

const categories = [
  { name: "Anxiety", icon: ShieldAlert, color: "bg-blue-500" },
  { name: "Depression", icon: Heart, color: "bg-indigo-500" },
  { name: "ADHD", icon: Zap, color: "bg-amber-500" },
  { name: "Relationships", icon: Users, color: "bg-rose-500" },
  { name: "Addiction", icon: Dna, color: "bg-emerald-500" },
  { name: "Trauma", icon: Brain, color: "bg-violet-500" },
  { name: "Sleep", icon: Moon, color: "bg-slate-700" },
];

export default function Categories() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">Specialized Care for Every Mind</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Whatever you're facing, our experts are here to help you navigate through it with tailored sessions and specialized expertise.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-slate-800 p-8 rounded-[2.5rem] shadow-sm group-hover:shadow-2xl group-hover:shadow-primary/5 transition-all flex flex-col items-center border border-transparent group-hover:border-primary/10">
                <div className={`${cat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-black/5`}>
                  <cat.icon className="w-7 h-7" />
                </div>
                <span className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-primary transition-colors">{cat.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            <span>Explore all 15+ specializations</span>
            <Search size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
