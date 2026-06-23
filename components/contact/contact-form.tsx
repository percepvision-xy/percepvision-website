"use client"

import Link from "next/link"
import React, { useState }  from "react"
import { ChevronDown, Loader2 } from "lucide-react"
import { sendGAEvent } from "@next/third-parties/google";

const industryOptions = [
  "Shopping Mall / Retail",
  "Museum / Cultural",
  "Transport Hub",
  "Industrial / Logistics",
  "Public Sector",
  "Corporate Real Estate",
  "Other",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries()) // "dict"

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-type" : "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message.")
      }

      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Please try again or email us directly.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-[#cccccc] shadow-xl shadow-[#cccccc]/20 p-8 sticky top-28">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold text-[#333333] mb-3">Thank you for your request</h3>
          <p className="text-[#5c5c5c]">The Percepvision team will contact you shortly to schedule your personalized demo.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl border border-[#cccccc] shadow-xl shadow-[#cccccc]/20 sticky top-28">
      <div className="p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[#333333] mb-2">Schedule Your Demo</h2>
          <p className="text-sm text-[#5c5c5c]">
            Complete the form below. We&apos;ll contact you to schedule a personalized walkthrough.
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label htmlFor="fullname" className="block text-xs font-semibold text-[#5c5c5c] mb-1.5 uppercase tracking-wide">
              Full Name
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="w-full bg-[#f5f5f5]/50 border border-[#cccccc] text-[#333333] text-sm rounded-lg focus:ring-2 focus:ring-[#0072FF] focus:border-[#0072FF] block p-3 transition-all outline-none placeholder-[#cccccc]"
              placeholder="Jane Doe"
              required
              disabled={loading}
            />
          </div>

          {/* Company & Phone Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-[#5c5c5c] mb-1.5 uppercase tracking-wide">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full bg-[#f5f5f5]/50 border border-[#cccccc] text-[#333333] text-sm rounded-lg focus:ring-2 focus:ring-[#0072FF] focus:border-[#0072FF] block p-3 transition-all outline-none placeholder-[#cccccc]"
                placeholder="Acme Inc."
                required
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#5c5c5c] mb-1.5 uppercase tracking-wide">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full bg-[#f5f5f5]/50 border border-[#cccccc] text-[#333333] text-sm rounded-lg focus:ring-2 focus:ring-[#0072FF] focus:border-[#0072FF] block p-3 transition-all outline-none placeholder-[#cccccc]"
                placeholder="+1 (555) 000-0000"
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-[#5c5c5c] mb-1.5 uppercase tracking-wide">
              Work Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-[#f5f5f5]/50 border border-[#cccccc] text-[#333333] text-sm rounded-lg focus:ring-2 focus:ring-[#0072FF] focus:border-[#0072FF] block p-3 transition-all outline-none placeholder-[#cccccc]"
              placeholder="jane@company.com"
              required
              disabled={loading}
            />
          </div>

          {/* Industry Dropdown */}
          <div>
            <label htmlFor="industry" className="block text-xs font-semibold text-[#5c5c5c] mb-1.5 uppercase tracking-wide">
              Industry
            </label>
            <div className="relative">
              <select
                id="industry"
                name="industry"
                className="w-full bg-[#f5f5f5]/50 border border-[#cccccc] text-[#333333] text-sm rounded-lg focus:ring-2 focus:ring-[#0072FF] focus:border-[#0072FF] block p-3 appearance-none transition-all outline-none"
                required
                disabled={loading}
              >
                <option value="">Select your industry</option>
                {industryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-[#5c5c5c] pointer-events-none" />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#5c5c5c] mb-1.5 uppercase tracking-wide">
              Tell us about your needs (Optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-[#f5f5f5]/50 border border-[#cccccc] text-[#333333] text-sm rounded-lg focus:ring-2 focus:ring-[#0072FF] focus:border-[#0072FF] block p-3 transition-all outline-none placeholder-[#cccccc] resize-none"
              placeholder="Describe your facility, current challenges, or specific features you're interested in..."
              disabled={loading}
            />
          </div>
          
          {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-white bg-[#0072FF] hover:bg-[#003699] focus:ring-4 focus:outline-none focus:ring-[#e1ffff] font-semibold rounded-full text-base px-8 py-4 text-center transition-all shadow-lg shadow-[#0072FF]/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            onClick={
              () => {
                sendGAEvent('event', 'demo_form_submitted', { value: 'testing' })
              }
            }
          >
            {loading && <Loader2 className="animate-spin w-4 h-4" />}
            {loading ? "Sending..." : "Request Demo"}
          </button>
          
          <p className="text-xs text-center text-[#5c5c5c] mt-4">
            By submitting, you agree to our{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-[#0072FF] transition-colors">
              Privacy Policy
            </Link>
            .
          </p>
        </form>
        
      </div>
      <div className="border-t border-gray-300">
        <div className="lg:px-8 py-3.5 text-[#515151] text-center">
          Prefer email? Contact us at&nbsp;
          <a href="mailto:info@percepvision.com" className="underline font-bold text-[#0072FF]">
            info@percepvision.com
          </a>.
        </div>
      </div>
    </div>
    
  )
}
