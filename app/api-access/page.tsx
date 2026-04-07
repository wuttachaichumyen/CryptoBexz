import {
  BarChart2,
  BookOpen,
  ChevronRight,
  Copy,
  Lock,
  Pencil,
  Plus,
  Share2,
  Trash2,
  Webhook
} from 'lucide-react';

export default function ApiAccessPage() {
  return (
    // กำหนดพื้นหลังสีเข้มและฟอนต์สีขาว (คุณสามารถปรับ background ให้เข้ากับ template หลักของคุณได้)
    <div className="min-h-screen bg-[#121212] text-gray-200 p-8 w-full font-sans">
      
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl text-white mb-1">API Access</h1>
        <p className="text-gray-400 text-sm">Integrate Cryptobexz with your applications</p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ================= COLUMN 1: API KEYS (Variations) ================= */}
        <div className="space-y-6">
          
          {/* Variation 1 */}
          <div className="bg-[#1c1c1c] border border-white/10 rounded-lg p-5 shadow-lg">
            <h2 className="text-lg text-white mb-4">API Keys</h2>
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center bg-[#252525] p-3 rounded-md border border-white/5">
                <span className="text-sm">Bella&apos;s API Key</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs tracking-widest">••••••••••••</span>
                  <button className="text-gray-400 hover:text-white"><Copy size={16} /></button>
                </div>
              </div>
              <div className="flex justify-between items-center bg-[#252525] p-3 rounded-md border border-white/5">
                <span className="text-sm">CryptoProject Key</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs tracking-widest">••••••••••••</span>
                  <button className="text-gray-400 hover:text-white"><Copy size={16} /></button>
                </div>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-[#333] border border-white/10 text-sm py-2.5 rounded-md transition-colors">
              Create API Key <ChevronRight size={16} />
            </button>
          </div>

          {/* Variation 2 */}
          <div className="bg-[#1c1c1c] border border-white/10 rounded-lg p-5 shadow-lg relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg text-white">API Keys</h2>
              <button className="text-gray-400 hover:text-white"><Plus size={18} /></button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <p className="text-sm text-white">Bella&apos;s API Key</p>
                  <p className="text-xs text-gray-500">Created May 02, 2024</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 bg-[#2a2a2a] border border-white/10 rounded hover:bg-[#333] text-gray-300 flex items-center gap-1 text-xs px-2">
                    Copy
                  </button>
                  <button className="p-1.5 bg-[#2a2a2a] border border-white/10 rounded hover:bg-[#333] text-gray-300">
                    <Pencil size={14} />
                  </button>
                  <button className="p-1.5 bg-[#2a2a2a] border border-white/10 rounded hover:bg-[#333] text-gray-300">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center pb-2">
                <div>
                  <p className="text-sm text-white">CryptoProject Key</p>
                  <p className="text-xs text-gray-500">Created Apr 15, 2024</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 bg-[#2a2a2a] border border-white/10 rounded hover:bg-[#333] text-gray-300 flex items-center gap-1 text-xs px-2">
                    Copy
                  </button>
                  <button className="p-1.5 bg-[#2a2a2a] border border-white/10 rounded hover:bg-[#333] text-gray-300">
                    <Pencil size={14} />
                  </button>
                  <button className="p-1.5 bg-[#2a2a2a] border border-white/10 rounded hover:bg-[#333] text-gray-300">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="flex w-fit items-center justify-center gap-2 bg-[#2a2a2a] hover:bg-[#333] border border-white/10 text-sm py-2.5 px-4 rounded-md transition-colors mt-2">
             Create API Key <ChevronRight size={16} />
          </button>

          {/* Variation 3 */}
          <div className="bg-[#1c1c1c] border border-white/10 rounded-lg p-5 shadow-lg">
            <h2 className="text-lg text-white mb-4">API Keys</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <p className="text-sm text-white">Bella&apos;s API Key</p>
                  <p className="text-xs text-gray-500">Created on May 02, 2024</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-[#2a2a2a] border border-white/10 rounded hover:bg-[#333] text-gray-300 flex items-center gap-1 text-xs py-1.5 px-3">
                    <Copy size={12} /> Copy
                  </button>
                  <button className="bg-[#2a2a2a] border border-white/10 rounded hover:bg-[#333] text-gray-300 flex items-center gap-1 text-xs py-1.5 px-3">
                    <Pencil size={12} /> Edit
                  </button>
                  <button className="bg-[#2a2a2a] border border-white/10 rounded hover:bg-[#333] text-gray-300 flex items-center gap-1 text-xs py-1.5 px-3">
                    Delete
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-white">CryptoProject Key</p>
                  <p className="text-xs text-gray-500">Created on Apr 15, 2024</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-[#2a2a2a] border border-white/10 rounded hover:bg-[#333] text-gray-300 flex items-center gap-1 text-xs py-1.5 px-3">
                    <Copy size={12} /> Copy
                  </button>
                  <button className="bg-[#2a2a2a] border border-white/10 rounded hover:bg-[#333] text-gray-300 flex items-center gap-1 text-xs py-1.5 px-3">
                    <Pencil size={12} /> Edit
                  </button>
                  <button className="bg-[#2a2a2a] border border-white/10 rounded hover:bg-[#333] text-gray-300 flex items-center gap-1 text-xs py-1.5 px-3">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COLUMN 2: MIDDLE INFO CARDS ================= */}
        <div className="space-y-6">
          <div className="bg-[#1c1c1c] border border-white/10 rounded-lg p-5 shadow-lg relative overflow-hidden group">
            <BookOpen className="absolute top-4 right-4 text-white/5 w-16 h-16" />
            <h2 className="text-lg text-white mb-2 relative z-10">API Documentation</h2>
            <p className="text-sm text-gray-400 mb-6 relative z-10">Access our API docs, integration guides, and usage examples.</p>
            <div className="flex justify-end relative z-10">
              <button className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333] border border-white/10 text-sm py-2 px-4 rounded-md transition-colors">
                View Docs <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="bg-[#1c1c1c] border border-white/10 rounded-lg p-5 shadow-lg relative overflow-hidden">
            <BarChart2 className="absolute top-4 right-4 text-white/5 w-16 h-16" />
            <h2 className="text-lg text-white mb-2 relative z-10">Usage Plans</h2>
            <p className="text-sm text-gray-400 mb-6 relative z-10">Review your API subscription plan and limits.</p>
            <div className="flex justify-end relative z-10">
              <button className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333] border border-white/10 text-sm py-2 px-4 rounded-md transition-colors">
                View Usage <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="bg-[#1c1c1c] border border-white/10 rounded-lg p-5 shadow-lg relative overflow-hidden">
             <h2 className="text-lg text-white mb-2 relative z-10">API Usage</h2>
            <p className="text-sm text-gray-400 mb-6 relative z-10">Monitor your API usage and limits.</p>
            <div className="flex justify-end relative z-10">
              <button className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333] border border-white/10 text-sm py-2 px-4 rounded-md transition-colors">
                View Usage <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= COLUMN 3: RIGHT INFO CARDS ================= */}
        <div className="space-y-6">
          <div className="bg-[#1c1c1c] border border-white/10 rounded-lg p-5 shadow-lg relative overflow-hidden">
             <Share2 className="absolute top-4 right-4 text-white/5 w-16 h-16" />
            <h2 className="text-lg text-white mb-2 relative z-10">Endpoints</h2>
            <p className="text-sm text-gray-400 mb-6 relative z-10">Explore supported API endpoints.</p>
            <div className="flex justify-end relative z-10">
              <button className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333] border border-white/10 text-sm py-2 px-4 rounded-md transition-colors">
                View Endpoints <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="bg-[#1c1c1c] border border-white/10 rounded-lg p-5 shadow-lg relative overflow-hidden">
            <Webhook className="absolute top-4 right-4 text-white/5 w-16 h-16" />
            <h2 className="text-lg text-white mb-2 relative z-10">Webhooks</h2>
            <p className="text-sm text-gray-400 mb-6 relative z-10">Set up webhooks for real-time data events.</p>
            <div className="flex justify-end relative z-10">
              <button className="bg-[#2a2a2a] hover:bg-[#333] border border-white/10 text-sm py-2 px-4 rounded-md transition-colors">
                Configure Webhooks
              </button>
            </div>
          </div>

          <div className="bg-[#1c1c1c] border border-white/10 rounded-lg p-5 shadow-lg relative overflow-hidden">
            <Lock className="absolute top-4 right-4 text-white/5 w-16 h-16" />
            <h2 className="text-lg text-white mb-2 relative z-10">Security</h2>
            <p className="text-sm text-gray-400 mb-6 relative z-10">Best practices for safely managing your API keys.</p>
            <div className="flex justify-end relative z-10">
              <button className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333] border border-white/10 text-sm py-2 px-4 rounded-md transition-colors">
                View Guide <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="bg-[#1c1c1c] border border-white/10 rounded-lg p-5 shadow-lg relative overflow-hidden">
            <h2 className="text-lg text-white mb-2 relative z-10">API Endpoints</h2>
            <p className="text-sm text-gray-400 mb-6 relative z-10">List of available API endpoints for market data access.</p>
            <div className="flex justify-end relative z-10">
              <button className="flex items-center gap-2 bg-[#2a2a2a] hover:bg-[#333] border border-white/10 text-sm py-2 px-4 rounded-md transition-colors">
                Configure Webhooks <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}