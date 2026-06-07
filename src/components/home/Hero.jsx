import React from 'react';
import Pill from '../ui/Pill';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="min-h-screen aurora-bg flex flex-col justify-center items-center pt-[160px] pb-[80px] px-5 lg:px-[80px] text-center relative overflow-hidden">
      <div className="animate-[fade-in_1s_ease-out_100ms_both]">
        <Pill text="Popayán, Colombia · 2026" className="mb-8" />
      </div>

      <h1 className="font-display font-extrabold text-[40px] md:text-[52px] lg:text-[84px] text-brand-black leading-none tracking-[-0.02em] max-w-[900px] mb-6 animate-[fade-in_1s_ease-out_200ms_both]">
        CONSTRUIMOS SOFTWARE QUE FUNCIONA DE VERDAD.
      </h1>

      <p className="font-body font-normal text-xl text-gray max-w-[560px] mb-12 animate-[fade-in_1s_ease-out_300ms_both]">
        Productos propios, desarrollo a medida y automatización con IA — desde Popayán para Colombia.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 animate-[fade-in_1s_ease-out_400ms_both]">
        <a href="#productos" className="w-full sm:w-auto">
          <Button variant="primary">Ver nuestros productos</Button>
        </a>
        <a href="#contacto" className="w-full sm:w-auto">
          <Button variant="outline">Hablemos de tu proyecto</Button>
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-soft">
        <span className="font-mono text-xs text-gray-light">&darr; scroll</span>
      </div>
    </section>
  );
};

export default Hero;
