import Hero from "@/components/features/landing/Hero";
import Stats from "@/components/features/landing/Stats";
import Categories from "@/components/features/landing/Categories";
import FeaturedDoctors from "@/components/features/landing/FeaturedDoctors";
import Testimonials from "@/components/features/landing/Testimonials";
import FAQ from "@/components/features/landing/FAQ";
import { CheckCircle2, Calendar, Search, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      
      <Stats />
      
      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="aspect-square bg-blue-50 dark:bg-blue-900/10 rounded-[4rem] overflow-hidden rotate-3 scale-95 transition-transform hover:rotate-0 hover:scale-100 duration-700">
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="relative w-full h-full bg-white dark:bg-slate-800 rounded-[3rem] shadow-2xl p-10 flex flex-col justify-between border border-slate-100 dark:border-slate-700">
                      <div className="flex justify-between items-start">
                        <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                          <CheckCircle2 size={28} />
                        </div>
                        <div className="space-y-3">
                          <div className="w-40 h-2.5 bg-slate-100 dark:bg-slate-700 rounded-full" />
                          <div className="w-28 h-2.5 bg-slate-50 dark:bg-slate-700/50 rounded-full" />
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="w-full h-16 bg-slate-50 dark:bg-slate-700 rounded-2xl flex items-center px-6">
                          <div className="w-5 h-5 bg-green-400 rounded-full mr-4" />
                          <div className="w-52 h-2.5 bg-slate-200 dark:bg-slate-600 rounded-full" />
                        </div>
                        <div className="w-full h-16 bg-slate-50 dark:bg-slate-700 rounded-2xl flex items-center px-6">
                          <div className="w-5 h-5 bg-blue-400 rounded-full mr-4" />
                          <div className="w-64 h-2.5 bg-slate-200 dark:bg-slate-600 rounded-full" />
                        </div>
                      </div>
                      <div className="w-full h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary font-bold">
                        Secure Connection Established
                      </div>
                   </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-10 -right-4 bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-700 max-w-[240px] z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-slate-900 dark:text-white">HIPAA Compliant</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">Your privacy and data security are our top priorities.</p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold font-outfit leading-[1.1] text-slate-900 dark:text-white mb-6">
                  Mental Wellness Designed for the <span className="premium-gradient-text">Modern World.</span>
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                  We've rebuilt the psychiatry experience from the ground up. No more waiting lists, outdated forms, or complex booking systems. Just world-class care at your fingertips.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: "Vetted Experts", desc: "Rigorous vetting for all medical professionals." },
                  { title: "Simple Booking", desc: "Confirm your slot in under 60 seconds." },
                  { title: "Private & Secure", desc: "End-to-end encryption for all records." },
                  { title: "Insurance Ready", desc: "Seamless billing for major providers." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base">{item.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Button size="lg" className="rounded-2xl px-10 h-16 font-bold text-lg shadow-xl shadow-primary/20">
                  Our Methodology
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Categories />
      
      <FeaturedDoctors />

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-[100px]" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-20">Three Simple Steps to Clarity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-16 left-[15%] right-[15%] h-0.5 bg-slate-200 dark:bg-slate-800 -z-10" />
            
            {[
              { icon: Search, title: "Discover", desc: "Browse our curated list of licensed psychiatrists and filter by your specific needs." },
              { icon: Calendar, title: "Schedule", desc: "Select a 30-minute slot that fits your lifestyle. No back-and-forth emails required." },
              { icon: CheckCircle2, title: "Consult", desc: "Meet your doctor in our secure video room and start your journey towards wellness." },
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-32 h-32 bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl flex items-center justify-center mb-8 text-primary border border-slate-100 dark:border-slate-700 group hover:bg-primary hover:text-white transition-all duration-500">
                  <step.icon className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4 font-outfit">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-[280px] mx-auto text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      
      <FAQ />

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 dark:bg-primary rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[100px]" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold font-outfit text-white mb-10 leading-tight">Ready to Prioritize Your <br/> Mental Well-being?</h2>
              <p className="text-blue-100 text-xl mb-14 max-w-2xl mx-auto leading-relaxed">
                Join thousands of patients who have found peace of mind and professional care through the Ethera platform.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <Link href="/register">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 rounded-[2rem] h-20 px-12 text-xl font-bold shadow-2xl shadow-black/20">
                    Get Started Now
                  </Button>
                </Link>
                <Link href="/doctors">
                  <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 rounded-[2rem] h-20 px-12 text-xl font-bold group">
                    Browse Doctors
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
