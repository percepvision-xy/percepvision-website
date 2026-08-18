import { Camera, Cpu, Move, Scaling, Shield, ShieldCheck } from "lucide-react"

const cards = [
  {
    icon: Camera,
    title: "Works with Existing Cameras & VMS",
    description:
      "Add AI intelligence to your existing CCTV and VMS infrastructure without replacing your camera estate.",
  },
  {
    icon: Cpu,
    title: "Edge AI Processing",
    description:
      "Process video close to the source for low-latency intelligence while reducing bandwidth and cloud dependency.",
  },
  {
    icon: Move,
    title: "Flexible Deployment",
    description: "Deploy on-premises, at the edge or in hybrid environments to meet operational and IT requirements.",
  },
  {
    icon: Scaling,
    title: "Enterprise Scalability",
    description:
      "Scale from individual sites to multi-site deployments with centralised management and intelligence.",
  },
  {
    icon: Shield,
    title: "Open & Integratable",
    description:
      "Connect intelligence with VMS, access control and enterprise systems through APIs and integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Privacy by Design",
    description:
      "Protect video and analytics data with secure communications, access controls and privacy-conscious architecture.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-700 font-medium tracking-wider uppercase text-sm mb-4">Platform Advantages</p>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
            Built for Your Existing Infrastructure.
            <br className="hidden md:block" />
            <span className="text-blue-600">Designed for Enterprise Scale.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
            Add enterprise AI intelligence to the cameras and systems you already have — without replacing your existing
            CCTV infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-[1.5rem] p-8 border border-neutral-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-3">{card.title}</h3>
              <p className="text-base text-neutral-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
