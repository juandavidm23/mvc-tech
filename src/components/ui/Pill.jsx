import React from 'react';

const Pill = ({ text, className = '' }) => {
  return (
    <span className={`inline-block bg-brand-black text-cream rounded-full px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.05em] ${className}`}>
      {text}
    </span>
  );
};

export default Pill;
