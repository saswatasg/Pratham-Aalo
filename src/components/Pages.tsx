"use client";
import { useState } from 'react';
import { useLang } from '@/context/AppContext';
import { AlpanaDivider, Chip, Reveal, TiltCard } from '@/components/ui';
import team from '@/data/team.json';
import timeline from '@/data/timeline.json';
import visits from '@/data/visits.json';
import ideas from '@/data/ideas.json';
import library from '@/data/library.json';
import faq from '@/data/faq.json';

function Wrap({ kicker, title, lede, children }: { kicker: string; title: string; lede?: string; children: React.ReactNode }) {
  const { lang } = useLang();
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12">
      <Reveal><p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--rust)' }}>{kicker}</p>
        <h1 className="fluid-h2 mt-2 font-serif font-black" lang={lang}>{title}</h1>
        {lede && <p className="mt-3 max-w-3xl text-lg" lang={lang}>{lede}</p>}</Reveal>
      <AlpanaDivider />
      {children}
    </main>
  );
}

export function WhyBody() {
  const { lang } = useLang();
  const en = lang !== 'bn';
  return (
    <Wrap kicker={en ? 'Our story · July 2026' : 'আমাদের গল্প · জুলাই ২০২৬'} title={en ? 'Why Pratham Aalo exists' : 'কেন প্রথম আলো'} lede={en ? 'It began in July 2026 with a simple discomfort: too many children learn in a language that isn’t theirs, in places that don’t notice them. We believe nobody should feel invisible.' : 'জুলাই ২০২৬-এ একটি অস্বস্তি থেকে শুরু: অনেক শিশু এমন ভাষায় শেখে যা তাদের নয়, এমন জায়গায় যেখানে তাদের দেখা হয় না। — TODO: verify'}>
      <div className="grid gap-4 md:grid-cols-2">
        <TiltCard><h3 className="font-serif font-bold">{en ? 'Local-first' : 'স্থানীয়-প্রথম'}</h3><p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{en ? 'Bengali children should learn in Bengali, from people who understand where they come from. Families are part of the story — especially for girls’ education. Trust is built slowly, in their language, by living alongside.' : 'বাংলার শিশুরা বাংলায় শিখবে, যারা তাদের চেনে তাদের কাছ থেকে। পরিবার গল্পের অংশ। — TODO: verify'}</p></TiltCard>
        <TiltCard><h3 className="font-serif font-bold">{en ? 'Mother tongue' : 'মাতৃভাষা'}</h3><p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{en ? 'Common-sense learning: boiling water, fixing a toy, counting change. Four or five children are enough to begin. We borrow pedagogy, not institutional machinery.' : 'সাধারণ বুদ্ধির শেখা: জল ফোটানো, খেলনা সারানো। চার-পাঁচজন শিশুই যথেষ্ট। — TODO: verify'}</p></TiltCard>
      </div>
      <Reveal className="mt-8"><blockquote className="rounded-2xl border p-6 text-center font-serif text-xl italic" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }} lang={lang}>“{en ? 'We don’t have a master plan. We are learning as we go.' : 'আমাদের কোনো মাস্টার প্ল্যান নেই। আমরা শিখতে শিখতে এগোচ্ছি।'}”</blockquote></Reveal>
      <div className="mt-8"><h2 className="font-serif text-xl font-bold">{en ? 'How we work' : 'আমরা কীভাবে কাজ করি'}</h2>
        <div className="mt-3 flex flex-wrap gap-2">{['Trust', 'Empathy', 'Inclusiveness', 'Self-improvement', 'Consistency', 'Healthy pacing', 'Collective reciprocation', 'No hunger for spotlight', 'Decisions together in the open'].map(v => <Chip key={v}>{v}</Chip>)}</div>
        <p className="mt-4 text-sm" style={{ color: 'var(--muted)' }}>{en ? 'What we have: purpose, inclusive community, room to grow, trust, empathy. What we don’t have yet: spotlight, material benefit, coaching, proven delivery — said openly.' : 'যা আছে: উদ্দেশ্য, সম্প্রদায়, বাড়ার জায়গা। যা নেই: প্রচার, সুবিধা — খোলাখুলি। — TODO: verify'}</p></div>
      <div className="mt-8"><h2 className="font-serif text-xl font-bold">FAQ</h2>
        <div className="mt-3 grid gap-3">{(faq as { q: string; a: string }[]).map(f => <details key={f.q} className="rounded-xl border p-4" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}><summary className="cursor-pointer font-semibold">{f.q}</summary><p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{f.a}</p></details>)}</div></div>
    </Wrap>
  );
}

export function LearnBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  const steps = en ? [
    { t: 'Hands-first (≈6–10)', d: 'Cooking, boiling water, toy dismantle-and-rebuild, clay, block print, calligraphy. Everything is education.' },
    { t: 'Interest-led tracks (early teens)', d: 'Making, growing, fixing, drawing, telling — follow the child’s curiosity.' },
    { t: 'Earn-while-learning (later)', d: 'KISS / Vigyan Ashram analogues. NIOS as credential anchor later.' }
  ] : [
    { t: 'হাতে-কলমে (≈৬–১০)', d: 'রান্না, খেলনা খোলা-জোড়া, মাটি, ছাপা। সবই শিক্ষা। — TODO: verify' },
    { t: 'আগ্রহ-ভিত্তিক (কৈশোর)', d: 'বানানো, লাগানো, সারানো, আঁকা — শিশুর কৌতূহল ধরে।' },
    { t: 'শিখতে শিখতে আয় (পরে)', d: 'NIOS সনদ পরে।' }
  ];
  return (
    <Wrap kicker={en ? 'How we learn' : 'শেখার ধরণ'} title={en ? 'Learning through doing' : 'করে শেখা'} lede={en ? 'Scaffolding and common sense. Families alongside, especially for girls. Small to begin — four or five children are enough.' : 'হাতে-কলমে, সাধারণ বুদ্ধিতে। — TODO: verify'}>
      <div className="grid gap-4 md:grid-cols-3">{steps.map(s => <TiltCard key={s.t}><h3 className="font-serif font-bold">{s.t}</h3><p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{s.d}</p></TiltCard>)}</div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <TiltCard><h3 className="font-serif font-bold">🪁 {en ? 'Example: kite + wind' : 'উদাহরণ: ঘুড়ি'}</h3><p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{en ? 'Make, fly, measure, mend. Language, maths and science hide inside play.' : 'বানাও, ওড়াও, মাপো, সারাও। খেলার ভেতরে ভাষা-অঙ্ক-বিজ্ঞান।'}</p></TiltCard>
        <TiltCard><h3 className="font-serif font-bold">🍚 {en ? 'Example: cooking rice' : 'উদাহরণ: ভাত রান্না'}</h3><p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{en ? 'Measure, boil, time, share. Nutrition, fire safety, fractions.' : 'মাপো, ফোটাও, ভাগ করো। পুষ্টি, নিরাপত্তা, ভগ্নাংশ।'}</p></TiltCard>
      </div>
    </Wrap>
  );
}

export function NowBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  return (
    <Wrap kicker={en ? 'What we’re doing now' : 'এখন কী করছি'} title={en ? 'Visiting · listening · making' : 'দেখা · শোনা · বানানো'} lede={en ? 'Real and dated. We show visits neutrally and share what we make freely.' : 'বাস্তব ও তারিখসহ। — TODO: verify'}>
      <h2 className="font-serif text-xl font-bold">{en ? 'Visits & conversations' : 'পরিদর্শন ও আলাপ'}</h2>
      <div className="mt-3 grid gap-4 md:grid-cols-3">{(visits as { place: string; status: string; note: string }[]).map(v => <TiltCard key={v.place}><Chip tone="sage">{v.status}</Chip><p className="mt-2 font-semibold">{v.place}</p><p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{v.note}</p></TiltCard>)}</div>
      <p className="mt-3 text-xs" style={{ color: 'var(--muted)' }}>{en ? 'Detailed statuses are private while conversations are ongoing. Write to us for collaboration.' : 'আলাপ চলাকালীন বিস্তারিত স্থিতি ব্যক্তিগত।'}</p>
      <h2 className="mt-10 font-serif text-xl font-bold">{en ? 'Making learning material' : 'শেখার উপকরণ বানানো'}</h2>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{(ideas as { t: string; d: string }[]).map(c => <TiltCard key={c.t}><p className="font-serif font-bold">{c.t}</p><p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{c.d}</p></TiltCard>)}</div>
      <div className="mt-8 rounded-2xl border p-5" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}>
        <h3 className="font-serif font-bold">{en ? 'Rhythm' : 'ছন্দ'}</h3>
        <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{en ? 'Open weekly Wednesday-evening online calls · Volunteer rota: each member shares one skill weekly at a partner NGO · 11-theme School Visit Questionnaire: belonging, individuality, adolescence, challenges, real need, trust & continuity, boundaries, impact, “what have we not asked?”' : 'প্রতি বুধবার সন্ধ্যায় খোলা অনলাইন আড্ডা · ১১-থিম প্রশ্নমালা। — TODO: verify'}</p>
      </div>
    </Wrap>
  );
}

export function JourneyBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  const past = en ? [
    ['20 Jul 2026', 'Group formed after following Sonam Wangchuk’s work & Jantar Mantar events. Convened by Nipa.'],
    ['25 Jul 2026', 'First meeting.'],
    ['30 Aug – 30 Sep 2026', 'Meetings: 30 Aug, 2 Sep, 16 Sep, 25 Sep, 30 Sep.'],
    ['Oct 2026', 'Name chosen: Pratham Aalo (প্রথম আলো) — Dawn.']
  ] : [['২০ জুলাই ২০২৬', 'দল গঠন।'], ['২৫ জুলাই', 'প্রথম বৈঠক।'], ['৩০ আগ–৩০ সেপ', 'ধারাবাহিক বৈঠক।'], ['অক্টোবর ২০২৬', 'নাম: প্রথম আলো — Dawn।']];
  return (
    <Wrap kicker={en ? 'Journey · five years to a school' : 'যাত্রা · পাঁচ বছরে স্কুল'} title={en ? 'From first meeting to ≈2031' : 'প্রথম বৈঠক থেকে ≈২০৩১'} lede={en ? 'Each phase is a brighter sunrise. We are at Year 0–1 — finding our people. West Bengal confirmed; specific site under study, none chosen.' : 'প্রতিটি ধাপ উজ্জ্বলতর ভোর। আমরা ০–১ বছরে। পশ্চিমবঙ্গ নিশ্চিত; জায়গা যাচাই চলছে।'}>
      <h2 className="font-serif text-xl font-bold">{en ? 'So far' : 'এ পর্যন্ত'}</h2>
      <ol className="mt-4 space-y-0 border-l-2 pl-0" style={{ borderColor: 'var(--mustard)' }}>
        {past.map(([d, x]) => <li key={d} className="relative pb-6 pl-6"><span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full" style={{ background: 'var(--mustard)' }} /><p className="text-xs font-bold" style={{ color: 'var(--rust)' }}>{d}</p><p className="mt-1 text-sm">{x}</p></li>)}
      </ol>
      <h2 className="mt-8 font-serif text-xl font-bold">{en ? 'The five-year path' : 'পাঁচ বছরের পথ'}</h2>
      <div className="mt-4 grid gap-4">
        {(timeline as unknown[] as { phase: string; title: string; titleBn: string; desc: string; descBn: string; here?: boolean; light: string }[]).map(s => (
          <div key={s.phase} className="flex gap-4 rounded-2xl border p-5" style={{ borderColor: s.here ? 'var(--mustard)' : 'var(--line)', background: 'var(--surface)', boxShadow: s.here ? '0 0 28px rgba(232,169,59,.4)' : undefined }}>
            <div className="flex flex-col items-center"><span className="h-4 w-4 rounded-full" style={{ background: s.here ? 'var(--mustard)' : 'var(--rust)' }} /><span className="w-0.5 flex-1" style={{ background: 'var(--line)' }} /></div>
            <div><p className="text-xs font-bold" style={{ color: 'var(--rust)' }}>{s.phase} · {s.light} {s.here && '· ● We are here'}</p>
              <p className="font-serif text-lg font-bold">{en ? s.title : s.titleBn}</p><p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>{en ? s.desc : s.descBn}</p></div>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

export function TeamBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  type Member = { name: string; nick: string; group: string; city: string; cityBn: string; initial: string };
  const core = (team as Member[]).filter(p => p.group === 'core');
  const vol = (team as Member[]).filter(p => p.group === 'volunteer');
  const Card = ({ p }: { p: Member }) => (
    <TiltCard>
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full font-serif text-xl font-bold text-white" style={{ background: 'var(--dawn-gradient)' }} lang="bn">{p.initial}</span>
        <div><p className="font-serif font-bold">{p.name}{p.nick ? ` (“${p.nick}”)` : ''}</p><p className="text-xs" style={{ color: 'var(--muted)' }}>{en ? p.city : p.cityBn}</p></div>
      </div>
      <p className="mt-3"><Chip tone={p.group === 'core' ? 'glow' : 'sage'}>{p.group === 'core' ? (en ? 'Core Committee' : 'মূল কমিটি') : (en ? 'Volunteer' : 'স্বেচ্ছাসেবী')}</Chip></p>
    </TiltCard>
  );
  return (
    <Wrap kicker={en ? 'Team · real names only' : 'দল · আসল নাম'} title={en ? 'Family & friends, learning together' : 'পরিবার ও বন্ধুরা'} lede={en ? 'Name + city only — Core Committee or Volunteer. No photos, phones or personal emails. Edit anytime in team.json.' : 'শুধু নাম + শহর — মূল কমিটি বা স্বেচ্ছাসেবী। — TODO: verify'}>
      <h2 className="font-serif text-xl font-bold">{en ? 'Core committee' : 'মূল কমিটি'}</h2>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{core.map(p => <Card key={p.name} p={p} />)}</div>
      <h2 className="mt-8 font-serif text-xl font-bold">{en ? 'Volunteers' : 'স্বেচ্ছাসেবী'}</h2>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{vol.map(p => <Card key={p.name} p={p} />)}</div>
    </Wrap>
  );
}

export function JoinBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  const [copied, setCopied] = useState(false);
  const roles = en ? ['Teaching children', 'Content development', 'School visits & field research', 'Admin & logistics', 'Tech & AI', 'Connecting people'] : ['শিশুদের পড়ানো', 'কনটেন্ট', 'পরিদর্শন ও মাঠ-গবেষণা', 'প্রশাসন', 'প্রযুক্তি', 'যোগাযোগ'];
  return (
    <Wrap kicker={en ? 'Join · everyone does a bit of everything' : 'যোগ দিন'} title={en ? 'Come learn with us' : 'আমাদের সঙ্গে শিখুন'} lede={en ? 'We grow organically. One evening a week is enough. No ID documents on this site — just the form + email.' : 'জৈবভাবে বাড়ি। সপ্তাহে এক সন্ধ্যাই যথেষ্ট। — TODO: verify'}>
      <div className="flex flex-wrap gap-2">{roles.map(r => <Chip key={r} tone="glow">{r}</Chip>)}</div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <TiltCard><h3 className="font-serif text-lg font-bold">Google Form</h3><p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{en ? 'Tell us one skill you can share weekly. We reply after Wednesday calls.' : 'সপ্তাহে একটি দক্ষতা জানান।'}</p><a href="https://forms.gle/4sy1HH22JPNoBD7U6" target="_blank" rel="noreferrer" className="mt-4 inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: 'var(--dawn-gradient)' }}>{en ? 'Fill the Join form →' : 'ফর্ম পূরণ করুন →'}</a></TiltCard>
        <TiltCard><h3 className="font-serif text-lg font-bold">Email</h3><p className="mt-2 text-sm"><a className="hand-underline font-semibold" href="mailto:prathamaalo2026@gmail.com">prathamaalo2026@gmail.com</a></p><button onClick={async () => { try { await navigator.clipboard.writeText('prathamaalo2026@gmail.com'); } catch {} setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="mt-3 rounded-full border px-4 py-1.5 text-xs" style={{ borderColor: 'var(--line)' }}>{copied ? 'Copied!' : 'Copy email'}</button><p className="mt-3 text-xs" style={{ color: 'var(--muted)' }}>{en ? 'Privacy: no cookies/trackers. We never ask for ID documents here.' : 'গোপনীয়তা: কোনো ট্র্যাকার নেই।'}</p></TiltCard>
      </div>
    </Wrap>
  );
}

export function LibraryBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  const cats = ['Watch', 'Read', 'Places'];
  return (
    <Wrap kicker={en ? 'Library · what we learn from' : 'পাঠাগার'} title={en ? 'Watch · Read · Places' : 'দেখা · পড়া · জায়গা'} lede={en ? 'Text credits only — never copying branding. One line on why each matters.' : 'শুধু টেক্সট কৃতিত্ব। — TODO: verify'}>
      {cats.map(c => (
        <div key={c} className="mb-8"><h2 className="font-serif text-xl font-bold">{c}</h2>
          <div className="mt-3 grid gap-4 md:grid-cols-2">{(library as { cat: string; title: string; why: string }[]).filter(l => l.cat === c).map(l => <TiltCard key={l.title}><p className="font-serif font-bold">{l.title}</p><p className="mt-1 text-sm" style={{ color: 'var(--muted)' }}>Why: {l.why}</p></TiltCard>)}</div></div>
      ))}
    </Wrap>
  );
}

export function ContactBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  return (
    <Wrap kicker={en ? 'Contact' : 'যোগাযোগ'} title={en ? 'Say hello — we reply slowly, honestly' : 'কথা বলুন'} lede={en ? 'Best: email. NGOs/schools — tell us who you are; we start with listening.' : 'ইমেলই ভালো। — TODO: verify'}>
      <div className="grid gap-4 md:grid-cols-2">
        <TiltCard><h3 className="font-serif font-bold">Email</h3><a href="mailto:prathamaalo2026@gmail.com" className="hand-underline font-semibold">prathamaalo2026@gmail.com</a><p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{en ? 'For joining, visits, collaboration. No donations.' : 'যোগ, পরিদর্শন, সহযোগিতার জন্য।'}</p></TiltCard>
        <TiltCard><h3 className="font-serif font-bold">{en ? 'Elsewhere' : 'অন্যান্য'}</h3><p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>{en ? 'WhatsApp / Instagram / Facebook — coming soon. Omitted until real links exist.' : 'হোয়াটসঅ্যাপ/ইনস্টাগ্রাম — শীঘ্রই।'}</p></TiltCard>
      </div>
    </Wrap>
  );
}

export function BrandBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  return (
    <Wrap kicker="Brand · design system" title={en ? 'Logo, colour, type, motion' : 'লোগো, রং, হরফ'} lede={en ? 'Recommended: Direction A — matra-horizon + rising half-sun. B: kantha stroke. C: slate rays. Tell us which you prefer — A is built in.' : 'প্রস্তাব: A — মাত্রা-দিগন্ত + অর্ধসূর্য।'}>
      <h2 className="font-serif text-xl font-bold">Logo — 3 directions</h2>
      <div className="mt-3 grid gap-4 md:grid-cols-3">
        {[{ s: '/brand/logo-primary.svg', n: 'A · Matra horizon (Recommended)' }, { s: '/brand/logo-alt-b.svg', n: 'B · Kantha stroke' }, { s: '/brand/logo-alt-c.svg', n: 'C · Slate rays' }].map(l => (
          <TiltCard key={l.n} className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={l.s} alt={l.n} className="mx-auto" width={260} height={160} /><p className="mt-2 text-sm font-semibold">{l.n}</p></TiltCard>
        ))}
      </div>
      <h2 className="mt-10 font-serif text-xl font-bold">Tokens</h2>
      <div className="mt-3 flex flex-wrap gap-3">
        {[['Paper', '#FBF6EC'], ['Ink', '#1F1B16'], ['Indigo', '#2B2F6B'], ['Rust', '#C2542D'], ['Mustard', '#E8A93B'], ['Sage', '#6F8F72'], ['Night', '#0B0D1F']].map(([n, c]) => (
          <span key={n} className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs" style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}><span className="h-4 w-4 rounded-full border" style={{ background: c }} />{n} {c}</span>
        ))}
      </div>
      <div className="mt-4 rounded-2xl p-6 text-white" style={{ background: 'var(--dawn-gradient)' }}>Dawn gradient · indigo → rust → mustard · Day paper / Night glow</div>
      <h2 className="mt-8 font-serif text-xl font-bold">Type & motion</h2>
      <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>EN head Fraunces · EN body Inter · BN head Noto Serif Bengali · BN body Noto Sans Bengali. BN lh ≥1.75, ≥17px. Durations: dawn 1.2s · ray 0.6s · settle 0.35s. Reduced-motion = static.</p>
      <h2 className="mt-8 font-serif text-xl font-bold">Clear space & don’ts</h2>
      <p className="mt-2 text-sm" style={{ color: 'var(--muted)' }}>Clear space = height of sun. Don’t: newspaper masthead, daily/news words, SECMOL/KFI logos, donation buttons, children’s photos, invented numbers.</p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        {['/brand/logo-primary.svg', '/brand/logo-dark.svg', '/brand/logo-mono.svg', '/brand/icon.svg', '/brand/og.svg'].map(s => <a key={s} href={s} className="hand-underline">{s}</a>)}
      </div>
    </Wrap>
  );
}
