import { useTranslations } from "next-intl";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { Locale } from "@/app/layout";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function ContactPage({ params }: PageProps) {
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              Contact our sales team to discuss your food product needs and partnership opportunities.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-400">info@maxfood.se</p>
                      <p className="text-gray-400">sales@maxfood.se</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-400">+46 (0) XXX XXX XXX</p>
                      <p className="text-gray-400">Mon-Fri 9:00-17:00 (CET)</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-gray-400">MaxFood AB</p>
                      <p className="text-gray-400">Stockholm, Sweden</p>
                    </div>
                  </div>

                  {/* Response Time */}
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⏱️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-gray-400">We'll respond within 24 hours</p>
                      <p className="text-gray-400">Usually faster on business days</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                  <h3 className="font-semibold mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded hover:bg-blue-600 transition flex items-center justify-center">
                      f
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded hover:bg-blue-400 transition flex items-center justify-center">
                      𝕏
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded hover:bg-blue-700 transition flex items-center justify-center">
                      in
                    </a>
                    <a href="#" className="w-10 h-10 bg-gray-800 rounded hover:bg-pink-600 transition flex items-center justify-center">
                      📷
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="px-4 md:px-8 py-16 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Locations</h2>
            <div className="bg-gray-900 rounded-lg h-96 border border-gray-800 flex items-center justify-center">
              <div className="text-center">
                <span className="text-6xl mb-4">🗺️</span>
                <p className="text-gray-400">Interactive map coming soon</p>
                <p className="text-gray-500 text-sm mt-2">Multiple offices in Europe</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-4 md:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <details className="group">
                <summary className="cursor-pointer flex items-center justify-between p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
                  <span className="font-semibold">How long does it take to receive a quote?</span>
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="p-4 text-gray-300 border-t border-gray-700 mt-2">
                  We typically provide quotes within 24 hours for standard inquiries. Complex requests may take 2-3 business days.
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group">
                <summary className="cursor-pointer flex items-center justify-between p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
                  <span className="font-semibold">What is the minimum order quantity?</span>
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="p-4 text-gray-300 border-t border-gray-700 mt-2">
                  MOQ varies by product. Contact our sales team for specific requirements for your desired products.
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group">
                <summary className="cursor-pointer flex items-center justify-between p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
                  <span className="font-semibold">Do you offer private label solutions?</span>
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="p-4 text-gray-300 border-t border-gray-700 mt-2">
                  Yes! We specialize in private label manufacturing. Contact us to discuss your brand's needs.
                </div>
              </details>

              {/* FAQ Item 4 */}
              <details className="group">
                <summary className="cursor-pointer flex items-center justify-between p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition">
                  <span className="font-semibold">What certifications do you have?</span>
                  <span className="group-open:rotate-180 transition">▼</span>
                </summary>
                <div className="p-4 text-gray-300 border-t border-gray-700 mt-2">
                  We hold ISO 9001:2015, HACCP, and Organic certifications. Additional certifications available upon request.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
