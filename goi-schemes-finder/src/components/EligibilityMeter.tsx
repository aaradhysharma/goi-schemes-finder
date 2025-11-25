'use client';

import { EligibilityResult } from '@/lib/eligibility-engine';

interface EligibilityMeterProps {
  score: number;
  recommendation: EligibilityResult['recommendation'];
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const recommendationLabels: Record<EligibilityResult['recommendation'], string> = {
  highly_recommended: 'Highly Recommended',
  recommended: 'Recommended',
  possible: 'Possible Match',
  unlikely: 'Low Match',
};

const recommendationColors: Record<EligibilityResult['recommendation'], string> = {
  highly_recommended: 'eligibility-high',
  recommended: 'eligibility-medium',
  possible: 'eligibility-medium',
  unlikely: 'eligibility-low',
};

export default function EligibilityMeter({
  score,
  recommendation,
  showLabel = true,
  size = 'md',
}: EligibilityMeterProps) {
  const heights = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex items-center justify-between mb-2">
          <span className={`${textSizes[size]} text-gray-400`}>
            {recommendationLabels[recommendation]}
          </span>
          <span className={`${textSizes[size]} font-semibold ${
            score >= 80 ? 'text-green-400' :
            score >= 60 ? 'text-saffron' :
            score >= 40 ? 'text-yellow-400' :
            'text-red-400'
          }`}>
            {score}%
          </span>
        </div>
      )}
      <div className={`eligibility-meter ${heights[size]}`}>
        <div
          className={`eligibility-fill ${recommendationColors[recommendation]}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

