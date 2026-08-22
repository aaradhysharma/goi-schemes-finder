import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookmarkButton from '@/components/BookmarkButton';
import { getSchemeById, schemes, Scheme } from '@/lib/schemes-data';

const categoryColors: Record<Scheme['category'], string> = {
  startup: 'from-blue-500 to-blue-600',
  technology: 'from-purple-500 to-purple-600',
  solar: 'from-yellow-500 to-orange-500',
  manufacturing: 'from-green-500 to-green-600',
  innovation: 'from-pink-500 to-rose-500',
  msme: 'from-cyan-500 to-cyan-600',
  women: 'from-fuchsia-500 to-fuchsia-600',
};

const categoryIcons: Record<Scheme['category'], string> = {
  startup: '🚀',
  technology: '💻',
  solar: '☀️',
  manufacturing: '🏭',
  innovation: '💡',
  msme: '📈',
  women: '👩‍💼',
};

export function generateStaticParams() {
  return schemes.map((scheme) => ({ id: scheme.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const scheme = getSchemeById(id);

  if (!scheme) {
    return { title: 'Scheme Not Found' };
  }

  const title = `${scheme.name} — ${scheme.maxBenefit}`;
  const description = `${scheme.description} Apply via the official ${scheme.ministry} portal. Check your eligibility on GOI Schemes Finder.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    },
  };
}

export default async function SchemeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const scheme = getSchemeById(id);

  if (!scheme) {
    return (
      <main className="min-h-screen" id="main-content">
        <Header />
        <div className="pt-24 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <p className="text-6xl mb-4">❌</p>
            <h1 className="text-2xl font-bold text-white mb-2">Scheme Not Found</h1>
            <p className="text-gray-400 mb-6">
              The scheme you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link href="/schemes" className="btn-primary">
              Browse All Schemes
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen" id="main-content">
      <Header />

      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-saffron transition-colors">Home</Link>
            <span>/</span>
            <Link href="/schemes" className="hover:text-saffron transition-colors">Schemes</Link>
            <span>/</span>
            <span className="text-gray-300">{scheme.shortName}</span>
          </nav>

          {/* Header Card */}
          <div className="glass rounded-2xl overflow-hidden mb-8">
            <div className={`h-2 bg-gradient-to-r ${categoryColors[scheme.category]}`} />
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className="w-16 h-16 bg-navy-lighter rounded-xl flex items-center justify-center text-3xl"
                  aria-hidden="true"
                >
                  {categoryIcons[scheme.category]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">
                      {scheme.name}
                    </h1>
                    {scheme.featured && (
                      <span className="px-3 py-1 bg-saffron/20 text-saffron text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                    <BookmarkButton schemeId={scheme.id} />
                  </div>
                  <p className="text-gray-400">{scheme.ministry}</p>
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-6">{scheme.description}</p>

              {/* Max Benefit Highlight */}
              <div className="bg-gradient-to-r from-saffron/20 to-saffron-dark/20 rounded-xl p-6 mb-6">
                <p className="text-sm text-gray-400 mb-2">Maximum Benefit</p>
                <p className="text-2xl font-bold text-saffron">{scheme.maxBenefit}</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={scheme.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center flex-1"
                >
                  Apply on Official Portal →
                </a>
                <Link
                  href="/questionnaire"
                  className="btn-secondary text-center"
                >
                  Check Your Eligibility
                </Link>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Benefits */}
            <div className="glass rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">🎁</span> Benefits
              </h2>
              <ul className="space-y-3">
                {scheme.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className="w-6 h-6 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility */}
            <div className="glass rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">✅</span> Eligibility Criteria
              </h2>
              <ul className="space-y-3">
                {scheme.eligibility.additionalCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className="w-6 h-6 bg-saffron/20 text-saffron rounded-full flex items-center justify-center text-sm flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{criteria}</span>
                  </li>
                ))}
              </ul>

              {/* Business Categories */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-2">Eligible Business Types</p>
                <div className="flex flex-wrap gap-2">
                  {scheme.eligibility.categories.map((cat) => (
                    <span
                      key={cat}
                      className="px-3 py-1 bg-navy-lighter rounded-full text-xs text-gray-300"
                    >
                      {cat.replace('_', ' ')}
                    </span>
                  ))}
                </div>
              </div>

              {/* Business Stages */}
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Eligible Business Stages</p>
                <div className="flex flex-wrap gap-2">
                  {scheme.eligibility.stages.map((stage) => (
                    <span
                      key={stage}
                      className="px-3 py-1 bg-navy-lighter rounded-full text-xs text-gray-300"
                    >
                      {stage}
                    </span>
                  ))}
                </div>
              </div>

              {/* States */}
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Available In</p>
                <span className="px-3 py-1 bg-green-500/20 rounded-full text-xs text-green-400">
                  🇮🇳 {scheme.eligibility.states === 'all'
                    ? 'All States & UTs'
                    : scheme.eligibility.states.join(', ')}
                </span>
              </div>
            </div>

            {/* Application Process */}
            <div className="glass rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">📋</span> How to Apply
              </h2>
              <ol className="space-y-4">
                {scheme.applicationProcess.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-8 h-8 bg-saffron text-navy rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-300 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Documents Required */}
            <div className="glass rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl" aria-hidden="true">📄</span> Documents Required
              </h2>
              <ul className="space-y-3">
                {scheme.documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span
                      className="w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-gray-300">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Official Link CTA */}
          <div className="mt-8 p-8 glass rounded-xl text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              Ready to Apply?
            </h3>
            <p className="text-gray-400 mb-6">
              Visit the official portal to start your application process
            </p>
            <a
              href={scheme.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
            >
              Go to Official Portal
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-gray-500 text-xs mt-4">
              Always verify information on official government websites before applying
            </p>
          </div>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link
              href="/schemes"
              className="text-saffron hover:text-saffron-light transition-colors"
            >
              ← Back to All Schemes
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
