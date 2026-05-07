import { Suspense } from "react";
import DoctorSearchFilters from "@/components/features/doctors/DoctorSearchFilters";
import DoctorList from "@/components/features/doctors/DoctorList";
import SkeletonCard from "@/components/shared/SkeletonCard";

export const metadata = {
  title: "Discover Doctors | Ethera",
  description: "Find the right psychiatrist for your needs.",
};

export default function DoctorsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Specialists</h1>
        <p className="text-slate-500 text-lg max-w-2xl">
          Browse our curated list of licensed psychiatrists and find the perfect match for your mental wellness journey.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <DoctorSearchFilters />
        </div>

        {/* Doctor List */}
        <div className="lg:col-span-3">
          <Suspense fallback={<div className="grid grid-cols-1 md:grid-cols-2 gap-6"><SkeletonCard /><SkeletonCard /><SkeletonCard /><SkeletonCard /></div>}>
            <DoctorList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
