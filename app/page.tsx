import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import MembershipTiers from './components/MembershipTiers';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Navigation />
      <Hero />
      <Features />
      <MembershipTiers />
      <CTA />
      <Footer />
    </div>
  );
}
