'use client';

import Link from 'next/link';
import Image from 'next/image';
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
      
      {/* Government Banner */}
      <div className="bg-gradient-to-r from-saffron via-white to-green-india h-1.5 fixed top-16 left-0 right-0 z-40"></div>
      
      {/* Hero Section with PM Modi */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-india/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              {/* Official Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-navy-light border border-saffron/30 mb-6 animate-fade-in">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                  alt="Emblem of India"
                  width={24}
                  height={28}
                  className="opacity-80"
                />
                <span className="text-gray-300 text-sm font-medium">
                  सत्यमेव जयते | Government of India Initiative
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-saffron-light">
                  सबका साथ, सबका विकास
                </span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl">
                  Find Government Schemes for Your Business
                </span>
              </h1>

              {/* Quote from PM */}
              <blockquote className="border-l-4 border-saffron pl-4 my-6 animate-fade-in-up stagger-1">
                <p className="text-gray-300 italic text-lg">
                  &ldquo;The government&apos;s aim is to make India the world&apos;s startup capital. We are creating an ecosystem where innovation thrives.&rdquo;
                </p>
                <cite className="text-saffron text-sm mt-2 block not-italic font-medium">
                  — Hon&apos;ble Prime Minister Shri Narendra Modi
                </cite>
              </blockquote>

              {/* Subheadline */}
              <p className="text-gray-400 mb-8 animate-fade-in-up stagger-2">
                Access <strong className="text-white">{schemes.length}+ government schemes</strong> for startups, MSMEs, 
                technology ventures & more. Get personalized eligibility scores and direct application links.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
                <Link
                  href="/questionnaire"
                  className="btn-primary text-lg px-8 py-4 animate-pulse-glow flex items-center justify-center gap-2"
                >
                  <span>Check Your Eligibility</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/schemes"
                  className="btn-secondary text-lg px-8 py-4 flex items-center justify-center gap-2"
                >
                  <span>Browse All Schemes</span>
                </Link>
              </div>

              {/* Mini Stats */}
              <div className="flex flex-wrap gap-6 mt-10 animate-fade-in-up stagger-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-saffron/20 flex items-center justify-center">
                    <span className="text-saffron font-bold">{schemes.length}+</span>
                  </div>
                  <span className="text-gray-400 text-sm">Active Schemes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-india/20 flex items-center justify-center">
                    <span className="text-green-400 font-bold">36</span>
                  </div>
                  <span className="text-gray-400 text-sm">States & UTs</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <span className="text-blue-400 font-bold">₹Cr</span>
                  </div>
                  <span className="text-gray-400 text-sm">In Benefits</span>
                </div>
              </div>
            </div>

            {/* Right - PM Modi Image */}
            <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-4 bg-gradient-to-br from-saffron/30 via-transparent to-green-india/30 rounded-full blur-xl"></div>
                
                {/* Main image container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-saffron/40 shadow-2xl shadow-saffron/20">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/PM_Modi_2015.jpg/800px-PM_Modi_2015.jpg"
                    alt="Hon'ble Prime Minister Shri Narendra Modi"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
                
                {/* Name badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-navy-light border border-saffron/30 px-6 py-2 rounded-full shadow-lg">
                  <p className="text-white text-sm font-medium whitespace-nowrap">
                    श्री नरेन्द्र मोदी
                  </p>
                  <p className="text-gray-400 text-xs text-center">Prime Minister</p>
                </div>

                {/* Ashoka Chakra decoration */}
                <div className="absolute -top-2 -right-2 w-16 h-16 opacity-30">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-saffron">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
                    {[...Array(24)].map((_, i) => (
                      <line
                        key={i}
                        x1="50"
                        y1="10"
                        x2="50"
                        y2="25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        transform={`rotate(${i * 15} 50 50)`}
                      />
                    ))}
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Initiatives Banner */}
      <section className="py-6 px-4 bg-gradient-to-r from-navy-light via-navy to-navy-light border-y border-saffron/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-saffron">★</span> Startup India
            </span>
            <span className="flex items-center gap-2">
              <span className="text-saffron">★</span> Make in India
            </span>
            <span className="flex items-center gap-2">
              <span className="text-saffron">★</span> Digital India
            </span>
            <span className="flex items-center gap-2">
              <span className="text-saffron">★</span> Atmanirbhar Bharat
            </span>
            <span className="flex items-center gap-2">
              <span className="text-saffron">★</span> PM Surya Ghar
            </span>
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

      {/* Vision Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-navy-light/30 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Vision for <span className="text-saffron">New India</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass p-6 rounded-xl text-center card-hover">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-saffron font-semibold mb-2">100,000+ Startups</h3>
              <p className="text-gray-400 text-sm">Registered under Startup India initiative since 2016</p>
            </div>
            <div className="glass p-6 rounded-xl text-center card-hover">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-saffron font-semibold mb-2">₹10,000+ Crore</h3>
              <p className="text-gray-400 text-sm">Fund of Funds for startup ecosystem</p>
            </div>
            <div className="glass p-6 rounded-xl text-center card-hover">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-saffron font-semibold mb-2">63 Million MSMEs</h3>
              <p className="text-gray-400 text-sm">Contributing 30% to India&apos;s GDP</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-saffron/20">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-saffron/20 to-saffron-dark/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,153,51,0.3),transparent_50%)]" />
            
            {/* Content */}
            <div className="relative p-8 sm:p-12 text-center">
              <div className="inline-flex items-center gap-2 mb-6 text-gray-400 text-sm">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg"
                  alt="Emblem"
                  width={20}
                  height={24}
                  className="opacity-60"
                />
                <span>भारत सरकार की पहल</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                आज ही अपनी पात्रता जांचें
              </h2>
              <p className="text-xl text-saffron mb-2">Ready to Find Your Scheme?</p>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Answer a few simple questions about your business and discover government schemes 
                tailored specifically for you. It takes less than 2 minutes.
              </p>
              <Link
                href="/questionnaire"
                className="inline-flex items-center gap-2 btn-primary text-lg px-8 py-4"
              >
                Check Your Eligibility Free
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <p className="text-gray-500 text-xs mt-4">No registration required • 100% Free • Direct links to official portals</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
