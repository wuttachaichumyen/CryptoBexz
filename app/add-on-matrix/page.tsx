
export default function AddOnMatrixPage() {
  // ข้อมูลจำลองสำหรับ Add-Ons แต่ละตัว
  const addons = [
    {
      title: 'Extra 50 Symbols',
      price: 29,
      description: 'Portfolio expansion',
      isPopular: false,
    },
    {
      title: 'Daily AI Adviser',
      price: 39,
      description: 'Faster trading decisions',
      isPopular: true,
    },
    {
      title: 'Portfolio-Aware AI',
      price: 69,
      description: 'Risk & allocation control',
      isPopular: false,
    },
    {
      title: 'Strategy Customization',
      price: 149,
      description: 'Personalized Trading edge',
      isPopular: false,
    },
    {
      title: 'API Access',
      price: 299,
      description: 'Bots & automation',
      isPopular: false,
    },
    {
      title: 'White-Label Dashboard',
      price: 499,
      description: 'Create your own branded trading dashboard',
      isPopular: false,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto pb-10">
      {/* ส่วนหัวของหน้า (Header) */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-white">Add-On Matrix</h1>
        <p className="text-gray-400 text-sm mt-2">
          Enhance your trading intelligence with advanced AI modules
        </p>
      </div>

      {/* ส่วนแสดงการ์ด Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addons.map((addon, index) => (
          <div
            key={index}
            className="relative bg-[#11141c]/80 backdrop-blur-md border border-gray-800/60 rounded-2xl p-6 flex flex-col hover:border-green-500/30 transition-all duration-300 group overflow-hidden"
          >
            {/* เอฟเฟกต์แสงจางๆ ด้านบนของการ์ด */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="relative z-10 flex-1">
              {/* ป้ายด้านบน (Top Label & Badge) */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-green-500 tracking-wide">
                  Add-On
                </span>
                {addon.isPopular && (
                  <span className="bg-green-500/20 text-green-500 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Popular
                  </span>
                )}
              </div>

              {/* ชื่อแพ็กเกจ (Title) */}
              <h3 className="text-lg font-medium text-white mb-4">
                {addon.title}
              </h3>

              {/* ราคา (Price) */}
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-3xl font-bold text-white">
                  +${addon.price}
                </span>
                <span className="text-sm text-gray-500">/ month</span>
              </div>

              {/* คำอธิบาย (Description) */}
              <p className="text-sm text-gray-400">
                {addon.description}
              </p>
            </div>

            {/* ส่วนท้ายของการ์ด (Bottom Section) */}
            <div className="relative z-10 mt-10 pt-4 border-t border-gray-800/60">
              <span className="text-sm font-medium text-gray-300">
                + ${addon.price} / month
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}