'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-saffron to-saffron-dark rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-lg">🇮🇳</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">GOI Schemes Finder</h2>
                <p className="text-xs text-gray-400">Discover. Apply. Grow.</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-md">
              Your comprehensive guide to Government of India schemes for startups, 
              technology, solar energy, and MSME sectors. Find schemes you&apos;re 
              eligible for and get direct application links.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/schemes" className="text-gray-400 hover:text-saffron text-sm transition-colors">
                  All Schemes
                </Link>
              </li>
              <li>
                <Link href="/questionnaire" className="text-gray-400 hover:text-saffron text-sm transition-colors">
                  Find Schemes
                </Link>
              </li>
              <li>
                <Link href="/schemes?category=startup" className="text-gray-400 hover:text-saffron text-sm transition-colors">
                  Startup Schemes
                </Link>
              </li>
              <li>
                <Link href="/schemes?category=solar" className="text-gray-400 hover:text-saffron text-sm transition-colors">
                  Solar Schemes
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Portals */}
          <div>
            <h3 className="text-white font-semibold mb-4">Official Portals</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.startupindia.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-saffron text-sm transition-colors"
                >
                  Startup India ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://www.myscheme.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-saffron text-sm transition-colors"
                >
                  MyScheme ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://udyamregistration.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-saffron text-sm transition-colors"
                >
                  Udyam Registration ↗
                </a>
              </li>
              <li>
                <a 
                  href="https://pmsuryaghar.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-saffron text-sm transition-colors"
                >
                  PM Surya Ghar ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 GOI Schemes Finder. For informational purposes only.
          </p>
          <p className="text-gray-500 text-xs">
            Data sourced from official government portals. Always verify on official websites before applying.
          </p>
        </div>
      </div>
    </footer>
  );
}

