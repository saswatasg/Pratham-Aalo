"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLang } from '@/context/AppContext';

/** Hero — Bengal earth at first light: field terraces, a river, a stitched sun. */
export function Hero() {
  const { t, lang } = useLang();
  const bn = lang === 'bn';
  return (
    <section className="relative overflow-hidden" aria-label="Hero" style={{ background: 'var(--dawn-wash)' }}>
      {/* stitched sun + terraces backdrop */}
      <svg viewBox="0 0 1200 340" className="pointer-events-none absolute inset-x-0 top-0 mx-auto w-full max-w-6xl" aria-hidden style={{ height: 300, opacity: 0.9 }}>
        <g fill="none" stroke-linecap="round">
          {/* kantha rays */}
          <g stroke="#B0512C" strokeWidth="2" opacity="0.75" strokeDasharray="3 5">
            <path d="M545 84 l-9 -18" /><path d="M573 74 l-4 -20" /><path d="M600 70 l0 -21" /><path d="M627 74 l4 -20" /><path d="M655 84 l9 -18" />
          </g>
          {/* sun */}
          <path d="M528 148 A72 72 0 0 1 672 148" stroke="#8C3E20" strokeWidth="2.5" />
          <path d="M528 148 A72 72 0 0 1 672 148 Z" fill="#C99A3C" opacity="0.14" stroke="none" />
          {/* terraces */}
          <path d="M60 220 C 300 200, 900 200, 1140 220" stroke="#2B2F6B" strokeWidth="2" opacity="0.7" />
          <path d="M120 248 C 360 230, 840 230, 1080 248" stroke="#2B2F6B" strokeWidth="1.2" opacity="0.4" />
          <path d="M190 272 C 400 258, 800 258, 1010 272" stroke="#2B2F6B" strokeWidth="1" opacity="0.25" />
          {/* river */}
          <path d="M580 220 C 570 232, 592 238, 584 250 C 578 259, 590 264, 587 272" stroke="#7FA8A0" strokeWidth="2" opacity="0.85" />
          {/* seedlings */}
          <g stroke="#5F7F5E" strokeWidth="1.6" opacity="0.8">
            <path d="M300 220 c 0 -9, -5 -13, -10 -15 M300 220 c 0 -9, 5 -13, 10 -15" />
            <path d="M900 220 c 0 -9, -5 -13, -10 -15 M900 220 c 0 -9, 5 -13, 10 -15" />
          </g>
        </g>
      </svg>
      <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-32 text-center sm:pb-20 sm:pt-40 md:pb-24 md:pt-48">
        <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="eyebrow">
          {t.hero.kicker}
        </motion.p>
        <motion.h1 className="fluid-h1 mt-4 font-serif" lang={lang} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}>
          {t.hero.titleA}
          <span className="mt-2 block font-serif text-[0.58em] font-normal tracking-normal" style={{ color: 'var(--muted)' }} lang="bn">{t.hero.titleB}</span>
        </motion.h1>
        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.35, duration: 0.7 }} className="mx-auto mt-6 h-px w-20 origin-center" style={{ background: 'var(--clay)' }} />
        <motion.p className="lede mx-auto mt-5 max-w-2xl" lang={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.8 }}>{t.hero.lede}</motion.p>
        <motion.p className="mx-auto mt-4 max-w-xl font-serif text-[17px] italic leading-relaxed md:text-[19px]" style={{ color: 'var(--ink-soft)' }} lang={lang} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>“{t.hero.tagline}”</motion.p>
        <motion.div className="mt-8 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <Link href={bn ? '/bn/join' : '/join'} className="rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ background: 'var(--ink)' }}>{t.hero.cta1}</Link>
          <Link href={bn ? '/bn/why' : '/why'} className="rounded-full border px-6 py-3 text-sm font-medium" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>{t.hero.cta2}</Link>
        </motion.div>
        <p className="mt-6 text-[10.5px] uppercase tracking-[0.18em]" style={{ color: 'var(--faint)' }}>{t.hero.note}</p>
      </div>
      {/* earth strip: soil line grounding the hero */}
      <div aria-hidden className="mx-auto max-w-6xl px-5"><div className="h-px" style={{ background: 'var(--line-soft)' }} /></div>
    </section>
  );
}
