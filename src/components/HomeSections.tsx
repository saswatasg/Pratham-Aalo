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
      <section className="mx-auto max-w-3xl px-5 py-20 text-center">
        <Reveal>
          <p className="eyebrow">{t.belief.label}</p>
          <blockquote className="fluid-h2 mt-4 font-serif" lang={lang}>“{t.belief.quote}”</blockquote>
          <p className="lede mt-4" lang={lang}>{t.belief.sub}</p>
        </Reveal>
      </section>
      <section className="mx-auto max-w-6xl px-5">
        <div className="grid gap-4 md:grid-cols-3">
          {t.pillars.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.07}>
              <TiltCard>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--faint)' }}>0{i + 1}</p>
                <p className="mt-2 font-serif text-[19px]">{p.t}</p>
                <p className="mt-2 text-[14.5px] leading-relaxed" style={{ color: 'var(--muted)' }} lang={lang}>{p.d}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
      <AlpanaDivider />
      <section className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="rounded-2xl border p-8 md:p-12" style={{ background: 'var(--surface)', borderColor: 'var(--line-soft)', boxShadow: 'var(--shadow)' }}>
            <p className="eyebrow">{lang === 'bn' ? 'সততা' : 'Honesty'}</p>
            <h2 className="fluid-h2 mt-3 font-serif" lang={lang}>{t.honesty.title}</h2>
            <p className="lede mt-3 max-w-3xl" lang={lang}>{t.honesty.line}</p>
            <div className="mt-5 flex flex-wrap gap-2">{t.honesty.points.map(pt => <Chip key={pt}>{pt}</Chip>)}</div>
            <Link href={`${bnPrefix}/now`} className="mt-7 inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: 'var(--ink)' }}>{t.honesty.cta} →</Link>
          </div>
        </Reveal>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <p className="eyebrow">{t.roadmapTeaser.kicker}</p>
          <h2 className="fluid-h2 mt-3 font-serif" lang={lang}>{t.roadmapTeaser.title}</h2>
        </Reveal>
        <div className="mt-8 overflow-x-auto pb-2">
          <div className="flex min-w-[780px] gap-3">
            {(timeline as unknown[] as { phase: string; title: string; desc: string; here?: boolean }[]).map((s, i) => (
              <div key={s.phase} className="relative min-w-[220px] flex-1 rounded-2xl border p-5" style={{ background: 'var(--surface)', borderColor: s.here ? 'var(--rust)' : 'var(--line-soft)' }}>
                {s.here && <span className="absolute -top-2.5 left-4 rounded-full px-2.5 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white" style={{ background: 'var(--rust)' }}>{lang === 'bn' ? 'আমরা এখানে' : 'We are here'}</span>}
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--rust)' }}>{s.phase}</p>
                <p className="mt-1.5 font-serif text-[16.5px] leading-snug">{lang === 'bn' ? (timeline as unknown[] as { titleBn: string }[])[i].titleBn : s.title}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{lang === 'bn' ? (timeline as unknown[] as { descBn: string }[])[i].descBn : s.desc}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.14em]" style={{ color: 'var(--faint)' }}>Light {['I', 'II', 'III', 'IV', 'V'][i]}</p>
              </div>
            ))}
          </div>
        </div>
        <Link href={`${bnPrefix}/journey`} className="hand-underline text-[15px] font-medium">{t.roadmapTeaser.cta} →</Link>
      </section>
      <section className="mx-auto max-w-6xl px-5 pb-4">
        <Reveal><h2 className="font-serif text-[26px]" lang={lang}>{t.nowStrip.title}</h2></Reveal>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {(visits as { place: string; status: string; note: string }[]).map(v => (
            <TiltCard key={v.place}><Chip tone="sage">{v.status}</Chip><p className="mt-3 text-[15px] font-semibold leading-snug">{v.place}</p><p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{v.note}</p></TiltCard>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {(ideas as { t: string; d: string }[]).slice(0, 3).map(c => (
            <TiltCard key={c.t}><p className="font-serif text-[16.5px]">{c.t}</p><p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{c.d}</p></TiltCard>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <div className="rounded-2xl border px-8 py-14 text-center" style={{ background: 'var(--ink)', borderColor: 'var(--ink)', color: '#FAF7F0' }}>
            <p className="eyebrow" style={{ color: 'var(--mustard)' }}>{lang === 'bn' ? 'যোগ দিন' : 'Join'}</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl" lang={lang}>{t.joinCta.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed opacity-80" lang={lang}>{t.joinCta.sub}</p>
            <a href="https://forms.gle/4sy1HH22JPNoBD7U6" target="_blank" rel="noreferrer" className="mt-7 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold" style={{ color: '#211c15' }}>{t.joinCta.cta} →</a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
