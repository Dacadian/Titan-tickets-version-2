export default function AnalyticsCard({ title, value, icon, color = 'orange' }) {
  return (
    <div className="glass-effect rounded-3xl p-8 hover:shadow-2xl hover:shadow-orange-500/25 transition-all cursor-pointer group">
      <div className="flex items-center justify-between mb-6">
        <div className={`p-4 bg-gradient-to-r from-${color}-500 to-${color}-600 rounded-2xl group-hover:scale-110 transition-transform`}>
          <span className="text-2xl">{icon}</span>
        </div>
      </div>
      <div>
        <p className="text-gray-500 text-sm uppercase tracking-wide font-bold">{title}</p>
        <p className="text-4xl font-black gradient-text mt-2">{value}</p>
      </div>
    </div>
  )
}
