"use client";

import { Search, MapPin, Globe, Star, Wallet, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DoctorSearchFilters() {
  return (
    <div className="space-y-8 sticky top-32">
      <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm">
        <h3 className="font-bold text-xl mb-6 font-outfit">Refine Search</h3>
        
        <div className="space-y-6">
          {/* Search */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Search Name</label>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Dr. Name..." 
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Specialization */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Specialization</label>
            <select className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 px-4 text-sm focus:ring-2 focus:ring-primary/20 appearance-none">
              <option>All Specializations</option>
              <option>Clinical Psychiatry</option>
              <option>Child & Adolescent</option>
              <option>Addiction Specialist</option>
              <option>Geriatric Psychiatry</option>
            </select>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Location</label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="City or zip..." 
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>

          {/* Rating */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Minimum Rating</label>
            <div className="flex gap-2">
              {[3, 4, 4.5].map((r) => (
                <button key={r} className="flex-1 py-2 bg-slate-50 dark:bg-slate-800 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all">
                  {r}+ <Star size={10} className="inline ml-1" />
                </button>
              ))}
            </div>
          </div>

          {/* Fee Range */}
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Fee Range</label>
            <div className="pt-2">
              <input type="range" className="w-full accent-primary" min="50" max="500" />
              <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2">
                <span>$50</span>
                <span>$500</span>
              </div>
            </div>
          </div>
        </div>

        <Button className="w-full mt-8 rounded-2xl h-14 font-bold">
          Apply Filters
        </Button>
        <button className="w-full mt-4 text-xs font-bold text-slate-400 hover:text-primary transition-colors">
          Reset All Filters
        </button>
      </div>

      <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-xl shadow-primary/20">
        <h4 className="font-bold text-lg mb-2">Need Help?</h4>
        <p className="text-blue-100 text-xs leading-relaxed mb-6">Our patient care team can help you find the right specialist.</p>
        <button className="bg-white text-primary w-full py-3 rounded-xl font-bold text-xs hover:bg-blue-50 transition-colors">
          Chat with Us
        </button>
      </div>
    </div>
  );
}
