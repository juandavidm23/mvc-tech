import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import Timeline from '../components/about/Timeline';
import MissionVision from '../components/about/MissionVision';
import TeamCard from '../components/about/TeamCard';
import Values from '../components/about/Values';
import ClosingInsight from '../components/about/ClosingInsight';
import Pill from '../components/ui/Pill';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <AboutHero />
      <Timeline />
      <MissionVision />

      {/* SECCIÓN 5 — EL EQUIPO */}
      <section className="bg-surface py-[60px] md:py-[100px] px-5 lg:px-[80px]">
        <div className="mb-16">
          <Pill text="El equipo" className="mb-5" />
          <h2 className="font-display font-extrabold text-[36px] md:text-[52px] text-graphite leading-tight">
            TRES INGENIEROS. UN SOLO OBJETIVO.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamCard
            initials="JM"
            name="Juan David Moreno"
            role="Full Stack Developer · PM"
            stack={['React', 'Spring Boot', 'AI', 'Solidity']}
            quote="El objetivo nunca es el software, es el valor que le entrega al cliente."
          />
          <TeamCard
            initials="JC"
            name="Juan Esteban Cuadros"
            role="Backend Developer · Arquitectura"
            stack={['Spring Boot', 'PostgreSQL', 'Docker', 'APIs']}
            quote="El que piensa cómo conectar todo antes de que alguien lo pida."
          />
          <TeamCard
            initials="AV"
            name="Andrés Fernando Vidal"
            role="Frontend Developer · UX"
            stack={['React', 'TypeScript', 'Tailwind', 'UX/UI']}
            quote="Si el usuario no lo entiende en 30 segundos, hay que rediseñar."
          />
        </div>
      </section>

      <Values />
      <ClosingInsight />
    </main>
  );
};

export default About;
