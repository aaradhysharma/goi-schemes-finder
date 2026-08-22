'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'goi-schemes-bookmarks';

function readBookmarks(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : [];
    return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setBookmarks(readBookmarks());
    setHydrated(true);
  }, []);

  const toggle = useCallback((schemeId: string) => {
    setBookmarks((current) => {
      const next = current.includes(schemeId)
        ? current.filter((id) => id !== schemeId)
        : [...current, schemeId];
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Storage may be unavailable (private mode); keep in-memory state.
      }
      return next;
    });
  }, []);

  const isBookmarked = useCallback(
    (schemeId: string) => bookmarks.includes(schemeId),
    [bookmarks]
  );

  return { bookmarks, toggle, isBookmarked, hydrated };
}
