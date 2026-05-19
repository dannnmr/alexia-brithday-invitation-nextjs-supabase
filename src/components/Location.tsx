"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation, CalendarPlus } from "lucide-react";
import { Countdown } from "./Countdown";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";
import { FloatingDecoration } from "./ui/FloatingDecoration";

import { getCalendarLinks } from "../lib/calendar";

export function Location() {
    const handleAddToCalendar = () => {
      const isApple = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent) || 
                      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      const { googleUrl, icsUrl } = getCalendarLinks();

      if (isApple) {
        const link = document.createElement("a");
        link.href = icsUrl;
        link.download = `xv-${siteConfig.client.name.toLowerCase().replace(/\s+/g, '-')}.ics`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        window.open(googleUrl, "_blank", "noopener,noreferrer");
      }
    };

    return (
      <section className="relative py-8 md:py-12 bg-[#0a0a0a] w-full flex flex-col items-center overflow-hidden">     
        <FloatingDecoration 
          src="/images/decorativas/estatua_libertad.png" 
          alt="Estatua" 
          className="bottom-0 md:bottom-[45%] -left-12 md:right-[10%] w-62 h-62 md:w-48 md:h-48 opacity-50"
          animationStyle="float"
        />
        <FloatingDecoration 
          src="/images/decorativas/direcciones.png" 
          alt="Direciones" 
          className="bottom-[-3%] md:bottom-[4%] -right-20 md:right-[5%] w-60 h-60 md:w-48 md:h-48 opacity-50"
          animationStyle="float"
        />
  
        <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col items-center">
          
          {/* Massive Summer Date & Time */}
          <AnimatedSection once className="flex flex-col items-center justify-center text-center w-full mb-2">
  
             {/* === TARJETA DE EVENTO — EDITORIAL MAGAZINE NIGHT === */}
             <motion.div
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
               className="w-full max-w-2xl mx-auto mb-10 md:mb-14 relative px-3"
             >
               {/* Halos de luz de fondo */}
               <div className="absolute -top-10 left-1/4 w-40 h-40 bg-[#ff007f]/10 rounded-full blur-[60px] pointer-events-none" />
               <div className="absolute -bottom-6 right-1/4 w-32 h-32 bg-[#ff007f]/8 rounded-full blur-[50px] pointer-events-none" />
   
               {/* Tarjeta principal */}
               <div className="relative rounded-2xl overflow-hidden bg-[#080808]/80 border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-md">
  
                 {/* Barra superior fucsia */}
                 <div className="w-full h-[2px] bg-linear-to-r from-transparent via-[#ff007f] to-transparent relative z-10" />
  
                 <div className="relative flex flex-col px-0 pt-0 pb-0 overflow-hidden z-10">
  
                   {/* BLOQUE SUPERIOR: Día enorme como watermark + badge */}
                   <div className="relative flex items-center justify-between px-6 md:px-8 pt-6 md:pt-8 pb-4">
                     
                     {/* Número fantasma de fondo — efecto tipografía editorial */}
                     <span
                       className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 font-serif font-black select-none pointer-events-none leading-none"
                       style={{
                         fontSize: "clamp(6rem, 22vw, 13rem)",
                         color: "transparent",
                         WebkitTextStroke: "1px rgba(255,255,255,0.05)",
                       }}
                     >
                       {siteConfig.event.date.day}
                     </span>
  
                     {/* Lado izquierdo: Badge + Día real */}
                     <div className="flex flex-col gap-2 z-10">
                       <span className="font-sans text-[8px] md:text-[10px] text-[#ff007f] tracking-[0.6em] uppercase font-black">
                         {siteConfig.event.topLabel || "Save the Date"}
                       </span>
                       <motion.div
                         initial={{ opacity: 0, x: -20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: 0.2, duration: 0.7 }}
                         className="flex items-end gap-2 md:gap-3"
                       >
                         <span className="font-serif font-black text-[4rem] md:text-[6.5rem] text-white leading-none tracking-tighter drop-shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                           {siteConfig.event.date.day}
                         </span>
                         <div className="flex flex-col items-start pb-1 md:pb-3">
                           <span className="font-sans text-lg md:text-3xl text-white/70 uppercase tracking-[0.08em] font-bold leading-tight">
                             {siteConfig.event.date.month}
                           </span>
                           <span className="font-sans text-[9px] md:text-xs text-white/30 tracking-[0.5em] font-light mt-0.5">
                             {siteConfig.event.date.year}
                           </span>
                         </div>
                       </motion.div>
                     </div>
  
                     {/* Lado derecho: Hora en script vertical */}
                     <motion.div
                       initial={{ opacity: 0, x: 20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.4, duration: 0.7 }}
                       className="flex flex-col items-end gap-1 z-10"
                     >
                       <span className="font-sans text-[7px] md:text-[9px] text-[#ff007f]/70 tracking-[0.5em] uppercase font-bold">
                         Hora
                       </span>
                       <span className="font-pinyon text-[2.5rem] md:text-[4rem] text-white leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] text-right">
                         {siteConfig.event.time}
                       </span>
                       <span className="font-sans text-[7px] md:text-[8px] text-white/40 tracking-[0.4em] uppercase">
                         XV AÑOS
                       </span>
                     </motion.div>
                   </div>
  
                   {/* BARRA DE ACENTO — línea neon con glow + día de la semana */}
                   <div className="relative mx-6 md:mx-8 mb-5">
                     <div className="w-full h-px bg-linear-to-r from-[#ff007f]/60 via-[#ff007f]/20 to-transparent" />
                     <div className="absolute top-0 left-0 w-1/3 h-px bg-[#ff007f] blur-[2px]" />
                   </div>
  
                   {/* BLOQUE INFERIOR — Botón Agendar */}
                   <div className="flex flex-col items-center gap-3 px-6 md:px-8 pb-5 md:pb-6">
                     <div className="flex items-center gap-2 mb-1">
                       <motion.div
                         animate={{ opacity: [0.4, 1, 0.4] }}
                         transition={{ duration: 2, repeat: Infinity }}
                         className="w-1.5 h-1.5 rounded-full bg-[#ff007f]"
                       />
                       <span className="font-sans text-[8px] md:text-[9px] text-white/25 tracking-[0.45em] uppercase">
                         Sábado
                       </span>
                     </div>
  
                     {/* Un único botón dinámico */}
                     <motion.button
                       onClick={handleAddToCalendar}
                       whileHover={{ scale: 1.02 }}
                       whileTap={{ scale: 0.98 }}
                       className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#ff007f]/10 border border-[#ff007f]/25 hover:bg-[#ff007f]/20 hover:border-[#ff007f]/50 transition-all duration-300 group cursor-pointer"
                     >
                       <CalendarPlus className="w-4 h-4 text-[#ff007f] shrink-0" strokeWidth={2} />
                       <span className="font-sans text-[9px] md:text-[10px] text-white/70 group-hover:text-white tracking-[0.25em] uppercase font-semibold transition-colors">
                         Añadir al Calendario
                       </span>
                     </motion.button>
                   </div>
                 </div>
  
                 {/* Esquinas decorativas fucsia */}
                 <div className="absolute top-2.5 left-2.5 w-3 h-3 md:w-4 md:h-4 border-t-[1.5px] border-l-[1.5px] border-[#ff007f]/40 pointer-events-none rounded-tl-sm" />
                 <div className="absolute top-2.5 right-2.5 w-3 h-3 md:w-4 md:h-4 border-t-[1.5px] border-r-[1.5px] border-[#ff007f]/40 pointer-events-none rounded-tr-sm" />
                 <div className="absolute bottom-2.5 left-2.5 w-3 h-3 md:w-4 md:h-4 border-b-[1.5px] border-l-[1.5px] border-white/8 pointer-events-none rounded-bl-sm" />
                 <div className="absolute bottom-2.5 right-2.5 w-3 h-3 md:w-4 md:h-4 border-b-[1.5px] border-r-[1.5px] border-white/8 pointer-events-none rounded-br-sm" />
               </div>
             </motion.div>
          </AnimatedSection>
        </div>

      <div className="w-full relative z-10">
        <Countdown />
      </div>

      <div className="relative z-10 max-w-6xl w-full px-5 flex flex-col items-center">
        {/* Clean Venue Layout: Map & Details separated completely */}
        {/* Clean Venue Layout: Stacked (Details -> Button -> Map) */}
        <AnimatedSection once delay={0.2} className="w-full flex flex-col items-center">
           
           {/* TEXT DETAILS */}
           <div className="flex flex-col items-center text-center px-2 w-full max-w-3xl mb-4">
              
              <SectionHeader
                title={siteConfig.location.venueName}
                subtitle={siteConfig.location.topLabel}
                className="mb-4 mt-8"
                titleClassName="leading-[0.9] text-white"
                subtitleClassName="font-bold mb-4"
              />

              <p className="font-sans text-sm md:text-base tracking-[0.2em] text-[#a1a1aa]/80 uppercase leading-relaxed max-w-md">
                 {siteConfig.location.address}
              </p>
              
              <div className="w-16 h-px bg-linear-to-r from-transparent via-[#ff007f]/30 to-transparent mt-4" />

           </div>

           {/* INNOVATIVE BUTTON + TEXT IN ROW */}
           <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 w-full max-w-2xl justify-center mb-2">
            
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="font-sans text-lg md:text-xl font-bold uppercase tracking-widest text-[#ff007f]">
                     {siteConfig.location.buttonText}
                  </span>
              </div>
              
              <a
                href={siteConfig.location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center w-30 h-30 md:w-32 md:h-32 group cursor-pointer shrink-0"
              >
                 <div className="absolute inset-0 rounded-full border border-[#ff007f]/20 scale-90 group-hover:scale-100 transition-transform duration-700" />
                 <motion.svg 
                   animate={{ rotate: 360 }} 
                   transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-0 w-full h-full text-[#ffffff] opacity-70 group-hover:opacity-100 transition-opacity" 
                   viewBox="0 0 100 100"
                 >
                    <path id="textPathOut" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                    <text fontSize="8.5" letterSpacing="2.5" className="font-sans uppercase font-bold tracking-widest fill-current">
                      <textPath href="#textPathOut" startOffset="0%">
                        MAPA • RUTA AL EVENTO • GPS UBICACIÓN •
                      </textPath>
                    </text>
                 </motion.svg>
                 <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#0a0a0a]/60 backdrop-blur-md shadow-lg border border-white flex items-center justify-center group-hover:bg-[#ff007f] transition-colors duration-500 relative z-10">
                    <Navigation className="w-5 h-5 md:w-6 md:h-6 text-[#ff007f] group-hover:text-white group-hover:-rotate-45 transition-all duration-500" />
                 </div>
              </a>


           </div>

           {/* THE ISOLATED MAP - SHORTENED HEIGHT
           <div className="w-full flex justify-center px-4 md:px-0">
              <div className="w-full max-w-4xl h-[200px] md:h-[300px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl border-4 md:border-6 border-white/80 bg-[#0a0a0a] relative">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14740.978988920217!2d-63.19921757157889!3d-17.86584935237183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1eb007976cfbf%3A0xfab462c643fce1fa!2sMARBELLA%20-%20SAL%C3%93N%20DE%20EVENTOS!5e1!3m2!1ses-419!2sbo!4v1771725435633!5m2!1ses-419!2sbo"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="block w-full h-full object-cover transition-opacity duration-1000 origin-center"
                  ></iframe>
              </div>
           </div> */}

           {/* THE ISOLATED MAP - SHORTENED HEIGHT */}
        </AnimatedSection>

      </div>
    </section>
  );
}
