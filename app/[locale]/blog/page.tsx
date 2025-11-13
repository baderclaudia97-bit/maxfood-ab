import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogPageClient from "./BlogPageClient";
import { Locale } from "@/app/layout";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Blog — MaxFood AB",
    description: "Insights, stories, and innovations from the world of premium food production.",
    openGraph: {
      title: "Blog — MaxFood AB",
      description: "Insights, stories, and innovations from the world of premium food production.",
      type: "website",
      url: `https://maxfood.se/${locale}/blog`,
      siteName: "MaxFood AB",
    },
  };
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <BlogPageClient locale={locale} />
  );
}
