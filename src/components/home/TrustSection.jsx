import React from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';

const TrustSection = () => {
  return (
    <section className="bg-brand-black py-[60px] md:py-[100px] px-5 lg:px-[80px] text-center">
      <RevealOnScroll>
        <h2 className="font-display font-extrabold text-[32px] md:text-[48px] text-cream leading-[1.1] max-w-[800px] mx-auto mb-5">
          Tsegura y canchApp ya existen. Ya funcionan. Los construimos nosotros.
        </h2>
        <p className="font-body font-normal text-[18px] text-gray">
          No vendemos promesas. Vendemos software que ya está corriendo en producción.
        </p>
      </RevealOnScroll>
    </section>
  );
};

export default TrustSection;
