"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang, useTheme } from '@/context/AppContext';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/why', key: 'why' }, { href: '/learn', key: 'learn' }, { href: '/now', key: 'now' },
  { href: '/journey', key: 'journey' }, { href: '/team', key: 'team' }, { href: '/join', key: 'join' },
  { href: '/library', key: 'library' }, { href: '/contact', key: 'contact' }
];

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isBn = lang === 'bn' || pathname?.startsWith('/bn');
  const href = (h: string) => (isBn ? `/bn${h}` : h);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md" style={{ background: 'color-mix(in srgb, var(--paper) 86%, transparent)', borderBottom: '1px solid var(--line)' }}>
      <a href="#main" className="skip-link">Skip to content</a>
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3">
        <Link href={isBn ? '/bn' : '/'} className="flex items-center gap-2" aria-label="Pratham Aalo home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/icon.svg" alt="" width={34} height={34} />
          <span className="leading-tight">
            <span className="block font-serif font-bold" lang={lang}>{lang === 'bn' ? 'প্রথম আলো' : 'Pratham Aalo'}</span>
            <span className="block text-[11px] tracking-wide" style={{ color: 'var(--muted)' }}>{t.brand.descriptor}</span>
          </span>
        </Link>
        <nav className="ml-auto hidden items-center gap-4 text-sm lg:flex" aria-label="Primary">
          {LINKS.map(l => (
            <Link key={l.key} href={href(l.href)} className="opacity-80 hover:opacity-100">
              {(t.nav as Record<string, string>)[l.key]}
            </Link>
          ))}
          <button onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} className="rounded-full border px-3 py-1 text-xs font-semibold" style={{ borderColor: 'var(--line)' }} aria-label="Toggle language">
            EN | বাং
          </button>
          <button onClick={toggleTheme} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: 'var(--line)' }} aria-label="Toggle day night theme">
            {theme === 'light' ? '☾ Night' : '☀ Day'}
          </button>
          <Link href={href('/join')} className="rounded-full px-4 py-2 text-sm font-semibold text-white" style={{ background: 'var(--dawn-gradient)' }}>{t.hero.cta1}</Link>
        </nav>
        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <button onClick={() => setLang(lang === 'en' ? 'bn' : 'en')} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: 'var(--line)' }} aria-label="Toggle language">EN|বাং</button>
          <button onClick={toggleTheme} className="rounded-full border px-3 py-1 text-xs" style={{ borderColor: 'var(--line)' }} aria-label="Toggle theme">{theme === 'light' ? '☾' : '☀'}</button>
          <button onClick={() => setOpen(!open)} className="rounded-full border px-3 py-1 text-sm" style={{ borderColor: 'var(--line)' }} aria-expanded={open}>{open ? t.nav.close : t.nav.menu}</button>
        </div>
      </div>
      {open && (
        <nav className="mx-4 mb-4 rounded-2xl p-4 lg:hidden" style={{ background: 'var(--surface)', boxShadow: 'var(--shadow-warm)' }} aria-label="Mobile">
          <div className="grid gap-2">
            {LINKS.map(l => (
              <Link key={l.key} href={href(l.href)} className="rounded-xl px-3 py-2 text-lg font-serif">{(t.nav as Record<string, string>)[l.key]}</Link>
            ))}
            <Link href={href('/brand')} className="rounded-xl px-3 py-2 text-sm opacity-70">{t.nav.brand}</Link>
          </div>
        </nav>
      )}
    </header>
  );
}
