"use client";
import { motion } from 'framer-motion';
export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
export function AlpanaDivider() {
  return (
    <div className="mx-auto my-10 max-w-3xl px-4" aria-hidden>
      <svg viewBox="0 0 600 40" className="w-full" fill="none" style={{ color: 'var(--rust)' }}>
        <circle cx="300" cy="20" r="7" stroke="currentColor" strokeWidth="2" />
        <circle cx="300" cy="20" r="2.5" fill="currentColor" />
        <path d="M20 20 H260 M340 20 H580" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 10" />
        <path d="M270 20 c 10 -12, 20 12, 30 0 M300 20" stroke="currentColor" strokeWidth="2" />
        <path d="M120 20 l10 -8 10 8 -10 8 Z M470 20 l10 -8 10 8 -10 8 Z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    </div>
  );
}
export function Marquee({ words }: { words: string[] }) {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y py-3" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} aria-label="Bengali words marquee">
      <div className="marquee-track font-serif text-xl" lang="bn">
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-12"><span>{w}</span><span style={{ color: 'var(--mustard)' }}>✺</span></span>
        ))}
      </div>
    </div>
  );
}
export function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rim card-lift rounded-2xl border p-5 ${className}`} style={{ background: 'var(--surface)', borderColor: 'var(--line)', boxShadow: 'var(--shadow-warm)' }}
      onMouseMove={(e) => { const el = e.currentTarget; const r = el.getBoundingClientRect(); el.style.setProperty('--mx', `${e.clientX - r.left}px`); el.style.setProperty('--my', `${e.clientY - r.top}px`); }}>
      {children}
    </div>
  );
}
export function Chip({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'glow' | 'sage' }) {
  const bg = tone === 'glow' ? 'linear-gradient(135deg,#C2542D,#E8A93B)' : tone === 'sage' ? 'var(--sage)' : 'transparent';
  const color = tone === 'default' ? 'var(--muted)' : '#fff';
  return <span className="inline-block rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: 'var(--line)', background: bg, color }}>{children}</span>;
}
