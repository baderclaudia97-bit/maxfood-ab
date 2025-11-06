import Header from "../components/Header";
import Footer from "../components/Footer";
import { Locale } from "@/app/layout";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export const metadata: Metadata = {
  title: "Privacy Policy — MaxFood AB",
  description: "Privacy Policy and GDPR compliance information for MaxFood AB",
  robots: { index: true, follow: true },
};

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header locale={locale} />

      <main className="flex-grow">
        <section className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose prose-invert max-w-none space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                MaxFood AB ("Company", "we", "our", "us") operates the maxfood.se website (the "Service"). This page informs
                you of our policies regarding the collection, use, and disclosure of personal data when you use our Service
                and the choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Data Collection</h2>
              <p>We collect several different types of information for various purposes to provide and improve our Service to you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal Data: Name, email address, phone number, mailing address</li>
                <li>Usage Data: Browser information, IP address, pages visited, time spent</li>
                <li>Cookies: We use cookies to track website activity and user preferences</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Use of Data</h2>
              <p>MaxFood AB uses the collected data for various purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Security of Data</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet
                or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect
                your Personal Data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. GDPR Compliance</h2>
              <p>
                MaxFood AB is committed to full compliance with the General Data Protection Regulation (GDPR). You have the
                following rights under GDPR:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The right to access your personal data</li>
                <li>The right to rectification of inaccurate data</li>
                <li>The right to erasure ("right to be forgotten")</li>
                <li>The right to restrict processing</li>
                <li>The right to data portability</li>
                <li>The right to object to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies</h2>
              <p>
                We use cookies to track website activity and store your preferences. You can instruct your browser to refuse
                all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be
                able to use some portions of our Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Third-Party Links</h2>
              <p>
                Our Service may contain links to other websites that are not operated by us. This Privacy Policy applies only
                to our website. We are not responsible for the privacy practices of third-party websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-900 p-4 rounded mt-4 space-y-2">
                <p><strong>Email:</strong> privacy@maxfood.se</p>
                <p><strong>Address:</strong> Stockholm, Sweden</p>
              </div>
            </section>

            <section className="border-t border-gray-800 pt-6 mt-8">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
