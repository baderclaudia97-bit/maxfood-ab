import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { generateOrganizationSchema } from "@/lib/schema";
import GDPRBanner from "@/app/[locale]/components/GDPRBanner";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// Locales soportados
export const LOCALES = ["es", "sv", "en", "fr", "de", "ar", "zh", "ja"] as const;
export type Locale = (typeof LOCALES)[number];

// Metadata base por idioma
const metadataByLocale: Record<Locale, { title: string; description: string }> = {
  es: {
    title: "MaxFood AB — Soluciones Alimentarias Premium",
    description: "Fabricante líder de productos alimentarios de alta calidad con certificación ISO. Bebidas, snacks, lácteos y soluciones de etiqueta privada.",
  },
  sv: {
    title: "MaxFood AB — Premium Livsmedelslösningar",
    description: "Ledande producent av högkvalitativa livsmedelsprodukter med ISO-certifiering. Drycker, snacks, mejerivaror och privatmärkeslösningar.",
  },
  en: {
    title: "MaxFood AB — Premium Food Solutions",
    description: "Leading manufacturer of high-quality food products with ISO certification. Beverages, snacks, dairy products, and private label solutions.",
  },
  fr: {
    title: "MaxFood AB — Solutions Alimentaires Premium",
    description: "Fabricant leader de produits alimentaires haut de gamme certifiés ISO. Boissons, collations, produits laitiers et solutions de marque privée.",
  },
  de: {
    title: "MaxFood AB — Premium-Lebensmittellösungen",
    description: "Führender Hersteller hochwertiger Lebensmittelprodukte mit ISO-Zertifizierung. Getränke, Snacks, Milchprodukte und White-Label-Lösungen.",
  },
  ar: {
    title: "MaxFood AB — حلول غذائية متميزة",
    description: "مصنع رائد للمنتجات الغذائية عالية الجودة معتمد ISO. المشروبات والوجبات الخفيفة ومنتجات الألبان والحلول ذات العلامات الخاصة.",
  },
  zh: {
    title: "MaxFood AB — 优质食品解决方案",
    description: "ISO认证的高品质食品产品领先制造商。饮料、零食、乳制品和自有品牌解决方案。",
  },
  ja: {
    title: "MaxFood AB — プレミアム食品ソリューション",
    description: "ISO認証の高品質食品製品を製造する業界リーダー。飲料、スナック、乳製品、プライベートブランドソリューション。",
  },
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({
    locale,
  }));
}

export async function generateMetadata(
  props: LocaleLayoutProps
): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;

  if (!LOCALES.includes(locale)) {
    notFound();
  }

  const meta = metadataByLocale[locale];
  const siteUrl = "https://maxfood.se";
  const alternates = LOCALES.reduce(
    (acc, loc) => ({
      ...acc,
      [loc]: `${siteUrl}/${loc}`,
    }),
    {}
  );

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(siteUrl),
    alternates: {
      languages: alternates as any,
      canonical: `${siteUrl}/${locale}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteUrl}/${locale}`,
      siteName: "MaxFood AB",
      type: "website",
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "MaxFood AB",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [`${siteUrl}/twitter-image.png`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LocaleLayoutProps & { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  if (!LOCALES.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  // Determine text direction based on locale (RTL for Arabic)
  const isRTL = locale === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={direction}>
      <head>
        {/* Hreflang alternates para SEO multiidioma */}
        {LOCALES.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc}
            href={`https://maxfood.se/${loc}`}
          />
        ))}
        {/* Hreflang x-default */}
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://maxfood.se/en"
        />
        
        {/* Viewport y otros meta tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#000000" />
        <meta name="background-color" content="#ffffff" />

        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
      </head>
      <body
        className={`${interSans.variable} ${jetbrainsMono.variable} antialiased bg-black text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
          <GDPRBanner />
        </NextIntlClientProvider>
        
        {/* Service Worker registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.register('/sw.js')
                  .then(() => console.log('✅ Service Worker registered'))
                  .catch(() => console.log('⚠️ Service Worker registration failed'));
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
