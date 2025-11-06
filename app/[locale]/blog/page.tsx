"use client";

import { useTranslations } from "next-intl";
import { useState, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import { Locale } from "@/app/layout";
import { sampleBlogPosts, sampleBlogCategories, searchPosts } from "@/types/blog";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <BlogPageClient locale={locale} />
  );
}

function BlogPageClient({ locale }: { locale: Locale }) {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter posts by category and search query
  const filteredPosts = useMemo(() => {
    let filtered = sampleBlogPosts.filter((post) => post.locale === (locale as string));

    if (selectedCategory !== "all") {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = searchPosts(searchQuery, filtered, locale as Locale);
    }

    return filtered;
  }, [selectedCategory, searchQuery, locale]);

  // Sort: featured first, then by date
  const sortedPosts = useMemo(() => {
    return [...filteredPosts].sort((a, b) => {
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [filteredPosts]);

  const categories = sampleBlogCategories.filter((cat) => cat.locale === (locale as string));

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header locale={locale as Locale} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-950 to-black px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Blog</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Insights, stories, and innovations from the world of premium food production.
            </p>
          </div>
        </section>

        {/* Search and Filters */}
        <section className="px-4 md:px-8 py-8 bg-gray-950 border-b border-gray-800">
          <div className="max-w-6xl mx-auto">
            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded transition ${
                  selectedCategory === "all"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                All Articles
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded transition flex items-center gap-2 ${
                    selectedCategory === category.name
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Results count */}
            {searchQuery && (
              <p className="text-sm text-gray-400 mt-4">
                Found {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>
        </section>

        {/* Blog Grid */}
        <section className="px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            {sortedPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 auto-rows-max">
                {sortedPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    locale={locale as string}
                    featured={post.featured}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-2xl font-bold mb-2">No articles found</p>
                <p className="text-gray-400">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="px-4 md:px-8 py-16 md:py-24 bg-gradient-to-r from-blue-950 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Subscribe to our newsletter to get the latest articles delivered to your inbox.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 bg-gray-900 border border-gray-800 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
              />
              <button className="px-8 py-3 bg-white text-blue-900 font-semibold rounded hover:bg-gray-200 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
