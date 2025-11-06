import { NextResponse } from "next/server";

export async function GET() {
  const robotsContent = `# MaxFood AB - robots.txt
# Generated dynamically by API

User-agent: *
Allow: /
Disallow: /admin
Disallow: /api/admin
Disallow: /private
Disallow: *.json$
Disallow: /.well-known/

# Crawl delay
Crawl-delay: 1

# Sitemap references for all languages
Sitemap: https://maxfood.se/sitemap.xml
Sitemap: https://maxfood.se/api/sitemap

# Google specific
User-agent: Googlebot
Allow: /
Crawl-delay: 0

# Bingbot specific
User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# All others
User-agent: *
Allow: /
Disallow: /admin
Disallow: /private
`;

  return new NextResponse(robotsContent, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=172800",
    },
  });
}
