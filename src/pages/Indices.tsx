export default function Indices() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tighter text-zinc-800">Global Indices</h2>
          <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest mt-1">Monitor world markets</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { name: 'IBEX 35', value: '10.145,30', change: '+1,24%', positive: true },
          { name: 'DAX 40', value: '17.842,50', change: '+0,42%', positive: true },
          { name: 'CAC 40', value: '8.045,21', change: '+0,18%', positive: true },
          { name: 'FTSE 100', value: '7.923,10', change: '-0,05%', positive: false },
          { name: 'S&P 500', value: '5.123,42', change: '+1,10%', positive: true },
          { name: 'NASDAQ 100', value: '18.234,10', change: '+1,45%', positive: true },
        ].map((index, i) => (
          <div key={i} className="bg-white p-6 border border-zinc-200 rounded-sm hover:shadow-sm transition-all">
            <div className="flex justify-between items-center mb-4">
              <h4 className="font-bold text-sm tracking-tight">{index.name}</h4>
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm ${index.positive ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-tertiary'}`}>
                {index.change}
              </span>
            </div>
            <p className="text-2xl font-extrabold tabular-nums tracking-tighter text-zinc-800">{index.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
