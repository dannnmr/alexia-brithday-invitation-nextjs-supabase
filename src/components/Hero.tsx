"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparkleField } from "./ui/SparkleField";
import Image from "next/image";
import { siteConfig } from "../config/invitation";

export function Hero() {
  return (
    <section className="relative min-h-svh w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      {/* <div className="absolute inset-0 w-full h-full z-0 opacity-40 md:opacity-30">
        <Image src="/images/background/image.png" alt="Background" fill className="object-cover object-center" priority />
      </div> */}

      <SparkleField mobileCount={10} desktopCount={30} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000000_90%)] pointer-events-none" />

        {/* Haces de luz giratorios de bola de disco en fucsia/plata */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_26%_0%,rgba(255,0,127,0.06)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_0%,rgba(220,220,240,0.05)_0%,transparent_50%)] pointer-events-none" />

        {/* Bolas de disco decorativas colgando 2 y 6 y 3*/}
        <div className="absolute top-[-4%] left-[26%] -translate-x-1/2 w-full max-w-md md:max-w-lg h-[200px] md:h-[260px] z-20 pointer-events-none">
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full relative">
            <Image src="/images/decorativas/boladisco2.png" alt="Bola Disco" fill className="object-contain object-top drop-shadow-[0_0_25px_rgba(255,0,127,0.3)]" />
          </motion.div>
        </div>
        <div className="absolute top-[-4%] left-[80%] -translate-x-1/2 w-full max-w-md md:max-w-lg h-[220px] md:h-[260px] z-10 pointer-events-none">
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full relative">
            <Image src="/images/decorativas/boladisco2.png" alt="Bola Disco" fill className="object-contain object-top drop-shadow-[0_0_25px_rgba(255,0,127,0.3)]" />
          </motion.div>
        </div>
        <div className="absolute top-[-8%] left-42  -translate-x-1/2 w-full max-w-md md:max-w-lg h-[110px] md:h-[260px] z-10 pointer-events-none">
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full relative">
            <Image src="/images/decorativas/boladisco2.png" alt="Bola Disco" fill className="object-contain object-top drop-shadow-[0_0_25px_rgba(255,0,127,0.3)]" />
          </motion.div>
        </div>
        <div className="absolute top-[-8%] left-100  -translate-x-1/2 w-full max-w-md md:max-w-lg h-[110px] md:h-[260px] z-10 pointer-events-none">
          <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full relative">
            <Image src="/images/decorativas/boladisco2.png" alt="Bola Disco" fill className="object-contain object-top drop-shadow-[0_0_25px_rgba(255,0,127,0.3)]" />
          </motion.div>
        </div>


        {/* Bola Disco en Movimiento 4*/}
        <motion.div
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-1%] right-40 md:right-12 w-28 h-35 md:w-44 md:h-64 lg:w-52 lg:h-72 origin-top z-10 pointer-events-none"
        >
          <Image src="/images/decorativas/boladisco2.png" alt="Bola Disco" fill className="object-contain object-top drop-shadow-[0_0_25px_rgba(255,0,127,0.3)]" />
        </motion.div>
        {/* Bola Disco en Movimiento 1 */}
        <motion.div
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] left-[-5%] md:right-12 w-28 h-35 md:w-44 md:h-64 lg:w-52 lg:h-72 origin-top z-30 pointer-events-none"
        >
          <Image src="/images/decorativas/boladisco2.png" alt="Bola Disco" fill className="object-contain object-top drop-shadow-[0_0_25px_rgba(255,0,127,0.3)]" />
        </motion.div>
        {/* Bola Disco en Movimiento 5*/}
        <motion.div
          animate={{ rotate: [-3, 3, -3] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] right-28 md:right-12 w-28 h-35 md:w-44 md:h-64 lg:w-52 lg:h-72 origin-top z-10 pointer-events-none"
        >
          <Image src="/images/decorativas/boladisco2.png" alt="Bola Disco" fill className="object-contain object-top drop-shadow-[0_0_25px_rgba(255,0,127,0.3)]" />
        </motion.div>
        <div
          className="absolute top-[19%] left-1/2 -translate-x-1/2 w-28 h-35 md:w-44 md:h-64 lg:w-52 lg:h-72 origin-top z-10 pointer-events-none"
        >
          <Image src="/images/decorativas/cinemaluces.png" alt="Cinema Luces" fill className="object-contain object-top drop-shadow-[0_0_25px_rgba(255,0,127,0.3)]" />
        </div>


        {/* Estrellas cromadas flotando sutilmente */}
        <motion.div
          animate={{ y: [0, -5, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[2%] w-16 h-16 md:w-24 md:h-24 z-30 opacity-80 pointer-events-none select-none"
        >
          <Image src="/images/decorativas/chrome_starts.png" alt="Stars" fill className="object-contain" />
        </motion.div>

        {/* Monumentos con brillo fucsia/plata en silueta */}
        <div className="absolute bottom-0 left-[-10%] w-48 h-72 md:w-52 md:h-72 z-10 pointer-events-none opacity-95">
          <Image src="/images/decorativas/estatua_libertad.png" alt="Estatua de la Libertad" fill className="object-contain object-bottom drop-shadow-[0_0_25px_rgba(255,0,127,0.25)]" />
        </div>

        <div className="absolute bottom-0 right-[-15%] w-48 h-[360px] md:h-[288px] z-10 pointer-events-none opacity-95">
          <Image src="/images/decorativas/edificio2.png" alt="Edificios" fill className="object-contain object-bottom drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]" />
        </div>
        <div className="absolute bottom-0 right-[-0%] w-35 h-[360px] md:h-[288px] z-10 pointer-events-none opacity-95">
          <Image src="/images/decorativas/edificio4.png" alt="Edificios" fill className="object-contain object-bottom drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]" />
        </div>
        <div className="absolute bottom-0 right-[10%] w-48 h-[450px] md:h-[288px] z-10 pointer-events-none opacity-95">
          <Image src="/images/decorativas/streets.png" alt="Edificios" fill className="object-contain object-bottom drop-shadow-[0_0_30px_rgba(255,0,127,0.3)]" />
        </div>
        <div className="absolute -bottom-1 left-[10%] w-48 h-[450px] md:h-[288px] z-10 pointer-events-none opacity-95">
          <Image src="/images/decorativas/direcciones.png" alt="Edificios" fill className="object-contain object-bottom drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]" />
        </div>

        {/* Nuevo grupo de edificios añadido */}
        <div className="absolute bottom-0 left-0 w-full z-[5] pointer-events-none opacity-85">
          <Image
            src="/images/decorativas/eficio_blackandwhite.png"
            alt="Grupo de Edificios"
            width={1920}
            height={800}
            className="w-full h-auto object-bottom drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
          />
        </div>



        {/* Contenido Principal */}
        <div className="relative z-30 text-center px-4 max-w-[95%] md:max-w-xl mx-auto flex flex-col items-center pointer-events-none mt-[12vh] md:mt-[10vh]">
          {/* Letrero estilo Marquesina para Mis XV Años */}
          <div className="relative z-20 mb-15">
            <div className="relative inline-block bg-[#050505] border-[3px] border-[#1a1a1a] px-6 py-2 rounded-sm shadow-[0_5px_20px_rgba(255,0,127,0.3)]">
              <div className="absolute inset-0 border-[1px] border-[#222222] m-[2px]" />
              <div className="absolute inset-0 m-[4px] border-[3px] border-dotted border-[#ff007f] opacity-90 shadow-[inset_0_0_10px_rgba(255,0,127,0.5)]" />

              <h2 className="relative text-[#e4e4e7] tracking-[0.4em] font-sans font-bold text-xs md:text-sm uppercase z-10 px-4 py-1">
                {siteConfig.client.eventType}
              </h2>
            </div>
          </div>

          <div className="relative flex items-center justify-center w-full mb-10">
            {/* DISEÑO PROPIO DE XV CREATIVO Y ANIMADO */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[500px] md:h-[500px] z-0 pointer-events-none flex items-center justify-center select-none">
              {/* Ring orbital con destellos fucsia */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-72 h-72 md:w-[380px] md:h-[380px] rounded-full border border-[#ff007f]/10 flex items-center justify-center"
              >
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, idx) => (
                  <div
                    key={idx}
                    className="absolute w-1 h-1 bg-[#ff007f] rounded-full shadow-[0_0_6px_#ff007f]"
                    style={{
                      transform: `rotate(${deg}deg) translate(144px) md:translate(190px)`,
                    }}
                  />
                ))}
              </motion.div>

              {/* XV Monograma en Números Romanos Grandes */}
              <svg viewBox="0 0 300 200" className="w-[110%] h-[110%] md:w-[480px] md:h-[480px] opacity-25 select-none">
                <defs>
                  <linearGradient id="xvVectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff007f" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#ff007f" />
                  </linearGradient>
                </defs>

                <circle cx="150" cy="100" r="92" stroke="url(#xvVectorGrad)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.35" />

                <line x1="20" y1="20" x2="280" y2="20" stroke="url(#xvVectorGrad)" strokeWidth="0.75" opacity="0.25" />
                <line x1="20" y1="180" x2="280" y2="180" stroke="url(#xvVectorGrad)" strokeWidth="0.75" opacity="0.25" />

                <text
                  x="50%"
                  y="58%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="none"
                  stroke="url(#xvVectorGrad)"
                  strokeWidth="0.85"
                  className="font-serif text-[150px] font-light tracking-[0.08em]"
                  style={{
                    fontFamily: "Didot, 'Didot LT STD', 'Bodoni MT', 'Playfair Display', Cinzel, Georgia, serif",
                  }}
                >
                  XV
                </text>
              </svg>
            </div>

            <motion.h1
              animate={{ opacity: [0.9, 1, 0.9], textShadow: ["0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,0,127,0.8)", "0 2px 4px rgba(0,0,0,0.8), 0 0 30px rgba(255,255,255,1), 0 0 60px rgba(255,0,127,1)", "0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,0,127,0.8)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative text-[6.5rem] md:text-[9rem] lg:text-[11rem] font-pinyon text-white leading-[0.8] z-10 translate-y-[20%] md:-translate-y-6"
            >
              {siteConfig.client.name}
            </motion.h1>
          </div>

          {/* Phrase Plaque con doble brillo */}
          <div className="relative w-full flex justify-center mt-6 mb-4 pointer-events-auto z-20">
            <div className="relative w-full max-w-[90%] md:max-w-md px-6 py-5 flex flex-col items-center justify-center rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,0,127,0.15)]">
              <div className="absolute inset-0 bg-linear-to-b from-[#1a1a1a]/90 via-[#050505]/95 to-[#1a1a1a]/90 backdrop-blur-xl border border-white/10" />
              <div className="absolute top-0 left-[10%] right-[10%] h-[1.5px] bg-linear-to-r from-transparent via-[#ff007f] to-transparent opacity-90 shadow-[0_0_15px_#ff007f]" />
              <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-linear-to-r from-transparent via-[#c0c0c0]/80 to-transparent opacity-80 shadow-[0_0_10px_rgba(192,192,192,0.6)]" />
              <p className="relative font-sans text-[11px] md:text-[14px] font-light italic text-center leading-relaxed text-[#f4f4f5] tracking-wide">
                "{siteConfig.client.finalPhrase}"
              </p>
            </div>
          </div>
        </div>

      </motion.div>
    </section >
  );
}
