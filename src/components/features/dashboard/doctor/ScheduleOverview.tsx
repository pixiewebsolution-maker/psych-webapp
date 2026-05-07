"use client";

export default function ScheduleOverview() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[3rem] border border-slate-100 dark:border-slate-800 p-10">
      <div className="grid grid-cols-7 gap-4">
        {days.map((day) => (
          <div key={day} className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">{day}</p>
            <div className="aspect-[2/3] bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50 flex flex-col items-center justify-center gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-50" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
        <p className="text-xs text-slate-500 font-medium">You have 12 active slots this week.</p>
        <button className="text-primary font-bold text-xs hover:underline">Edit Full Schedule</button>
      </div>
    </div>
  );
}
