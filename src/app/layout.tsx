import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import { SiteFooter, SiteHeader } from '@/components/chrome';
import { person } from '@/content/profile';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
});

const description =
  'Jean Bosco Mugiraneza builds the software behind Rwanda’s national emergency and telehealth services: NestJS, Next.js, PostgreSQL, real-time video and AI.';

export const metadata: Metadata = {
  metadataBase: new URL(person.site),
  title: { default: `${person.name}, software engineer`, template: `%s | ${person.name}` },
  description,
  authors: [{ name: person.name, url: person.site }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: person.site,
    siteName: person.name,
    title: `${person.name}, software engineer`,
    description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: person.name }],
  },
  twitter: { card: 'summary_large_image', title: person.name, description, images: ['/og.png'] },
};

export const viewport: Viewport = { themeColor: '#07161c', colorScheme: 'dark' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={archivo.variable}>
      <body className="min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-beacon focus:px-3 focus:py-2 focus:text-night"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
