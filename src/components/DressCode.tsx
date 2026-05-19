"use client";

import { motion } from "framer-motion";
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
  driftX: number;
  driftY: number;
};

function generateSparkles(): Sparkle[] {
  return Array.from({ length: 45 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    color: i % 5 === 0 ? "rgba(255,0,127,0.6)" : "rgba(220,220,240,0.45)",
    size: Math.random() * 2.5 + 1.5,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 8,
    driftX: (Math.random() - 0.5) * 50,
    driftY: (Math.random() - 0.5) * 50,
  }));
}

export function DressCode() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  useEffect(() => { setSparkles(generateSparkles()); }, []);

  return (
    <section className="relative py-14 md:py-20 px-10 bg-[#050505] flex flex-col items-center overflow-hidden">
      
      {/* Brillos animados de fondo */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {sparkles.map((s) => (
          <motion.svg
            key={s.id}
            viewBox="0 0 20 20"
            className="absolute"
            style={{
              top: s.top, left: s.left,
              width: `${s.size * 5}px`, height: `${s.size * 5}px`,
              overflow: "visible",
              filter: `drop-shadow(0 0 ${s.size}px ${s.color})`,
            }}
            animate={{ opacity: [0, 0.9, 0], scale: [0.4, 1, 0.4], x: [0, s.driftX, 0], y: [0, s.driftY, 0] }}
            transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          >
            <defs>
              <radialGradient id={`dc-sg-${s.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor={s.color} stopOpacity="1" />
                <stop offset="45%"  stopColor={s.color} stopOpacity="0.5" />
                <stop offset="100%" stopColor={s.color} stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="20" cy="20" rx="1.2" ry="20" fill={`url(#dc-sg-${s.id})`} />
            <ellipse cx="20" cy="20" rx="20" ry="1.2" fill={`url(#dc-sg-${s.id})`} />
            <g transform="rotate(45 20 20)">
              <ellipse cx="20" cy="20" rx="0.7" ry="13" fill={`url(#dc-sg-${s.id})`} opacity="0.45" />
              <ellipse cx="20" cy="20" rx="13" ry="0.7" fill={`url(#dc-sg-${s.id})`} opacity="0.45" />
            </g>
            <circle cx="20" cy="20" r="2.2" fill={s.color} opacity="0.95" />
          </motion.svg>
        ))}
      </div>
      {/* Viñeta para suavizar los bordes */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_85%)] pointer-events-none" />

      {/* Borde decorativo interior */}
      <div className="absolute inset-4 md:inset-8 border border-white/5 rounded-sm pointer-events-none z-0" />
      <div className="absolute inset-[20px] md:inset-[38px] border-[0.5px] border-white/5 rounded-sm pointer-events-none z-0" />

      {/* Línea de acento superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-[#ff007f]/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 max-w-4xl text-center w-full flex flex-col items-center">
        
        <AnimatedSection once className="mb-6 md:mb-10">
          <SectionHeader 
            title={siteConfig.dressCode.mainTitle} 
            subtitle={siteConfig.dressCode.topLabel} 
            titleClassName="font-pinyon text-5xl md:text-7xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            subtitleClassName="text-[#ff007f] tracking-[0.5em] font-sans font-bold text-[10px] md:text-xs mb-4 drop-shadow-[0_0_10px_rgba(255,0,127,0.4)]"
            className="mb-0" 
          />
        </AnimatedSection>

        <AnimatedSection once className="flex flex-col items-center w-full">
          {/* Sello Central VIP */}
          <div className="mb-10 md:mb-14 relative flex flex-col items-center">
            {/* Anillo exterior fucsia */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full border border-dashed border-[#ff007f]/20 pointer-events-none"
            />
            {/* Sello principal */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56 bg-[#0a0a0a] rounded-full shadow-[0_0_40px_rgba(255,0,127,0.1),inset_0_0_30px_rgba(255,255,255,0.02)] border border-white/20 transition-transform duration-700 ease-out"
            >
               <div className="absolute inset-[6px] md:inset-[10px] border border-white/10 rounded-full pointer-events-none" />
               <span className="font-serif text-2xl md:text-4xl tracking-[0.3em] text-white font-light uppercase text-center z-10 ml-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                 {siteConfig.dressCode.type}
               </span>
            </motion.div>
          </div>

          {/* Colores reservados */}
          <div className="flex flex-col gap-5 text-center max-w-2xl w-full mx-auto px-4 md:px-8">
            
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center justify-center gap-5 mb-1">
                <motion.div 
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} 
                  transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  className="w-8 h-8 rounded-full bg-[#ff007f] shadow-[0_0_20px_rgba(255,0,127,0.5)]"
                />
                <div className="w-px h-6 bg-white/10" />
                <motion.div 
                  initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} 
                  transition={{ type: "spring", bounce: 0.5, delay: 0.4 }}
                  className="w-8 h-8 rounded-full shadow-[0_0_20px_rgba(192,192,192,0.4)] bg-gradient-to-tr from-[#888888] via-[#ffffff] to-[#c0c0c0]"
                />
              </div>

              <p className="font-sans text-[10px] md:text-[11px] text-gray-400 leading-loose tracking-[0.2em] uppercase max-w-md">
                {siteConfig.dressCode.reservedColorsText.prefix}
                {" "}<strong className="text-[#ff007f] font-bold tracking-[0.25em]">{siteConfig.dressCode.reservedColorsText.color1}</strong>{" "}
                Y{" "}
                <strong className="text-gray-300 font-bold tracking-[0.25em]">{siteConfig.dressCode.reservedColorsText.color2}</strong>
                <br/>
                <span className="mt-2 block text-gray-500">ESTÁN RESERVADOS EXCLUSIVAMENTE PARA LA QUINCEAÑERA.</span>
              </p>
            </div>
            
            {/* Separador */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
            
            {/* Nota adicional */}
            <p className="font-sans text-[9px] md:text-[10px] text-gray-500 leading-loose tracking-[0.2em] uppercase max-w-md mx-auto">
              {siteConfig.dressCode.extraNotes.prefix}{" "}
              <strong className="text-white font-semibold">{siteConfig.dressCode.extraNotes.highlight}</strong>{" "}
              {siteConfig.dressCode.extraNotes.suffix}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
