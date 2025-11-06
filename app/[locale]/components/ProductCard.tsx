interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price?: string | number;
  image?: string;
  category: "beverage" | "snack" | "dairy" | "other";
  featured?: boolean;
  onClick?: () => void;
}

const categoryColors = {
  beverage: "from-blue-900 to-blue-950",
  snack: "from-green-900 to-green-950",
  dairy: "from-purple-900 to-purple-950",
  other: "from-gray-800 to-gray-900",
};

const categoryBadgeColors = {
  beverage: "bg-blue-500/20 text-blue-300",
  snack: "bg-green-500/20 text-green-300",
  dairy: "bg-purple-500/20 text-purple-300",
  other: "bg-gray-500/20 text-gray-300",
};

export default function ProductCard({
  id,
  title,
  description,
  price,
  image,
  category,
  featured = false,
  onClick,
}: ProductCardProps) {
  return (
    <div
      className={`bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-white/20 transition cursor-pointer transform hover:scale-105 ${
        featured ? "border-2 border-blue-400" : "border border-gray-800"
      }`}
      onClick={onClick}
    >
      {/* Image or Placeholder */}
      <div className={`h-48 bg-gradient-to-br ${categoryColors[category]} relative overflow-hidden`}>
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl">📦</span>
          </div>
        )}
        {featured && (
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${categoryBadgeColors[category]}`}>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Price */}
        {price && (
          <div className="mb-4 flex items-center gap-2">
            <span className="text-2xl font-bold text-white">${price}</span>
            <span className="text-xs text-gray-500">per unit</span>
          </div>
        )}

        {/* CTA Button */}
        <button className="w-full px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
          View Details →
        </button>
      </div>
    </div>
  );
}
