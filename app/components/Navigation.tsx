'use client';

import { useEffect, useState } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 shadow-lg border-b border-slate-200' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="hover:cursor-pointer text-2xl font-bold text-[#ff8c63]">
              Epick!
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-slate-900 transition-colors">
              Features
            </a>
            <a href="#membership" className="text-slate-600 hover:text-slate-900 transition-colors">
              Membership
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
              Contact
            </a>
            <button className="hover:cursor-pointer bg-[#0cc0df] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
          <button className="md:hidden text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

