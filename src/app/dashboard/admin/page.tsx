import { Suspense } from "react";
import GlobalStats from "@/components/features/dashboard/admin/GlobalStats";
import DoctorManagement from "@/components/features/dashboard/admin/DoctorManagement";
import SystemAnalytics from "@/components/features/dashboard/admin/SystemAnalytics";
import SkeletonCard from "@/components/shared/SkeletonCard";

export const metadata = {
  title: "Admin Dashboard | Ethera",
};

export default function AdminDashboard() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 font-outfit">System Overview</h1>
          <p className="text-slate-500">Global analytics, doctor management, and platform control.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all">
            System Settings
          </button>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
            Add New Doctor
          </button>
        </div>
      </div>

      <GlobalStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-6 font-outfit">Manage Medical Professionals</h2>
            <Suspense fallback={<SkeletonCard />}>
              <DoctorManagement />
            </Suspense>
          </div>
        </div>

        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-[3rem] p-10 border border-slate-100 dark:border-slate-800 shadow-sm">
            <h3 className="font-bold text-xl mb-8">Platform Health</h3>
            <Suspense fallback={<div className="h-40 bg-slate-50 rounded-2xl animate-pulse" />}>
              <SystemAnalytics />
            </Suspense>
          </div>
          
          <div className="p-10 bg-primary rounded-[3rem] text-white">
            <h4 className="font-bold text-xl mb-2">Audit Logs</h4>
            <p className="text-blue-100 text-sm mb-6">Review system actions and security events.</p>
            <button className="w-full bg-white text-primary py-4 rounded-2xl font-bold text-base hover:bg-blue-50 transition-colors">
              View All Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
