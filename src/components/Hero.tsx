"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLang } from '@/context/AppContext';

export function Hero() {
  const { t, lang } = useLang();
  const bn = lang === 'bn';
  return (
    <section className="relative overflow-hidden" aria-label="Hero" style={{ background: 'var(--dawn-wash)' }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: 'var(--line-soft)' }} />
      {/* fine line sun + horizon — restrained, editorial */}
      <svg viewBox="0 0 1200 300" className="pointer-events-none absolute inset-x-0 top-0 mx-auto w-full max-w-6xl opacity-70" aria-hidden style={{ height: 260 }}>
        <g fill="none" strokeLinecap="round" style={{ color: 'var(--rust)' }}>
          <line x1="120" y1="228" x2="1080" y2="228" stroke="currentColor" strokeWidth="1" opacity="0.55" />
          <path d="M600 228 A72 72 0 0 1 528 228" stroke="currentColor" strokeWidth="1.25" opacity="0.9" />
          <g strokeWidth="1" opacity="0.6">
            <path d="M545 176 L538 160" stroke="currentColor" />
            <path d="M572 165 L570 146" stroke="currentColor" />
            <path d="M600 161 L600 141" stroke="currentColor" />
            <path d="M628 165 L630 146" stroke="currentColor" />
            <path d="M655 176 L662 160" stroke="currentColor" />
          </g>
        </g>
      </svg>
      <div className="relative mx-auto max-w-3xl px-5 pb-20 pt-36 text-center md:pb-24 md:pt-44">
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="eyebrow">
          {t.hero.kicker}
        </motion.p>
        <motion.h1 className="fluid-h1 mt-5 font-serif" lang={lang} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}>
          {t.hero.titleA}
          <span className="mt-1 block text-[0.62em] font-normal tracking-normal" style={{ color: 'var(--muted)' }} lang="bn">{t.hero.titleB}</span>
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35, duration: 0.8 }} className="mx-auto mt-6 h-px w-16" style={{ background: 'var(--mustard)' }} />
        <motion.p className="lede mx-auto mt-6 max-w-2xl" lang={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.8 }}>{t.hero.lede}</motion.p>
        <motion.p className="mx-auto mt-5 max-w-xl font-serif text-lg italic md:text-xl" style={{ color: 'var(--ink)' }} lang={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>“{t.hero.tagline}”</motion.p>
        <motion.div className="mt-9 flex flex-wrap justify-center gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <Link href={bn ? '/bn/join' : '/join'} className="rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ background: 'var(--ink)' }}>{t.hero.cta1}</Link>
          <Link href={bn ? '/bn/why' : '/why'} className="rounded-full border px-6 py-3 text-sm font-medium" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>{t.hero.cta2}</Link>
        </motion.div>
        <p className="mt-6 text-[11.5px] uppercase tracking-[0.16em]" style={{ color: 'var(--faint)' }}>{t.hero.note}</p>
      </div>
      <div className="rule mx-auto max-w-6xl" />
    </section>
  );
}
