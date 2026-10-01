"use client";
import { Providers } from '@/context/AppContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { useEffect } from 'react';

function Smooth() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    let cleanup = () => {};
    import('lenis').then(({ default: Lenis }) => {
      const lenis = new Lenis({ lerp: 0.09 });
      const raf = (time: number) => { lenis.raf(time); requestAnimationFrame(raf); };
      const id = requestAnimationFrame(raf);
      cleanup = () => { cancelAnimationFrame(id); lenis.destroy(); };
    }).catch(() => {});
    return () => cleanup();
  }, []);
  return null;
}

export function Shell({ children, lang }: { children: React.ReactNode; lang?: 'en' | 'bn' }) {
  return (
    <Providers forceLang={lang}>
      <Smooth />
      <div className="grain min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </Providers>
  );
}
