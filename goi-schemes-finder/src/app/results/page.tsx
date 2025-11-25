'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo, Suspense } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemeCard from '@/components/SchemeCard';
import {
  UserProfile,
  BusinessCategory,
  BusinessStage,
  TurnoverRange,
  EmployeeRange,
  InterestType,
} from '@/lib/schemes-data';
import {
  findEligibleSchemes,
  getResultsSummary,
  EligibilityResult,
} from '@/lib/eligibility-engine';

function ResultsContent() {
  const searchParams = useSearchParams();

  const profile: UserProfile = useMemo(() => ({
    state: searchParams.get('state') || '',
    businessCategory: (searchParams.get('category') || 'technology') as BusinessCategory,
    businessStage: (searchParams.get('stage') || 'startup') as BusinessStage,
    turnover: (searchParams.get('turnover') || 'under_25l') as TurnoverRange,
    employees: (searchParams.get('employees') || '2_10') as EmployeeRange,
    interests: (searchParams.get('interests') || '').split(',').filter(Boolean) as InterestType[],
    isWomenOwned: searchParams.get('women') === '1',
    isSC_ST_OBC: searchParams.get('scst') === '1',
  }), [searchParams]);

  const results = useMemo(() => findEligibleSchemes(profile), [profile]);
  const summary = useMemo(() => getResultsSummary(results), [results]);

  const highlyRecommended = results.filter(r => r.recommendation === 'highly_recommended');
  const recommended = results.filter(r => r.recommendation === 'recommended');
  const possible = results.filter(r => r.recommendation === 'possible');

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Your Matched Schemes
            </h1>
            <p className="text-gray-400">
              Based on your profile, here are the schemes you may be eligible for
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            <div className="glass rounded-xl p-4 text-center animate-fade-in-up stagger-1">
              <p className="text-3xl font-bold text-saffron">{summary.total}</p>
              <p className="text-gray-400 text-sm">Total Schemes</p>
            </div>
            <div className="glass rounded-xl p-4 text-center animate-fade-in-up stagger-2">
              <p className="text-3xl font-bold text-green-400">{summary.highlyRecommended}</p>
              <p className="text-gray-400 text-sm">Highly Recommended</p>
            </div>
            <div className="glass rounded-xl p-4 text-center animate-fade-in-up stagger-3">
              <p className="text-3xl font-bold text-yellow-400">{summary.recommended}</p>
              <p className="text-gray-400 text-sm">Recommended</p>
            </div>
            <div className="glass rounded-xl p-4 text-center animate-fade-in-up stagger-4">
              <p className="text-3xl font-bold text-blue-400">{summary.averageScore}%</p>
              <p className="text-gray-400 text-sm">Avg Match Score</p>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="glass rounded-xl p-6 mb-10 animate-fade-in">
            <h2 className="text-lg font-semibold text-white mb-4">Your Profile</h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-navy-lighter rounded-full text-sm text-gray-300">
                📍 {profile.state}
              </span>
              <span className="px-3 py-1 bg-navy-lighter rounded-full text-sm text-gray-300">
                💼 {profile.businessCategory.replace('_', ' ')}
              </span>
              <span className="px-3 py-1 bg-navy-lighter rounded-full text-sm text-gray-300">
                📊 {profile.businessStage} stage
              </span>
              <span className="px-3 py-1 bg-navy-lighter rounded-full text-sm text-gray-300">
                💰 {profile.turnover.replace('_', '-').replace('l', 'L').replace('cr', 'Cr')}
              </span>
              {profile.isWomenOwned && (
                <span className="px-3 py-1 bg-fuchsia-500/20 rounded-full text-sm text-fuchsia-300">
                  👩‍💼 Women-owned
                </span>
              )}
              {profile.isSC_ST_OBC && (
                <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-300">
                  SC/ST/OBC
                </span>
              )}
            </div>
            <div className="mt-4">
              <Link
                href="/questionnaire"
                className="text-saffron hover:text-saffron-light text-sm transition-colors"
              >
                ← Modify your answers
              </Link>
            </div>
          </div>

          {/* Highly Recommended Schemes */}
          {highlyRecommended.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                <h2 className="text-2xl font-bold text-white">
                  Highly Recommended ({highlyRecommended.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlyRecommended.map((result, index) => (
                  <SchemeCard
                    key={result.scheme.id}
                    scheme={result.scheme}
                    eligibilityResult={result}
                    showEligibility={true}
                    animationDelay={index * 0.1}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Recommended Schemes */}
          {recommended.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 bg-saffron rounded-full"></span>
                <h2 className="text-2xl font-bold text-white">
                  Recommended ({recommended.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {recommended.map((result, index) => (
                  <SchemeCard
                    key={result.scheme.id}
                    scheme={result.scheme}
                    eligibilityResult={result}
                    showEligibility={true}
                    animationDelay={index * 0.1}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Possible Schemes */}
          {possible.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                <h2 className="text-2xl font-bold text-white">
                  Possible Match ({possible.length})
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {possible.map((result, index) => (
                  <SchemeCard
                    key={result.scheme.id}
                    scheme={result.scheme}
                    eligibilityResult={result}
                    showEligibility={true}
                    animationDelay={index * 0.1}
                  />
                ))}
              </div>
            </section>
          )}

          {/* No Results */}
          {results.length === 0 && (
            <div className="text-center py-16">
              <p className="text-6xl mb-4">🔍</p>
              <h2 className="text-2xl font-bold text-white mb-2">No Schemes Found</h2>
              <p className="text-gray-400 mb-6">
                We couldn&apos;t find any schemes matching your profile. Try adjusting your answers.
              </p>
              <Link href="/questionnaire" className="btn-primary">
                Try Again
              </Link>
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-12 p-8 glass rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-2">
              Want to explore more options?
            </h3>
            <p className="text-gray-400 mb-6">
              Browse all available schemes or refine your search
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schemes" className="btn-secondary">
                Browse All Schemes
              </Link>
              <Link href="/questionnaire" className="btn-primary">
                Retake Questionnaire
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen">
        <Header />
        <div className="pt-24 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-saffron border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-400">Finding schemes for you...</p>
          </div>
        </div>
      </main>
    }>
      <ResultsContent />
    </Suspense>
  );
}

