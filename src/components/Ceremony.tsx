"use client";
import { motion } from 'framer-motion';
import { useTheme, useLang } from '@/context/AppContext';

export function CeremonyOverlay() {
  const { ceremony, skipCeremony, theme } = useTheme();
  const { lang } = useLang();
  if (!ceremony) return null;
  const toNight = ceremony.to === 'dark';
  return (
    <motion.div className="fixed inset-0 z-[90] flex items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      style={{ background: toNight ? '#02030a' : '#FBF6EC' }} role="dialog" aria-label="Theme transition" aria-live="polite">
      <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: [0.6, 1.05, 1], opacity: 1 }} transition={{ duration: 1.1, ease: 'easeOut' }} className="text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={toNight ? '/brand/logo-dark.svg' : '/brand/logo-primary.svg'} alt="Pratham Aalo logo ignites" width={300} height={190} style={{ filter: toNight ? 'drop-shadow(0 0 42px rgba(242,192,99,.85))' : 'drop-shadow(0 8px 32px rgba(194,84,45,.4))' }} />
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0, duration: 0.9 }}
          className="mt-4 font-serif text-xl md:text-2xl" style={{ color: toNight ? '#F3ECDC' : '#1F1B16' }} lang={lang}>
          {lang === 'bn' ? 'প্রথম আলো অন্ধকার দূর করবে।' : 'Pratham Aalo will light up the darkness.'}
        </motion.p>
        <motion.div className="mx-auto mt-6 h-1 w-56 overflow-hidden rounded-full" style={{ background: 'rgba(128,128,128,.25)' }}>
          <motion.div className="h-full w-full origin-left" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.4 }} style={{ background: 'linear-gradient(90deg,#2B2F6B,#C2542D,#E8A93B)' }} />
        </motion.div>
      </motion.div>
      <button onClick={() => { skipCeremony(); }} className="absolute bottom-6 rounded-full border px-4 py-2 text-sm" style={{ color: toNight ? '#fff' : '#1F1B16', borderColor: 'rgba(150,150,150,.5)' }}>
        Skip {theme === 'light' ? '→ Night' : '→ Day'}
      </button>
    </motion.div>
  );
}
