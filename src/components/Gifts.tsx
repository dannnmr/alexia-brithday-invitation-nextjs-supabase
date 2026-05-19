"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";
import { FloatingDecoration } from "./ui/FloatingDecoration";

export function Gifts() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <section className="relative py-10 md:py-16 px-4 bg-[#050505] flex flex-col items-center overflow-hidden">
      
      {/* Fondo nocturno con reflejos disco */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_80%)] pointer-events-none" />
      
      {/* Halos de luz de fondo (Neon) */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ff007f]/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-[#ff007f]/6 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Estrellas y Brillos flotantes en la sección */}
      <FloatingDecoration 
        src="/images/decorativas/estrella_glitter.png" 
        alt="Estrella Glitter Izquierda" 
        className="top-[15%] -left-13 w-52 h-52 md:w-72 md:h-72 opacity-30 rotate-[-9deg] pointer-events-none z-0" 
        animationStyle="float" 
      />
      <FloatingDecoration 
        src="/images/decorativas/chrome_starts.png" 
        alt="Brillo Plateado Derecho" 
        className="bottom-[10%] -right-14 w-48 h-48 md:w-64 md:h-64 opacity-30 pointer-events-none z-0" 
        animationStyle="float" 
      />

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center">
        
        <AnimatedSection once className="text-center mb-5 md:mb-5">
          <SectionHeader 
            title="Regalos" 
            subtitle="SUGERENCIAS" 
            titleClassName="font-pinyon text-5xl md:text-7xl text-[#e4e4e7]"
            subtitleClassName="text-white/50 tracking-[0.4em] font-sans font-medium text-xs mb-4"
            className="mb-4"
          />
          <p className="font-sans text-[10px] md:text-xs text-[#a1a1aa] leading-relaxed tracking-[0.2em] font-light max-w-xl mx-auto uppercase px-4">
            El mejor regalo es tu presencia,<br/> pero si deseas tener un detalle conmigo:
          </p>
          <div className="w-8 h-px bg-white/20 mx-auto mt-6"></div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 w-full mb-1 px-2 md:px-0">
          
          {/* Columna Izquierda: Opciones Físicas */}
          <AnimatedSection once delay={0.2} className="flex flex-col items-center text-center bg-[#0a0a0a]/80 backdrop-blur-xl p-6 md:p-10 rounded-3xl shadow-[0_20px_60px_rgba(255,0,127,0.08),inset_0_0_30px_rgba(255,0,127,0.05)] border border-white/10 h-full relative overflow-hidden">
             
             {/* Destello de neón fucsia brillante en el borde superior */}
             <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#ff007f] to-transparent shadow-[0_0_12px_#ff007f]" />
             
             {/* Brillo de estrella decorativa */}
             <div className="absolute top-4 left-6 w-4 h-4 opacity-40 animate-pulse pointer-events-none">
               <Image src="/images/decorativas/starts.png" alt="Star Accent" fill className="object-contain" />
             </div>

             <h4 className="font-pinyon text-4xl md:text-5xl text-white mb-2" style={{ textShadow: "0 0 15px rgba(255,255,255,0.2)" }}>
               Mesa de Regalos
             </h4>
             <p className="font-sans text-[9px] md:text-[10px] text-gray-400 leading-relaxed tracking-[0.2em] uppercase mb-6">
               Algunas ideas que me encantarían
             </p>

             <button
                onClick={() => setShowOptions(!showOptions)}
                className="w-full flex items-center justify-between px-6 py-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors group"
             >
                <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-gray-200 group-hover:text-white transition-colors">
                   {showOptions ? 'Ocultar Sugerencias' : 'Ver Sugerencias'}
                </span>
                <motion.div animate={{ rotate: showOptions ? 180 : 0 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
                   <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </motion.div>
             </button>

             <AnimatePresence>
                {showOptions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden w-full"
                  >
                     <div className="grid grid-cols-2 gap-y-6 gap-x-4 w-full pt-8 pb-2">
                       
                       {/* Opción 1 */}
                       <div className="flex flex-col items-center group">
                         <div className="w-14 h-14 relative mb-3 transition-transform duration-500 group-hover:-translate-y-1 bg-black/50 rounded-full p-3 border border-white/10 shadow-[0_0_15px_rgba(255,0,127,0.15)]">
                           <Image src="/images/decorativas/ROPA2.png" alt="Ropa" fill className="object-contain p-2 opacity-90 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
                         </div>
                         <h5 className="font-sans text-[10px] md:text-xs text-gray-200 font-bold tracking-widest mb-1 uppercase">Ropa</h5>
                         <p className="font-sans text-[8px] text-gray-500 tracking-[0.2em] uppercase">Talla XS</p>
                       </div>

                       {/* Opción 2 */}
                       <div className="flex flex-col items-center group">
                         <div className="w-14 h-14 relative mb-3 transition-transform duration-500 group-hover:-translate-y-1 bg-black/50 rounded-full p-3 border border-white/10 shadow-[0_0_15px_rgba(255,0,127,0.15)]">
                           <Image src="/images/decorativas/perfume.png" alt="Perfume" fill className="object-contain p-2 opacity-90 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
                         </div>
                         <h5 className="font-sans text-[10px] md:text-xs text-gray-200 font-bold tracking-widest mb-1 uppercase">Perfumes</h5>
                         <p className="font-sans text-[8px] text-gray-500 tracking-[0.2em] uppercase">Dulces</p>
                       </div>
                       
                       {/* Opción 3 */}
                       <div className="flex flex-col items-center group">
                         <div className="w-14 h-14 relative mb-3 transition-transform duration-500 group-hover:-translate-y-1 bg-black/50 rounded-full p-3 border border-white/10 shadow-[0_0_15px_rgba(255,0,127,0.15)]">
                           <Image src="/images/decorativas/lips.png" alt="Maquillaje" fill className="object-contain p-2 opacity-90 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
                         </div>
                         <h5 className="font-sans text-[10px] md:text-xs text-gray-200 font-bold tracking-widest mb-1 uppercase">Maquillaje</h5>
                         <p className="font-sans text-[8px] text-gray-500 tracking-[0.2em] uppercase">Gloss, Rubor, etc</p>
                       </div>

                       {/* Opción 4 */}
                       <div className="flex flex-col items-center group">
                         <div className="w-14 h-14 relative mb-3 transition-transform duration-500 group-hover:-translate-y-1 bg-black/50 rounded-full p-3 border border-white/10 shadow-[0_0_15px_rgba(255,0,127,0.15)]">
                           <Image src="/images/regalo/accesorios3.png" alt="Accesorios" fill className="object-contain p-2 opacity-90 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
                         </div>
                         <h5 className="font-sans text-[10px] md:text-xs text-gray-200 font-bold tracking-widest mb-1 uppercase">Accesorios dorados</h5>
                         <p className="font-sans text-[8px] text-gray-500 tracking-[0.2em] uppercase">Collares, Lentes</p>
                       </div>

                     </div>
                  </motion.div>
                )}
             </AnimatePresence>
          </AnimatedSection>

          {/* Columna Derecha: Lluvia de Sobres (VIP Estilo) */}
          <AnimatedSection once delay={0.4} className="flex flex-col items-center justify-center text-center bg-[#0a0a0a]/80 backdrop-blur-xl p-6 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(255,0,127,0.08),inset_0_0_30px_rgba(255,0,127,0.05)] border border-white/10 h-full relative overflow-hidden">

             {/* Destello de neón fucsia brillante en el borde superior */}
             <div className="absolute top-0 left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-[#ff007f] to-transparent shadow-[0_0_12px_#ff007f]" />

             {/* Brillo de estrella decorativa */}
             <div className="absolute top-4 right-6 w-4 h-4 opacity-40 animate-pulse pointer-events-none">
               <Image src="/images/decorativas/starts.png" alt="Star Accent" fill className="object-contain" />
             </div>

             <motion.div 
               animate={{ y: [-4, 4, -4] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="relative w-28 h-28 md:w-36 md:h-36 mb-2 transition-transform duration-500 hover:scale-105 cursor-pointer z-10"
             >
                <Image 
                  src="/images/decorativas/lluvia_sobre.png" 
                  alt="Lluvia de Sobres" 
                  fill 
                  className="object-contain drop-shadow-[0_0_25px_rgba(255,0,127,0.25)]" 
                />
             </motion.div>
             <h4 className="font-pinyon text-4xl md:text-5xl text-white mb-4" style={{ textShadow: "0 0 15px rgba(255,255,255,0.2)" }}>
               Lluvia de Sobres
             </h4>
             <p className="font-sans text-[10px] md:text-[11px] text-gray-400 leading-loose md:leading-loose tracking-[0.2em] uppercase max-w-sm">
               Es la tradición de regalar dinero en efectivo en un sobre el día del evento. 
             </p>
          </AnimatedSection>
          
        </div>

      </div>
    </section>
  );
}
