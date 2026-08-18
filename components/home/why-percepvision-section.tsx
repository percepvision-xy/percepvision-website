import { Check, ShieldCheck, Clock, TrendingUp } from "lucide-react"

const floatingCards = [
  { icon: ShieldCheck, color: "emerald", title: "Safety Score", detail: "Increased by 45%", align: "self-start w-[90%]" },
  { icon: Clock, color: "blue", title: "Response Time", detail: "Reduced by 3 mins", align: "self-end w-[90%]" },
  { icon: TrendingUp, color: "purple", title: "Ops Efficiency", detail: "Optimized", align: "w-full", highlight: true },
  { icon: Clock, color: "blue", title: "Response Time", detail: "Reduced by 3 mins", align: "self-start ml-[5%] w-[90%]" },
  { icon: ShieldCheck, color: "emerald", title: "Safety Score", detail: "Increased by 45%", align: "self-start w-[90%]" },
]

const iconColorMap: Record<string, string> = {
  emerald: "bg-emerald-50 text-emerald-500",
  blue: "bg-blue-50 text-blue-500",
  purple: "bg-purple-50 text-purple-500",
}

const features = [
  { title: "Improve Safety", description: "Detect emerging risks and give teams faster visibility." },
  { title: "Strengthen Security", description: "Identify unusual activity, intrusion and unattended objects." },
  { title: "Improve Operations", description: "Understand occupancy, visitor flow, queues and space utilisation." },
]

export function WhyPercepvisionSection() {
  return (
    <section className="py-24 border-t border-[#e5e5e5] bg-[#fafafa]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto px-6 items-center">
        {/* Visual Left */}
        <div className="order-2 lg:order-1 relative w-full h-[600px] bg-[#f9fafb] rounded-[2.5rem] border border-neutral-200 overflow-hidden flex flex-col justify-center p-8 md:p-12">
          <div className="relative z-10 w-full max-w-[340px] mx-auto flex flex-col gap-4">
            {floatingCards.map((card, i) => (
              <div
                key={i}
                className={`${card.align} ${
                  card.highlight
                    ? "relative bg-white shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] z-20"
                    : "bg-white/95 backdrop-blur-sm shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
                } border border-neutral-100 rounded-2xl p-4 flex items-center gap-4`}
              >
                {card.highlight && (
                  <div className="absolute -inset-10 bg-blue-400/10 blur-3xl -z-10 rounded-full" />
                )}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${iconColorMap[card.color]}`}
                >
                  <card.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-base font-medium text-neutral-900 tracking-tight">{card.title}</div>
                  <div className="text-sm text-neutral-500">{card.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Right */}
        <div className="order-1 lg:order-2 flex flex-col">
          <span className="text-blue-700 font-medium tracking-wider uppercase text-base mb-4 block">
            Why Percepvision
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-6 leading-tight">
            From Video Footage to
            <br className="hidden md:block" />
            <span className="text-blue-600"> Actionable Intelligence</span>
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed mb-10 max-w-xl">
            Security should not be a burden. Percepvision streamlines your operations while providing a layer of safety
            that never sleeps.
          </p>

          <div className="flex flex-col gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-5 p-6 rounded-[1.5rem] border border-neutral-200 bg-white"
              >
                <div className="shrink-0 w-12 h-12 rounded-full border-2 border-emerald-400 flex items-center justify-center">
                  <Check className="w-6 h-6 text-emerald-500" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-neutral-900 tracking-tight mb-2">{feature.title}</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
