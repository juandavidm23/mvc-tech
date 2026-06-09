import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Marquee from '../components/home/Marquee';
import ProductCard from '../components/home/ProductCard';
import TrustSection from '../components/home/TrustSection';
import ContactForm from '../components/home/ContactForm';
import Pill from '../components/ui/Pill';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Hero />
      <Marquee />

      {/* PORTAFOLIO Y SERVICIOS */}
      <section id="productos" className="bg-base py-[80px] md:py-[120px] px-5 lg:px-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14">
            <Pill text="Portafolio y Servicios" className="mb-5" />
            <h2 className="font-display font-bold text-[36px] md:text-[52px] text-graphite leading-tight max-w-[640px] mb-3 tracking-[-0.02em]">
              SOFTWARE QUE YA CORRE. SERVICIOS PARA EL TUYO.
            </h2>
            <p className="font-body font-normal text-[17px] text-mid">
              Dos productos propios en producción — y dos líneas de servicio a la medida de tu negocio.
            </p>
          </div>

          {/* Productos propios */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-7">
              <span className="font-mono text-[11px] text-mid uppercase tracking-[0.08em] whitespace-nowrap">Productos propios</span>
              <div className="flex-1 h-px bg-gray-light" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ProductCard
                dark={false}
                badge="Blockchain · Web3"
                number="01"
                name="Tsegura"
                description="Plataforma de ticketing para eventos con validación blockchain. Los organizadores venden boletas digitales como NFTs en Polygon — con control de acceso en puerta y reportes en tiempo real."
                features={[
                  "Venta de tickets digitales NFT",
                  "Validación blockchain en puerta",
                  "Panel para organizadores",
                  "Reportes en tiempo real",
                  "Integración con Stripe",
                ]}
                linkText="Conocer Tsegura →"
                linkHref="#"
              />
              <ProductCard
                dark={false}
                badge="SaaS · Deportes"
                number="02"
                name="canchApp"
                description="Sistema de reservas para canchas deportivas. Los administradores gestionan horarios y pagos desde un panel web — y los usuarios reservan en minutos desde su celular."
                features={[
                  "Reservas en línea 24/7",
                  "Gestión de horarios y canchas",
                  "Pagos digitales integrados",
                  "Notificaciones automáticas",
                  "Historial por cliente",
                ]}
                linkText="Conocer canchApp →"
                linkHref="#"
              />
            </div>
          </div>

          {/* Servicios */}
          <div>
            <div className="flex items-center gap-4 mb-7">
              <span className="font-mono text-[11px] text-mid uppercase tracking-[0.08em] whitespace-nowrap">Servicios</span>
              <div className="flex-1 h-px bg-gray-light" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ProductCard
                dark={true}
                badge="Custom · B2B"
                number="03"
                name="Desarrollo a medida"
                description="Tu operación tiene problemas que ninguna app genérica resuelve. Levantamos requerimientos, diseñamos, construimos e implementamos — y nos quedamos con soporte continuo."
                features={[
                  "Levantamiento de requerimientos",
                  "Diseño UX/UI incluido",
                  "Backend + Frontend completo",
                  "Implementación y acompañamiento",
                  "Soporte continuo post-lanzamiento",
                ]}
                linkText="Hablemos de tu proyecto →"
                linkHref="#contacto"
              />
              <ProductCard
                dark={true}
                badge="IA · Agentes · WhatsApp"
                number="04"
                name="Automatización con IA"
                description="Agentes inteligentes que trabajan por tu negocio — atienden clientes, procesan datos, generan reportes y ejecutan flujos automáticos vía WhatsApp o web. Sin código para el usuario final."
                features={[
                  "Agentes conversacionales WhatsApp",
                  "Flujos n8n personalizados",
                  "Integración con Gemini API",
                  "Conexión con Google Sheets y bases de datos",
                  "Reportes automáticos",
                ]}
                linkText="Conocer más →"
                linkHref="#contacto"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      <ContactForm />
    </main>
  );
};

export default Home;
