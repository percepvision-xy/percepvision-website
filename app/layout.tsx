import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "@next/third-parties/google"
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Percepvision | AI-Powered Smart Safety & Video Analytics',
  description: 'Percepvision transforms your existing IP cameras into an intelligent platform for safety, security, and operational efficiency using advanced AI video analytics.',
  keywords: ['AI video analytics', 'smart surveillance', 'crowd management', 'security AI', 'CCTV analytics', 'occupancy management'],
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased selection:bg-[#e1ffff] selection:text-[#0072FF]`}>
        {children}
        <Analytics />
        <SpeedInsights/>
        <GoogleAnalytics gaId="G-GZ9T6RKGNX"/>
      </body>
    </html>
  )
}
