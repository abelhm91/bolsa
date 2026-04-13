import { useState, useMemo, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { Stock } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { generateMockData, TIMEFRAMES } from '../utils/chartUtils';

interface StockCardProps {
  stock: Stock;
  key?: string;
}

export default function StockCard({ stock }: StockCardProps) {
  const [timeframe, setTimeframe] = useState('1D');
  const [isExpanded, setIsExpanded] = useState(false);
  const [flash, setFlash] = useState<'up' | 'down' | null>(null);
  const prevPriceRef = useRef(stock.price);

  useEffect(() => {
    if (prevPriceRef.current !== stock.price) {
      const prev = parseFloat(prevPriceRef.current.replace(',', '.'));
      const curr = parseFloat(stock.price.replace(',', '.'));
      
      if (curr > prev) setFlash('up');
      else if (curr < prev) setFlash('down');
      
      const timer = setTimeout(() => setFlash(null), 1000);
      prevPriceRef.current = stock.price;
      return () => clearTimeout(timer);
    }
  }, [stock.price]);

  const chartData = useMemo(() => {
    const basePrice = parseFloat(stock.price.replace(',', '.'));
    const points = timeframe === '1D' ? 24 : timeframe === '5D' ? 40 : 60;
    const volatility = basePrice * 0.01;
    // We use a stable seed based on the symbol to keep the chart somewhat consistent
    return generateMockData(basePrice, points, volatility);
  }, [stock.symbol, timeframe]); // Removed stock.price to prevent jumpy charts on every tick

  const chartColor = stock.isPositive ? '#10b981' : '#bb1b21';

  return (
    <motion.div 
      layout
      className={`bg-white p-6 rounded-sm hover:shadow-md transition-all duration-300 group flex flex-col relative overflow-hidden ${
        stock.isAlert ? 'border-2 border-tertiary/20' : 'border border-transparent'
      } ${isExpanded ? 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-2' : ''}`}
    >
      <AnimatePresence>
        {flash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            className={`absolute inset-0 pointer-events-none ${flash === 'up' ? 'bg-emerald-500' : 'bg-tertiary'}`}
          />
        )}
      </AnimatePresence>

      <div className="flex justify-between items-start mb-4 relative z-10">
        <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <h4 className="font-bold text-sm tracking-tight group-hover:text-primary transition-colors">
            {stock.name}
          </h4>
          <p className="text-[10px] font-medium text-zinc-400">{stock.symbol}</p>
        </div>
        <div className="flex items-center gap-1.5">
          {stock.isAlert && (
            <div className="flex items-center gap-1">
              <motion.div 
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-tertiary rounded-full" 
              />
              <span className="text-[9px] font-bold text-tertiary uppercase hidden sm:inline">Alert</span>
            </div>
          )}
          <Star className="w-4 h-4 text-zinc-300 cursor-pointer hover:text-primary transition-colors" />
        </div>
      </div>
      
      <div className="flex justify-between items-end mb-4 relative z-10">
        <div className="space-y-1">
          <motion.p 
            key={stock.price}
            initial={{ y: flash === 'up' ? -5 : flash === 'down' ? 5 : 0, opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            className={`text-2xl font-bold tabular-nums tracking-tighter transition-colors duration-300 ${
              flash === 'up' ? 'text-emerald-600' : flash === 'down' ? 'text-tertiary' : 'text-zinc-800'
            }`}
          >
            {stock.price}
          </motion.p>
          <div className="flex items-center gap-2">
            <span className={`${stock.isPositive ? 'text-emerald-600' : 'text-tertiary'} text-xs font-bold tabular-nums`}>
              {stock.change}
            </span>
            <span className={`${stock.isPositive ? 'text-emerald-600 bg-emerald-50' : 'text-tertiary bg-red-50'} text-[10px] font-bold tabular-nums px-1`}>
              {stock.changePercent}
            </span>
          </div>
        </div>

        <div className="flex gap-1">
          {TIMEFRAMES.map((tf) => (
            <button
              key={tf}
              onClick={(e) => {
                e.stopPropagation();
                setTimeframe(tf);
                setIsExpanded(true);
              }}
              className={`text-[9px] font-bold px-1.5 py-0.5 rounded-sm transition-colors ${
                timeframe === tf 
                  ? 'bg-primary text-white' 
                  : 'text-zinc-400 hover:bg-zinc-100'
              }`}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className={`w-full transition-all duration-500 relative z-10 ${isExpanded ? 'h-48 mt-4' : 'h-12 opacity-40 group-hover:opacity-100'}`}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={`gradient-${stock.symbol}`} x1="0" y1="0" x2="0" y2="100%">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
              </linearGradient>
            </defs>
            {isExpanded && (
              <>
                <XAxis 
                  dataKey="time" 
                  hide 
                />
                <YAxis 
                  hide 
                  domain={['auto', 'auto']} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    border: 'none', 
                    borderRadius: '2px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    fontSize: '10px',
                    fontWeight: 'bold'
                  }}
                  itemStyle={{ color: chartColor }}
                  labelStyle={{ color: '#94a3b8', marginBottom: '2px' }}
                />
              </>
            )}
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke={chartColor} 
              strokeWidth={2}
              fillOpacity={1} 
              fill={`url(#gradient-${stock.symbol})`}
              isAnimationActive={true}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {isExpanded && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsExpanded(false)}
          className="mt-4 text-[10px] font-bold text-zinc-400 hover:text-primary uppercase tracking-widest self-center relative z-10"
        >
          Collapse View
        </motion.button>
      )}
    </motion.div>
  );
}
