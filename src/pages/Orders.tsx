export default function Orders() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tighter text-zinc-800">Orders History</h2>
          <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest mt-1">Track your trading activity</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-primary text-white px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
            Buy
          </button>
          <button className="bg-tertiary text-white px-4 py-2 rounded-sm font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-opacity">
            Sell
          </button>
        </div>
      </div>

      <div className="bg-white border border-zinc-200 rounded-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-zinc-50 border-b border-zinc-200">
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Date</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Type</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Instrument</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Quantity</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Price</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Total</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            <tr className="hover:bg-zinc-50 transition-colors">
              <td className="px-6 py-4 text-xs font-bold tabular-nums">12/04/2026</td>
              <td className="px-6 py-4 text-xs font-bold text-emerald-600 uppercase tracking-widest">BUY</td>
              <td className="px-6 py-4 font-bold text-sm">Inditex (ITX.MC)</td>
              <td className="px-6 py-4 text-xs font-bold tabular-nums">100</td>
              <td className="px-6 py-4 text-xs font-bold tabular-nums">45,1200</td>
              <td className="px-6 py-4 text-xs font-bold tabular-nums">€4,512.00</td>
              <td className="px-6 py-4">
                <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest">Executed</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
