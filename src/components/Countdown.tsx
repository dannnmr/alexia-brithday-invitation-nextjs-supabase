"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <div className="relative w-full py-8 md:py-16 px-2 flex flex-col items-center text-center overflow-hidden bg-[#000000]">
      {/* Fondo nocturno VIP */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,127,0.08)_0%,rgba(5,5,5,1)_70%)]" />
      
      {/* Decoración Disco difuminada */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-[#ff007f]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-[#c0c0c0]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Imágenes Decorativas (Disco y Brillos) */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[2%] w-16 h-16 md:w-24 md:h-24 opacity-80 pointer-events-none mix-blend-screen"
      >
        <Image src="/images/decorativas/starts.png" alt="Start" fill className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[5%] w-20 h-20 md:w-32 md:h-32 opacity-70 pointer-events-none mix-blend-screen"
      >
        <Image src="/images/decorativas/starts.png" alt="Stars" fill className="object-contain drop-shadow-[0_0_20px_rgba(255,0,127,0.3)]" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto w-full"
      >
        <div className="mb-2 relative flex flex-col items-center mt-0 md:mt-0">
          <h3 className="font-pinyon text-5xl min-[380px]:text-6xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] relative z-10">
            Falta muy poco...
          </h3>
        </div>
        
        <div className="flex justify-center gap-1 min-[380px]:gap-2 md:gap-4 lg:gap-6 px-1 md:px-0">
          {[
            { label: "Días", value: timeLeft.days },
            { label: "Horas", value: timeLeft.hours },
            { label: "Minutos", value: timeLeft.minutes },
            { label: "Segundos", value: timeLeft.seconds },
          ].map((item, index, array) => (
            <React.Fragment key={item.label}>
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, type: "spring", bounce: 0.4 }}
                className="flex flex-col items-center group relative"
              >
                {/* Glassmorphism Puro Card */}
                <div className="relative w-14 h-16 min-[380px]:w-18 min-[380px]:h-22 sm:w-20 sm:h-24 md:w-28 md:h-32 lg:w-32 lg:h-36 bg-white/5 backdrop-blur-2xl rounded-xl md:rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.2)] border border-white/20 flex flex-col items-center justify-center mb-4 overflow-hidden transition-all duration-500 group-hover:-translate-y-3 group-hover:border-[#ff007f]/50 group-hover:shadow-[0_20px_40px_rgba(255,0,127,0.3),inset_0_1px_20px_rgba(255,0,127,0.2)] group-hover:bg-white/10">
                  
                  {/* Reflejo de cristal */}
                  <div className="absolute top-0 left-[-50%] right-0 h-full w-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />

                  <span className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-sans text-white font-bold tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-[#ffb3d9] transition-all duration-300" style={{ textShadow: "0 5px 15px rgba(0,0,0,0.5)" }}>
                    {item.value.toString().padStart(2, '0')}
                  </span>
                </div>
                
                <span className="text-[9px] md:text-[11px] lg:text-xs uppercase tracking-[0.3em] font-semibold text-gray-500 group-hover:text-[#ff007f] group-hover:drop-shadow-[0_0_8px_rgba(255,0,127,0.6)] transition-all duration-300">
                  {item.label}
                </span>
              </motion.div>
              
              {index < array.length - 1 && (
                <div className="flex flex-col items-center justify-start h-full -mx-1 md:-mx-2">
                  <div className="flex items-center justify-center h-16 min-[380px]:h-22 sm:h-24 md:h-32 lg:h-36 mb-4">
                    <span className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-sans font-bold text-[#ff007f] drop-shadow-[0_0_15px_rgba(255,0,127,0.6)] relative -top-1 md:-top-2">
                      :
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
