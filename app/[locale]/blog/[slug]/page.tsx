import { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BlogCard from "../../components/BlogCard";
import { Locale } from "@/app/layout";
import {
  sampleBlogPosts,
  formatBlogDate,
  getRelatedPosts,
  BlogPost,
} from "@/types/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { setRequestLocale } from "next-intl/server";

// Enable static rendering with next-intl
export const dynamicParams = true;
export const revalidate = 3600; // Revalidate every hour

interface PageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = sampleBlogPosts.find(
    (p) => p.slug === slug && p.locale === locale
  );

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} — MaxFood AB`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      url: `https://maxfood.se/${locale}/blog/${slug}`,
      siteName: "MaxFood AB",
      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : undefined,
    },
    keywords: post.seoKeywords || post.tags,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const post = sampleBlogPosts.find(
    (p) => p.slug === slug && p.locale === locale
  );

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, sampleBlogPosts);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header locale={locale} />

      <main className="flex-grow">
        {/* Article Header */}
        <section className="bg-gradient-to-b from-blue-950 to-black px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-gray-400">
              <Link href={`/${locale}/blog`} className="hover:text-blue-400">
                Blog
              </Link>
              {" / "}
              <span className="text-white">{post.title}</span>
            </nav>

            {/* Category & Featured Badge */}
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
                {post.category}
              </span>
              {post.featured && (
                <span className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-semibold">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{post.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white font-semibold">{post.author}</p>
                  <p className="text-sm">{formatBlogDate(post.date, locale)}</p>
                </div>
              </div>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.image && (
          <div className="px-4 md:px-8 py-8">
            <div className="max-w-3xl mx-auto">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <section className="px-4 md:px-8 py-16">
          <div className="max-w-3xl mx-auto">
            {/* Article Body */}
            <article className="prose prose-invert max-w-none mb-12">
              <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                {post.content}
              </div>
            </article>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 py-6 border-t border-gray-800">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/${locale}/blog?search=${tag}`}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold mb-3">About the Author</h3>
              <p className="text-gray-400">
                {post.author} is a senior expert at MaxFood AB with extensive experience
                in food production and quality assurance.
              </p>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="px-4 md:px-8 py-16 md:py-24 bg-gray-950 border-t border-gray-800">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard
                    key={relatedPost.id}
                    post={relatedPost}
                    locale={locale}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Share Section */}
        <section className="px-4 md:px-8 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Share This Article</h3>
            <div className="flex justify-center gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://maxfood.se/${locale}/blog/${post.slug}`}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://maxfood.se/${locale}/blog/${post.slug}`}
                className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://maxfood.se/${locale}/blog/${post.slug}`}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

// Generate static params for known posts
export async function generateStaticParams() {
  const locales: Locale[] = ["en", "es", "sv", "fr", "de", "ar", "zh", "ja"];
  const params: Array<{ locale: Locale; slug: string }> = [];
  
  locales.forEach((locale) => {
    sampleBlogPosts
      .filter((post) => post.locale === locale)
      .forEach((post) => {
        params.push({ locale, slug: post.slug });
      });
  });
  
  return params;
}
