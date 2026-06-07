import React from 'react';
import Button from '../ui/Button';

const FinalCTA = () => {
  return (
    <section className="bg-brand-black py-[80px] md:py-[120px] px-5 lg:px-[80px] text-center">
      <h2 className="font-display font-extrabold text-[40px] md:text-[64px] text-cream leading-[1.05] max-w-[800px] mx-auto mb-5 uppercase">
        ¿NO SABES EXACTAMENTE QUÉ NECESITAS?
      </h2>
      <p className="font-body font-normal text-[20px] text-gray max-w-[560px] mx-auto mb-12">
        Cuéntanos cómo funciona tu negocio hoy. Nosotros te decimos qué construir — sin tecnicismos, sin compromiso.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button className="bg-cream text-brand-black hover:bg-white rounded-md px-7 py-3.5 font-body font-medium text-[15px] transition-colors w-full sm:w-auto">
          Hablar con el equipo &rarr;
        </button>
        <button className="bg-transparent text-gray border-[1.5px] border-brand-dark2 hover:border-cream hover:text-cream rounded-md px-7 py-3.5 font-body font-medium text-[15px] transition-all duration-200 w-full sm:w-auto">
          Ver nuestros productos
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
