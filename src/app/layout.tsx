import type { Metadata } from 'next';
import { Coustard, Inter } from 'next/font/google';
import './globals.css';

/*
  Both families load through next/font/google, which downloads and self hosts
  them at build time. No request reaches Google from a visitor's browser, which
  is what keeps the no-third-party position in security-and-compliance true by
  construction rather than by promise.

  Each loader exposes a CSS variable that globals.css consumes.
*/

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

// Coustard is not a variable font. It ships Regular and Black and nothing in
// between, so the weights have to be named explicitly or the build fails.
const coustard = Coustard({
  variable: '--font-coustard',
  subsets: ['latin'],
  weight: ['400', '900'],
  display: 'swap',
});

/*
  metadataBase resolves the relative asset paths below into absolute URLs, which
  Open Graph requires. Netlify sets URL at build time, so this follows the
  deployment rather than hardcoding a host that would be wrong until cutover.
  It carries no NEXT_PUBLIC_ prefix and is read on the server only.
*/
const siteUrl = process.env.URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Backwill | Solving the digital problems inside your business',
    template: '%s | Backwill',
  },
  description:
    'Backwill fixes the digital problems holding your business back, then hands you the framework so the fix stays yours. Every solution joins our open catalogue.',
  // Declared explicitly because these files live in public/. Next only auto
  // links icons placed in src/app/, so without this block the Apple touch icon
  // is served but never referenced by any page.
  //
  // public/icon.svg is deliberately not listed. It is the trail-less icon
  // master, it fills with currentColor which resolves to black in a favicon
  // context, and it weighs 87 KB against 1.1 KB for the 32px PNG. The ICO
  // carries 16, 32 and 48 and covers every browser that matters.
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'Backwill',
    title: 'Solving the digital problems inside your business',
    description:
      'We fix what is holding you back, then hand you the framework so the fix stays yours.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_GB',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${coustard.variable}`}>
      <body>{children}</body>
    </html>
  );
}
