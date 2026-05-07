import { Suspense } from "react";
import PatientStats from "@/components/features/dashboard/patient/PatientStats";
import UpcomingAppointments from "@/components/features/dashboard/patient/UpcomingAppointments";
import AppointmentHistory from "@/components/features/dashboard/patient/AppointmentHistory";
import SkeletonCard from "@/components/shared/SkeletonCard";

export const metadata = {
  title: "Patient Dashboard | Ethera",
};

export default function PatientDashboard() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 font-outfit">Welcome back, John</h1>
          <p className="text-slate-500">Manage your mental wellness journey and upcoming consultations.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors">
            Manage Profile
          </button>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
            Book New Session
          </button>
        </div>
      </div>

      <PatientStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 font-outfit flex items-center gap-3">
              Upcoming Consultations
              <span className="w-6 h-6 bg-primary text-white text-[10px] rounded-full flex items-center justify-center">2</span>
            </h2>
            <Suspense fallback={<SkeletonCard />}>
              <UpcomingAppointments />
            </Suspense>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 font-outfit">Appointment History</h2>
            <Suspense fallback={<SkeletonCard />}>
              <AppointmentHistory />
            </Suspense>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-xl mb-8">Quick Actions</h3>
            <div className="space-y-4">
              {['Reschedule Appointment', 'View Medical Records', 'Contact Support', 'Privacy Settings'].map((action) => (
                <button key={action} className="w-full text-left p-5 rounded-2xl border border-slate-50 dark:border-slate-800 hover:border-primary/20 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all font-medium text-slate-700 dark:text-slate-300">
                  {action}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
