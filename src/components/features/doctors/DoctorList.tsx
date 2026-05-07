"use client";

import { motion } from "framer-motion";
import { Star, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MOCK_DOCTORS = [
  {
    name: "Dr. Sarah Johnson",
    specialization: "Clinical Psychiatry",
    rating: 4.9,
    reviews: 124,
    experience: 12,
    location: "London, UK",
    fee: 180,
    image: "https://i.pravatar.cc/150?u=sarah",
    slug: "dr-sarah-johnson",
  },
  {
    name: "Dr. Michael Chen",
    specialization: "Child & Adolescent",
    rating: 4.8,
    reviews: 89,
    experience: 8,
    location: "Manchester, UK",
    fee: 210,
    image: "https://i.pravatar.cc/150?u=michael",
    slug: "dr-michael-chen",
  },
  {
    name: "Dr. Emily Williams",
    specialization: "Addiction Specialist",
    rating: 4.9,
    reviews: 156,
    experience: 15,
    location: "Birmingham, UK",
    fee: 195,
    image: "https://i.pravatar.cc/150?u=emily",
    slug: "dr-emily-williams",
  },
  {
    name: "Dr. David Smith",
    specialization: "Geriatric Psychiatry",
    rating: 4.7,
    reviews: 64,
    experience: 20,
    location: "Leeds, UK",
    fee: 175,
    image: "https://i.pravatar.cc/150?u=david",
    slug: "dr-david-smith",
  },
];

export default function DoctorList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {MOCK_DOCTORS.map((doc, index) => (
        <motion.div
          key={doc.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="group bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/5 transition-all"
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="relative">
              <img 
                src={doc.image} 
                alt={doc.name} 
                className="w-20 h-20 rounded-3xl object-cover border-2 border-white dark:border-slate-800 shadow-xl"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white dark:border-slate-900 rounded-full" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {doc.name}
              </h3>
              <p className="text-sm text-slate-500 font-medium">{doc.specialization}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium">
              <Star className="fill-amber-400 text-amber-400" size={14} />
              <span className="text-slate-900 dark:text-white font-bold">{doc.rating}</span>
              <span>({doc.reviews})</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium">
              <Clock size={14} />
              <span>{doc.experience} Years</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium">
              <MapPin size={14} />
              <span>{doc.location}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-xs font-medium">
              <span className="font-bold text-primary">${doc.fee}</span>
              <span>/ session</span>
            </div>
          </div>

          <Link href={`/doctors/${doc.slug}`}>
            <Button className="w-full rounded-2xl h-14 font-bold text-base shadow-lg shadow-primary/5 group-hover:shadow-primary/20 transition-all">
              View Profile
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
