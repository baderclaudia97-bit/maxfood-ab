import { BlogPost, formatBlogDate } from "@/types/blog";
import { Link } from "@/navigation";

interface BlogCardProps {
  post: BlogPost;
  locale: string;
  featured?: boolean;
}

export default function BlogCard({ post, locale, featured = false }: BlogCardProps) {
  return (
    <article
      className={`group bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition border ${
        featured ? "border-blue-500 md:col-span-2 md:flex" : "border-gray-800"
      }`}
    >
      {/* Image */}
      <div
        className={`bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center overflow-hidden ${
          featured ? "md:w-2/5 h-64 md:h-auto" : "h-48"
        }`}
      >
        {post.image ? (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        ) : (
          <span className="text-6xl">📝</span>
        )}
      </div>

      {/* Content */}
      <div className={`p-6 flex flex-col justify-between ${featured ? "md:w-3/5" : ""}`}>
        {/* Header */}
        <div>
          {/* Category & Date */}
          <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">
              {post.category}
            </span>
            <span className="text-xs text-gray-500">
              {formatBlogDate(post.date, locale)} • {post.readingTime} min read
            </span>
          </div>

          {/* Title */}
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition line-clamp-2">
              {post.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-3">
            {post.excerpt}
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-800">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">
                {post.author.charAt(0)}
              </span>
            </div>
            <span className="text-xs text-gray-400">{post.author}</span>
          </div>

          {/* Read More Link */}
          <Link
            href={`/blog/${post.slug}`}
            className="text-blue-400 hover:text-blue-300 text-sm font-semibold transition flex items-center gap-1"
          >
            Read More →
          </Link>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
            {post.tags.length > 2 && (
              <span className="text-xs text-gray-500">+{post.tags.length - 2}</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
