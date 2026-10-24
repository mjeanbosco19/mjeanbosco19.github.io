import type { MetadataRoute } from 'next';
import { caseStudies, person } from '@/content/profile';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${person.site}/`, changeFrequency: 'monthly', priority: 1 },
    ...caseStudies.map((c) => ({
      url: `${person.site}/work/${c.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}
