export default function Reports() {
  return (
    <div className="p-8 space-y-8 max-w-[1400px] mx-auto w-full">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tighter text-zinc-800">Financial Reports</h2>
          <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest mt-1">Download and analyze your data</p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: 'Annual Tax Statement', date: '2025', size: '2.4 MB' },
          { title: 'Monthly Portfolio Summary', date: 'March 2026', size: '1.1 MB' },
          { title: 'Transaction History', date: 'Q1 2026', size: '4.8 MB' },
        ].map((report, i) => (
          <div key={i} className="bg-white p-6 border border-zinc-200 rounded-sm hover:shadow-sm transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-zinc-100 flex items-center justify-center rounded-sm group-hover:bg-primary/10 transition-colors">
                <span className="text-primary font-bold">PDF</span>
              </div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{report.size}</span>
            </div>
            <h4 className="font-bold text-sm tracking-tight mb-1">{report.title}</h4>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">{report.date}</p>
            <button className="w-full py-2 bg-zinc-100 text-primary font-bold text-[10px] uppercase tracking-widest rounded-sm hover:bg-primary hover:text-white transition-all">
              Download Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
