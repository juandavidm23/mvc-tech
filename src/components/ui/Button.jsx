import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button', disabled = false }) => {
  const baseStyle = "rounded-md px-7 py-3.5 font-body font-medium text-[15px] cursor-pointer transition-all duration-200 inline-block text-center disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-graphite text-white border-none hover:bg-coral w-full sm:w-auto",
    outline: "bg-transparent text-graphite border-[1.5px] border-graphite hover:bg-graphite hover:text-white w-full sm:w-auto",
    coral: "bg-coral text-white border-none hover:bg-coral-dark w-full sm:w-auto",
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyle} ${variants[variant] ?? variants.primary} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
