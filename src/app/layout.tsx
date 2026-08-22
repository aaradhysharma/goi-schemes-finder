import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { APP_VERSION } from "@/lib/version";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-outfit-next",
});

const SITE_URL = "https://goi-schemes-finder.vercel.app";
const TITLE = "GOI Schemes Finder | Discover Government Schemes for Your Business";
const DESCRIPTION =
  "Find and apply for Government of India schemes for startups, technology, AI, solar energy, and more. Get personalized recommendations based on your eligibility.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | GOI Schemes Finder",
  },
  description: DESCRIPTION,
  keywords: [
    "GOI schemes",
    "startup india",
    "government grants",
    "MSME loans",
    "solar subsidy",
    "AI funding",
    "tech startup",
    "business grants india",
    "government schemes for startups",
    "pmegp",
    "mudra loan",
  ],
  authors: [{ name: "GOI Schemes Finder" }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    locale: "en_IN",
    siteName: "GOI Schemes Finder",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`geo-pattern min-h-screen ${outfit.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-saffron focus:text-navy focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
        <div className="version-badge">v{APP_VERSION}</div>
      </body>
    </html>
  );
}
