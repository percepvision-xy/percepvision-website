import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "The advanced analytics are fundamental to our security protocols. Intrusion detection, loitering detection, and unattended obiect detection provide crucial proactive monitoring capabilities instantly alerting our teams before activity can escalate. The platform has elevated our operational planning, asset value, and public safety standards.",
    author: "Kuldeep Kainth",
    role: "Director of Innovative Solutions, CIS Security",
  },
  {
    quote:
      "PercepVision delivers a scalable, state-of-the-art Al video analytics platform engineered for reliability, performance, and seamless deployment across large-scale environments.",
    author: "Robert Yang",
    role: "PercepVision AI",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#333333]">
            Trusted by Industry Leaders
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white p-10 rounded-2xl shadow-sm border border-[#cccccc]">
              <div className="flex gap-1 mb-6 text-[#0072FF]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-[#333333] font-medium leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#5c5c5c] rounded-full" />
                <div>
                  <div className="text-base font-semibold text-[#333333]">{testimonial.author}</div>
                  <div className="text-sm text-[#5c5c5c]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
