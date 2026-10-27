import Link from 'next/link';
import { Container } from '@/components/chrome';
import { systems } from '@/content/profile';
import status from '@/content/status.json';

type Result = { status: number; ok: boolean; version?: string };

const checkedOn = new Date(status.checkedAt).toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Africa/Kigali',
});

/**
 * The page's signature element: the public systems I built, each with a real
 * HTTP check taken at build time (scripts/check-status.mjs).
 */
export function StatusBoard() {
  const results = status.results as Record<string, Result>;

  return (
    <section aria-labelledby="board-title" className="pb-8">
      <Container>
        <div className="overflow-hidden rounded-xl border border-rule bg-panel">
          <div className="flex flex-col gap-1 border-b border-rule px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:px-6">
            <h2 id="board-title" className="signage text-xl text-ink">
              Systems in production
            </h2>
            <p className="text-sm text-muted">
              Public systems I built or co-built. Checked automatically on{' '}
              <time dateTime={status.checkedAt}>{checkedOn}</time>.
            </p>
          </div>

          <table className="w-full border-collapse text-left">
            <thead className="sr-only sm:not-sr-only">
              <tr className="text-sm text-muted">
                <th scope="col" className="px-5 py-3 font-medium sm:px-6">
                  System
                </th>
                <th scope="col" className="hidden px-3 py-3 font-medium md:table-cell">
                  What it does
                </th>
                <th scope="col" className="hidden px-3 py-3 font-medium lg:table-cell">
                  For
                </th>
                <th scope="col" className="px-5 py-3 text-right font-medium sm:px-6">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {systems.map((s, i) => {
                const r = results[s.id] ?? { status: 0, ok: false };
                // A 403 from a Rwanda-only system means it answered and refused a foreign visitor.
                const regionLocked = !r.ok && s.rwandaOnly === true && r.status === 403;
                const live = r.ok || regionLocked;
                return (
                  <tr key={s.id} className="border-t border-rule/70 align-top">
                    <th scope="row" className="px-5 py-4 font-normal sm:px-6">
                      <a href={s.url} className="link font-semibold">
                        {s.name}
                      </a>
                      <p className="mt-1 text-sm text-muted md:hidden">{s.does}</p>
                      {s.caseStudy ? (
                        <Link
                          href={`/work/${s.caseStudy}/`}
                          className="mt-1 block text-sm text-muted hover:text-ink"
                        >
                          Case study
                        </Link>
                      ) : null}
                    </th>
                    <td className="hidden max-w-[34ch] px-3 py-4 text-[0.95rem] text-muted md:table-cell">
                      {s.does}
                    </td>
                    <td className="hidden px-3 py-4 text-[0.95rem] whitespace-nowrap text-muted lg:table-cell">
                      {s.owner}
                    </td>
                    <td className="px-5 py-4 sm:px-6">
                      <div className="flex items-center justify-end gap-2.5">
                        <span
                          className="status-light shrink-0"
                          data-ok={live}
                          style={{ '--row': i } as React.CSSProperties}
                          aria-hidden="true"
                        />
                        <span className="text-[0.95rem] font-medium text-ink">
                          {live ? 'Live' : 'Not checked'}
                        </span>
                      </div>
                      <p className="mt-1 text-right font-mono text-xs whitespace-nowrap text-muted">
                        {regionLocked
                          ? 'Rwanda only'
                          : r.version
                            ? `v${r.version}`
                            : r.status
                              ? `HTTP ${r.status}`
                              : 'no response'}
                      </p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
