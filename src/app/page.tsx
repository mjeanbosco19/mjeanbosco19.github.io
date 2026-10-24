import Link from 'next/link';
import { Container, SectionTitle } from '@/components/chrome';
import { Hero } from '@/components/hero';
import { StatusBoard } from '@/components/status-board';
import {
  awards,
  caseStudies,
  certifications,
  education,
  experience,
  person,
  skills,
} from '@/content/profile';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: person.name,
  jobTitle: 'Software Engineer',
  url: person.site,
  image: `${person.site}/portrait-960.webp`,
  address: { '@type': 'PostalAddress', addressLocality: 'Kigali', addressCountry: 'RW' },
  worksFor: [
    { '@type': 'GovernmentOrganization', name: 'Rwanda Ministry of Health' },
    { '@type': 'Organization', name: 'ETITE Ltd' },
  ],
  award: `${person.award.title}, ${person.award.org}`,
  sameAs: [person.linkedin, person.github],
};

function Work() {
  const [featured, ...rest] = caseStudies;
  return (
    <section className="py-20">
      <Container>
        <SectionTitle id="work" lead="Four bodies of work, and what I built in each.">
          Selected work
        </SectionTitle>

        {featured ? (
          <article className="grid gap-8 border-t border-rule pt-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h3 className="text-2xl leading-snug font-semibold text-ink sm:text-3xl">{featured.title}</h3>
              <p className="mt-4 max-w-[60ch] text-muted">{featured.summary}</p>
              <p className="mt-4 max-w-[60ch] text-ink/90">{featured.role}</p>
              <Link href={`/work/${featured.slug}/`} className="link mt-6 inline-block font-medium">
                Read the eBanguka case study
              </Link>
            </div>
            <dl className="grid content-start gap-6 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
              {featured.results.map((r) => (
                <div key={r.label} className="border-l-2 border-beacon pl-4">
                  <dt className="sr-only">{r.label}</dt>
                  <dd className="signage text-2xl text-ink">{r.value}</dd>
                  <dd className="mt-1 text-sm text-muted">{r.label}</dd>
                </div>
              ))}
            </dl>
          </article>
        ) : null}

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-rule bg-rule md:grid-cols-3">
          {rest.map((c) => (
            <article key={c.slug} className="flex flex-col bg-night p-6">
              <p className="text-sm text-muted">{c.period}</p>
              <h3 className="mt-2 text-xl leading-snug font-semibold text-ink">{c.title}</h3>
              <p className="mt-3 text-[0.95rem] text-muted">{c.summary}</p>
              {c.results[0] ? (
                <p className="mt-5 text-[0.95rem]">
                  <span className="font-semibold text-beacon">{c.results[0].value}</span>{' '}
                  <span className="text-muted">{c.results[0].label.toLowerCase()}</span>
                </p>
              ) : null}
              <Link href={`/work/${c.slug}/`} className="link mt-auto pt-6 font-medium">
                Read the case study
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Experience() {
  return (
    <section className="py-20">
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionTitle
            id="experience"
            lead="Six years of building software, most recently for the national health system."
          >
            Experience
          </SectionTitle>
        </div>
        <ol className="relative border-l border-rule lg:col-span-8">
          {experience.map((e) => (
            <li key={e.title} className="relative pb-10 pl-8 last:pb-0">
              <span
                className="absolute top-2 -left-[5px] h-2.5 w-2.5 rounded-full border-2 border-night bg-beacon"
                aria-hidden="true"
              />
              <p className="text-sm text-muted tabular-nums">{e.period}</p>
              <h3 className="mt-1 text-xl font-semibold text-ink">{e.title}</h3>
              <p className="text-ink/90">{e.org}</p>
              <p className="mt-2 max-w-[60ch] text-muted">{e.note}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Capabilities() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle id="skills" lead="Tools I use in production, grouped by where they sit in a system.">
          Skills
        </SectionTitle>
        <dl className="grid gap-x-12 gap-y-6 sm:grid-cols-2">
          {skills.map((s) => (
            <div key={s.group} className="border-t border-rule pt-4">
              <dt className="font-semibold text-ink">{s.group}</dt>
              <dd className="mt-1 text-muted">{s.items}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function Recognition() {
  return (
    <section className="py-20">
      <Container className="grid gap-16 lg:grid-cols-2">
        <div>
          <SectionTitle id="recognition">Recognition</SectionTitle>
          <ul className="space-y-6">
            {awards.map((a) => (
              <li key={a.title} className="grid grid-cols-[5.5rem_1fr] gap-4">
                <span className="pt-0.5 text-sm text-muted tabular-nums">{a.year}</span>
                <div>
                  <p className="font-semibold text-ink">
                    {'url' in a ? (
                      <a className="link" href={a.url}>
                        {a.title}
                      </a>
                    ) : (
                      a.title
                    )}
                  </p>
                  <p className="text-muted">{a.org}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle id="education">Education</SectionTitle>
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.title}>
                <p className="font-semibold text-ink">{e.title}</p>
                <p className="text-muted">{e.detail}</p>
              </li>
            ))}
          </ul>
          <h3 className="mt-10 font-semibold text-ink">Certifications</h3>
          <ul className="mt-3 space-y-1.5 text-muted">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

function Contact() {
  return (
    <section className="py-20">
      <Container>
        <div className="rounded-2xl border border-rule bg-panel px-6 py-12 sm:px-12">
          <h2 id="contact" className="signage scroll-mt-24 text-3xl text-ink sm:text-5xl">
            Let’s talk
          </h2>
          <p className="mt-4 max-w-[52ch] text-muted">
            I’m based in {person.location} and work with teams anywhere. Email is the fastest way to reach me.
          </p>
          <a
            href={`mailto:${person.email}`}
            className="mt-8 inline-block text-xl font-semibold break-all text-beacon hover:underline sm:text-2xl"
          >
            {person.email}
          </a>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            <li>
              <a className="link" href={person.linkedin}>
                LinkedIn
              </a>
            </li>
            <li>
              <a className="link" href={person.github}>
                GitHub
              </a>
            </li>
            <li>
              <a className="link" href="/cv.pdf">
                CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <StatusBoard />
      <Work />
      <Experience />
      <Capabilities />
      <Recognition />
      <Contact />
    </>
  );
}
