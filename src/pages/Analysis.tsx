export default function Analysis() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tighter text-zinc-800">Market Analysis</h2>
          <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest mt-1">Expert insights and technical data</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 border border-zinc-200 rounded-sm">
          <h3 className="text-lg font-bold tracking-tight text-primary mb-6">Technical Indicators</h3>
          <div className="space-y-4">
            {[
              { label: 'RSI (14)', value: '62.4', status: 'Neutral' },
              { label: 'MACD', value: '0.12', status: 'Bullish' },
              { label: 'Moving Average (50)', value: '9.842', status: 'Support' },
            ].map((indicator, i) => (
              <div key={i} className="flex justify-between items-center p-4 bg-zinc-50 rounded-sm">
                <span className="text-sm font-bold text-zinc-600">{indicator.label}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-bold tabular-nums">{indicator.value}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{indicator.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 border border-zinc-200 rounded-sm">
          <h3 className="text-lg font-bold tracking-tight text-primary mb-6">Expert Sentiment</h3>
          <div className="flex items-center justify-center h-48">
            <div className="relative w-48 h-24 overflow-hidden">
              <div className="absolute inset-0 border-[16px] border-zinc-100 rounded-t-full"></div>
              <div className="absolute inset-0 border-[16px] border-emerald-500 rounded-t-full" style={{ clipPath: 'polygon(0 0, 75% 0, 75% 100%, 0 100%)' }}></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 w-1 h-20 bg-primary origin-bottom -rotate-45"></div>
            </div>
          </div>
          <p className="text-center text-sm font-bold text-zinc-600 mt-4 uppercase tracking-widest">Strong Buy</p>
        </div>
      </div>
    </div>
  );
}
