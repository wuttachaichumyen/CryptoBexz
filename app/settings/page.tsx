import { ChevronDown, DollarSign, Globe, Moon } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="w-full max-w-5xl mx-auto pb-10 pt-4 px-4 md:px-8">
      
      {/* ================= Header ================= */}
      <h1 className="text-2xl font-bold text-white mb-6">Settings</h1>

      {/* ================= Tabs Navigation ================= */}
      <div className="flex items-center gap-6 border-b border-gray-800 mb-8 overflow-x-auto">
        <button className="text-green-500 border-b-2 border-green-500 pb-3 text-sm font-medium whitespace-nowrap">
          Profile
        </button>
        <button className="text-gray-400 hover:text-gray-300 pb-3 text-sm font-medium whitespace-nowrap transition-colors">
          Subscription
        </button>
        <button className="text-gray-400 hover:text-gray-300 pb-3 text-sm font-medium whitespace-nowrap transition-colors">
          Notifications
        </button>
        <button className="text-gray-400 hover:text-gray-300 pb-3 text-sm font-medium whitespace-nowrap transition-colors">
          API Keys
        </button>
      </div>

      {/* ================= Profile Information ================= */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-white mb-4">Profile Information</h2>
        
        <div className="bg-[#11141c] border border-gray-800/60 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-5">
            {/* Avatar */}
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-xl text-white font-semibold flex-shrink-0">
              SS
            </div>
            
            {/* User Info */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-white font-semibold text-lg">Supanat Suwannaprach</h3>
                <span className="bg-gray-800 text-gray-300 text-xs px-2 py-0.5 rounded-md font-medium">
                  Free Plan
                </span>
              </div>
              <p className="text-gray-400 text-sm">supanat.s@example.com</p>
            </div>
          </div>

          {/* Edit Button */}
          <button className="px-4 py-2 bg-[#1a1d24] border border-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors w-full md:w-auto">
            Edit Profile
          </button>

        </div>
      </div>

      {/* ================= Preferences ================= */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-white mb-4">Preferences</h2>
        
        <div className="bg-[#11141c] border border-gray-800/60 rounded-xl divide-y divide-gray-800/60">
          
          {/* Theme Setting */}
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-gray-800/50 rounded-lg text-gray-400">
                <Moon size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm mb-0.5">Theme</h4>
                <p className="text-gray-500 text-xs">Choose your preferred appearance</p>
              </div>
            </div>
            {/* Toggle Switch (Active) */}
            <button className="w-11 h-6 bg-green-500 rounded-full relative transition-colors focus:outline-none">
              <span className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full transition-transform"></span>
            </button>
          </div>

          {/* Currency Setting */}
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-gray-800/50 rounded-lg text-gray-400">
                <DollarSign size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm mb-0.5">Currency</h4>
                <p className="text-gray-500 text-xs">Select your base currency</p>
              </div>
            </div>
            {/* Dropdown */}
            <button className="flex items-center gap-8 px-3 py-2 bg-[#1a1d24] border border-gray-700 rounded-lg text-sm text-white hover:bg-gray-800 transition-colors">
              USD
              <ChevronDown size={16} className="text-gray-400" />
            </button>
          </div>

          {/* Language Setting */}
          <div className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-gray-800/50 rounded-lg text-gray-400">
                <Globe size={20} />
              </div>
              <div>
                <h4 className="text-white font-medium text-sm mb-0.5">Language</h4>
                <p className="text-gray-500 text-xs">Select your preferred language</p>
              </div>
            </div>
            {/* Dropdown */}
            <button className="flex items-center gap-8 px-3 py-2 bg-[#1a1d24] border border-gray-700 rounded-lg text-sm text-white hover:bg-gray-800 transition-colors">
              English
              <ChevronDown size={16} className="text-gray-400" />
            </button>
          </div>

        </div>
      </div>

      {/* ================= Save Action ================= */}
      <div>
        <button className="px-6 py-2.5 bg-green-500 hover:bg-green-400 text-[#0b0e14] font-semibold rounded-lg text-sm transition-colors">
          Save Changes
        </button>
      </div>

    </div>
  );
}