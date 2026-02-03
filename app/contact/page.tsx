import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { TrendingUp, Eye, Users, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Request Demo | Percepvision AI",
  description: "Request a facility safety & operations demo to see how Percepvision transforms your existing camera system into a scalable AI-powered platform for safety, security, and operational efficiency.",
}

const demoFeatures = [
  "Seamless integration with existing IP cameras and VMS",
  "Real-time safety and security detection",
  "Crowd, occupancy, and operational analytics",
  "Flexible deployment options (on-premise, edge, centralized)",
]

const targetAudience = [
  "Facility & Operations Managers",
  "Security & Safety Teams",
  "Public-sector Organizations",
  "Industrial Operators",
]

export default function ContactPage() {
  return (
    <div className="bg-white text-[#333333] flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full z-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#e1ffff] rounded-full blur-3xl opacity-30 mix-blend-multiply" />
          <div className="absolute bottom-20 right-40 w-96 h-96 bg-[#4D8BFF] rounded-full blur-3xl opacity-10 mix-blend-multiply" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Content */}
            <div className="lg:col-span-7 pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0072FF]/10 border border-[#0072FF]/20 text-xs font-semibold text-[#0072FF] uppercase tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-[#0072FF] animate-pulse" />
                Request A Demo
              </div>

              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#333333] mb-6 leading-tight">
                AI-Powered Smart Safety <br className="hidden md:block" />& Video Analytics Demo
              </h1>

              <p className="text-xl text-[#5c5c5c] mb-8 leading-relaxed font-light">
                Request a facility safety & operations demo to see how Percepvision transforms your existing camera system into a scalable AI-powered platform for safety, security, and operational efficiency.
              </p>

              <div className="p-6 bg-[#f5f5f5]/50 rounded-2xl border border-[#cccccc] mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white rounded-lg border border-[#cccccc] shadow-sm text-[#0072FF]">
                    <TrendingUp className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#333333] text-lg tracking-tight mb-1">Core Value Proposition</h3>
                    <p className="text-[#5c5c5c]">
                      Improve safety, reduce operational costs, and gain actionable insights - using the cameras you already have.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                {/* What You'll See */}
                <div>
                  <h3 className="text-lg font-semibold text-[#333333] mb-6 flex items-center gap-2">
                    <Eye className="w-5 h-5 text-[#0072FF]" strokeWidth={1.5} />
                    What You&apos;ll See in the Demo
                  </h3>
                  <ul className="space-y-4">
                    {demoFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-green-600" strokeWidth={2} />
                        </div>
                        <span className="text-[#5c5c5c]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-[#5c5c5c] italic ml-8">
                    Designed for shopping malls, museums, transport hubs, public security, and industrial facilities.
                  </p>
                </div>

                {/* Who This Is For */}
                <div>
                  <h3 className="text-lg font-semibold text-[#333333] mb-6 flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#0072FF]" strokeWidth={1.5} />
                    Who This Demo Is For
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {targetAudience.map((audience) => (
                      <div key={audience} className="flex items-center gap-3 p-3 rounded-lg border border-[#cccccc] bg-white">
                        <div className="w-2 h-2 rounded-full bg-[#4D8BFF]" />
                        <span className="text-sm font-medium text-[#333333]">{audience}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-5">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
