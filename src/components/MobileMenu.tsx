import { 
  LayoutDashboard, 
  Star, 
  Wallet, 
  ArrowLeftRight, 
  FileText, 
  Landmark,
  X,
  TrendingUp,
  PieChart,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink } from 'react-router-dom';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Star, label: 'Watchlist', path: '/watchlist' },
  { icon: Wallet, label: 'Portfolio', path: '/portfolio' },
  { icon: ArrowLeftRight, label: 'Orders', path: '/orders' },
  { icon: FileText, label: 'Reports', path: '/reports' },
];

const topNavItems = [
  { icon: TrendingUp, label: 'Indices', path: '/indices' },
  { icon: PieChart, label: 'Analysis', path: '/analysis' },
  { icon: Layers, label: 'Sectors', path: '/sectors' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          />
          
          {/* Menu Panel */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-72 bg-surface-container z-50 lg:hidden flex flex-col p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
                  <Landmark className="text-white w-5 h-5" />
                </div>
                <h2 className="text-primary font-bold text-sm tracking-tight">IBEX 35</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 text-zinc-500 hover:bg-zinc-200 transition-colors rounded-sm"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-8">
              <section>
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4 px-3">Main Navigation</p>
                <nav className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-3 transition-all duration-200 rounded-sm ${
                          isActive 
                            ? 'bg-white text-primary shadow-sm' 
                            : 'text-zinc-500 hover:bg-zinc-200'
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="uppercase tracking-widest text-[10px] font-bold">{item.label}</span>
                    </NavLink>
                  ))}
                </nav>
              </section>

              <section>
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4 px-3">Market Insights</p>
                <nav className="flex flex-col gap-1">
                  {topNavItems.map((item) => (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) => 
                        `flex items-center gap-3 px-3 py-3 transition-all duration-200 rounded-sm ${
                          isActive 
                            ? 'bg-white text-primary shadow-sm' 
                            : 'text-zinc-500 hover:bg-zinc-200'
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="uppercase tracking-widest text-[10px] font-bold">{item.label}</span>
                    </NavLink>
                  ))}
                </nav>
              </section>
            </div>

            <div className="mt-auto pt-6 border-t border-zinc-200">
              <div className="px-3 py-4 bg-zinc-200/50 rounded-sm">
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
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
