"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SparkleField } from "./ui/SparkleField";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";

export function Itinerary() {

  return (
    <section className="relative py-10 px-6 flex flex-col items-center overflow-hidden" style={{ backgroundColor: '#050505' }}>
      
      <SparkleField mobileCount={8} desktopCount={22} />
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
