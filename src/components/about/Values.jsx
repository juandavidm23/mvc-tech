import React from 'react';
import Pill from '../ui/Pill';

const Values = () => {
  const valuesList = [
    { num: 'I', title: 'Accesibilidad', text: 'Tecnología para todos, no solo para grandes empresas.' },
    { num: 'II', title: 'Innovación', text: 'Búsqueda constante de soluciones nuevas y modernas.' },
    { num: 'III', title: 'Cercanía', text: 'Trato humano y personalizado con cada cliente.' },
    { num: 'IV', title: 'Transparencia', text: 'Claridad total con clientes sobre alcances y capacidades.' },
    { num: 'V', title: 'Impacto social', text: 'Contribuir al desarrollo digital de Popayán y Colombia.' }
  ];

  return (
    <section className="bg-surface py-[60px] md:py-[100px] px-5 lg:px-[80px]">
      <div className="mb-16">
        <Pill text="Cultura" className="mb-5" />
        <h2 className="font-display font-extrabold text-[36px] md:text-[52px] text-graphite">
          LO QUE NOS GUÍA.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {valuesList.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-display font-extrabold text-[48px] text-gray-light leading-none">
              {item.num}
            </span>
            <h3 className="font-display font-extrabold text-[20px] text-graphite mt-4">
              {item.title}
            </h3>
            <p className="font-body font-normal text-[15px] text-gray mt-2">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
