import React from 'react';

const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white border border-gray-light rounded-xl p-8 transition-all duration-200 hover:border-graphite hover:-translate-y-0.5 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
