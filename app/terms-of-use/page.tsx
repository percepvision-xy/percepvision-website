import type { Metadata } from "next"
import type { ReactNode } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Website Terms of Use | Percepvision AI",
  description:
    "Website Terms of Use for PercepVision AI Limited, governing access to and use of the PercepVision website.",
}

const purposeItems = [
  "PercepVision AI Limited",
  "XY-Vision",
  "AI-powered video analytics",
  "Company news",
  "Products and services",
  "Customer support",
  "Contact information",
]

const intellectualPropertyItems = [
  "text",
  "graphics",
  "photographs",
  "diagrams",
  "videos",
  "software",
  "logos",
  "trademarks",
  "branding",
]

const acceptableUseItems = [
  "use the Website unlawfully;",
  "attempt unauthorised access to any systems;",
  "introduce malware or malicious software;",
  "interfere with Website security;",
  "scrape or harvest Website content using automated tools without permission;",
  "misrepresent your identity.",
]

const disclaimerItems = [
  "the Website is provided “as is”;",
  "we make no warranties regarding completeness, availability or accuracy;",
  "we do not guarantee the Website will be free from errors or viruses.",
]

const liabilityItems = [
  "death or personal injury caused by negligence;",
  "fraud or fraudulent misrepresentation;",
  "any liability that cannot lawfully be excluded under English law.",
]

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="my-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0072FF]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function TermsSection({ title, children, isFirst = false }: { title: string; children: ReactNode; isFirst?: boolean }) {
  return (
    <section className={isFirst ? "pt-0" : "border-t border-[#e5e5e5] pt-10"}>
      <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#333333] md:text-3xl">{title}</h2>
      <div className="space-y-5 leading-relaxed text-[#5c5c5c]">{children}</div>
    </section>
  )
}

function CompanyAddress({ includeEmail = true }: { includeEmail?: boolean }) {
  return (
    <address className="not-italic leading-relaxed">
      <p className="font-medium text-[#333333]">PercepVision AI Limited</p>
      <p>42–44 Clarendon Road</p>
      <p>Watford</p>
      <p>WD17 1JJ</p>
      <p>United Kingdom</p>
      {includeEmail && (
        <p className="mt-4">
          Email:{" "}
          <a href="mailto:info@percepvision.com" className="font-medium text-[#0072FF] underline-offset-4 hover:underline">
            info@percepvision.com
          </a>
        </p>
      )}
    </address>
  )
}

export default function TermsOfUsePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#333333]">
      <Navbar />

      <main className="flex-grow">
        <header className="border-b border-[#e5e5e5] pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="mx-auto max-w-4xl px-6">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0072FF]/20 bg-[#0072FF]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0072FF]">
              <span className="h-2 w-2 rounded-full bg-[#0072FF]" />
              Legal
            </div>
            <h1 className="mb-6 text-4xl font-semibold leading-tight tracking-tight text-[#333333] md:text-6xl">
              Website Terms of Use
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-[#5c5c5c]">
              These Terms govern your access to and use of the PercepVision AI Limited website.
            </p>
            <div className="mt-8 inline-flex rounded-full border border-[#cccccc] bg-[#f5f5f5] px-4 py-2 text-sm font-medium text-[#5c5c5c]">
              Effective Date: 1 January 2026
            </div>
          </div>
        </header>

        <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div className="space-y-12 text-lg">
            <TermsSection title="1. Introduction" isFirst>
              <p>
                These Terms of Use (“Terms”) govern your access to and use of the PercepVision AI Limited website
                (“Website”).
              </p>
              <p>
                By accessing or using this Website, you agree to be bound by these Terms. If you do not agree to these
                Terms, please do not use the Website.
              </p>
              <p>
                These Terms apply only to the Website and do not govern the licensing or use of the XY-Vision platform,
                which is subject to separate contractual agreements.
              </p>
            </TermsSection>

            <TermsSection title="2. About Us">
              <p>This Website is operated by:</p>
              <CompanyAddress />
            </TermsSection>

            <TermsSection title="3. Purpose of the Website">
              <p>The Website provides information regarding:</p>
              <BulletList items={purposeItems} />
              <p>Information on this Website is provided for general information purposes only.</p>
            </TermsSection>

            <TermsSection title="4. Intellectual Property">
              <p>Unless otherwise stated, all content on this Website, including:</p>
              <BulletList items={intellectualPropertyItems} />
              <p>is owned by PercepVision AI Limited or its licensors.</p>
              <p>
                No content may be copied, reproduced, distributed, modified or commercially exploited without our prior
                written permission.
              </p>
            </TermsSection>

            <TermsSection title="5. Acceptable Use">
              <p>You agree not to:</p>
              <BulletList items={acceptableUseItems} />
            </TermsSection>

            <TermsSection title="6. Accuracy of Information">
              <p>We aim to keep the information on this Website accurate and up to date.</p>
              <p>
                However, the Website is provided for general information only and should not be relied upon as
                professional, legal or technical advice.
              </p>
              <p>Specifications, features and services may change without notice.</p>
            </TermsSection>

            <TermsSection title="7. Third-Party Links">
              <p>Our Website may contain links to third-party websites.</p>
              <p>We are not responsible for the content, security or privacy practices of third-party websites.</p>
            </TermsSection>

            <TermsSection title="8. Privacy">
              <p>
                Your use of this Website is also governed by our{" "}
                <Link href="/privacy-policy" className="font-medium text-[#0072FF] underline-offset-4 hover:underline">
                  Privacy Notice
                </Link>{" "}
                and Cookie Policy.
              </p>
            </TermsSection>

            <TermsSection title="9. Availability">
              <p>We aim to keep the Website available at all times.</p>
              <p>
                However, we do not guarantee uninterrupted availability and may suspend access for maintenance, upgrades
                or operational reasons.
              </p>
            </TermsSection>

            <TermsSection title="10. Disclaimer">
              <p>To the fullest extent permitted by law:</p>
              <BulletList items={disclaimerItems} />
              <p>Nothing in these Terms excludes liability where it cannot lawfully be excluded.</p>
            </TermsSection>

            <TermsSection title="11. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, PercepVision AI Limited shall not be liable for any indirect,
                incidental, consequential or special loss arising from the use of this Website.
              </p>
              <p>Nothing in these Terms excludes liability for:</p>
              <BulletList items={liabilityItems} />
            </TermsSection>

            <TermsSection title="12. Security">
              <p>
                Users are responsible for ensuring that devices used to access the Website are adequately protected
                against malware and unauthorised access.
              </p>
            </TermsSection>

            <TermsSection title="13. Changes">
              <p>We may update these Terms from time to time.</p>
              <p>The latest version will always be published on this Website.</p>
            </TermsSection>

            <TermsSection title="14. Governing Law">
              <p>These Terms shall be governed by and construed in accordance with the laws of England and Wales.</p>
              <p>The courts of England and Wales shall have exclusive jurisdiction over any disputes relating to these Terms.</p>
            </TermsSection>

            <TermsSection title="15. Contact">
              <CompanyAddress includeEmail={false} />
              <p>
                Email:{" "}
                <a href="mailto:info@percepvision.com" className="font-medium text-[#0072FF] underline-offset-4 hover:underline">
                  info@percepvision.com
                </a>
              </p>
            </TermsSection>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
