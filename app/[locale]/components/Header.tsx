'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const t = useTranslations();

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-white font-bold text-xl hidden sm:inline">
            MaxFood
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            {t('navigation.home')}
          </Link>
          <Link
            href="/products"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            {t('navigation.products')}
          </Link>
          <Link
            href="/blog"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            {t('navigation.blog')}
          </Link>
          <Link
            href="/about"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            {t('navigation.about')}
          </Link>
          <Link
            href="/contact"
            className="text-gray-300 hover:text-white transition font-medium"
          >
            {t('navigation.contact')}
          </Link>
        </div>

        {/* Language Selector */}
        <div className="flex items-center gap-4">
          <select
            defaultValue={locale}
            onChange={(e) => {
              window.location.href = `/${e.target.value}`;
            }}
            className="bg-gray-900 text-white px-3 py-2 rounded border border-gray-700 hover:border-gray-600 transition cursor-pointer text-sm"
          >
            <option value="es">🇪🇸 ES</option>
            <option value="sv">🇸🇪 SV</option>
            <option value="en">🇬🇧 EN</option>
            <option value="fr">🇫🇷 FR</option>
            <option value="de">🇩🇪 DE</option>
            <option value="ar">🇸🇦 AR</option>
            <option value="zh">🇨🇳 ZH</option>
            <option value="ja">🇯🇵 JA</option>
          </select>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white p-2">
          ☰
        </button>
      </nav>
    </header>
  );
}