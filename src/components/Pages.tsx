"use client";
import { useState } from 'react';
import { useLang } from '@/context/AppContext';
import { AlpanaDivider, Chip, Reveal, TiltCard } from '@/components/ui';
import { Roadmap } from '@/components/Roadmap';
import team from '@/data/team.json';
import timeline from '@/data/timeline.json';
import visits from '@/data/visits.json';
import ideas from '@/data/ideas.json';
import library from '@/data/library.json';
import faq from '@/data/faq.json';

function Wrap({ kicker, title, lede, children }: { kicker: string; title: string; lede?: string; children: React.ReactNode }) {
  const { lang } = useLang();
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-10 sm:px-5 md:py-14">
      <Reveal>
        <p className="eyebrow">{kicker}</p>
        <h1 className="fluid-h2 mt-3 max-w-3xl font-serif" lang={lang}>{title}</h1>
        {lede && <p className="lede mt-4 max-w-3xl" lang={lang}>{lede}</p>}
      </Reveal>
      <AlpanaDivider />
      {children}
    </main>
  );
}

export function WhyBody() {
  const { lang } = useLang();
  const en = lang !== 'bn';
  return (
    <Wrap
      kicker={en ? 'Our story · July 2026' : 'আমাদের গল্প · জুলাই ২০২৬'}
      title={en ? 'Why Pratham Aalo exists' : 'কেন প্রথম আলো'}
      lede={en ? 'It began in July 2026 with a simple discomfort: too many children learn in a language that isn’t theirs, in places that don’t notice them. We believe nobody should feel invisible.' : 'শুরুটা ২০২৬ সালের জুলাই মাসে, একটি সহজ অস্বস্তি থেকে। অনেক শিশু এমন ভাষায় শেখে যা তাদের নিজের নয়, এমন জায়গায় যেখানে তাদের কেউ লক্ষ্য করে না। আমরা বিশ্বাস করি, কেউ যেন অদৃশ্য না থাকে।'}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <TiltCard><h3 className="font-serif text-[18px]">{en ? 'Local-first' : 'মাটির উদ্যোগ'}</h3><p className="mt-2 text-[14.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{en ? 'Bengali children should learn in Bengali, from people who understand where they come from. Families are part of the story — especially for girls’ education. Trust is built slowly, in their language, by living alongside.' : 'বাংলার শিশুরা বাংলাতেই শিখবে, এমন মানুষদের কাছ থেকে যারা জানে তারা কোথা থেকে এসেছে। পরিবার এই গল্পের অংশ — বিশেষ করে মেয়েদের পড়াশোনায়। আস্থা গড়ে ওঠে ধীরে, তাদের ভাষায়, তাদের পাশে থেকে।'}</p></TiltCard>
        <TiltCard><h3 className="font-serif text-[18px]">{en ? 'Mother tongue' : 'মাতৃভাষা'}</h3><p className="mt-2 text-[14.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{en ? 'Common-sense learning: boiling water, fixing a toy, counting change. Four or five children are enough to begin. We borrow pedagogy, not institutional machinery.' : 'সহজ-সরল শেখা। জল ফোটানো, খেলনা সারানো, খুচরো টাকা গোনা। শুরু করতে চার-পাঁচজন শিশুই যথেষ্ট। আমরা শেখার পদ্ধতি ধার নিই, প্রাতিষ্ঠানিক জাঁকজমক নয়।'}</p></TiltCard>
      </div>
      <Reveal className="mt-8"><blockquote className="rounded-2xl border p-8 text-center font-serif text-xl italic leading-relaxed" style={{ borderColor: 'var(--line-soft)', background: 'var(--surface)' }} lang={lang}>“{en ? 'We don’t have a master plan. We are learning as we go.' : 'আমাদের কোনো মাস্টার প্ল্যান নেই। আমরা শিখতে শিখতে এগোচ্ছি।'}”</blockquote></Reveal>
      <div className="mt-10"><h2 className="font-serif text-[21px]">{en ? 'How we work' : 'আমরা কীভাবে কাজ করি'}</h2>
        <div className="mt-4 flex flex-wrap gap-2">{['Trust', 'Empathy', 'Inclusiveness', 'Self-improvement', 'Consistency', 'Healthy pacing', 'Collective reciprocation', 'No hunger for spotlight', 'Decisions together in the open'].map(v => <Chip key={v}>{v}</Chip>)}</div>
        <p className="mt-4 max-w-3xl text-[14.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{en ? 'What we have: purpose, an inclusive community, room to grow, trust, empathy. What we don’t have yet: spotlight, material benefit, coaching, proven delivery — said openly.' : 'যা আমাদের আছে: উদ্দেশ্য, সবার জন্য খোলা একটি সম্প্রদায়, বেড়ে ওঠার জায়গা, আস্থা, সহমর্মিতা। যা এখনও নেই: প্রচারের আলো, আর্থিক সুবিধা, প্রশিক্ষণ, প্রমাণিত সাফল্য — সে কথা খোলাখুলি বলছি।'}</p></div>
      <div className="mt-10"><h2 className="font-serif text-[21px]">FAQ</h2>
        <div className="mt-4 grid gap-3">{(faq as { q: string; a: string }[]).map(f => <details key={f.q} className="rounded-xl border p-5" style={{ borderColor: 'var(--line-soft)', background: 'var(--surface)' }}><summary className="cursor-pointer text-[15px] font-medium">{f.q}</summary><p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>{f.a}</p></details>)}</div></div>
    </Wrap>
  );
}

export function LearnBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  const steps = en ? [
    { t: 'Hands-first, ages 6–10', d: 'Cooking, boiling water, taking a toy apart and rebuilding it, clay, block print, calligraphy. Everything is education.' },
    { t: 'Interest-led tracks, early teens', d: 'Making, growing, fixing, drawing, telling stories — follow the child’s curiosity, then deepen it.' },
    { t: 'Earn-while-learning, later', d: 'Inspired by Vigyan Ashram and KISS. A formal credential anchor later, when it serves the child.' }
  ] : [
    { t: 'হাতে-কলমে শেখা, ৬–১০ বছর', d: 'রান্না, জল ফোটানো, খেলনা খুলে আবার জোড়া লাগানো, মাটির কাজ, ছাপার কাজ, হাতের লেখা। সবই শিক্ষা।' },
    { t: 'আগ্রহ ধরে শেখা, কৈশোরে', d: 'বানানো, চাষ করা, সারানো, আঁকা, গল্প বলা — শিশুর কৌতূহলকে ধরে আরও গভীরে যাওয়া।' },
    { t: 'শিখতে শিখতে আয়, পরে', d: 'বিজ্ঞান আশ্রম ও কিস-এর ভাবনা থেকে অনুপ্রাণিত। শিশুর কাজে লাগলে পরে প্রাতিষ্ঠানিক স্বীকৃতির ব্যবস্থা।' }
  ];
  return (
    <Wrap kicker={en ? 'How we learn' : 'শেখার ধরন'} title={en ? 'Learning through doing' : 'করে শেখা'} lede={en ? 'Patient scaffolding and common sense. Families walk alongside — especially for girls. Small to begin: four or five children are enough.' : 'ধৈর্য ধরে হাতে ধরে শেখানো, আর সহজ বুদ্ধি। পরিবার পাশে থাকে — বিশেষ করে মেয়েদের ক্ষেত্রে। শুরুটা ছোট: চার-পাঁচজন শিশুই যথেষ্ট।'}>
      <div className="grid gap-4 md:grid-cols-3">{steps.map((s, i) => <TiltCard key={s.t}><p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: 'var(--faint)' }}>0{i + 1}</p><h3 className="mt-2 font-serif text-[18px]">{s.t}</h3><p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>{s.d}</p></TiltCard>)}</div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <TiltCard><h3 className="font-serif text-[18px]">{en ? 'A kite and the wind' : 'ঘুড়ি আর হাওয়া'}</h3><p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>{en ? 'Make it, fly it, measure it, mend it. Language, mathematics and science hide inside play.' : 'ঘুড়ি বানাও, ওড়াও, মাপো, ছিঁড়লে সারাও। খেলার ভেতরেই লুকিয়ে থাকে ভাষা, অঙ্ক আর বিজ্ঞান।'}</p></TiltCard>
        <TiltCard><h3 className="font-serif text-[18px]">{en ? 'A pot of rice' : 'এক হাঁড়ি ভাত'}</h3><p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>{en ? 'Measure, boil, time, share. Nutrition, fire safety, fractions — all in one meal.' : 'চাল মাপো, সেদ্ধ করো, সময় দেখো, ভাগ করে খাও। পুষ্টি, আগুনের সাবধানতা, ভগ্নাংশ — এক বেলার রান্নাতেই।'}</p></TiltCard>
      </div>
    </Wrap>
  );
}

export function NowBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  return (
    <Wrap kicker={en ? 'What we’re doing now' : 'এখন কী করছি'} title={en ? 'Visiting, listening, making' : 'দেখা, শোনা, গড়া'} lede={en ? 'Real and dated. We describe visits in neutral words while conversations continue, and share everything we make.' : 'সত্যি কথা, তারিখসহ। আলাপ চলাকালীন পরিদর্শনের কথা সংযত ভাষায় বলি, আর যা বানাই সব ভাগ করে নিই।'}>
      <h2 className="font-serif text-[21px]">{en ? 'Visits and conversations' : 'পরিদর্শন ও আলাপ'}</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">{(visits as { place: string; status: string; note: string }[]).map(v => <TiltCard key={v.place}><Chip tone="sage">{v.status}</Chip><p className="mt-3 text-[15px] font-semibold leading-snug">{v.place}</p><p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{v.note}</p></TiltCard>)}</div>
      <p className="mt-4 max-w-3xl text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>{en ? 'Details stay private while conversations are ongoing. If you are a school or NGO, write to us — we begin with visits, not promises.' : 'আলাপ চলাকালীন বিস্তারিত কথা ব্যক্তিগত থাকে। আপনি স্কুল বা এনজিও হলে আমাদের লিখুন — আমরা প্রতিশ্রুতি নয়, দেখা দিয়ে শুরু করি।'}</p>
      <h2 className="mt-10 font-serif text-[21px]">{en ? 'Making learning material' : 'শেখার উপকরণ গড়া'}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{(ideas as { t: string; d: string }[]).map(c => <TiltCard key={c.t}><p className="font-serif text-[16.5px]">{c.t}</p><p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{c.d}</p></TiltCard>)}</div>
      <div className="mt-6 rounded-2xl border p-6 md:p-8" style={{ borderColor: 'var(--line-soft)', background: 'var(--surface)' }}>
        <h3 className="font-serif text-[18px]">{en ? 'Our rhythm' : 'আমাদের ছন্দ'}</h3>
        <p className="mt-2 max-w-3xl text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>{en ? 'Open online calls every Wednesday evening. A volunteer rota: each member shares one skill a week at a partner NGO. An 11-theme visit questionnaire — belonging, individuality, adolescence, challenges, real need, trust and continuity, boundaries, impact, and “what have we not asked?”' : 'প্রতি বুধবার সন্ধ্যায় সবার জন্য খোলা অনলাইন আড্ডা। স্বেচ্ছাসেবী রোটা: প্রত্যেকে সপ্তাহে একটি দক্ষতা ভাগ করে নেন সহযোগী এনজিও-তে। এগারোটি বিষয়ের পরিদর্শন-প্রশ্নমালা — আপনত্ব, স্বাতন্ত্র্য, কৈশোর, চ্যালেঞ্জ, আসল প্রয়োজন, আস্থা ও ধারাবাহিকতা, সীমা, প্রভাব, আর “আমরা কী জিজ্ঞেস করিনি?”'}</p>
      </div>
    </Wrap>
  );
}

export function JourneyBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  const past = en ? [
    ['20 Jul 2026', 'The group forms — convened by Nipa — after following new experiments in learning and the gatherings at Jantar Mantar.'],
    ['25 Jul 2026', 'First meeting. We decide to start by visiting and listening.'],
    ['30 Aug – 30 Sep 2026', 'Regular meetings: 30 Aug, 2 Sep, 16 Sep, 25 Sep, 30 Sep. Reading, discussing, planning visits.'],
    ['Oct 2026', 'The name is chosen: Pratham Aalo (প্রথম আলো).']
  ] : [
    ['২০ জুলাই ২০২৬', 'দলের সূচনা। শেখার নতুন পরীক্ষা-নিরীক্ষা আর জন্তর মন্তরের জমায়েত দেখে নিপার আহ্বানে সবাই এক হয়।'],
    ['২৫ জুলাই ২০২৬', 'প্রথম বৈঠক। সিদ্ধান্ত হয় — দেখা আর শোনা দিয়ে শুরু হবে।'],
    ['৩০ আগস্ট – ৩০ সেপ্টেম্বর ২০২৬', 'নিয়মিত বৈঠক: ৩০ আগস্ট, ২, ১৬, ২৫ ও ৩০ সেপ্টেম্বর। পড়া, আলোচনা, পরিদর্শনের পরিকল্পনা।'],
    ['অক্টোবর ২০২৬', 'নাম ঠিক হয়: প্রথম আলো।']
  ];
  return (
    <Wrap kicker={en ? 'Journey · five years to a school' : 'যাত্রা · পাঁচ বছরে স্কুল'} title={en ? 'From the first meeting to ≈2031' : 'প্রথম বৈঠক থেকে ≈২০৩১'} lede={en ? 'Each phase brings more light. We are in Year 0–1 — finding our people. West Bengal is confirmed; the exact place is still being studied, none chosen.' : 'প্রতিটি ধাপে আরও আলো। আমরা এখন ০–১ বছরে — মানুষ খোঁজার পর্বে। পশ্চিমবঙ্গ নিশ্চিত; সঠিক জায়গা এখনও যাচাই চলছে, কিছু ঠিক হয়নি।'}>
      <h2 className="font-serif text-[21px]">{en ? 'So far' : 'এ পর্যন্ত'}</h2>
      <ol className="mt-5 space-y-0 border-l pl-0" style={{ borderColor: 'var(--mustard)' }}>
        {past.map(([d, x]) => <li key={d} className="relative pb-7 pl-7"><span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full" style={{ background: 'var(--mustard)' }} /><p className="text-[11.5px] font-semibold uppercase tracking-[0.14em]" style={{ color: 'var(--rust)' }}>{d}</p><p className="mt-1.5 max-w-2xl text-[14.5px] leading-relaxed">{x}</p></li>)}
      </ol>
      <h2 className="mt-6 font-serif text-[21px]">{en ? 'The five-year path' : 'পাঁচ বছরের পথ'}</h2>
      <Roadmap />
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
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-serif text-[19px]" style={{ background: 'var(--mustard-soft)', color: 'var(--rust-deep)' }} lang="bn">{p.initial}</span>
        <div><p className="font-serif text-[16.5px] leading-snug">{p.name}{p.nick ? ` (“${p.nick}”)` : ''}</p><p className="mt-0.5 text-[12.5px]" style={{ color: 'var(--muted)' }}>{en ? p.city : p.cityBn}</p></div>
      </div>
      <p className="mt-4"><Chip tone={p.group === 'core' ? 'glow' : 'sage'}>{p.group === 'core' ? (en ? 'Core Committee' : 'মূল কমিটি') : (en ? 'Volunteer' : 'স্বেচ্ছাসেবী')}</Chip></p>
    </TiltCard>
  );
  return (
    <Wrap kicker={en ? 'Team · real names only' : 'দল · আসল নাম'} title={en ? 'Family and friends, learning together' : 'পরিবার ও বন্ধুরা, একসঙ্গে শিখছি'} lede={en ? 'Name and city only — Core Committee or Volunteer. No photographs, phone numbers or personal emails. Edit anytime in team.json.' : 'শুধু নাম আর শহর — মূল কমিটি বা স্বেচ্ছাসেবী। কোনো ছবি, ফোন নম্বর বা ব্যক্তিগত ইমেল নয়। team.json-এ যেকোনো সময় বদলানো যায়।'}>
      <h2 className="font-serif text-[21px]">{en ? 'Core committee' : 'মূল কমিটি'}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{core.map(p => <Card key={p.name} p={p} />)}</div>
      <h2 className="mt-10 font-serif text-[21px]">{en ? 'Volunteers' : 'স্বেচ্ছাসেবী'}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{vol.map(p => <Card key={p.name} p={p} />)}</div>
    </Wrap>
  );
}

export function JoinBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  const [copied, setCopied] = useState(false);
  const roles = en ? ['Teaching children', 'Content development', 'School visits & field research', 'Admin & logistics', 'Tech & AI', 'Connecting people'] : ['শিশুদের পড়ানো', 'বিষয়বস্তু তৈরি', 'স্কুল পরিদর্শন ও মাঠ-গবেষণা', 'প্রশাসন ও ব্যবস্থাপনা', 'প্রযুক্তি', 'যোগাযোগ'];
  return (
    <Wrap kicker={en ? 'Join · everyone does a bit of everything' : 'যোগ দিন · সবাই মিলে সব কাজ'} title={en ? 'Come learn with us' : 'আমাদের সঙ্গে শিখুন'} lede={en ? 'We grow organically. One evening a week is enough. No identity documents on this site — just the form and an email.' : 'আমরা ধীরে, জৈবভাবে বাড়ি। সপ্তাহে এক সন্ধ্যা দিলেই যথেষ্ট। এই সাইটে কোনো পরিচয়পত্র লাগে না — শুধু ফর্ম আর একটি ইমেল।'}>
      <div className="flex flex-wrap gap-2">{roles.map(r => <Chip key={r} tone="glow">{r}</Chip>)}</div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <TiltCard><h3 className="font-serif text-[18px]">Google Form</h3><p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>{en ? 'Tell us one skill you can share each week. We reply after the Wednesday calls.' : 'সপ্তাহে একটি দক্ষতা ভাগ করে নিতে পারবেন, সেটুকু জানান। বুধবারের আড্ডার পর আমরা উত্তর দিই।'}</p><a href="https://forms.gle/4sy1HH22JPNoBD7U6" target="_blank" rel="noreferrer" className="mt-5 inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-white" style={{ background: 'var(--ink)' }}>{en ? 'Fill the Join form →' : 'যোগ ফর্ম পূরণ করুন →'}</a></TiltCard>
        <TiltCard><h3 className="font-serif text-[18px]">Email</h3><p className="mt-2 text-[15px]"><a className="hand-underline font-medium" href="mailto:prathamaalo2026@gmail.com">prathamaalo2026@gmail.com</a></p><button onClick={async () => { try { await navigator.clipboard.writeText('prathamaalo2026@gmail.com'); } catch {} setCopied(true); setTimeout(() => setCopied(false), 1500); }} className="mt-4 rounded-full border px-4 py-1.5 text-xs" style={{ borderColor: 'var(--line)' }}>{copied ? (en ? 'Copied!' : 'অনুলিপি হয়েছে!') : (en ? 'Copy email' : 'ইমেল অনুলিপি করুন')}</button><p className="mt-4 text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{en ? 'Privacy: no cookies, no trackers. We never ask for identity documents here.' : 'গোপনীয়তা: কোনো কুকি বা ট্র্যাকার নেই। এখানে আমরা কখনো পরিচয়পত্র চাই না।'}</p></TiltCard>
      </div>
    </Wrap>
  );
}

export function LibraryBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  const cats = en ? ['Watch', 'Read', 'Places'] : ['দেখা', 'পড়া', 'জায়গা'];
  const keys = ['Watch', 'Read', 'Places'];
  return (
    <Wrap kicker={en ? 'Library · what we learn from' : 'পাঠাগার · যাদের থেকে শিখি'} title={en ? 'Watch, read, visit' : 'দেখা, পড়া, যাওয়া'} lede={en ? 'Text credits only — we never copy anyone’s identity. One line on why each of them matters to us.' : 'শুধু নামে কৃতজ্ঞতা — আমরা কারও পরিচয় নকল করি না। প্রত্যেকে কেন আমাদের কাছে গুরুত্বপূর্ণ, এক লাইনে।'}>
      {keys.map((k, idx) => (
        <div key={k} className="mb-9"><h2 className="font-serif text-[21px]">{cats[idx]}</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">{(library as { cat: string; title: string; why: string }[]).filter(l => l.cat === k).map(l => <TiltCard key={l.title}><p className="font-serif text-[16.5px] leading-snug">{l.title}</p><p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>Why: {l.why}</p></TiltCard>)}</div></div>
      ))}
    </Wrap>
  );
}

export function ContactBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  return (
    <Wrap kicker={en ? 'Contact' : 'যোগাযোগ'} title={en ? 'Say hello — we reply slowly, honestly' : 'কথা বলুন — ধীরে হলেও সৎ উত্তর দিই'} lede={en ? 'Email works best. If you are an NGO or a school, tell us who you are — we begin by listening.' : 'ইমেলই সবচেয়ে ভালো। আপনি এনজিও বা স্কুল হলে আপনাদের পরিচয় জানান — আমরা শোনা দিয়ে শুরু করি।'}>
      <div className="grid gap-4 md:grid-cols-2">
        <TiltCard><h3 className="font-serif text-[18px]">Email</h3><a href="mailto:prathamaalo2026@gmail.com" className="hand-underline text-[15px] font-medium">prathamaalo2026@gmail.com</a><p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{en ? 'For joining, visits and collaboration. No donations.' : 'যোগ দেওয়া, পরিদর্শন ও সহযোগিতার জন্য। অনুদান নয়।'}</p></TiltCard>
        <TiltCard><h3 className="font-serif text-[18px]">{en ? 'Elsewhere' : 'অন্যান্য মাধ্যম'}</h3><p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{en ? 'WhatsApp, Instagram and Facebook are omitted until real links exist.' : 'আসল লিংক না হওয়া পর্যন্ত হোয়াটসঅ্যাপ, ইনস্টাগ্রাম ও ফেসবুক দেওয়া হচ্ছে না।'}</p></TiltCard>
      </div>
    </Wrap>
  );
}

export function BrandBody() {
  const { lang } = useLang(); const en = lang !== 'bn';
  return (
    <Wrap kicker="Brand · design system" title={en ? 'Logo, colour, type, motion' : 'লোগো, রং, হরফ, গতি'} lede={en ? 'Recommended: Direction A — the matra-horizon with a rising half-sun. B is a single kantha-stitch stroke, C a slate of rays. A is live across the site.' : 'প্রস্তাব: A — মাত্রা-রেখা দিগন্ত আর উদীয়মান অর্ধসূর্য। B এক-টানে কাঁথা-সেলাই, C স্লেটের রশ্মি। A সারা সাইটে চালু আছে।'}>
      <h2 className="font-serif text-[21px]">Logo — 3 directions</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {[{ s: '/brand/logo-primary.svg', n: 'A · Matra horizon (Recommended)' }, { s: '/brand/logo-alt-b.svg', n: 'B · Kantha stroke' }, { s: '/brand/logo-alt-c.svg', n: 'C · Slate rays' }].map(l => (
          <TiltCard key={l.n} className="text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={l.s} alt={l.n} className="mx-auto" width={260} height={160} /><p className="mt-3 text-[13px] font-medium">{l.n}</p></TiltCard>
        ))}
      </div>
      <h2 className="mt-10 font-serif text-[21px]">Tokens</h2>
      <div className="mt-4 flex flex-wrap gap-2.5">
        {[['Paper', '#FAF7F0'], ['Ink', '#211C15'], ['Indigo', '#2B2F6B'], ['Rust', '#B0512C'], ['Mustard', '#C99A3C'], ['Sage', '#6F8F72']].map(([n, c]) => (
          <span key={n} className="flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs" style={{ borderColor: 'var(--line-soft)', background: 'var(--surface)' }}><span className="h-4 w-4 rounded-full border" style={{ background: c, borderColor: 'var(--line-soft)' }} />{n} {c}</span>
        ))}
      </div>
      <div className="mt-4 rounded-2xl border p-6 text-[14px] leading-relaxed" style={{ borderColor: 'var(--line-soft)', background: 'var(--surface)' }}>Sunrise gradient · indigo → rust → mustard, used sparingly. Paper background, ink text, one restrained accent per view.</div>
      <h2 className="mt-8 font-serif text-[21px]">Type and motion</h2>
      <p className="mt-2 max-w-3xl text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>English headings Fraunces · English body Inter · Bengali headings Noto Serif Bengali · Bengali body Noto Sans Bengali. Bengali line-height ≥1.75, ≥17px. Durations: 1.2s / 0.6s / 0.35s. Motion is transform and opacity only, with a static fallback.</p>
      <h2 className="mt-8 font-serif text-[21px]">Clear space and cautions</h2>
      <p className="mt-2 max-w-3xl text-[14px] leading-relaxed" style={{ color: 'var(--muted)' }}>Clear space equals the height of the sun. Never use a newspaper-style masthead, daily or news language, others’ logos, donation buttons, photographs of children, or invented numbers.</p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        {['/brand/logo-primary.svg', '/brand/logo-mono.svg', '/brand/icon.svg', '/brand/og.svg'].map(s => <a key={s} href={s} className="hand-underline">{s}</a>)}
      </div>
    </Wrap>
  );
}
