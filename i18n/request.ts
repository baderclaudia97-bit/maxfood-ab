import { getRequestConfig } from 'next-intl/server';
import { Locale, locales, defaultLocale } from '@/app/i18n-config';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale is valid
  if (!locales.includes(locale as Locale)) {
    return { messages: {} };
  }

  return {
    messages: (await import(`@/messages/${locale}.json`)).default,
    timeZone: 'UTC',
    now: new Date(),
  };
});
