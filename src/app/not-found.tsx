import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 px-4 flex items-center justify-center min-h-[70vh]">
        <div className="glass rounded-2xl p-8 sm:p-12 text-center max-w-lg mx-auto">
          <p className="text-6xl mb-4" aria-hidden="true">🧭</p>
          <h1 className="text-3xl font-bold text-white mb-2">404</h1>
          <p className="text-xl text-white font-semibold mb-2">Page Not Found</p>
          <p className="text-gray-400 mb-8">
            The page you&apos;re looking for doesn&apos;t exist. Explore the
            schemes or check your eligibility instead.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/schemes" className="btn-primary text-center">
              Browse Schemes
            </Link>
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
