import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Quiénes somos', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[100] h-16 bg-base/90 backdrop-blur-[12px] border-b border-gray-light px-5 lg:px-10 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className="font-display font-bold text-2xl text-graphite leading-none">MVC</span>
          <span className="font-display font-bold text-2xl text-indigo leading-none">Tech</span>
        </Link>

        {/* Pill Selector (Desktop) */}
        <div className="hidden md:flex bg-surface rounded-full p-1">
          {links.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body font-medium text-sm px-[18px] py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-graphite shadow-[0_1px_4px_rgba(0,0,0,0.1)]'
                    : 'text-mid hover:text-graphite'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Hamburger button (mobile only) */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-md hover:bg-surface transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-graphite">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="text-graphite">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>

          {/* Desktop CTA */}
          <a href="/#contacto" className="hidden md:block">
            <button className="bg-indigo text-white rounded-md px-5 py-2.5 font-body font-medium text-sm hover:bg-coral transition-colors">
              Hablemos →
            </button>
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[99] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-graphite/50 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />
          {/* Drawer */}
          <div className="absolute top-16 left-0 right-0 bg-base border-b border-gray-light shadow-lg p-5 flex flex-col gap-1">
            {links.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`font-body font-medium text-[16px] px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-surface text-graphite'
                      : 'text-mid hover:text-graphite hover:bg-surface'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="border-t border-gray-light mt-3 pt-4">
              <a href="/#contacto" onClick={closeMenu}>
                <button className="w-full bg-indigo text-white rounded-md px-5 py-3 font-body font-medium text-[15px] hover:bg-coral transition-colors">
                  Hablemos →
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
