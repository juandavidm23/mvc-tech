import React from 'react';

const PricingCard = ({ title, badge, basicFeatures, proFeatures }) => {
  return (
    <div className="bg-white border border-gray-light rounded-xl p-10 flex flex-col h-full">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-display font-extrabold text-[28px] text-graphite">{title}</h3>
        <span className="inline-block bg-surface text-graphite font-mono text-[11px] rounded px-2.5 py-1">
          {badge}
        </span>
      </div>

      {/* Plan Básico */}
      <div className="mb-6">
        <div className="mb-4">
          <span className="font-display font-extrabold text-[48px] text-graphite">$50.000</span>
          <span className="font-body font-normal text-[18px] text-gray ml-2">COP /mes</span>
        </div>
        <ul className="flex flex-col gap-2.5">
          {basicFeatures.map((feature, idx) => (
            <li key={idx} className="font-body font-normal text-[15px] text-graphite">
              <span className="mr-2 text-graphite">✓</span>{feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Separador */}
      <div className="border-t border-dashed border-gray-light my-6"></div>

      {/* Plan Profesional */}
      <div className="bg-graphite rounded-lg p-6 flex-grow flex flex-col justify-center">
        <span className="font-mono text-[11px] text-gray uppercase tracking-wide mb-3 block">
          PROFESIONAL
        </span>
        <div className="mb-4">
          <span className="font-display font-extrabold text-[48px] text-surface">$100.000</span>
          <span className="font-body font-normal text-[18px] text-gray ml-2">COP /mes</span>
        </div>
        <ul className="flex flex-col gap-2.5">
          {proFeatures.map((feature, idx) => (
            <li key={idx} className="font-body font-normal text-[15px] text-surface">
              <span className="mr-2 text-gray-light">✓</span>{feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
