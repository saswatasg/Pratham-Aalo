"use client";
import { useLang } from '@/context/AppContext';
import { useState } from 'react';
import Link from 'next/link';

export function Footer() {
  const { t, lang } = useLang();
  const [copied, setCopied] = useState(false);
  const email = t.footer.email;
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); } catch {}
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <footer className="mt-20 border-t" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-bold" lang={lang}>{lang === 'bn' ? 'প্রথম আলো · Dawn' : 'Pratham Aalo · Dawn'}</p>
          <p className="mt-1 text-xs" style={{ color: 'var(--muted)' }}>{t.brand.descriptor}</p>
          <p className="mt-3 max-w-xs text-sm italic" lang={lang}>“{t.footer.tagline}”</p>
          <p className="mt-3 text-xs font-semibold" style={{ color: 'var(--rust)' }}>{t.footer.status}</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Contact</p>
          <p className="mt-2 flex flex-wrap items-center gap-2">
            <a className="hand-underline font-semibold" href={`mailto:${email}`}>{email}</a>
            <button onClick={copy} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: 'var(--line)' }}>{copied ? t.footer.copied : t.footer.copy}</button>
          </p>
          <p className="mt-3 text-xs" style={{ color: 'var(--muted)' }}>Join form: https://forms.gle/4sy1HH22JPNoBD7U6</p>
          <p className="mt-2 text-xs" style={{ color: 'var(--muted)' }}>Reference models (text only): SECMOL · Vigyan Ashram · KISS · Barefoot College · Rishi Valley/KFI · Pathshala Baroda · Shaamil · Sriniketan · Vidyacharcha Kendra</p>
        </div>
        <div className="text-sm">
          <p className="font-semibold">Explore</p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
            <Link href={lang === 'bn' ? '/bn/why' : '/why'}>{t.nav.why}</Link>
            <Link href={lang === 'bn' ? '/bn/journey' : '/journey'}>{t.nav.journey}</Link>
            <Link href={lang === 'bn' ? '/bn/team' : '/team'}>{t.nav.team}</Link>
            <Link href={lang === 'bn' ? '/bn/join' : '/join'}>{t.nav.join}</Link>
            <Link href="/brand">{t.nav.brand}</Link>
          </div>
          <p className="mt-4 text-xs" style={{ color: 'var(--muted)' }}>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
