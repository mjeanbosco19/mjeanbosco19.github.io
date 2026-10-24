import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Container } from '@/components/chrome';
import { caseStudies } from '@/content/profile';

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const c = caseStudies.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: c.title,
    description: c.summary,
    alternates: { canonical: `/work/${c.slug}/` },
    openGraph: { title: c.title, description: c.summary, url: `/work/${c.slug}/` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = caseStudies.findIndex((x) => x.slug === slug);
  const c = caseStudies[index];
  if (!c) notFound();
  const next = caseStudies[(index + 1) % caseStudies.length]!;

  return (
    <article className="pt-12 pb-8">
      <Container>
        <Link href="/#work" className="text-sm text-muted hover:text-ink">
          Back to all work
        </Link>

        <header className="mt-8 max-w-4xl">
          <p className="text-muted">{c.period}</p>
          <h1 className="signage mt-3 text-[clamp(2rem,5vw,3.6rem)] leading-[1.02] text-ink">{c.title}</h1>
          <p className="mt-6 max-w-[62ch] text-xl leading-relaxed text-ink/90">{c.summary}</p>
        </header>

        <dl className="mt-12 grid gap-px overflow-hidden rounded-xl border border-rule bg-rule sm:grid-cols-3">
          {c.results.map((r) => (
            <div key={r.label} className="bg-panel p-6">
              <dt className="sr-only">{r.label}</dt>
              <dd className="signage text-2xl text-beacon sm:text-[1.7rem]">{r.value}</dd>
              <dd className="mt-2 text-sm text-muted">{r.label}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <aside className="space-y-8 lg:col-span-4">
            <div>
              <h2 className="font-semibold text-ink">My role</h2>
              <p className="mt-2 text-muted">{c.role}</p>
            </div>
            <div>
              <h2 className="font-semibold text-ink">Stack</h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {c.stack.map((s) => (
                  <li key={s} className="rounded-md border border-rule px-2.5 py-1 text-sm text-muted">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-ink">Links</h2>
              <ul className="mt-2 space-y-1.5">
                {c.links.map((l) => (
                  <li key={l.url}>
                    <a className="link" href={l.url}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="lg:col-span-8">
            <h2 className="signage text-2xl text-ink">The problem</h2>
            <p className="mt-4 max-w-[64ch] text-ink/90">{c.context}</p>

            <h2 className="signage mt-12 text-2xl text-ink">What I built</h2>
            <ul className="mt-5 max-w-[64ch] space-y-4">
              {c.built.map((b) => (
                <li key={b} className="relative pl-6 text-ink/90">
                  <span
                    className="absolute top-[0.7em] left-0 h-1.5 w-3 rounded-full bg-beacon"
                    aria-hidden="true"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <nav aria-label="Next case study" className="mt-20 border-t border-rule pt-8">
          <p className="text-sm text-muted">Next case study</p>
          <Link href={`/work/${next.slug}/`} className="link mt-1 inline-block text-xl font-semibold">
            {next.title}
          </Link>
        </nav>
      </Container>
    </article>
  );
}
