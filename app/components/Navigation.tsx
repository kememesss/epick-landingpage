import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/0 backdrop-blur-md border-b border-[#e5e7eb] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="hover:cursor-pointer text-2xl font-bold text-[#ff8c63]">
                Epick!
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#4b5563] hover:text-[#111827] transition-colors">
              Features
            </a>
            <a href="#membership" className="text-[#4b5563] hover:text-[#111827] transition-colors">
              Membership
            </a>
            <a href="#contact" className="text-[#4b5563] hover:text-[#111827] transition-colors">
              Contact
            </a>
            <Link href="/signup">
              <button className="hover:cursor-pointer bg-[#10b981] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </Link>
          </div>
          <button className="md:hidden text-[#4b5563]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

