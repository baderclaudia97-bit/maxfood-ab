import { useTranslations } from "next-intl";
import { Locale } from "../layout";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import SchemaScript from "./components/SchemaScript";
import { generateBreadcrumbSchema, generateAggregateOfferSchema } from "@/lib/schema";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header locale={locale} />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-[600px] bg-gradient-to-b from-black via-gray-900 to-black px-4 md:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
              MaxFood AB
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delayed">
              Premium Food Solutions — Soluciones Alimentarias de Calidad Superior
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-delayed-2">
              <button className="px-8 py-4 bg-white text-black font-semibold rounded hover:bg-gray-200 transition transform hover:scale-105">
                Explore Catalog →
              </button>
              <button className="px-8 py-4 border border-white text-white font-semibold rounded hover:bg-white/10 transition transform hover:scale-105">
                Get in Touch
              </button>
            </div>
          </div>

          {/* Background gradient */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent" />
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
              Featured Products
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Premium quality products from our extensive catalog
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product 1 */}
              <ProductCard
                id="1"
                title="Premium Beverages"
                description="High-quality beverages made with natural ingredients"
                price="2.99"
                category="beverage"
                featured
              />

              {/* Product 2 */}
              <ProductCard
                id="2"
                title="Healthy Snacks"
                description="Nutritious snacks certified organic and sustainable"
                price="1.99"
                category="snack"
              />

              {/* Product 3 */}
              <ProductCard
                id="3"
                title="Dairy Products"
                description="Premium dairy from verified sources"
                price="3.49"
                category="dairy"
              />
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
                View All Products →
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              About MaxFood AB
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold mb-4">Premium Quality Guaranteed</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  Leading manufacturer of high-quality food products with ISO 9001:2015 certification. 
                  More than 20 years of excellence in the food industry, serving businesses across Europe.
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    <span>ISO 9001:2015 Certified</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    <span>HACCP System Implemented</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    <span>Organic Products Available</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    <span>24/7 Quality Control</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400">✓</span>
                    <span>Private Label Solutions</span>
                  </li>
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-lg p-8 text-center">
                  <div className="text-5xl font-bold text-blue-300 mb-2">20+</div>
                  <p className="text-gray-300">Years Experience</p>
                </div>
                <div className="bg-gradient-to-br from-green-900 to-green-950 rounded-lg p-8 text-center">
                  <div className="text-5xl font-bold text-green-300 mb-2">500+</div>
                  <p className="text-gray-300">Happy Customers</p>
                </div>
                <div className="bg-gradient-to-br from-purple-900 to-purple-950 rounded-lg p-8 text-center">
                  <div className="text-5xl font-bold text-purple-300 mb-2">8</div>
                  <p className="text-gray-300">Languages</p>
                </div>
                <div className="bg-gradient-to-br from-orange-900 to-orange-950 rounded-lg p-8 text-center">
                  <div className="text-5xl font-bold text-orange-300 mb-2">98%</div>
                  <p className="text-gray-300">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-r from-blue-950 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Contact our sales team to discuss your food product needs.
            </p>
            <button className="px-8 py-4 bg-white text-blue-900 font-semibold rounded hover:bg-gray-100 transition transform hover:scale-105">
              Get Started →
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Styles for animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fadeIn 0.8s ease-out 0.2s both;
        }

        .animate-fade-in-delayed-2 {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }
      `}</style>

      {/* JSON-LD Schemas */}
      <SchemaScript
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "https://maxfood.se" },
        ])}
      />
      
      <SchemaScript
        schema={generateAggregateOfferSchema([
          { id: "1", title: "Premium Beverages", price: 2.99, category: "beverage", description: "", status: "available" },
          { id: "2", title: "Healthy Snacks", price: 1.99, category: "snack", description: "", status: "available" },
          { id: "3", title: "Dairy Products", price: 3.49, category: "dairy", description: "", status: "available" },
        ])}
      />
    </div>
  );
}
