import React from 'react';

const ClosingInsight = () => {
  return (
    <section className="bg-graphite py-[60px] md:py-[100px] px-5 lg:px-[80px] text-center relative overflow-hidden">
      {/* Comillas decorativas de fondo */}
      <span className="font-display font-extrabold text-[220px] text-coral absolute -top-[20px] left-[60px] z-0 leading-none select-none">
        "
      </span>

      {/* Texto principal */}
      <div className="relative z-10">
        <p className="font-display font-extrabold text-[28px] md:text-[42px] text-surface max-w-[800px] mx-auto leading-[1.2] mb-6">
          El empresario payanés no compra tecnología. Compra la capacidad de escalar su negocio sin perder el control.
        </p>

      </div>
    </section>
  );
};

export default ClosingInsight;
