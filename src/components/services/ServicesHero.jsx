import React from 'react';
import Pill from '../ui/Pill';

const ServicesHero = () => {
  return (
    <section className="min-h-[70vh] aurora-bg-subtle flex flex-col justify-center items-center pt-[160px] pb-[80px] px-5 lg:px-[80px] text-center">
      <div className="animate-[fade-in_1s_ease-out_100ms_both]">
        <Pill text="Servicios" className="mb-8" />
      </div>

      <div className="max-w-[900px] animate-[fade-in_1s_ease-out_200ms_both]">
        <h1 className="font-display font-extrabold text-[44px] md:text-[72px] text-brand-black leading-[1.05] tracking-[-0.02em]">
          LO QUE NECESITAS
        </h1>
        <h1 className="font-display font-extrabold text-[44px] md:text-[72px] text-gray leading-[1.05] tracking-[-0.02em]">
          YA LO HEMOS CONSTRUIDO —
        </h1>
        <h1 className="font-display font-extrabold text-[44px] md:text-[72px] text-brand-black leading-[1.05] tracking-[-0.02em]">
          O LO CONSTRUIMOS PARA TI.
        </h1>
      </div>

      <p className="font-body font-normal text-xl text-gray max-w-[500px] mt-8 animate-[fade-in_1s_ease-out_300ms_both]">
        Dos líneas de servicio. Un mismo equipo. Resultados que se pueden ver.
      </p>
    </section>
  );
};

export default ServicesHero;
