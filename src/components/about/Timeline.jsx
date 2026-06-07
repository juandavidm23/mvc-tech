import React from 'react';
import Pill from '../ui/Pill';

const Timeline = () => {
  const milestones = [
    {
      date: 'NOV 10, 2024',
      title: 'El comienzo',
      text: 'Un mensaje de WhatsApp entre tres ingenieros de sistemas del Colegio Mayor del Cauca. MVC Tech nace formalmente con el propósito de digitalizar los negocios locales de Popayán.',
      isOpen: false
    },
    {
      date: '2025',
      title: 'Los primeros productos',
      text: 'Tsegura entra en desarrollo — ticketing con blockchain en Polygon Amoy. canchApp toma forma como sistema de reservas deportivas. El equipo gana primer lugar en NASA Space Apps Popayán.',
      isOpen: false
    },
    {
      date: 'EARLY 2026',
      title: 'Automatización e IA',
      text: 'Se integran agentes de IA con n8n y Gemini API. Se despliega infraestructura en DigitalOcean. El portafolio técnico se consolida con dos productos funcionando.',
      isOpen: false
    },
    {
      date: '2026',
      title: 'Hoy',
      text: 'Dos productos propios funcionando, dos líneas de servicio activas y los primeros clientes en Popayán. Esta web es la evidencia.',
      isOpen: true
    }
  ];

  return (
    <section className="bg-cream py-[60px] md:py-[100px] px-5 lg:px-[80px]">
      <div className="mb-16">
        <Pill text="Nuestra historia" className="mb-5" />
        <h2 className="font-display font-extrabold text-[36px] md:text-[52px] text-brand-black">
          DE UN WHATSAPP A PRODUCTOS REALES.
        </h2>
      </div>

      <div className="relative pl-6 md:pl-12 max-w-[800px]">
        {/* Línea vertical */}
        <div className="absolute left-[24px] top-2 bottom-0 w-[2px] bg-cream-dark"></div>

        <div className="flex flex-col gap-14">
          {milestones.map((item, index) => (
            <div key={index} className="relative pl-6">
              {/* Punto en línea */}
              <div className={`absolute -left-[31px] md:-left-[55px] top-1 rounded-full ${
                item.isOpen 
                  ? 'w-[14px] h-[14px] bg-cream border-2 border-brand-black -translate-x-[1px]' 
                  : 'w-[12px] h-[12px] bg-brand-black'
              }`}></div>
              
              <div className="font-mono text-[12px] text-gray mb-1">{item.date}</div>
              <h3 className="font-display font-extrabold text-[22px] text-brand-black mb-2">{item.title}</h3>
              <p className="font-body font-normal text-[16px] text-gray">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
