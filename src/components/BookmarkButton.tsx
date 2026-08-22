'use client';

import { useBookmarks } from '@/lib/use-bookmarks';

interface BookmarkButtonProps {
  schemeId: string;
  className?: string;
}

export default function BookmarkButton({ schemeId, className = '' }: BookmarkButtonProps) {
  const { isBookmarked, toggle, hydrated } = useBookmarks();
  const saved = isBookmarked(schemeId);

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(schemeId);
      }}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${schemeId} from saved schemes` : `Save ${schemeId} for later`}
      title={saved ? 'Saved' : 'Save for later'}
      className={`p-2 rounded-lg transition-colors ${
        saved
          ? 'text-saffron bg-saffron/20'
          : 'text-gray-400 hover:text-white hover:bg-white/10'
      } ${className}`}
    >
      <svg
        className="w-5 h-5"
        fill={hydrated && saved ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
    </button>
  );
}
