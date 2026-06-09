import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Pill from '../ui/Pill';
import Button from '../ui/Button';
import { WHATSAPP_URL, EMAIL } from '../../config/contact';

// ─── EmailJS credentials ────────────────────────────────────────────────────
// 1. Crea una cuenta en https://www.emailjs.com
// 2. Crea un servicio (Gmail, Outlook, etc.) → copia el Service ID
// 3. Crea un template con las variables: {{nombre}}, {{email}}, {{empresa}}, {{mensaje}}
//    → copia el Template ID
// 4. En Account > API Keys → copia la Public Key
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
// ────────────────────────────────────────────────────────────────────────────

const ContactForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="bg-base py-[80px] md:py-[120px] px-5 lg:px-[80px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] lg:gap-[80px]">
          {/* Left */}
          <div>
            <Pill text="Hablemos" className="mb-6" />
            <h2 className="font-display font-bold text-[34px] md:text-[48px] text-graphite uppercase mb-5 leading-tight tracking-[-0.02em]">
              ¿TIENES UN PROBLEMA QUE RESOLVER?
            </h2>
            <p className="font-body font-normal text-[17px] text-mid mb-10 leading-relaxed">
              Cuéntanos cómo funciona tu negocio hoy. Nosotros te decimos qué construir — sin tecnicismos, sin compromiso.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="font-body text-[15px] text-graphite">📍 Popayán, Colombia</li>
              <li className="font-body text-[15px] text-graphite">
                ✉️ <a href={`mailto:${EMAIL}`} className="hover:text-indigo transition-colors">{EMAIL}</a>
              </li>
              <li className="font-body text-[15px] text-graphite">
                💬{' '}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo transition-colors"
                >
                  WhatsApp disponible →
                </a>
              </li>
            </ul>
          </div>

          {/* Right — Form */}
          <div className="bg-white border border-gray-light rounded-2xl p-8 md:p-10">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-indigo/10 flex items-center justify-center text-2xl">✓</div>
                <p className="font-display font-bold text-[22px] text-graphite">¡Mensaje enviado!</p>
                <p className="font-body text-[16px] text-mid">Te contactamos pronto. Revisa tu correo o espera nuestro WhatsApp.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 font-body text-[14px] text-mid hover:text-graphite underline transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-7">
                <div className="flex flex-col">
                  <label htmlFor="contact-name" className="font-body font-medium text-[12px] uppercase tracking-[0.08em] text-mid mb-2">
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="nombre"
                    required
                    placeholder="Tu nombre completo"
                    className="w-full border-b-[1.5px] border-gray-light bg-transparent py-3 font-body text-[15px] text-graphite outline-none transition-colors duration-200 focus:border-indigo placeholder:text-gray-light"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="contact-email" className="font-body font-medium text-[12px] uppercase tracking-[0.08em] text-mid mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    placeholder="tu@email.com"
                    className="w-full border-b-[1.5px] border-gray-light bg-transparent py-3 font-body text-[15px] text-graphite outline-none transition-colors duration-200 focus:border-indigo placeholder:text-gray-light"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="contact-empresa" className="font-body font-medium text-[12px] uppercase tracking-[0.08em] text-mid mb-2">
                    Empresa o negocio
                  </label>
                  <input
                    id="contact-empresa"
                    type="text"
                    name="empresa"
                    placeholder="¿Cómo se llama tu negocio?"
                    className="w-full border-b-[1.5px] border-gray-light bg-transparent py-3 font-body text-[15px] text-graphite outline-none transition-colors duration-200 focus:border-indigo placeholder:text-gray-light"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="contact-mensaje" className="font-body font-medium text-[12px] uppercase tracking-[0.08em] text-mid mb-2">
                    ¿Qué necesitas?
                  </label>
                  <textarea
                    id="contact-mensaje"
                    rows="4"
                    name="mensaje"
                    required
                    placeholder="Cuéntanos tu operación o el problema que quieres resolver"
                    className="w-full border-b-[1.5px] border-gray-light bg-transparent py-3 font-body text-[15px] text-graphite outline-none transition-colors duration-200 focus:border-indigo placeholder:text-gray-light resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="font-body text-[14px] text-coral">
                    Algo falló al enviar.{' '}
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-coral-dark"
                    >
                      Escríbenos directo por WhatsApp →
                    </a>
                  </p>
                )}

                <div className="mt-2">
                  <Button type="submit" variant="coral" className="w-full" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Enviando...' : 'Enviar mensaje →'}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
