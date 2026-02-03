import {
  ScanFace,
  Users,
  ShieldAlert,
  AlertTriangle,
  Footprints,
  FileSearch,
  Flame,
  Car,
  BarChartBig,
  Activity,
  Package,
  Crosshair,
} from "lucide-react"

const features = [
  { icon: ScanFace, title: "Facial Recognition & Access Control" },
  { icon: Users, title: "Occupancy Management" },
  { icon: ShieldAlert, title: "Intrusion Detection" },
  { icon: AlertTriangle, title: "Violence & Threat Detection" },
  { icon: Footprints, title: "Tailgating Prevention" },
  { icon: FileSearch, title: "Search and Investigation" },
  { icon: Flame, title: "Smoke and Fire Detection" },
  { icon: Car, title: "Car Park Management" },
  { icon: BarChartBig, title: "Business Intelligence" },
  { icon: Activity, title: "Slip, Trip and Fall Detection" },
  { icon: Package, title: "Unattended Object Detection" },
  { icon: Crosshair, title: "Weapon Detection" },
]

export function FeaturesSection() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-[#0072FF] font-semibold tracking-tight uppercase text-sm">Features</span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#333333] mt-2 mb-6">
            <span className="text-[#0072FF]">AI-driven video analytics</span> features include:
          </h2>
          <p className="text-lg text-[#5c5c5c] leading-relaxed max-w-3xl mx-auto">
            Our AI-driven video analytics platform effortlessly connects with your current CCTV security camera and VMS setups. Experience real-time event alerts and reports that enhance your security, crowd management and business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#cccccc] shadow-sm flex items-center justify-center mb-5 text-[#333333] group-hover:scale-110 group-hover:border-[#0072FF]/30 group-hover:text-[#0072FF] group-hover:shadow-lg transition-all duration-300">
                <feature.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-[#333333] tracking-tight">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
