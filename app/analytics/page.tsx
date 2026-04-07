import { Activity, ArrowUpRight, BarChart3, Star } from 'lucide-react';

export default function AnalyticsContent() {
  return (
    <div className="flex-1 p-8 bg-[#0e1015] overflow-y-auto text-gray-300 font-sans h-full">
      
      {/* Page Header & Main Tabs */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-white mb-1">Analytics</h1>
        <p className="text-sm text-gray-400 mb-6">Advanced analytics and market trends powered by AI</p>
        
        <div className="flex space-x-6 border-b border-[#1e222d] pb-2 text-sm font-medium">
          <button className="text-green-400 border-b-2 border-green-400 pb-2 -mb-[10px]">Overview</button>
          <button className="text-gray-400 hover:text-white transition pb-2">Performance</button>
          <button className="text-gray-400 hover:text-white transition pb-2">Market Trends</button>
          <button className="text-gray-400 hover:text-white transition pb-2">AI Accuracy</button>
        </div>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-[#14171d] rounded-xl border border-[#1e222d] p-5">
          <div className="text-sm text-gray-400 mb-2">Total Market Cap</div>
          <div className="flex items-end space-x-3">
            <div className="text-2xl font-bold text-white">$2.41T</div>
            <div className="flex items-center text-green-400 text-sm font-medium mb-1">
              +5.8% <ArrowUpRight className="w-4 h-4 ml-0.5" />
            </div>
          </div>
        </div>
        
        <div className="bg-[#14171d] rounded-xl border border-[#1e222d] p-5">
          <div className="text-sm text-gray-400 mb-2">Total Volume 24h</div>
          <div className="flex items-end space-x-3">
            <div className="text-2xl font-bold text-white">$98B</div>
            <div className="flex items-center text-green-400 text-sm font-medium mb-1">
              +18.2% <ArrowUpRight className="w-4 h-4 ml-0.5" />
            </div>
          </div>
        </div>

        <div className="bg-[#14171d] rounded-xl border border-[#1e222d] p-5 flex justify-between items-center">
          <div>
            <div className="text-sm text-gray-400 mb-2">AI-Identified Trades</div>
            <div className="flex items-end space-x-3">
              <div className="text-2xl font-bold text-white">2,583</div>
              <div className="text-green-400 text-sm font-medium mb-1">+328</div>
            </div>
          </div>
          <div className="flex items-center space-x-1 bg-[#1a1f26] px-3 py-1.5 rounded-lg border border-[#2a2f3a]">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-white font-bold text-lg">72%</span>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {['All Markets', 'Layer1', 'DeFi', 'AI Tokens', 'Memecoins', 'Gaming'].map((tab, i) => (
          <button 
            key={tab} 
            className={`px-4 py-1.5 text-sm rounded-md transition ${i === 0 ? 'bg-[#1a1f26] text-white border border-[#2a2f3a]' : 'text-gray-400 hover:bg-[#1a1f26] hover:text-white'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Left Column (Charts) */}
        <div className="xl:col-span-8 flex flex-col space-y-6">
          
          {/* Market Overview Chart */}
          <div className="bg-[#14171d] rounded-xl border border-[#1e222d] p-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg text-white font-medium">Market Overview</h2>
              <div className="flex space-x-2 text-gray-500">
                <button className="hover:text-white"><BarChart3 className="w-4 h-4" /></button>
                <button className="hover:text-white"><Activity className="w-4 h-4" /></button>
              </div>
            </div>
            
            {/* Chart Mockup Area */}
            <div className="relative h-64 border-b border-[#1e222d] mb-4 bg-gradient-to-t from-green-900/10 to-transparent">
              {/* Y-Axis Labels Mockup */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[10px] text-gray-500 py-2">
                <span>$2.54T</span><span>$2.44T</span><span>$2.33T</span><span>$2.24T</span>
              </div>
              
              {/* Fake Line Chart */}
              <svg className="w-full h-full pl-10" preserveAspectRatio="none">
                <polyline fill="none" stroke="#4ade80" strokeWidth="1.5" points="0,150 50,120 100,140 150,110 200,130 250,90 300,100 400,60 500,40 600,70 700,20 800,30" />
              </svg>

              {/* Tooltip Mockup */}
              <div className="absolute right-1/4 top-1/4 bg-[#1a1f26] border border-[#2a2f3a] rounded-lg p-3 shadow-lg z-10">
                <div className="text-xs text-gray-400 mb-1">Mar 17, 2024</div>
                <div className="flex items-center space-x-2">
                  <span className="text-white font-semibold">$2.39T</span>
                  <span className="text-green-400 text-xs font-medium">+4.1%</span>
                </div>
                <div className="text-[10px] text-gray-500 mt-1">24h Volume</div>
              </div>
            </div>

            {/* Inner Pills & Volume Bars Mockup */}
            <div className="flex space-x-2 overflow-x-auto text-[10px] text-gray-500 mb-2 no-scrollbar">
               <span className="bg-[#1a1f26] px-2 py-1 rounded text-white">All</span>
               <span className="px-2 py-1">Layer1</span>
               <span className="px-2 py-1">DeFi</span>
               <span className="px-2 py-1">AI Tokens</span>
               <span className="px-2 py-1">Memecoins</span>
            </div>
            <div className="h-12 flex items-end justify-between pl-10 opacity-50 space-x-1">
               {/* Volume bars mockup */}
               {Array.from({ length: 40 }).map((_, i) => (
                 <div key={i} className="flex-1 bg-green-500/30 rounded-t-sm" style={{ height: `${Math.random() * 80 + 20}%` }}></div>
               ))}
            </div>
          </div>

          {/* Bottom Row Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Sector Dominance */}
            <div className="bg-[#14171d] rounded-xl border border-[#1e222d] p-5">
              <h2 className="text-lg text-white font-medium mb-6">Sector Dominance</h2>
              <div className="flex items-center justify-between">
                {/* Donut Chart Mockup */}
                <div className="relative w-32 h-32 rounded-full flex items-center justify-center border-[8px] border-t-[#3b82f6] border-r-[#8b5cf6] border-b-[#10b981] border-l-[#f59e0b]">
                   <div className="absolute inset-0 rounded-full border-[8px] border-transparent border-t-[#a855f7] rotate-45"></div>
                   <div className="bg-[#14171d] w-20 h-20 rounded-full flex items-center justify-center z-10 shadow-inner">
                     <span className="text-xl font-bold text-white">35%</span>
                   </div>
                </div>
                
                {/* Legend */}
                <div className="space-y-2 text-xs">
                  <LegendItem color="bg-[#10b981]" label="DeFi" value="25%" />
                  <LegendItem color="bg-[#f59e0b]" label="Layer1" value="29%" />
                  <LegendItem color="bg-[#3b82f6]" label="Memecoins" value="11%" />
                  <LegendItem color="bg-[#8b5cf6]" label="AI Tokens" value="14%" />
                  <LegendItem color="bg-[#a855f7]" label="Gaming" value="6%" />
                </div>
              </div>
            </div>

            {/* Exchange Flows */}
            <div className="bg-[#14171d] rounded-xl border border-[#1e222d] p-5">
               <div className="flex justify-between items-center mb-4">
                 <h2 className="text-lg text-white font-medium">Exchange Flows</h2>
               </div>
               <div className="relative h-28 border-b border-[#1e222d] mb-2">
                 <svg className="w-full h-full" preserveAspectRatio="none">
                    <polyline fill="none" stroke="#4ade80" strokeWidth="1.5" points="0,80 50,70 100,75 150,50 200,60 250,30 300,40" />
                 </svg>
               </div>
               <div className="h-10 flex items-end justify-between opacity-50 space-x-0.5">
                 {Array.from({ length: 30 }).map((_, i) => (
                   <div key={i} className="flex-1 bg-green-500/20 rounded-t-sm" style={{ height: `${Math.random() * 60 + 20}%` }}></div>
                 ))}
               </div>
            </div>

          </div>
        </div>

        {/* Right Column (Lists) */}
        <div className="xl:col-span-4 flex flex-col space-y-6">
          
          {/* Top Gainers */}
          <div className="bg-[#14171d] rounded-xl border border-[#1e222d] p-5">
            <h2 className="text-lg text-white font-medium mb-4">Top Gainers</h2>
            <div className="space-y-4">
              <CoinListItem symbol="SOL" change="+6.1%" isUp={true} />
              <CoinListItem symbol="RNDR" change="+5.9%" isUp={true} />
              <CoinListItem symbol="INJ" change="+5.4%" isUp={true} />
              <CoinListItem symbol="LINK" change="+5.1%" isUp={true} />
              <CoinListItem symbol="RAY" change="+4.9%" isUp={true} />
            </div>
          </div>

          {/* Top Losers */}
          <div className="bg-[#14171d] rounded-xl border border-[#1e222d] p-5">
            <h2 className="text-lg text-white font-medium mb-4">Top Losers</h2>
            <div className="space-y-4">
              <CoinListItem symbol="FIL" change="-4.2%" isUp={false} />
              <CoinListItem symbol="AKT" change="-3.6%" isUp={false} />
              <CoinListItem symbol="SUI" change="-3.2%" isUp={false} />
              <CoinListItem symbol="MANTA" change="-3.1%" isUp={false} />
              <CoinListItem symbol="PEPE" change="-3.0%" isUp={false} />
            </div>
          </div>

          {/* Most Active Pairs */}
          <div className="bg-[#14171d] rounded-xl border border-[#1e222d] p-5">
            <h2 className="text-lg text-white font-medium mb-4">Most Active Pairs</h2>
            <div className="space-y-4 text-sm">
              <PairListItem pair="BTC / USDT" volume="$5.91B" />
              <PairListItem pair="ETH / USDT" volume="$3.14B" />
              <PairListItem pair="SOL / USDT" volume="$1.19B" />
              <PairListItem pair="INJ / USDT" volume="$750M" />
              <PairListItem pair="LINK / USDT" volume="$630M" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// --- Helper Components ---

const LegendItem = ({ color, label, value }: { color: string, label: string, value: string }) => (
  <div className="flex items-center justify-between w-28">
    <div className="flex items-center space-x-2">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <span className="text-gray-400">{label}</span>
    </div>
    <span className="text-white font-medium">{value}</span>
  </div>
);

const CoinListItem = ({ symbol, change, isUp }: { symbol: string, change: string, isUp: boolean }) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <div className="flex items-center space-x-3 w-1/3">
      <div className={`w-1.5 h-1.5 rounded-full ${isUp ? 'bg-green-500' : 'bg-red-500'}`}></div>
      <span className="text-white text-sm group-hover:text-blue-400 transition-colors">{symbol}</span>
    </div>
    
    {/* Mini Sparkline Mockup */}
    <div className="w-16 h-4 opacity-70">
      <svg className="w-full h-full" preserveAspectRatio="none">
        <polyline 
          fill="none" 
          stroke={isUp ? "#4ade80" : "#f87171"} 
          strokeWidth="1.5" 
          points={isUp ? "0,10 10,8 20,12 30,5 40,2" : "0,2 10,5 20,3 30,10 40,12"} 
        />
      </svg>
    </div>

    <div className={`text-sm w-1/4 text-right font-medium ${isUp ? 'text-green-400' : 'text-red-400'}`}>
      {change}
    </div>
  </div>
);

const PairListItem = ({ pair, volume }: { pair: string, volume: string }) => (
  <div className="flex items-center justify-between group cursor-pointer hover:bg-[#1a1f26] -mx-2 px-2 py-1 rounded transition-colors">
    <div className="flex items-center space-x-2">
      <div className="w-4 h-4 bg-gray-700 rounded-full flex items-center justify-center text-[8px] text-white font-bold">
        {pair.charAt(0)}
      </div>
      <span className="text-gray-300">{pair}</span>
    </div>
    <span className="text-white font-medium">{volume}</span>
  </div>
);