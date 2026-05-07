"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Patient",
    content: "Ethera changed how I view therapy. The interface is calming, and finding the right doctor was incredibly easy. I finally feel like my mental health is a priority.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "Patient",
    content: "The booking process is seamless. I love that I can see the doctor's availability in real-time without any back-and-forth. The security features give me real peace of mind.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Michael Roberts",
    role: "Patient",
    content: "A premium experience from start to finish. It feels like a platform that actually cares about my mental well-being, not just another healthcare app.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=michael",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">Trusted by Thousands</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Hear from our community about their journey towards mental clarity and wellness through the Ethera platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-800/40 p-10 rounded-[3rem] border border-slate-100 dark:border-slate-700/50 relative group hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="absolute top-10 right-10 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={64} />
              </div>
              <div className="flex gap-1.5 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-10 italic text-lg leading-relaxed relative z-10">
                "{t.content}"
              </p>
              <div className="flex items-center gap-5">
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-2 border-white dark:border-slate-700 object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">{t.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
