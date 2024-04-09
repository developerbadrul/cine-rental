import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator'
import { NextResponse } from "next/server";

let defaultLocale = "en"
let locales = ["en", "bn"]

const getLocale = request => {
    const acceptedLanguage = request.headers.get('accept-language') ?? undefined;
    let headers = { 'accept-language': acceptedLanguage }
    let languages = new Negotiator({ headers }).languages()

    console.log(languages);
    return match(languages, locales, defaultLocale)
}

export const middleware = request => {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = locales.every(locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`)

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)
        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    }
}


export const config = {
    matcher: [
        // Skip all internal paths (_next, assets, api)
        '/((?!api|assets|.*\\..*|_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}