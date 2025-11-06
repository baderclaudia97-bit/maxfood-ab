import { NextResponse } from "next/server";

const baseUrl = "https://maxfood.se";
const locales = ["es", "sv", "en", "fr", "de", "ar", "zh", "ja"];
const routes = ["", "products", "contact", "about"];

export async function GET() {
  const sitemapXml = generateSitemap();

  return new NextResponse(sitemapXml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=172800",
    },
  });
}

function generateSitemap(): string {
  const urls = [];

  for (const locale of locales) {
    for (const route of routes) {
      const path = route ? `/${locale}/${route}` : `/${locale}`;
      const url = `${baseUrl}${path}`;

      urls.push({
        loc: url,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: route ? "monthly" : "weekly",
        priority: route ? "0.8" : "1.0",
        alternates: locales.map((alt) => ({
          hreflang: alt,
          href: `${baseUrl}${alt === locale ? path : route ? `/${alt}/${route}` : `/${alt}`}`,
        })),
      });
    }
  }

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  for (const urlEntry of urls) {
    xml += "  <url>\n";
    xml += `    <loc>${escapeXml(urlEntry.loc)}</loc>\n`;
    xml += `    <lastmod>${urlEntry.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${urlEntry.changefreq}</changefreq>\n`;
    xml += `    <priority>${urlEntry.priority}</priority>\n`;

    // Add hreflang alternates
    for (const alt of urlEntry.alternates) {
      xml += `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${escapeXml(alt.href)}" />\n`;
    }

    xml += "  </url>\n";
  }

  xml += "</urlset>";

  return xml;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
