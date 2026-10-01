"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/context/AppContext';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/why', key: 'why' }, { href: '/learn', key: 'learn' }, { href: '/now', key: 'now' },
  { href: '/journey', key: 'journey' }, { href: '/team', key: 'team' }, { href: '/join', key: 'join' },
  { href: '/library', key: 'library' }, { href: '/contact', key: 'contact' }
];

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isBn = lang === 'bn' || pathname?.startsWith('/bn');
  const href = (h: string) => (isBn ? `/bn${h}` : h);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-40" style={{ background: 'rgba(250,247,240,.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--line-soft)' }}>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-5 py-3.5">
        <Link href={isBn ? '/bn' : '/'} className="flex items-center gap-2.5" aria-label="Pratham Aalo home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/icon.svg" alt="" width={30} height={30} style={{ opacity: 0.95 }} />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-serif text-[16px] font-bold tracking-tight sm:text-[17px]" lang={lang}>{lang === 'bn' ? 'প্রথম আলো' : 'Pratham Aalo'}</span>
            <span className="hidden text-[10px] uppercase tracking-[0.14em] min-[380px]:block" style={{ color: 'var(--faint)' }}>{t.brand.descriptor}</span>
          </span>
        </Link>
        <nav className="ml-auto hidden items-center gap-5 text-[13.5px] lg:flex" aria-label="Primary">
          {LINKS.map(l => (
            <Link key={l.key} href={href(l.href)} className="transition-opacity opacity-70 hover:opacity-100" style={{ letterSpacing: '0.01em' }}>
              {(t.nav as Record<string, string>)[l.key]}
            </Link>
          ))}
          <button onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} className="rounded-full border px-3 py-1 text-xs font-medium transition-colors hover:bg-black/5" style={{ borderColor: 'var(--line)' }} aria-label="Toggle language">
            {lang === 'en' ? 'বাংলা' : 'EN'}
          </button>
          <Link href={href('/join')} className="rounded-full px-4 py-2 text-[13px] font-semibold text-white" style={{ background: 'var(--ink)' }}>{t.hero.cta1}</Link>
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <button onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: 'var(--line)' }} aria-label="Toggle language">{lang === 'en' ? 'বাং' : 'EN'}</button>
          <button onClick={() => setOpen(!open)} className="rounded-full border px-3 py-1 text-sm" style={{ borderColor: 'var(--line)' }} aria-expanded={open}>{open ? t.nav.close : t.nav.menu}</button>
        </div>
      </div>
      {open && (
        <nav className="mx-4 mb-4 rounded-2xl border p-3 lg:hidden" style={{ background: 'var(--surface)', borderColor: 'var(--line-soft)', boxShadow: 'var(--shadow)' }} aria-label="Mobile">
          <div className="grid gap-1">
            {LINKS.map(l => (
              <Link key={l.key} href={href(l.href)} className="rounded-xl px-3 py-2.5 font-serif text-lg">{(t.nav as Record<string, string>)[l.key]}</Link>
            ))}
            <Link href={href('/brand')} className="rounded-xl px-3 py-2 text-sm opacity-60">{t.nav.brand}</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
