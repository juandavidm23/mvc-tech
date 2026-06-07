import React from 'react';
import Badge from '../ui/Badge';

const ProductCard = ({ dark = false, badge, number, name, description, features, linkText, linkHref }) => {
  const isDark = dark;

  return (
    <div className={`rounded-xl p-10 transition-all duration-200 border ${
      isDark 
        ? 'bg-brand-black border-brand-black hover:-translate-y-0.5' 
        : 'bg-white border-gray-light hover:border-brand-black hover:-translate-y-0.5'
    }`}>
      {/* Header Row */}
      <div className="flex justify-between items-start">
        {isDark ? (
          <span className="inline-block bg-brand-accent text-gray-light font-mono text-[11px] rounded px-2.5 py-1">
            {badge}
          </span>
        ) : (
          <Badge text={badge} />
        )}
        <span className={`font-display font-extrabold text-[72px] leading-none ${isDark ? 'text-brand-accent' : 'text-cream-dark'}`}>
          {number}
        </span>
      </div>

      {/* Content */}
      <h3 className={`font-display font-extrabold text-[36px] mt-6 ${isDark ? 'text-cream' : 'text-brand-black'}`}>
        {name}
      </h3>
      
      <p className={`font-body font-normal text-[16px] mt-3 ${isDark ? 'text-gray' : 'text-gray'}`}>
        {description}
      </p>

      {/* Features List */}
      <ul className={`mt-6 flex flex-col gap-2 font-body font-normal text-[15px] ${isDark ? 'text-gray-light' : 'text-brand-black'}`}>
        {features.map((feature, idx) => (
          <li key={idx}>&mdash; {feature}</li>
        ))}
      </ul>

      {/* Footer */}
      <div className={`mt-8 pt-8 border-t ${isDark ? 'border-brand-dark2' : 'border-cream-dark'}`}>
        <a 
          href={linkHref} 
          className={`font-body font-medium text-[15px] hover:underline ${isDark ? 'text-cream' : 'text-brand-black'}`}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
