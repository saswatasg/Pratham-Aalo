# AGENTS.md — for future AI/human edits

- Honesty is the brand. Never claim: registration, school, site, donations, numbers, press, partners.
- Names: `src/data/team.json` only. Name+role+city. No phones/emails/photos/family/health.
- No photos of children. Illustrations = inline SVG + alpana dividers only.
- Third parties (SECMOL etc.) = text credit only, neutral, no logos.
- Visits: keep neutral wording; do not publish sensitive reply statuses.
- i18n: EN primary. Every EN string needs BN counterpart; mark unsure BN `TODO: verify`. Keep `lang` attributes correct.
- Theme: CSS vars in `src/styles/tokens.css`, `data-theme`. Pre-paint script in `app/layout.tsx` — do not remove (prevents FOUC).
- Motion: transform/opacity only, `prefers-reduced-motion` fallback, ceremony must have Skip and ≤3.4s auto-finish.
- Commits: conventional (`feat:`, `fix:`, `content:`, `brand:`). Do not commit secrets. No backend keys exist.
