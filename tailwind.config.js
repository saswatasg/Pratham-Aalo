/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        surface: 'var(--surface)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        indigo: { dawn: 'var(--indigo)' },
        rust: 'var(--rust)',
        mustard: 'var(--mustard)',
        sage: 'var(--sage)',
        night: 'var(--night)'
      },
      fontFamily: {
        serif: ['Fraunces', '"Noto Serif Bengali"', 'Georgia', 'serif'],
        sans: ['Inter', '"Noto Sans Bengali"', '"Hind Siliguri"', 'system-ui', 'sans-serif'],
        bnSerif: ['"Noto Serif Bengali"', '"Tiro Bangla"', 'Fraunces', 'serif'],
        bnSans: ['"Noto Sans Bengali"', '"Hind Siliguri"', 'Inter', 'sans-serif']
      },
      borderRadius: { soft: '1.25rem', card: '1rem' },
      transitionDuration: { dawn: '1200ms', ray: '600ms', settle: '350ms' }
    }
  },
  plugins: []
};
