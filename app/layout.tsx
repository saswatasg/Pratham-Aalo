import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { Shell } from '@/components/Shell';

export const metadata: Metadata = {
  title: 'Pratham Aalo · Dawn — a learning collective',
  description: 'A Bengal-rooted learning collective. Children learn in Bengali, in their own place, through doing. Target: a school ≈2031.',
  metadataBase: new URL('https://pratham-aalo.vercel.app'),
  alternates: { canonical: '/', languages: { en: '/', bn: '/bn' } },
  openGraph: { title: 'Pratham Aalo · Dawn', description: 'We don’t have a master plan. We are learning as we go.', images: ['/brand/og.svg'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Pratham Aalo · Dawn', description: 'Nobody should feel invisible.' },
  icons: { icon: '/brand/icon.svg' },
  manifest: '/manifest.json'
};
export const viewport: Viewport = { themeColor: '#FBF6EC', width: 'device-width', initialScale: 1 };

const themeInit = `(function(){try{var t=localStorage.getItem('pa-theme');if(!t){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t;var l=localStorage.getItem('pa-lang');var p=location.pathname;if(location.search.indexOf('lang=bn')>-1||p.indexOf('/bn')===0){l='bn'}document.documentElement.dataset.lang=l||'en';document.documentElement.lang=l||'en';}catch(e){document.documentElement.dataset.theme='light'}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Inter:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600&family=Noto+Serif+Bengali:wght@500;600;700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: 'Pratham Aalo', alternateName: 'Dawn — a learning collective', email: 'prathamaalo2026@gmail.com', description: 'Bengal-rooted learning collective, local-first.' }) }} />
      </head>
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
