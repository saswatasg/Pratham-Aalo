"use client";
import Link from 'next/link';
import { useLang } from '@/context/AppContext';
import { Hero } from '@/components/Hero';
import { AlpanaDivider, Chip, Marquee, Reveal, TiltCard } from '@/components/ui';
import timeline from '@/data/timeline.json';
import visits from '@/data/visits.json';
import ideas from '@/data/ideas.json';

export function HomeSections({ bnPrefix }: { bnPrefix: string }) {
  const { t, lang } = useLang();
  return (
    <main id="main">
      <Hero />
      <Marquee words={['আলো', 'শেখা', 'গল্প', 'মাটি', 'নদী', 'ভোর', 'পাঠশালা', 'স্বপ্ন']} />
      {/* belief */}
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <Reveal><p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--rust)' }}>{t.belief.label}</p>
          <blockquote className="fluid-h2 mt-3 font-serif font-bold" lang={lang}>“{t.belief.quote}”</blockquote>
          <p className="mt-3" style={{ color: 'var(--muted)' }} lang={lang}>{t.belief.sub}</p>
        </Reveal>
      </section>
      {/* pillars */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 md:grid-cols-3">
          {t.pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08}>
              <TiltCard><p className="font-serif text-xl font-bold">{p.t}</p><p className="mt-2 text-sm" style={{ color: 'var(--muted)' }} lang={lang}>{p.d}</p></TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
      <AlpanaDivider />
      {/* honesty */}
      <section className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="rounded-3xl border p-8 md:p-10" style={{ background: 'var(--surface)', borderColor: 'var(--line)', boxShadow: 'var(--shadow-warm)' }}>
            <h2 className="font-serif text-2xl font-bold md:text-3xl" lang={lang}>{t.honesty.title}</h2>
            <p className="mt-3 max-w-3xl" lang={lang}>{t.honesty.line}</p>
            <div className="mt-4 flex flex-wrap gap-2">{t.honesty.points.map(pt => <Chip key={pt}>{pt}</Chip>)}</div>
            <Link href={`${bnPrefix}/now`} className="mt-6 inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: 'var(--dawn-gradient)' }}>{t.honesty.cta} →</Link>
          </div>
        </Reveal>
      </section>
      {/* roadmap teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal><p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--rust)' }}>{t.roadmapTeaser.kicker}</p>
          <h2 className="fluid-h2 mt-2 font-serif font-bold" lang={lang}>{t.roadmapTeaser.title}</h2></Reveal>
        <div className="mt-8 overflow-x-auto pb-4">
          <div className="flex min-w-[760px] gap-4">
            {(timeline as unknown[] as { phase: string; title: string; desc: string; here?: boolean }[]).map((s, i) => (
              <div key={s.phase} className="relative min-w-[220px] flex-1 rounded-2xl border p-5" style={{ background: s.here ? 'linear-gradient(180deg, rgba(232,169,59,.25), var(--surface))' : 'var(--surface)', borderColor: s.here ? 'var(--mustard)' : 'var(--line)', boxShadow: s.here ? '0 0 32px rgba(232,169,59,.45)' : undefined }}>
                {s.here && <span className="absolute -top-3 left-4 rounded-full px-3 py-0.5 text-[11px] font-bold" style={{ background: 'var(--mustard)', color: '#1F1B16' }}>● We are here</span>}
                <p className="text-xs font-bold" style={{ color: 'var(--rust)' }}>{s.phase}</p>
                <p className="mt-1 font-serif font-bold">{lang === 'bn' ? (timeline as unknown[] as { titleBn: string }[])[i].titleBn : s.title}</p>
                <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? (timeline as unknown[] as { descBn: string }[])[i].descBn : s.desc}</p>
                <p className="mt-3 text-[11px]" style={{ color: 'var(--muted)' }}>{['pre-dawn', 'first light', 'sunrise', 'full morning', 'full morning'][i]} · {['✦', '☀', '☀☀', '☀☀☀', '☀☀☀'][i]}</p>
              </div>
            ))}
          </div>
        </div>
        <Link href={`${bnPrefix}/journey`} className="hand-underline font-semibold">{t.roadmapTeaser.cta} →</Link>
      </section>
      {/* now strip */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <Reveal><h2 className="font-serif text-2xl font-bold" lang={lang}>{t.nowStrip.title}</h2></Reveal>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {(visits as { place: string; status: string; note: string }[]).map(v => (
            <TiltCard key={v.place}><Chip tone="sage">{v.status}</Chip><p className="mt-2 font-semibold">{v.place}</p><p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{v.note}</p></TiltCard>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {(ideas as { t: string; d: string }[]).slice(0, 3).map(c => (
            <TiltCard key={c.t}><p className="font-serif font-bold">{c.t}</p><p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{c.d}</p></TiltCard>
          ))}
        </div>
      </section>
      {/* join CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="rounded-3xl p-10 text-center text-white" style={{ background: 'var(--dawn-gradient)' }}>
            <h2 className="font-serif text-3xl font-black" lang={lang}>{t.joinCta.title}</h2>
            <p className="mx-auto mt-2 max-w-xl" lang={lang}>{t.joinCta.sub}</p>
            <a href="https://forms.gle/4sy1HH22JPNoBD7U6" target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-full bg-white px-6 py-3 font-semibold" style={{ color: '#1F1B16' }}>{t.joinCta.cta} →</a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
