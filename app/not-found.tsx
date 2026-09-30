import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="font-serif text-6xl">🌅</p>
      <h1 className="fluid-h2 mt-4 font-serif font-black">Looks like the light hasn’t reached this page yet.</h1>
      <p className="mt-3" style={{ color: 'var(--muted)' }}>আলো এখনও এখানে পৌঁছায়নি। Let’s walk back to dawn.</p>
      <Link href="/" className="mt-6 inline-block rounded-full px-6 py-3 font-semibold text-white" style={{ background: 'var(--dawn-gradient)' }}>Back home →</Link>
    </main>
  );
}
