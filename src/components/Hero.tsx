"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "../config/invitation";
import { useState, useEffect } from "react";

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
  return Array.from({ length: 80 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    color: i % 6 === 0 ? "rgba(255,0,127,0.6)" : "rgba(220,220,240,0.5)",
    size: Math.random() * 3 + 2,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 8,
    driftX: (Math.random() - 0.5) * 60,
    driftY: (Math.random() - 0.5) * 60,
  }));
}

export function Hero() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  useEffect(() => {
    setSparkles(generateSparkles());
  }, []);

  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden bg-black">
      
      {/* ===== BRILLOS ANIMADOS (Destellos de Bola de Disco) ===== */}
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
              x: [0, s.driftX, 0],
              y: [0, s.driftY, 0],
            }}
            transition={{
              duration: s.duration,
              repeat: Infinity,
              delay: s.delay,
              ease: "easeInOut",
            }}
          >
            <defs>
              <radialGradient id={`hero-sg-${s.id}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor={s.color} stopOpacity="1" />
                <stop offset="45%"  stopColor={s.color} stopOpacity="0.5" />
                <stop offset="100%" stopColor={s.color} stopOpacity="0" />
              </radialGradient>
            </defs>
            <ellipse cx="20" cy="20" rx="1.2" ry="20" fill={`url(#hero-sg-${s.id})`} />
            <ellipse cx="20" cy="20" rx="20" ry="1.2" fill={`url(#hero-sg-${s.id})`} />
            <g transform="rotate(45 20 20)">
              <ellipse cx="20" cy="20" rx="0.7" ry="13" fill={`url(#hero-sg-${s.id})`} opacity="0.45" />
              <ellipse cx="20" cy="20" rx="13" ry="0.7" fill={`url(#hero-sg-${s.id})`} opacity="0.45" />
            </g>
            <circle cx="20" cy="20" r="2.2" fill={s.color} opacity="0.95" />
          </motion.svg>
        ))}
      </div>
      {/* Viñeta de borde para suavizar los brillos en los extremos */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000000_90%)] pointer-events-none" />

      {/* BOLAS DE DISCO COLGANTES — Top decorativo */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.3 }}
        className="absolute top-[-5%] left-[26%] -translate-x-1/2 w-full max-w-md md:max-w-lg h-[300px] md:h-[380px] z-30 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full relative"
        >
          <Image
            src={siteConfig.visuals.hero.background}
            alt="Bolas de disco"
            fill
            className="object-contain object-top drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
            priority
          />
        </motion.div>
      </motion.div>
      {/* BOLAS DE DISCO COLGANTES — Top decorativo */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0.3 }}
        className="absolute top-[-5%] left-[80%] -translate-x-1/2 w-full max-w-md md:max-w-lg h-[300px] md:h-[380px] z-10 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full relative"
        >
          <Image
            src={siteConfig.visuals.hero.background}
            alt="Bolas de disco"
            fill
            className="object-contain object-top drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
            priority
          />
        </motion.div>
      </motion.div>

      {/* ============================================ */}
      {/* DECORACIONES NEW YORK                        */}
      {/* ============================================ */}


      {/* TOP RIGHT — Bola Disco (colgando) */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.5 }}
        className="absolute top-[3%] right-35 md:right-12 w-28 h-44 md:w-44 md:h-64 lg:w-52 lg:h-72 origin-top z-10 pointer-events-none"
      >
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full relative origin-top"
        >
          <Image src="/images/decorativas/boladisco2.png" alt="Bola Disco" fill className="object-contain object-top drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]" />
        </motion.div>
      </motion.div>
      {/* TOP RIGHT — Bola Disco (colgando) */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.5 }}
        className="absolute top-[6%] left-[-12%] md:left-28 w-35 h-35 md:w-44 md:h-64 lg:w-52 lg:h-72 origin-top z-10 pointer-events-none"
      >
        <motion.div
          animate={{ rotate: [-2, 2, -2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full relative origin-top"
        >
          <Image src="/images/decorativas/boladisco2.png" alt="Bola Disco" fill className="object-contain object-top drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]" />
        </motion.div>
      </motion.div>

      {/* BOTTOM LEFT — Estatua de la Libertad */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.3 }}
        className="absolute bottom-0 left-[-10%] w-48 h-72 md:w-48 md:h-72 z-10 pointer-events-none"
      >
        <Image src="/images/decorativas/estatua_libertad.png" alt="Estatua de la Libertad" fill className="object-contain object-bottom opacity-90 drop-shadow-[0_0_16px_rgba(192,192,192,0.3)]" />
      </motion.div>
      {/* BOTTOM LEFT — Edificio / Skyscraper */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 , rotate:0}}
        animate={{ opacity: 1, x: 0, y: 0 , rotate:0}}
        transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.3 }}
        className="absolute bottom-0 right-[-52] w-48 h-90 md:w-48 md:h-72 z-10 pointer-events-none"
      >
        <Image src="/images/decorativas/edificio2.png" alt="Estatua de la Libertad" fill className="object-contain object-bottom opacity-90 drop-shadow-[0_0_16px_rgba(192,192,192,0.3)]" />
      </motion.div>
      {/* BOTTOM LEFT — Edificio / Skyscraper */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 , rotate:0}}
        animate={{ opacity: 1, x: 0, y: 0 , rotate:0}}
        transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.3 }}
        className="absolute bottom-0 right-[-90] w-48 h-50 md:w-48 md:h-72 z-10 pointer-events-none"
      >
        <Image src="/images/decorativas/edificio2.png" alt="Estatua de la Libertad" fill className="object-contain object-bottom opacity-90 drop-shadow-[0_0_16px_rgba(192,192,192,0.3)]" />
      </motion.div>
      {/* BOTTOM LEFT — Edificio / Skyscraper */}
      <motion.div
        initial={{ opacity: 0, x: -40, y: 40 , rotate:0}}
        animate={{ opacity: 1, x: 0, y: 0 , rotate:0}}
        transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.3 }}
        className="absolute bottom-0 right-[5] w-48 h-60 md:w-48 md:h-72 z-10 pointer-events-none"
      >
        <Image src="/images/decorativas/edificio2.png" alt="Estatua de la Libertad" fill className="object-contain object-bottom opacity-90 drop-shadow-[0_0_16px_rgba(192,192,192,0.3)]" />
      </motion.div>



      {/* ACCENT — Estampa New York (centro-izquierda) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8,rotate:0}}
        animate={{ opacity: 0.9, scale: 1,rotate:0}}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute bottom-0 right-[24%] md:left-[3%] w-30 h-30 md:w-48 md:h-48 z-30 pointer-events-none"
      >
        <Image src="/images/decorativas/estampa_newyork.png" alt="Estampa New York" fill className="object-contain" />
      </motion.div>


      {/* ACCENT — Cinema (izquierda, debajo de los labios)
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 0.85, x: 0 }}
        transition={{ duration: 0.9, delay: 1.6 }}
        className="absolute bottom-[13%] left-[22%] md:left-[6%] w-20 h-20 md:w-20 md:h-20 z-10 pointer-events-none"
      >
        <Image src="/images/decorativas/cinema.png" alt="Cinema" fill className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" />
      </motion.div> */}

      {/* BOTTOM WIDE — Puente de Brooklyn (base del hero, ancho) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.9, y: 0 }}
        transition={{ duration: 1.3, delay: 0.7, type: "spring", bounce: 0.2 }}
        className="absolute bottom-0 left-0 right-0 h-40 md:h-56 z-0 pointer-events-none"
      >
        <Image
          src="/images/decorativas/puente.png"
          alt="Puente Brooklyn"
          fill
          className="object-cover object-top drop-shadow-[0_-4px_20px_rgba(0,0,0,0.5)]"
        />
      </motion.div>

      {/* Luces de ambiente difuso */}
      <div className="absolute bottom-[20%] left-[-5%] w-[200px] h-[200px] bg-[#ff007f]/10 rounded-full blur-[80px] pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[-5%] w-[200px] h-[200px] bg-[#c0c0c0]/10 rounded-full blur-[80px] pointer-events-none z-0" />

      {/* Main Content Box (Texto destacado sin globo de fondo) */}
      <div className="relative z-30 text-center px-4 max-w-[95%] md:max-w-xl mx-auto flex flex-col items-center pointer-events-none mt-[12vh] md:mt-[10vh]">
        
        {/* Etiqueta Superior (MIS XV AÑOS) */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-[#e4e4e7] tracking-[0.4em] md:tracking-[0.5em] font-sans font-light text-xs md:text-sm uppercase mb-15 z-10 px-6 py-2 rounded-full border border-white/10 bg-[#050505]/60 backdrop-blur-md shadow-[0_0_20px_rgba(255,0,127,0.25)]"
        >
          {siteConfig.client.eventType}
        </motion.h2>
        
        {/* Contenedor relativo para nombre y fondo XV */}
        <div className="relative flex items-center justify-center w-full mb-10">
          
          {/* XV como imagen (Fondo monumental) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-120 md:h-120 z-0 pointer-events-none"
          >
            <Image
              src="/images/decorativas/XV_letra.png"
              alt="XV"
              fill
              className="object-contain opacity-30 drop-shadow-[0_0_15px_rgba(255,0,127,0.15)]"
            />
            
          </motion.div>

          {/* Nombre Principal (Alexia) */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2, type: "spring" }}
            className="relative text-[6.5rem] md:text-[9rem] lg:text-[11rem] font-pinyon text-white leading-[0.8] z-10 translate-y-[20%] md:-translate-y-6"
            style={{ 
              textShadow: "0 2px 4px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.8), 0 0 35px rgba(255,0,127,0.8)" 
            }}
          >
            {siteConfig.client.name}  
          </motion.h1>
        </div>

        {/* --- FRASE FINAL ELEGIDA: Studio 54 VIP Plaque --- */}
        <div className="relative w-full flex justify-center mt-6 mb-4 pointer-events-auto z-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="relative w-full max-w-[90%] md:max-w-md px-6 py-5 flex flex-col items-center justify-center rounded-xl overflow-hidden"
          >
            {/* Fondo de placa VIP (Cristal oscuro texturizado) */}
            <div className="absolute inset-0 bg-linear-to-b from-[#1a1a1a]/80 via-[#050505]/90 to-[#1a1a1a]/80 backdrop-blur-xl border border-white/5" />
            
            {/* Brillos horizontales (Luces de neón en barra) */}
            <div className="absolute top-0 left-[15%] right-[15%] h-[1.5px] bg-linear-to-r from-transparent via-[#ff007f] to-transparent opacity-80 shadow-[0_0_12px_#ff007f]" />
            <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-[#c0c0c0]/60 to-transparent shadow-[0_0_10px_rgba(192,192,192,0.5)]" />
            
            {/* Texto Principal */}
            <p className="relative font-sans text-[11px] md:text-[14px] font-light italic text-center leading-relaxed text-[#f4f4f5] tracking-wide"
               style={{ textShadow: "0 2px 10px rgba(255,255,255,0.2)" }}>
              "{siteConfig.client.finalPhrase}"
            </p>
          </motion.div>
        </div>
        {/* --- FIN FRASE FINAL --- */}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-30 pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-primary font-bold bg-white/50 px-2 py-0.5 rounded-full">Desliza</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="bg-white/50 rounded-full p-1"
        >
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-primary" strokeWidth={3} />
        </motion.div>
      </motion.div>
    </section>
  );
}
