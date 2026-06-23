import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Notice | Percepvision AI",
  description:
    "Privacy Notice for PercepVision AI Limited, explaining how personal information is collected, used, stored, and protected.",
}

const introductionItems = [
  "visit our website;",
  "contact us;",
  "request information or a demonstration;",
  "purchase or use our products or services; or",
  "otherwise interact with PercepVision.",
]

const providedInformationItems = [
  "your name;",
  "company name;",
  "job title;",
  "business email address;",
  "telephone number;",
  "enquiry details;",
  "information you provide during demonstrations or meetings.",
]

const automaticallyCollectedItems = [
  "IP address;",
  "browser type;",
  "operating system;",
  "device information;",
  "pages visited;",
  "referring website;",
  "date and time of access;",
  "website usage statistics.",
]

const useItems = [
  "respond to enquiries;",
  "provide demonstrations;",
  "manage customer relationships;",
  "deliver products and services;",
  "improve our website and products;",
  "provide customer support;",
  "comply with legal obligations;",
  "maintain the security of our systems.",
]

const lawfulBasisItems = [
  "your consent;",
  "performance of a contract;",
  "compliance with legal obligations;",
  "our legitimate business interests.",
]

const analyticsFeatureItems = [
  "local Edge AI processing;",
  "anonymous analytics generation;",
  "encrypted communications;",
  "configurable data retention;",
  "role-based access control;",
  "multi-factor authentication;",
  "audit logging.",
]

const sharingItems = [
  "cloud hosting providers;",
  "IT support providers;",
  "professional advisers;",
  "payment providers;",
  "regulatory authorities where required by law.",
]

const securityItems = [
  "encrypted communications (HTTPS/TLS);",
  "role-based access controls;",
  "multi-factor authentication (MFA);",
  "Single Sign-On (SSO);",
  "audit logging;",
  "secure cloud infrastructure;",
  "secure on-premises Edge AI processing;",
  "least-privilege access controls.",
]

const cookieItems = [
  "ensure website functionality;",
  "understand website performance;",
  "improve user experience.",
]

const rightsItems = [
  "access your personal information;",
  "correct inaccurate information;",
  "request deletion;",
  "restrict processing;",
  "object to processing;",
  "request data portability;",
  "withdraw consent where consent has been relied upon.",
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

function PolicySection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-[#e5e5e5] pt-10">
      <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#333333] md:text-3xl">{title}</h2>
      <div className="space-y-5 leading-relaxed text-[#5c5c5c]">{children}</div>
    </section>
  )
}

function Subheading({ children }: { children: ReactNode }) {
  return <h3 className="pt-3 text-lg font-semibold tracking-tight text-[#333333]">{children}</h3>
}

function CompanyAddress() {
  return (
    <address className="not-italic leading-relaxed">
      <p className="font-medium text-[#333333]">PercepVision AI Limited</p>
      <p>42–44 Clarendon Road</p>
      <p>Watford</p>
      <p>Hertfordshire</p>
      <p>WD17 1JJ</p>
      <p>United Kingdom</p>
      <p className="mt-4">
        Email:{" "}
        <a href="mailto:privacy@percepvision.com" className="font-medium text-[#0072FF] underline-offset-4 hover:underline">
          privacy@percepvision.com
        </a>
      </p>
    </address>
  )
}

export default function PrivacyPolicyPage() {
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
              Privacy Notice
            </h1>
            <p className="max-w-3xl text-xl leading-relaxed text-[#5c5c5c]">
              PercepVision AI Limited is committed to protecting your privacy and handling personal information
              responsibly.
            </p>
            <div className="mt-8 inline-flex rounded-full border border-[#cccccc] bg-[#f5f5f5] px-4 py-2 text-sm font-medium text-[#5c5c5c]">
              Effective Date: 1 January 2026
            </div>
          </div>
        </header>

        <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div className="space-y-12 text-lg">
            <PolicySection title="Introduction">
              <p>
                PercepVision AI Limited (“PercepVision”, “we”, “our”, or “us”) is committed to protecting your privacy
                and handling personal information responsibly.
              </p>
              <p>This Privacy Notice explains how we collect, use, store and protect personal information when you:</p>
              <BulletList items={introductionItems} />
              <p>
                This Privacy Notice has been prepared in accordance with the UK General Data Protection Regulation (UK
                GDPR), the Data Protection Act 2018 and other applicable data protection legislation.
              </p>
            </PolicySection>

            <PolicySection title="Who We Are">
              <CompanyAddress />
              <p>If you have any questions regarding this Privacy Notice, please contact us using the details above.</p>
            </PolicySection>

            <PolicySection title="About XY-Vision">
              <p>
                PercepVision develops XY-Vision, an AI-powered video analytics platform designed to generate operational
                and security insights from existing CCTV infrastructure.
              </p>
              <p>
                For further information about the privacy architecture of the XY-Vision platform, including Edge AI
                processing, anonymous analytics, security controls and data flows, please refer to our 'Privacy by Design
                & Commitment to Data Protection' document.
              </p>
              <p>
                XY-Vision has been developed using Privacy by Design principles. During normal operation, live video is
                analysed locally on an Edge AI device and converted into anonymous, aggregated analytics. Personally
                identifiable information (PII) is not stored or transmitted by the platform during normal operation. Raw
                CCTV footage remains under the control of the customer.
              </p>
            </PolicySection>

            <PolicySection title="Information We Collect">
              <p>Depending on your interaction with us, we may collect the following information.</p>
              <Subheading>Information You Provide</Subheading>
              <p>This may include:</p>
              <BulletList items={providedInformationItems} />
              <Subheading>Information Collected Automatically</Subheading>
              <p>When you visit our website, we may automatically collect technical information including:</p>
              <BulletList items={automaticallyCollectedItems} />
              <p>This information helps us improve our website and maintain its security.</p>
            </PolicySection>

            <PolicySection title="How We Use Personal Information">
              <p>We use personal information to:</p>
              <BulletList items={useItems} />
              <p className="font-medium text-[#333333]">We do not sell personal information.</p>
            </PolicySection>

            <PolicySection title="Lawful Basis for Processing">
              <p>Under UK GDPR we process personal information using one or more of the following lawful bases:</p>
              <BulletList items={lawfulBasisItems} />
            </PolicySection>

            <PolicySection title="CCTV and AI Analytics">
              <p>
                Customers using XY-Vision remain responsible for operating their CCTV systems and are normally the Data
                Controller for CCTV footage.
              </p>
              <p>
                Where PercepVision processes information on behalf of customers, we act as a Data Processor in
                accordance with customer instructions and contractual obligations.
              </p>
              <p>XY-Vision has been designed with privacy in mind and includes features such as:</p>
              <BulletList items={analyticsFeatureItems} />
            </PolicySection>

            <PolicySection title="Sharing Your Information">
              <p>We may share information with trusted third parties where necessary, including:</p>
              <BulletList items={sharingItems} />
              <p>All third parties are required to protect personal information appropriately.</p>
            </PolicySection>

            <PolicySection title="International Transfers">
              <p>
                Where personal information is transferred outside the United Kingdom, appropriate safeguards will be
                implemented in accordance with UK GDPR.
              </p>
            </PolicySection>

            <PolicySection title="Data Retention">
              <p>
                We retain personal information only for as long as necessary to fulfil the purposes for which it was
                collected or to meet legal and regulatory obligations.
              </p>
              <p>
                Retention periods vary depending on the type of information and applicable legal requirements. Where
                cloud-hosted analytics are used, anonymous analytics are retained in accordance with customer-configured
                retention settings (30 days by default). Raw CCTV footage remains under the control of the customer.
              </p>
            </PolicySection>

            <PolicySection title="Information Security">
              <p>Protecting customer information is fundamental to our business.</p>
              <p>
                PercepVision implements technical and organisational measures designed to protect personal information,
                including where appropriate:
              </p>
              <BulletList items={securityItems} />
              <p>
                While we take reasonable measures to protect personal information, no internet transmission or storage
                system can be guaranteed to be completely secure.
              </p>
            </PolicySection>

            <PolicySection title="Cookies">
              <p>Our website uses cookies and similar technologies to:</p>
              <BulletList items={cookieItems} />
              <p>Where required by law, we will obtain your consent before placing non-essential cookies.</p>
              <p>Further information is available in our Cookie Policy.</p>
            </PolicySection>

            <PolicySection title="Marketing Communications">
              <p>
                If you request information from us or become a customer, we may contact you regarding products, services
                and company updates where permitted by law.
              </p>
              <p>You may unsubscribe from marketing communications at any time.</p>
            </PolicySection>

            <PolicySection title="Your Rights">
              <p>Subject to applicable law, you may have the right to:</p>
              <BulletList items={rightsItems} />
              <p>To exercise any of these rights, please contact us using the details above.</p>
            </PolicySection>

            <PolicySection title="Children’s Privacy">
              <p>
                Our website and services are intended for business users and are not directed at children under the age
                of 16.
              </p>
              <p>We do not knowingly collect personal information from children.</p>
            </PolicySection>

            <PolicySection title="Changes to this Privacy Notice">
              <p>We may update this Privacy Notice from time to time.</p>
              <p>Any changes will be published on this page together with the updated effective date.</p>
            </PolicySection>

            <PolicySection title="Contact Us">
              <p>If you have any questions regarding this Privacy Notice or how we process personal information, please contact:</p>
              <address className="not-italic leading-relaxed">
                <p className="font-medium text-[#333333]">Privacy Officer</p>
                <p className="font-medium text-[#333333]">PercepVision AI Limited</p>
                <p>42–44 Clarendon Road</p>
                <p>Watford</p>
                <p>WD17 1JJ</p>
                <p>United Kingdom</p>
                <p className="mt-4">
                  Email:{" "}
                  <a
                    href="mailto:privacy@percepvision.com"
                    className="font-medium text-[#0072FF] underline-offset-4 hover:underline"
                  >
                    privacy@percepvision.com
                  </a>
                </p>
              </address>
            </PolicySection>

            <PolicySection title="Complaints">
              <p>
                If you are unhappy with how we have handled your personal information, we encourage you to contact us
                first so we can attempt to resolve your concerns.
              </p>
              <p>You also have the right to lodge a complaint with the Information Commissioner’s Office (ICO).</p>
              <p>
                Information about the ICO is available at:{" "}
                <a
                  href="https://ico.org.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#0072FF] underline-offset-4 hover:underline"
                >
                  https://ico.org.uk/
                </a>
              </p>
            </PolicySection>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
