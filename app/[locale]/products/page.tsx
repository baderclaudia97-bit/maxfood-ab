import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import SchemaScript from "../components/SchemaScript";
import { Locale } from "@/app/layout";
import { getPageMetadata } from "@/lib/metadata";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  return getPageMetadata(locale, "products");
}

// Sample products data (TODO: Load from CMS)
const products = [
  {
    id: "1",
    title: "Orange Juice Premium",
    description: "Fresh squeezed orange juice from premium oranges",
    price: 2.99,
    category: "beverage" as const,
    featured: true,
  },
  {
    id: "2",
    title: "Almond Milk",
    description: "Creamy almond milk made with natural ingredients",
    price: 2.49,
    category: "beverage" as const,
  },
  {
    id: "3",
    title: "Organic Energy Bar",
    description: "High-protein energy bar with organic ingredients",
    price: 1.99,
    category: "snack" as const,
  },
  {
    id: "4",
    title: "Mixed Nuts",
    description: "Assorted premium nuts with no additives",
    price: 3.99,
    category: "snack" as const,
  },
  {
    id: "5",
    title: "Yogurt Plain",
    description: "Natural plain yogurt with live cultures",
    price: 1.49,
    category: "dairy" as const,
  },
  {
    id: "6",
    title: "Mozzarella Cheese",
    description: "Premium fresh mozzarella cheese",
    price: 4.99,
    category: "dairy" as const,
  },
  {
    id: "7",
    title: "Granola Mix",
    description: "Honey granola with dried fruits and nuts",
    price: 2.79,
    category: "snack" as const,
    featured: true,
  },
  {
    id: "8",
    title: "Coconut Water",
    description: "Pure coconut water from young coconuts",
    price: 2.99,
    category: "beverage" as const,
  },
  {
    id: "9",
    title: "Cheddar Cheese",
    description: "Aged sharp cheddar cheese",
    price: 5.49,
    category: "dairy" as const,
  },
];

export default async function ProductsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header locale={locale} />

      <main className="flex-grow">
        {/* Page Header */}
        <section className="bg-gradient-to-b from-blue-950 to-black px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Our Products
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Explore our complete catalog of premium food products, carefully selected for quality and excellence.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="px-4 md:px-8 py-8 bg-gray-950 border-b border-gray-800">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                All Products
              </button>
              <button className="px-6 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition">
                Beverages
              </button>
              <button className="px-6 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition">
                Snacks
              </button>
              <button className="px-6 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition">
                Dairy
              </button>
              <select className="px-4 py-2 bg-gray-800 text-gray-200 rounded hover:bg-gray-700 transition ml-auto cursor-pointer">
                <option>Sort by Price</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  category={product.category}
                  featured={product.featured}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pagination */}
        <section className="px-4 md:px-8 py-12">
          <div className="max-w-6xl mx-auto flex justify-center gap-4">
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition disabled:opacity-50" disabled>
              ← Previous
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              1
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
              2
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
              3
            </button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">
              Next →
            </button>
          </div>
        </section>
      </main>

      <Footer />

      {/* JSON-LD Schemas */}
      <SchemaScript
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "https://maxfood.se" },
          { name: "Products", url: "https://maxfood.se/products" },
        ])}
      />
    </div>
  );
}
