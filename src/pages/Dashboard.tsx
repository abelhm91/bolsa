import StockCard from '../components/StockCard';
import { SECTOR_PERFORMANCE, MARKET_INSIGHTS } from '../constants';
import { Landmark, Bolt, ShoppingBag } from 'lucide-react';
import { useMarketData } from '../hooks/useMarketData';

const iconMap: Record<string, any> = {
  Landmark,
  Bolt,
  ShoppingBag,
};

export default function Dashboard() {
  const stocks = useMarketData();

  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-8 rounded-sm flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="space-y-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-zinc-100 text-[10px] font-bold px-2 py-0.5 tracking-widest text-primary">INDEX</span>
              <span className="text-zinc-400 text-xs font-medium tabular-nums uppercase">Real-time update • 14:32:05</span>
            </div>
            <h2 className="text-5xl font-extrabold tracking-tighter tabular-nums text-zinc-800">10.145,30</h2>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold tabular-nums text-lg">+124,50</span>
              <span className="text-emerald-600 font-bold tabular-nums text-lg bg-emerald-50 px-2 py-0.5 rounded-sm">(+1,24%)</span>
            </div>
          </div>
          
          <div className="w-full md:w-64 h-32 mt-6 md:mt-0">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 100 40">
              <path 
                d="M0 35 L10 32 L20 34 L30 28 L40 30 L50 20 L60 22 L70 15 L80 18 L90 10 L100 5" 
                fill="none" 
                stroke="#5f5e5e" 
                strokeWidth="1.5" 
              />
              <path 
                d="M0 35 L10 32 L20 34 L30 28 L40 30 L50 20 L60 22 L70 15 L80 18 L90 10 L100 5 L100 40 L0 40 Z" 
                fill="url(#gradient)" 
                opacity="0.05" 
              />
              <defs>
                <linearGradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#5f5e5e', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#5f5e5e', stopOpacity: 0 }} />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="bg-zinc-100 p-8 rounded-sm flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-1">Volume 24h</p>
              <p className="text-xl font-bold tabular-nums text-zinc-800">€842,5M</p>
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-1">Turnover</p>
              <p className="text-xl font-bold tabular-nums text-zinc-800">1,24B Shares</p>
            </div>
          </div>
          
          <div className="pt-4 border-t border-zinc-200">
            <p className="text-[10px] uppercase font-bold tracking-widest text-zinc-500 mb-2">Market Breath</p>
            <div className="flex h-1.5 w-full bg-zinc-200 rounded-full overflow-hidden">
              <div className="bg-emerald-500 w-[65%]"></div>
              <div className="bg-zinc-400 w-[10%]"></div>
              <div className="bg-tertiary w-[25%]"></div>
            </div>
            <div className="flex justify-between mt-2 text-[10px] font-bold tabular-nums">
              <span className="text-emerald-600">23 ADV</span>
              <span className="text-tertiary">9 DEC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Instruments Grid */}
      <section>
        <div className="flex items-baseline justify-between mb-6">
          <h3 className="text-lg font-bold tracking-tight text-primary">Major Instruments</h3>
          <a className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 hover:text-primary transition-colors" href="#">View All Components</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stocks.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      </section>

      {/* Bottom Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-bold tracking-tight text-primary">Sector Performance</h3>
          <div className="space-y-4">
            {SECTOR_PERFORMANCE.map((sector) => {
              const Icon = iconMap[sector.icon];
              return (
                <div key={sector.name} className="flex items-center justify-between p-4 bg-zinc-100 rounded-sm">
                  <div className="flex items-center gap-4 w-1/4">
                    <Icon className="w-5 h-5 text-zinc-400" />
                    <span className="text-sm font-bold tracking-tight">{sector.name}</span>
                  </div>
                  <div className="flex-1 px-8">
                    <div className="relative h-2 bg-zinc-200 rounded-full">
                      <div 
                        className={`absolute h-full rounded-full ${sector.isPositive ? 'bg-emerald-400 left-1/2' : 'bg-tertiary/60 right-1/2'}`}
                        style={{ width: `${Math.abs(sector.performance) * 10}%`, [sector.isPositive ? 'left' : 'right']: '50%' }}
                      />
                      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-1 h-4 bg-zinc-400 rounded-full" />
                    </div>
                  </div>
                  <div className="w-20 text-right">
                    <span className={`${sector.isPositive ? 'text-emerald-600' : 'text-tertiary'} font-bold tabular-nums text-sm`}>
                      {sector.isPositive ? '+' : ''}{sector.performance}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold tracking-tight text-primary">Market Insights</h3>
          <div className="space-y-6">
            {MARKET_INSIGHTS.map((news, idx) => (
              <div key={idx} className="group cursor-pointer">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">
                  {news.category} • {news.time}
                </p>
                <h5 className="text-sm font-bold leading-snug group-hover:underline underline-offset-4">
                  {news.title}
                </h5>
              </div>
            ))}
            <button className="w-full py-3 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:opacity-90 transition-opacity mt-4">
              Generate Full Report
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
