import { Star } from 'lucide-react';

export default function Watchlist() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tighter text-zinc-800">My Watchlist</h2>
          <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest mt-1">Track your favorite instruments</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
          Add Instrument
        </button>
      </div>

      <div className="bg-white border border-zinc-200 rounded-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50 border-b border-zinc-200">
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Instrument</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Price</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Change</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Market Cap</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            <tr className="hover:bg-zinc-50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <div>
                    <p className="font-bold text-sm">Santander</p>
                    <p className="text-[10px] text-zinc-400">SAN.MC</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 font-bold tabular-nums">3,8450</td>
              <td className="px-6 py-4 text-emerald-600 font-bold tabular-nums">+1,10%</td>
              <td className="px-6 py-4 tabular-nums">€62,4B</td>
              <td className="px-6 py-4">
                <button className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-tertiary transition-colors">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
