import { Search, Bell, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function TopBar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 w-full bg-background border-b-0">
      <div className="flex items-center gap-8">
        <h1 className="text-xl font-bold tracking-tighter text-primary">Bolsa Española</h1>
        <nav className="hidden lg:flex items-center gap-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors pb-1 ${
                isActive ? 'text-primary border-b-2 border-primary' : 'text-zinc-500 hover:text-primary'
              }`
            }
          >
            Market
          </NavLink>
          <NavLink 
            to="/indices" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors pb-1 ${
                isActive ? 'text-primary border-b-2 border-primary' : 'text-zinc-500 hover:text-primary'
              }`
            }
          >
            Indices
          </NavLink>
          <NavLink 
            to="/analysis" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors pb-1 ${
                isActive ? 'text-primary border-b-2 border-primary' : 'text-zinc-500 hover:text-primary'
              }`
            }
          >
            Analysis
          </NavLink>
          <NavLink 
            to="/sectors" 
            className={({ isActive }) => 
              `text-sm font-medium transition-colors pb-1 ${
                isActive ? 'text-primary border-b-2 border-primary' : 'text-zinc-500 hover:text-primary'
              }`
            }
          >
            Sectors
          </NavLink>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <input 
            className="bg-zinc-100 border-none focus:ring-1 focus:ring-primary/30 text-sm py-2 pl-10 pr-4 w-64 rounded-sm transition-all outline-none" 
            placeholder="Search instruments..." 
            type="text"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
        </div>
        
        <div className="flex items-center gap-1">
          <button className="p-2 text-zinc-500 hover:bg-zinc-200 transition-colors rounded-sm">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-zinc-500 hover:bg-zinc-200 transition-colors rounded-sm">
            <Settings className="w-5 h-5" />
          </button>
        </div>

        <div className="h-8 w-8 bg-zinc-200 rounded-sm overflow-hidden ml-2">
          <img 
            alt="User profile" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
            src="https://picsum.photos/seed/analyst/100/100" 
          />
        </div>
      </div>
    </header>
  );
}
