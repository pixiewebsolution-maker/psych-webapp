"use client";

import Link from "next/link";
import { BrainCircuit, Twitter, Instagram, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "Find a Doctor", href: "/doctors" },
        { name: "How it Works", href: "/#how-it-works" },
        { name: "Pricing", href: "/pricing" },
        { name: "FAQs", href: "/faq" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Mental Health Blog", href: "/blog" },
        { name: "Patient Guides", href: "/guides" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Support", href: "/support" },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-8 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                <BrainCircuit className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold font-outfit tracking-tight text-slate-900 dark:text-white">
                Ethera
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed mb-10 max-w-sm">
              Empowering mental wellness through accessible, premium care. Connect with licensed psychiatrists in a space designed for clarity and calm.
            </p>
            <div className="flex gap-5">
              {[Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  whileHover={{ y: -4 }}
                  className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/20 transition-colors shadow-sm"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              {footerLinks.map((group) => (
                <div key={group.title}>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-8 text-lg">{group.title}</h4>
                  <ul className="space-y-5">
                    {group.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href} 
                          className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors flex items-center group/link"
                        >
                          {link.name}
                          <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-y-0 group-hover/link:translate-x-0 transition-all" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-10 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
              <Mail size={32} />
            </div>
            <div>
              <h4 className="font-bold text-xl text-slate-900 dark:text-white mb-1">Stay updated</h4>
              <p className="text-slate-500 dark:text-slate-400">Join our newsletter for mental health insights.</p>
            </div>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 text-lg w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
            <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
              Join
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-sm font-medium">
            © {currentYear} Ethera Inc. All rights reserved. Built for clarity.
          </p>
          <div className="flex gap-8 text-sm font-medium text-slate-400">
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Security</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
