import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';
import JsonLd from '@/components/JsonLd';
import { site } from '@/lib/site';
import { businessSchema, websiteSchema } from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Tridan Contracting | GTA Outdoor Living & Home Renovations',
    template: '%s | Tridan Contracting',
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    'general contractor GTA',
    'outdoor living Toronto',
    'deck builder GTA',
    'home renovations Toronto',
    'interlocking contractors',
    'kitchen renovation GTA',
    'landscaping contractors GTA',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/tridan-logo.png',
    apple: '/tridan-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: site.url,
    siteName: site.name,
    title: 'Tridan Contracting | GTA Outdoor Living & Home Renovations',
    description: site.description,
    images: [{ url: '/tridan-logo.png', width: 1240, height: 1240, alt: site.name }],
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <JsonLd data={[businessSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyCallBar />
      </body>
    </html>
  );
}
