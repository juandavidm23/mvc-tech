import React, { useEffect } from 'react';
import ServicesHero from '../components/services/ServicesHero';
import ProcessSteps from '../components/services/ProcessSteps';
import CustomDev from '../components/services/CustomDev';
import AIAutomation from '../components/services/AIAutomation';
import PricingCard from '../components/services/PricingCard';
import FinalCTA from '../components/services/FinalCTA';
import Pill from '../components/ui/Pill';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <ServicesHero />
      <ProcessSteps />
      <CustomDev />
      <AIAutomation />

      {/* SECCIÓN 6 — TABLA DE PRECIOS */}
      <section className="bg-cream py-[60px] md:py-[100px] px-5 lg:px-[80px]">
        <div className="mb-16 text-center md:text-left">
          <Pill text="Precios" className="mb-3" />
          <h2 className="font-display font-extrabold text-[36px] md:text-[52px] text-brand-black leading-tight mb-3 uppercase">
            CLARO Y SIN LETRA PEQUEÑA.
          </h2>
          <p className="font-body font-normal text-[18px] text-gray">
            Los productos propios tienen precio fijo mensual. Desarrollo y automatización se cotizan según el proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PricingCard
            title="Tsegura"
            badge="Blockchain · Web3"
            basicFeatures={[
              "Hasta 2 eventos al mes",
              "Panel de organizador",
              "Soporte por WhatsApp"
            ]}
            proFeatures={[
              "Eventos ilimitados",
              "Validación blockchain",
              "Reportes avanzados",
              "Soporte prioritario"
            ]}
          />
          <PricingCard
            title="canchApp"
            badge="SaaS · Deportes"
            basicFeatures={[
              "Hasta 2 canchas",
              "Reservas ilimitadas",
              "Notificaciones automáticas"
            ]}
            proFeatures={[
              "Canchas ilimitadas",
              "Pagos digitales integrados",
              "Reportes y métricas",
              "Soporte prioritario"
            ]}
          />
        </div>

        <div className="mt-12 text-center">
          <p className="font-body font-normal text-[15px] text-gray mb-6">
            Desarrollo a medida y automatización: cotización personalizada según alcance.
          </p>
          <button className="bg-transparent text-brand-black border-[1.5px] border-brand-black hover:bg-brand-black hover:text-cream rounded-md px-7 py-3.5 font-body font-medium text-[15px] transition-all duration-200">
            Solicitar cotización &rarr;
          </button>
        </div>
      </section>

      <FinalCTA />
    </main>
  );
};

export default Services;
