'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemeCard from '@/components/SchemeCard';
import { schemes, Scheme, searchSchemes } from '@/lib/schemes-data';

const CATEGORY_LABELS: Record<Scheme['category'], string> = {
  startup: 'Startup & Entrepreneurship',
  technology: 'Technology & IT',
  solar: 'Solar & Renewable',
  manufacturing: 'Manufacturing',
  innovation: 'Innovation',
  msme: 'MSME',
  women: 'Women Entrepreneurs',
};

function SchemesContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') as Scheme['category'] | null;
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Scheme['category'] | 'all'>(
    categoryParam || 'all'
  );

  const filteredSchemes = useMemo(() => {
    let result = schemes;

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(scheme => scheme.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      result = searchSchemes(searchQuery);
      if (selectedCategory !== 'all') {
        result = result.filter(scheme => scheme.category === selectedCategory);
      }
    }

    return result;
  }, [selectedCategory, searchQuery]);

  const categories = Object.keys(CATEGORY_LABELS) as Scheme['category'][];

  return (
    <main className="min-h-screen">
      <Header />
      
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              All Government Schemes
            </h1>
            <p className="text-gray-400">
              Browse {schemes.length}+ schemes across various categories
            </p>
          </div>

          {/* Search and Filter */}
          <div className="glass rounded-xl p-4 sm:p-6 mb-8">
            {/* Search Bar */}
            <div className="relative mb-4">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search schemes by name, ministry, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-12"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-saffron text-navy'
                    : 'bg-navy-lighter text-gray-300 hover:bg-navy-lighter/70'
                }`}
              >
                All ({schemes.length})
              </button>
              {categories.map((category) => {
                const count = schemes.filter(s => s.category === category).length;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-saffron text-navy'
                        : 'bg-navy-lighter text-gray-300 hover:bg-navy-lighter/70'
                    }`}
                  >
                    {CATEGORY_LABELS[category]} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-400">
              Showing {filteredSchemes.length} scheme{filteredSchemes.length !== 1 ? 's' : ''}
              {selectedCategory !== 'all' && ` in ${CATEGORY_LABELS[selectedCategory]}`}
            </p>
          </div>

          {/* Schemes Grid */}
          {filteredSchemes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSchemes.map((scheme, index) => (
                <SchemeCard
                  key={scheme.id}
                  scheme={scheme}
                  animationDelay={Math.min(index * 0.05, 0.5)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-6xl mb-4">🔍</p>
              <h2 className="text-2xl font-bold text-white mb-2">No Schemes Found</h2>
              <p className="text-gray-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default function SchemesPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen">
        <Header />
        <div className="pt-24 pb-16 px-4 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin w-12 h-12 border-4 border-saffron border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-400">Loading schemes...</p>
          </div>
        </div>
      </main>
    }>
      <SchemesContent />
    </Suspense>
  );
}

