# Pratham Aalo — a learning collective

Bilingual (EN primary + verified BN) light-only elegant Next.js site. No backend, no trackers, no donations, no dark mode.

Note: the English descriptor “Dawn” appears in the footer only, by request.

## Run
```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit copy
- `src/content/en/common.json`, `src/content/bn/common.json` — nav, hero, footer. Bengali is verified (no TODOs).
- `src/data/*.json` — `team.json` (name+city+group only: core|volunteer), `timeline.json` (5 phases, `here:true` = marker), `visits.json`, `ideas.json`, `library.json`, `faq.json`.

## Add/remove team member
Edit `src/data/team.json`: `{name,nick,group:core|volunteer,city,cityBn,initial}`. Avatar = initial medallion, auto. No individual roles — card shows Core Committee / Volunteer badge only.

## Swap Google Form URL
Search `forms.gle/4sy1HH22JPNoBD7U6` in `src/` (Join + Footer + JoinBody) and replace.

## Update statuses
Visits shown neutrally by request (no sensitive disclosure). Edit `src/data/visits.json` `status` field; chips render automatically.

## Logo
- Recommended **A · matra-horizon + half-sun** is live (`/public/brand/logo-primary.svg`), fine-line elegant weight.
- Alternatives: `logo-alt-b.svg` (kantha stroke), `logo-alt-c.svg` (slate). Set: `logo-mono.svg`, `icon.svg` (favicon), `og.svg` (1200×630).
- Brand sheet: `/brand`.

## Deploy (Vercel, account saswatasg@gmail.com)
1. Push `main` to https://github.com/saswatasg/Pratham-Aalo
2. Vercel → Add New Project → Import repo → Framework: Next.js (auto) → no env vars → Deploy.
3. Custom domain later (candidates: alo.foundation, alo-school.org, alo.ngo).

## QA checklist
- [ ] BN renders (Noto fonts, lh≥1.9), no TODOs remain
- [ ] 360px mobile nav works, no horizontal scroll
- [ ] Light-only, no theme toggle; reduced-motion respected
- [ ] Keyboard: skip-link, focus rings, FAQ `<details>` operable
- [ ] Lighthouse ≥95 mobile, LCP <2.5s, no layout shift
- [ ] No children photos, no invented numbers, no donation UI, “Dawn” footer-only
