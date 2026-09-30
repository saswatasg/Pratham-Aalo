import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://pratham-aalo.vercel.app';
  const routes = ['', '/why', '/learn', '/now', '/journey', '/team', '/join', '/library', '/contact', '/brand'];
  const all = [...routes, ...routes.map(r => `/bn${r === '' ? '' : r}`), '/bn'];
  const uniq = all.filter((v, i, a) => a.indexOf(v) === i);
  return uniq.map(r => ({ url: `${base}${r === '' ? '/' : r}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: r === '' ? 1 : 0.7 }));
}
