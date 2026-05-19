"use client";

import { motion } from "framer-motion";
import { siteConfig } from "../config/invitation";
import { AnimatedSection } from "./ui/AnimatedSection";

export function Parents() {
  return (
    <section className="relative py-7 md:py-14 px-2 bg-white flex flex-col items-center justify-center overflow-hidden">
      
      {/* Decoración de borde elegante (estilo tarjeta física gruesa) */}
      <div className="absolute inset-3 md:inset-6 border border-gray-200 pointer-events-none z-0" />
      <div className="absolute inset-[16px] md:inset-[30px] border-[0.5px] border-gray-100 pointer-events-none z-0" />

      {/* Acentos Neón muy sutiles en los bordes superior/inferior para conectar con el tema Disco */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-linear-to-r from-transparent via-[#ff007f]/30 to-transparent blur-[1px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-linear-to-r from-transparent via-[#c0c0c0]/50 to-transparent blur-[1px]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Top Label */}
        <AnimatedSection once className="mb-5 md:mb-14">
          <h3 className="font-sans text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] text-gray-400 uppercase">
            {siteConfig.parents.topLabel}
          </h3>
        </AnimatedSection>

        {/* Nombres de los Padres */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center md:gap-6 lg:gap-12 mb-7 md:mb-10">
           {/* Father's Name */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="text-center group cursor-default mb-3 md:mb-0"
           >
              <h2 className="font-pinyon text-4xl md:text-6xl lg:text-8xl text-[#111111] leading-none group-hover:scale-105 transition-transform duration-500">
                {siteConfig.parents.fatherName}
              </h2>
           </motion.div>

           {/* Center "&" Node */}
           <motion.div 
             initial={{ scale: 0, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 1 }}
             className="z-20 flex items-center justify-center mb-1 md:mb-0"
           >
              <span className="font-script text-3xl md:text-5xl lg:text-6xl text-[#ff007f]">&amp;</span>
           </motion.div>

           {/* Mother's Name */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="text-center group cursor-default"
           >
              <h2 className="font-pinyon text-4xl md:text-6xl lg:text-8xl text-[#111111] leading-none group-hover:scale-105 transition-transform duration-500">
                {siteConfig.parents.motherName}
              </h2>
           </motion.div>
        </div>
        
        {/* Godparents Name */}
        {siteConfig.parents.godparents && (
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.8 }}
             className="text-center group cursor-default mb-8 md:mb-16"
           >
              <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] text-gray-400 uppercase mb-4">
                Y mis padrinos
              </p>
              <h2 className="font-pinyon text-3xl md:text-5xl lg:text-7xl text-[#111111] leading-none group-hover:scale-105 transition-transform duration-500">
                {siteConfig.parents.godparents}
              </h2>
           </motion.div>
        )}

        {/* Sophisticated Invitation Text */}
        <AnimatedSection delay={1.1} once className="relative flex flex-col items-center mt-0 md:mt-0 px-4">
          <p className="font-sans text-[9px] md:text-[11px] lg:text-xs tracking-[0.3em] md:tracking-[0.4em] text-gray-500 uppercase leading-loose md:leading-loose max-w-2xl mx-auto text-center">
            {siteConfig.parents.invitationText}
          </p>
        </AnimatedSection>
        
      </div>
    </section>
  );
}
