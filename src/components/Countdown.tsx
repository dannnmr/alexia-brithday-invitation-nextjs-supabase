"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "../config/invitation";

// Replace with the actual party date
const TARGET_DATE = new Date(siteConfig.event.isoDate).getTime();
console.log("TARGET_DATE", TARGET_DATE);

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = TARGET_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null; // Avoid hydration mismatch on initial render

  return (
    <div className="relative w-full py-10 md:py-16 px-4 flex flex-col items-center text-center overflow-hidden bg-[#050505]">
      {/* Fondo nocturno VIP */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,127,0.05)_0%,rgba(5,5,5,1)_80%)]" />

      {/* Imagen de fondo de edificio B&W en la parte inferior */}
      <div className="absolute inset-x-0 bottom-0 w-full h-[50%] md:h-[60%] opacity-35 pointer-events-none z-0">
        <Image 
          src="/images/decorativas/eficio_blackandwhite.png" 
          alt="NYC Building BW Background" 
          fill 
          className="object-cover object-bottom" 
          sizes="100vw"
        />
      </div>
      
      {/* Decoración Disco difuminada */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-[#ff007f]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-[#ff007f]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Imágenes Decorativas (Brillos) */}
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [-3, 3, -3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[5%] w-12 h-12 md:w-20 md:h-20 opacity-40 pointer-events-none mix-blend-screen"
      >
        <Image src="/images/decorativas/starts.png" alt="Star" fill className="object-contain" />
      </motion.div>
      <motion.div
        animate={{ y: [6, -6, 6], rotate: [3, -3, 3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[15%] right-[8%] w-14 h-14 md:w-24 md:h-24 opacity-30 pointer-events-none mix-blend-screen"
      >
        <Image src="/images/decorativas/starts.png" alt="Stars" fill className="object-contain" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center"
      >
        <div className="mb-8 relative flex flex-col items-center">
          <p className="font-sans text-[8px] min-[380px]:text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-[#ff007f] mb-1 font-black">
            El Gran Día
          </p>
          <h3 className="font-pinyon text-4xl min-[380px]:text-5xl md:text-7xl text-white">
            Falta muy poco...
          </h3>
        </div>
        
        <div className="flex items-center justify-center gap-1.5 min-[380px]:gap-3 md:gap-6 px-1 md:px-0">
          {[
            { label: "Días", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Minutos", value: timeLeft.minutes },
            { label: "Segundos", value: timeLeft.seconds },
          ].map((item, index, array) => (
            <React.Fragment key={item.label}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", bounce: 0.3 }}
                className="flex flex-col items-center group"
              >
                {/* luxury split-flap card display */}
                <div 
                  className="relative w-16 h-20 min-[380px]:w-20 min-[380px]:h-24 sm:w-22 sm:h-26 md:w-28 md:h-34 lg:w-32 lg:h-38 bg-[#0c0c0c] border border-white/6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center mb-3 overflow-hidden transition-all duration-500 group-hover:border-[#ff007f]/40 group-hover:shadow-[0_0_25px_rgba(255,0,127,0.2),inset_0_1px_1px_rgba(255,255,255,0.1)]"
                  style={{ perspective: "400px" }}
                >
                  
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent pointer-events-none" />
                  
                  {/* Horizontal split-flap line */}
                  <div className="absolute left-0 right-0 top-1/2 h-px bg-black/80 z-20 shadow-[0_1px_0_rgba(255,255,255,0.04),0_-1px_0_rgba(0,0,0,0.4)]" />

                  {/* Value container with flip effect */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={item.value}
                        initial={{ rotateX: 85, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        exit={{ rotateX: -85, opacity: 0 }}
                        transition={{ duration: 0.45, ease: "easeInOut" }}
                        className="absolute text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black text-white leading-none tracking-tighter origin-center"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        {item.value.toString().padStart(2, '0')}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-white/10 rounded-tl-sm pointer-events-none" />
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-white/10 rounded-tr-sm pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-white/10 rounded-bl-sm pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-white/10 rounded-tr-sm pointer-events-none" />
                </div>
                
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-neutral-100 group-hover:text-[#ff007f] transition-all duration-300">
                  {item.label}
                </span>
              </motion.div>
              
              {index < array.length - 1 && (
                <div className="flex flex-col items-center justify-start h-full -mx-0.5 md:-mx-1">
                  <div className="flex items-center justify-center h-20 min-[380px]:h-24 sm:h-26 md:h-34 lg:h-38 mb-3">
                    <span className="text-base sm:text-lg md:text-2xl text-[#ff007f]/60 drop-shadow-[0_0_8px_rgba(255,0,127,0.5)] animate-[pulse_1.5s_infinite] relative -top-0.5 font-bold">
                      •
                    </span>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
