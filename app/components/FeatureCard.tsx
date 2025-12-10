'use client';

import { useState } from 'react';

interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
}

export default function FeatureCard({ title, icon, features }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative h-full min-h-[600px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#0cc0df]/20 via-white to-[#ff8c63]/20 rounded-3xl transition-all duration-500 group-hover:from-[#0cc0df]/30 group-hover:via-white group-hover:to-[#ff8c63]/30 group-hover:shadow-2xl group-hover:shadow-[#0cc0df]/20 transform group-hover:scale-[1.02] group-hover:-translate-y-2" />
      
      <div className="relative h-full bg-gradient-to-br from-[#f9fafb] via-white to-[#f3f4f6] rounded-3xl border-2 border-[#e5e7eb] group-hover:border-[#0cc0df]/50 transition-all duration-500 p-8 flex flex-col items-center justify-start overflow-hidden backdrop-blur-sm">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_50%_50%,#0cc0df_1px,transparent_1px)] bg-[length:24px_24px]" />
        
        {/* Animated background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0cc0df]/10 via-white to-[#ff8c63]/10 to-[#10b981]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Icon container with slide-down animation */}
        <div className={`relative z-10 mb-6 p-6 rounded-2xl bg-gradient-to-br from-[#0cc0df] to-[#ff8c63] transform transition-all duration-700 ease-out ${
          isHovered 
            ? 'opacity-100 translate-y-0 scale-110 rotate-6 shadow-lg' 
            : 'opacity-0 -translate-y-12 scale-90 rotate-0'
        }`}>
          <div className="transform transition-transform duration-500 group-hover:scale-110">
            {icon}
          </div>
        </div>

        {/* Title with slide-in from left */}
        <h3 className={`relative z-10 text-3xl font-bold mb-8 text-center transition-all duration-700 ease-out ${
          isHovered 
            ? 'opacity-100 translate-x-0 text-[#0cc0df]' 
            : 'opacity-0 -translate-x-12 text-[#1f2937]'
        }`}>
          {title}
        </h3>

        {/* Features list with slide-up animation */}
        <ul className="relative z-10 flex flex-col gap-4 w-full flex-grow">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`flex items-start text-base transition-all duration-500 ease-out ${
                isHovered 
                  ? 'opacity-100 translate-y-0 translate-x-2 text-[#374151]' 
                  : 'opacity-0 translate-y-8 translate-x-0 text-[#6b7280]'
              }`}
              style={{
                transitionDelay: isHovered ? `${index * 80 + 200}ms` : '0ms'
              }}
            >
              <svg
                className={`w-6 h-6 mr-3 flex-shrink-0 mt-0.5 transform transition-all duration-300 ${
                  isHovered 
                    ? 'scale-125 text-[#10b981]' 
                    : 'scale-100 text-[#0cc0df]'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0cc0df] via-[#ff8c63] via-[#10b981] to-[#0cc0df] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>
    </div>
  );
}

