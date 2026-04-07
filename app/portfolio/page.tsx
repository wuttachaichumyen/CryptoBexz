
export default function PortfolioPage() {
  const features = [
    'AI Portfolio Risk Analysis',
    'Smart Allocation Optimization',
    'AI Strategy Suggestions',
    'Portfolio Alerts',
    'AI Trader Integration',
  ];

  return (
    <div className="w-full max-w-5xl mx-auto pb-10">
      {/* ส่วนหัว */}
      <div className="mb-10">
        <h1 className="text-2xl font-semibold text-white">Portfolio Intelligence</h1>
      </div>

      {/* กล่อง Coming Soon หลัก */}
      <div className="flex flex-col items-center mb-12">
        {/* แบนเนอร์ Coming Soon */}
        <div className="w-full relative flex items-center justify-center py-8 mb-4 bg-gradient-to-b from-[#1c1f26] to-[#11141c] border border-gray-800 rounded-xl overflow-hidden shadow-2xl">
          {/* เส้นตกแต่ง */}
          <div className="absolute left-10 right-10 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-50"></div>
          
          <div className="relative z-10 bg-[#11141c] px-8 py-2 border border-gray-700/50 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white tracking-wider">Coming Soon</h2>
          </div>
        </div>

        <p className="text-gray-400 text-sm mb-8">
          Soon you'll be able to connect your portfolio and receive AI-powered insights.
        </p>

        {/* กล่อง Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mb-10">
          <div className="bg-[#1a1d24] border border-gray-700 rounded-lg p-4 text-center shadow-lg">
            <p className="text-gray-400 text-xs mb-1">Phase 1</p>
            <p className="text-white text-sm font-medium">AI Market Intelligence</p>
          </div>
          <div className="bg-[#1a1d24] border border-gray-800 rounded-lg p-4 text-center shadow-lg">
            <p className="text-gray-500 text-xs mb-1">Phase 2</p>
            <p className="text-gray-300 text-sm font-medium">Portfolio Integration</p>
          </div>
          <div className="bg-[#1a1d24] border border-gray-800 rounded-lg p-4 text-center shadow-lg">
            <p className="text-gray-500 text-xs mb-1">Phase 3</p>
            <p className="text-gray-300 text-sm font-medium">AI Trader Automation</p>
          </div>
        </div>

        {/* รายการฟีเจอร์ (Checklist) */}
        <div className="w-full max-w-3xl flex flex-col gap-4 pl-4 md:pl-10">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              {/* ไอคอนเครื่องหมายถูกสีเหลือง/ทอง */}
              <svg 
                className="w-5 h-5 text-yellow-600 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-gray-300 text-sm md:text-base font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ส่วน Dashboard ลางๆ (Mockup) */}
      <div className="relative mt-16">
        {/* เลเยอร์ทำให้เบลอและดูเป็นสีเทาจางๆ */}
        <div className="opacity-30 grayscale pointer-events-none select-none blur-[1px]">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Overview Section */}
            <div className="flex-1 bg-[#11141c] border border-gray-800 rounded-xl p-5">
              <h3 className="text-white text-sm font-medium mb-4 flex justify-between">
                Overview <span className="text-gray-600">•••</span>
              </h3>
              <div className="grid grid-cols-3 gap-4 h-32">
                <div className="bg-[#1a1d24] rounded-lg p-3 flex flex-col justify-between border border-gray-800">
                  <div className="h-2 w-20 bg-gray-700 rounded mb-2"></div>
                  {/* กราฟเส้นจำลอง */}
                  <div className="mt-auto h-12 border-b border-l border-gray-700 relative">
                     <svg className="w-full h-full text-gray-500" viewBox="0 0 100 50" preserveAspectRatio="none">
                        <polyline fill="none" stroke="currentColor" strokeWidth="2" points="0,40 20,30 40,45 60,20 80,25 100,10" />
                     </svg>
                  </div>
                </div>
                <div className="bg-[#1a1d24] rounded-lg p-3 flex flex-col items-center justify-center border border-gray-800">
                  <div className="h-2 w-24 bg-gray-700 rounded mb-4 absolute top-4 left-4"></div>
                  {/* กราฟโดนัทจำลอง */}
                  <div className="w-16 h-8 border-t-8 border-l-8 border-r-8 border-gray-600 rounded-t-full mt-4"></div>
                </div>
                <div className="bg-[#1a1d24] rounded-lg p-3 flex flex-col justify-between border border-gray-800">
                  <div className="h-2 w-24 bg-gray-700 rounded mb-2"></div>
                  {/* กราฟเส้นจำลอง */}
                  <div className="mt-auto h-12 border-b border-l border-gray-700 relative">
                     <svg className="w-full h-full text-gray-500" viewBox="0 0 100 50" preserveAspectRatio="none">
                        <polyline fill="none" stroke="currentColor" strokeWidth="2" points="0,50 20,40 40,30 60,35 80,15 100,5" />
                     </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Holdings Section */}
            <div className="w-full md:w-1/3 bg-[#11141c] border border-gray-800 rounded-xl p-5">
              <h3 className="text-white text-sm font-medium mb-4 flex justify-between">
                Recent Holdings <span className="text-gray-600">•••</span>
              </h3>
              <div className="flex flex-col gap-3">
                <div className="h-8 bg-[#1a1d24] rounded-md border border-gray-800 flex items-center px-3 gap-2">
                   <div className="w-4 h-4 rounded-sm bg-gray-700"></div>
                   <div className="w-full h-2 bg-gray-700 rounded"></div>
                </div>
                <div className="h-8 bg-[#1a1d24] rounded-md border border-gray-800 flex items-center px-3 gap-2">
                   <div className="w-4 h-4 rounded-sm bg-gray-700"></div>
                   <div className="w-3/4 h-2 bg-gray-700 rounded"></div>
                </div>
                <div className="h-8 bg-[#1a1d24] rounded-md border border-gray-800 flex items-center px-3 gap-2">
                   <div className="w-4 h-4 rounded-sm bg-gray-700"></div>
                   <div className="w-5/6 h-2 bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ปุ่ม Notify Me วางทับอยู่ตรงกลาง */}
        <div className="absolute inset-0 flex items-end justify-center pb-2 z-20">
          <button className="bg-[#11141c] hover:bg-[#1a1d24] text-green-500 border border-green-500/30 px-8 py-2.5 rounded-md text-sm font-medium transition-colors shadow-[0_0_15px_rgba(34,197,94,0.1)] flex items-center gap-2">
            Notify Me
            <span className="text-lg leading-none">›</span>
          </button>
        </div>
      </div>
    </div>
  );
}