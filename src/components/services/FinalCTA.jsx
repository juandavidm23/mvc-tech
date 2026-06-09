import React from 'react';

const FinalCTA = () => {
  return (
    <section className="bg-graphite py-[80px] md:py-[120px] px-5 lg:px-[80px] text-center">
      <h2 className="font-display font-extrabold text-[40px] md:text-[64px] text-surface leading-[1.05] max-w-[800px] mx-auto mb-5 uppercase">
        ¿NO SABES EXACTAMENTE QUÉ NECESITAS?
      </h2>
      <p className="font-body font-normal text-[20px] text-gray max-w-[560px] mx-auto mb-12">
        Cuéntanos cómo funciona tu negocio hoy. Nosotros te decimos qué construir — sin tecnicismos, sin compromiso.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="/#contacto" className="w-full sm:w-auto">
          <button className="bg-surface text-graphite hover:bg-white rounded-md px-7 py-3.5 font-body font-medium text-[15px] transition-colors w-full">
            Hablar con el equipo →
          </button>
        </a>
        <a href="/#productos" className="w-full sm:w-auto">
          <button className="bg-transparent text-gray border-[1.5px] border-white/20 hover:border-surface hover:text-surface rounded-md px-7 py-3.5 font-body font-medium text-[15px] transition-all duration-200 w-full">
            Ver nuestros productos
          </button>
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
