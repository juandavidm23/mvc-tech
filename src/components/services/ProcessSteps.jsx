import React from 'react';

const ProcessSteps = () => {
  const steps = [
    {
      num: '01',
      title: 'Descubrimiento',
      text: 'El cliente nos encuentra por redes sociales, referidos o eventos locales. Agendamos una reunión — presencial en Popayán o virtual — para entender su operación a fondo.'
    },
    {
      num: '02',
      title: 'Demostración',
      text: 'Mostramos cómo la solución resuelve sus problemas específicos. Si es Tsegura o canchApp, lo vemos en vivo. Si es desarrollo a medida, presentamos el plan. La venta se cierra cuando el cliente ve su problema resuelto.'
    },
    {
      num: '03',
      title: 'Acompañamiento',
      text: 'Primera semana con acompañamiento presencial. Configuración en el local. Capacitación al equipo. Soporte continuo por WhatsApp. Visitas periódicas cuando el cliente lo necesita.'
    }
  ];

  return (
    <section className="bg-brand-black py-[60px] md:py-[80px] px-5 lg:px-[80px]">
      <h2 className="font-display font-extrabold text-[36px] text-cream text-center mb-14 uppercase tracking-wide">
        ASÍ TRABAJAMOS CON CADA CLIENTE.
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0 relative">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 w-full lg:w-auto">
              <span className="font-mono text-[13px] text-gray">{step.num}</span>
              <h3 className="font-display font-extrabold text-[24px] text-cream mt-3 mb-2">{step.title}</h3>
              <p className="font-body font-normal text-[16px] text-gray leading-relaxed max-w-sm">
                {step.text}
              </p>
            </div>
            {/* Arrow separator (hidden on mobile) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:flex items-center justify-center flex-shrink-0 px-4">
                <span className="font-display font-extrabold text-[32px] text-brand-dark2">&rarr;</span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;
