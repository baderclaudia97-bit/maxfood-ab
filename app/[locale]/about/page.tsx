import Header from "../components/Header";
import Footer from "../components/Footer";
import { Locale } from "@/app/layout";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header locale={locale} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-950 to-black px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About MaxFood AB</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Leading manufacturer of premium food products since 2000. ISO 9001:2015 certified excellence.
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  MaxFood AB was founded in 2000 with a simple mission: to deliver the highest quality food 
                  products to customers across Europe. Over two decades, we've grown from a small local producer 
                  to a leading manufacturer serving hundreds of businesses.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Our commitment to quality, innovation, and customer satisfaction has never wavered. Every product 
                  that leaves our facilities undergoes rigorous quality control to ensure it meets our exacting standards.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-lg h-96 flex items-center justify-center border border-blue-800">
                <div className="text-center">
                  <span className="text-8xl">🏭</span>
                  <p className="text-gray-300 mt-4">Modern Production Facility</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-4 md:px-8 py-16 md:py-24 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {/* Quality */}
              <div className="bg-black rounded-lg p-8 border border-gray-800 hover:border-blue-600 transition">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-4">Quality First</h3>
                <p className="text-gray-400">
                  Every product meets ISO 9001:2015 standards with 24/7 quality control monitoring.
                </p>
              </div>

              {/* Innovation */}
              <div className="bg-black rounded-lg p-8 border border-gray-800 hover:border-green-600 transition">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-gray-400">
                  Continuously improving our processes and developing new products to meet market needs.
                </p>
              </div>

              {/* Sustainability */}
              <div className="bg-black rounded-lg p-8 border border-gray-800 hover:border-green-600 transition">
                <div className="text-5xl mb-4">🌱</div>
                <h3 className="text-xl font-bold mb-4">Sustainability</h3>
                <p className="text-gray-400">
                  Committed to environmentally responsible practices throughout our supply chain.
                </p>
              </div>

              {/* Integrity */}
              <div className="bg-black rounded-lg p-8 border border-gray-800 hover:border-purple-600 transition">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-4">Integrity</h3>
                <p className="text-gray-400">
                  Building long-term partnerships based on trust, transparency, and reliability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">By The Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-blue-400 mb-2">20+</div>
                <p className="text-gray-300 font-semibold">Years in Business</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-green-400 mb-2">500+</div>
                <p className="text-gray-300 font-semibold">Active Customers</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-purple-400 mb-2">50+</div>
                <p className="text-gray-300 font-semibold">Product Types</p>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-orange-400 mb-2">8</div>
                <p className="text-gray-300 font-semibold">Languages Supported</p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Awards */}
        <section className="px-4 md:px-8 py-16 md:py-24 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Certifications & Recognition</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Certifications */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Certifications</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-green-400 text-2xl">✓</span>
                    <div>
                      <h4 className="font-semibold">ISO 9001:2015</h4>
                      <p className="text-gray-400 text-sm">Quality Management System</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-green-400 text-2xl">✓</span>
                    <div>
                      <h4 className="font-semibold">HACCP</h4>
                      <p className="text-gray-400 text-sm">Hazard Analysis Critical Control Point</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-green-400 text-2xl">✓</span>
                    <div>
                      <h4 className="font-semibold">Organic Certification</h4>
                      <p className="text-gray-400 text-sm">For select product lines</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-green-400 text-2xl">✓</span>
                    <div>
                      <h4 className="font-semibold">GDPR Compliant</h4>
                      <p className="text-gray-400 text-sm">Data privacy and protection</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Awards */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Awards & Recognition</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <span className="text-yellow-400 text-2xl">🏆</span>
                    <div>
                      <h4 className="font-semibold">Best Food Producer 2022</h4>
                      <p className="text-gray-400 text-sm">Nordic Food Industry Awards</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-400 text-2xl">🏆</span>
                    <div>
                      <h4 className="font-semibold">Customer Excellence Award</h4>
                      <p className="text-gray-400 text-sm">Five consecutive years</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-400 text-2xl">🏆</span>
                    <div>
                      <h4 className="font-semibold">Innovation Leadership</h4>
                      <p className="text-gray-400 text-sm">European Food Forum 2023</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="text-yellow-400 text-2xl">🏆</span>
                    <div>
                      <h4 className="font-semibold">Sustainability Champion</h4>
                      <p className="text-gray-400 text-sm">Green Business Initiative</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-white/20 transition">
                <div className="h-48 bg-gradient-to-br from-blue-900 to-blue-950 flex items-center justify-center">
                  <span className="text-6xl">👔</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Johan Romberg</h3>
                  <p className="text-blue-400 text-sm mb-3">CEO & Founder</p>
                  <p className="text-gray-400 text-sm">
                    Visionary leader with 25+ years in food manufacturing and business development.
                  </p>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-white/20 transition">
                <div className="h-48 bg-gradient-to-br from-green-900 to-green-950 flex items-center justify-center">
                  <span className="text-6xl">👩‍💼</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Anna Svensson</h3>
                  <p className="text-green-400 text-sm mb-3">COO</p>
                  <p className="text-gray-400 text-sm">
                    Operations excellence specialist ensuring quality and efficiency across all facilities.
                  </p>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-white/20 transition">
                <div className="h-48 bg-gradient-to-br from-purple-900 to-purple-950 flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Marcus Bergström</h3>
                  <p className="text-purple-400 text-sm mb-3">CTO</p>
                  <p className="text-gray-400 text-sm">
                    Technology innovator driving digital transformation and e-commerce excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 md:px-8 py-16 md:py-24 bg-gradient-to-r from-blue-950 to-blue-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Growing Community</h2>
            <p className="text-xl text-gray-200 mb-8">
              Partner with MaxFood AB for premium quality food products and exceptional service.
            </p>
            <button className="px-8 py-4 bg-white text-blue-900 font-semibold rounded hover:bg-gray-100 transition transform hover:scale-105">
              Contact Our Sales Team →
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
