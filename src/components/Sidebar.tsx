import { 
  LayoutDashboard, 
  Star, 
  Wallet, 
  ArrowLeftRight, 
  FileText, 
  Landmark 
} from 'lucide-react';
import { motion } from 'motion/react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Star, label: 'Watchlist' },
  { icon: Wallet, label: 'Portfolio' },
  { icon: ArrowLeftRight, label: 'Orders' },
  { icon: FileText, label: 'Reports' },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col h-screen w-64 bg-surface-container border-r-0 py-8 px-4 gap-2">
      <div className="mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm">
            <Landmark className="text-white w-6 h-6" />
          </div>
          <div>
            <h2 className="text-primary font-bold text-sm tracking-tight">IBEX 35</h2>
            <p className="uppercase tracking-widest text-[10px] font-bold text-zinc-500">Madrid SE</p>
          </div>
        </div>
      </div>

      <nav className="flex flex-col gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 px-3 py-2.5 transition-all duration-200 rounded-sm ${
              item.active 
                ? 'bg-white text-primary shadow-sm' 
                : 'text-zinc-500 hover:bg-zinc-200'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="uppercase tracking-widest text-[10px] font-bold">{item.label}</span>
          </a>
        ))}
      </nav>

      <div className="mt-auto px-3 py-4 bg-zinc-200/50 rounded-sm">
        <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-2">Market Status</p>
        <div className="flex items-center gap-2">
          <motion.span 
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
          />
          <span className="text-[11px] font-bold text-zinc-600">OPEN</span>
        </div>
      </div>
    </aside>
  );
}
