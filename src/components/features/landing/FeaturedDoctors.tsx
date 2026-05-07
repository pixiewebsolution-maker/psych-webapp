"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const featuredDoctors = [
  {
    name: "Dr. Sarah Johnson",
    specialization: "Clinical Psychiatry",
    rating: 4.9,
    reviews: 124,
    fee: 180,
    availability: "Tomorrow",
    image: "https://i.pravatar.cc/150?u=sarah",
    slug: "dr-sarah-johnson",
  },
  {
    name: "Dr. Michael Chen",
    specialization: "Child & Adolescent",
    rating: 4.8,
    reviews: 89,
    fee: 210,
    availability: "Today",
    image: "https://i.pravatar.cc/150?u=michael",
    slug: "dr-michael-chen",
  },
  {
    name: "Dr. Emily Williams",
    specialization: "Addiction Specialist",
    rating: 4.9,
    reviews: 156,
    fee: 195,
    availability: "Mon, 12 May",
    image: "https://i.pravatar.cc/150?u=emily",
    slug: "dr-emily-williams",
  },
];

export default function FeaturedDoctors() {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">World-Class Specialists</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl text-lg">
              Our psychiatrists are rigorously vetted and leaders in their respective fields of mental health.
            </p>
          </div>
          <Link href="/doctors">
            <Button variant="outline" className="rounded-xl h-12 px-6 group font-bold">
              View All Doctors
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDoctors.map((doc, index) => (
            <motion.div
              key={doc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-slate-50 dark:bg-slate-800/40 rounded-[2.5rem] overflow-hidden border border-slate-100 dark:border-slate-700/50 hover:shadow-2xl hover:shadow-primary/5 transition-all"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1 shadow-sm">
                  <Star size={14} className="fill-amber-400 text-amber-400" />
                  <span className="text-xs font-bold text-slate-900 dark:text-white">{doc.rating}</span>
                  <span className="text-[10px] text-slate-500">({doc.reviews})</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                      {doc.name}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium">{doc.specialization}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary">${doc.fee}</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Session</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-8 text-slate-500 dark:text-slate-400 text-xs font-medium">
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    <span>{doc.availability}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span>London, UK</span>
                  </div>
                </div>

                <Link href={`/doctors/${doc.slug}`}>
                  <Button className="w-full rounded-2xl h-14 font-bold text-base shadow-lg shadow-primary/10">
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
