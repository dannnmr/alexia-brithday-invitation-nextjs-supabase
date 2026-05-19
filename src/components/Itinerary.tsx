"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";

type Sparkle = {
  id: number;
  top: string;
  left: string;
  color: string;
  size: number;
  duration: number;
  delay: number;
};

function generateSparkles(count: number): Sparkle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    color: i % 7 === 0 ? "rgba(255,0,127,0.5)" : "rgba(220,220,240,0.55)",
    size: Math.random() * 3 + 2,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 6,
  }));
}

export function Itinerary() {
  // Generado en el cliente para evitar hydration mismatch con Math.random()
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    setSparkles(generateSparkles(isMobile ? 12 : 35));
  }, []);

  return (
    <section className="relative py-10 px-6 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#050505' }}>
      
      {/* === BRILLOS ANIMADOS (Destellos de Bola de Disco) === */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {sparkles.map((s) => (
          <motion.svg
            key={s.id}
            viewBox="0 0 20 20"
            className="absolute"
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size * 5}px`,
              height: `${s.size * 5}px`,
              overflow: "visible",
              filter: `drop-shadow(0 0 ${s.size}px ${s.color})`,
            }}
            animate={{
              opacity: [0, 0.95, 0],
              scale: [0.4, 1, 0.4],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          >
            <defs>
              {/* Gradiente radial: brillante en el centro, transparente en las puntas */}
              <radialGradient id={`sg-${s.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor={s.color} stopOpacity="1" />
                <stop offset="45%"  stopColor={s.color} stopOpacity="0.5" />
                <stop offset="100%" stopColor={s.color} stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Rayo vertical (más largo y fino) */}
            <ellipse cx="20" cy="20" rx="1.2" ry="20" fill={`url(#sg-${s.id})`} />
            {/* Rayo horizontal (igual de largo) */}
            <ellipse cx="20" cy="20" rx="20" ry="1.2" fill={`url(#sg-${s.id})`} />
            {/* Rayos diagonales (más cortos y tenues para dar volumen) */}
            <g transform="rotate(45 20 20)">
              <ellipse cx="20" cy="20" rx="0.7" ry="13" fill={`url(#sg-${s.id})`} opacity="0.45" />
              <ellipse cx="20" cy="20" rx="13" ry="0.7" fill={`url(#sg-${s.id})`} opacity="0.45" />
            </g>
            {/* Punto central brillante */}
            <circle cx="20" cy="20" r="2.2" fill={s.color} opacity="0.95" />
          </motion.svg>
        ))}
      </div>
      {/* Viñeta de borde para que los brillos se suavicen */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050505_90%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center">
        <AnimatedSection once>
          <SectionHeader 
            title={siteConfig.itinerary.mainTitle} 
            subtitle={siteConfig.itinerary.topLabel} 
            titleClassName="lg:text-[6rem]" 
          />
        </AnimatedSection>

        <div className="w-full relative">
          {/* Línea editorial central fina (Plateada) */}
          <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 w-px bg-linear-to-b from-transparent via-[#c0c0c0]/50 to-transparent"></div>

          <div className="flex flex-col gap-6 md:gap-8 w-full max-w-3xl mx-auto">
            {siteConfig.itinerary.schedule.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <AnimatedSection
                  key={index}
                  once
                  delay={index * 0.05}
                  className={`flex-row! relative items-center w-full ${
                    isEven ? "md:flex-row!" : "md:flex-row-reverse!"
                  }`}
                >
                  {/* Decorador de línea central (Punto Plateado Brillante) */}
                  <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-linear-to-br from-white to-[#c0c0c0] z-10 shadow-[0_0_10px_rgba(255,255,255,0.8)] border border-white/50"></div>

                  {/* Espacio Vacío para balancear en desktop */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Contenedor Flex: Imagen al lado del Texto */}
                  <div className={`w-full md:w-1/2 pl-8 min-[380px]:pl-12 md:pl-0 flex items-center gap-2 min-[380px]:gap-3 md:gap-6 ${
                    isEven ? "md:pr-10 lg:pr-14 md:flex-row-reverse md:text-right" : "md:pl-10 lg:pl-14 md:text-left"
                  }`}>
                    
                    {/* Imagen Decorativa */}
                    <motion.div 
                      whileHover={{ scale: 1.05, rotate: isEven ? 5 : -5 }}
                      className="relative w-8 h-8 min-[350px]:w-10 min-[350px]:h-10 min-[380px]:w-12 min-[380px]:h-12 md:w-16 md:h-16 shrink-0 z-10"
                    >
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill 
                        className="object-contain drop-shadow-sm opacity-90" 
                      />
                    </motion.div>

                    {/* Bloque de Textos */}
                    <div className="flex flex-col flex-1 min-w-0 z-20">
                      <div className={`flex items-baseline w-full justify-between md:justify-normal md:w-auto mb-1 md:mb-0.5 ${isEven ? 'flex-row-reverse md:gap-2' : 'flex-row-reverse md:flex-row md:gap-2'}`}>
                        {/* Tiempo */}
                        <span className="font-sans text-[12px] min-[350px]:text-[14px] min-[380px]:text-lg md:text-2xl font-light text-[#c0c0c0] italic tracking-wider shrink-0 mr-1 min-[380px]:mr-3 md:mr-0 z-10 drop-shadow-[0_0_8px_rgba(192,192,192,0.3)]">
                          {item.time}
                        </span>
                        
                        {/* Separador de Desktop */}
                        <div className="hidden md:block w-4 h-px bg-linear-to-r from-transparent via-white/40 to-transparent shrink-0"></div>
                        
                        {/* Separador elástico tipo Menú en Móvil */}
                        <div className="md:hidden flex-1 border-b border-dotted border-white/30 mx-1 min-[380px]:mx-3 relative top-[-4px] min-[380px]:top-[-6px] min-w-[3px]"></div>
                        
                        {/* Título */}
                        <h4 className="font-sans text-[9px] min-[350px]:text-[10px] min-[380px]:text-xs md:text-base uppercase tracking-widest md:tracking-[0.2em] font-medium text-white shrink min-w-0 wrap-break-word drop-shadow-md">
                          {item.title}
                        </h4>
                      </div>
                      
                      {/* Descripción comprimida */}
                      <p className={`font-sans text-[#a1a1aa]/80 text-[8px] min-[350px]:text-[9px] min-[380px]:text-[10px] md:text-xs leading-tight tracking-wider md:tracking-widest font-light mt-0.5 md:mt-0 text-left ${isEven ? "md:text-right" : "md:text-left"} md:max-w-xs wrap-break-word`}>
                        {item.description}
                      </p>
                    </div>

                  </div>
                  
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
