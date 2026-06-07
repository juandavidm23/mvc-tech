import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-black pt-[60px] pb-[40px] px-5 lg:px-[80px] text-cream">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Col 1 - Marca */}
        <div>
          <h2 className="font-display font-extrabold text-xl text-cream">MVCTech</h2>
          <p className="font-body font-normal text-sm text-gray mt-2">
            Popayán, Colombia · 2026
          </p>
        </div>

        {/* Col 2 - Navegación */}
        <div>
          <h3 className="font-mono text-[11px] uppercase text-brand-dark2 mb-4 tracking-wider">Navegación</h3>
          <ul className="flex flex-col gap-2.5">
            <li>
              <Link to="/" className="font-body font-normal text-[15px] text-gray hover:text-cream transition-colors">Inicio</Link>
            </li>
            <li>
              <Link to="/nosotros" className="font-body font-normal text-[15px] text-gray hover:text-cream transition-colors">Quiénes somos</Link>
            </li>
            <li>
              <Link to="/servicios" className="font-body font-normal text-[15px] text-gray hover:text-cream transition-colors">Servicios</Link>
            </li>
          </ul>
        </div>

        {/* Col 3 - Contacto */}
        <div>
          <h3 className="font-mono text-[11px] uppercase text-brand-dark2 mb-4 tracking-wider">Contacto</h3>
          <ul className="flex flex-col gap-2.5">
            <li className="font-body font-normal text-[15px] text-gray">hola@mvctech.co</li>
            <li className="font-body font-normal text-[15px] text-gray">WhatsApp disponible</li>
            <li className="font-body font-normal text-[15px] text-gray">Instagram: @mvctech.co</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-dark2 my-8"></div>

      <div className="text-center">
        <p className="font-body font-normal text-[13px] text-gray">
          © 2026 MVC Tech Solutions. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
