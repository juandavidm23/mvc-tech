import React, { useState, useEffect } from 'react';
import Pill from '../ui/Pill';
import Button from '../ui/Button';

const MESSAGES = [
  { id: 1, from: 'user', text: '¿Cuánto vendí esta semana?' },
  { id: 2, from: 'bot',  text: 'Esta semana: 23 ventas por $1.84M 📊\nLunes fue tu mejor día con 8 pedidos.' },
  { id: 3, from: 'user', text: '¿Quién compró más?' },
  { id: 4, from: 'bot',  text: 'Restaurante El Fogón: 6 compras este mes. ¿Le envío una oferta especial? 🎯' },
];

const ChatWidget = () => {
  const [visible, setVisible] = useState([]);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));

    const run = async () => {
      if (cancelled) return;
      setVisible([]);
      setTyping(false);

      await wait(500);
      if (cancelled) return;
      setVisible([MESSAGES[0]]);

      await wait(800);
      if (cancelled) return;
      setTyping(true);

      await wait(750);
      if (cancelled) return;
      setTyping(false);
      setVisible([MESSAGES[0], MESSAGES[1]]);

      await wait(1600);
      if (cancelled) return;
      setVisible([MESSAGES[0], MESSAGES[1], MESSAGES[2]]);

      await wait(800);
      if (cancelled) return;
      setTyping(true);

      await wait(750);
      if (cancelled) return;
      setTyping(false);
      setVisible([...MESSAGES]);

      await wait(4000);
      if (!cancelled) run();
    };

    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="w-full max-w-[320px] mx-auto lg:mx-0">
      <div className="bg-white rounded-2xl shadow-xl shadow-indigo/8 border border-gray-light overflow-hidden">
        {/* Header */}
        <div className="bg-graphite px-4 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-display font-bold">M</span>
          </div>
          <div>
            <p className="font-display font-semibold text-white text-[13px] leading-none mb-0.5">MVC Agente IA</p>
            <p className="font-body text-indigo-light text-[11px]">● en línea</p>
          </div>
        </div>

        {/* Messages */}
        <div className="bg-surface px-3.5 py-4 flex flex-col gap-2.5 min-h-[220px]">
          {visible.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'} animate-chat-in`}
            >
              <div className={`max-w-[82%] rounded-xl px-3 py-2 text-[12.5px] font-body leading-snug whitespace-pre-line ${
                msg.from === 'user'
                  ? 'bg-indigo text-white rounded-br-sm'
                  : 'bg-white text-graphite rounded-bl-sm shadow-sm border border-gray-light'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {typing && (
            <div className="flex justify-start animate-chat-in">
              <div className="bg-white rounded-xl rounded-bl-sm px-3.5 py-2.5 shadow-sm border border-gray-light">
                <div className="flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-mid animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-mid animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-mid animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div className="bg-white border-t border-gray-light px-3.5 py-2.5 flex items-center gap-2">
          <div className="flex-1 bg-surface rounded-full px-3.5 py-2 text-[11.5px] font-body text-mid">
            Pregúntale algo...
          </div>
          <div className="w-7 h-7 rounded-full bg-coral flex items-center justify-center flex-shrink-0">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
          </div>
        </div>
      </div>

      <p className="text-center text-[11px] font-body text-mid mt-2.5 tracking-wide">
        Agente IA · Responde por WhatsApp
      </p>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="min-h-screen bg-base flex items-center pt-[100px] pb-[80px] px-5 lg:px-[80px] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo/5 blur-[120px]" />
        <div className="absolute bottom-0 left-[10%] w-[350px] h-[350px] rounded-full bg-coral/4 blur-[100px]" />
      </div>

      <div className="w-full max-w-[1200px] mx-auto relative">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">

          {/* Left: Copy */}
          <div className="flex-1 max-w-[580px]">
            <div className="animate-[fade-in_1s_ease-out_100ms_both]">
              <Pill text="Popayán, Colombia · 2026" className="mb-8" />
            </div>

            <h1 className="font-display font-bold text-[36px] md:text-[48px] lg:text-[60px] text-graphite leading-[1.05] tracking-[-0.02em] mb-4 animate-[fade-in_1s_ease-out_200ms_both]">
              ¿Todavía gestionas tu negocio a mano?
            </h1>

            <p className="font-display font-bold text-[26px] md:text-[34px] lg:text-[40px] text-indigo leading-tight tracking-[-0.01em] mb-6 animate-[fade-in_1s_ease-out_280ms_both]">
              Hay una mejor forma.
            </p>

            <p className="font-body font-normal text-[16px] md:text-[17px] text-mid max-w-[480px] mb-10 leading-relaxed animate-[fade-in_1s_ease-out_350ms_both]">
              Agentes IA que atienden por WhatsApp, ticketing con blockchain y software hecho a la medida de tu negocio — desde Popayán para Colombia.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-[fade-in_1s_ease-out_420ms_both]">
              <a href="#productos" className="w-full sm:w-auto">
                <Button variant="coral">Ver cómo funciona</Button>
              </a>
              <a href="#contacto" className="w-full sm:w-auto">
                <Button variant="outline">Hablemos de tu negocio</Button>
              </a>
            </div>
          </div>

          {/* Right: Chat Widget */}
          <div className="flex-shrink-0 w-full lg:w-auto animate-[fade-in_1s_ease-out_500ms_both]">
            <ChatWidget />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce-soft">
        <span className="font-mono text-[11px] text-mid tracking-widest">↓</span>
      </div>
    </section>
  );
};

export default Hero;
