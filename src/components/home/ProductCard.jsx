import React from 'react';
import Badge from '../ui/Badge';

const ProductCard = ({ dark = false, featured = false, badge, number, name, description, features, linkText, linkHref }) => {
  const isDark = dark;

  // Featured: horizontal card (full-width, editorial layout)
  if (featured) {
    return (
      <div className={`rounded-2xl overflow-hidden transition-all duration-200 ${
        isDark
          ? 'bg-graphite'
          : 'bg-indigo-pale border border-indigo/15'
      }`}>
        <div className="flex flex-col md:flex-row">
          {/* Left: main content */}
          <div className="flex-1 p-8 md:p-12">
            <div className="flex items-baseline gap-4 mb-6">
              {isDark ? (
                <span className="inline-block bg-white/10 text-gray-light font-mono text-[11px] rounded px-2.5 py-1">{badge}</span>
              ) : (
                <Badge text={badge} />
              )}
              <span className={`font-display font-bold text-[56px] leading-none select-none ${isDark ? 'text-white/8' : 'text-indigo/10'}`}>{number}</span>
            </div>
            <h3 className={`font-display font-bold text-[36px] md:text-[48px] leading-tight tracking-[-0.02em] mb-4 ${isDark ? 'text-white' : 'text-graphite'}`}>
              {name}
            </h3>
            <p className={`font-body text-[16px] leading-relaxed mb-8 max-w-[480px] ${isDark ? 'text-gray' : 'text-mid'}`}>
              {description}
            </p>
            <a
              href={linkHref}
              className={`inline-flex items-center font-body font-medium text-[15px] transition-colors ${
                isDark ? 'text-indigo-light hover:text-white' : 'text-indigo hover:text-coral'
              }`}
            >
              {linkText}
            </a>
          </div>

          {/* Right: features */}
          <div className={`md:w-[260px] lg:w-[300px] p-8 md:p-12 flex flex-col justify-center ${
            isDark ? 'bg-white/5 border-t md:border-t-0 md:border-l border-white/8' : 'bg-white/50 border-t md:border-t-0 md:border-l border-indigo/10'
          }`}>
            <ul className={`flex flex-col gap-3 font-body text-[14px] ${isDark ? 'text-gray-light' : 'text-graphite'}`}>
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                    isDark ? 'bg-indigo/25 text-indigo-light' : 'bg-indigo/15 text-indigo'
                  }`}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Regular card (compact)
  return (
    <div className={`rounded-xl p-8 transition-all duration-200 border h-full ${
      isDark
        ? 'bg-graphite border-graphite hover:-translate-y-0.5'
        : 'bg-white border-gray-light hover:border-indigo/30 hover:-translate-y-0.5'
    }`}>
      {/* Header Row */}
      <div className="flex justify-between items-start">
        {isDark ? (
          <span className="inline-block bg-white/10 text-gray-light font-mono text-[11px] rounded px-2.5 py-1">
            {badge}
          </span>
        ) : (
          <Badge text={badge} />
        )}
        <span className={`font-display font-bold text-[64px] leading-none select-none ${isDark ? 'text-white/8' : 'text-indigo/10'}`}>
          {number}
        </span>
      </div>

      <h3 className={`font-display font-bold text-[28px] mt-5 leading-tight ${isDark ? 'text-white' : 'text-graphite'}`}>
        {name}
      </h3>

      <p className={`font-body text-[15px] mt-3 leading-relaxed ${isDark ? 'text-gray' : 'text-mid'}`}>
        {description}
      </p>

      <ul className={`mt-5 flex flex-col gap-2 font-body text-[14px] ${isDark ? 'text-gray-light' : 'text-graphite'}`}>
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className={`mt-0.5 flex-shrink-0 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold ${
              isDark ? 'bg-indigo/25 text-indigo-light' : 'bg-indigo/10 text-indigo'
            }`}>✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <div className={`mt-7 pt-7 border-t ${isDark ? 'border-white/8' : 'border-gray-light'}`}>
        <a
          href={linkHref}
          className={`font-body font-medium text-[14px] transition-colors ${isDark ? 'text-indigo-light hover:text-white' : 'text-indigo hover:text-coral'}`}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
