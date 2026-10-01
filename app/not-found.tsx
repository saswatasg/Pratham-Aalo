import Link from 'next/link';
export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-5 py-28 text-center">
      <p className="eyebrow">404</p>
      <h1 className="fluid-h2 mt-4 font-serif">Looks like the light hasn’t reached this page yet.</h1>
      <p className="lede mt-4" lang="bn">আলো এখনও এখানে পৌঁছায়নি। ফিরে চলুন শুরুর পাতায়।</p>
      <Link href="/" className="mt-8 inline-block rounded-full px-6 py-3 text-sm font-semibold text-white" style={{ background: 'var(--ink)' }}>Back home →</Link>
    </main>
  );
}
