import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    es: 'MaxFood AB — Soluciones Alimentarias Premium',
    sv: 'MaxFood AB — Premium Livsmedelsslösningar',
    en: 'MaxFood AB — Premium Food Solutions',
    fr: 'MaxFood AB — Solutions Alimentaires Premium',
    de: 'MaxFood AB — Premium-Lebensmittellösungen',
    ar: 'MaxFood AB — حلول غذائية فاخرة',
    zh: 'MaxFood AB — 优质食品解决方案',
    ja: 'MaxFood AB — プレミアム食品ソリューション',
  };

  const descriptions: Record<string, string> = {
    es: 'Fabricante líder de productos alimentarios de alta calidad con certificación ISO',
    sv: 'Ledande tillverkare av högkvalitativa livsmedel med ISO-certifiering',
    en: 'Leading manufacturer of high-quality food products with ISO certification',
    fr: 'Fabricant leader de produits alimentaires haut de gamme certifiés ISO',
    de: 'Führender Hersteller hochwertiger ISO-zertifizierter Lebensmittel',
    ar: 'الشركة المصنعة الرائدة للمنتجات الغذائية عالية الجودة المعتمدة من ISO',
    zh: 'ISO认证的优质食品产品领先制造商',
    ja: 'ISO認証取得の高品質食品製品の主要メーカー',
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    alternates: {
      canonical: `https://maxfood.se/${locale}`,
      languages: {
        'es': 'https://maxfood.se/es',
        'sv': 'https://maxfood.se/sv',
        'en': 'https://maxfood.se/en',
        'fr': 'https://maxfood.se/fr',
        'de': 'https://maxfood.se/de',
        'ar': 'https://maxfood.se/ar',
        'zh': 'https://maxfood.se/zh',
        'ja': 'https://maxfood.se/ja',
      },
    },
  };
}

export default function HomePage() {
  const t = useTranslations('home');

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gradient-to-b from-brand-dark to-black flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/videos/factory-bg.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-light mb-4 animate-fade-in">
            {t('hero_title')}
          </h1>
          <p className="text-lg sm:text-xl text-brand-light/80 mb-8 animate-slide-up">
            {t('hero_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button className="px-8 py-3 bg-brand-accent text-black font-semibold rounded-lg hover:bg-brand-accent/90 transition-colors">
              {t('cta_explore')}
            </button>
            <button className="px-8 py-3 border-2 border-brand-accent text-brand-accent font-semibold rounded-lg hover:bg-brand-accent/10 transition-colors">
              {t('cta_contact')}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-brand-light">
            Premium Quality
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['ISO Certified', 'Premium Materials', 'Expert Team'].map((feature, idx) => (
              <div key={idx} className="bg-brand-dark p-8 rounded-lg hover:border-brand-accent border-2 border-transparent transition-colors">
                <h3 className="text-xl font-semibold text-brand-accent mb-4">{feature}</h3>
                <p className="text-brand-light/70">
                  We maintain the highest standards in food manufacturing and quality assurance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
