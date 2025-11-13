import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(sv|en|es|fr|de|ar|zh|ja)/:path*']
};
