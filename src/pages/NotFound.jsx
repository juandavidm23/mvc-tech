import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className="min-h-screen bg-base flex items-center justify-center px-5">
      <div className="text-center max-w-[480px]">
        <p className="font-display font-bold text-[140px] text-graphite/8 leading-none select-none -mb-4">
          404
        </p>
        <h1 className="font-display font-bold text-[32px] md:text-[40px] text-graphite leading-tight mb-4">
          Esta página no existe.
        </h1>
        <p className="font-body text-[17px] text-mid mb-10 leading-relaxed">
          Pero el equipo de MVC Tech sí. Vuelve al inicio o cuéntanos directamente qué necesitas.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <button className="bg-graphite text-white rounded-md px-7 py-3.5 font-body font-medium text-[15px] hover:bg-indigo transition-colors w-full sm:w-auto">
              Volver al inicio
            </button>
          </Link>
          <a href="/#contacto">
            <button className="bg-transparent text-graphite border-[1.5px] border-graphite hover:bg-graphite hover:text-white rounded-md px-7 py-3.5 font-body font-medium text-[15px] transition-all duration-200 w-full sm:w-auto">
              Hablar con nosotros
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
