export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-[#0cc0df]">
              Epick!
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Complete court management solution for modern sports facilities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white">Features</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#features" className="hover:text-[#0cc0df] transition-colors duration-200">Court Management</a></li>
              <li><a href="#features" className="hover:text-[#0cc0df] transition-colors duration-200">Reservations</a></li>
              <li><a href="#features" className="hover:text-[#0cc0df] transition-colors duration-200">Queue System</a></li>
              <li><a href="#features" className="hover:text-[#0cc0df] transition-colors duration-200">Wallet System</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-[#0cc0df] transition-colors duration-200">About</a></li>
              <li><a href="#" className="hover:text-[#0cc0df] transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="hover:text-[#0cc0df] transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="hover:text-[#0cc0df] transition-colors duration-200">Partners</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-6 text-white">Support</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-[#0cc0df] transition-colors duration-200">Help Center</a></li>
              <li><a href="#contact" className="hover:text-[#0cc0df] transition-colors duration-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-[#0cc0df] transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="hover:text-[#0cc0df] transition-colors duration-200">API Docs</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 flex items-center justify-center py-4 text-slate-400">
          <p>&copy; {new Date().getFullYear()} Epick!. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

