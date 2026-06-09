import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_URL, EMAIL, INSTAGRAM, LOCATION } from '../../config/contact';

const Footer = () => {
  return (
    <footer className="bg-graphite pt-[60px] pb-[40px] px-5 lg:px-[80px] text-surface">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1 - Marca */}
        <div>
          <h2 className="font-display font-extrabold text-xl text-surface">MVCTech</h2>
          <p className="font-body font-normal text-sm text-gray mt-2">
            {LOCATION} · 2026
          </p>
        </div>

        {/* Col 2 - Navegación */}
        <div>
          <h3 className="font-mono text-[11px] uppercase text-white/20 mb-4 tracking-wider">Navegación</h3>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link to="/" className="font-body font-normal text-[15px] text-gray hover:text-surface transition-colors">Inicio</Link>
            </li>
            <li>
              <Link to="/nosotros" className="font-body font-normal text-[15px] text-gray hover:text-surface transition-colors">Quiénes somos</Link>
            </li>
            <li>
              <Link to="/servicios" className="font-body font-normal text-[15px] text-gray hover:text-surface transition-colors">Servicios</Link>
            </li>
          </ul>
        </div>

        {/* Col 3 - Contacto */}
        <div>
          <h3 className="font-mono text-[11px] uppercase text-white/20 mb-4 tracking-wider">Contacto</h3>
          <ul className="flex flex-col gap-2.5">
            <li>
              <a href={`mailto:${EMAIL}`} className="font-body font-normal text-[15px] text-gray hover:text-surface transition-colors">
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body font-normal text-[15px] text-gray hover:text-surface transition-colors"
              >
                WhatsApp →
              </a>
            </li>
            <li>
              <span className="font-body font-normal text-[15px] text-gray">Instagram: {INSTAGRAM}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 my-8"></div>

      <div className="text-center">
        <p className="font-body font-normal text-[13px] text-gray">
          © 2026 MVC Tech Solutions. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
