import { NextResponse, type NextRequest } from "next/server"
import { htmlRewrites } from "./site-routes.generated.mjs"

export function middleware(request: NextRequest) {
  const match = htmlRewrites.find((rule) => rule.source === request.nextUrl.pathname)
  if (!match) return NextResponse.next()
  return NextResponse.rewrite(new URL(match.destination, request.url))
}

export const config = {
  matcher: ["/", "/((?!api|_next/static|_next/image|favicon.ico|site-runtime.js).*)"],
}
