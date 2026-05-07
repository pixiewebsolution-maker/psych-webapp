export default function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm animate-pulse">
      <div className="flex items-center gap-6 mb-8">
        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-3xl" />
        <div className="flex-1 space-y-3">
          <div className="h-6 bg-slate-100 dark:bg-slate-800 rounded-full w-2/3" />
          <div className="h-4 bg-slate-50 dark:bg-slate-800/50 rounded-full w-1/3" />
        </div>
      </div>
      <div className="space-y-4 mb-8">
        <div className="h-3 bg-slate-50 dark:bg-slate-800/50 rounded-full w-full" />
        <div className="h-3 bg-slate-50 dark:bg-slate-800/50 rounded-full w-full" />
        <div className="h-3 bg-slate-50 dark:bg-slate-800/50 rounded-full w-4/5" />
      </div>
      <div className="h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl w-full" />
    </div>
  );
}
