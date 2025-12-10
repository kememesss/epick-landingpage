interface MembershipCardProps {
  title: string;
  description: string;
  price: string;
  pricePeriod?: string;
  features: string[];
  buttonText: string;
  buttonStyle: 'basic' | 'popular' | 'premium';
  isPopular?: boolean;
}

export default function MembershipCard({
  title,
  description,
  price,
  pricePeriod,
  features,
  buttonText,
  buttonStyle,
  isPopular = false,
}: MembershipCardProps) {
  const cardStyles = {
    basic: 'p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#0cc0df] transition-all duration-300 transform hover:-translate-y-2',
    popular: 'p-8 rounded-2xl bg-gradient-to-br from-[#0cc0df]/10 to-[#ff8c63]/10 border-2 border-[#0cc0df] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative',
    premium: 'p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#0cc0df] transition-all duration-300 transform hover:-translate-y-2',
  };

  const buttonStyles = {
    basic: 'w-full bg-slate-100 text-slate-900 px-6 py-3 rounded-full font-semibold hover:bg-slate-200 transition-colors',
    popular: 'w-full bg-[#0cc0df] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105',
    premium: 'w-full bg-slate-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-800 transition-colors',
  };

  return (
    <div className={cardStyles[buttonStyle]}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-[#0cc0df] text-white px-4 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-semibold">
          Popular
        </div>
      )}
      <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 mb-6">{description}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-slate-900">{price}</span>
        {pricePeriod && <span className="text-slate-600">/{pricePeriod}</span>}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-600">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button className={buttonStyles[buttonStyle]}>
        {buttonText}
      </button>
    </div>
  );
}

