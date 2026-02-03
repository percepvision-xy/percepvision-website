import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import {
  AlertCircle,
  CheckCircle2,
  CheckCircle,
  Award,
  ArrowRight,
  ShoppingBag,
  Landmark,
  Building2,
  ScanFace,
  Zap,
  ShieldCheck,
  Factory,
  ChevronDown,
  Wrench,
  Activity,
  BarChart3,
  Mail,
  BookOpen,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Solutions | Percepvision AI",
  description: "Smart Safety & Intelligence for Mixed-Use Developments. Improve Visitor Safety, Optimize Footfall, and Maximize Commercial Value with Percepvision AI video analytics.",
}

const challenges = [
  "High crowd volumes driven by rail and underground connectivity",
  "Peak-time congestion across escalators, lifts, and ticket halls",
  "After-hours security risks and unauthorized access",
  "Limited visibility into underutilized circulation and retail zones",
]

const howWeHelp = [
  "Crowd flow & footfall analytics across escalators and lifts",
  "Zone-level occupancy intelligence to identify high/low-value areas",
  "Real-time alerts for intrusion, loitering, and unattended objects",
  "Actionable insights to optimize tenant placement and staffing",
]

const outcomes = [
  "Differentiation of commuter vs. retail traffic",
  "Identification of high-value circulation zones",
  "Early risk detection with reduced false alarms",
  "Activation of underperforming spatial areas",
]

const solutionCards = [
  {
    icon: ShoppingBag,
    title: "Retail Intelligence",
    description: "Prevent shrinkage while analyzing shopper behavior to optimize store layout and staffing efficiency.",
  },
  {
    icon: Landmark,
    title: "Public Space Surveillance",
    description: "Monitor large crowds and open areas with wide-angle analytics that respect individual privacy.",
  },
  {
    icon: Building2,
    title: "Corporate Facility Monitoring",
    description: "Seamless access control integration and anomaly detection for secure, high-traffic office environments.",
  },
]

const services = [
  {
    icon: Wrench,
    title: "Seamless Installation",
    description: "Expert deployment with minimal disruption to your daily operations, fully integrated with existing hardware.",
  },
  {
    icon: Activity,
    title: "24/7 Ongoing Monitoring",
    description: "Continuous system health checks and automated alert escalation to ensure zero downtime.",
  },
  {
    icon: BarChart3,
    title: "Analytics Reporting",
    description: "Weekly executive summaries and granular data access to drive operational improvements.",
  },
]

const faqs = [
  {
    question: "Does Percepvision integrate with existing CCTV cameras?",
    answer: "Yes. Our solution is hardware-agnostic and designed to overlay onto your existing IP camera infrastructure, reducing the need for costly hardware replacements.",
  },
  {
    question: "Is facial recognition data stored securely?",
    answer: "Absolutely. We employ enterprise-grade encryption for all data at rest and in transit. We are fully GDPR and CCPA compliant, ensuring biometric data is handled with the strictest privacy protocols.",
  },
  {
    question: "What is the typical deployment timeline?",
    answer: "For most corporate and retail environments, our software-first deployment can be active within 48-72 hours. Full custom model training for complex industrial sites typically takes 2-3 weeks.",
  },
  {
    question: "Do you offer 24/7 technical support?",
    answer: "Yes, our Enterprise tier includes dedicated 24/7 support, while our Business tier offers extended business hours support with emergency escalation protocols.",
  },
]

export default function SolutionsPage() {
  return (
    <div className="bg-white text-[#111111]">
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-16">
            <div className="w-10 h-10 bg-[#0072FF] rounded-sm shadow-sm" />
            <h1 className="text-4xl font-extrabold tracking-tight text-[#111111] uppercase">Solutions</h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Content Column */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111111] mb-5 leading-[1.1]">
                  Smart Safety & Intelligence for Mixed-Use Developments
                </h2>
                <p className="text-xl md:text-2xl font-semibold text-[#0072FF] leading-snug">
                  Improve Visitor Safety, Optimize Footfall, and Maximize Commercial Value
                </p>
              </div>

              {/* Quote Block */}
              <div className="border-l-[6px] border-[#0072FF]/20 pl-6 py-2">
                <p className="leading-relaxed text-lg font-normal text-[#5c5c5c]">
                  <span className="font-medium text-[#111111]">Paddington Square</span> demonstrates how AI-powered video analytics can transform a complex, transport-connected development into a safer, more efficient, and more commercially optimized environment.
                </p>
              </div>

              {/* Challenges & Solutions Grid */}
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Challenges */}
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <AlertCircle className="w-4 h-4 text-[#9ca3af]" strokeWidth={1.5} />
                    <span className="text-xs font-bold text-[#9ca3af] tracking-widest uppercase">Challenges</span>
                  </div>
                  <ul className="space-y-4">
                    {challenges.map((challenge) => (
                      <li key={challenge} className="flex items-start gap-3 text-[#5c5c5c] text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#9ca3af] mt-2 shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* How Percepvision Helps */}
                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <CheckCircle2 className="w-4 h-4 text-[#0072FF]" strokeWidth={1.5} />
                    <span className="text-[#0072FF] uppercase text-xs font-bold tracking-widest">How Percepvision Helps</span>
                  </div>
                  <ul className="space-y-4">
                    {howWeHelp.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#111111] font-medium text-sm leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Outcomes Card */}
              <div className="bg-[#f5f5f5]/60 rounded-xl p-8 border border-[#e5e5e5]/50">
                <div className="flex items-center gap-2 mb-6">
                  <Award className="w-5 h-5 text-orange-400" strokeWidth={1.5} />
                  <span className="text-xs font-bold text-[#111111] tracking-widest uppercase">Key Outcomes</span>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                  {outcomes.map((outcome) => (
                    <div key={outcome} className="flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-[#0072FF] mt-2 shrink-0" />
                      <span className="text-sm font-semibold text-[#111111] leading-snug">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Link */}
              <div>
                <Link
                  href="/blog/paddington-square"
                  className="inline-flex items-center text-[#0072FF] hover:text-[#003699] transition-colors group text-base font-bold"
                >
                  Explore mixed-use Case Study
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="relative h-full pt-4">
              <div className="sticky top-32">
                <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#111111] aspect-[4/3] md:aspect-[3/4] lg:aspect-square relative group">
                  <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                    alt="Paddington Square modern architecture"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 md:right-auto md:w-auto">
                    <div className="bg-neutral-900/80 backdrop-blur-md text-white px-5 py-3.5 rounded-xl border border-white/10 shadow-xl flex items-center gap-3">
                      <div className="bg-white/10 p-1.5 rounded-lg">
                        <Factory className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </div>
                      <span className="font-medium text-sm tracking-wide">Industrial Analytics Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features List Section */}
          <div className="mt-40 mb-32">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111111] mb-6">
                Tailored Security Ecosystems
              </h2>
              <p className="text-lg md:text-xl text-[#5c5c5c] leading-relaxed">
                Precision-engineered surveillance strategies designed to meet the specific challenges of your environment.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {solutionCards.map((card) => (
                <div
                  key={card.title}
                  className="group p-8 rounded-2xl border border-[#e5e5e5] bg-white hover:shadow-xl hover:shadow-[#e5e5e5]/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#e1ffff]/50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0072FF] group-hover:text-white transition-colors text-[#0072FF]">
                    <card.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111111] mb-3 tracking-tight">{card.title}</h3>
                  <p className="text-lg text-[#5c5c5c] leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Tech Feature Section */}
          <div className="mb-32 rounded-3xl bg-[#111111] overflow-hidden relative isolate">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />
            <div className="grid lg:grid-cols-2 gap-12 p-8 md:p-16 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-[#6aa0ff] text-xs font-semibold tracking-wider uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#0072FF] animate-pulse" />
                  Proprietary Technology
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">
                  Adaptive AI that learns your environment
                </h2>
                <p className="text-lg md:text-xl text-neutral-300 leading-relaxed">
                  Our neural networks do more than just record; they understand. Tailored specifically for distinct environments, our AI distinguishes between normal activity and potential threats with 99.8% accuracy.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-4 text-neutral-200 text-lg">
                    <ScanFace className="w-5 h-5 text-[#0072FF]" strokeWidth={1.5} />
                    <span>Context-aware behavioral analysis</span>
                  </li>
                  <li className="flex items-center gap-4 text-neutral-200 text-lg">
                    <Zap className="w-5 h-5 text-[#0072FF]" strokeWidth={1.5} />
                    <span>Real-time edge processing</span>
                  </li>
                  <li className="flex items-center gap-4 text-neutral-200 text-lg">
                    <ShieldCheck className="w-5 h-5 text-[#0072FF]" strokeWidth={1.5} />
                    <span>Self-correcting false alarm reduction</span>
                  </li>
                </ul>
              </div>

              {/* UI Visualization */}
              <div className="relative h-full min-h-[400px] bg-neutral-800 rounded-2xl border border-neutral-700 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0072FF] via-[#4D8BFF] to-[#0072FF]" />
                <div className="flex justify-between items-center mb-8">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs font-mono text-neutral-400">SYS.MONITOR.V2</div>
                </div>
                <div className="space-y-4">
                  <div className="bg-neutral-900/80 p-4 rounded-lg border border-neutral-700 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-md bg-red-500/20 flex items-center justify-center text-red-500">
                      <AlertCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-semibold text-white">Unauthorized Access</span>
                        <span className="text-xs text-red-400 font-mono">CRITICAL</span>
                      </div>
                      <div className="w-full bg-neutral-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full w-[92%]" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-neutral-900/80 p-4 rounded-lg border border-neutral-700 flex items-center gap-4 opacity-60">
                    <div className="w-10 h-10 rounded-md bg-green-500/20 flex items-center justify-center text-green-500">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-semibold text-white">Lobby Traffic</span>
                        <span className="text-xs text-green-400 font-mono">NORMAL</span>
                      </div>
                      <div className="w-full bg-neutral-700 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[34%]" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-neutral-700">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Detection Confidence</div>
                      <div className="text-3xl font-bold text-white tracking-tight">99.8%</div>
                    </div>
                    <div className="h-10 w-32 flex items-end gap-1">
                      <div className="w-full bg-[#6aa0ff]/20 h-[40%] rounded-sm" />
                      <div className="w-full bg-[#6aa0ff]/20 h-[60%] rounded-sm" />
                      <div className="w-full bg-[#6aa0ff]/20 h-[30%] rounded-sm" />
                      <div className="w-full bg-[#6aa0ff]/20 h-[80%] rounded-sm" />
                      <div className="w-full bg-[#0072FF] h-[100%] rounded-sm shadow-[0_0_10px_rgba(0,114,255,0.5)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-32">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111111] mb-4">
                End-to-End Service Delivery
              </h2>
              <p className="text-lg text-[#5c5c5c]">
                We don&apos;t just sell software; we provide a complete security infrastructure.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {services.map((service) => (
                <div key={service.title} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#f5f5f5] flex items-center justify-center text-[#111111] mb-6 border border-[#e5e5e5]">
                    <service.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-[#111111] mb-3">{service.title}</h3>
                  <p className="text-lg text-[#5c5c5c] leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-32 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#111111] mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="group border-b border-[#e5e5e5] pb-4">
                  <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                    <span className="text-xl font-medium text-[#111111]">{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <ChevronDown className="w-5 h-5 text-[#9ca3af]" strokeWidth={1.5} />
                    </span>
                  </summary>
                  <div className="text-[#5c5c5c] mt-3 text-lg leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-8">
            <div className="bg-[#111111] rounded-3xl p-10 md:p-16 text-center relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-neutral-700 via-neutral-900 to-transparent" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
                  Ready to secure your future?
                </h2>
                <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed">
                  Join over 500+ enterprises using Percepvision to protect their assets and optimize their spaces. Get a personalized recommendation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-[#0072FF] text-white hover:bg-[#6aa0ff] font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-[#0072FF]/30 flex items-center justify-center gap-2"
                  >
                    Contact Sales
                    <Mail className="w-5 h-5" />
                  </Link>
                  <span className="bg-white/10 text-white font-semibold text-lg px-8 py-4 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2 cursor-not-allowed opacity-50">
                    View Documentation
                    <BookOpen className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
