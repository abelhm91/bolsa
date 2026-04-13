export default function Sectors() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tighter text-zinc-800">Sector Breakdown</h2>
          <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest mt-1">Performance by industry</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'Financial Services', performance: '+2,15%', weight: '24%', color: 'bg-emerald-500' },
          { name: 'Energy & Utilities', performance: '-0,82%', weight: '18%', color: 'bg-tertiary' },
          { name: 'Consumer Goods', performance: '-0,11%', weight: '15%', color: 'bg-zinc-400' },
          { name: 'Technology', performance: '+1,45%', weight: '12%', color: 'bg-emerald-400' },
          { name: 'Real Estate', performance: '+0,32%', weight: '10%', color: 'bg-emerald-300' },
          { name: 'Healthcare', performance: '+0,12%', weight: '8%', color: 'bg-emerald-200' },
        ].map((sector, i) => (
          <div key={i} className="bg-white p-6 border border-zinc-200 rounded-sm hover:shadow-sm transition-all">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-bold text-sm tracking-tight">{sector.name}</h4>
              <span className={`text-[10px] font-bold ${sector.performance.startsWith('+') ? 'text-emerald-600' : 'text-tertiary'}`}>
                {sector.performance}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1 h-2 bg-zinc-100 rounded-full overflow-hidden">
                <div className={`h-full ${sector.color}`} style={{ width: sector.weight }}></div>
              </div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{sector.weight}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
