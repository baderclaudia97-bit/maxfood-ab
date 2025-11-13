import { getRequestConfig } from 'next-intl/server';
import { Locale } from './app/layout';

export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await import(`./messages/${locale}.json`)
  ).default,
}));
