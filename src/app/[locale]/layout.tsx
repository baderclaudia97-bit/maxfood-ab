import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: 'MaxFood AB — Premium Food Solutions',
  description: 'Leading manufacturer of high-quality food products with ISO certification',
  metadataBase: new URL('https://maxfood.se'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maxfood.se',
    siteName: 'MaxFood AB',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export async function generateStaticParams() {
  return [
    { locale: 'es' },
    { locale: 'sv' },
    { locale: 'en' },
    { locale: 'fr' },
    { locale: 'de' },
    { locale: 'ar' },
    { locale: 'zh' },
    { locale: 'ja' },
  ];
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  
  const supportedLocales = ['es', 'sv', 'en', 'fr', 'de', 'ar', 'zh', 'ja'];
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html 
      lang={locale} 
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className={inter.variable}
    >
      <head>
        <link rel="alternate" hrefLang="es" href="https://maxfood.se/es" />
        <link rel="alternate" hrefLang="sv" href="https://maxfood.se/sv" />
        <link rel="alternate" hrefLang="en" href="https://maxfood.se/en" />
        <link rel="alternate" hrefLang="fr" href="https://maxfood.se/fr" />
        <link rel="alternate" hrefLang="de" href="https://maxfood.se/de" />
        <link rel="alternate" hrefLang="ar" href="https://maxfood.se/ar" />
        <link rel="alternate" hrefLang="zh" href="https://maxfood.se/zh" />
        <link rel="alternate" hrefLang="ja" href="https://maxfood.se/ja" />
        <link rel="alternate" hrefLang="x-default" href="https://maxfood.se/en" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#0b0f19" />
      </head>
      <body className="bg-brand-dark text-brand-light min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
