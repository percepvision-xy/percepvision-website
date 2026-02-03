import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#333333] mb-6">
          Ready to secure your world?
        </h2>
        <p className="text-xl text-[#5c5c5c] mb-10 leading-relaxed">
          Join the forward-thinking companies using Percepvision to protect their assets and people. Schedule a personalized consultation today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#0072FF] text-white font-medium rounded-full hover:bg-[#003699] transition-colors shadow-lg shadow-[#0072FF]/30"
          >
            Schedule Consultation
          </Link>
          <span className="w-full sm:w-auto px-8 py-4 bg-transparent text-[#333333] border border-[#cccccc] font-medium rounded-full cursor-not-allowed opacity-50">
            View Pricing
          </span>
        </div>
      </div>
    </section>
  )
}
