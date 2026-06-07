import React from 'react';

const Badge = ({ text, className = '' }) => {
  return (
    <span className={`inline-block bg-cream-dark text-brand-black font-mono text-[11px] rounded px-2.5 py-1 ${className}`}>
      {text}
    </span>
  );
};

export default Badge;
