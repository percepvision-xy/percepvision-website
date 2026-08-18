import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#333333] tracking-tight">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center bg-[#fafafa] border border-[#e5e5e5] rounded-2xl p-6 md:p-10 shadow-sm">
            <div className="flex justify-center gap-1 text-[#0072FF] mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" strokeWidth={1.5} />
              ))}
            </div>
            <blockquote className="leading-relaxed text-xl font-normal text-[#333333] mb-6">
              &ldquo;The advanced analytics are fundamental to our security protocols. Intrusion Detection, Loitering
              Detection, and Unattended Object Detection provide crucial proactive monitoring capabilities, instantly
              alerting our teams before activity can escalate. The platform has elevated our operational planning, asset
              value, and public safety standards.&rdquo;
            </blockquote>
            <div className="flex justify-center flex-wrap gap-4 items-center text-sm md:text-base">
              <strong className="font-semibold text-[#333333]">Kuldeep Kainth</strong>
              <span className="text-[#5c5c5c]">Director of Innovative Solutions, CIS Security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
