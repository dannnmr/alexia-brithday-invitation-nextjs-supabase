// "use client";
// 
// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { SparkleField } from "./ui/SparkleField";
// import { ChevronDown } from "lucide-react";
// import Image from "next/image";
// import { siteConfig } from "../config/invitation";
// 
// type BokehParticle = {
//   id: number;
//   left: string;
//   top: string;
//   size: number;
//   duration: number;
//   delay: number;
//   driftY: number;
// };
// 
// const BOKEH_PARTICLES: BokehParticle[] = [
//   { id: 1, left: "6%", top: "70%", size: 70, duration: 12, delay: -1, driftY: -160 },
//   { id: 2, left: "20%", top: "80%", size: 100, duration: 16, delay: -4, driftY: -220 },
//   { id: 3, left: "32%", top: "65%", size: 80, duration: 14, delay: -7, driftY: -180 },
//   { id: 4, left: "46%", top: "85%", size: 110, duration: 18, delay: -2, driftY: -260 },
//   { id: 5, left: "62%", top: "60%", size: 90, duration: 13, delay: -9, driftY: -200 },
//   { id: 6, left: "76%", top: "75%", size: 105, duration: 15, delay: -5, driftY: -230 },
//   { id: 7, left: "90%", top: "70%", size: 85, duration: 17, delay: -3, driftY: -190 },
//   { id: 8, left: "14%", top: "45%", size: 60, duration: 10, delay: -8, driftY: -150 },
//   { id: 9, left: "54%", top: "40%", size: 75, duration: 11, delay: -6, driftY: -170 },
//   { id: 10, left: "84%", top: "50%", size: 65, duration: 12, delay: -11, driftY: -160 },
// ];
// 
// export function Hero() {
//   const [heroStyle, setHeroStyle] = useState<"original" | "glitter_night" | "times_square_glow" | "studio_54_classic">("original");
// 
//   return (
//     <section className="relative min-h-svh w-full flex flex-col items-center justify-center overflow-hidden bg-black">
//       
//       {/* Selector de Estilos Interactivo (Mejoras de Manhattan Night) */}
//       <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 bg-black/75 backdrop-blur-md border border-white/10 p-1 rounded-full shadow-lg">
//         <span className="text-[7.5px] text-white/40 uppercase tracking-widest pl-2 pr-1 font-bold select-none">Variación Hero:</span>
//         {(["original", "glitter_night", "times_square_glow", "studio_54_classic"] as const).map((type) => (
//           <button
//             key={type}
//             onClick={() => setHeroStyle(type)}
//             className={`px-3 py-1 rounded-full text-[8.5px] uppercase tracking-wider transition-all duration-300 font-black cursor-pointer ${
//               heroStyle === type
//                 ? "bg-[#ff007f] text-white shadow-[0_0_10px_rgba(255,0,127,0.5)]"
//                 : "text-neutral-400 hover:text-white"
//             }`}
//           >
//             {type === "original"
//               ? "Original"
//               : type === "glitter_night"
//               ? "Opción 2"
//               : type === "times_square_glow"
//               ? "Opción 3"
//               : "Opción 4"}
//           </button>
//         ))}
//       </div>
// 
//       {/* Sparkles compartidos — CSS animation, no Framer Motion */}
//       <SparkleField mobileCount={10} desktopCount={30} />
// 
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={heroStyle}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.6 }}
//           className="absolute inset-0 w-full h-full flex flex-col items-center justify-center overflow-hidden"
//         >
//           
//           {/* ========================================================== */}
//           {/* === ESTILO 1: ORIGINAL (MANHATTAN NIGHT CLÁSICO) === */}
//           {/* ========================================================== */}
//           {heroStyle === "original" && (
//             <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
//               
//               <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000000_90%)] pointer-events-none" />
// 
//               {/* Bolas de disco decorativas colgando */}
//               <div className="absolute top-[-5%] left-[26%] -translate-x-1/2 w-full max-w-md md:max-w-lg h-[300px] md:h-[380px] z-20 pointer-events-none">
//                 <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full relative">
//                   <Image src={siteConfig.visuals.hero.background} alt="Bolas de disco" fill className="object-contain object-top drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]" priority />
//                 </motion.div>
//               </div>
//               <div className="absolute top-[-5%] left-[80%] -translate-x-1/2 w-full max-w-md md:max-w-lg h-[300px] md:h-[380px] z-10 pointer-events-none">
//                 <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full relative">
//                   <Image src={siteConfig.visuals.hero.background} alt="Bolas de disco" fill className="object-contain object-top drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]" priority />
//                 </motion.div>
//               </div>
// 
//               {/* Bola Disco Individual en Movimiento */}
//               <motion.div 
//                 animate={{ rotate: [-2, 2, -2] }} 
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
//                 className="absolute top-[3%] right-32 md:right-12 w-28 h-44 md:w-44 md:h-64 lg:w-52 lg:h-72 origin-top z-10 pointer-events-none"
//               >
//                 <Image src="/images/decorativas/boladisco2.png" alt="Bola Disco" fill className="object-contain object-top drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]" />
//               </motion.div>
//               <motion.div 
//                 animate={{ rotate: [-2, 2, -2] }} 
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} 
//                 className="absolute top-[6%] left-[-12%] md:left-28 w-32 h-32 md:w-44 md:h-64 lg:w-52 lg:h-72 origin-top z-10 pointer-events-none"
//               >
//                 <Image src="/images/decorativas/boladisco2.png" alt="Bola Disco" fill className="object-contain object-top drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]" />
//               </motion.div>
// 
//               {/* Monumentos de Manhattan */}
//               {/* BOTTOM LEFT — Estatua de la Libertad */}
//               <motion.div
//                 initial={{ opacity: 0, x: -40, y: 40 }}
//                 animate={{ opacity: 1, x: 0, y: 0 }}
//                 transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.3 }}
//                 className="absolute bottom-0 left-[-10%] w-48 h-72 md:w-48 md:h-72 z-10 pointer-events-none"
//               >
//                 <Image src="/images/decorativas/estatua_libertad.png" alt="Estatua de la Libertad" fill className="object-contain object-bottom opacity-90 drop-shadow-[0_0_16px_rgba(192,192,192,0.3)]" />
//               </motion.div>
//               {/* BOTTOM LEFT — Edificio / Skyscraper 1 */}
//               <motion.div
//                 initial={{ opacity: 0, x: -40, y: 40, rotate: 0 }}
//                 animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
//                 transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.3 }}
//                 className="absolute bottom-0 right-[-52px] w-48 h-[360px] md:w-48 md:h-72 z-10 pointer-events-none"
//               >
//                 <Image src="/images/decorativas/edificio2.png" alt="Edificio" fill className="object-contain object-bottom opacity-90 drop-shadow-[0_0_16px_rgba(192,192,192,0.3)]" />
//               </motion.div>
//               {/* BOTTOM LEFT — Edificio / Skyscraper 2 */}
//               <motion.div
//                 initial={{ opacity: 0, x: -40, y: 40, rotate: 0 }}
//                 animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
//                 transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.3 }}
//                 className="absolute bottom-0 right-[-90px] w-48 h-[200px] md:w-48 md:h-72 z-10 pointer-events-none"
//               >
//                 <Image src="/images/decorativas/edificio2.png" alt="Edificio" fill className="object-contain object-bottom opacity-90 drop-shadow-[0_0_16px_rgba(192,192,192,0.3)]" />
//               </motion.div>
//               {/* BOTTOM LEFT — Edificio / Skyscraper 3 */}
//               <motion.div
//                 initial={{ opacity: 0, x: -40, y: 40, rotate: 0 }}
//                 animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
//                 transition={{ duration: 1.2, delay: 0.8, type: "spring", bounce: 0.3 }}
//                 className="absolute bottom-0 right-[5px] w-48 h-[240px] md:w-48 md:h-72 z-10 pointer-events-none"
//               >
//                 <Image src="/images/decorativas/edificio2.png" alt="Edificio" fill className="object-contain object-bottom opacity-90 drop-shadow-[0_0_16px_rgba(192,192,192,0.3)]" />
//               </motion.div>
// 
//               {/* ACCENT — Estampa New York (centro-izquierda) */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
//                 animate={{ opacity: 0.9, scale: 1, rotate: 0 }}
//                 transition={{ duration: 1.5, delay: 0.4 }}
//                 className="absolute bottom-0 right-[24%] md:left-[3%] w-30 h-30 md:w-48 md:h-48 z-30 pointer-events-none"
//               >
//                 <Image src="/images/decorativas/estampa_newyork.png" alt="Estampa New York" fill className="object-contain" />
//               </motion.div>
// 
//               <div className="absolute bottom-0 left-0 right-0 h-40 md:h-56 z-0 pointer-events-none opacity-90">
//                 <Image src="/images/decorativas/puente.png" alt="Puente Brooklyn" fill className="object-cover object-top drop-shadow-[0_-4px_20px_rgba(0,0,0,0.5)]" />
//               </div>
// 
//               {/* Contenido Principal */}
//               <div className="relative z-30 text-center px-4 max-w-[95%] md:max-w-xl mx-auto flex flex-col items-center pointer-events-none mt-[12vh] md:mt-[10vh]">
//                 <h2 className="text-[#e4e4e7] tracking-[0.4em] md:tracking-[0.5em] font-sans font-light text-xs md:text-sm uppercase mb-15 z-10 px-6 py-2 rounded-full border border-white/10 bg-[#050505]/60 backdrop-blur-md shadow-[0_0_20px_rgba(255,0,127,0.25)]">
//                   {siteConfig.client.eventType}
//                 </h2>
//                 
//                 <div className="relative flex items-center justify-center w-full mb-10">
//                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-120 md:h-120 z-0 pointer-events-none">
//                     <Image src="/images/decorativas/XV_letra.png" alt="XV" fill className="object-contain opacity-30" />
//                   </div>
//                   <h1 className="relative text-[6.5rem] md:text-[9rem] lg:text-[11rem] font-pinyon text-white leading-[0.8] z-10 translate-y-[20%] md:-translate-y-6" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.8), 0 0 35px rgba(255,0,127,0.8)" }}>
//                     {siteConfig.client.name}
//                   </h1>
//                 </div>
// 
//                 <div className="relative w-full flex justify-center mt-6 mb-4 pointer-events-auto z-20">
//                   <div className="relative w-full max-w-[90%] md:max-w-md px-6 py-5 flex flex-col items-center justify-center rounded-xl overflow-hidden">
//                     <div className="absolute inset-0 bg-linear-to-b from-[#1a1a1a]/80 via-[#050505]/90 to-[#1a1a1a]/80 backdrop-blur-xl border border-white/5" />
//                     <div className="absolute top-0 left-[15%] right-[15%] h-[1.5px] bg-linear-to-r from-transparent via-[#ff007f] to-transparent opacity-80 shadow-[0_0_12px_#ff007f]" />
//                     <p className="relative font-sans text-[11px] md:text-[14px] font-light italic text-center leading-relaxed text-[#f4f4f5] tracking-wide">
//                       "{siteConfig.client.finalPhrase}"
//                     </p>
//                   </div>
//                 </div>
//               </div>
// 
//             </div>
//           )}
// 
//           {/* ========================================================== */}
//           {/* === ESTILO 2: GLITTER NIGHT (BRILLO & DESTELLOS DISCO) === */}
//           {/* ========================================================== */}
//           {heroStyle === "glitter_night" && (
//             <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
//               
//               <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000000_90%)] pointer-events-none" />
// 
//               {/* Haces de luz giratorios de bola de disco en fucsia/plata */}
//               <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_26%_0%,rgba(255,0,127,0.06)_0%,transparent_50%)] pointer-events-none" />
//               <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_80%_0%,rgba(220,220,240,0.05)_0%,transparent_50%)] pointer-events-none" />
// 
//               {/* Bolas de disco decorativas colgando */}
//               <div className="absolute top-[-5%] left-[26%] -translate-x-1/2 w-full max-w-md md:max-w-lg h-[300px] md:h-[380px] z-20 pointer-events-none">
//                 <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full relative">
//                   <Image src={siteConfig.visuals.hero.background} alt="Bolas de disco" fill className="object-contain object-top drop-shadow-[0_15px_35px_rgba(255,0,127,0.25)]" priority />
//                 </motion.div>
//               </div>
//               <div className="absolute top-[-5%] left-[80%] -translate-x-1/2 w-full max-w-md md:max-w-lg h-[300px] md:h-[380px] z-10 pointer-events-none">
//                 <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full relative">
//                   <Image src={siteConfig.visuals.hero.background} alt="Bolas de disco" fill className="object-contain object-top drop-shadow-[0_15px_35px_rgba(255,255,255,0.2)]" priority />
//                 </motion.div>
//               </div>
// 
//               {/* Bola Disco en Movimiento */}
//               <motion.div 
//                 animate={{ rotate: [-3, 3, -3] }} 
//                 transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} 
//                 className="absolute top-[3%] right-32 md:right-12 w-28 h-44 md:w-44 md:h-64 lg:w-52 lg:h-72 origin-top z-10 pointer-events-none"
//               >
//                 <Image src="/images/decorativas/boladisco2.png" alt="Bola Disco" fill className="object-contain object-top drop-shadow-[0_0_25px_rgba(255,0,127,0.3)]" />
//               </motion.div>
// 
//               {/* Estrellas cromadas flotando sutilmente */}
//               <motion.div 
//                 animate={{ y: [0, -5, 0], rotate: [0, 4, 0] }}
//                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute top-[28%] left-[8%] w-16 h-16 md:w-24 md:h-24 z-10 opacity-40 pointer-events-none select-none"
//               >
//                 <Image src="/images/decorativas/chrome_starts.png" alt="Stars" fill className="object-contain" />
//               </motion.div>
// 
//               {/* Monumentos con brillo fucsia/plata en silueta */}
//               <div className="absolute bottom-0 left-[-10%] w-48 h-72 md:w-52 md:h-72 z-10 pointer-events-none opacity-95">
//                 <Image src="/images/decorativas/estatua_libertad.png" alt="Estatua de la Libertad" fill className="object-contain object-bottom drop-shadow-[0_0_25px_rgba(255,0,127,0.25)]" />
//               </div>
// 
//               <div className="absolute bottom-0 right-[-5%] w-48 h-[360px] md:h-[288px] z-10 pointer-events-none opacity-95">
//                 <Image src="/images/decorativas/edificio2.png" alt="Edificios" fill className="object-contain object-bottom drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]" />
//               </div>
// 
//               <div className="absolute bottom-0 left-0 right-0 h-40 md:h-56 z-0 pointer-events-none opacity-95">
//                 <Image src="/images/decorativas/puente.png" alt="Puente Brooklyn" fill className="object-cover object-top drop-shadow-[0_-5px_25px_rgba(255,0,127,0.2)]" />
//               </div>
// 
//               {/* Contenido Principal */}
//               <div className="relative z-30 text-center px-4 max-w-[95%] md:max-w-xl mx-auto flex flex-col items-center pointer-events-none mt-[12vh] md:mt-[10vh]">
//                 <h2 className="text-[#e4e4e7] tracking-[0.4em] md:tracking-[0.5em] font-sans font-bold text-xs md:text-sm uppercase mb-15 z-10 px-6 py-2 rounded-full border border-[#ff007f]/30 bg-[#050505]/80 backdrop-blur-md shadow-[0_0_25px_rgba(255,0,127,0.3)]">
//                   {siteConfig.client.eventType}
//                 </h2>
//                 
//                 <div className="relative flex items-center justify-center w-full mb-10">
//                   {/* DISEÑO PROPIO DE XV CREATIVO Y ANIMADO */}
//                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[500px] md:h-[500px] z-0 pointer-events-none flex items-center justify-center select-none">
//                     {/* Ring orbital con destellos fucsia */}
//                     <motion.div 
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                       className="absolute w-72 h-72 md:w-[380px] md:h-[380px] rounded-full border border-[#ff007f]/10 flex items-center justify-center"
//                     >
//                       {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, idx) => (
//                         <div 
//                           key={idx}
//                           className="absolute w-1 h-1 bg-[#ff007f] rounded-full shadow-[0_0_6px_#ff007f]"
//                           style={{
//                             transform: `rotate(${deg}deg) translate(144px) md:translate(190px)`,
//                           }}
//                         />
//                       ))}
//                     </motion.div>
//                     
//                     {/* XV Monograma en Números Romanos Grandes (Tipografía Serif de Alta Costura - Solo Bordes) */}
//                     <svg viewBox="0 0 300 200" className="w-[110%] h-[110%] md:w-[480px] md:h-[480px] opacity-25 select-none">
//                       <defs>
//                         <linearGradient id="xvVectorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                           <stop offset="0%" stopColor="#ff007f" />
//                           <stop offset="50%" stopColor="#ffffff" />
//                           <stop offset="100%" stopColor="#ff007f" />
//                         </linearGradient>
//                       </defs>
//                       
//                       {/* Círculo sutil geométrico en el fondo */}
//                       <circle cx="150" cy="100" r="92" stroke="url(#xvVectorGrad)" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.35" />
//                       
//                       {/* Líneas horizontales de enmarque de alta costura */}
//                       <line x1="20" y1="20" x2="280" y2="20" stroke="url(#xvVectorGrad)" strokeWidth="0.75" opacity="0.25" />
//                       <line x1="20" y1="180" x2="280" y2="180" stroke="url(#xvVectorGrad)" strokeWidth="0.75" opacity="0.25" />
// 
//                       {/* Texto XV renderizado con tipografía Didot/Bodoni (Más Grande) */}
//                       <text
//                         x="50%"
//                         y="58%"
//                         dominantBaseline="middle"
//                         textAnchor="middle"
//                         fill="none"
//                         stroke="url(#xvVectorGrad)"
//                         strokeWidth="0.85"
//                         className="font-serif text-[150px] font-light tracking-[0.08em]"
//                         style={{
//                           fontFamily: "Didot, 'Didot LT STD', 'Bodoni MT', 'Playfair Display', Cinzel, Georgia, serif",
//                         }}
//                       >
//                         XV
//                       </text>
//                     </svg>
//                   </div>
// 
//                   <h1 className="relative text-[6.5rem] md:text-[9rem] lg:text-[11rem] font-pinyon text-white leading-[0.8] z-10 translate-y-[20%] md:-translate-y-6" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.95), 0 0 45px rgba(255,0,127,0.9)" }}>
//                     {siteConfig.client.name}
//                   </h1>
//                 </div>
// 
//                 {/* Phrase Plaque con doble brillo */}
//                 <div className="relative w-full flex justify-center mt-6 mb-4 pointer-events-auto z-20">
//                   <div className="relative w-full max-w-[90%] md:max-w-md px-6 py-5 flex flex-col items-center justify-center rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,0,127,0.15)]">
//                     <div className="absolute inset-0 bg-linear-to-b from-[#1a1a1a]/90 via-[#050505]/95 to-[#1a1a1a]/90 backdrop-blur-xl border border-white/10" />
//                     <div className="absolute top-0 left-[10%] right-[10%] h-[1.5px] bg-linear-to-r from-transparent via-[#ff007f] to-transparent opacity-90 shadow-[0_0_15px_#ff007f]" />
//                     <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-linear-to-r from-transparent via-[#c0c0c0]/80 to-transparent opacity-80 shadow-[0_0_10px_rgba(192,192,192,0.6)]" />
//                     <p className="relative font-sans text-[11px] md:text-[14px] font-light italic text-center leading-relaxed text-[#f4f4f5] tracking-wide">
//                       "{siteConfig.client.finalPhrase}"
//                     </p>
//                   </div>
//                 </div>
//               </div>
// 
//             </div>
//           )}
// 
//           {/* ========================================================== */}
//           {/* === ESTILO 3: SKYLINE GLOW (TIMES SQUARE & TAXI EN PUENTE) === */}
//           {/* ========================================================== */}
//           {heroStyle === "times_square_glow" && (
//             <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
//               
//               <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,#000000_90%)] pointer-events-none" />
// 
//               {/* Bolas de disco decorativas colgando */}
//               <div className="absolute top-[-5%] left-[26%] -translate-x-1/2 w-full max-w-md md:max-w-lg h-[300px] md:h-[380px] z-20 pointer-events-none">
//                 <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full relative">
//                   <Image src={siteConfig.visuals.hero.background} alt="Bolas de disco" fill className="object-contain object-top drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]" priority />
//                 </motion.div>
//               </div>
//               <div className="absolute top-[-5%] left-[80%] -translate-x-1/2 w-full max-w-md md:max-w-lg h-[300px] md:h-[380px] z-10 pointer-events-none">
//                 <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-full relative">
//                   <Image src={siteConfig.visuals.hero.background} alt="Bolas de disco" fill className="object-contain object-top drop-shadow-[0_10px_30px_rgba(255,255,255,0.15)]" priority />
//                 </motion.div>
//               </div>
// 
//               {/* Estatua de la Libertad */}
//               <div className="absolute bottom-0 left-[-10%] w-48 h-72 md:w-52 md:h-72 z-10 pointer-events-none opacity-90">
//                 <Image src="/images/decorativas/estatua_libertad.png" alt="Estatua de la Libertad" fill className="object-contain object-bottom drop-shadow-[0_0_16px_rgba(192,192,192,0.3)]" />
//               </div>
// 
//               
//               {/* Rascacielos adicionales de fondo */}
//               <div className="absolute bottom-[-50] right-[28%] w-32 h-[280px] z-5 pointer-events-none opacity-60">
//                 <Image src="/images/decorativas/skyscrapper.png" alt="Rascacielos" fill className="object-contain object-bottom" />
//               </div>
// 
//               {/* Taxi Amarillo en el puente (Bottom Right) */}
//               <motion.div 
//                 animate={{ x: [0, 4, 0] }}
//                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//                 className="absolute bottom-[-5%] right-[20%] w-32 h-32 md:w-40 md:h-30 z-20 pointer-events-none select-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)]"
//               >
//                 <Image src="/images/decorativas/taxi2.png" alt="Taxi en puente" fill className="object-contain" />
//               </motion.div>
// 
//               {/* Edificios iluminados a la derecha */}
//               <div className="absolute bottom-0 right-[-5%] w-48 h-[360px] md:h-[288px] z-10 pointer-events-none opacity-90">
//                 <Image src="/images/decorativas/edificio2.png" alt="Edificios" fill className="object-contain object-bottom drop-shadow-[0_0_16px_rgba(192,192,192,0.3)]" />
//               </div>
//               {/* Edificios iluminados a la derecha */}
//               <div className="absolute bottom-0 right-[15%] w-30 h-[300px] md:h-[288px] z-10 pointer-events-none opacity-90">
//                 <Image src="/images/decorativas/edificio2.png" alt="Edificios" fill className="object-contain object-bottom drop-shadow-[0_0_16px_rgba(192,192,192,0.3)]" />
//               </div>
//               {/* Edificios iluminados a la derecha */}
//               <div className="absolute bottom-0 right-[-10%] w-30 h-[300px] md:h-[288px] z-10 pointer-events-none opacity-90">
//                 <Image src="/images/decorativas/edificio2.png" alt="Edificios" fill className="object-contain object-bottom drop-shadow-[0_0_16px_rgba(192,192,192,0.3)]" />
//               </div>
// 
//               {/* Brooklyn Bridge */}
//               <div className="absolute bottom-0 left-0 right-0 h-40 md:h-56 z-0 pointer-events-none opacity-90">
//                 <Image src="/images/decorativas/puente.png" alt="Puente Brooklyn" fill className="object-cover object-top drop-shadow-[0_-4px_20px_rgba(0,0,0,0.5)]" />
//               </div>
// 
//               {/* Contenido Principal */}
//               <div className="relative z-30 text-center px-4 max-w-[95%] md:max-w-xl mx-auto flex flex-col items-center pointer-events-none mt-[12vh] md:mt-[10vh]">
//                 <h2 className="text-[#e4e4e7] tracking-[0.4em] md:tracking-[0.5em] font-sans font-bold text-xs md:text-sm uppercase mb-15 z-10 px-6 py-2 rounded-full border border-white/20 bg-black/80 shadow-[0_0_15px_rgba(255,255,255,0.1)] backdrop-blur-md">
//                   {siteConfig.client.eventType}
//                 </h2>
//                 
//                 <div className="relative flex items-center justify-center w-full mb-10">
//                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-120 md:h-120 z-0 pointer-events-none">
//                     <Image src="/images/decorativas/XV_letra.png" alt="XV" fill className="object-contain opacity-30" />
//                   </div>
//                   <h1 className="relative text-[6.5rem] md:text-[9rem] lg:text-[11rem] font-pinyon text-white leading-[0.8] z-10 translate-y-[20%] md:-translate-y-6" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.8), 0 0 35px rgba(255,0,127,0.8)" }}>
//                     {siteConfig.client.name}
//                   </h1>
//                 </div>
// 
//                 {/* Phrase Plaque Neon */}
//                 <div className="relative w-full flex justify-center mt-6 mb-4 pointer-events-auto z-20">
//                   <div className="relative w-full max-w-[90%] md:max-w-md px-6 py-5 flex flex-col items-center justify-center rounded-xl overflow-hidden">
//                     <div className="absolute inset-0 bg-linear-to-b from-neutral-900/90 to-black/95 backdrop-blur-xl border border-white/5 shadow-2xl" />
//                     <p className="relative font-sans text-[11px] md:text-[14px] font-light italic text-center leading-relaxed text-[#e4e4e7] tracking-wide">
//                       "{siteConfig.client.finalPhrase}"
//                     </p>
//                   </div>
//                 </div>
//               </div>
// 
//             </div>
//           )}
// 
//           {/* ========================================================== */}
//           {/* === ESTILO 4: STUDIO 54 VIP (DISCO SWING & ESTAMPA NY) === */}
//           {/* ========================================================== */}
//           {heroStyle === "studio_54_classic" && (
//             <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
//               
//               {/* Partículas de Bokeh Fucsia flotantes (Luces flotantes de ambiente de club VIP) */}
//               <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
//                 {BOKEH_PARTICLES.map((p) => (
//                   <motion.div
//                     key={p.id}
//                     className="absolute rounded-full"
//                     style={{
//                       left: p.left,
//                       top: p.top,
//                       width: p.size,
//                       height: p.size,
//                       background: "radial-gradient(circle, rgba(255,0,127,0.07) 0%, rgba(255,0,127,0) 70%)",
//                       zIndex: 1,
//                     }}
//                     animate={{
//                       y: [0, p.driftY],
//                       opacity: [0, 0.65, 0],
//                       scale: [0.85, 1.15, 0.85],
//                     }}
//                     transition={{
//                       duration: p.duration,
//                       repeat: Infinity,
//                       delay: p.delay,
//                       ease: "easeInOut",
//                     }}
//                   />
//                 ))}
//               </div>
// 
//               {/* Pulsaciones de ondas sonoras fucsia desde las bolas de disco superiores */}
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] pointer-events-none z-0 overflow-hidden">
//                 {[1, 2, 3].map((i) => (
//                   <motion.div
//                     key={i}
//                     className="absolute top-[-80px] left-1/2 -translate-x-1/2 rounded-full border border-[#ff007f]/10"
//                     style={{ width: 120, height: 120 }}
//                     animate={{
//                       width: [120, 800],
//                       height: [120, 800],
//                       opacity: [0.25, 0],
//                     }}
//                     transition={{
//                       duration: 7,
//                       repeat: Infinity,
//                       delay: (i - 1) * 2.3,
//                       ease: "easeOut",
//                     }}
//                   />
//                 ))}
//               </div>
// 
//               <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000000_90%)] pointer-events-none" />
//               
//               {/* Fondo radial fucsia en el centro */}
//               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] md:w-[600px] md:h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.12)_0%,transparent_75%)] pointer-events-none z-0" />
// 
//               {/* Perspectiva de Red Disco Retro / Synthwave en el fondo (Sutil y Aesthetic) */}
//               <div className="absolute bottom-0 left-0 w-full h-44 opacity-20 pointer-events-none z-0 overflow-hidden">
//                 <svg className="w-full h-full stroke-[#ff007f]" viewBox="0 0 100 100" preserveAspectRatio="none">
//                   {/* Líneas de fuga horizontales */}
//                   <line x1="0" y1="50" x2="100" y2="50" strokeWidth="0.1" opacity="0.2" />
//                   <line x1="0" y1="62" x2="100" y2="62" strokeWidth="0.15" opacity="0.4" />
//                   <line x1="0" y1="76" x2="100" y2="76" strokeWidth="0.2" opacity="0.6" />
//                   <line x1="0" y1="92" x2="100" y2="92" strokeWidth="0.25" opacity="0.8" />
//                   {/* Líneas de fuga oblicuas (perspectiva) */}
//                   <line x1="0" y1="100" x2="42" y2="40" strokeWidth="0.15" />
//                   <line x1="16" y1="100" x2="44" y2="40" strokeWidth="0.15" />
//                   <line x1="32" y1="100" x2="47" y2="40" strokeWidth="0.15" />
//                   <line x1="50" y1="100" x2="50" y2="40" strokeWidth="0.15" />
//                   <line x1="68" y1="100" x2="53" y2="40" strokeWidth="0.15" />
//                   <line x1="84" y1="100" x2="56" y2="40" strokeWidth="0.15" />
//                   <line x1="100" y1="100" x2="58" y2="40" strokeWidth="0.15" />
//                 </svg>
//                 <div className="absolute inset-0 bg-linear-to-t from-transparent via-black/20 to-black pointer-events-none" />
//               </div>
// 
//               {/* Varias bolas de disco colgando a diferentes alturas y tamaños (Techo completo denso de 15 bolas) */}
//               {[
//                 { left: "2%", top: "-12%", size: "w-16 h-28 md:w-24 md:h-36", duration: 5.2, delay: 0.2, rotateRange: [-2.5, 2.5], opacity: 0.6, z: 15, mobile: true },
//                 { left: "8%", top: "-5%", size: "w-20 h-32 md:w-28 md:h-44", duration: 6.8, delay: 0.8, rotateRange: [2.0, -2.0], opacity: 0.8, z: 20, mobile: false },
//                 { left: "15%", top: "-14%", size: "w-14 h-24 md:w-18 md:h-28", duration: 4.8, delay: 1.1, rotateRange: [-1.5, 1.5], opacity: 0.5, z: 12, mobile: false },
//                 { left: "20%", top: "-3%", size: "w-26 h-42 md:w-34 md:h-52", duration: 6.0, delay: 0.5, rotateRange: [-3, 3], opacity: 0.9, z: 25, mobile: true },
//                 { left: "28%", top: "-9%", size: "w-18 h-30 md:w-24 md:h-38", duration: 5.5, delay: 1.4, rotateRange: [2.5, -2.5], opacity: 0.7, z: 15, mobile: false },
//                 { left: "34%", top: "-4%", size: "w-22 h-36 md:w-28 md:h-44", duration: 5.8, delay: 0.3, rotateRange: [-2, 2], opacity: 0.85, z: 20, mobile: false },
//                 { left: "42%", top: "-11%", size: "w-16 h-28 md:w-20 md:h-32", duration: 5.0, delay: 0.9, rotateRange: [1.8, -1.8], opacity: 0.6, z: 15, mobile: false },
//                 { left: "48%", top: "-2%", size: "w-28 h-46 md:w-38 md:h-58", duration: 6.2, delay: 0.0, rotateRange: [-3.5, 3.5], opacity: 0.95, z: 30, mobile: true },
//                 { left: "56%", top: "-8%", size: "w-18 h-30 md:w-24 md:h-38", duration: 5.4, delay: 0.7, rotateRange: [2.2, -2.2], opacity: 0.75, z: 15, mobile: false },
//                 { left: "62%", top: "-4%", size: "w-24 h-40 md:w-32 md:h-48", duration: 6.5, delay: 1.2, rotateRange: [-3, 3], opacity: 0.9, z: 25, mobile: false },
//                 { left: "70%", top: "-13%", size: "w-14 h-24 md:w-18 md:h-28", duration: 4.6, delay: 0.4, rotateRange: [-2, 2], opacity: 0.55, z: 12, mobile: false },
//                 { left: "76%", top: "-5%", size: "w-20 h-32 md:w-26 md:h-42", duration: 5.9, delay: 1.0, rotateRange: [2.5, -2.5], opacity: 0.8, z: 20, mobile: false },
//                 { left: "82%", top: "-9%", size: "w-16 h-28 md:w-22 md:h-34", duration: 6.3, delay: 0.1, rotateRange: [-1.8, 1.8], opacity: 0.65, z: 15, mobile: false },
//                 { left: "88%", top: "-3%", size: "w-26 h-42 md:w-32 md:h-50", duration: 5.6, delay: 1.5, rotateRange: [3, -3], opacity: 0.9, z: 25, mobile: true },
//                 { left: "95%", top: "-10%", size: "w-16 h-28 md:w-22 md:h-34", duration: 5.2, delay: 0.6, rotateRange: [-2.5, 2.5], opacity: 0.7, z: 15, mobile: true },
//               ].map((ball, idx) => (
//                 <motion.div
//                   key={idx}
//                   animate={{ 
//                     rotate: [ball.rotateRange[0], ball.rotateRange[1], ball.rotateRange[0]], 
//                     y: [0, -3, 0] 
//                   }}
//                   transition={{ duration: ball.duration, repeat: Infinity, ease: "easeInOut", delay: ball.delay }}
//                   className={`absolute origin-top pointer-events-none select-none ${!ball.mobile ? "hidden md:block" : ""}`}
//                   style={{
//                     top: ball.top,
//                     left: ball.left,
//                     opacity: ball.opacity,
//                     zIndex: ball.z,
//                   }}
//                 >
//                   <div className={`relative ${ball.size}`}>
//                     <Image 
//                        src="/images/decorativas/boladisco2.png" 
//                       alt="Disco ball" 
//                       fill 
//                       className="object-contain drop-shadow-[0_10px_20px_rgba(255,0,127,0.2)]" 
//                     />
//                   </div>
//                 </motion.div>
//               ))}
// 
//               {/* Estampa New York Vintage en el Fondo Izquierdo */}
//               <div className="absolute bottom-[0%] left-[50%] w-32 h-32 md:w-44 md:h-44 z-25 pointer-events-none select-none opacity-85 rotate-[-5deg] drop-shadow-[0_0_15px_rgba(255,0,127,0.15)]">
//                 <Image src="/images/decorativas/estampa_newyork.png" alt="Estampa New York" fill className="object-contain" />
//               </div>
// 
//               {/* Monumentos de Manhattan con siluetas iluminadas en fucsia */}
//               <div className="absolute bottom-0 left-[-10%] w-48 h-72 md:w-52 md:h-72 z-10 pointer-events-none opacity-90">
//                 <Image src="/images/decorativas/estatua_libertad.png" alt="Estatua de la Libertad" fill className="object-contain object-bottom drop-shadow-[0_0_20px_rgba(255,0,127,0.2)]" />
//               </div>
// 
//               <div className="absolute bottom-0 right-[-5%] w-48 h-[360px] md:h-[288px] z-10 pointer-events-none opacity-90">
//                 <Image src="/images/decorativas/edificio2.png" alt="Edificios" fill className="object-contain object-bottom drop-shadow-[0_0_20px_rgba(255,0,127,0.15)]" />
//               </div>
// 
//               <div className="absolute bottom-0 left-0 right-0 h-40 md:h-56 z-0 pointer-events-none opacity-90">
//                 <Image src="/images/decorativas/puente.png" alt="Puente Brooklyn" fill className="object-cover object-top drop-shadow-[0_-5px_20px_rgba(255,0,127,0.15)]" />
//               </div>
// 
//               {/* Luxury Frame Border (Borde neón elegante perimetral) */}
//               <div className="absolute inset-4 md:inset-6 border border-[#ff007f]/20 pointer-events-none z-40 rounded-lg">
//                 <div className="absolute inset-[2px] border border-white/5 rounded-[6px]" />
//                 {/* Cruces de registro/esquineros de diseño de alta costura */}
//                 <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#ff007f]/50" />
//                 <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#ff007f]/50" />
//                 <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#ff007f]/50" />
//                 <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#ff007f]/50" />
//               </div>
// 
//               {/* Contenido VIP */}
//               <div className="relative z-30 text-center px-4 max-w-[95%] md:max-w-xl mx-auto flex flex-col items-center pointer-events-none mt-[12vh] md:mt-[10vh]">
//                 <h2 className="text-white tracking-[0.3em] font-sans font-bold text-[9px] uppercase mb-14 px-5 py-1.5 rounded-none border border-[#ff007f]/40 bg-neutral-950/95 shadow-[0_0_15px_rgba(255,0,127,0.25)]">
//                   MIS XV AÑOS
//                 </h2>
//                 
//                 <div className="relative flex items-center justify-center w-full mb-10">
//                   {/* Monograma XV Custom Vectorizado Elegante de Fondo */}
//                   <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-110 md:h-110 z-0 pointer-events-none flex items-center justify-center">
//                     <svg className="w-full h-full opacity-35 select-none" viewBox="0 0 200 200">
//                       <defs>
//                         <linearGradient id="xvDiscoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//                           <stop offset="0%" stopColor="#ff007f" stopOpacity="0.8" />
//                           <stop offset="50%" stopColor="#ff00a0" stopOpacity="0.5" />
//                           <stop offset="100%" stopColor="#7a00ff" stopOpacity="0.8" />
//                         </linearGradient>
//                         <radialGradient id="discoXvGlow" cx="50%" cy="50%" r="50%">
//                           <stop offset="0%" stopColor="#ff007f" stopOpacity="0.25" />
//                           <stop offset="100%" stopColor="#ff007f" stopOpacity="0" />
//                         </radialGradient>
//                       </defs>
// 
//                       <circle cx="100" cy="100" r="85" fill="url(#discoXvGlow)" />
// 
//                       {/* Haz de rayos de luces de bola de disco rotando lentamente */}
//                       <motion.g 
//                         opacity="0.15"
//                         animate={{ rotate: -360 }}
//                         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
//                         style={{ originX: "100px", originY: "100px" }}
//                       >
//                         {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
//                           <line
//                             key={i}
//                             x1="100"
//                             y1="100"
//                             x2={100 + 85 * Math.cos((angle * Math.PI) / 180)}
//                             y2={100 + 85 * Math.sin((angle * Math.PI) / 180)}
//                             stroke="url(#xvDiscoGrad)"
//                             strokeWidth="0.45"
//                           />
//                         ))}
//                       </motion.g>
// 
//                       {/* Silueta del Skyline de Manhattan de fondo */}
//                       <path
//                         d="M 40 145 L 45 145 L 45 130 L 52 130 L 52 120 L 60 120 L 60 135 L 68 135 L 68 110 L 75 110 L 75 80 L 78 80 L 78 60 L 80 60 L 80 80 L 83 80 L 83 110 L 92 110 L 92 125 L 100 125 L 100 100 L 108 100 L 108 70 L 110 70 L 110 50 L 112 50 L 112 70 L 115 70 L 115 100 L 125 100 L 125 115 L 132 115 L 132 105 L 140 105 L 140 130 L 148 130 L 148 120 L 155 120 L 155 145 L 160 145"
//                         fill="none"
//                         stroke="url(#xvDiscoGrad)"
//                         strokeWidth="0.85"
//                         opacity="0.65"
//                         style={{ filter: "drop-shadow(0 0 4px rgba(255, 0, 127, 0.4))" }}
//                       />
// 
//                       {/* Broadway / Times Square marquee lights circle (Círculo de luces teatrales neoyorquinas) */}
//                       <motion.circle
//                         cx="100"
//                         cy="100"
//                         r="80"
//                         fill="none"
//                         stroke="url(#xvDiscoGrad)"
//                         strokeWidth="1.2"
//                         strokeDasharray="2, 6"
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                         style={{ originX: "100px", originY: "100px" }}
//                       />
// 
//                       {/* Órbita punteada giratoria exterior */}
//                       <motion.circle
//                         cx="100"
//                         cy="100"
//                         r="88"
//                         fill="none"
//                         stroke="url(#xvDiscoGrad)"
//                         strokeWidth="0.75"
//                         strokeDasharray="4, 6"
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//                         style={{ originX: "100px", originY: "100px" }}
//                       />
// 
//                       {/* Iniciales XV serif vectorizadas en doble trazo neón de cristal */}
//                       <text
//                         x="50%"
//                         y="56%"
//                         dominantBaseline="middle"
//                         textAnchor="middle"
//                         fontFamily="Didot, Bodoni MT, Playfair Display, serif"
//                         fontSize="92"
//                         fontWeight="200"
//                         fill="none"
//                         stroke="url(#xvDiscoGrad)"
//                         strokeWidth="2.5"
//                         letterSpacing="2"
//                         opacity="0.4"
//                         style={{ filter: "drop-shadow(0 0 8px rgba(255, 0, 127, 0.35))" }}
//                       >
//                         XV
//                       </text>
//                       <text
//                         x="50%"
//                         y="56%"
//                         dominantBaseline="middle"
//                         textAnchor="middle"
//                         fontFamily="Didot, Bodoni MT, Playfair Display, serif"
//                         fontSize="92"
//                         fontWeight="200"
//                         fill="none"
//                         stroke="#ffffff"
//                         strokeWidth="0.85"
//                         letterSpacing="2"
//                         style={{ filter: "drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))" }}
//                       >
//                         XV
//                       </text>
// 
//                       {/* Miras/Ejes cardinales */}
//                       <line x1="100" y1="5" x2="100" y2="15" stroke="url(#xvDiscoGrad)" strokeWidth="0.8" />
//                       <line x1="100" y1="185" x2="100" y2="195" stroke="url(#xvDiscoGrad)" strokeWidth="0.8" />
//                       <line x1="5" y1="100" x2="15" y2="100" stroke="url(#xvDiscoGrad)" strokeWidth="0.8" />
//                       <line x1="185" y1="100" x2="195" y2="100" stroke="url(#xvDiscoGrad)" strokeWidth="0.8" />
//                     </svg>
//                   </div>
//                   <h1 className="relative text-[6.5rem] md:text-[9rem] lg:text-[11rem] font-pinyon text-white leading-[0.8] z-10 translate-y-[20%] md:-translate-y-6" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.9), 0 0 15px rgba(255,255,255,0.85), 0 0 35px rgba(255,0,127,0.95), 0 0 50px rgba(255,0,127,0.5)" }}>
//                     {siteConfig.client.name}
//                   </h1>
//                 </div>
// 
//                 {/* Phrase Plaque Vintage Frame con Toques Fucsia y Muescas de Boleto VIP */}
//                 <div className="relative w-full flex justify-center mt-6 mb-4 pointer-events-auto z-20">
//                   <div className="relative w-full max-w-[90%] md:max-w-md px-6 py-5 bg-neutral-950/95 border border-[#ff007f]/30 rounded-sm text-center shadow-[0_0_20px_rgba(255,0,127,0.15)]">
//                     <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#ff007f]" />
//                     <div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#ff007f]" />
//                     <div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#ff007f]" />
//                     <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#ff007f]" />
//                     
//                     {/* Muescas laterales de boleto VIP */}
//                     <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-r border-[#ff007f]/30 z-20" />
//                     <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-l border-[#ff007f]/30 z-20" />
// 
//                     <p className="font-sans text-[11px] md:text-[13.5px] font-light italic leading-relaxed text-zinc-300 tracking-wide">
//                       "{siteConfig.client.finalPhrase}"
//                     </p>
//                   </div>
//                 </div>
//               </div>
// 
//             </div>
//           )}
// 
//         </motion.div>
//       </AnimatePresence>
// 
//       {/* Scroll Indicator */}
//       <motion.div 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 1 }}
//         className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-30 pointer-events-none"
//       >
//         <span className="text-[9px] uppercase tracking-[0.2em] font-bold px-2 py-0.5 rounded-full bg-white/50 text-black">Desliza</span>
//         <motion.div
//           animate={{ y: [0, 8, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//           className="rounded-full p-1 bg-white/50 text-white"
//         >
//           <ChevronDown className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
//         </motion.div>
//       </motion.div>
// 
//     </section>
//   );
// }
// 