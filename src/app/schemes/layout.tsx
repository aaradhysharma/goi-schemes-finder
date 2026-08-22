import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Government Schemes',
  description:
    'Browse 25+ Government of India schemes for startups, technology, solar, manufacturing, MSMEs and women entrepreneurs. Search and filter by category.',
};

export default function SchemesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
