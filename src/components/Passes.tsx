"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";

// Patrón para simular un código de barras vertical
const BARS = [3,1,2,4,1,2,1,3,2,5,1,2,1,4,2,1,3,1,2,1,5,1,2,3,2,1,4,1,2,2,1,3,4,1,2,1];

export function Passes() {
  return (
    <section className="relative w-full py-10 md:py-16 bg-[#050505] overflow-hidden flex flex-col items-center">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-2 md:px-4 flex flex-col items-center gap-2 md:gap-4 relative z-10 w-full">
        {/* Header de sección */}
        <SectionHeader
          title={siteConfig.passes.mainTitle}
          subtitle={siteConfig.passes.topLabel}
          titleClassName="font-pinyon text-5xl md:text-6xl text-[#e4e4e7]"
          subtitleClassName="text-white/50 tracking-[0.4em] font-sans font-medium text-xs mb-4"
        />

        {/* === BOARDING PASS (White Theme) === */}
        <AnimatedSection once className="w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex rounded-xl md:rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.8)] relative bg-white text-black max-w-[95vw] md:max-w-none mx-auto"
          >
            {/* ── CUERPO PRINCIPAL (Izquierda) ── */}
            <div className="flex-1 flex p-4 md:p-6 relative">
              
              {/* Código de barras vertical izquierdo */}
              <div className="w-5 md:w-12 h-full flex flex-col justify-center items-center gap-px md:gap-[1.5px] pr-2 md:pr-6 border-r md:border-r-2 border-black">
                {BARS.map((h, i) => (
                  <div key={i} className="bg-black w-full" style={{ height: `${h * 1.5}px` }} />
                ))}
              </div>

              {/* Contenido principal */}
              <div className="flex-1 pl-3 md:pl-6 flex flex-col justify-between py-1 md:py-4">
                
                {/* Cabecera: VIP PASS + Plane */}
                <div>
                  <div className="flex items-center gap-1.5 md:gap-4 mb-1 md:mb-4">
                    <h2 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl font-serif font-black uppercase tracking-tight text-black leading-none">
                      VIP PASS
                    </h2>
                    <Plane className="w-4 h-4 md:w-12 md:h-12 text-black rotate-45" strokeWidth={2.5} />
                  </div>
                  <div className="flex items-center gap-2 mt-1 md:mt-2">
                    <span className="inline-flex items-center gap-1.5 bg-[#ff007f] text-white font-serif font-black uppercase tracking-widest text-[10px] sm:text-xs md:text-base px-2 py-0.5 md:px-4 md:py-1.5 rounded-full shadow-[0_0_12px_rgba(255,0,127,0.5)]">
                      {siteConfig.passes.quantity} {siteConfig.passes.unitText}
                    </span>
                    <span className="font-sans text-[8px] md:text-xs text-black/50 uppercase tracking-widest">por invitación</span>
                  </div>
                </div>

                {/* Grid de Datos */}
                <div className="grid grid-cols-3 gap-1 md:gap-4 mt-3 md:mt-12 mb-3 md:mb-10 w-full max-w-md">
                  <div className="flex flex-col items-start">
                    <span className="font-serif font-black text-[9px] md:text-xl uppercase tracking-wider text-black">DATE</span>
                    <span className="font-serif font-bold text-[8px] md:text-base mt-0.5 md:mt-1 text-black/80 truncate w-full">
                      {siteConfig.event.date.day}, {siteConfig.event.date.month.slice(0,5)}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-serif font-black text-[9px] md:text-xl uppercase tracking-wider text-black">HOUR</span>
                    <span className="font-serif font-bold text-[8px] md:text-base mt-0.5 md:mt-1 text-black/80 truncate w-full text-center">
                      {siteConfig.event.time}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-serif font-black text-[9px] md:text-xl uppercase tracking-wider text-black">GATE</span>
                    <span className="font-serif font-bold text-[8px] md:text-base mt-0.5 md:mt-1 text-black/80">05</span>
                  </div>
                </div>

                {/* Llamado a la acción inferior */}
                <div>
                  <h1 className="text-lg sm:text-xl md:text-5xl font-serif font-black text-black tracking-tight">
                    ¡I am coming!
                  </h1>
                </div>
              </div>
            </div>

            {/* ── SEPARADOR PERFORADO ── */}
            <div className="relative w-3 md:w-6 flex flex-col items-center justify-between bg-white shrink-0">
              {/* Muesca superior (color fondo para simular hueco) */}
              <div className="absolute top-[-8px] md:top-[-12px] w-4 h-4 md:w-8 md:h-8 rounded-full bg-[#050505] z-10" />
              
              {/* Línea perforada punteada */}
              <div className="h-full w-0 border-l-2 md:border-l-[3px] border-dotted border-gray-400/60 my-4 md:my-6" />
              
              {/* Muesca inferior */}
              <div className="absolute bottom-[-8px] md:bottom-[-12px] w-4 h-4 md:w-8 md:h-8 rounded-full bg-[#050505] z-10" />
            </div>

            {/* ── STUB (Derecha) ── */}
            <div className="w-16 sm:w-20 md:w-48 relative bg-white flex flex-col items-center justify-center overflow-hidden shrink-0">
              {/* Imagen de fondo (Estatua de la Libertad en escala de grises) */}
              <div className="absolute inset-0 w-full h-full">
                <Image 
                  src="/images/decorativas/estatua_libertad.png" 
                  alt="New York" 
                  fill 
                  className="object-cover object-bottom grayscale opacity-90 mix-blend-multiply" 
                />
              </div>

              {/* Acento Amarillo (Simulando el Taxi) */}
              <div className="absolute bottom-0 left-0 w-full h-1.5 md:h-4 bg-[#d11d80]" />

              {/* Texto Vertical "NY" */}
              <div className="absolute top-[-30px] md:top-4 right-1 md:right-6 z-10 flex h-[80%] items-center justify-center">
                <span 
                  className="font-serif font-black text-2xl sm:text-3xl md:text-6xl uppercase tracking-tight text-black" 
                  style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}
                >
                  NY
                </span>
              </div>
            </div>

          </motion.div>
        </AnimatedSection>
        
      </div>
    </section>
  );
}
