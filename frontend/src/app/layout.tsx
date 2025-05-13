import { ThemeProvider } from '@/components/home/theme-provider';
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import Image from 'next/image';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  themeColor: '#A50034',
};

const lgSiteConfig = {
  name: 'LG CNS (가칭)',
  url: 'https://www.lgcns.com/',
};

export const metadata: Metadata = {
  metadataBase: new URL(lgSiteConfig.url),
  title: {
    default: lgSiteConfig.name,
    template: `%s - ${lgSiteConfig.name}`,
  },
  description:
    'LG CNS가 제공하는 혁신적인 AI 솔루션입니다. (예시 설명)',
  keywords: [
    'LG CNS',
    'AI',
    '인공지능',
    '클라우드',
    '빅데이터',
  ],
  authors: [{ name: 'LG CNS', url: 'https://www.lgcns.com' }],
  creator: 'LG CNS',
  publisher: 'LG CNS',
  category: 'Technology',
  applicationName: lgSiteConfig.name,
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: `${lgSiteConfig.name} - 혁신적인 AI 솔루션`,
    description:
      'LG CNS의 기술력으로 미래를 만들어갑니다. (예시 OG 설명)',
    url: lgSiteConfig.url,
    siteName: lgSiteConfig.name,
    images: [
      {
        url: '/lg_banner.png',
        width: 1200,
        height: 630,
        alt: `${lgSiteConfig.name} Banner`,
        type: 'image/png',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${lgSiteConfig.name} - AI가 바꾸는 미래`,
    description:
      'LG CNS와 함께 새로운 가능성을 경험하세요. (예시 트위터 설명)',
    images: [
      {
        url: '/lg_twitter_banner.png',
        width: 1200,
        height: 630,
        alt: `${lgSiteConfig.name} Twitter Banner`,
      },
    ],
  },
  icons: {
    icon: [{ url: '/lg_logo_v2_256.ico', type: 'image/x-icon' }],
    shortcut: '/lg_logo_v2_256.ico',
  },
  alternates: {
    canonical: lgSiteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-background text-foreground`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <header className="w-full p-4 bg-card shadow-md sticky top-0 z-50">
          <div className="container mx-auto flex items-center">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image src="/lg_logo_v2.png" alt="LGCNS LUXIA Logo" width={24} height={24} />
              <span style={{ marginLeft: '8px', fontSize: '1rem', fontWeight: 'bold' }}>LGCNS LUXIA</span>
            </div>
          </div>
        </header>

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <main className="flex-grow">{children}</main>
            <Toaster />
          </Providers>
          <Analytics />
          <GoogleAnalytics gaId="G-YYYYYYYYYY" />
          <SpeedInsights />
        </ThemeProvider>

        <footer className="w-full p-4 bg-muted text-muted-foreground text-center text-sm">
          Copyright © {new Date().getFullYear()} LG CNS. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
