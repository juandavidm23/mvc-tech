import React from 'react';

const Button = ({ children, variant = 'primary', className = '', onClick, type = 'button' }) => {
  const baseStyle = "rounded-md px-7 py-3.5 font-body font-medium text-[15px] cursor-pointer transition-all duration-200";
  
  const variants = {
    primary: "bg-brand-black text-cream border-none hover:bg-brand-accent w-full sm:w-auto",
    outline: "bg-transparent text-brand-black border-[1.5px] border-brand-black hover:bg-brand-black hover:text-cream w-full sm:w-auto"
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
