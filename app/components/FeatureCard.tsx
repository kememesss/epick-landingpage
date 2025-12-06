interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
}

export default function FeatureCard({ title, icon, features }: FeatureCardProps) {
  return (
    <div className="p-8 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#0cc0df] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="w-12 h-12 bg-gradient-to-br from-[#0cc0df] to-[#ff8c63] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#0cc0df] transition-colors duration-300">{title}</h3>
      <ul className="space-y-2 text-slate-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

