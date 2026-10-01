"use client";
import Link from 'next/link';
import { useLang } from '@/context/AppContext';
import { Hero } from '@/components/Hero';
import { Roadmap } from '@/components/Roadmap';
import { AlpanaDivider, Chip, Marquee, Reveal, TiltCard } from '@/components/ui';
import visits from '@/data/visits.json';
import ideas from '@/data/ideas.json';

export function HomeSections({ bnPrefix }: { bnPrefix: string }) {
  const { t, lang } = useLang();
  return (
    <main id="main">
      <Hero />
      <Marquee words={['আলো', 'শেখা', 'গল্প', 'মাটি', 'নদী', 'ভোর', 'পাঠশালা', 'স্বপ্ন']} />

      {/* belief — quiet editorial centre */}
      <section className="mx-auto max-w-3xl px-5 py-14 text-center md:py-20">
        <Reveal>
          <p className="eyebrow">{t.belief.label}</p>
          <blockquote className="fluid-h2 mt-4 font-serif" lang={lang}>“{t.belief.quote}”</blockquote>
          <div aria-hidden className="mx-auto mt-5 h-px w-12" style={{ background: 'var(--straw)' }} />
          <p className="lede mt-4" lang={lang}>{t.belief.sub}</p>
        </Reveal>
      </section>

      {/* pillars — three seeds */}
      <section className="mx-auto max-w-6xl px-4 sm:px-5">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {t.pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.07}>
              <TiltCard>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--faint)' }}>0{i + 1}</p>
                <p className="mt-2 font-serif text-[19px]">{p.t}</p>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }} lang={lang}>{p.d}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      <AlpanaDivider />

      {/* honesty — clay wash band */}
      <section className="mx-auto max-w-6xl px-4 sm:px-5">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border" style={{ background: 'var(--surface)', borderColor: 'var(--line-soft)', boxShadow: 'var(--shadow)' }}>
            <div aria-hidden className="h-1" style={{ background: 'var(--earth-gradient)' }} />
            <div className="p-6 sm:p-8 md:p-12">
              <p className="eyebrow">{lang === 'bn' ? 'সততা' : 'Honesty'}</p>
              <h2 className="fluid-h2 mt-3 font-serif" lang={lang}>{t.honesty.title}</h2>
              <p className="lede mt-3 max-w-3xl" lang={lang}>{t.honesty.line}</p>
              <div className="mt-5 flex flex-wrap gap-2">{t.honesty.points.map(pt => <Chip key={pt}>{pt}</Chip>)}</div>
              <Link href={`${bnPrefix}/now`} className="mt-7 inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: 'var(--ink)' }}>{t.honesty.cta} →</Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* roadmap — fixed, never clips */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:py-20">
        <Reveal>
          <p className="eyebrow">{t.roadmapTeaser.kicker}</p>
          <h2 className="fluid-h2 mt-3 font-serif" lang={lang}>{t.roadmapTeaser.title}</h2>
          <p className="lede mt-3 max-w-2xl" lang={lang}>
            {lang === 'bn' ? 'প্রতিটি ধাপে একটু বেশি আলো। আঙুল দিয়ে ছুঁয়ে দেখুন — আমরা এখন প্রথম ধাপে।' : 'A little more light with every phase. Follow the path — we are on the first stretch.'}
          </p>
        </Reveal>
        <Roadmap />
        <div className="mt-6">
          <Link href={`${bnPrefix}/journey`} className="hand-underline text-[15px] font-medium">{t.roadmapTeaser.cta} →</Link>
        </div>
      </section>

      {/* now — visits from the field */}
      <section className="mx-auto max-w-6xl px-4 sm:px-5" style={{ background: 'var(--clay-wash)' }}>
        <div className="rounded-2xl px-1 py-10 md:py-12">
          <Reveal><h2 className="font-serif text-[24px] md:text-[26px]" lang={lang}>{t.nowStrip.title}</h2></Reveal>
          <div className="mt-5 grid gap-3 sm:gap-4 md:grid-cols-3">
            {(visits as { place: string; status: string; note: string }[]).map(v => (
              <TiltCard key={v.place}><Chip tone="sage">{v.status}</Chip><p className="mt-3 text-[15px] font-semibold leading-snug">{v.place}</p><p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{v.note}</p></TiltCard>
            ))}
          </div>
          <div className="mt-3 grid gap-3 sm:mt-4 sm:gap-4 md:grid-cols-3">
            {(ideas as { t: string; d: string }[]).slice(0, 3).map(c => (
              <TiltCard key={c.t}><p className="font-serif text-[16.5px]">{c.t}</p><p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{c.d}</p></TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* join — soil-dark closing */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-5 md:py-20">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border px-6 py-12 text-center sm:px-8 sm:py-14" style={{ background: '#26211A', borderColor: '#26211A', color: '#F7F3E9' }}>
            <svg viewBox="0 0 600 60" aria-hidden className="pointer-events-none absolute inset-x-0 top-0 w-full opacity-25" style={{ height: 60 }}>
              <path d="M0 34 C 150 26, 450 26, 600 34" stroke="#C99A3C" strokeWidth="1.2" fill="none" />
              <path d="M0 44 C 150 37, 450 37, 600 44" stroke="#C99A3C" strokeWidth="0.8" fill="none" opacity="0.7" />
            </svg>
            <p className="eyebrow" style={{ color: 'var(--straw)' }}>{lang === 'bn' ? 'যোগ দিন' : 'Join'}</p>
            <h2 className="mt-3 font-serif text-[26px] leading-tight sm:text-3xl md:text-4xl" lang={lang}>{t.joinCta.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-[14.5px] leading-relaxed opacity-80" lang={lang}>{t.joinCta.sub}</p>
            <a href="https://forms.gle/4sy1HH22JPNoBD7U6" target="_blank" rel="noreferrer" className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold" style={{ color: '#26211A' }}>{t.joinCta.cta} →</a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
