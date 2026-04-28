export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-900 p-12">
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(45deg, #f97316, #eab308);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .glass {
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
        }
      `}</style>
      
      <h1 className="text-6xl font-bold gradient-text mb-12 text-center">
        Titan Admin ✅
      </h1>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass p-8 rounded-3xl text-center hover:scale-105 transition-all">
            <div className="text-4xl mb-4">🎫</div>
            <h3 className="text-3xl font-bold gradient-text">12 Events</h3>
            <p className="text-gray-400">Active listings</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center hover:scale-105 transition-all">
            <div className="text-4xl mb-4">💰</div>
            <h3 className="text-3xl font-bold gradient-text">KSh 2.5M</h3>
            <p className="text-gray-400">Total Revenue</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center hover:scale-105 transition-all">
            <div className="text-4xl mb-4">🎟️</div>
            <h3 className="text-3xl font-bold gradient-text">847</h3>
            <p className="text-gray-400">Tickets Sold</p>
          </div>
          <div className="glass p-8 rounded-3xl text-center hover:scale-105 transition-all">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-3xl font-bold gradient-text">82%</h3>
            <p className="text-gray-400">Conversion</p>
          </div>
        </div>

        {/* Events Table */}
        <div className="glass rounded-3xl p-8">
          <h2 className="text-4xl font-bold text-white mb-8">Events Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-white/20">
                  <th className="py-4 font-bold text-white">Event</th>
                  <th className="py-4 font-bold text-white">Price</th>
                  <th className="py-4 font-bold text-white text-right">Tickets</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-white/10 transition-colors">
                  <td className="py-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                        <span className="text-white font-bold">T</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Tech Summit 2024</h4>
                        <p className="text-gray-400 text-sm">Nairobi KICC</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold rounded-xl">
                      KSh 2,500
                    </span>
                  </td>
                  <td className="py-6 text-right font-bold text-orange-400">1,200</td>
                </tr>
                <tr className="hover:bg-white/10 transition-colors">
                  <td className="py-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                        <span className="text-white font-bold">M</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-lg">Music Festival</h4>
                        <p className="text-gray-400 text-sm">Uhuru Park</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold rounded-xl">
                      KSh 1,500
                    </span>
                  </td>
                  <td className="py-6 text-right font-bold text-orange-400">3,500</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold py-6 px-12 rounded-3xl text-xl shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-2 transition-all duration-300">
            🚀 Create New Event
          </button>
        </div>
      </div>
    </div>
  )
}
