"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I choose the right psychiatrist?",
    answer: "You can browse profiles by specialization, experience, and patient reviews. Our search filters help you find someone who matches your specific needs, language preferences, and budget.",
  },
  {
    question: "Is my data secure and private?",
    answer: "Absolutely. We use enterprise-grade encryption and are fully HIPAA compliant. Your medical records, session details, and personal information are strictly confidential and stored on secure servers.",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer: "Yes, you can reschedule your appointment once for free via your dashboard. Cancellations are allowed up to 24 hours before the scheduled time for a full refund.",
  },
  {
    question: "How long are the consultation sessions?",
    answer: "Standard consultation slots are 30 minutes long. We find this allows for focused, high-quality care. If more time is needed, you can book consecutive slots or follow-up sessions.",
  },
  {
    question: "What if I have an emergency?",
    answer: "Ethera is for scheduled consultations. If you are experiencing a mental health emergency, please contact your local emergency services or a crisis hotline immediately. We provide a list of resources in your dashboard.",
  },
];

function FAQItem({ item, isOpen, onClick }: { item: typeof faqs[0], isOpen: boolean, onClick: () => void }) {
  return (
    <div className="border-b border-slate-100 dark:border-slate-800 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className={`text-xl font-bold transition-all duration-300 ${isOpen ? 'text-primary pl-2' : 'text-slate-900 dark:text-slate-200'}`}>
          {item.question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-slate-600 dark:text-slate-400 leading-relaxed text-lg pl-2">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold font-outfit mb-8 text-slate-900 dark:text-white leading-[1.1]">
              Frequently Asked <br/> <span className="premium-gradient-text">Questions.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-md leading-relaxed mb-12">
              Everything you need to know about our platform and how we can help you on your journey towards better mental health.
            </p>
            <div className="p-10 bg-slate-900 dark:bg-slate-800 rounded-[3rem] text-white relative overflow-hidden group">
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-all duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
                  <MessageCircle size={28} />
                </div>
                <h4 className="font-bold text-2xl mb-3">Still have questions?</h4>
                <p className="text-slate-400 mb-8 leading-relaxed">Our specialized support team is here to help you 24/7 with any medical or technical queries.</p>
                <button className="w-full bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all shadow-lg">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-800/30 p-8 md:p-14 rounded-[4rem] border border-slate-100 dark:border-slate-700/50 shadow-2xl shadow-blue-900/5">
            {faqs.map((item, index) => (
              <FAQItem 
                key={index} 
                item={item} 
                isOpen={openIndex === index} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
