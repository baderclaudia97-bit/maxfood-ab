import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  
  // Ensure locale is valid
  if (!locale) {
    locale = 'en';
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
