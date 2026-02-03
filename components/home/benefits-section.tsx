import { CheckCircle2, ShieldCheck, Clock, TrendingUp } from "lucide-react"

const benefits = [
  {
    title: "Increased Safety",
    description: "Proactive alerts prevent incidents before they escalate.",
  },
  {
    title: "Reduced Response Times",
    description: "Direct integration with security teams cuts latency.",
  },
  {
    title: "Actionable Insights",
    description: "Data-driven decisions for property managers.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            {/* Abstract Graphic for Benefits */}
            <div className="aspect-square rounded-2xl bg-gradient-to-tr from-[#f5f5f5] to-white border border-[#cccccc] p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#6aa0ff]/20 rounded-full blur-3xl" />

              <div className="relative z-10 grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-lg border border-[#e5e5e5] flex items-center gap-4">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#333333]">Safety Score</div>
                    <div className="text-xs text-[#5c5c5c]">Increased by 45%</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-[#e5e5e5] flex items-center gap-4 ml-8">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#333333]">Response Time</div>
                    <div className="text-xs text-[#5c5c5c]">Reduced by 3 mins</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-lg border border-[#e5e5e5] flex items-center gap-4">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#333333]">Ops Efficiency</div>
                    <div className="text-xs text-[#5c5c5c]">Optimized</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-[#0072FF] uppercase text-sm font-semibold tracking-tight">Why Percepvision</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#333333] mt-2 mb-6">
              Designed for peace of mind.
            </h2>
            <p className="text-xl text-[#5c5c5c] mb-8 leading-relaxed">
              Security should not be a burden. Percepvision streamlines your operations while providing a layer of safety that never sleeps.
            </p>

            <ul className="space-y-6">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#0072FF] mt-1 flex-shrink-0" strokeWidth={1.5} />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-[#333333]">{benefit.title}</h4>
                    <p className="text-[#5c5c5c] mt-1 text-lg">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
