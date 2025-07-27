'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            {/* Planet symbol placeholder */}
            <div className="relative w-8 h-8">
              <div className="w-8 h-8 border-2 border-black rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-px border-t border-black opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-px border-t border-black opacity-30"></div>
            </div>
            <h1 className="text-2xl font-bold text-grain font-serif tracking-tight">
              Truzon
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['About', 'Businesses', 'Services', 'News', 'Team', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item === 'Businesses' ? 'products' : item === 'News' ? 'announcements' : item.toLowerCase()}`}
                  className="text-gray-700 hover:text-black px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 text-grain"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-premium bg-black text-white px-6 py-2.5 text-sm font-medium tracking-wide rounded-sm">
              Partnership
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-black p-2 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100">
            {['About', 'Businesses', 'Services', 'News', 'Team', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item === 'Businesses' ? 'products' : item === 'News' ? 'announcements' : item.toLowerCase()}`}
                onClick={closeMobileMenu}
                className="text-gray-700 hover:text-black block px-3 py-3 text-base font-medium tracking-wide transition-colors duration-200 text-grain hover:bg-gray-50 rounded-sm"
              >
                {item}
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-4 pb-2">
              <button 
                onClick={closeMobileMenu}
                className="btn-premium bg-black text-white px-6 py-3 text-base font-medium tracking-wide rounded-sm w-full"
              >
                Partnership
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}