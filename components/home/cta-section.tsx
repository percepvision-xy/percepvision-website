import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#333333] mb-6">
          See What Your Existing Cameras
          <br />
          Could Tell You
        </h2>
        <p className="text-lg md:text-xl text-[#5c5c5c] mb-10 max-w-2xl leading-relaxed">
          Request a tailored demonstration based on your
          <br className="hidden md:block" />
          environment, infrastructure and operational priorities.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#0072FF] text-white text-base font-medium rounded-full hover:bg-[#003699] transition-colors"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#00DF81]" />
          Request a Demo
        </Link>
      </div>
    </section>
  )
}
