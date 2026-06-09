import React from 'react';
import Pill from '../ui/Pill';

const AboutHero = () => {
  return (
    <section className="min-h-[80vh] aurora-bg flex flex-col justify-center items-center pt-[160px] pb-[80px] px-5 lg:px-[80px] text-center">
      <div className="animate-[fade-in_1s_ease-out_100ms_both]">
        <Pill text="Fundada en Popayán · Noviembre 2024" className="mb-8" />
      </div>

      <div className="animate-[fade-in_1s_ease-out_200ms_both]">
        <h1 className="font-display font-extrabold text-[56px] md:text-[96px] leading-none tracking-[-0.02em]">
          <span className="block text-graphite">MORENO. VIDAL. CUADROS.</span>
          <span className="block text-gray">MVC.</span>
        </h1>
      </div>

      <p className="font-body font-normal text-xl text-gray max-w-[520px] mt-8 animate-[fade-in_1s_ease-out_300ms_both]">
        El nombre viene de nuestros apellidos y del patrón que usamos para construir software. No es casualidad — es quiénes somos.
      </p>
    </section>
  );
};

export default AboutHero;
