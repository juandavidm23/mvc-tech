import React from 'react';

const MissionVision = () => {
  return (
    <section className="bg-graphite py-[60px] md:py-[100px] px-5 lg:px-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] md:gap-0 relative">
        {/* Separador vertical (solo desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2"></div>

        {/* Misión */}
        <div className="md:pr-[60px]">
          <span className="font-mono text-[12px] text-gray uppercase">Misión</span>
          <p className="font-display font-extrabold text-[28px] text-surface leading-[1.3] mt-5">
            Que un negocio en Popayán pueda tener el mismo software que usan las empresas en Bogotá — sin necesitar el presupuesto de Bogotá.
          </p>
        </div>

        {/* Visión */}
        <div className="md:pl-[60px]">
          <span className="font-mono text-[12px] text-gray uppercase">Visión</span>
          <p className="font-display font-extrabold text-[28px] text-surface leading-[1.3] mt-5">
            Ser el equipo técnico de confianza de las PYMEs del suroccidente colombiano: el que construye su software, automatiza sus procesos y los acompaña mientras crecen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
