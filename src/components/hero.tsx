import { Container } from '@/components/chrome';
import { person } from '@/content/profile';

/** Staff-ID badge: the white studio portrait becomes a deliberate light card. */
function IdBadge() {
  return (
    <figure className="relative mx-auto w-full max-w-[19rem] rotate-[-2deg] motion-reduce:rotate-0 lg:mx-0 lg:ml-auto">
      <div
        className="absolute -top-5 left-1/2 h-8 w-3 -translate-x-1/2 rounded-sm bg-rule"
        aria-hidden="true"
      />
      <div className="overflow-hidden rounded-2xl bg-badge text-badge-ink shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)]">
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
          <span className="signage text-sm">JBM</span>
          <span className="mx-auto mt-0 h-2 w-14 rounded-full bg-badge-ink/15" aria-hidden="true" />
          <span className="text-xs font-medium">Kigali</span>
        </div>
        {/* Static export: plain responsive img, so phones fetch the 480 px file. */}
        <img
          src="/portrait-480.webp"
          srcSet="/portrait-480.webp 480w, /portrait-960.webp 960w"
          sizes="(min-width: 1024px) 19rem, 80vw"
          alt={`Portrait of ${person.name}`}
          width={480}
          height={640}
          fetchPriority="high"
          className="aspect-[3/4] w-full object-cover"
        />
        <figcaption className="px-5 pt-4 pb-5">
          <p className="text-lg leading-tight font-bold">{person.name}</p>
          <p className="mt-1 text-sm text-badge-ink/75">Software engineer</p>
        </figcaption>
        <a
          href={person.award.url}
          className="block bg-beacon px-5 py-3 text-sm leading-snug font-semibold text-night hover:underline"
        >
          {person.award.title}
          <span className="block font-normal">{person.award.org}</span>
        </a>
      </div>
    </figure>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-14 pb-16 sm:pt-20">
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h1 id="hero-title" className="signage text-[clamp(2.6rem,5.6vw,5rem)] leading-[0.92] text-ink">
            Jean Bosco
            <br />
            Mugiraneza
          </h1>
          <p className="mt-8 max-w-[30ch] text-2xl leading-snug font-medium text-ink sm:text-[1.75rem]">
            {person.statement}
          </p>
          <p className="mt-5 max-w-[62ch] text-muted">{person.intro}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-md bg-beacon px-5 py-3 font-semibold text-night hover:bg-beacon/90"
            >
              See my work
            </a>
            <a
              href={`mailto:${person.email}`}
              className="rounded-md border border-rule px-5 py-3 font-medium text-ink hover:border-muted"
            >
              Email me
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <IdBadge />
        </div>
      </Container>
    </section>
  );
}
