import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: `Products | MaxFood AB`,
    description: 'Discover our premium food product catalog',
  };
}

export default function ProductsPage() {
  const t = useTranslations('products');

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-brand-light">
          {t('title')}
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Products */}
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div
              key={id}
              className="bg-brand-dark rounded-lg overflow-hidden hover:border-brand-accent border-2 border-transparent transition-all"
            >
              <div className="aspect-square bg-black/50 flex items-center justify-center">
                <span className="text-brand-light/50">Product {id}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-brand-accent mb-2">
                  Product Name {id}
                </h3>
                <p className="text-brand-light/70 text-sm mb-4">
                  Product description coming soon
                </p>
                <button className="w-full px-4 py-2 bg-brand-accent text-black rounded font-semibold hover:bg-brand-accent/90">
                  {t('contact_for_price')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
