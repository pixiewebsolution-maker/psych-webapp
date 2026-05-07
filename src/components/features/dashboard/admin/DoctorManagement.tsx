"use client";

const DOCTORS = [
  { name: "Dr. Sarah Johnson", status: "Active", special: "Clinical Psychiatry", appts: 450 },
  { name: "Dr. Michael Chen", status: "Active", special: "Child & Adolescent", appts: 320 },
  { name: "Dr. Emily Williams", status: "On Leave", special: "Addiction Specialist", appts: 210 },
];

export default function DoctorManagement() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">Doctor Name</th>
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">Specialization</th>
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">Status</th>
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">Total Apps</th>
              <th className="px-8 py-6 text-xs font-bold uppercase tracking-widest text-slate-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {DOCTORS.map((doc, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                <td className="px-8 py-6 font-bold text-slate-900 dark:text-white">{doc.name}</td>
                <td className="px-8 py-6 text-sm text-slate-500">{doc.special}</td>
                <td className="px-8 py-6">
                  <span className={`inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    doc.status === "Active" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
                  }`}>
                    {doc.status}
                  </span>
                </td>
                <td className="px-8 py-6 text-sm text-slate-500">{doc.appts}</td>
                <td className="px-8 py-6">
                  <button className="text-primary font-bold text-xs hover:underline">Manage</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
