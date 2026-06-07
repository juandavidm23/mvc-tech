import React from 'react';

const FlowDiagram = () => {
  return (
    <div className="bg-brand-dark3 border border-brand-dark2 rounded-xl p-8 min-h-[380px] flex flex-col items-center justify-center w-full">
      <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
        {/* Nodo 1 */}
        <div className="bg-brand-accent border border-brand-dark2 rounded-lg py-3 px-5 flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#25D366] rounded-full"></div>
          <span className="font-mono text-[12px] text-gray-light">WhatsApp API</span>
        </div>

        {/* Flecha */}
        <span className="font-display font-extrabold text-[24px] text-brand-dark2 rotate-90 md:rotate-0">&rarr;</span>

        {/* Nodo 2 */}
        <div className="bg-[#1A2A1A] border border-[#2A3A2A] rounded-lg py-3 px-5 flex flex-col items-center">
          <span className="font-mono text-[13px] text-gray-light font-bold">n8n</span>
          <span className="font-mono text-[11px] text-gray mt-1">+ Gemini API</span>
        </div>

        {/* Flecha */}
        <span className="font-display font-extrabold text-[24px] text-brand-dark2 rotate-90 md:rotate-0">&rarr;</span>

        {/* Nodo 3 */}
        <div className="bg-[#1A1A1A] border border-brand-dark2 rounded-lg py-3 px-5">
          <span className="font-mono text-[12px] text-gray-light">Google Sheets</span>
        </div>
      </div>

      <div className="mt-8 text-center">
        <span className="font-mono text-[11px] text-brand-dark2">
          — flujo de automatización real —
        </span>
      </div>
    </div>
  );
};

export default FlowDiagram;
