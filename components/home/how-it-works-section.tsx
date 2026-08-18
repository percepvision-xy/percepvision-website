import { Eye, BookOpenText, Rocket } from "lucide-react"

const steps = [
  {
    icon: Eye,
    title: "See",
    description: "Connect existing cameras and video-management systems.",
  },
  {
    icon: BookOpenText,
    title: "Understand",
    description: "Analyse live video to identify events, movement patterns and operational trends.",
  },
  {
    icon: Rocket,
    title: "Act",
    description: "Deliver alerts and insights to the people and systems responsible for responding.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="w-full flex flex-col">
      <div className="w-full py-24 px-6 flex flex-col items-center text-center bg-[#0B3B9B]">
        <h3 className="text-white text-sm md:text-base font-semibold tracking-wider uppercase mb-6">How It Works</h3>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
          See. Understand. <span className="text-[#00DF81]">Act.</span>
        </h2>
        <p className="text-lg md:text-xl text-white mb-20 max-w-3xl mx-auto font-normal">
          Transform existing camera feeds into real-time operational intelligence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 max-w-6xl mx-auto w-full">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-[#E0E6ED] rounded-3xl flex items-center justify-center mb-6 text-[#0B3B9B]">
                <step.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-semibold tracking-tight text-white mb-3">{step.title}</h4>
              <p className="text-base text-white/90 leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
