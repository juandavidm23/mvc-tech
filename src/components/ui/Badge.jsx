import React from 'react';

const Badge = ({ text, className = '' }) => {
  return (
    <span className={`inline-block bg-indigo/10 text-indigo font-mono text-[11px] rounded px-2.5 py-1 ${className}`}>
      {text}
    </span>
  );
};

export default Badge;
