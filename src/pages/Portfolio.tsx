export default function Portfolio() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tighter text-zinc-800">Portfolio Overview</h2>
          <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest mt-1">Manage your investments</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white p-4 border border-zinc-200 rounded-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Total Value</p>
            <p className="text-xl font-bold tabular-nums text-zinc-800">€124,500.00</p>
          </div>
          <div className="bg-white p-4 border border-zinc-200 rounded-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-1">Total Return</p>
            <p className="text-xl font-bold tabular-nums text-emerald-600">+12.4%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 border border-zinc-200 rounded-sm">
          <h3 className="text-lg font-bold tracking-tight text-primary mb-6">Asset Allocation</h3>
          <div className="flex items-center gap-8">
            <div className="w-32 h-32 rounded-full border-8 border-primary border-r-emerald-500 border-b-tertiary"></div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span className="text-xs font-bold text-zinc-600">Stocks (65%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-xs font-bold text-zinc-600">Bonds (25%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-tertiary rounded-full"></div>
                <span className="text-xs font-bold text-zinc-600">Cash (10%)</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 border border-zinc-200 rounded-sm">
          <h3 className="text-lg font-bold tracking-tight text-primary mb-6">Recent Performance</h3>
          <div className="h-32 flex items-end gap-2">
            {[40, 60, 45, 70, 55, 80, 75].map((h, i) => (
              <div key={i} className="flex-1 bg-zinc-100 hover:bg-primary transition-colors rounded-sm" style={{ height: `${h}%` }}></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
