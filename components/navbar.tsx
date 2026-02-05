"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Product", active: "/" },
  { href: "/solutions", label: "Solutions" },
  { href: "/blog", label: "Blog" },
  { href: "#", label: "Resources", disabled: true },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed w-full z-50 top-0 start-0 border-b border-[#e5e5e5] bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="flex w-8 h-8 rounded-lg items-center justify-center">
            <Image
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec64ebf2-6582-47b5-8227-1e0828968767_320w.png"
              alt="Percepvision Logo"
              width={32}
              height={32}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <span className="self-center whitespace-nowrap text-xl font-semibold text-[#333333] tracking-tight">
            Percepvision
          </span>
        </Link>

        <div className="flex md:order-2 space-x-3 md:space-x-4">
          <button
            type="button"
            className="text-[#5c5c5c] hover:text-[#0072FF] font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors cursor-not-allowed opacity-50"
            disabled
          >
            Log in
          </button>
          <button
            type="button"
            className="text-white bg-[#0072FF] hover:bg-[#003699] focus:outline-none font-medium rounded-full text-sm px-6 py-2.5 text-center transition-all shadow-lg shadow-[#0072FF]/30"
          >
            <Link href="/contact">
              Get Started
            </Link>
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#5c5c5c] rounded-lg md:hidden hover:bg-[#f5f5f5] focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle main menu</span>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${mobileMenuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-[#e5e5e5] rounded-lg bg-[#f5f5f5] md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            {navLinks.map((link) => (
              <li key={link.href + link.label}>
                {link.disabled ? (
                  <span className="block py-2 px-3 text-[#5c5c5c]/50 cursor-not-allowed rounded md:p-0">
                    {link.label}
                  </span>
                ) : (
                  <Link
                    href={link.href}
                    className={`block py-2 px-3 rounded md:p-0 transition-colors ${
                      isActive(link.href)
                        ? "text-[#0072FF] md:bg-transparent"
                        : "text-[#5c5c5c] hover:bg-[#f5f5f5] md:hover:bg-transparent md:hover:text-[#0072FF]"
                    }`}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
