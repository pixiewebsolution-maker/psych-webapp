"use client";

export default function SystemAnalytics() {
  return (
    <div className="space-y-6">
      {[
        { label: "Server Load", value: "24%", color: "bg-green-500" },
        { label: "API Response", value: "120ms", color: "bg-blue-500" },
        { label: "Storage Used", value: "68%", color: "bg-amber-500" },
      ].map((item) => (
        <div key={item.label} className="space-y-2">
          <div className="flex justify-between text-xs font-bold text-slate-500 uppercase tracking-widest">
            <span>{item.label}</span>
            <span>{item.value}</span>
          </div>
          <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className={`h-full ${item.color} rounded-full`} style={{ width: item.value.includes('%') ? item.value : '40%' }} />
          </div>
        </div>
      ))}
      <div className="pt-4 mt-8 border-t border-slate-100 dark:border-slate-800">
        <button className="w-full text-xs font-bold text-primary hover:underline">View System Reports</button>
      </div>
    </div>
  );
}
