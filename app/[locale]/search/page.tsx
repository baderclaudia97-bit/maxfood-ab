"use client";

import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Locale } from "@/app/layout";
import { sampleBlogPosts } from "@/types/blog";
import BlogCard from "../components/BlogCard";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function SearchPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <SearchPageClient locale={locale} />
  );
}

function SearchPageClient({ locale }: { locale: Locale }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  // Search in blog posts
  const blogResults = sampleBlogPosts.filter(
    (post) =>
      post.locale === (locale as string) &&
      (post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        ))
  );

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header locale={locale as Locale} />

      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-b from-blue-950 to-black px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Search Results</h1>
            {query && (
              <p className="text-xl text-gray-300">
                Showing results for "{query}"
              </p>
            )}
          </div>
        </section>

        {/* Results */}
        <section className="px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            {query ? (
              blogResults.length > 0 ? (
                <div>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Articles ({blogResults.length})
                    </h2>
                    <div className="grid grid-cols-1 gap-8">
                      {blogResults.map((post) => (
                        <BlogCard
                          key={post.id}
                          post={post}
                          locale={locale as string}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-2xl font-bold mb-2">No results found</p>
                  <p className="text-gray-400">
                    Try a different search term or browse our blog and products.
                  </p>
                </div>
              )
            ) : (
              <div className="text-center py-16">
                <p className="text-2xl font-bold mb-2">No search query</p>
                <p className="text-gray-400">
                  Use the search box to find articles, products, and more.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
