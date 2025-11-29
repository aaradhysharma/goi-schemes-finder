'use client';

import Link from 'next/link';
import { Scheme } from '@/lib/schemes-data';

interface CategoryCardProps {
  category: Scheme['category'];
  count: number;
  animationDelay?: number;
}

const categoryInfo: Record<Scheme['category'], { 
  label: string; 
  icon: string; 
  description: string;
  gradient: string;
}> = {
  startup: {
    label: 'Startup & Entrepreneurship',
    icon: '🚀',
    description: 'Funding, tax benefits, and support for new ventures',
    gradient: 'from-blue-500/20 to-blue-600/20 hover:from-blue-500/30 hover:to-blue-600/30',
  },
  technology: {
    label: 'Technology & IT',
    icon: '💻',
    description: 'Tech startups, IT hardware, software development',
    gradient: 'from-purple-500/20 to-purple-600/20 hover:from-purple-500/30 hover:to-purple-600/30',
  },
  solar: {
    label: 'Solar & Renewable',
    icon: '☀️',
    description: 'Solar subsidies, renewable energy support',
    gradient: 'from-yellow-500/20 to-orange-500/20 hover:from-yellow-500/30 hover:to-orange-500/30',
  },
  manufacturing: {
    label: 'Manufacturing',
    icon: '🏭',
    description: 'PLI schemes, production incentives',
    gradient: 'from-green-500/20 to-green-600/20 hover:from-green-500/30 hover:to-green-600/30',
  },
  innovation: {
    label: 'Innovation',
    icon: '💡',
    description: 'R&D grants, incubation support',
    gradient: 'from-pink-500/20 to-rose-500/20 hover:from-pink-500/30 hover:to-rose-500/30',
  },
  msme: {
    label: 'MSME',
    icon: '📈',
    description: 'Loans, subsidies for micro & small enterprises',
    gradient: 'from-cyan-500/20 to-cyan-600/20 hover:from-cyan-500/30 hover:to-cyan-600/30',
  },
  women: {
    label: 'Women Entrepreneurs',
    icon: '👩‍💼',
    description: 'Special schemes for women-owned businesses',
    gradient: 'from-fuchsia-500/20 to-fuchsia-600/20 hover:from-fuchsia-500/30 hover:to-fuchsia-600/30',
  },
};

export default function CategoryCard({ category, count, animationDelay = 0 }: CategoryCardProps) {
  const info = categoryInfo[category];

  return (
    <Link
      href={`/schemes?category=${category}`}
      className={`
        block p-6 rounded-xl border border-white/10
        bg-gradient-to-br ${info.gradient}
        transition-all duration-300 transform hover:scale-105 hover:border-saffron/30
        opacity-0 animate-fade-in-up
      `}
      style={{ animationDelay: `${animationDelay}s`, animationFillMode: 'forwards' }}
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl">{info.icon}</span>
        <span className="px-3 py-1 bg-white/10 rounded-full text-saffron font-semibold text-sm">
          {count} schemes
        </span>
      </div>
      <h3 className="text-white font-semibold text-lg mb-2">{info.label}</h3>
      <p className="text-gray-400 text-sm">{info.description}</p>
    </Link>
  );
}

