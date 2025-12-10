import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0cc0df]/40 via-white to-[#ff8c63]/40">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[#0cc0df]/10 text-[#0cc0df] rounded-full text-sm font-medium">
              🎾 Complete Court Management Solution
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#111827] mb-6 leading-tight">
            Manage Your Courts
            <br />
            <span className="bg-gradient-to-r from-[#0cc0df] via-[#ff8c63] via-[#10b981] to-[#0cc0df] bg-clip-text text-transparent animate-gradient">
              Like a Pro
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-[#4b5563] mb-10 max-w-3xl mx-auto leading-relaxed">
            All-in-one platform for court management, reservations, queue systems, and membership. Streamline operations and enhance player experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/signup">
              <button className="hover:cursor-pointer w-full sm:w-auto bg-[#0cc0df] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
            </Link>
            <Link href="/signin">
              <button className="hover:cursor-pointer w-full sm:w-auto bg-white text-[#1f2937] px-8 py-4 rounded-full text-lg font-semibold border-2 border-[#e5e7eb] hover:border-[#10b981] transition-all duration-300">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

