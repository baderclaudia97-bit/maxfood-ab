import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

// Define locales
export const locales = ["es", "sv", "en", "fr", "de", "ar", "zh", "ja"];
const defaultLocale = "en";

// Create middleware with next-intl
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  localeCookie: "NEXT_LOCALE",
});

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/public/") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|txt|robots|xml)$/)
  ) {
    return NextResponse.next();
  }

  // Apply i18n middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|manifest.json).*)",
  ],
};
