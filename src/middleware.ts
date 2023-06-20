import { NextMiddleware, NextRequest, NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';
import { DEFAULT_LOCALE, LOCALES } from './config/constants';

function getLocale(request: NextRequest) {
  const languages = new Negotiator({ headers: Object.fromEntries(request.headers) }).languages();
  return match(languages, LOCALES, DEFAULT_LOCALE);
}

export const middleware: NextMiddleware = (request) => {
  const { pathname } = request.nextUrl;
  const pathnameIsMissingLocale = LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ['/((?!_next|.*\\.).*)', '/'],
};
