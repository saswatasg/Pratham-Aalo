"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import en from '@/content/en/common.json';
import bn from '@/content/bn/common.json';

type Lang = 'en' | 'bn';
type Theme = 'light' | 'dark';

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: typeof en }>({ lang: 'en', setLang: () => {}, t: en });
const ThemeCtx = createContext<{ theme: Theme; toggleTheme: () => void; ceremony: null | { to: Theme; id: number }; skipCeremony: () => void }>({ theme: 'light', toggleTheme: () => {}, ceremony: null, skipCeremony: () => {} });

export function useLang() { return useContext(LangCtx); }
export function useTheme() { return useContext(ThemeCtx); }

function initialTheme(): Theme {
  try {
    const s = localStorage.getItem('pa-theme');
    if (s === 'light' || s === 'dark') return s;
  } catch {}
  if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
}
function initialLang(): Lang {
  try {
    const u = new URL(window.location.href);
    const q = u.searchParams.get('lang');
    if (q === 'bn' || q === 'en') return q;
    if (window.location.pathname.startsWith('/bn')) return 'bn';
    const s = localStorage.getItem('pa-lang');
    if (s === 'bn' || s === 'en') return s;
  } catch {}
  return 'en';
}

export function Providers({ children, forceLang }: { children: React.ReactNode; forceLang?: Lang }) {
  const [lang, setLangState] = useState<Lang>(forceLang ?? 'en');
  const [theme, setTheme] = useState<Theme>('light');
  const [ceremony, setCeremony] = useState<null | { to: Theme; id: number }>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!forceLang) setLangState(initialLang());
    const t = initialTheme();
    setTheme(t);
    document.documentElement.dataset.theme = t;
  }, [forceLang]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
    try { localStorage.setItem('pa-theme', theme); localStorage.setItem('pa-lang', lang); } catch {}
  }, [theme, lang, mounted]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const toggleTheme = useCallback(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const to: Theme = theme === 'light' ? 'dark' : 'light';
    if (reduced) {
      setTheme(to);
      return;
    }
    setCeremony({ to, id: Date.now() });
  }, [theme]);

  const skipCeremony = useCallback(() => setCeremony(null), []);

  // ceremony completion applies theme
  useEffect(() => {
    if (!ceremony) return;
    const t = setTimeout(() => {
      setTheme(ceremony.to);
      setCeremony(null);
    }, 3400);
    return () => clearTimeout(t);
  }, [ceremony]);

  const t = useMemo(() => (lang === 'bn' ? (bn as typeof en) : en), [lang]);

  return (
    <LangCtx.Provider value={{ lang, setLang, t }}>
      <ThemeCtx.Provider value={{ theme, toggleTheme, ceremony, skipCeremony }}>{children}</ThemeCtx.Provider>
    </LangCtx.Provider>
  );
}
