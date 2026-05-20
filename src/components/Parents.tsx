"use client";

import React from "react";
import { FloatingDecoration } from "./ui/FloatingDecoration";
import { siteConfig } from "../config/invitation";

export function Parents() {
  return (
    <div className="relative w-full bg-[#050505] overflow-hidden">
      <section className="relative py-10 md:py-14 px-6 bg-[#050505] flex flex-col items-center justify-center overflow-hidden w-full">
        
        {/* Glow de fondo plateado y rosa */}
        <div className="absolute top-[30%] left-[10%] w-[300px] h-[300px] bg-[#ff007f]/8 rounded-full blur-[90px] pointer-events-none z-0 animate-pulse" />
        <div className="absolute bottom-[30%] right-[10%] w-[300px] h-[300px] bg-[#ff007f]/4 rounded-full blur-[90px] pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,rgba(255,0,127,0.04)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none z-0" />

        {/* Marcos perimetrales */}
        <div className="absolute inset-3 md:inset-6 border border-white/3 pointer-events-none z-0 rounded-3xl" />
        <div className="absolute inset-5 md:inset-10 border-[0.5px] border-[#ff007f]/25 pointer-events-none z-0 rounded-[1.4rem] shadow-[0_0_15px_rgba(255,0,127,0.1)]" />

        {/* Elementos decorativos de brillo */}
        <FloatingDecoration 
          src="/images/decorativas/chrome_starts.png" 
          alt="Brillo Plateado Derecho" 
          className="top-[10%] right-[3%] w-20 h-20 opacity-35 pointer-events-none z-0 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
          animationStyle="float" 
        />
        <FloatingDecoration 
          src="/images/decorativas/chrome_starts.png" 
          alt="Estrella Glitter Izquierda" 
          className="bottom-[10%] left-[3%] w-24 h-24 opacity-30 -rotate-[12deg] pointer-events-none z-0 filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
          animationStyle="float" 
        />

        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center pt-4">
          <div className="mb-5 md:mb-6">
            <p className="font-sans text-[8px] min-[380px]:text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-[#ff007f] font-black drop-shadow-[0_0_8px_rgba(255,0,127,0.5)]">
              {siteConfig.parents.topLabel}
            </p>
            <div className="w-12 h-px bg-linear-to-r from-transparent via-[#ff007f] to-transparent mx-auto mt-2.5 shadow-[0_0_8px_#ff007f]" />
          </div>

          <div className="w-full max-w-2xl bg-neutral-950/80 border border-white/10 rounded-2xl p-5 md:p-8 backdrop-blur-xl shadow-[0_25px_50px_rgba(255,0,127,0.06),inset_0_1px_1px_rgba(255,255,255,0.02)] relative overflow-hidden">
            
            {/* Borde neón brillante superior doble (Rosa y Plata) */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-linear-to-r from-transparent via-[#ff007f] to-transparent shadow-[0_0_12px_#ff007f] z-10" />
            <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-linear-to-r from-transparent via-white to-transparent shadow-[0_0_8px_rgba(255,255,255,0.8)] z-20" />
            
            <div className="absolute -top-10 -left-10 w-36 h-36 bg-[#ff007f]/5 rounded-full blur-2xl pointer-events-none" />

            {/* Nombres de los Padres con efectos plateados / hover rosa */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-6 mb-4 md:mb-5 relative z-10">
              <div className="text-center group cursor-default">
                <h2 className="font-pinyon text-3xl md:text-5xl text-white tracking-wide transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] group-hover:text-[#ff007f] group-hover:drop-shadow-[0_0_15px_rgba(255,0,127,0.7)]">
                  {siteConfig.parents.fatherName}
                </h2>
              </div>
              
              <div className="flex items-center justify-center py-1 md:py-0">
                <span className="font-pinyon text-3xl md:text-4xl text-[#ff007f] drop-shadow-[0_0_12px_rgba(255,0,127,0.6)] font-light animate-pulse">&amp;</span>
              </div>
              
              <div className="text-center group cursor-default">
                <h2 className="font-pinyon text-3xl md:text-5xl text-white tracking-wide transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.35)] group-hover:text-[#ff007f] group-hover:drop-shadow-[0_0_15px_rgba(255,0,127,0.7)]">
                  {siteConfig.parents.motherName}
                </h2>
              </div>
            </div>

            {/* Separador y Padrinos */}
            {siteConfig.parents.godparents && (
              <>
                <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-4 md:my-5" />
                <div className="text-center group cursor-default mb-4 md:mb-5 relative z-10">
                  <p className="font-sans text-[7.5px] md:text-[8.5px] tracking-[0.4em] text-neutral-500 uppercase mb-2 font-bold">
                    Y mis padrinos
                  </p>
                  <h3 className="font-pinyon text-2xl md:text-4xl text-neutral-200 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    {siteConfig.parents.godparents}
                  </h3>
                </div>
              </>
            )}

            <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-4 md:my-5" />

            {/* Texto de Invitación */}
            <div className="relative z-10 px-4">
              <p className="font-sans text-[8.5px] md:text-[9.5px] tracking-[0.25em] text-neutral-400 uppercase leading-relaxed max-w-lg mx-auto">
                {siteConfig.parents.invitationText}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
