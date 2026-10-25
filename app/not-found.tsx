import Link from "next/link";
export default function NotFound() {
  return <main className="container flex min-h-[60vh] flex-col items-start justify-center py-16"><p className="eyebrow">404 · Page not found</p><h1 className="mt-3 text-4xl font-black">That page isn&apos;t in the drawing set.</h1><p className="muted mt-4">The link may be outdated or the page may have moved.</p><Link href="/" className="btn-primary mt-7">Return home</Link></main>;
}
