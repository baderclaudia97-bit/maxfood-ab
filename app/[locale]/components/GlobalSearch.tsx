"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "@/navigation";
import Link from "next/link";
import { sampleBlogPosts } from "@/types/blog";
import { Locale } from "@/app/layout";

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  type: "blog" | "product" | "page";
  url: string;
  locale: Locale;
}

interface SearchProps {
  locale: Locale;
  onClose?: () => void;
}

export default function GlobalSearch({ locale, onClose }: SearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Search across all content
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = searchQuery.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search in blog posts
    sampleBlogPosts
      .filter((post) => post.locale === locale)
      .forEach((post) => {
        if (
          post.title.toLowerCase().includes(lowerQuery) ||
          post.excerpt.toLowerCase().includes(lowerQuery) ||
          post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
        ) {
          searchResults.push({
            id: post.id,
            title: post.title,
            excerpt: post.excerpt,
            type: "blog",
            url: `/blog/${post.slug}`,
            locale,
          });
        }
      });

    // Search in products
    const products = [
      { id: "1", name: "Premium Beverages", slug: "premium-beverages" },
      { id: "2", name: "Healthy Snacks", slug: "healthy-snacks" },
      { id: "3", name: "Dairy Products", slug: "dairy-products" },
    ];

    products.forEach((product) => {
      if (product.name.toLowerCase().includes(lowerQuery)) {
        searchResults.push({
          id: product.id,
          title: product.name,
          excerpt: "Browse our collection of premium products",
          type: "product",
          url: `/products`,
          locale,
        });
      }
    });

    // Search in pages
    const pages = [
      { name: "About Us", slug: "about", excerpt: "Learn more about MaxFood AB" },
      { name: "Contact", slug: "contact", excerpt: "Get in touch with our team" },
      { name: "Privacy Policy", slug: "privacy", excerpt: "Our privacy and data policies" },
    ];

    pages.forEach((page) => {
      if (page.name.toLowerCase().includes(lowerQuery)) {
        searchResults.push({
          id: page.slug,
          title: page.name,
          excerpt: page.excerpt,
          type: "page",
          url: `/${page.slug}`,
          locale,
        });
      }
    });

    setResults(searchResults.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(-1);
  };

  useEffect(() => {
    performSearch(query);
  }, [query, locale]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < results.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleResultClick(results[selectedIndex]);
        }
      } else if (e.key === "Escape") {
        setIsOpen(false);
        if (onClose) onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [selectedIndex, results, isOpen, onClose]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleResultClick = (result: SearchResult) => {
    router.push(result.url);
    setQuery("");
    setIsOpen(false);
    if (onClose) onClose();
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "blog":
        return "text-blue-400";
      case "product":
        return "text-green-400";
      case "page":
        return "text-purple-400";
      default:
        return "text-gray-400";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "blog":
        return "Article";
      case "product":
        return "Product";
      case "page":
        return "Page";
      default:
        return "Result";
    }
  };

  return (
    <div
      ref={searchRef}
      className="relative w-full md:w-80"
    >
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 transition"
        />
        <span className="absolute right-3 top-2.5 text-gray-500 text-sm">
          🔍
        </span>
      </div>

      {/* Results Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-800 transition flex items-start justify-between ${
                    index === selectedIndex ? "bg-gray-800" : ""
                  }`}
                >
                  <div className="flex-1">
                    <div className="text-white font-medium mb-1">
                      {result.title}
                    </div>
                    <div className="text-sm text-gray-400 line-clamp-1">
                      {result.excerpt}
                    </div>
                  </div>
                  <span
                    className={`text-xs font-semibold ml-2 whitespace-nowrap ${getTypeColor(result.type)}`}
                  >
                    {getTypeLabel(result.type)}
                  </span>
                </button>
              ))}
            </div>
          ) : query ? (
            <div className="p-4 text-center text-gray-400">
              No results found for "{query}"
            </div>
          ) : (
            <div className="p-4 text-center text-gray-500 text-sm">
              Start typing to search...
            </div>
          )}
        </div>
      )}
    </div>
  );
}
