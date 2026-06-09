import React from 'react';

const Pill = ({ text, className = '' }) => {
  return (
    <span className={`inline-block bg-indigo/10 text-indigo border border-indigo/20 rounded-full px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.06em] ${className}`}>
      {text}
    </span>
  );
};

export default Pill;
