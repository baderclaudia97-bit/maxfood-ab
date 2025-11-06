import { Locale } from "@/app/layout";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  image?: string;
  featured: boolean;
  locale: Locale;
  readingTime: number;
  seoKeywords?: string[];
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color?: string;
  icon?: string;
  locale: Locale;
}

export interface BlogComment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  date: string;
  approved: boolean;
  parentId?: string; // For nested replies
}

// Sample blog posts data
export const sampleBlogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "the-importance-of-food-quality",
    title: "The Importance of Food Quality in Modern Manufacturing",
    excerpt:
      "Learn why quality standards are crucial in the food manufacturing industry and how they impact consumer health.",
    content: `
# The Importance of Food Quality

Food quality is paramount in modern manufacturing. With consumers becoming increasingly health-conscious, the standards we maintain are not just regulatory requirements but a commitment to excellence.

## Why Quality Matters

Quality assurance in food production involves multiple layers of testing and verification. Each product must meet strict ISO 9001:2015 standards.

## Our Commitment

At MaxFood AB, we have invested in state-of-the-art facilities and rigorous testing protocols to ensure every product meets our exacting standards.
    `,
    author: "Johan Romberg",
    date: "2025-11-01",
    category: "Quality",
    tags: ["quality", "manufacturing", "standards", "iso"],
    featured: true,
    locale: "en",
    readingTime: 5,
    seoKeywords: [
      "food quality",
      "manufacturing standards",
      "ISO certification",
    ],
  },
  {
    id: "2",
    slug: "sustainable-food-production",
    title: "Sustainable Food Production: Our Journey",
    excerpt:
      "Discover how MaxFood AB is leading the way in sustainable and environmentally responsible food production.",
    content: `
# Sustainable Food Production

Sustainability is not just a buzzword for us—it's a core value that drives every decision we make.

## Environmental Responsibility

We have implemented several green initiatives:
- Renewable energy usage
- Waste reduction programs
- Sustainable sourcing

## Future Goals

By 2030, we aim to be carbon neutral in all our operations.
    `,
    author: "Anna Svensson",
    date: "2025-10-28",
    category: "Sustainability",
    tags: ["sustainability", "environment", "green"],
    featured: false,
    locale: "en",
    readingTime: 7,
  },
  {
    id: "3",
    slug: "innovation-in-beverage-technology",
    title: "Innovation in Beverage Technology",
    excerpt:
      "Explore the latest technological advancements in beverage production and how we're implementing them.",
    content: `
# Innovation in Beverage Technology

The beverage industry is evolving rapidly. We're at the forefront of technological innovation.

## Latest Innovations

- Cold brew extraction
- Natural flavor enhancement
- Extended shelf-life preservation

## Research & Development

Our R&D team continuously explores new possibilities to improve product quality and shelf-life.
    `,
    author: "Marcus Bergström",
    date: "2025-10-15",
    category: "Innovation",
    tags: ["innovation", "technology", "beverages", "rd"],
    featured: true,
    locale: "en",
    readingTime: 6,
  },
];

export const sampleBlogCategories: BlogCategory[] = [
  {
    id: "1",
    name: "Quality",
    slug: "quality",
    description: "Articles about food quality and standards",
    color: "#3b82f6",
    icon: "✓",
    locale: "en",
  },
  {
    id: "2",
    name: "Sustainability",
    slug: "sustainability",
    description: "Environmental and sustainability initiatives",
    color: "#10b981",
    icon: "🌱",
    locale: "en",
  },
  {
    id: "3",
    name: "Innovation",
    slug: "innovation",
    description: "Latest innovations and technological advances",
    color: "#f59e0b",
    icon: "💡",
    locale: "en",
  },
  {
    id: "4",
    name: "News",
    slug: "news",
    description: "Company news and announcements",
    color: "#ef4444",
    icon: "📰",
    locale: "en",
  },
];

// Calculate reading time (rough estimate: 200 words per minute)
export function calculateReadingTime(content: string): number {
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / 200);
}

// Generate excerpt from content
export function generateExcerpt(content: string, maxLength: number = 160): string {
  const plainText = content.replace(/[#*`]/g, "").trim();
  if (plainText.length > maxLength) {
    return plainText.substring(0, maxLength).trim() + "...";
  }
  return plainText;
}

// Format date for display
export function formatBlogDate(date: string, locale: string = "en"): string {
  return new Date(date).toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Get related posts
export function getRelatedPosts(
  post: BlogPost,
  allPosts: BlogPost[],
  limit: number = 3
): BlogPost[] {
  return allPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        p.locale === post.locale &&
        (p.category === post.category ||
          p.tags.some((tag) => post.tags.includes(tag)))
    )
    .slice(0, limit);
}

// Search posts
export function searchPosts(
  query: string,
  posts: BlogPost[],
  locale: Locale
): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  return posts.filter(
    (post) =>
      post.locale === locale &&
      (post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.content.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)))
  );
}
