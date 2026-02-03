export interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  date: string
  author: {
    name: string
    role: string
    initials: string
  }
  image: string
  readTime: string
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: "paddington-square",
    title: "Beyond Football: How AI Video Analytics Is Unlocking Millions in Value at Paddington Square",
    description:
      "Paddington Square is one of London's most ambitious new destinations. We're proud to share how Percepvision AI, in partnership with CIS Security, has transformed this landmark into a data-driven environment.",
    category: "Case Study",
    date: "Dec 31, 2025",
    author: {
      name: "Xiaoyun Yang",
      role: "CEO of Percepvision",
      initials: "XY",
    },
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b0bad33-0bdf-4e72-817e-47610b4f1029_1600w.jpg",
    readTime: "5 min read",
    featured: true,
  },
  {
    slug: "enhancing-security-paddington",
    title: "Enhancing Security and Operational Intelligence at Paddington Square with Percepvision AI",
    description:
      "Following our featured success story, we dive deeper into the operational workflows that allow security teams to respond to incidents in real-time.",
    category: "Updates",
    date: "Nov 6, 2025",
    author: {
      name: "Xiaoyun Yang",
      role: "CEO of Percepvision",
      initials: "XY",
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
    readTime: "5 min read",
  },
  {
    slug: "crowd-management-ai",
    title: "Smarter Spaces: How Crowd Management AI Is Reshaping Public Safety and Urban Flow",
    description:
      "Managing density in public spaces requires more than just counting heads. Learn how behavioral analysis predicts congestion before it happens.",
    category: "Updates",
    date: "Sep 25, 2025",
    author: {
      name: "Xiaoyun Yang",
      role: "Percepvision Team",
      initials: "XY",
    },
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9adf9bae-7f4e-4537-ba28-dd28775359c8_800w.jpg",
    readTime: "5 min read",
  },
  {
    slug: "tony-fish-podcast",
    title: "Smart Facilities Podcast E2: Tony Fish on Housing as a Subscription",
    description:
      "Tony Fish joins us to discuss the future of living as a service and the role of intelligent monitoring in shared residential spaces.",
    category: "Podcast",
    date: "Jul 30, 2025",
    author: {
      name: "Jacob Howard",
      role: "CMO of Percepvision",
      initials: "JH",
    },
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c13b1dc0-e136-4971-ac4b-bbcc2bd7a805_800w.jpg",
    readTime: "15 min listen",
  },
  {
    slug: "edge-ai-pny",
    title: "Smart Facilities Podcast Premiere: Edge AI with Youssef Nadiri of PNY Technologies",
    description:
      "We sat down with PNY's Youssef Nadiri to explore how edge computing is enabling faster, privacy-preserving AI models in smart cities.",
    category: "Podcast",
    date: "Jul 22, 2025",
    author: {
      name: "Xiaoyun Yang",
      role: "Host & CEO of Percepvision",
      initials: "XY",
    },
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa7452ad-b197-4982-9c92-5d35df36bfad_800w.jpg",
    readTime: "38 min listen",
  },
  {
    slug: "nvidia-inception",
    title: "Percepvision AI Joins NVIDIA Inception Program to Accelerate Growth in Smart Surveillance",
    description:
      "We are thrilled to announce our acceptance into NVIDIA's accelerator program, granting us access to cutting-edge hardware and AI expertise.",
    category: "Updates",
    date: "Jun 23, 2025",
    author: {
      name: "Xiaoyun Yang",
      role: "Founder & CEO",
      initials: "XY",
    },
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    readTime: "4 min read",
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((post) => post.featured)
}

export function getRecentPosts(exclude?: string, limit = 6): BlogPost[] {
  return blogPosts.filter((post) => post.slug !== exclude && !post.featured).slice(0, limit)
}
