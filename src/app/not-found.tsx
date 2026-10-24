import Link from 'next/link';
import { Container } from '@/components/chrome';

export default function NotFound() {
  return (
    <Container className="py-28">
      <p className="font-mono text-sm text-muted">HTTP 404</p>
      <h1 className="signage mt-3 text-4xl text-ink sm:text-5xl">This page doesn’t exist</h1>
      <p className="mt-4 max-w-[52ch] text-muted">
        The link may be old or mistyped. Start again from the home page.
      </p>
      <Link href="/" className="mt-8 inline-block rounded-md bg-beacon px-5 py-3 font-semibold text-night">
        Go to the home page
      </Link>
    </Container>
  );
}
