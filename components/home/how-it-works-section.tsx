import { Network, Cpu, Server } from "lucide-react"

const steps = [
  {
    icon: Network,
    title: "Connect",
    description: "Connect to existing IP cameras and VMS seamlessly with no hardware replacement.",
    highlighted: false,
  },
  {
    icon: Cpu,
    title: "Analyze",
    description: "Our AI models scan your environment, learning patterns and detecting anomalies in real-time.",
    highlighted: true,
  },
  {
    icon: Server,
    title: "Act",
    description: "Deploy AI analytics locally or in the cloud to get instant alerts on your dashboard.",
    highlighted: false,
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-[#f5f5f5] border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-[#0072FF] font-bold tracking-wider uppercase text-sm mb-4">The Process</div>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#333333] mb-20">
          Upgrade Your Existing Cameras
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-[#cccccc] -z-10 transform scale-x-75" />

          {steps.map((step) => (
            <div key={step.title} className="relative flex flex-col items-center">
              <div
                className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 z-10 ${
                  step.highlighted
                    ? "border-2 border-[#0072FF] shadow-xl shadow-[#0072FF]/10"
                    : "border border-[#cccccc]"
                }`}
              >
                <step.icon
                  className={`w-10 h-10 ${step.highlighted ? "text-[#0072FF]" : "text-[#5c5c5c]"}`}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl font-semibold text-[#333333] mb-3 tracking-tight">{step.title}</h3>
              <p className="text-base text-[#5c5c5c] leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
