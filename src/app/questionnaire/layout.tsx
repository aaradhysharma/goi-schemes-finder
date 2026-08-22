import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Check Your Eligibility',
  description:
    'Answer 5 quick questions about your business and instantly discover which Government of India schemes you are eligible for.',
};

export default function QuestionnaireLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
