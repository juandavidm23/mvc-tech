import React from 'react';
import Pill from '../ui/Pill';
import Button from '../ui/Button';

const ContactForm = () => {
  return (
    <section id="contacto" className="bg-cream py-[80px] md:py-[120px] px-5 lg:px-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px]">
        {/* Left Column */}
        <div>
          <Pill text="Hablemos" className="mb-6" />
          <h2 className="font-display font-extrabold text-[36px] md:text-[52px] text-brand-black uppercase mb-5 leading-tight">
            ¿TIENES UN PROBLEMA QUE RESOLVER?
          </h2>
          <p className="font-body font-normal text-[18px] text-gray mb-10">
            Cuéntanos cómo funciona tu negocio hoy. Nosotros te decimos qué construir — sin tecnicismos, sin compromiso.
          </p>
          <ul className="flex flex-col gap-3">
            <li className="font-body font-normal text-[16px] text-brand-black">📍 Popayán, Colombia</li>
            <li className="font-body font-normal text-[16px] text-brand-black">✉️ hola@mvctech.co</li>
            <li className="font-body font-normal text-[16px] text-brand-black">💬 WhatsApp disponible</li>
          </ul>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white border border-gray-light rounded-xl p-10">
          <form className="flex flex-col gap-8">
            <div className="flex flex-col">
              <label className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-gray mb-2">
                Nombre
              </label>
              <input 
                type="text" 
                placeholder="Tu nombre completo"
                className="w-full border-b-[1.5px] border-gray-light bg-transparent py-3 font-body text-[16px] text-brand-black outline-none transition-colors duration-200 focus:border-brand-black placeholder:text-gray-light"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-gray mb-2">
                Email
              </label>
              <input 
                type="email" 
                placeholder="tu@email.com"
                className="w-full border-b-[1.5px] border-gray-light bg-transparent py-3 font-body text-[16px] text-brand-black outline-none transition-colors duration-200 focus:border-brand-black placeholder:text-gray-light"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-gray mb-2">
                Empresa o negocio
              </label>
              <input 
                type="text" 
                placeholder="¿Cómo se llama tu negocio?"
                className="w-full border-b-[1.5px] border-gray-light bg-transparent py-3 font-body text-[16px] text-brand-black outline-none transition-colors duration-200 focus:border-brand-black placeholder:text-gray-light"
              />
            </div>
            
            <div className="flex flex-col">
              <label className="font-body font-medium text-[13px] uppercase tracking-[0.08em] text-gray mb-2">
                ¿Qué necesitas?
              </label>
              <textarea 
                rows="4"
                placeholder="Cuéntanos tu operación o el problema que quieres resolver"
                className="w-full border-b-[1.5px] border-gray-light bg-transparent py-3 font-body text-[16px] text-brand-black outline-none transition-colors duration-200 focus:border-brand-black placeholder:text-gray-light resize-none"
              ></textarea>
            </div>
            
            <div className="mt-8">
              <Button type="button" variant="primary" className="w-full">
                Enviar mensaje &rarr;
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
