import Link from "next/link"
import {
  Flame,
  Activity,
  ShieldAlert,
  Users,
  ScanLine,
  Package,
  DoorOpen,
  Search,
  UserSquare2,
  Clock,
  ArrowRightLeft,
  LayoutGrid,
  Check,
} from "lucide-react"

const columns = [
  {
    title: "Safety & Risk",
    tone: "blue",
    items: [
      { icon: Flame, title: "Fire & Smoke Detection", description: "Identify visible fire and smoke for earlier operational response." },
      { icon: Activity, title: "Falls & Medical Incidents", description: "Detect people on the floor and potential safety incidents." },
      { icon: ShieldAlert, title: "Violence & Abnormal Behaviour", description: "Surface potential physical incidents for operator review." },
      { icon: Users, title: "Crowd Density & Congestion", description: "Monitor overcrowding and identify emerging congestion." },
    ],
  },
  {
    title: "Security & Investigation",
    tone: "emerald",
    items: [
      { icon: ScanLine, title: "Intrusion & Perimeter Monitoring", description: "Detect unauthorised entry into restricted areas." },
      { icon: Package, title: "Unattended Objects", description: "Identify unattended items and generate real-time alerts." },
      { icon: DoorOpen, title: "Tailgating & Access Events", description: "Detect unauthorised movement through controlled entrances." },
      { icon: Search, title: "AI Search & Investigation", description: "Search recorded video by people, attributes, location and time." },
    ],
  },
  {
    title: "Operational Intelligence",
    tone: "purple",
    items: [
      { icon: UserSquare2, title: "Occupancy & People Counting", description: "Understand live occupancy and visitor volumes across spaces." },
      { icon: Clock, title: "Queue & Waiting-Time Analytics", description: "Identify growing queues and service bottlenecks in real time." },
      { icon: ArrowRightLeft, title: "Crowd & Customer Flow", description: "See how people move between entrances, zones and destinations." },
      { icon: LayoutGrid, title: "Heatmaps & Space Utilisation", description: "Reveal high-traffic areas and how spaces are used over time." },
    ],
  },
]

const toneMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-100 text-blue-600",
  emerald: "bg-emerald-50 border-emerald-100 text-emerald-600",
  purple: "bg-purple-50 border-purple-100 text-purple-600",
}

const strip = [
  { label: "Existing CCTV & VMS", className: "bg-neutral-50 border-neutral-200 text-neutral-900" },
  { label: "Edge AI", className: "bg-blue-50 border-blue-200 text-blue-700" },
  { label: "Real-Time Intelligence", className: "bg-purple-50 border-purple-200 text-purple-700" },
  { label: "Alerts · Dashboards · Reports · APIs", className: "bg-emerald-50 border-emerald-200 text-emerald-700" },
]

const stripChecks = [
  "Works with your existing infrastructure",
  "Edge / On-Prem / Hybrid",
  "Enterprise Scale",
  "Privacy by Design",
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-[#F5F6F8]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-blue-700 font-medium tracking-wider uppercase text-sm mb-4 text-center">
          Platform Capabilities
        </p>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-6 text-center">
          One Platform. <span className="text-blue-600">Multiple Operational Outcomes.</span>
        </h2>
        <p className="text-lg md:text-xl text-neutral-600 mb-20 max-w-3xl mx-auto text-center leading-relaxed">
          Transform your existing camera infrastructure into real-time intelligence for safety, security and
          operations. PercepVision connects with existing CCTV and VMS environments to detect events, understand
          movement and occupancy, and turn video into actionable insight.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-col gap-8">
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="text-2xl font-medium tracking-tight text-neutral-900">{column.title}</h3>
              </div>
              {column.items.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className={`shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center ${toneMap[column.tone]}`}
                    aria-hidden="true"
                  >
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-base font-medium text-neutral-900 mb-1">{item.title}</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Platform Strip */}
        <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.04)] border border-neutral-200">
          <p className="text-center text-sm font-medium text-neutral-500 uppercase tracking-wider mb-8">
            One Enterprise Video Intelligence Platform
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mb-10">
            {strip.map((item, i) => (
              <div key={item.label} className="contents">
                <span
                  className={`w-full md:w-auto px-8 py-4 border rounded-xl font-medium text-center ${item.className}`}
                >
                  {item.label}
                </span>
                {i < strip.length - 1 && (
                  <span className="text-neutral-300 rotate-90 md:rotate-0 flex shrink-0" aria-hidden="true">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-neutral-600 font-medium">
            {stripChecks.map((check) => (
              <span key={check} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500" strokeWidth={2} />
                {check}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-16 items-center justify-center">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors flex items-center justify-center"
          >
            Book a Demo
          </Link>
          <Link
            href="/solutions"
            className="w-full sm:w-auto px-8 py-4 bg-white border border-neutral-300 text-neutral-900 font-medium rounded-full hover:bg-neutral-50 transition-colors flex items-center justify-center"
          >
            Explore the Platform
          </Link>
        </div>
      </div>
    </section>
  )
}
