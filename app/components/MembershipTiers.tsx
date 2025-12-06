import MembershipCard from './MembershipCard';

const membershipData = [
  {
    title: 'Basic',
    description: 'Perfect for casual players',
    price: 'Free',
    pricePeriod: undefined,
    features: [
      'Standard court access',
      'Queue system access',
      'Wallet system',
    ],
    buttonText: 'Get Started',
    buttonStyle: 'basic' as const,
    isPopular: false,
  },
  {
    title: 'Gold',
    description: 'For regular players',
    price: '$29',
    pricePeriod: 'month',
    features: [
      'Everything in Basic',
      'Priority queue access',
      'Early event access',
      'Discounted rates',
    ],
    buttonText: 'Get Started',
    buttonStyle: 'popular' as const,
    isPopular: true,
  },
  {
    title: 'Platinum',
    description: 'For dedicated players',
    price: '$59',
    pricePeriod: 'month',
    features: [
      'Everything in Gold',
      'VIP queue priority',
      'Exclusive events',
      'Maximum discounts',
      'Personal concierge',
    ],
    buttonText: 'Get Started',
    buttonStyle: 'premium' as const,
    isPopular: false,
  },
];

export default function MembershipTiers() {
  return (
    <section id="membership" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Membership Tiers
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Choose the perfect plan for your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {membershipData.map((tier, index) => (
            <MembershipCard
              key={index}
              title={tier.title}
              description={tier.description}
              price={tier.price}
              pricePeriod={tier.pricePeriod}
              features={tier.features}
              buttonText={tier.buttonText}
              buttonStyle={tier.buttonStyle}
              isPopular={tier.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

