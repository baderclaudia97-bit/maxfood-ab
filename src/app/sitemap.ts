import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['es', 'sv', 'en', 'fr', 'de', 'ar', 'zh', 'ja'];
  const baseUrl = 'https://maxfood.se';
  const routes = ['', '/products', '/private', '/quality', '/about', '/contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add all locale + route combinations
  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
