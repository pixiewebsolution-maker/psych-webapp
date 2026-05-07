"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Hero() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 dark:bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/50 dark:bg-indigo-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 text-blue-600 dark:text-blue-400 text-sm font-bold mb-8"
          >
            <Sparkles size={16} />
            <span>The New Standard in Mental Wellness</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-outfit tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]"
          >
            Find Clarity and Calm with <span className="premium-gradient-text">Ethera.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Connecting you with world-class psychiatrists in a secure, minimal, and premium environment designed for your peace of mind.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-3xl mx-auto"
          >
            <div className="bg-white dark:bg-slate-900 p-2 md:p-3 rounded-[2.5rem] shadow-2xl shadow-blue-900/10 dark:shadow-black/50 border border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center gap-2">
              <div className="flex-1 flex items-center px-6 w-full">
                <Search className="text-slate-400 mr-3 shrink-0" size={20} />
                <input 
                  type="text" 
                  placeholder="Search by specialization or doctor name..." 
                  className="w-full h-12 bg-transparent border-none focus:ring-0 text-slate-900 dark:text-white text-lg placeholder:text-slate-400"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
              <div className="flex items-center px-6 w-full md:w-auto">
                <MapPin className="text-slate-400 mr-3 shrink-0" size={20} />
                <span className="text-slate-600 dark:text-slate-400 whitespace-nowrap">Online & Local</span>
              </div>
              <Button className="w-full md:w-auto h-14 px-8 rounded-[1.8rem] text-lg font-bold shadow-lg shadow-primary/25">
                Discover
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-100">
              {['Vetted Professionals', 'Secure Sessions', 'HIPAA Compliant', 'No Waitlist'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating UI Elements for decoration */}
      <motion.div 
        animate={{ y: [0, -10, 0] }} 
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[5%] hidden lg:block"
      >
        <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-4">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
            <Calendar size={24} />
          </div>
          <div>
            <p className="text-xs text-slate-400">Next Availability</p>
            <p className="text-sm font-bold">Today, 2:30 PM</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
