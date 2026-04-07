import { ArrowDownRight, ArrowUpRight, CheckCircle2, ChevronDown, ChevronRight, Minus, MoreHorizontal } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="space-y-6 pb-8">
      
      {/* ================= SECTION 1: STATS CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm text-gray-400 font-medium">AI Signals Today</h3>
            <span className="text-gray-600 text-xs">•••</span>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-3xl font-bold text-white">48</p>
            <div className="w-16 h-8 bg-gradient-to-t from-green-500/10 to-transparent border-b-2 border-green-500 rounded-sm"></div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm text-gray-400 font-medium">Market Opportunities</h3>
            <span className="text-gray-600 text-xs">•••</span>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-3xl font-bold text-white">16</p>
            <div className="w-16 h-8 bg-gradient-to-t from-green-500/10 to-transparent border-b-2 border-green-500 rounded-sm"></div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm text-gray-400 font-medium">Active Markets</h3>
            <span className="text-gray-600 text-xs">•••</span>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-3xl font-bold text-white">134</p>
            <div className="w-16 h-8 bg-gradient-to-t from-green-500/10 to-transparent border-b-2 border-green-500 rounded-sm"></div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-5 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-sm text-gray-400 font-medium">AI Accuracy</h3>
            <span className="text-gray-600 text-xs">•••</span>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-3xl font-bold text-green-500">87%</p>
            <div className="w-16 h-8 bg-gradient-to-t from-green-500/10 to-transparent border-b-2 border-green-500 rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: MAIN GRID (LEFT & RIGHT) ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* -------- LEFT COLUMN (Takes 2/3 space) -------- */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Main Chart Box */}
          <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-5 min-h-[450px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-white">BTC / USDT</h2>
              <div className="flex gap-1 text-xs font-medium text-gray-500">
                {['1H', '4H', '1D', '1W', '1M'].map(tf => (
                  <button key={tf} className={`px-2.5 py-1 rounded-md transition-colors ${tf === '1D' ? 'bg-[#0b0e14] text-green-500 border border-gray-800' : 'hover:text-white'}`}>
                    {tf}
                  </button>
                ))}
                <button className="px-2.5 py-1 hover:text-white"><ChevronDown size={14} /></button>
              </div>
            </div>
            
            {/* Placeholder for Candlestick Chart */}
            <div className="flex-1 w-full flex flex-col items-center justify-center border border-dashed border-gray-700/50 rounded-lg bg-[#0b0e14]/30 relative overflow-hidden">
               <span className="text-gray-500 text-sm z-10 bg-[#151a23] px-4 py-2 rounded-lg border border-gray-800">
                 [ พื้นที่สำหรับใส่กราฟ TradingView / Recharts ]
               </span>
               {/* Mockup Chart Graphic (Just for visual) */}
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>
            </div>
          </div>

          {/* Market Intelligence Table */}
          <div className="bg-[#151a23] border border-gray-800/60 rounded-xl overflow-hidden">
            <div className="p-5 border-b border-gray-800/60 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-white">Market Intelligence</h2>
              <button className="text-gray-500"><MoreHorizontal size={18} /></button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-gray-500 bg-[#0b0e14]/50 border-b border-gray-800/60">
                  <tr>
                    <th className="px-5 py-3 font-medium">Asset <ChevronDown size={12} className="inline" /></th>
                    <th className="px-5 py-3 font-medium">Price <ChevronDown size={12} className="inline" /></th>
                    <th className="px-5 py-3 font-medium">Signal <ChevronDown size={12} className="inline" /></th>
                    <th className="px-5 py-3 font-medium">Confidence <ChevronDown size={12} className="inline" /></th>
                    <th className="px-5 py-3 font-medium">Trend <ChevronDown size={12} className="inline" /></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60">
                  {[
                    { asset: 'BTC', price: '$67,320', signal: 'BUY', conf: '77%', trend: 'up', color: 'text-orange-500' },
                    { asset: 'ETH', price: '$3,420', signal: 'HOLD', conf: '62%', trend: 'up', color: 'text-blue-400' },
                    { asset: 'SOL', price: '$191.20', signal: 'BUY', conf: '75%', trend: 'up', color: 'text-green-400' },
                    { asset: 'XRP', price: '$0.53', signal: 'SELL', conf: '68%', trend: 'down', color: 'text-gray-400' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-5 py-4 flex items-center gap-3 font-medium text-white">
                        <div className={`w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-[10px] ${row.color}`}>
                          {row.asset[0]}
                        </div>
                        {row.asset}
                      </td>
                      <td className="px-5 py-4 text-gray-300">{row.price}</td>
                      <td className="px-5 py-4">
                        <span className={`px-2.5 py-1 text-[11px] font-bold tracking-wider rounded-md ${
                          row.signal === 'BUY' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                          row.signal === 'SELL' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 
                          'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20'
                        }`}>
                          {row.signal}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-300">{row.conf}</td>
                      <td className="px-5 py-4">
                        <div className="flex gap-1">
                          {row.trend === 'up' ? <ArrowUpRight size={16} className="text-green-500" /> : <ArrowDownRight size={16} className="text-red-500" />}
                          <Minus size={16} className="text-gray-600" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>

        {/* -------- RIGHT COLUMN (Takes 1/3 space) -------- */}
        <div className="space-y-6">
          
          {/* AI Signal Feed */}
          <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-white">AI Signal Feed</h3>
              <div className="flex gap-2">
                <button className="text-gray-500 hover:text-white"><ChevronDown size={16} /></button>
                <button className="text-gray-500 hover:text-white"><MoreHorizontal size={16} /></button>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { text: 'SOL breakout pattern detected', prob: '85%' },
                { text: 'ETH liquidity shift detected', prob: '78%' },
                { text: 'BTC momentum phase', prob: '72%' },
                { text: 'LTC volume surge', prob: '64%' },
              ].map((signal, i) => (
                <div key={i} className="flex justify-between items-center bg-[#0b0e14] p-3 rounded-lg border border-gray-800/50">
                  <span className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-green-500" />
                    {signal.text}
                  </span>
                  <span className="text-green-500 font-semibold text-sm">{signal.prob}</span>
                </div>
              ))}
            </div>
          </div>

          {/* AI Market Insight */}
          <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-white">AI Market Insight</h3>
              <button className="text-gray-500 hover:text-white"><MoreHorizontal size={16} /></button>
            </div>
            <ul className="space-y-3">
              {[
                'Institutional inflows rising for BTC.',
                'Volatility squeeze expected in altcoins.',
                'Momentum indicators turning bullish.'
              ].map((insight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></span>
                  {insight}
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Mini Widgets Grid */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Portfolio Mini Widget */}
            <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-4 flex flex-col justify-between h-36 relative overflow-hidden">
              <div className="flex justify-between items-center z-10">
                <h4 className="text-sm font-semibold text-white">Portfolio</h4>
                <button className="text-gray-500 hover:text-white"><MoreHorizontal size={14} /></button>
              </div>
              <div className="z-10 mt-2">
                 <div className="flex items-center gap-2 mb-1">
                   <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center text-[10px]">P</div>
                   <span className="text-xs text-gray-400">Active Bal</span>
                 </div>
                 <div className="flex items-end justify-between">
                   <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                     <ArrowUpRight size={12} /> 3.8%
                   </span>
                 </div>
              </div>
              {/* Fake Graph */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-green-500/20 to-transparent border-t border-green-500/30"></div>
            </div>

            {/* AI Adviser Mini Widget */}
            <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-4 flex flex-col justify-between h-36">
               <div className="flex justify-between items-center">
                 <h4 className="text-sm font-semibold text-white">AI Adviser</h4>
                 <ChevronRight size={14} className="text-gray-500" />
               </div>
               <div>
                 <div className="flex justify-between items-center mb-2">
                   <span className="text-xs text-gray-400">Market News</span>
                   <span className="text-xs text-gray-500">+</span>
                 </div>
                 <div className="flex items-end gap-1 h-8">
                   {/* Fake mini bars */}
                   {[40, 70, 45, 90, 60, 30, 80].map((h, i) => (
                     <div key={i} className="w-full bg-green-500/50 rounded-t-sm" style={{ height: `${h}%` }}></div>
                   ))}
                 </div>
               </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}