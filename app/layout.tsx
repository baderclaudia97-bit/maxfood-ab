import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import "@/app/globals.css";

export type Locale = "en" | "es" | "sv" | "fr" | "de" | "ar" | "zh" | "ja";

export const metadata: Metadata = {
  title: "MaxFood AB | Premium Food Products",
  description: "MaxFood AB - Premium European food products distributor. Available in 8 languages.",
  keywords: "food, premium, european, maxfood, ab, distributor",
  authors: [{ name: "MaxFood AB" }],
  creator: "MaxFood AB",
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://maxfood.se",
    title: "MaxFood AB | Premium Food Products",
    description: "Premium European food products",
    siteName: "MaxFood AB",
  },
  twitter: {
    card: "summary_large_image",
    title: "MaxFood AB",
    description: "Premium European food products",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const t = await getTranslations({ locale });

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={`https://maxfood.se/${locale}`} />
        <link rel="alternate" hrefLang="es" href="https://maxfood.se/es" />
        <link rel="alternate" hrefLang="sv" href="https://maxfood.se/sv" />
        <link rel="alternate" hrefLang="en" href="https://maxfood.se/en" />
        <link rel="alternate" hrefLang="fr" href="https://maxfood.se/fr" />
        <link rel="alternate" hrefLang="de" href="https://maxfood.se/de" />
        <link rel="alternate" hrefLang="ar" href="https://maxfood.se/ar" />
        <link rel="alternate" hrefLang="zh" href="https://maxfood.se/zh" />
        <link rel="alternate" hrefLang="ja" href="https://maxfood.se/ja" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body>{children}</body>
    </html>
  );
}
