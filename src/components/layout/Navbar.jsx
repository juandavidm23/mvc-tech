import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Quiénes somos', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] h-16 bg-cream/85 backdrop-blur-[12px] border-b border-gray-light px-5 lg:px-10 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <span className="font-display font-extrabold text-2xl text-brand-black leading-none">MVC</span>
        <span className="font-display font-extrabold text-2xl text-gray leading-none">Tech</span>
      </div>

      {/* Pill Selector (Desktop) */}
      <div className="hidden md:flex bg-cream-dark rounded-full p-1">
        {links.map((link) => {
          const isActive = currentPath === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body font-medium text-sm px-[18px] py-1.5 rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-white text-brand-black shadow-[0_1px_4px_rgba(0,0,0,0.1)]'
                  : 'text-gray hover:text-brand-black'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        {/* Hamburger for mobile could go here, simplified for now */}
        <div className="md:hidden text-brand-black font-body font-medium">Menú</div>
        <a href="#contacto" className="hidden md:block">
          <button className="bg-brand-black text-cream rounded-md px-5 py-2.5 font-body font-medium text-sm hover:bg-brand-accent transition-colors">
            Hablemos &rarr;
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
