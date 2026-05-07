import { Suspense } from "react";
import DoctorStats from "@/components/features/dashboard/doctor/DoctorStats";
import AppointmentRequests from "@/components/features/dashboard/doctor/AppointmentRequests";
import ScheduleOverview from "@/components/features/dashboard/doctor/ScheduleOverview";
import SkeletonCard from "@/components/shared/SkeletonCard";

export const metadata = {
  title: "Doctor Dashboard | Ethera",
};

export default function DoctorDashboard() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 font-outfit">Welcome, Dr. Johnson</h1>
          <p className="text-slate-500">Manage your practice, schedule, and patient consultations.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
            Update Availability
          </button>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
            New Patient Record
          </button>
        </div>
      </div>

      <DoctorStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 font-outfit flex items-center gap-3">
              Pending Requests
              <span className="w-6 h-6 bg-amber-500 text-white text-[10px] rounded-full flex items-center justify-center">5</span>
            </h2>
            <Suspense fallback={<SkeletonCard />}>
              <AppointmentRequests />
            </Suspense>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 font-outfit">Weekly Schedule</h2>
            <Suspense fallback={<SkeletonCard />}>
              <ScheduleOverview />
            </Suspense>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-xl mb-8">Practice Insights</h3>
            <div className="space-y-6">
              <div className="p-6 rounded-[2rem] bg-blue-50 dark:bg-blue-900/10 border border-blue-100/50">
                <p className="text-sm font-bold text-blue-600 mb-1 uppercase tracking-widest">Total Patients</p>
                <h4 className="text-3xl font-bold">1,248</h4>
                <div className="mt-4 flex items-center gap-2 text-green-600 text-xs font-bold">
                  <span>+12% from last month</span>
                </div>
              </div>
              <div className="p-6 rounded-[2rem] bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100/50">
                <p className="text-sm font-bold text-indigo-600 mb-1 uppercase tracking-widest">Avg. Rating</p>
                <h4 className="text-3xl font-bold">4.92</h4>
                <div className="mt-4 flex items-center gap-2 text-indigo-600 text-xs font-bold">
                  <span>Based on 850 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
