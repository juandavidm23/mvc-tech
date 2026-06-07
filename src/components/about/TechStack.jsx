import React from 'react';
import Pill from '../ui/Pill';

const TechStack = () => {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Spring Boot', category: 'Backend' },
    { name: 'Solidity', category: 'Blockchain' },
    { name: 'Python', category: 'Automatización' },
    { name: 'n8n', category: 'Flujos de trabajo' },
    { name: 'Supabase', category: 'Base de datos' },
    { name: 'Docker', category: 'Infraestructura' },
    { name: 'Web3j', category: 'Web3 Java' },
    { name: 'PostgreSQL', category: 'Base de datos' },
    { name: 'InfluxDB', category: 'Series de tiempo' },
    { name: 'Gemini API', category: 'IA' },
    { name: 'WhatsApp API', category: 'Mensajería' }
  ];

  return (
    <section className="bg-cream py-[60px] md:py-[100px] px-5 lg:px-[80px]">
      <div className="mb-16">
        <Pill text="Stack técnico" className="mb-3" />
        <h2 className="font-display font-extrabold text-[32px] md:text-[52px] text-brand-black leading-tight mb-3">
          LAS HERRAMIENTAS CON LAS QUE CONSTRUIMOS.
        </h2>
        <p className="font-body font-normal text-[18px] text-gray">
          No usamos lo que está de moda. Usamos lo que funciona.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-white border border-gray-light rounded-lg p-5 lg:px-6 flex items-center gap-4">
            {/* Ícono placeholder */}
            <div className="w-9 h-9 bg-cream-dark rounded-md flex-shrink-0"></div>
            <div>
              <p className="font-body font-medium text-[16px] text-brand-black">{tech.name}</p>
              <p className="font-mono text-[11px] text-gray mt-0.5">{tech.category}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="font-mono text-[13px] text-gray">
          + Claude Code como herramienta de desarrollo diaria.
        </p>
      </div>
    </section>
  );
};

export default TechStack;
