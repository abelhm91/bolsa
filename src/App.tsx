import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import MobileMenu from './components/MobileMenu';
import Dashboard from './pages/Dashboard';
import Watchlist from './pages/Watchlist';
import Portfolio from './pages/Portfolio';
import Orders from './pages/Orders';
import Reports from './pages/Reports';
import Indices from './pages/Indices';
import Analysis from './pages/Analysis';
import Sectors from './pages/Sectors';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen overflow-hidden bg-background">
        <Sidebar />
        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
        
        <main className="flex-1 flex flex-col min-w-0">
          <TopBar onMenuClick={() => setIsMobileMenuOpen(true)} />
          
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/watchlist" element={<Watchlist />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/indices" element={<Indices />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/sectors" element={<Sectors />} />
            </Routes>
          </div>

          {/* Footer Ticker */}
          <footer className="flex-shrink-0 h-10 bg-zinc-200 flex items-center overflow-hidden whitespace-nowrap border-t border-zinc-300">
            <div className="flex gap-12 animate-scroll px-8">
              {[1, 2].map((i) => (
                <div key={i} className="flex gap-12">
                  <TickerItem label="DAX" value="17.842,50" change="+0,42%" positive />
                  <TickerItem label="CAC 40" value="8.045,21" change="+0,18%" positive />
                  <TickerItem label="FTSE 100" value="7.923,10" change="-0,05%" positive={false} />
                  <TickerItem label="S&P 500" value="5.123,42" change="+1,10%" positive />
                  <TickerItem label="EUR/USD" value="1,0842" change="-0,02%" positive={false} />
                  <TickerItem label="GOLD" value="2.145,20" change="+0,85%" positive />
                </div>
              ))}
            </div>
          </footer>
        </main>
      </div>
    </Router>
  );
}

function TickerItem({ label, value, change, positive }: { label: string, value: string, change: string, positive: boolean }) {
  return (
    <span className="text-[10px] font-bold tracking-tight">
      <span className="text-zinc-500 mr-2">{label}</span>
      <span className="tabular-nums mr-2">{value}</span>
      <span className={positive ? 'text-emerald-600' : 'text-tertiary'}>{change}</span>
    </span>
  );
}
