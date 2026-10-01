"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import en from '@/content/en/common.json';
import bn from '@/content/bn/common.json';

type Lang = 'en' | 'bn';

const LangCtx = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: typeof en }>({ lang: 'en', setLang: () => {}, t: en });

export function useLang() { return useContext(LangCtx); }

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!forceLang) setLangState(initialLang());
  }, [forceLang]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.dataset.lang = lang;
    document.documentElement.lang = lang === 'bn' ? 'bn' : 'en';
    try { localStorage.setItem('pa-lang', lang); } catch {}
  }, [lang, mounted]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const t = useMemo(() => (lang === 'bn' ? (bn as typeof en) : en), [lang]);

  return <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>;
}
