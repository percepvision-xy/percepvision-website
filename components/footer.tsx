import Link from "next/link"
import Image from "next/image"
import { Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-[#cccccc] border-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mb-12">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col pr-4 items-start">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group">
              <Image
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec64ebf2-6582-47b5-8227-1e0828968767_320w.png"
                alt="Percepvision Logo"
                width={32}
                height={32}
                className="w-8 h-8 object-contain rounded-lg"
              />
              <span className="text-lg font-medium text-[#333333] tracking-tight group-hover:text-[#0072FF] transition-colors">
                Percepvision
              </span>
            </Link>
            <p className="leading-relaxed text-sm font-light text-[#5c5c5c] max-w-sm mb-6">
              Intelligent security solutions for the modern enterprise. Powered by advanced AI, designed for human use.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="inline-flex align-middle ml-1 hover:text-[#0072FF] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px] text-[#5c5c5c] hover:text-[#0072FF] transition-colors" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/percepvision-ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#5c5c5c] hover:text-[#0072FF] transition-colors"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="https://www.youtube.com/@PercepVision-AI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-[#5c5c5c] hover:text-[#0072FF] transition-colors"
              >
                <Youtube className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-medium text-[#333333] mb-4 text-sm">Product</h4>
            <ul className="text-sm text-[#5c5c5c] space-y-3">
              <li>
                <Link href="/" className="hover:text-[#0072FF] transition-colors block">
                  Features
                </Link>
              </li>
              <li>
                <span className="text-[#5c5c5c]/50 cursor-not-allowed block">Hardware</span>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-medium text-[#333333] mb-4 text-sm">Solutions</h4>
            <ul className="space-y-3 text-sm text-[#5c5c5c]">
              <li>
                <Link href="/solutions" className="hover:text-[#0072FF] transition-colors block">
                  Mixed-Use
                </Link>
              </li>
              <li>
                <span className="text-[#5c5c5c]/50 cursor-not-allowed block">Stadiums</span>
              </li>
              <li>
                <span className="text-[#5c5c5c]/50 cursor-not-allowed block">Museums</span>
              </li>
              <li>
                <span className="text-[#5c5c5c]/50 cursor-not-allowed block">Transportation</span>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h4 className="font-medium text-[#333333] mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm text-[#5c5c5c]">
              <li>
                <Link href="/blog" className="hover:text-[#0072FF] transition-colors block">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#0072FF] transition-colors block">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-medium text-[#333333] mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-[#5c5c5c]">
              <li>
                <span className="text-[#5c5c5c]/50 cursor-not-allowed block">About Us</span>
              </li>
              <li>
                <span className="text-[#5c5c5c]/50 cursor-not-allowed block">Careers</span>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0072FF] transition-colors block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-medium text-[#333333] mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-sm text-[#5c5c5c]">
              <li>
                <Link href="/privacy-policy" className="hover:text-[#0072FF] transition-colors block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <span className="text-[#5c5c5c]/50 cursor-not-allowed block">Terms of Service</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#cccccc] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-[#5c5c5c]">© 2025 Percepvision AI Limited. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-sm text-[#5c5c5c] font-medium">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
