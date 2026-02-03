import { Camera, Zap, BarChart3, Globe, Layers, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "Legacy Camera Integration",
    description: "Works with existing CCTV & IP camera systems seamlessly with no hardware replacement.",
  },
  {
    icon: Zap,
    title: "Real-time Safety Detection",
    description: "Instant alerts for safety violations, accidents, and security threats with low latency.",
  },
  {
    icon: BarChart3,
    title: "Operational Analytics",
    description: "Reduce operational costs and improve efficiency with data-driven traffic and queue insights.",
  },
  {
    icon: Globe,
    title: "Nationwide Scalability",
    description: "Scale from single local sites to nationwide deployments with centralized management.",
  },
  {
    icon: Layers,
    title: "Flexible Deployment",
    description: "Deployment models that fit your needs: On-premise, Edge computing, or Cloud-centralized.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade Security",
    description: "Privacy-aware design with secure data handling and encryption at every stage.",
  },
]

export function WhyPercepvisionSection() {
  return (
    <section className="py-24 border-t border-[#e5e5e5] bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#0072FF] font-bold tracking-wider uppercase text-sm mb-4 block">
            Why Percepvision
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#333333] mb-6">
            Redefining surveillance with intelligence.
          </h2>
          <p className="text-lg text-[#5c5c5c] leading-relaxed mx-auto max-w-2xl font-light">
            Our platform provides enterprise-grade AI analytics that deliver actionable insights while keeping your infrastructure costs to a minimum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-8 rounded-[2rem] border border-[#cccccc] bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-[#0072FF]/10 text-[#0072FF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <feature.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-[#5c5c5c] leading-relaxed text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
