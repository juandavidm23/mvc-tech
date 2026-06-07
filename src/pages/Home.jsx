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
      
      {/* SECCIÓN 4 — LOS 4 PRODUCTOS */}
      <section id="productos" className="bg-cream py-[80px] md:py-[120px] px-5 lg:px-[80px]">
        <div className="mb-16">
          <Pill text="Lo que hemos construido" className="mb-5" />
          <h2 className="font-display font-extrabold text-[36px] md:text-[56px] text-brand-black leading-tight max-w-[620px] mb-3">
            CUATRO PRODUCTOS. TODOS FUNCIONANDO.
          </h2>
          <p className="font-body font-normal text-[18px] text-gray">
            No son prototipos. Son plataformas reales con usuarios reales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ProductCard 
            dark={false}
            badge="Blockchain · Web3"
            number="01"
            name="Tsegura"
            description="Plataforma de ticketing para eventos con validación blockchain. Los organizadores venden boletas digitales como NFTs en Polygon — con control de acceso en puerta, reportes de ventas en tiempo real y panel de administración completo."
            features={[
              "Venta de tickets digitales NFT",
              "Validación blockchain en puerta",
              "Panel para organizadores",
              "Reportes en tiempo real",
              "Integración con Stripe"
            ]}
            linkText="Conocer Tsegura &rarr;"
            linkHref="#"
          />

          <ProductCard 
            dark={false}
            badge="SaaS · Deportes"
            number="02"
            name="canchApp"
            description="Sistema de reservas para canchas deportivas y escenarios. Los administradores gestionan horarios, cancelaciones y pagos digitales desde un panel web — y los usuarios reservan en minutos desde su celular."
            features={[
              "Reservas en línea 24/7",
              "Gestión de horarios y canchas",
              "Pagos digitales integrados",
              "Notificaciones automáticas",
              "Historial por cliente"
            ]}
            linkText="Conocer canchApp &rarr;"
            linkHref="#"
          />

          <ProductCard 
            dark={true}
            badge="Custom · B2B"
            number="03"
            name="Desarrollo a medida"
            description="Tu operación tiene problemas únicos que ninguna app genérica resuelve. Nosotros levantamos requerimientos, diseñamos, construimos e implementamos — y nos quedamos con soporte continuo."
            features={[
              "Levantamiento de requerimientos",
              "Diseño UX/UI incluido",
              "Backend + Frontend completo",
              "Implementación y acompañamiento",
              "Soporte continuo post-lanzamiento"
            ]}
            linkText="Hablemos de tu proyecto &rarr;"
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
              "Reportes automáticos"
            ]}
            linkText="Conocer más &rarr;"
            linkHref="#"
          />
        </div>
      </section>

      <TrustSection />
      <ContactForm />
    </main>
  );
};

export default Home;
