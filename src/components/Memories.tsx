"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const memories = [
  { id: 1, src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", caption: "Mis primeros pasos" },
  { id: 2, src: "https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", caption: "Primer día de clases" },
  { id: 3, src: "https://images.unsplash.com/photo-1472586662442-3eec04b7b257?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", caption: "Vacaciones familiares" },
  { id: 4, src: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", caption: "Con mis mejores amigas" },
];

export function Memories() {
  return (
    <section className="relative py-32 md:py-48 px-0 bg-[#050505] overflow-hidden flex flex-col items-center">
      
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#ffd6b3]/40 to-transparent rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-sky-200/30 to-transparent rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Floating Seashell Element */}
      <motion.div
        animate={{ y: [15, -15, 15], rotate: [-10, 0, -10] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[5%] md:left-[10%] w-24 h-24 md:w-32 md:h-32 opacity-50 mix-blend-multiply pointer-events-none z-0"
      >
        <Image src="/images/decorativas/concha_mar.png" alt="Seashell" fill className="object-contain" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full text-center px-6 mb-16 relative z-10"
      >
        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#ff007f] font-bold mb-6">
          Un viaje en el tiempo
        </p>
        <h3 className="font-script text-6xl md:text-8xl lg:text-9xl text-[#ffffff] leading-none mb-4">
          Mis Recuerdos
        </h3>
        <p className="font-sans text-[10px] md:text-xs text-[#a1a1aa]/60 mt-6 tracking-[0.5em] uppercase flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-[#ff007f]/30"></span>
          Desliza para explorar
          <span className="w-12 h-px bg-[#ff007f]/30"></span>
        </p>
      </motion.div>

      {/* Cinematic Polaroid Scroll */}
      <div 
        className="relative z-10 w-full px-6 md:px-12 flex overflow-x-auto snap-x snap-mandatory gap-8 md:gap-16 pb-24 pt-12 hide-scrollbar" 
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Left Spacer */}
        <div className="shrink-0 w-[10vw] md:w-[20vw]" />

        {memories.map((memory, idx) => {
          // Stagger rotations for organic polaroid look
          const initialRotate = idx % 2 === 0 ? -4 : 4;
          const yOffset = idx % 2 === 0 ? 20 : -20;

          return (
            <motion.div
              key={memory.id}
              initial={{ opacity: 0, y: yOffset + 50, rotate: initialRotate * 2 }}
              whileInView={{ opacity: 1, y: yOffset, rotate: initialRotate }}
              viewport={{ once: true, margin: "100px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, type: "spring", stiffness: 50 }}
              whileHover={{ scale: 1.05, rotate: 0, y: 0, zIndex: 20 }}
              className="snap-center shrink-0 w-[260px] md:w-[340px] bg-[#0a0a0a] p-4 md:p-6 pb-12 md:pb-16 rounded-[2px] shadow-[0_20px_40px_rgba(214,25,88,0.08)] border border-[#ffccde]/20 flex flex-col hover:shadow-[0_40px_80px_rgba(214,25,88,0.2)] transition-all cursor-grab active:cursor-grabbing relative"
            >
              {/* Tape Effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 md:w-32 h-8 bg-[#0a0a0a]/40 backdrop-blur-md rotate-[-2deg] border border-white/60 shadow-sm z-20 opacity-80" />

              <div className="relative w-full aspect-square bg-gray-100 mb-6 md:mb-8 overflow-hidden rounded-[2px] shadow-inner">
                <img 
                  src={memory.src} 
                  alt={memory.caption} 
                  className="w-full h-full object-cover sepia-[0.1] saturate-[1.2] transition-transform duration-700 hover:scale-110 hover:sepia-0"
                  loading="lazy"
                />
                
                {/* Vintage Photo Overlay / Light Leak */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#ffffff]/10 to-transparent mix-blend-overlay pointer-events-none" />
              </div>
              
              <p className="font-script text-3xl md:text-5xl text-center text-[#ffffff] leading-tight">
                {memory.caption}
              </p>
            </motion.div>
          )
        })}

        {/* Right Spacer */}
        <div className="shrink-0 w-[10vw] md:w-[20vw]" />
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
