'use client';

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google";

export function HeroSection() {
  return (
    <section className="md:pt-40 md:pb-28 overflow-hidden pt-32 pb-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#e1ffff] rounded-full blur-3xl opacity-50 mix-blend-multiply" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#4D8BFF] rounded-full blur-3xl opacity-20 mix-blend-multiply" />
      </div>

      <div className="z-10 text-center max-w-7xl mx-auto px-6 relative">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f5f5] border border-[#cccccc] text-xs font-medium text-[#5c5c5c] mb-8">
          <span className="w-2 h-2 rounded-full bg-[#0072FF] animate-pulse" />
          Enterprise AI-Powered Visual Intelligence
        </div>
        <h1 className="md:text-7xl leading-tight text-5xl font-semibold text-[#333333] tracking-tight max-w-4xl mx-auto mb-6">
          Turn Existing Cameras into <br />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-[#0072FF] to-[#003699]">
            Operational Intelligence
          </span>
        </h1>
        <p className="leading-relaxed text-xl font-normal text-[#5c5c5c] max-w-2xl mx-auto mb-10">
          PercepVision transforms existing camera infrastructure into real-time insights that help organisations improve safety, security and operational efficiency.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#333333] text-white font-medium rounded-full hover:bg-[#5c5c5c] transition-colors flex items-center justify-center gap-2" onClick={
              () => {
                sendGAEvent('event', 'demo_form_viewed', { value: 'testing' })
              }
            }
          >
            Request Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* UI Mockup - Video */}
        <div className="mt-16 relative mx-auto max-w-5xl rounded-xl border border-[#cccccc] shadow-2xl bg-white/50 backdrop-blur-sm overflow-hidden">
          <div className="flex border-[#e5e5e5] bg-white/80 border-b py-3 px-4 gap-2 items-center">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#cccccc]" />
              <div className="w-3 h-3 rounded-full bg-[#cccccc]" />
              <div className="w-3 h-3 rounded-full bg-[#cccccc]" />
            </div>
            <div className="ml-4 text-xs text-[#5c5c5c] font-medium bg-[#f5f5f5] px-2 py-0.5 rounded">
              Product Demo
            </div>
          </div>
          <div className="aspect-video bg-black relative group overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/pHhiqLOtfcM?si=EnSIkaIECMiOmarE"
              title="Percepvision AI Product Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
