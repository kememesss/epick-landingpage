import Link from 'next/link';

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-[#0cc0df] to-[#ff8c63] rounded-3xl p-12 md:p-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Court Management?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join clubs and players who are already experiencing the future of court management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <button className="bg-white text-[#0cc0df] px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
            </Link>
            <Link href="/signin">
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

