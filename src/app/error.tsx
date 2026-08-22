'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 px-4 flex items-center justify-center min-h-[70vh]">
        <div className="glass rounded-2xl p-8 sm:p-12 text-center max-w-lg mx-auto">
          <p className="text-6xl mb-4" aria-hidden="true">⚠️</p>
          <h1 className="text-2xl font-bold text-white mb-2">Something went wrong</h1>
          <p className="text-gray-400 mb-8">
            An unexpected error occurred. Try again — if it keeps happening,
            please come back later.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={reset} className="btn-primary">
              Try Again
            </button>
            <Link href="/" className="btn-secondary text-center">
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
