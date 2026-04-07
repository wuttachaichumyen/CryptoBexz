import { ChevronRight, CreditCard, Download, MoreHorizontal, Star } from 'lucide-react';

export default function AIAdviserPage() {
  return (
    <div className="space-y-6 pb-8">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">AI Adviser</h1>
        <p className="text-sm text-gray-400">Your intelligent trading assistant</p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* ================= LEFT COLUMN ================= */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* 1. Current Plan */}
          <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4 border-b border-gray-800/60 pb-4">
              <h2 className="text-lg font-semibold text-white">Current Plan</h2>
              <div className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer hover:text-white">
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> Active
                </span>
                <ChevronRight size={16} />
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#0b0e14]/50 border border-gray-800/60 rounded-lg p-5">
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-xl font-bold text-white">Pro Trader</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">Active</span>
                    {/* Mockup Toggle Switch (ON) */}
                    <div className="w-9 h-5 bg-green-500 rounded-full flex items-center px-0.5 justify-end cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>Plan: Pro Trader</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <span>Status: Active</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <span>Billing: Monthly</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                  <span>Next Payment: 14 July 2026</span>
                  <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                  <span>Date Payment: 14 July 2026</span>
                </div>
              </div>
              <button className="px-5 py-2.5 bg-green-500/10 text-green-500 border border-green-500/20 rounded-lg font-medium text-sm hover:bg-green-500/20 transition-colors whitespace-nowrap">
                Upgrade Plan <ChevronRight size={14} className="inline ml-1 mb-0.5" />
              </button>
            </div>
          </div>

          {/* 2. Middle Row (Status & Billing) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* AI Adviser Status */}
            <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-white">AI Adviser Status</h3>
                <button className="text-gray-500 hover:text-white"><MoreHorizontal size={18} /></button>
              </div>
              
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Plan</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-300">Trading</span>
                    {/* Toggle ON */}
                    <div className="w-9 h-5 bg-green-500 rounded-full flex items-center px-0.5 justify-end cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Segmented Control */}
                <div className="flex bg-[#0b0e14] border border-gray-800/60 rounded-lg p-1">
                  <button className="flex-1 text-center py-2 text-sm font-medium text-gray-500 hover:text-gray-300 rounded-md transition-colors">
                    Conservative
                  </button>
                  <button className="flex-1 text-center py-2 text-sm font-medium bg-green-500/10 text-green-500 border border-green-500/20 rounded-md transition-colors">
                    Balanced
                  </button>
                  <button className="flex-1 text-center py-2 text-sm font-medium text-gray-500 hover:text-gray-300 rounded-md transition-colors">
                    Aggressive
                  </button>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm text-gray-400">Signal Frequency</span>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-300">ON</span>
                    {/* Toggle ON */}
                    <div className="w-9 h-5 bg-green-500 rounded-full flex items-center px-0.5 justify-end cursor-pointer">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Billing & Payments */}
            <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-white">Billing & Payments</h3>
                <button className="text-gray-500 hover:text-white"><MoreHorizontal size={18} /></button>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex gap-2 text-sm">
                  <span className="text-gray-400 w-32">Plan Price:</span>
                  <span className="text-white">$69 / month</span>
                </div>
                <div className="flex gap-2 text-sm items-center">
                  <span className="text-gray-400 w-32">Payment Method:</span>
                  <span className="text-white flex items-center gap-2">
                    <CreditCard size={14} className="text-blue-400" /> VISA *** 2031
                  </span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="text-gray-400 w-32">Next Billing:</span>
                  <span className="text-white">July 14</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2 bg-[#0b0e14] border border-gray-700/60 text-gray-300 rounded-lg text-sm font-medium hover:bg-white/5 transition-colors">
                  Change Payment Method
                </button>
                <button className="px-3 py-2 bg-[#0b0e14] border border-gray-700/60 text-gray-400 rounded-lg hover:text-white transition-colors">
                  <Download size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT COLUMN (Vertical Add-ons) ================= */}
        <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-6">
          <h3 className="font-semibold text-white mb-5">AI Add-Ons</h3>
          
          <ul className="space-y-4 mb-6">
            {[
              { name: 'Extra 50 Symbols', price: '$29 / month' },
              { name: 'Daily AI Adviser', price: '$39 / month' },
              { name: 'Portfolio-Aware AI', price: '$69 / month' },
              { name: 'Strategy Customization', price: '$149 / month' },
              { name: 'API Access', price: '$239 / month' },
              { name: 'White-Label Dashboard', price: '$499 / month' },
            ].map((item, idx) => (
              <li key={idx} className="flex justify-between items-center text-sm">
                <span className="text-gray-300">{item.name}</span>
                <span className="text-gray-500">{item.price}</span>
              </li>
            ))}
          </ul>

          <button className="w-full px-4 py-2.5 bg-green-500/10 text-green-500 border border-green-500/20 rounded-lg font-medium text-sm hover:bg-green-500/20 transition-colors">
            Add Feature <ChevronRight size={14} className="inline ml-1" />
          </button>
        </div>

      </div>

      {/* ================= BOTTOM SECTION: AI Add-Ons Grid ================= */}
      <div className="bg-[#151a23] border border-gray-800/60 rounded-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold text-white">AI Add-Ons</h3>
          <button className="text-gray-500 hover:text-white"><MoreHorizontal size={18} /></button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Card 1 (Popular) */}
          <div className="bg-[#0b0e14]/50 border border-gray-800/60 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <Star size={18} className="text-yellow-500 fill-yellow-500" />
                  <h4 className="font-semibold text-white text-base">Daily AI Adviser Upgrade</h4>
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-[10px] font-bold tracking-wide rounded border border-green-500/20 uppercase">
                    Popular
                  </span>
                </div>
                <span className="text-white font-medium">$39 <span className="text-gray-500 text-sm font-normal">/ month</span></span>
              </div>
              <p className="text-xs text-gray-500 mb-4 max-w-[80%]">
                Daily trading insights & AI strategies sent to your inbox.
              </p>
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-1.5 border border-gray-700 hover:border-green-500/50 text-gray-300 hover:text-green-500 rounded-lg text-sm transition-colors">
                Activate Add-On
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0b0e14]/50 border border-gray-800/60 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-white text-base">Extra 50 Symbols</h4>
                <span className="text-white font-medium">$29 <span className="text-gray-500 text-sm font-normal">/ month</span></span>
              </div>
              <p className="text-xs text-gray-500 mb-4 max-w-[80%]">
                Access 50 additional assets across crypto markets.
              </p>
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-1.5 border border-gray-700 hover:border-green-500/50 text-gray-300 hover:text-green-500 rounded-lg text-sm transition-colors">
                Activate Add-On
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0b0e14]/50 border border-gray-800/60 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-white text-base">Strategy Customization</h4>
                <span className="text-white font-medium">$149 <span className="text-gray-500 text-sm font-normal">/ month</span></span>
              </div>
              <p className="text-xs text-gray-500 mb-4 max-w-[80%]">
                Customize AI strategies based on your trading style. Build a personalized edge.
              </p>
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-1.5 border border-gray-700 hover:border-green-500/50 text-gray-300 hover:text-green-500 rounded-lg text-sm transition-colors">
                Activate Add-On
              </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#0b0e14]/50 border border-gray-800/60 rounded-xl p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold text-white text-base">API Access</h4>
                <span className="text-white font-medium">$299 <span className="text-gray-500 text-sm font-normal">/ month</span></span>
              </div>
              <p className="text-xs text-gray-500 mb-4 max-w-[80%]">
                Connect bots, trading systems, or quant tools via API.
              </p>
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-1.5 border border-gray-700 hover:border-green-500/50 text-gray-300 hover:text-green-500 rounded-lg text-sm transition-colors">
                Activate Add-On
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}