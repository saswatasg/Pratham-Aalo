"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLang } from '@/context/AppContext';

export function Hero() {
  const { t, lang } = useLang();
  const bn = lang === 'bn';
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--sky-top) 0%, #7a3a5e 38%, #C2542D 62%, var(--sky-bottom) 100%)', opacity: 0.28 }} />
      {/* sun */}
      <motion.div className="absolute left-1/2 top-16 h-28 w-28 -translate-x-1/2 rounded-full" style={{ background: 'radial-gradient(circle, #E8A93B 0%, #C2542D 60%, transparent 72%)', boxShadow: '0 0 80px 20px rgba(232,169,59,.45)' }}
        initial={{ y: 90, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} />
      {/* hills + river parallax */}
      <svg viewBox="0 0 1200 220" className="absolute bottom-0 w-full" preserveAspectRatio="none" aria-hidden style={{ height: 190 }}>
        <path d="M0 140 C 200 80, 380 160, 600 120 C 820 80, 1000 150, 1200 110 L1200 220 L0 220 Z" fill="var(--sage)" opacity="0.5" />
        <path d="M0 170 C 240 130, 480 190, 720 160 C 900 140, 1050 175, 1200 155 L1200 220 L0 220 Z" fill="var(--indigo)" opacity="0.32" />
        <path d="M520 220 C 560 180, 600 175, 640 220" stroke="#7fb2d9" strokeWidth="10" fill="none" opacity="0.7" strokeLinecap="round" />
      </svg>
      {/* fireflies */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {[...Array(14)].map((_, i) => (
          <motion.span key={i} className="absolute h-1.5 w-1.5 rounded-full" style={{ background: '#E8A93B', left: `${(i * 67) % 100}%`, top: `${20 + ((i * 37) % 60)}%` }}
            animate={{ opacity: [0.2, 1, 0.2], y: [0, -10, 0] }} transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2 }} />
        ))}
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-28 pt-16 text-center md:pt-24">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mx-auto inline-block rounded-full border px-4 py-1 text-xs font-semibold tracking-wide" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
          {t.hero.kicker}
        </motion.p>
        <motion.h1 className="fluid-h1 mt-6 font-serif font-black" lang={lang} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.45 }}>
          {t.hero.titleA} <span style={{ background: 'var(--dawn-gradient)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{t.hero.titleB}</span>
        </motion.h1>
        <motion.p className="mx-auto mt-5 max-w-2xl text-base md:text-lg" lang={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.9 }}>{t.hero.lede}</motion.p>
        <motion.p className="mx-auto mt-4 max-w-xl font-serif text-lg italic md:text-xl" lang={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>“{t.hero.tagline}”</motion.p>
        <motion.div className="mt-8 flex flex-wrap justify-center gap-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.35 }}>
          <Link href={bn ? '/bn/join' : '/join'} className="rounded-full px-6 py-3 font-semibold text-white" style={{ background: 'var(--dawn-gradient)' }}>{t.hero.cta1}</Link>
          <Link href={bn ? '/bn/why' : '/why'} className="rounded-full border px-6 py-3 font-semibold" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>{t.hero.cta2}</Link>
        </motion.div>
        <p className="mt-5 text-xs" style={{ color: 'var(--muted)' }}>{t.hero.note}</p>
      </div>
    </section>
  );
}
