"use client";
import { useLang } from '@/context/AppContext';
import { Reveal } from '@/components/ui';
import timeline from '@/data/timeline.json';

type Phase = { phase: string; title: string; titleBn: string; desc: string; descBn: string; here?: boolean };

/**
 * Roadmap — mobile-first, never clips.
 * Mobile: vertical rail with nodes; badge is inline (no absolute overlap).
 * Desktop: 5-column grid, equal cards, connecting furrow line.
 */
export function Roadmap() {
  const { lang } = useLang();
  const en = lang !== 'bn';
  const phases = timeline as Phase[];
  const numerals = ['I', 'II', 'III', 'IV', 'V'];

  return (
    <div>
      {/* Mobile / tablet: vertical journey path */}
      <ol className="relative mt-8 space-y-4 md:hidden" style={{ paddingLeft: 26 }}>
        <span aria-hidden className="absolute bottom-4 left-[8px] top-4 w-px" style={{ background: 'var(--line)' }} />
        {phases.map((s, i) => (
          <Reveal key={s.phase} delay={Math.min(i * 0.05, 0.2)}>
            <li className="relative rounded-2xl border p-5" style={{ background: 'var(--surface)', borderColor: s.here ? 'var(--clay)' : 'var(--line-soft)', boxShadow: s.here ? 'var(--shadow-sm)' : undefined }}>
              <span aria-hidden className="absolute left-[-24px] top-6 flex h-[17px] w-[17px] items-center justify-center rounded-full" style={{ background: s.here ? 'var(--clay)' : 'var(--paper)', border: `2px solid ${s.here ? 'var(--clay)' : 'var(--faint)'}` }}>
                {s.here && <span className="h-[5px] w-[5px] rounded-full" style={{ background: '#fff' }} />}
              </span>
              {s.here && (
                <span className="mb-2.5 inline-block rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white" style={{ background: 'var(--clay)' }}>
                  {en ? '● We are here' : '● আমরা এখানে'}
                </span>
              )}
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--clay)' }}>{s.phase}</p>
              <p className="mt-1 font-serif text-[17px] leading-snug" lang={lang}>{en ? s.title : s.titleBn}</p>
              <p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }} lang={lang}>{en ? s.desc : s.descBn}</p>
              <p className="mt-3 text-[10.5px] uppercase tracking-[0.16em]" style={{ color: 'var(--faint)' }}>Light {numerals[i]}</p>
            </li>
          </Reveal>
        ))}
      </ol>

      {/* Desktop: field-row of five, no scroll, no clipping */}
      <div className="mt-8 hidden md:block">
        <div aria-hidden className="relative mx-6 mb-[-13px] h-px" style={{ background: 'var(--line)' }}>
          <div className="absolute inset-0 flex justify-between" style={{ transform: 'translateY(-4px)' }}>
            {phases.map(s => (
              <span key={s.phase} className="h-[9px] w-[9px] rounded-full" style={{ background: s.here ? 'var(--clay)' : 'var(--paper)', border: `2px solid ${s.here ? 'var(--clay)' : 'var(--faint)'}`, boxShadow: s.here ? '0 0 0 5px rgba(176,81,44,.15)' : undefined }} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {phases.map((s, i) => (
            <Reveal key={s.phase} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border p-5" style={{ background: s.here ? 'var(--surface)' : 'var(--surface)', borderColor: s.here ? 'var(--clay)' : 'var(--line-soft)', boxShadow: s.here ? 'var(--shadow-sm)' : undefined }}>
                {s.here ? (
                  <span className="mb-2 inline-block self-start rounded-full px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white" style={{ background: 'var(--clay)' }}>
                    {en ? '● We are here' : '● আমরা এখানে'}
                  </span>
                ) : (
                  <span className="mb-2 inline-block self-start rounded-full border px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.12em]" style={{ borderColor: 'var(--line-soft)', color: 'var(--faint)' }}>
                    Light {numerals[i]}
                  </span>
                )}
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em]" style={{ color: 'var(--clay)' }}>{s.phase}</p>
                <p className="mt-1 font-serif text-[16px] leading-snug" lang={lang}>{en ? s.title : s.titleBn}</p>
                <p className="mt-2 text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }} lang={lang}>{en ? s.desc : s.descBn}</p>
                {s.here && <p className="mt-auto pt-3 text-[10.5px] uppercase tracking-[0.16em]" style={{ color: 'var(--faint)' }}>Light {numerals[i]}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
