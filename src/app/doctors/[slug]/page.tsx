import { notFound } from "next/navigation";
import { Star, Clock, MapPin, ShieldCheck, Calendar, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingCalendar from "@/components/features/booking/BookingCalendar";
import ReviewSection from "@/components/features/doctors/ReviewSection";

// This is a server component that would fetch from DB in a real app
async function getDoctorBySlug(slug: string) {
  // In a real app, this would be: await db.doctorProfiles.findOne({ slug }).populate('user')
  // Mocking for the demo
  return {
    name: "Dr. Sarah Johnson",
    slug: "dr-sarah-johnson",
    specialization: "Clinical Psychiatry",
    experience: 12,
    hospital: "St. Mary’s Wellness Center",
    location: "London, UK",
    languages: ["English", "Spanish"],
    bio: "Dr. Sarah Johnson is a board-certified psychiatrist with over 12 years of experience in treating clinical depression, anxiety disorders, and ADHD. She believes in a holistic approach that combines evidence-based medical treatments with compassionate psychotherapeutic techniques.",
    education: ["MD from Oxford University", "Residency at Maudsley Hospital"],
    certifications: ["Board Certified by RC Psych", "Fellow of the American Psychiatric Association"],
    fee: 180,
    rating: 4.9,
    reviewCount: 124,
    image: "https://i.pravatar.cc/150?u=sarah",
  };
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doctor = await getDoctorBySlug(params.slug);
  if (!doctor) return { title: "Doctor Not Found" };
  return {
    title: `${doctor.name} | ${doctor.specialization} | Ethera`,
    description: doctor.bio,
  };
}

export default async function DoctorProfilePage({ params }: { params: { slug: string } }) {
  const doctor = await getDoctorBySlug(params.slug);

  if (!doctor) notFound();

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Info */}
        <div className="lg:col-span-8">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="relative">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-32 h-32 md:w-48 md:h-48 rounded-[2.5rem] object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
                />
                <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-xl shadow-lg">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h1 className="text-3xl md:text-5xl font-bold">{doctor.name}</h1>
                  <div className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                    {doctor.specialization}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-6 text-slate-500 mb-8">
                  <div className="flex items-center gap-2">
                    <Star className="fill-amber-400 text-amber-400" size={18} />
                    <span className="font-bold text-slate-900 dark:text-white">{doctor.rating}</span>
                    <span className="text-sm">({doctor.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    <span className="text-sm">{doctor.experience} Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    <span className="text-sm">{doctor.location}</span>
                  </div>
                </div>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {doctor.bio}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                  <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <Info size={18} className="text-primary" />
                      Education
                    </h4>
                    <ul className="space-y-2 text-slate-500 text-sm">
                      {doctor.education.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-4 flex items-center gap-2">
                      <ShieldCheck size={18} className="text-primary" />
                      Certifications
                    </h4>
                    <ul className="space-y-2 text-slate-500 text-sm">
                      {doctor.certifications.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review Section */}
          <ReviewSection doctorId={doctor.slug} />
        </div>

        {/* Right Column: Booking */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <div className="bg-slate-900 dark:bg-slate-800 text-white rounded-[3rem] p-10 shadow-2xl border border-white/5 overflow-hidden group">
              <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[80px]" />
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <p className="text-blue-300 text-xs uppercase tracking-widest font-bold mb-1">Consultation Fee</p>
                    <h3 className="text-4xl font-bold">${doctor.fee}</h3>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Calendar size={32} />
                  </div>
                </div>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4 text-sm text-blue-100">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <Clock size={16} />
                    </div>
                    <span>30-minute private session</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-blue-100">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                      <ShieldCheck size={16} />
                    </div>
                    <span>Secure & Encrypted Session</span>
                  </div>
                </div>

                <BookingCalendar doctorId={doctor.slug} fee={doctor.fee} />
                
                <p className="text-[10px] text-center text-blue-300/50 mt-6 uppercase tracking-tighter">
                  By booking, you agree to our terms and cancellation policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
