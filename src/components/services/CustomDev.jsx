import React from 'react';
import Pill from '../ui/Pill';
import Button from '../ui/Button';

const CustomDev = () => {
  const steps = [
    { title: 'Diagnóstico', text: 'Entendemos tu operación actual, los cuellos de botella y los objetivos del negocio.' },
    { title: 'Diseño', text: 'Arquitectura del sistema, UX/UI de las interfaces y validación contigo antes de escribir código.' },
    { title: 'Desarrollo', text: 'Backend + Frontend completo con el stack más adecuado. Entregas parciales para que veas el avance.' },
    { title: 'Acompañamiento', text: 'Implementación en tu negocio, capacitación a tu equipo y soporte continuo post-lanzamiento.' }
  ];

  return (
    <section className="bg-cream py-[80px] md:py-[120px] px-5 lg:px-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-[80px]">
        {/* Left Col - Content */}
        <div>
          <Pill text="Línea 01" className="mb-5" />
          <h2 className="font-display font-extrabold text-[36px] md:text-[56px] text-brand-black uppercase my-5 leading-none">
            DESARROLLO A MEDIDA
          </h2>
          <p className="font-body font-normal text-[18px] text-gray mb-10">
            Tu operación tiene problemas únicos que ninguna app genérica del mercado puede resolver. Nosotros los analizamos, los entendemos y construimos exactamente lo que necesitas — desde el levantamiento de requerimientos hasta la implementación en producción.
          </p>

          {/* Timeline */}
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-cream-dark"></div>
            <div className="flex flex-col gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[37px] top-1.5 w-[10px] h-[10px] rounded-full bg-brand-black"></div>
                  <h4 className="font-body font-medium text-[16px] text-brand-black mb-1">
                    {idx + 1}. {step.title}
                  </h4>
                  <p className="font-body font-normal text-[15px] text-gray">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-light mt-10 pt-6">
            <p className="font-body font-normal text-[15px] text-gray mb-4">
              Precio: cotización por proyecto según alcance y complejidad.
            </p>
            <Button variant="primary">Cotizar mi proyecto &rarr;</Button>
          </div>
        </div>

        {/* Right Col - Casos Reales */}
        <div>
          <span className="font-mono text-[12px] text-gray uppercase mb-6 block">
            Proyectos propios construidos con este proceso
          </span>

          <div className="flex flex-col gap-5">
            {/* Tsegura */}
            <div className="bg-white border border-gray-light rounded-[10px] p-7">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block bg-cream-dark text-brand-black font-mono text-[11px] rounded px-2.5 py-1">
                  Blockchain · Web3
                </span>
                <span className="font-display font-extrabold text-[32px] text-cream-dark leading-none">01</span>
              </div>
              <h4 className="font-display font-extrabold text-[22px] text-brand-black">Tsegura</h4>
              <p className="font-body font-normal text-[14px] text-gray mt-2.5">
                Backend Spring Boot, frontend React, smart contracts Solidity en Polygon Amoy. Stripe para pagos, panel para organizadores y reportes en tiempo real.
              </p>
            </div>

            {/* canchApp */}
            <div className="bg-white border border-gray-light rounded-[10px] p-7">
              <div className="flex justify-between items-start mb-4">
                <span className="inline-block bg-cream-dark text-brand-black font-mono text-[11px] rounded px-2.5 py-1">
                  SaaS · Deportes
                </span>
                <span className="font-display font-extrabold text-[32px] text-cream-dark leading-none">02</span>
              </div>
              <h4 className="font-display font-extrabold text-[22px] text-brand-black">canchApp</h4>
              <p className="font-body font-normal text-[14px] text-gray mt-2.5">
                Sistema de reservas deportivas. Pagos con Stripe, notificaciones automáticas, historial de clientes y panel de administración completo.
              </p>
            </div>
          </div>

          <p className="font-body font-normal italic text-[14px] text-gray text-center mt-4">
            Estos son ejemplos de lo que podemos construir para ti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomDev;
