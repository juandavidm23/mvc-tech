import React from 'react';
import RevealOnScroll from '../ui/RevealOnScroll';

const stats = [
  { value: '2', label: 'Productos en producción' },
  { value: '100%', label: 'Hecho en Colombia' },
  { value: '2026', label: 'Fundada en Popayán' },
];

const TrustSection = () => {
  return (
    <section className="bg-graphite py-[80px] md:py-[100px] px-5 lg:px-[80px]">
      <div className="max-w-[1200px] mx-auto">
        <RevealOnScroll>
          {/* NASA Space Apps badge — credencial externo más importante */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3">
              <span className="text-lg">🏆</span>
              <span className="font-mono text-[13px] text-white/80">
                1er lugar · <span className="text-white font-semibold">NASA Space Apps Challenge</span> · Popayán 2025
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:divide-x md:divide-white/10 gap-10 md:gap-0 mb-14">
            {stats.map((stat, i) => (
              <div key={i} className="flex-1 text-center md:px-10 first:md:pl-0 last:md:pr-0">
                <p className="font-display font-bold text-[72px] md:text-[88px] leading-none text-white mb-2">
                  {stat.value}
                </p>
                <p className="font-body text-[15px] text-gray">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="font-display font-bold text-[22px] md:text-[28px] text-white/80 text-center max-w-[680px] mx-auto leading-snug tracking-[-0.01em]">
            No vendemos promesas. Vendemos software que ya está corriendo en producción.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default TrustSection;
