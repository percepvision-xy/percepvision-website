const stats = [
  { value: "99.9%", label: "Detection Accuracy" },
  { value: "<0.1s", label: "Detection Speed" },
  { value: "500+", label: "Enterprise Installs" },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-[#003699] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {stats.map((stat) => (
            <div key={stat.label} className="p-4">
              <div className="text-6xl font-semibold tracking-tighter mb-2">{stat.value}</div>
              <div className="text-lg text-[#6aa0ff] font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
