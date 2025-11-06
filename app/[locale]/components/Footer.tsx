import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export default function Footer() {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">MaxFood AB</h3>
            <p className="text-gray-400 text-sm mb-4">
              Premium Food Solutions — Soluciones Alimentarias de Calidad
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                🔗 LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                🔗 Twitter
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition">
                  Beverages
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition">
                  Snacks
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition">
                  Dairy
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition">
                  Private Label
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                  onClick={(e) => {
                    e.preventDefault();
                    // TODO: Trigger GDPR consent manager
                  }}
                >
                  GDPR/Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} MaxFood AB. {t("footer.rights")} — All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="text-xs">ISO 9001:2015 Certified</span>
            <span className="text-xs">HACCP Certified</span>
            <span className="text-xs">Organic Certified</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-xs text-gray-500">
          <p>MaxFood AB - Premium Food Solutions | Enhancing global food distribution</p>
        </div>
      </div>
    </footer>
  );
}
