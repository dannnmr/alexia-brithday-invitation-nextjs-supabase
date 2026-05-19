"use client";

import { Heart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "../config/invitation";

export function Footer() {
  return (
    <footer className="relative pt-10 pb-16 bg-[#000000] flex flex-col items-center justify-center overflow-hidden border-t border-white/10">
      
      {/* Sutil Grid de Fondo (Vibe de Club Nocturno/Pista de Luces) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)] opacity-40 pointer-events-none z-0" />
      
      {/* Elementos Decorativos de Fondo con animación sutil */}
      <motion.div 
        animate={{ y: [-8, 8, -8], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[2%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] pointer-events-none opacity-20 mix-blend-screen z-0"
      >
        <Image src="/images/decorativas/starts.png" alt="Estrellas" fill className="object-contain filter drop-shadow-[0_0_15px_rgba(255,0,127,0.4)]" />
      </motion.div>
      <motion.div 
        animate={{ y: [6, -6, 6], rotate: [-45, -40, -45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[-2%] w-[120px] h-[120px] md:w-[200px] md:h-[200px] pointer-events-none opacity-25 z-0"
      >
        <Image src="/images/decorativas/flor.png" alt="Flor" fill className="object-contain filter brightness-90 contrast-125" />
      </motion.div>
      
      {/* Resplandor central de neón fucsia profundo */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[200px] bg-linear-to-t from-[#ff007f]/15 via-transparent to-transparent blur-[60px] pointer-events-none z-0"></div>

      {/* Bloque de Despedida Impactante */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center mb-8 relative z-10 w-full px-4"
      >
        {/* Badge superior editorial */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 md:w-10 h-px bg-linear-to-l from-[#ff007f] to-transparent"></div>
          <span className="font-sans text-[8px] md:text-[10px] text-white/90 tracking-[0.4em] uppercase font-semibold text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Exclusive Invitation
          </span>
          <div className="w-6 md:w-10 h-px bg-linear-to-r from-[#ff007f] to-transparent"></div>
        </div>

        {/* Doble Capa Tipográfica: Vogue-Serif de Fondo + Pinyon Script de Frente */}
        <div className="relative flex items-center justify-center w-full max-w-4xl py-2 mb-2">
          <h2 className="font-serif tracking-[0.15em] text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] lg:text-[7rem] uppercase text-white/5 font-extrabold leading-none select-none text-center">
            {siteConfig.client.name}
          </h2>
          <span className="absolute font-pinyon text-[4.5rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] text-[#ff007f] drop-shadow-[0_0_20px_rgba(255,0,127,0.7),0_5px_10px_rgba(0,0,0,0.5)] transform -rotate-3 select-none text-center">
            {siteConfig.client.name}
          </span>
        </div>
        
        <p className="font-sans text-[10px] md:text-xs text-white/60 tracking-[0.3em] font-light mt-6 uppercase text-center max-w-md leading-relaxed">
          Prepara tu mejor outfit y <br />
          <span className="text-[#ff007f] font-bold tracking-[0.35em] drop-shadow-[0_0_10px_rgba(255,0,127,0.4)]">no dejes que te lo cuenten</span>
        </p>
      </motion.div>

      {/* Developer Signature con estilo de ticket de club VIP */}
      <div className="flex flex-col items-center pt-6 border-t border-white/10 w-full max-w-md relative z-10 px-4">
        <div className="w-1.5 h-1.5 rounded-full bg-[#ff007f] mb-3 animate-ping" />
        
        <p className="font-sans text-[8px] md:text-[9px] text-gray-500 tracking-[0.3em] uppercase mb-1 flex items-center gap-1.5 font-semibold">
          Digital Pass Design <span className="text-[#ff007f] font-bold">●</span> Daniela Miranda
        </p>
        
        <a 
          href="https://wa.me/59168183484" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group relative font-sans text-[9px] md:text-[10px] text-gray-400 hover:text-white tracking-[0.2em] uppercase font-bold transition-all duration-300 py-1"
        >
          <span className="relative z-10">Solicita tu web aquí: +591 68183484</span>
          <span className="absolute bottom-0 left-0 w-0 h-px bg-[#ff007f] transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(255,0,127,1)]" />
        </a>
      </div>
    </footer>
  );
}
