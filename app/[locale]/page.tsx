'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const t = useTranslations();
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">MaxFood AB</h1>
          <div className="flex gap-4">
            <a href="/es" className="px-3 py-2 hover:bg-gray-800 rounded">ES</a>
            <a href="/sv" className="px-3 py-2 hover:bg-gray-800 rounded">SV</a>
            <a href="/en" className="px-3 py-2 hover:bg-gray-800 rounded">EN</a>
            <a href="/fr" className="px-3 py-2 hover:bg-gray-800 rounded">FR</a>
            <a href="/de" className="px-3 py-2 hover:bg-gray-800 rounded">DE</a>
            <a href="/ar" className="px-3 py-2 hover:bg-gray-800 rounded">AR</a>
            <a href="/zh" className="px-3 py-2 hover:bg-gray-800 rounded">ZH</a>
            <a href="/ja" className="px-3 py-2 hover:bg-gray-800 rounded">JA</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
            {t('hero.title')}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            {t('hero.subtitle')}
          </p>
          <button className="bg-amber-600 hover:bg-amber-700 px-8 py-3 rounded-lg font-bold text-lg transition-all">
            {t('hero.cta')}
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">
            {t('products.title')}
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-amber-600 transition-all">
                <div className="bg-gray-800 h-48 rounded mb-4"></div>
                <h4 className="text-xl font-bold mb-2">{t(`products.product${i}.name`)}</h4>
                <p className="text-gray-400 mb-4">{t(`products.product${i}.description`)}</p>
                <button className="w-full bg-amber-600 hover:bg-amber-700 py-2 rounded font-bold transition-all">
                  {t('products.learnMore')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-8 text-center">
            {t('about.title')}
          </h3>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            {t('about.description')}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 MaxFood AB. {t('footer.rights')}</p>
        </div>
      </footer>
    </main>
  );
}
