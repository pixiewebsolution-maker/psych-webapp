"use client";

import { Star, ThumbsUp, User } from "lucide-react";
import { motion } from "framer-motion";

const MOCK_REVIEWS = [
  {
    name: "Alex Thompson",
    rating: 5,
    date: "2 weeks ago",
    comment: "Excellent care. Dr. Johnson really took the time to understand my situation and provided a very clear path forward. Highly professional and compassionate.",
    likes: 12,
  },
  {
    name: "Sarah Chen",
    rating: 5,
    date: "1 month ago",
    comment: "The best psychiatrist I've seen. Very knowledgeable about modern treatments and made me feel comfortable from the very first minute.",
    likes: 8,
  },
];

export default function ReviewSection({ doctorId }: { doctorId: string }) {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-outfit">Patient Reviews</h2>
        <button className="text-primary font-bold text-sm hover:underline">Write a Review</button>
      </div>

      <div className="space-y-6">
        {MOCK_REVIEWS.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-slate-400">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{review.name}</h4>
                  <p className="text-xs text-slate-400 font-medium">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"} />
                ))}
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 italic">
              "{review.comment}"
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-primary transition-colors">
                <ThumbsUp size={14} />
                Helpful ({review.likes})
              </button>
              <button className="text-xs font-bold text-slate-400 hover:text-primary transition-colors">Report</button>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full py-6 rounded-[2rem] border border-dashed border-slate-200 dark:border-slate-800 text-slate-400 font-bold hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all">
        View More Reviews
      </button>
    </div>
  );
}
