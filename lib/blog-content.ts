export interface BlogPostContent {
  slug: string
  sections: ContentSection[]
  quote?: {
    text: string
    author: string
    role: string
  }
}

export interface ContentSection {
  type: "paragraph" | "heading" | "list" | "image" | "table"
  content?: string
  items?: string[]
  src?: string
  alt?: string
  caption?: string
  rows?: { zone: string; finding: string; opportunity: string }[]
}

export const blogPostContent: Record<string, BlogPostContent> = {
  "paddington-square": {
    slug: "paddington-square",
    sections: [
      {
        type: "paragraph",
        content:
          "This project demonstrates a simple truth: modern commercial properties no longer need more cameras - they need smarter ones. With Percepvision AI, every video stream becomes a strategic asset, delivering insights that drive operational efficiency, commercial performance, and public safety.",
      },
      {
        type: "image",
        src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bbd11a8a-01ee-48e0-b52d-bfaa9c36f17d_1600w.jpg",
        alt: "Spatial analytics dashboard displaying real-time occupancy data",
        caption: "Real-time spatial analytics and camera integration",
      },
      {
        type: "heading",
        content: "A Dual-Purpose Destination With Dual Challenges",
      },
      {
        type: "paragraph",
        content: "Our October 2025 case study revealed the unique rhythm of Paddington Square:",
      },
      {
        type: "list",
        items: [
          "Weekday Commuter Power: Around 15,000 escalator journeys driven by office and rail traffic.",
          "Weekend Leisure Shift: Approximately 13,000 escalator journeys, dominated by retail and leisure visitors.",
        ],
      },
      {
        type: "image",
        src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb67d4f3-40c2-40ab-9c53-7cdcf19bf8a2_1600w.jpg",
        alt: "Dashboard interface showing multiple camera feeds with real-time directional footfall statistics",
        caption: "Live flow analysis dashboard tracking escalator usage across multiple levels",
      },
      {
        type: "paragraph",
        content: "This clarity enables:",
      },
      {
        type: "list",
        items: [
          "Security and Facility Management (FM) teams to staff precisely for peak periods.",
          "Leasing teams to justify rental values with transparent, evidence-based footfall patterns.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Paddington Square isn't just busy - it's predictably busy, and that predictability is commercially powerful.",
      },
      {
        type: "heading",
        content: "From Data to Revenue: Turning Insights Into Strategy",
      },
      {
        type: "paragraph",
        content:
          "The real commercial uplift comes from Percepvision's granular Occupancy Insights, which reveal how people actually use the space.",
      },
      {
        type: "table",
        rows: [
          {
            zone: "B1 Ticket Hall",
            finding: "Highest occupancy; the primary interchange between rail and retail.",
            opportunity: "Prime location for high-traffic retail and wayfinding initiatives.",
          },
          {
            zone: "Concourse (Escalator 4)",
            finding: "Least utilized; lower retail footfall despite proximity to exits.",
            opportunity: "Activation opportunity with pop-up retail or experiential installations.",
          },
        ],
      },
    ],
    quote: {
      text: "Every camera becomes a data source. Every corridor becomes a commercial opportunity.",
      author: "Xiaoyun Yang",
      role: "Founder of Percepvision",
    },
  },
  "enhancing-security-paddington": {
    slug: "enhancing-security-paddington",
    sections: [
      {
        type: "paragraph",
        content:
          "The project, delivered in collaboration with CIS Security, showcases how intelligent surveillance can transform public space operations.",
      },
      {
        type: "heading",
        content: "The Challenge: Visibility at Scale",
      },
      {
        type: "paragraph",
        content:
          'Before the integration of AI, the security operations center (SOC) relied heavily on manual monitoring. With dozens of camera feeds covering entrances, retail floors, and the piazza, operators faced "video fatigue," increasing the risk that critical incidents might be missed.',
      },
      {
        type: "paragraph",
        content: "The primary requirements for the new system were:",
      },
      {
        type: "list",
        items: [
          "Enhance real-time situational awareness across public and restricted zones.",
          "Support proactive crowd management during peak pedestrian flows.",
          "Minimize false alarms and improve response accuracy for security teams.",
          "Demonstrate scalable AI integration with existing CCTV infrastructure.",
        ],
      },
      {
        type: "image",
        src: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64ad05e0-3a7d-4bcf-8905-6dbb1fb4823b_1600w.webp",
        alt: "Scalable CCTV AI Integration Dashboard showing real-time flow analytics",
        caption: "Percepvision AI platform integrated with existing CCTV infrastructure",
      },
      {
        type: "heading",
        content: "The Solution: Intelligent Layering",
      },
      {
        type: "paragraph",
        content:
          "Percepvision AI deployed its AI-driven video analytics platform across Paddington Square's CCTV network, enabling:",
      },
      {
        type: "heading",
        content: "People Counting & Crowd Management",
      },
      {
        type: "list",
        items: [
          "Real-time pedestrian flow analysis based on movement and density.",
          "Graphical overlays to highlight congestion zones and trigger alerts.",
          "Supports operational decisions for crowd dispersal and access control.",
        ],
      },
    ],
    quote: {
      text: "The system has fundamentally changed how we approach security - from reactive monitoring to proactive intelligence.",
      author: "Security Operations Team",
      role: "CIS Security",
    },
  },
  "crowd-management-ai": {
    slug: "crowd-management-ai",
    sections: [
      {
        type: "heading",
        content: "Why Crowd Management Needs AI",
      },
      {
        type: "paragraph",
        content:
          "Traditional crowd control methods rely on manual observation or delayed video analysis. These approaches fall short in dynamic environments like transport hubs, stadiums, retail centers, and smart cities. That's where crowd management AI steps in - offering real-time visibility, predictive analytics, and automated alerts.",
      },
      {
        type: "paragraph",
        content: "Percepvision's platform uses advanced computer vision and edge AI to:",
      },
      {
        type: "list",
        items: [
          "Detect crowd density and flow patterns instantly",
          "Identify bottlenecks and safety risks before they escalate",
          "Support emergency response with live situational awareness",
          "Optimize space usage and foot traffic for better customer experience",
        ],
      },
      {
        type: "paragraph",
        content:
          "Whether you're managing a festival, a transit station, or a corporate campus, our AI-powered crowd management tools help you stay ahead of the curve.",
      },
      {
        type: "heading",
        content: "Real-Time Crowd Analytics in Action",
      },
      {
        type: "paragraph",
        content:
          "Imagine a transport authority monitoring platform congestion during rush hour. With Percepvision AI, they receive live heatmaps, density alerts, and predictive flow models - allowing them to reroute passengers, deploy staff, or adjust signage in real time.",
      },
      {
        type: "paragraph",
        content:
          "Or consider a retail chain analyzing weekend footfall across multiple stores. Our system provides granular insights into dwell time, peak hours, and customer movement - fueling smarter staffing and layout decisions.",
      },
      {
        type: "heading",
        content: "Built for Speed, Privacy, and Scale",
      },
      {
        type: "paragraph",
        content: "Percepvision's edge AI architecture ensures:",
      },
      {
        type: "list",
        items: [
          "Low latency: Insights delivered in milliseconds, not minutes",
          "Privacy-first design: No facial recognition, no personal data stored",
          "Scalable deployment: From single-site installations to global rollouts",
        ],
      },
      {
        type: "paragraph",
        content:
          "Our platform integrates seamlessly with existing CCTV infrastructure, making it easy to upgrade without overhauling.",
      },
    ],
    quote: {
      text: "We don't need to know who you are to know how the crowd is moving. Privacy and safety can, and must, coexist.",
      author: "Xiaoyun Yang",
      role: "CEO of Percepvision",
    },
  },
  "tony-fish-podcast": {
    slug: "tony-fish-podcast",
    sections: [
      {
        type: "paragraph",
        content:
          "In Episode 2 of the Smart Facilities Podcast, we are joined by Tony Fish, a seasoned investor, author, and thought leader in digital identity and governance. Together, we unpack a provocative concept that is reshaping the built environment: Housing as a Subscription.",
      },
      {
        type: "heading",
        content: "From Maker Culture to Urban Systems",
      },
      {
        type: "paragraph",
        content:
          'Tony introduced himself humbly, surrounded on the video call by CNC machines, 3D printers, and woodworking tools - a nod to his engineering roots and maker mindset. "I\'m an engineer, built into me through my granddad and dad," he said. That foundation led to a portfolio career spanning finance, tech startups, and the launch of Fab Lab London.',
      },
      {
        type: "paragraph",
        content:
          "But whether he's prototyping hardware or consulting boards, one thread has remained consistent: building things that matter.",
      },
      {
        type: "heading",
        content: "Smart Cities, Smart Data, Smarter Decisions",
      },
      {
        type: "paragraph",
        content:
          "Tony's entry into the smart city space came through the Fab Lab network, where he explored the cycle of collecting urban data, making sense of it, and ultimately using it to empower decision-makers.",
      },
      {
        type: "paragraph",
        content:
          '"I can make the sensors... do something with the data... but most of my world is how do you help boards make better decisions," he explained. His holistic approach focuses on uncovering questions we didn\'t realize we needed to ask.',
      },
      {
        type: "heading",
        content: "Housing as a Subscription: Rethinking Ownership",
      },
      {
        type: "paragraph",
        content:
          'Asked about a current project he\'s proud of, Tony spotlighted Housing as a Subscription - an alternative to traditional mortgages and rentals. "Mortgages give you security," he said, "but rental markets are expensive and offer no permanence."',
      },
      {
        type: "paragraph",
        content:
          'This new model sits between the two. Residents pay a monthly fee, customize their homes, maintain them, and - if they care for them - get 100% of their money back when they leave. "It\'s like a savings account," Tony explained. Embedded sensors deliver maintenance alerts, while an app guides residents on upkeep.',
      },
    ],
    quote: {
      text: "Most people assume they know what data is. That leads to bad decisions.",
      author: "Tony Fish",
      role: "Investor & Author",
    },
  },
  "edge-ai-pny": {
    slug: "edge-ai-pny",
    sections: [
      {
        type: "paragraph",
        content:
          "We are thrilled to launch the very first episode of the Smart Facilities Podcast. In this premiere, host Jacob Howard sits down with Youssef Nadiri, EMEA Sales Manager at PNY Technologies, to pull back the curtain on the hardware powering the AI revolution.",
      },
      {
        type: "heading",
        content: "Episode 1: Edge AI and Urban Evolution with Youssef Nadiri, PNY Technologies",
      },
      {
        type: "paragraph",
        content:
          "In our premiere episode, Jacob sits down with Youssef Nadiri, Product Manager for Smart Cities & Spaces at PNY Technologies. The conversation journeys through Youssef's fascinating evolution - from hydrographic engineering and seabed mapping to pioneering AI-driven infrastructure for dynamic urban environments.",
      },
      {
        type: "paragraph",
        content:
          "Youssef's story is a powerful reminder that smart cities aren't just about technology - they're about purpose-built solutions, human-centered design, and meaningful collaboration. As cities evolve, leaders like Youssef and companies like PNY Technologies are proving that scalable AI solutions require vision, rigor, and trust.",
      },
      {
        type: "paragraph",
        content:
          "Follow along with the series as we spotlight bold thinkers making smarter, more responsive cities a reality.",
      },
    ],
    quote: {
      text: "Cameras are the sensors that are the most spread today... All these things can be reached using the insights that you would bring from cameras using AI.",
      author: "Youssef Nadiri",
      role: "Product Manager, PNY Technologies",
    },
  },
  "nvidia-inception": {
    slug: "nvidia-inception",
    sections: [
      {
        type: "paragraph",
        content:
          "Percepvision AI, a London-based startup advancing AI-powered CCTV analytics, is proud to announce its acceptance into the NVIDIA Inception Program - an exclusive accelerator for cutting-edge startups in artificial intelligence, data science, and robotics.",
      },
      {
        type: "paragraph",
        content:
          "Designed to nurture startups during critical stages of product development, the NVIDIA Inception Program offers Percepvision AI access to industry-leading technical resources, go-to-market support, and NVIDIA's global network of AI innovators.",
      },
      {
        type: "paragraph",
        content:
          "This milestone reflects Percepvision AI's vision to reshape the way physical spaces are monitored, understood, and optimized using intelligent, software-first surveillance tools.",
      },
      {
        type: "list",
        items: [
          "On-Device Redaction: Faces and bodies are blurred or replaced with abstract vectors before data ever leaves the facility.",
          "Metadata Only: We transmit lightweight metadata (counts, heatmaps, alerts), not heavy video streams, reducing bandwidth usage by 99%.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Percepvision AI's platform is already deployed and in use at several landmark sites across the UK, including The Shard and the Natural History Museum, delivering real-time occupancy, incident alerts, and deep visitor analytics to facilities managers and security teams.",
      },
      {
        type: "paragraph",
        content:
          "By decoupling intelligence from the sensor hardware, we allow facilities to scale their AI capabilities without the capital expenditure of replacing hundreds of functional cameras.",
      },
    ],
    quote: {
      text: "NVIDIA's support will allow us to continue to accelerate the development of advanced features like behavioural insights, real-time anomaly detection, and privacy-conscious edge deployment - while scaling our platform across critical infrastructure worldwide.",
      author: "Xiaoyun Yang",
      role: "Founder of Percepvision",
    },
  },
}

export function getBlogPostContent(slug: string): BlogPostContent | undefined {
  return blogPostContent[slug]
}
