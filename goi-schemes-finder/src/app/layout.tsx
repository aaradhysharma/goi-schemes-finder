import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GOI Schemes Finder | Discover Government Schemes for Your Business",
  description: "Find and apply for Government of India schemes for startups, technology, AI, solar energy, and more. Get personalized recommendations based on your eligibility.",
  keywords: "GOI schemes, startup india, government grants, MSME loans, solar subsidy, AI funding, tech startup, business grants india",
  authors: [{ name: "GOI Schemes Finder" }],
  openGraph: {
    title: "GOI Schemes Finder",
    description: "Discover Government of India schemes tailored for your business",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="geo-pattern min-h-screen">
        {children}
        <div className="version-badge">v0.0.1</div>
      </body>
    </html>
  );
}
