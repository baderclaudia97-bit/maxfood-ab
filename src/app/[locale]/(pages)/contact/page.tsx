import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-brand-light">
          {t('title')}
        </h1>

        <form className="space-y-6 bg-brand-dark p-8 rounded-lg">
          <div>
            <label className="block text-brand-light font-semibold mb-2">
              {t('form_name')}
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-black/50 border border-brand-accent/30 rounded text-brand-light placeholder-brand-light/50"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-brand-light font-semibold mb-2">
              {t('form_email')}
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-black/50 border border-brand-accent/30 rounded text-brand-light placeholder-brand-light/50"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-brand-light font-semibold mb-2">
              {t('form_message')}
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-2 bg-black/50 border border-brand-accent/30 rounded text-brand-light placeholder-brand-light/50"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-brand-accent text-black font-semibold rounded hover:bg-brand-accent/90 transition-colors"
          >
            {t('form_send')}
          </button>
        </form>
      </div>
    </main>
  );
}
