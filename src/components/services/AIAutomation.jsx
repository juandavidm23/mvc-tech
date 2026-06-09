import React from 'react';
import FlowDiagram from './FlowDiagram';
import Button from '../ui/Button';

const AIAutomation = () => {
  const useCases = [
    { badge: 'Atención al cliente', text: 'Agente WhatsApp que responde preguntas frecuentes, agenda citas y escala casos complejos.' },
    { badge: 'Screening de CVs', text: 'Flujo automático que evalúa hojas de vida con IA y genera ranking de candidatos en Google Sheets.' },
    { badge: 'Reportes automáticos', text: 'Generación programada de reportes de ventas, inventario o métricas enviados por WhatsApp.' },
    { badge: 'Integración de datos', text: 'Conexión entre tus herramientas existentes para que los datos fluyan sin intervención manual.' }
  ];

  return (
    <section className="bg-graphite py-[80px] md:py-[120px] px-5 lg:px-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-[80px]">
        {/* Left Col - Diagram */}
        <div className="order-2 lg:order-1 flex items-center">
          <FlowDiagram />
        </div>

        {/* Right Col - Content */}
        <div className="order-1 lg:order-2">
          <span className="inline-block bg-coral text-white font-mono text-[12px] uppercase tracking-wide px-4 py-1.5 rounded-full mb-5">
            Línea 02
          </span>
          <h2 className="font-display font-extrabold text-[36px] md:text-[56px] text-surface uppercase my-5 leading-none">
            AUTOMATIZACIÓN CON IA
          </h2>
          <p className="font-body font-normal text-[18px] text-gray mb-10">
            Construimos agentes inteligentes que trabajan por tu negocio. Atienden clientes, procesan solicitudes, generan reportes y ejecutan flujos completos — vía WhatsApp o web, 24/7, sin intervención manual.
          </p>

          <div className="flex flex-col gap-5">
            {useCases.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="inline-block bg-coral text-white font-mono text-[11px] rounded px-2.5 py-1 whitespace-nowrap self-start">
                  {item.badge}
                </span>
                <p className="font-body font-normal text-[15px] text-gray">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {['n8n', 'Python', 'Gemini API', 'WhatsApp Business', 'Google Sheets'].map((tech, idx) => (
              <span key={idx} className="inline-block bg-surface text-graphite font-mono text-[11px] rounded px-2.5 py-1">
                {tech}
              </span>
            ))}
          </div>

          <div className="border-t border-white/10 mt-10 pt-6">
            <p className="font-body font-normal text-[15px] text-gray mb-4">
              Desde suscripción mensual o proyecto puntual según el caso.
            </p>
            <a href="/#contacto" className="inline-block w-full sm:w-auto">
              <button className="bg-surface text-graphite hover:bg-white rounded-md px-7 py-3.5 font-body font-medium text-[15px] transition-colors w-full sm:w-auto">
                Hablar de mi caso →
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAutomation;
