"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu } from "lucide-react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 top-0 start-0 bg-white border-b border-gray-100">
      <div className="flex flex-wrap max-w-7xl mx-auto py-4 px-6 items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec64ebf2-6582-47b5-8227-1e0828968767_320w.png"
            alt="Percepvision Logo"
            width={36}
            height={36}
            className="flex w-9 h-9 rounded-full items-center justify-center"
          />
          <span className="self-center whitespace-nowrap text-2xl font-medium text-gray-900 tracking-tight">
            Percepvision
          </span>
        </Link>

        {/* Desktop Navigation & CTA */}
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/solutions"
            className="text-lg font-normal text-gray-900 hover:text-[#0066FF] transition-colors"
          >
            Solutions
          </Link>
          <Link
            href="/blog"
            className="text-lg font-normal text-gray-900 hover:text-[#0066FF] transition-colors"
          >
            Insights
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#0066FF] text-white text-base font-normal rounded-full hover:bg-blue-600 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#00FF9D]" />
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="navbar-sticky"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`items-center justify-between w-full md:hidden ${mobileMenuOpen ? "block" : "hidden"}`} id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 font-normal border border-gray-100 rounded-lg bg-gray-50 gap-2">
            <li>
              <Link
                href="/solutions"
                className="block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block py-2 px-3 text-lg text-gray-900 rounded hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insights
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-2 px-6 py-2.5 bg-[#0066FF] text-white text-base font-normal rounded-full hover:bg-blue-600 transition-colors w-max"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="w-2 h-2 rounded-full bg-[#00FF9D]" />
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
