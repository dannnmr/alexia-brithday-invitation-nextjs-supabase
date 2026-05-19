"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navigation, Map } from "lucide-react";
import { Countdown } from "./Countdown";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";
import { FloatingDecoration } from "./ui/FloatingDecoration";

export function Location() {
  return (
    <section className="relative py-8 md:py-12 bg-[#0a0a0a] w-full flex flex-col items-center overflow-hidden">
      
      {/* Beachy Background Gradients */}
      {/* <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-to-bl from-sky-200/40 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-gradient-to-tr from-orange-200/40 via-zinc-800/30 to-transparent rounded-full blur-[100px] pointer-events-none z-0" /> */}

     
      <FloatingDecoration 
        src="/images/decorativas/estatua_libertad.png" 
        alt="Estrella de Mar" 
        className="bottom-0 md:bottom-[45%] -left-12 md:right-[10%] w-62 h-62 md:w-48 md:h-48 opacity-50"
        animationStyle="float"
      />

      <div className="relative z-10 max-w-6xl w-full px-6 flex flex-col items-center">
        
        {/* Massive Summer Date & Time */}
        <AnimatedSection once className="flex flex-col items-center justify-center text-center w-full mb-2">
           <SectionHeader 
             title="" 
             subtitle={siteConfig.event.topLabel} 
             titleClassName="hidden"
             className="mb-2 md:mb-4"
           />

           <div className="flex flex-row items-center justify-center w-full mb-8 md:mb-12">
             {/* Fecha */}
             <div className="flex flex-row items-center md:items-end justify-center gap-1.5 min-[350px]:gap-2 min-[380px]:gap-4 md:gap-4 text-[#ffffff] shrink-0">
                 <span className="font-sans text-[3rem] min-[350px]:text-[3.5rem] min-[380px]:text-[4.5rem] md:text-[8rem] lg:text-[10rem] leading-[0.8] font-bold tracking-tighter mix-blend-multiply">{siteConfig.event.date.day}</span>
                 <div className="flex flex-col items-start md:pb-2 lg:pb-6">
                     <span className="font-sans text-[14px] min-[350px]:text-[16px] min-[380px]:text-xl md:text-5xl lg:text-6xl uppercase tracking-[0.2em] font-light">{siteConfig.event.date.month}</span>
                     <span className="font-sans text-[7px] min-[350px]:text-[8px] min-[380px]:text-[10px] md:text-2xl lg:text-3xl tracking-[0.5em] font-bold opacity-80 mt-0.5 md:mt-1">{siteConfig.event.date.year}</span>
                 </div>
             </div>

             {/* Divisor Vertical */}
             <div className="w-px h-10 min-[350px]:h-12 min-[380px]:h-16 md:h-24 lg:h-32 bg-gradient-to-b from-transparent via-[#ff007f]/40 to-transparent shrink-0 mx-2 min-[350px]:mx-3 min-[380px]:mx-5 md:mx-12" />

             {/* Hora */}
             <div className="flex items-center justify-center shrink-0">
                 <h3 className="font-script text-2xl min-[350px]:text-3xl min-[380px]:text-4xl md:text-7xl lg:text-8xl text-[#ff007f] leading-none mt-1 md:mt-0 md:pb-2 whitespace-nowrap">
                   {siteConfig.event.time}
                 </h3>
             </div>
           </div>
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
                titleClassName="leading-[0.9]"
                subtitleClassName="font-bold mb-4"
              />

              <p className="font-sans text-sm md:text-base tracking-[0.2em] text-[#a1a1aa]/80 uppercase leading-relaxed max-w-md">
                 {siteConfig.location.address}
              </p>
              
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#ff007f]/30 to-transparent mt-4" />

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
