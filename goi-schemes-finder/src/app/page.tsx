'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemeCard from '@/components/SchemeCard';
import CategoryCard from '@/components/CategoryCard';
import { schemes, getFeaturedSchemes, Scheme } from '@/lib/schemes-data';

export default function Home() {
  const featuredSchemes = getFeaturedSchemes();
  
  // Count schemes by category
  const categoryCounts: Record<Scheme['category'], number> = {
    startup: 0,
    technology: 0,
    solar: 0,
    manufacturing: 0,
    innovation: 0,
    msme: 0,
    women: 0,
  };
  
  schemes.forEach(scheme => {
    categoryCounts[scheme.category]++;
  });

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 border border-saffron/20 mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-saffron rounded-full animate-pulse"></span>
              <span className="text-saffron text-sm font-medium">
                {schemes.length}+ Government Schemes Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Discover{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-saffron-light">
                Government Schemes
              </span>{' '}
              for Your Business
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Find the perfect GOI scheme for your startup, tech venture, or solar project. 
              Answer a few questions and get personalized recommendations with eligibility scores.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-2">
              <Link
                href="/questionnaire"
                className="btn-primary text-lg px-8 py-4 animate-pulse-glow"
              >
                Find Schemes for Me →
              </Link>
              <Link
                href="/schemes"
                className="btn-secondary text-lg px-8 py-4"
              >
                Browse All Schemes
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 animate-fade-in-up stagger-3">
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-saffron">{schemes.length}+</p>
                <p className="text-gray-400 text-sm mt-1">Schemes Listed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-saffron">7</p>
                <p className="text-gray-400 text-sm mt-1">Categories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-saffron">36</p>
                <p className="text-gray-400 text-sm mt-1">States & UTs</p>
              </div>
              <div className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-saffron">₹100Cr+</p>
                <p className="text-gray-400 text-sm mt-1">Total Benefits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore schemes across different sectors. Click on a category to see all available schemes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(Object.keys(categoryCounts) as Scheme['category'][]).map((category, index) => (
              <CategoryCard
                key={category}
                category={category}
                count={categoryCounts[category]}
                animationDelay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-navy-light/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get personalized scheme recommendations in 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center p-8 rounded-xl glass animate-fade-in-up stagger-1">
              <div className="w-16 h-16 bg-saffron/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">1. Answer Questions</h3>
              <p className="text-gray-400">
                Tell us about your business - state, category, stage, and what you&apos;re looking for.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-8 rounded-xl glass animate-fade-in-up stagger-2">
              <div className="w-16 h-16 bg-saffron/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">2. Get Matched</h3>
              <p className="text-gray-400">
                Our algorithm finds schemes you&apos;re eligible for and calculates your match score.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-8 rounded-xl glass animate-fade-in-up stagger-3">
              <div className="w-16 h-16 bg-saffron/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">3. Apply Directly</h3>
              <p className="text-gray-400">
                Access official portals and apply for schemes with higher chances of success.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/questionnaire" className="btn-primary text-lg px-8 py-4">
              Start Finding Schemes →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Schemes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Featured Schemes
              </h2>
              <p className="text-gray-400">
                Popular and highly beneficial government schemes
              </p>
            </div>
            <Link
              href="/schemes"
              className="hidden sm:flex items-center gap-2 text-saffron hover:text-saffron-light transition-colors"
            >
              View All
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredSchemes.slice(0, 6).map((scheme, index) => (
              <SchemeCard
                key={scheme.id}
                scheme={scheme}
                animationDelay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/schemes" className="btn-secondary">
              View All Schemes →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-saffron-dark/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,153,51,0.3),transparent_50%)]" />
            
            {/* Content */}
            <div className="relative p-8 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Find Your Scheme?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Answer a few questions about your business and discover government schemes 
                tailored specifically for you. It takes less than 2 minutes.
              </p>
              <Link
                href="/questionnaire"
                className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
              >
                Check Your Eligibility
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
