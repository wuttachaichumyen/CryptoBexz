import {
    Activity,
    ArrowDownRight,
    ArrowUpRight,
    LineChart,
    Plus,
    ShieldAlert
} from 'lucide-react';
import React from 'react';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#0e1015] text-gray-300 font-sans overflow-hidden">
      
      

     
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-8 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
          
          {/* Page Title & Tabs */}
          <div className="mb-6">
            <h1 className="text-3xl font-semibold text-white mb-1">Strategy Lab</h1>
            <p className="text-sm text-gray-400 mb-6">Future strategy optimization powered by AI</p>
            
            <div className="flex space-x-1 border-b border-[#1e222d] pb-[1px]">
              {['All Markets', 'Layer1', 'DeFi', 'AI Tokens', 'Memecoins', 'Gaming'].map((tab, i) => (
                <button 
                  key={tab} 
                  className={`px-4 py-2 text-sm font-medium ${i === 0 ? 'text-green-400 border-b-2 border-green-400' : 'text-gray-400 hover:text-white'}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
            
            {/* Strategy Builder (Left) */}
            <div className="xl:col-span-4 bg-[#14171d] rounded-xl border border-[#1e222d] p-5 flex flex-col">
              <h2 className="text-lg text-white font-medium mb-1">Strategy Builder</h2>
              <p className="text-xs text-gray-400 mb-4">Build and customize your own strategies.</p>
              
              {/* Fake Tree Diagram Area */}
              <div className="flex-1 border border-dashed border-[#2a2f3a] rounded-lg bg-[#1a1f26]/50 mb-4 flex items-center justify-center p-4">
                 <div className="w-full flex flex-col items-center space-y-4 opacity-50">
                    <div className="w-24 h-8 bg-[#2a2f3a] rounded"></div>
                    <div className="w-px h-6 bg-gray-600"></div>
                    <div className="flex space-x-8">
                       <div className="w-20 h-8 bg-[#2a2f3a] rounded"></div>
                       <div className="w-20 h-8 bg-[#2a2f3a] rounded"></div>
                    </div>
                 </div>
              </div>

              <div className="flex space-x-2 text-xs mb-4">
                <button className="flex items-center space-x-1 bg-[#1a1f26] px-2 py-1 rounded text-green-400"><Activity className="w-3 h-3"/><span>Signals</span></button>
                <button className="flex items-center space-x-1 bg-[#1a1f26] px-2 py-1 rounded text-gray-400"><LineChart className="w-3 h-3"/><span>Indicators</span></button>
              </div>

              <button className="w-full py-2 bg-[#1a1f26] text-gray-500 rounded-md text-sm font-medium hover:bg-[#202630] transition">
                Save Strategy
              </button>
            </div>

            {/* Strategy Tester (Center) */}
            <div className="xl:col-span-5 bg-[#14171d] rounded-xl border border-[#1e222d] p-5 flex flex-col">
              <h2 className="text-lg text-white font-medium mb-1">Strategy Tester</h2>
              <p className="text-xs text-gray-400 mb-4">Backtest and analyze your strategies.</p>
              
              {/* Fake Chart Area */}
              <div className="flex-1 min-h-[150px] border border-[#1e222d] rounded-lg mb-4 bg-gradient-to-b from-[#1a1f26] to-transparent relative">
                 <div className="absolute inset-0 flex items-end p-2 opacity-30">
                    <svg viewBox="0 0 100 30" className="w-full h-full preserve-aspect-ratio-none">
                       <polyline fill="none" stroke="#4ade80" strokeWidth="0.5" points="0,20 10,25 20,15 30,22 40,10 50,18 60,5 70,12 80,8 90,15 100,5" />
                    </svg>
                 </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-4">
                <StatBox label="Win Rate" value="--%" />
                <StatBox label="Max Drawdown" value="--%" />
                <StatBox label="Total PnL" value="--$" />
                <StatBox label="Sharpe Ratio" value="--" />
              </div>

              <div className="flex justify-between items-center">
                <div className="text-xs text-gray-400 flex items-center space-x-2">
                  <span>TIMEFRAME</span>
                  <select className="bg-[#1a1f26] border border-[#2a2f3a] rounded px-2 py-1 outline-none">
                    <option>1D</option>
                  </select>
                </div>
                <button className="px-4 py-1.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-md text-sm font-medium hover:bg-green-500/20 transition">
                  Start Backtest
                </button>
              </div>
            </div>

            {/* Optimization History (Right) */}
            <div className="xl:col-span-3 bg-[#14171d] rounded-xl border border-[#1e222d] p-5">
              <h2 className="text-lg text-white font-medium mb-1">Optimization History</h2>
              <p className="text-xs text-gray-400 mb-4">Track past optimizations and results.</p>
              
              <div className="space-y-4 mb-6">
                <HistoryItem date="April 18, 2024" strategy="Strategy 1" gain="+5.8%" />
                <HistoryItem date="April 17, 2024" strategy="Strategy 2" gain="+2.2%" />
                <HistoryItem date="April 17, 2024" strategy="Strategy 3" gain="+5.5%" />
              </div>

              <button className="w-full py-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-md text-sm font-medium flex justify-center items-center space-x-1 hover:bg-green-500/20">
                <Plus className="w-4 h-4" />
                <span>New Optimization</span>
              </button>
            </div>

            {/* Secure Sandbox (Bottom Left) */}
            <div className="xl:col-span-4 bg-[#14171d] rounded-xl border border-[#1e222d] p-5 flex flex-col justify-center">
              <div className="flex items-center space-x-2 text-white mb-2">
                <ShieldAlert className="w-5 h-5 text-green-400" />
                <h3 className="font-medium">Secure Sandbox Environment</h3>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                The Strategy Lab leverages a sandbox environment to ensure safe & secure testing of your strategies.
              </p>
            </div>

            {/* Data Table (Bottom Right) */}
            <div className="xl:col-span-8 bg-[#14171d] rounded-xl border border-[#1e222d] overflow-hidden">
              <table className="w-full text-left text-sm text-gray-400">
                <thead className="text-xs uppercase bg-[#1a1f26] text-gray-500 border-b border-[#2a2f3a]">
                  <tr>
                    <th className="px-4 py-3 font-medium">Asset</th>
                    <th className="px-4 py-3 font-medium">Price</th>
                    <th className="px-4 py-3 font-medium">24h</th>
                    <th className="px-4 py-3 font-medium">Volume</th>
                    <th className="px-4 py-3 font-medium">Market Cap</th>
                    <th className="px-4 py-3 font-medium">AI Score</th>
                    <th className="px-4 py-3 font-medium text-right">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow asset="BTC" symbol="Bitcoin" price="$67,320" change="+2.4%" vol="$42B" cap="$1.5T" score="82" trend="up" />
                  <TableRow asset="ETH" symbol="Ethereum" price="$3,420" change="+1.9%" vol="$18B" cap="$412B" score="78" trend="up" />
                  <TableRow asset="SOL" symbol="Solana" price="$101" change="+5.9%" vol="$7B" cap="$86B" score="86" trend="up" />
                  <TableRow asset="XRP" symbol="Ripple" price="$0.53" change="-1.4%" vol="$2B" cap="$30B" score="61" trend="down" />
                  <TableRow asset="LINK" symbol="Chainlink" price="$15.42" change="+4.4%" vol="$850M" cap="$8.7B" score="65" trend="up" />
                </tbody>
              </table>
            </div>

          </div>
        </div>
    </div>
  );
}

// Helper Components
const NavItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <div className="flex items-center space-x-3 px-2 py-2 text-gray-400 hover:text-white hover:bg-[#1a1f26] rounded-md cursor-pointer transition-colors">
    <div className="w-5 h-5">{icon}</div>
    <span>{label}</span>
  </div>
);

const StatBox = ({ label, value }: { label: string, value: string }) => (
  <div className="bg-[#1a1f26] rounded-lg p-3 text-center border border-[#1e222d]">
    <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">{label}</div>
    <div className="text-sm font-medium text-white">{value}</div>
  </div>
);

const HistoryItem = ({ date, strategy, gain }: { date: string, strategy: string, gain: string }) => (
  <div className="flex justify-between items-center border-b border-[#1e222d] pb-3 last:border-0">
    <div>
      <div className="flex items-center space-x-2 text-sm text-white">
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
        <span>{date}</span>
      </div>
      <div className="text-xs text-gray-500 ml-3.5 mt-0.5">{strategy}</div>
    </div>
    <div className="text-green-400 text-sm font-medium">{gain}</div>
  </div>
);

const TableRow = ({ asset, price, change, vol, cap, score, trend }: any) => {
  const isUp = change.startsWith('+');
  return (
    <tr className="border-b border-[#1e222d] hover:bg-[#1a1f26] transition-colors">
      <td className="px-4 py-3 flex items-center space-x-2">
        <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-[10px] text-white font-bold">{asset[0]}</div>
        <span className="text-white font-medium">{asset}</span>
      </td>
      <td className="px-4 py-3 text-white">{price}</td>
      <td className={`px-4 py-3 font-medium ${isUp ? 'text-green-400' : 'text-red-400'}`}>{change}</td>
      <td className="px-4 py-3">{vol}</td>
      <td className="px-4 py-3">{cap}</td>
      <td className="px-4 py-3 flex items-center space-x-1">
        <ArrowUpRight className="w-3 h-3 text-green-400" />
        <span className="text-white">{score}</span>
      </td>
      <td className="px-4 py-3 text-right">
        {isUp ? <ArrowUpRight className="w-4 h-4 text-green-400 inline" /> : <ArrowDownRight className="w-4 h-4 text-red-400 inline" />}
      </td>
    </tr>
  );
};