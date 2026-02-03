import { Metadata } from "next"
import { notFound } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, ArrowRight, Linkedin, Link as LinkIcon } from "lucide-react"
import { blogPosts, getBlogPost, getRecentPosts } from "@/lib/blog-data"
import { getBlogPostContent } from "@/lib/blog-content"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: "Post Not Found | Percepvision AI Blog",
    }
  }

  return {
    title: `${post.title} | Percepvision AI Blog`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  const content = getBlogPostContent(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRecentPosts(slug, 3)

  const isPodcast = post.category === "Podcast"

  return (
    <div className="bg-white text-[#333333] flex flex-col min-h-screen">
      <Navbar />

      {/* Blog Post Header Section */}
      <header className="pt-32 pb-16 relative">
        <div className="max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-sm text-[#5c5c5c] hover:text-[#0072FF] mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#0072FF] uppercase text-xs font-semibold tracking-wider rounded-full py-1 px-2.5 bg-[#0072FF]/10">
              {post.category}
            </span>
            <span className="text-[#5c5c5c] text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#333333] mb-8 leading-tight">
            {post.title}
          </h1>

          <p className="text-xl text-[#5c5c5c] leading-relaxed mb-8 max-w-3xl">{post.description}</p>

          <div className="flex items-center gap-4 py-6 border-y border-[#cccccc] mb-12">
            <div className="w-12 h-12 rounded-full border border-[#cccccc] flex items-center justify-center bg-white text-sm font-semibold text-[#5c5c5c]">
              {post.author.initials}
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium text-[#333333]">{post.author.name}</span>
              <span className="text-sm text-[#5c5c5c]">{post.author.role}</span>
            </div>
            <div className="ml-auto flex items-center text-[#5c5c5c] text-sm">
              <Calendar className="w-4 h-4 mr-2" strokeWidth={1.5} />
              {post.date}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          {isPodcast ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#cccccc] bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={
                  slug === "tony-fish-podcast"
                    ? "https://www.youtube.com/embed/jMiaF46azxM?si=7bY-PxqtshIMtvMx"
                    : "https://www.youtube.com/embed/K_CN4ARzngY?si=GU84O2DoSz-PJ_mg"
                }
                title={post.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#cccccc]">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          )}
        </div>
      </header>

      {/* Blog Post Body Section */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        <div className="prose prose-lg prose-neutral text-[#5c5c5c] max-w-none">
          {content?.sections.map((section, index) => {
            switch (section.type) {
              case "paragraph":
                return (
                  <p key={index} className="leading-relaxed text-lg mb-6">
                    {section.content}
                  </p>
                )
              case "heading":
                return (
                  <h2 key={index} className="text-3xl font-semibold text-[#333333] tracking-tight mt-12 mb-6">
                    {section.content}
                  </h2>
                )
              case "list":
                return (
                  <ul key={index} className="mb-8 space-y-4">
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-[#0072FF] shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                )
              case "image":
                return (
                  <figure key={index} className="my-12 block w-full">
                    <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-[#cccccc] bg-[#f5f5f5] group">
                      <Image
                        src={section.src || ""}
                        alt={section.alt || ""}
                        width={1600}
                        height={900}
                        className="transition-transform duration-700 ease-out group-hover:scale-[1.02] w-full h-auto object-cover"
                      />
                    </div>
                    {section.caption && (
                      <figcaption className="mt-4 flex items-center justify-center gap-2 text-sm text-[#5c5c5c] font-medium">
                        {section.caption}
                      </figcaption>
                    )}
                  </figure>
                )
              case "table":
                return (
                  <div
                    key={index}
                    className="mt-8 mb-12 w-full overflow-hidden rounded-xl border border-[#cccccc] bg-white shadow-sm"
                  >
                    <div className="overflow-x-auto">
                      <table className="min-w-[600px] border-collapse text-left w-full">
                        <thead>
                          <tr className="border-b border-[#cccccc] bg-[#f5f5f5]/40">
                            <th className="w-1/4 border-r border-[#cccccc] px-6 py-4 text-lg font-semibold text-[#333333]">
                              Zone
                            </th>
                            <th className="w-1/3 border-r border-[#cccccc] px-6 py-4 text-lg font-semibold text-[#333333]">
                              Finding
                            </th>
                            <th className="px-6 py-4 text-lg font-semibold text-[#333333]">Strategic Opportunity</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#cccccc] text-lg text-[#5c5c5c]">
                          {section.rows?.map((row, rowIndex) => (
                            <tr key={rowIndex} className="group hover:bg-[#f5f5f5]/30 transition-colors">
                              <td className="border-r border-[#cccccc] px-6 py-5 align-top font-semibold text-[#333333]">
                                {row.zone}
                              </td>
                              <td className="border-r border-[#cccccc] px-6 py-5 align-top leading-relaxed">{row.finding}</td>
                              <td className="px-6 py-5 align-top leading-relaxed">{row.opportunity}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )
              default:
                return null
            }
          })}
        </div>

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-[#cccccc] flex items-center justify-between">
          <div className="text-sm text-[#5c5c5c] font-medium">Share this article</div>
          <div className="flex gap-3">
            <button className="p-2 rounded-full border border-[#cccccc] hover:bg-[#f5f5f5] hover:text-[#0072FF] transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </button>
            <button className="p-2 rounded-full border border-[#cccccc] hover:bg-[#f5f5f5] hover:text-[#0072FF] transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full border border-[#cccccc] hover:bg-[#f5f5f5] hover:text-[#0072FF] transition-colors">
              <LinkIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </article>

      {/* Testimonial / Quote Section */}
      {content?.quote && (
        <section className="py-20 bg-[#333333] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0072FF]/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#003699]/20 blur-[80px] rounded-full pointer-events-none" />

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <svg
              className="w-12 h-12 text-[#0072FF] mx-auto mb-8 opacity-50"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M11.3 5.4c-1.8 1.5-3.1 3.2-3.8 5.1-.8 1.9-1.2 4-1.2 6.3 0 1 .1 1.9.4 2.8.3.9.7 1.6 1.4 2.2.6.6 1.4 1 2.3 1.1 1 .2 1.9.1 2.9-.2.9-.3 1.8-.8 2.5-1.5.7-.7 1.2-1.6 1.6-2.6.3-1 .5-2.1.5-3.2 0-1.8-.4-3.5-1.2-5.1-.8-1.6-1.9-2.9-3.2-4.1-.4-.3-.8-.7-1.3-.9l-.9.1zm-8.3 0c-1.8 1.5-3.1 3.2-3.8 5.1-.8 1.9-1.2 4-1.2 6.3 0 1 .1 1.9.4 2.8.3.9.7 1.6 1.4 2.2.6.6 1.4 1 2.3 1.1 1 .2 1.9.1 2.9-.2.9-.3 1.8-.8 2.5-1.5.7-.7 1.2-1.6 1.6-2.6.3-1 .5-2.1.5-3.2 0-1.8-.4-3.5-1.2-5.1-.8-1.6-1.9-2.9-3.2-4.1-.4-.3-.8-.7-1.3-.9l-.9.1z" />
            </svg>

            <h3 className="md:text-4xl leading-tight text-2xl font-medium mb-8">&ldquo;{content.quote.text}&rdquo;</h3>

            <div className="flex items-center justify-center gap-4">
              <div className="flex font-bold text-[#333333] bg-[#5c5c5c] w-12 h-12 rounded-full items-center justify-center text-white">
                {content.quote.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="text-left">
                <div className="font-semibold text-white">{content.quote.author}</div>
                <div className="text-sm text-[#5c5c5c]">{content.quote.role}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Posts Section */}
      <section className="py-24 bg-white border-b border-[#cccccc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-semibold tracking-tight text-[#333333]">Related Articles</h2>
            <Link
              href="/blog"
              className="text-[#0072FF] hover:text-[#003699] font-medium text-sm flex items-center transition-colors"
            >
              View all posts <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.slug} className="flex flex-col group h-full">
                <Link
                  href={`/blog/${relatedPost.slug}`}
                  className="block overflow-hidden rounded-xl border border-[#cccccc] mb-5 relative aspect-video bg-[#f5f5f5] shadow-sm group-hover:shadow-lg transition-all duration-300"
                >
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className={`group-hover:scale-105 transition-transform duration-500 object-cover ${
                      relatedPost.category === "Podcast" ? "grayscale contrast-125" : ""
                    }`}
                  />
                </Link>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#0072FF] text-xs font-semibold uppercase tracking-wide">
                      {relatedPost.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#5c5c5c]" />
                    <span className="text-[#5c5c5c] text-xs">{relatedPost.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#333333] mb-3 group-hover:text-[#0072FF] transition-colors">
                    <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
