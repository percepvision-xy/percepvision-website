import { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronDown, Mail, MailOpen } from "lucide-react"
import { blogPosts, getFeaturedPost, getRecentPosts } from "@/lib/blog-data"

export const metadata: Metadata = {
  title: "Blog | Percepvision AI",
  description: "Deep dives into AI security, real-time detection advancements, and industry trends shaping the future of smart surveillance.",
}

export default function BlogPage() {
  const featuredPost = getFeaturedPost()
  const recentPosts = getRecentPosts(featuredPost?.slug)

  return (
    <div className="bg-white text-[#333333] flex flex-col min-h-screen">
      <Navbar />

      {/* Featured Blog List Header Section */}
      <header className="md:pt-40 md:pb-20 overflow-hidden border-[#e5e5e5] border-b pt-32 pb-16 relative">
        {/* Background decorative elements */}
        <div className="-translate-x-1/2 z-0 pointer-events-none w-full h-full absolute top-0 left-1/2">
          <div className="blur-[120px] opacity-30 mix-blend-multiply w-[500px] h-[500px] rounded-full absolute top-0 right-0" />
          <div className="blur-[80px] opacity-60 w-[400px] h-[400px] rounded-full absolute bottom-0 left-0" />
        </div>

        <div className="z-10 max-w-7xl mx-auto px-6 relative">
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5f5f5] border border-[#cccccc] text-xs font-medium text-[#5c5c5c] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0072FF]" />
              Security Insights
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#333333] mb-6 leading-tight">
              Intelligence for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0072FF] to-[#003699]">
                modern protector.
              </span>
            </h1>
            <p className="text-xl text-[#5c5c5c] font-normal leading-relaxed">
              Deep dives into AI security, real-time detection advancements, and industry trends shaping the future of surveillance.
            </p>
          </div>

          {/* Featured Post Card */}
          {featuredPost && (
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group relative block rounded-2xl overflow-hidden border border-[#cccccc] bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[300px] md:h-auto overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#0072FF]/10 text-[#0072FF] text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider">
                      Featured
                    </span>
                    <span className="text-sm text-[#5c5c5c]">{featuredPost.date}</span>
                  </div>

                  <h2 className="text-3xl font-semibold text-[#0072FF] tracking-tight mb-4 leading-tight group-hover:text-[#003699] transition-colors">
                    {featuredPost.title}
                  </h2>

                  <p className="leading-relaxed text-lg text-[#5c5c5c] mb-8">{featuredPost.description}</p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="border-[#cccccc] bg-white flex text-xs font-semibold text-[#5c5c5c] w-12 h-12 border rounded-full items-center justify-center">
                        {featuredPost.author.initials}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#333333]">{featuredPost.author.name}</div>
                        <div className="text-xs text-[#5c5c5c]">{featuredPost.author.role}</div>
                      </div>
                    </div>
                    <span className="flex items-center text-[#0072FF] font-medium text-sm group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </header>

      {/* Blog List Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex mb-12 items-center justify-between">
            <h2 className="text-2xl font-semibold tracking-tight text-[#333333]">Latest Articles</h2>

            {/* Simple Filter Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-2 text-sm font-medium text-[#5c5c5c] hover:text-[#333333] transition-colors border border-[#cccccc] rounded-lg px-4 py-2 bg-white hover:bg-[#f5f5f5]">
                <span>All Categories</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article key={post.slug} className="flex flex-col group h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block overflow-hidden rounded-xl border border-[#cccccc] mb-5 relative aspect-video bg-[#f5f5f5] shadow-sm group-hover:shadow-lg transition-all duration-300"
                >
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className={`group-hover:scale-105 transition-transform duration-500 object-cover ${
                      post.category === "Podcast" ? "grayscale contrast-125" : ""
                    }`}
                  />
                </Link>
                <div className="flex flex-col flex-grow">
                  <div className="flex gap-3 mb-3 items-center">
                    <span className="text-[#0072FF] uppercase text-xs font-semibold tracking-wide">{post.category}</span>
                    <span className="w-1 h-1 rounded-full bg-[#5c5c5c]" />
                    <span className="text-[#5c5c5c] text-xs">{post.date}</span>
                  </div>
                  <h3 className="group-hover:text-[#0072FF] transition-colors text-xl font-semibold text-[#333333] tracking-tight mb-3">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="leading-relaxed line-clamp-3 text-lg text-[#5c5c5c] mb-6">{post.description}</p>
                  <div className="border-[#e5e5e5] flex gap-3 border-t mt-auto pt-4 items-center">
                    <div className="flex text-[#0072FF] text-xs font-bold w-8 h-8 rounded-full items-center justify-center bg-[#0072FF]/10">
                      {post.author.initials}
                    </div>
                    <span className="text-sm font-medium text-[#333333]">{post.author.name}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-[#f5f5f5] border-y border-[#cccccc] relative overflow-hidden">
        {/* Abstract Decoration */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#0072FF]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#4D8BFF]/10 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 text-[#0072FF]">
            <Mail className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-sm font-semibold uppercase tracking-wider">Stay Informed</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#333333] mb-6">
            Security intelligence, delivered.
          </h2>
          <p className="text-lg text-[#5c5c5c] mb-10 leading-relaxed max-w-xl mx-auto">
            Join 15,000+ security professionals who receive our weekly digests on AI advancements, product updates, and expert tips.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <MailOpen className="w-4 h-4 text-[#5c5c5c]" />
              </div>
              <input
                type="email"
                className="bg-white border border-[#cccccc] text-[#333333] text-sm rounded-full focus:ring-[#0072FF] focus:border-[#0072FF] block w-full pl-10 p-3.5 placeholder-[#5c5c5c] outline-none transition-shadow focus:shadow-[0_0_0_4px_rgba(0,114,255,0.1)]"
                placeholder="name@company.com"
                required
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[#333333] hover:bg-[#5c5c5c] font-medium rounded-full text-sm px-6 py-3.5 text-center transition-colors shadow-lg whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-[#5c5c5c]">
            We care about your data in our{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-[#0072FF] transition-colors">
              privacy policy
            </Link>
            . No spam, ever.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
