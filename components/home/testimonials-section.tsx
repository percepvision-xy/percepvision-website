import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Percepvision transformed how we manage security at our logistics hubs. The automated incident analysis saves our team hours every single day.",
    author: "Sarah Jenkins",
    role: "Head of Operations, MetroLogistics",
  },
  {
    quote:
      "The real-time threat detection is incredibly fast. We moved from reactive to proactive security within weeks of installation.",
    author: "David Chen",
    role: "CTO, Skyline Properties",
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
