import React, { useState } from 'react';
import Pill from '../ui/Pill';

const technologies = [
  { name: 'React',        category: 'Frontend',          icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'Spring Boot',  category: 'Backend',            icon: 'https://cdn.simpleicons.org/springboot/6DB33F' },
  { name: 'Solidity',     category: 'Blockchain',         icon: 'https://cdn.simpleicons.org/solidity/818181' },
  { name: 'Python',       category: 'Automatización',     icon: 'https://cdn.simpleicons.org/python/3776AB' },
  { name: 'n8n',          category: 'Flujos de trabajo',  icon: 'https://cdn.simpleicons.org/n8n/EA4B71' },
  { name: 'Supabase',     category: 'Base de datos',      icon: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
  { name: 'Docker',       category: 'Infraestructura',    icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'Web3j',        category: 'Web3 Java',          icon: null },
  { name: 'PostgreSQL',   category: 'Base de datos',      icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'InfluxDB',     category: 'Series de tiempo',   icon: 'https://cdn.simpleicons.org/influxdb/22ADF6' },
  { name: 'Gemini API',   category: 'IA',                 icon: 'https://cdn.simpleicons.org/googlegemini/4285F4' },
  { name: 'WhatsApp API', category: 'Mensajería',         icon: 'https://cdn.simpleicons.org/whatsapp/25D366' },
];

const TechIcon = ({ icon, name }) => {
  const [error, setError] = useState(false);
  const initials = name.substring(0, 2).toUpperCase();

  if (!icon || error) {
    return (
      <div className="w-9 h-9 bg-surface rounded-md flex-shrink-0 flex items-center justify-center">
        <span className="font-mono text-[10px] font-bold text-mid">{initials}</span>
      </div>
    );
  }

  return (
    <img
      src={icon}
      alt={name}
      className="w-9 h-9 object-contain flex-shrink-0"
      loading="lazy"
      onError={() => setError(true)}
    />
  );
};

const TechStack = () => {
  return (
    <section className="bg-surface py-[60px] md:py-[100px] px-5 lg:px-[80px]">
      <div className="mb-16">
        <Pill text="Stack técnico" className="mb-3" />
        <h2 className="font-display font-extrabold text-[32px] md:text-[52px] text-graphite leading-tight mb-3">
          LAS HERRAMIENTAS CON LAS QUE CONSTRUIMOS.
        </h2>
        <p className="font-body font-normal text-[18px] text-gray">
          No usamos lo que está de moda. Usamos lo que funciona.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-white border border-gray-light rounded-lg p-5 lg:px-6 flex items-center gap-4">
            <TechIcon icon={tech.icon} name={tech.name} />
            <div>
              <p className="font-body font-medium text-[16px] text-graphite">{tech.name}</p>
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
