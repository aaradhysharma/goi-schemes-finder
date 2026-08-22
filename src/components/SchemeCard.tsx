'use client';

import Link from 'next/link';
import { Scheme } from '@/lib/schemes-data';
import { EligibilityResult } from '@/lib/eligibility-engine';
import EligibilityMeter from './EligibilityMeter';
import BookmarkButton from './BookmarkButton';

interface SchemeCardProps {
  scheme: Scheme;
  eligibilityResult?: EligibilityResult;
  showEligibility?: boolean;
  animationDelay?: number;
}

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

export default function SchemeCard({
  scheme,
  eligibilityResult,
  showEligibility = false,
  animationDelay = 0,
}: SchemeCardProps) {
  return (
    <div
      className="glass rounded-xl overflow-hidden card-hover opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}s`, animationFillMode: 'forwards' }}
    >
      {/* Category Badge */}
      <div className={`h-1.5 bg-gradient-to-r ${categoryColors[scheme.category]}`} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl" aria-hidden="true">{categoryIcons[scheme.category]}</span>
            <div>
              <h3 className="font-semibold text-white text-lg leading-tight">
                <Link href={`/schemes/${scheme.id}`} className="hover:text-saffron transition-colors">
                  {scheme.shortName}
                </Link>
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">{scheme.ministry}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {scheme.featured && (
              <span className="px-2 py-1 bg-saffron/20 text-saffron text-xs font-medium rounded-full whitespace-nowrap">
                Featured
              </span>
            )}
            <BookmarkButton schemeId={scheme.id} />
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {scheme.description}
        </p>

        {/* Max Benefit */}
        <div className="bg-navy-light/50 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-400 mb-1">Maximum Benefit</p>
          <p className="text-saffron font-semibold text-sm">{scheme.maxBenefit}</p>
        </div>

        {/* Eligibility Score */}
        {showEligibility && eligibilityResult && (
          <div className="mb-4">
            <EligibilityMeter
              score={eligibilityResult.score}
              recommendation={eligibilityResult.recommendation}
            />
          </div>
        )}

        {/* Key Benefits */}
        <div className="mb-4">
          <p className="text-xs text-gray-400 mb-2">Key Benefits</p>
          <div className="flex flex-wrap gap-2">
            {scheme.benefits.slice(0, 3).map((benefit, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-navy-lighter/50 text-gray-300 text-xs rounded"
              >
                {benefit.length > 30 ? benefit.slice(0, 30) + '...' : benefit}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            href={`/schemes/${scheme.id}`}
            className="flex-1 text-center py-2.5 px-4 bg-navy-lighter hover:bg-navy-lighter/70 text-white text-sm font-medium rounded-lg transition-colors"
          >
            View Details
          </Link>
          <a
            href={scheme.officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 bg-saffron hover:bg-saffron-dark text-navy text-sm font-medium rounded-lg transition-colors"
          >
            Apply →
          </a>
        </div>
      </div>
    </div>
  );
}

