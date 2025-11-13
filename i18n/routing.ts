import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'sv', 'fr', 'de', 'ar', 'zh', 'ja'],
  defaultLocale: 'en'
});