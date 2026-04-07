import {
  BarChart2,
  Bell,
  Bot,
  BrainCircuit,
  ChevronDown, ChevronRight,
  Code, CreditCard,
  FileText,
  FlaskConical,
  LayoutDashboard, LineChart,
  PieChart,
  Search,
  Settings,
  User
} from 'lucide-react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link'; // ✅ 1. เพิ่ม Import Link ตรงนี้
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoBexz Dashboard",
  description: "AI-powered crypto trading dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex h-screen bg-[#0b0e14] text-white overflow-hidden`}>
        
        {/* ================= SIDEBAR (แถบด้านซ้าย) ================= */}
        <aside className="w-64 bg-[#0b0e14] border-r border-gray-800/60 flex flex-col hidden md:flex">
          
          {/* Logo */}
          <div className="h-20 flex items-center px-6">
            <div className="flex items-center gap-2 text-xl font-bold">
              <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                <PieChart size={20} />
              </div>
              CryptoBexz
            </div>
          </div>

          {/* Navigation Menus */}
          <div className="flex-1 overflow-y-auto px-4 py-2 custom-scrollbar">
            <ul className="space-y-1">
              
              {/* ✅ 2. เปลี่ยน Dashboard เป็น <Link> และชี้ไปที่ "/" */}
              <li>
                <Link href="/" className="flex items-center gap-3 px-3 py-2.5 bg-green-500/10 text-green-500 rounded-lg border border-green-500/20 font-medium text-sm">
                  <LayoutDashboard size={18} />
                  Dashboard
                </Link>
              </li>
              
              {/* ✅ 3. เมนูหลัก เปลี่ยนแท็ก <a> เป็น <Link href={item.path}> */}
              {[
                { name: 'Markets', path: '/markets', icon: <LineChart size={18} /> },
                { name: 'AI Signals', path: '/ai-signals', icon: <BrainCircuit size={18} /> },
                { name: 'AI Adviser', path: '/ai-adviser', icon: <Bot size={18} /> },
                { name: 'Add-On Matrix', path: '/add-on-matrix', icon: <PieChart size={18} /> },
                { name: 'Portfolio', path: '/portfolio', icon: <PieChart size={18} /> },
                { name: 'Strategy Lab', path: '/strategy-lab', icon: <FlaskConical size={18} /> },
                { name: 'Analytics', path: '/analytics', icon: <BarChart2 size={18} /> },
                { name: 'Reports', path: '/reports', icon: <FileText size={18} /> },
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.path} className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg font-medium text-sm transition-colors">
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Developer Section */}
            <div className="mt-8 mb-4 px-3">
              <h4 className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">Developer</h4>
              <ul className="space-y-1">
                {/* ✅ 4. เพิ่ม path ให้หมวด Developer และเปลี่ยนเป็น <Link> */}
                {[
                  { name: 'API Access', path: '/api-access', icon: <Code size={18} /> },
                  { name: 'Payments', path: '/payments', icon: <CreditCard size={18} /> },
                  { name: 'Profile', path: '/profile', icon: <User size={18} /> },
                  { name: 'Settings', path: '/settings', icon: <Settings size={18} /> },
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={item.path} className="flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg font-medium text-sm transition-colors">
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* User Profile Bottom */}
          <div className="p-4 border-t border-gray-800/60">
            <Link href="/profile" className="flex items-center justify-between p-2 rounded-lg hover:bg-white/5 cursor-pointer transition-colors block">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=5" alt="Bella" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Bella</p>
                  <p className="text-xs text-gray-500">The owner</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-500" />
            </Link>
          </div>
        </aside>

        {/* ================= MAIN CONTENT AREA ================= */}
        <main className="flex-1 flex flex-col relative overflow-hidden">
          
          {/* Top Header (แถบด้านบน) */}
          <header className="h-20 flex items-center justify-between px-8 border-b border-gray-800/60 bg-[#0b0e14]">
            {/* Search Bar */}
            <div className="flex items-center bg-[#151a23] border border-gray-800/60 rounded-lg px-4 py-2 w-96">
              <Search size={16} className="text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search BTC, ETH, SOL..." 
                className="bg-transparent border-none outline-none text-sm text-gray-300 w-full placeholder-gray-600"
              />
            </div>

            {/* Right Icons & Profile */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4 text-gray-400">
                <button className="hover:text-white transition-colors relative">
                  <Bell size={18} />
                  <span className="absolute 0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
                </button>
              </div>
              
              <Link href="/profile" className="flex items-center gap-3 cursor-pointer pl-4 border-l border-gray-800">
                <div className="w-8 h-8 rounded-full bg-gray-600 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=5" alt="Bella" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium text-white">Bella</span>
                <ChevronDown size={14} className="text-gray-500" />
              </Link>
            </div>
          </header>

          {/* Children (เนื้อหาจาก page.tsx จะมาโผล่ตรงนี้) */}
          <div className="flex-1 overflow-y-auto p-8 bg-[#0b0e14]">
            {children}
          </div>

        </main>
      </body>
    </html>
  );
}