"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FloatingDecoration } from "./ui/FloatingDecoration";
import { siteConfig } from "../config/invitation";

export function Footer() {
  return (
    <footer className="relative py-8 md:py-10 bg-white flex flex-col items-center justify-center overflow-hidden border-t border-neutral-200">
      
      {/* Grid de Fondo Sutil en gris muy claro */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none z-0 opacity-80" />
      
      {/* Sutiles brillos decorativos flotantes de fondo */}
      <div className="absolute top-0 right-[5%] w-32 h-32 bg-pink-200/20 rounded-full blur-2xl pointer-events-none z-0" />
      <div className="absolute bottom-0 left-[5%] w-32 h-32 bg-[#ff007f]/5 rounded-full blur-2xl pointer-events-none z-0 animate-pulse" />

      {/* Brillos y Estrellas flotantes en el fondo para que no se vea vacío */}
      <FloatingDecoration 
        src="/images/decorativas/estrella_glitter.png" 
        alt="Estrella Glitter Fondo" 
        className="top-[10%] left-[25%] w-12 h-12 opacity-25 rotate-[12deg] pointer-events-none z-0" 
        animationStyle="float" 
      />
      <FloatingDecoration 
        src="/images/decorativas/chrome_starts.png" 
        alt="Brillo Plateado Fondo" 
        className="bottom-[15%] right-[30%] w-14 h-14 opacity-30 pointer-events-none z-0" 
        animationStyle="float" 
      />
      <FloatingDecoration 
        src="/images/decorativas/estrella_glitter.png" 
        alt="Estrella Glitter Derecha" 
        className="top-[20%] right-[10%] w-10 h-10 opacity-20 -rotate-[8deg] pointer-events-none z-0" 
        animationStyle="float" 
      />
      <FloatingDecoration 
        src="/images/decorativas/leopardo.png" 
        alt="Leopardo Fondo" 
        className="bottom-[-10%] right-[-8%] w-48 h-48 md:w-64 md:h-64 opacity-40 pointer-events-none z-0" 
        animationStyle="float" 
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* LADO IZQUIERDO: Nombre de la Quinceañera y frase de despedida */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
          <div className="flex items-center gap-2">
            <span className="font-sans text-[8px] md:text-[9.5px] text-[#ff007f] tracking-[0.35em] uppercase font-black drop-shadow-[0_0_10px_rgba(255,0,127,0.15)]">
              Exclusive Pass
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff007f] animate-ping" />
          </div>
          
          <h2 className="font-pinyon text-6xl sm:text-6xl text-[#ff007f] leading-none my-1 select-none">
            {siteConfig.client.name}
          </h2>
          
          <p className="font-sans text-[10px] md:text-[11px] text-[#f769b0] tracking-[0.25em] font-black uppercase mt-1 drop-shadow-[0_0_6px_rgba(255,0,127,0.15)]">
            no dejes que te lo cuenten
          </p>
        </div>

        {/* LADO DERECHO: Tarjeta/Voucher Creativa para Contactar al Diseñador */}
        <a 
          href="https://wa.me/59168183484" 
          target="_blank" 
          rel="noopener noreferrer"
          className="relative flex items-center justify-between gap-4 p-4 bg-[#faf9f6] border border-dashed border-[#ff007f]/30 hover:border-[#ff007f] rounded-xl transition-all duration-300 group shadow-xs hover:shadow-md cursor-pointer max-w-sm w-full md:w-auto shrink-0 select-none overflow-hidden"
        >
          {/* Muescas de ticket perforado a los lados */}
          <div className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3.5 h-7 rounded-r-full bg-white border-y border-r border-dashed border-[#ff007f]/30 group-hover:border-[#ff007f]" />
          <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3.5 h-7 rounded-l-full bg-white border-y border-l border-dashed border-[#ff007f]/30 group-hover:border-[#ff007f]" />
          
          {/* Contenido del Ticket */}
          <div className="flex flex-col text-left pl-3 pr-1">
            <span className="text-[7.5px] uppercase tracking-[0.25em] text-[#ff007f] font-black">Digital Invitation Design</span>
            <span className="text-[10.5px] font-sans text-neutral-800 font-extrabold uppercase mt-0.5 tracking-wider">Daniela Miranda</span>
            <span className="text-[8px] font-sans text-neutral-500 font-medium tracking-normal mt-0.5">¿Quieres una invitación como esta?</span>
          </div>
          
          {/* Botón de Acción dentro del Ticket */}
          <div className="bg-[#ff007f] text-white px-3 py-1.5 rounded-lg text-[9px] uppercase tracking-wider font-black shadow-xs group-hover:bg-[#ff007f]/90 group-hover:scale-103 transition-all shrink-0 flex items-center gap-1">
            <span>Contacto</span>
            <svg 
              className="w-2.5 h-2.5 transform group-hover:translate-x-0.5 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </a>

      </div>
    </footer>
  );
}
