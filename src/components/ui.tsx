"use client";
import { motion } from 'framer-motion';
export function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduced = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
export function AlpanaDivider() {
  return (
    <div className="mx-auto my-12 max-w-2xl px-6" aria-hidden>
      <svg viewBox="0 0 600 32" className="w-full opacity-70" fill="none" style={{ color: 'var(--rust)' }}>
        <circle cx="300" cy="16" r="4.5" stroke="currentColor" strokeWidth="1.25" />
        <circle cx="300" cy="16" r="1.4" fill="currentColor" />
        <path d="M40 16 H268 M332 16 H560" stroke="currentColor" strokeWidth="1" opacity="0.7" />
        <path d="M120 16 l7 -6 7 6 -7 6 Z M466 16 l7 -6 7 6 -7 6 Z" stroke="currentColor" strokeWidth="1" opacity="0.8" />
      </svg>
    </div>
  );
}
export function Marquee({ words }: { words: string[] }) {
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-y py-2.5" style={{ borderColor: 'var(--line-soft)', background: 'var(--surface)' }} aria-label="Bengali words">
      <div className="marquee-track font-serif text-[15px] tracking-wide" lang="bn" style={{ color: 'var(--muted)' }}>
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10"><span>{w}</span><span style={{ color: 'var(--mustard)', fontSize: 10 }}>◆</span></span>
        ))}
      </div>
    </div>
  );
}
export function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`card rounded-2xl border p-6 ${className}`} style={{ background: 'var(--surface)', borderColor: 'var(--line-soft)', boxShadow: '0 1px 2px rgba(33,28,21,.04)' }}>
      {children}
    </div>
  );
}
export function Chip({ children, tone = 'default' }: { children: React.ReactNode; tone?: 'default' | 'glow' | 'sage' }) {
  const style =
    tone === 'glow'
      ? { borderColor: 'rgba(176,81,44,.35)', background: 'rgba(176,81,44,.08)', color: 'var(--rust-deep)' }
      : tone === 'sage'
        ? { borderColor: 'rgba(111,143,114,.35)', background: 'rgba(111,143,114,.1)', color: '#436147' }
        : { borderColor: 'var(--line)', background: 'transparent', color: 'var(--muted)' };
  return <span className="inline-block rounded-full border px-3 py-1 text-[11.5px] font-medium tracking-wide" style={style}>{children}</span>;
}
