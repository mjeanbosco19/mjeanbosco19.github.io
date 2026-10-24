import Link from 'next/link';
import { person } from '@/content/profile';

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SiteHeader() {
  return (
    <header className="border-b border-rule/70">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="signage text-lg tracking-tight text-ink"
          aria-label={`${person.name}, home`}
        >
          JBM
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 text-[0.95rem] sm:gap-7">
          <Link href="/#work" className="hidden text-muted hover:text-ink sm:inline">
            Work
          </Link>
          <Link href="/#experience" className="hidden text-muted hover:text-ink sm:inline">
            Experience
          </Link>
          <Link href="/#contact" className="text-muted hover:text-ink">
            Contact
          </Link>
          <a
            href="/cv.pdf"
            className="rounded-md border border-beacon/70 px-3 py-1.5 font-medium text-beacon hover:bg-beacon hover:text-night"
          >
            Download CV
          </a>
        </nav>
      </Container>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule/70 py-10 text-sm text-muted">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {person.name}, {person.location}
        </p>
        <p>
          Built with Next.js and deployed from{' '}
          <a className="link" href="https://github.com/mjeanbosco19/mjeanbosco19.github.io">
            its public repository
          </a>
          .
        </p>
      </Container>
    </footer>
  );
}

export function SectionTitle({
  id,
  children,
  lead,
}: {
  id: string;
  children: React.ReactNode;
  lead?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      <h2 id={id} className="signage scroll-mt-24 text-3xl text-ink sm:text-4xl">
        {children}
      </h2>
      {lead ? <p className="mt-3 text-muted">{lead}</p> : null}
    </div>
  );
}
