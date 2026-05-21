// "use client";
// 
// import React, { useState } from "react";
// import { SparkleField } from "./ui/SparkleField";
// import { motion, AnimatePresence } from "framer-motion";
// import { siteConfig } from "../config/invitation";
// import { SectionHeader } from "./ui/SectionHeader";
// import { Check, X, AlertCircle } from "lucide-react";
// import { FloatingDecoration } from "./ui/FloatingDecoration";
// 
// export function DressCodeOptions() {
//   const [styleType, setStyleType] = useState<"original" | "classic_white" | "badge" | "gallery" | "collage">("collage");
// 
//   return (
//     <div className="relative w-full bg-[#050505] overflow-hidden">
//       
//       {/* Selector de Estilos Interactivo */}
//       <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-white/10 p-1 rounded-full shadow-lg">
//         <span className="text-[7.5px] text-white/40 uppercase tracking-widest pl-2 pr-1 font-bold select-none">Estilo:</span>
//         {(["original", "classic_white", "badge", "gallery", "collage"] as const).map((type) => (
//           <button
//             key={type}
//             onClick={() => setStyleType(type)}
//             className={`px-3 py-1 rounded-full text-[8.5px] uppercase tracking-wider transition-all duration-300 font-black cursor-pointer ${
//               styleType === type
//                 ? "bg-[#ff007f] text-white shadow-[0_0_10px_rgba(255,0,127,0.5)]"
//                 : "text-neutral-400 hover:text-white"
//             }`}
//           >
//             {type === "original"
//               ? "Original"
//               : type === "classic_white"
//               ? "Opción 2"
//                : type === "badge"
//               ? "Opción 3"
//               : type === "gallery"
//               ? "Opción 4"
//               : "Opción 5"}
//           </button>
//         ))}
//       </div>
// 
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={styleType}
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -10 }}
//           transition={{ duration: 0.35 }}
//           className="w-full"
//         >
//           {/* === OPCIÓN 1: ORIGINAL (SELLO CIRCULAR - OSCURO) === */}
//           {styleType === "original" && (
//             <section className="relative py-16 md:py-24 px-10 bg-[#050505] flex flex-col items-center overflow-hidden w-full">
//               
//               <FloatingDecoration
//                 src="/images/decorativas/estrella_glitter.png"
//                 alt="Estrella Glitter"
//                 className="top-[10%] left-[-5%] w-48 h-48 md:w-72 md:h-72 opacity-20 pointer-events-none z-0"
//                 animationStyle="float"
//               />
//               <FloatingDecoration
//                 src="/images/decorativas/estrella_glitter.png"
//                 alt="Estrella Glitter"
//                 className="bottom-[10%] right-[-5%] w-48 h-48 md:w-72 md:h-72 opacity-20 pointer-events-none z-0"
//                 animationStyle="float"
//               />
//               
//               <SparkleField mobileCount={8} desktopCount={20} />
//               <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_85%)] pointer-events-none" />
// 
//               {/* Borde decorativo interior */}
//               <div className="absolute inset-4 md:inset-8 border border-white/5 rounded-sm pointer-events-none z-0" />
//               <div className="absolute inset-[20px] md:inset-[38px] border-[0.5px] border-white/5 rounded-sm pointer-events-none z-0" />
// 
//               <div className="relative z-10 max-w-4xl text-center w-full flex flex-col items-center pt-8">
//                 <SectionHeader 
//                   title={siteConfig.dressCode.mainTitle} 
//                   subtitle={siteConfig.dressCode.topLabel} 
//                   titleClassName="font-pinyon text-5xl md:text-7xl text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
//                   subtitleClassName="text-[#ff007f] tracking-[0.5em] font-sans font-bold text-[10px] md:text-xs mb-4 drop-shadow-[0_0_10px_rgba(255,0,127,0.4)]"
//                   className="mb-0" 
//                 />
// 
//                 <div className="flex flex-col items-center w-full mt-8">
//                   {/* Sello Central VIP */}
//                   <div className="mb-10 md:mb-14 relative flex flex-col items-center">
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                       style={{ willChange: "transform" }}
//                       className="absolute w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full border border-dashed border-[#ff007f]/20 pointer-events-none"
//                     />
//                     <motion.div 
//                       whileHover={{ scale: 1.05 }}
//                       className="relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56 bg-[#0a0a0a] rounded-full shadow-[0_0_40px_rgba(255,0,127,0.1),inset_0_0_30px_rgba(255,255,255,0.02)] border border-white/20 transition-transform duration-700 ease-out"
//                     >
//                        <div className="absolute inset-[6px] md:inset-[10px] border border-white/10 rounded-full pointer-events-none" />
//                        <span className="font-serif text-2xl md:text-4xl tracking-[0.3em] text-white font-light uppercase text-center z-10 ml-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
//                          {siteConfig.dressCode.type}
//                        </span>
//                     </motion.div>
//                   </div>
// 
//                   {/* Colores reservados */}
//                   <div className="flex flex-col gap-5 text-center max-w-2xl w-full mx-auto px-4 md:px-8">
//                     <div className="flex flex-col items-center gap-3">
//                       <div className="flex items-center justify-center gap-5 mb-1">
//                         <div className="w-8 h-8 rounded-full bg-[#ff007f] shadow-[0_0_20px_rgba(255,0,127,0.5)]" />
//                         <div className="w-px h-6 bg-white/10" />
//                         <div className="w-8 h-8 rounded-full shadow-[0_0_20px_rgba(192,192,192,0.4)] bg-linear-to-tr from-[#888] via-[#ffffff] to-[#c0c0c0]" />
//                       </div>
// 
//                       <p className="font-sans text-[10px] md:text-[11px] text-gray-400 leading-loose tracking-[0.2em] uppercase max-w-md">
//                         {siteConfig.dressCode.reservedColorsText.prefix}
//                         {" "}<strong className="text-[#ff007f] font-bold tracking-[0.25em]">{siteConfig.dressCode.reservedColorsText.color1}</strong>{" "}
//                         Y{" "}
//                         <strong className="text-gray-300 font-bold tracking-[0.25em]">{siteConfig.dressCode.reservedColorsText.color2}</strong>
//                         <br/>
//                         <span className="mt-2 block text-gray-500">ESTÁN RESERVADOS EXCLUSIVAMENTE PARA LA QUINCEAÑERA.</span>
//                       </p>
//                     </div>
//                     
//                     <div className="w-16 h-px bg-linear-to-r from-transparent via-white/20 to-transparent mx-auto" />
//                     
//                     <p className="font-sans text-[9px] md:text-[10px] text-gray-500 leading-loose tracking-[0.2em] uppercase max-w-md mx-auto">
//                       {siteConfig.dressCode.extraNotes.prefix}{" "}
//                       <strong className="text-white font-semibold">{siteConfig.dressCode.extraNotes.highlight}</strong>{" "}
//                       {siteConfig.dressCode.extraNotes.suffix}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           )}
// 
//           {/* === OPCIÓN 2: ORIGINAL (SELLO CIRCULAR - BLANCO) === */}
//           {styleType === "classic_white" && (
//             <section className="relative py-16 md:py-24 px-10 bg-white flex flex-col items-center overflow-hidden w-full text-black">
//               
//               <FloatingDecoration
//                 src="/images/decorativas/estrella_glitter.png"
//                 alt="Estrella Glitter"
//                 className="top-[10%] left-[-5%] w-48 h-48 md:w-72 md:h-72 opacity-15 pointer-events-none z-0"
//                 animationStyle="float"
//               />
//               <FloatingDecoration
//                 src="/images/decorativas/estrella_glitter.png"
//                 alt="Estrella Glitter"
//                 className="bottom-[10%] right-[-5%] w-48 h-48 md:w-72 md:h-72 opacity-15 pointer-events-none z-0"
//                 animationStyle="float"
//               />
//               
//               <SparkleField mobileCount={6} desktopCount={16} />
// 
//               {/* Borde decorativo interior gris */}
//               <div className="absolute inset-4 md:inset-8 border border-gray-200 rounded-sm pointer-events-none z-0" />
//               <div className="absolute inset-[20px] md:inset-[38px] border-[0.5px] border-gray-100 rounded-sm pointer-events-none z-0" />
// 
//               <div className="relative z-10 max-w-4xl text-center w-full flex flex-col items-center pt-8">
//                 <SectionHeader 
//                   title={siteConfig.dressCode.mainTitle} 
//                   subtitle={siteConfig.dressCode.topLabel} 
//                   titleClassName="font-pinyon text-5xl md:text-7xl text-[#111111] drop-shadow-none"
//                   subtitleClassName="text-[#ff007f] tracking-[0.5em] font-sans font-bold text-[10px] md:text-xs mb-4"
//                   className="mb-0" 
//                 />
// 
//                 <div className="flex flex-col items-center w-full mt-8">
//                   {/* Sello Central VIP Blanco */}
//                   <div className="mb-10 md:mb-14 relative flex flex-col items-center">
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//                       className="absolute w-[180px] h-[180px] md:w-[250px] md:h-[250px] rounded-full border border-dashed border-[#ff007f]/30 pointer-events-none"
//                     />
//                     <motion.div 
//                       whileHover={{ scale: 1.05 }}
//                       className="relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56 bg-[#fafafa] rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(0,0,0,0.01)] border border-gray-200 transition-transform duration-700 ease-out"
//                     >
//                        <div className="absolute inset-[6px] md:inset-[10px] border border-gray-200/60 rounded-full pointer-events-none" />
//                        <span className="font-serif text-2xl md:text-4xl tracking-[0.3em] text-[#111111] font-light uppercase text-center z-10 ml-2">
//                          {siteConfig.dressCode.type}
//                        </span>
//                     </motion.div>
//                   </div>
// 
//                   {/* Colores reservados */}
//                   <div className="flex flex-col gap-5 text-center max-w-2xl w-full mx-auto px-4 md:px-8">
//                     <div className="flex flex-col items-center gap-3">
//                       <div className="flex items-center justify-center gap-5 mb-1">
//                         <div className="w-8 h-8 rounded-full bg-[#ff007f] shadow-[0_3px_10px_rgba(255,0,127,0.3)]" />
//                         <div className="w-px h-6 bg-gray-200" />
//                         <div className="w-8 h-8 rounded-full shadow-[0_3px_10px_rgba(0,0,0,0.05)] bg-linear-to-tr from-[#999] via-[#f3f4f6] to-[#d1d5db]" />
//                       </div>
// 
//                       <p className="font-sans text-[10px] md:text-[11px] text-gray-500 leading-loose tracking-[0.2em] uppercase max-w-md">
//                         {siteConfig.dressCode.reservedColorsText.prefix}
//                         {" "}<strong className="text-[#ff007f] font-bold tracking-[0.25em]">{siteConfig.dressCode.reservedColorsText.color1}</strong>{" "}
//                         Y{" "}
//                         <strong className="text-gray-700 font-bold tracking-[0.25em]">{siteConfig.dressCode.reservedColorsText.color2}</strong>
//                         <br/>
//                         <span className="mt-2 block text-gray-400">ESTÁN RESERVADOS EXCLUSIVAMENTE PARA LA QUINCEAÑERA.</span>
//                       </p>
//                     </div>
//                     
//                     <div className="w-16 h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mx-auto" />
//                     
//                     <p className="font-sans text-[9px] md:text-[10px] text-gray-400 leading-loose tracking-[0.2em] uppercase max-w-md mx-auto">
//                       {siteConfig.dressCode.extraNotes.prefix}{" "}
//                       <strong className="text-gray-800 font-bold">{siteConfig.dressCode.extraNotes.highlight}</strong>{" "}
//                       {siteConfig.dressCode.extraNotes.suffix}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           )}
// 
//           {/* === OPCIÓN 3: PLACA VIP DE NEÓN === */}
//           {styleType === "badge" && (
//             <section className="relative py-16 md:py-24 px-6 bg-[#050505] flex flex-col items-center justify-center w-full overflow-hidden text-center">
//               
//               <FloatingDecoration
//                 src="/images/decorativas/estrella_glitter.png"
//                 alt="Estrella Glitter"
//                 className="top-[5%] left-[-5%] w-48 h-48 md:w-64 md:h-64 opacity-20 pointer-events-none z-0"
//                 animationStyle="float"
//               />
//               <FloatingDecoration
//                 src="/images/decorativas/estrella_glitter.png"
//                 alt="Estrella Glitter"
//                 className="bottom-[5%] right-[-5%] w-48 h-48 md:w-64 md:h-64 opacity-20 pointer-events-none z-0"
//                 animationStyle="float"
//               />
// 
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ff007f]/5 rounded-full blur-[120px] pointer-events-none z-0" />
//               
//               <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center pt-8">
//                 <span className="font-sans text-[7.5px] md:text-[8px] uppercase tracking-[0.5em] text-neutral-400 font-bold mb-3">
//                   {siteConfig.dressCode.topLabel.toUpperCase()}
//                 </span>
//                 
//                 <div className="w-full bg-neutral-950/60 border border-[#ff007f]/20 rounded-3xl p-8 backdrop-blur-xl shadow-[0_20px_50px_rgba(255,0,127,0.03)] relative mt-4">
//                   {/* Glowing neon top bar */}
//                   <div className="absolute top-0 left-[15%] right-[15%] h-[1.5px] bg-linear-to-r from-transparent via-[#ff007f] to-transparent shadow-[0_0_10px_#ff007f]" />
//                   
//                   <span className="text-[7px] tracking-[0.3em] uppercase text-[#ff007f] font-black block mb-2">REQUISITO ACCESO</span>
//                   <h2 className="font-serif text-3xl md:text-4xl text-white tracking-[0.15em] uppercase font-light mb-6">
//                     {siteConfig.dressCode.type}
//                   </h2>
// 
//                   <div className="w-full h-px bg-white/10 my-6" />
// 
//                   <div className="flex flex-col items-center gap-5">
//                     <p className="font-sans text-[7.5px] tracking-[0.3em] uppercase text-neutral-400 font-bold">
//                       PALETA EXCLUSIVA QUINCEAÑERA
//                     </p>
// 
//                     {/* Floating rings */}
//                     <div className="flex items-center justify-center gap-8 my-2">
//                       <div className="relative">
//                         <div className="absolute inset-0 bg-[#ff007f]/40 rounded-full blur-md animate-pulse" />
//                         <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#ff007f] to-[#b30059] border border-white/30 flex items-center justify-center shadow-lg relative z-10">
//                           <span className="text-[7.5px] text-white font-mono tracking-widest uppercase rotate-12">VIP</span>
//                         </div>
//                       </div>
//                       <div className="w-px h-10 bg-white/10" />
//                       <div className="relative">
//                         <div className="absolute inset-0 bg-white/20 rounded-full blur-md animate-pulse" />
//                         <div className="w-14 h-14 rounded-full bg-linear-to-br from-white via-[#d4d4d8] to-[#71717a] border border-white/30 flex items-center justify-center shadow-lg relative z-10">
//                           <span className="text-[7.5px] text-black font-mono tracking-widest uppercase -rotate-12">GUEST</span>
//                         </div>
//                       </div>
//                     </div>
// 
//                     <p className="font-sans text-[8.5px] text-neutral-400 tracking-[0.2em] leading-relaxed uppercase max-w-sm flex items-center justify-center gap-1.5 mx-auto">
//                       <AlertCircle className="w-3.5 h-3.5 text-[#ff007f] shrink-0" strokeWidth={2.5} />
//                       <span>
//                         {siteConfig.dressCode.reservedColorsText.prefix} <span className="text-[#ff007f] font-bold">{siteConfig.dressCode.reservedColorsText.color1}</span> Y <span className="text-white font-bold">{siteConfig.dressCode.reservedColorsText.color2}</span> {siteConfig.dressCode.reservedColorsText.suffix}
//                       </span>
//                     </p>
//                   </div>
// 
//                   <div className="w-full h-px bg-white/10 my-6" />
// 
//                   <p className="font-sans text-[8.5px] md:text-[9.5px] tracking-[0.15em] text-neutral-500 uppercase leading-relaxed max-w-xs">
//                     {siteConfig.dressCode.extraNotes.prefix}{" "}
//                     <span className="text-white font-black">{siteConfig.dressCode.extraNotes.highlight}</span>{" "}
//                     {siteConfig.dressCode.extraNotes.suffix}
//                   </p>
//                 </div>
//               </div>
//             </section>
//           )}
// 
//           {/* === OPCIÓN 4: EXPOSICIÓN DE FASHION GALLERY === */}
//           {styleType === "gallery" && (
//             <section className="relative py-16 md:py-24 px-6 bg-[#050505] flex flex-col items-center justify-center w-full overflow-hidden text-center">
//               
//               <FloatingDecoration
//                 src="/images/decorativas/estrella_glitter.png"
//                 alt="Estrella Glitter"
//                 className="top-[10%] left-[-5%] w-48 h-48 md:w-72 md:h-72 opacity-25 pointer-events-none z-0"
//                 animationStyle="float"
//               />
//               <FloatingDecoration
//                 src="/images/decorativas/estrella_glitter.png"
//                 alt="Estrella Glitter"
//                 className="bottom-[10%] right-[-5%] w-48 h-48 md:w-72 md:h-72 opacity-25 pointer-events-none z-0"
//                 animationStyle="float"
//               />
// 
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-white/1 rounded-full blur-[90px] pointer-events-none" />
// 
//               <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center pt-8">
//                 <span className="font-sans text-[7.5px] md:text-[8px] uppercase tracking-[0.5em] text-neutral-400 font-bold mb-3">
//                   {siteConfig.dressCode.topLabel.toUpperCase()}
//                 </span>
// 
//                 <div className="w-full bg-neutral-950/80 border border-white/10 p-6 md:p-10 relative mt-4">
//                   {/* Luxury corner ticks */}
//                   <div className="absolute -top-px -left-px w-2.5 h-2.5 border-t border-l border-[#ff007f]" />
//                   <div className="absolute -top-px -right-px w-2.5 h-2.5 border-t border-r border-[#ff007f]" />
//                   <div className="absolute -bottom-px -left-px w-2.5 h-2.5 border-b border-l border-[#ff007f]" />
//                   <div className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b border-r border-[#ff007f]" />
// 
//                   {/* Header */}
//                   <span className="text-[6.5px] tracking-[0.3em] text-[#ff007f] font-black uppercase mb-2 block font-sans">BOUTIQUE EXHIBIT</span>
//                   <h2 className="font-serif text-2xl md:text-3xl text-white tracking-[0.2em] uppercase font-light mb-14">
//                     {siteConfig.dressCode.type}
//                   </h2>
// 
//                   {/* Visual Color Rack Display */}
//                   <div className="flex flex-col items-center w-full mb-10">
//                     
//                     {/* Metal Rod Hanger Rack */}
//                     <div className="relative w-full max-w-xs h-[1.5px] bg-linear-to-r from-transparent via-neutral-700 to-transparent mb-12">
//                       <div className="absolute left-[10%] top-[-3px] w-1.5 h-1.5 rounded-full bg-neutral-600" />
//                       <div className="absolute right-[10%] top-[-3px] w-1.5 h-1.5 rounded-full bg-neutral-600" />
//                     </div>
// 
//                     {/* Clothing Tags Row */}
//                     <div className="flex justify-center gap-2 md:gap-3.5 w-full relative z-10">
//                       
//                       {/* Tag 1: Negro (Permitido) */}
//                       <div className="flex flex-col items-center relative -mt-11">
//                         <div className="w-px h-5 bg-neutral-700 mb-1" />
//                         <div className="w-[58px] md:w-[66px] h-[92px] md:h-[102px] bg-neutral-950 border border-neutral-800 p-1.5 flex flex-col justify-between relative shadow-2xl rounded-xs">
//                           <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-800 mx-auto mb-1" />
//                           <div className="w-full h-8 rounded-sm bg-[#171717] border border-white/5 flex items-center justify-center">
//                             <Check className="w-3 h-3 text-emerald-500" strokeWidth={2.5} />
//                           </div>
//                           <div className="text-center mt-1 flex flex-col items-center">
//                             <span className="text-[5.5px] font-mono text-neutral-500 uppercase tracking-tighter block leading-none">NEGRO</span>
//                             <span className="text-[5px] font-sans font-black text-emerald-500 tracking-wider mt-0.5 uppercase leading-none">OK</span>
//                           </div>
//                         </div>
//                       </div>
// 
//                       {/* Tag 2: Azul (Permitido) */}
//                       <div className="flex flex-col items-center relative -mt-11">
//                         <div className="w-px h-5 bg-neutral-700 mb-1" />
//                         <div className="w-[58px] md:w-[66px] h-[92px] md:h-[102px] bg-neutral-950 border border-neutral-800 p-1.5 flex flex-col justify-between relative shadow-2xl rounded-xs">
//                           <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-800 mx-auto mb-1" />
//                           <div className="w-full h-8 rounded-sm bg-[#0b1329] border border-white/5 flex items-center justify-center">
//                             <Check className="w-3 h-3 text-emerald-500" strokeWidth={2.5} />
//                           </div>
//                           <div className="text-center mt-1 flex flex-col items-center">
//                             <span className="text-[5.5px] font-mono text-neutral-500 uppercase tracking-tighter block leading-none">AZUL</span>
//                             <span className="text-[5px] font-sans font-black text-emerald-500 tracking-wider mt-0.5 uppercase leading-none">OK</span>
//                           </div>
//                         </div>
//                       </div>
// 
//                       {/* Tag 3: Gris (Permitido) */}
//                       <div className="flex flex-col items-center relative -mt-11">
//                         <div className="w-px h-5 bg-neutral-700 mb-1" />
//                         <div className="w-[58px] md:w-[66px] h-[92px] md:h-[102px] bg-neutral-950 border border-neutral-800 p-1.5 flex flex-col justify-between relative shadow-2xl rounded-xs">
//                           <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-800 mx-auto mb-1" />
//                           <div className="w-full h-8 rounded-sm bg-[#374151] border border-white/5 flex items-center justify-center">
//                             <Check className="w-3 h-3 text-emerald-500" strokeWidth={2.5} />
//                           </div>
//                           <div className="text-center mt-1 flex flex-col items-center">
//                             <span className="text-[5.5px] font-mono text-neutral-500 uppercase tracking-tighter block leading-none">GRIS</span>
//                             <span className="text-[5px] font-sans font-black text-emerald-500 tracking-wider mt-0.5 uppercase leading-none">OK</span>
//                           </div>
//                         </div>
//                       </div>
// 
//                       {/* Tag 4: Fucsia (Reservado) */}
//                       <div className="flex flex-col items-center relative -mt-11 border-l border-dashed border-white/10 pl-2">
//                         <div className="w-px h-5 bg-neutral-700 mb-1" />
//                         <div className="w-[58px] md:w-[66px] h-[92px] md:h-[102px] bg-neutral-950 border border-[#ff007f]/30 p-1.5 flex flex-col justify-between relative shadow-2xl rounded-xs">
//                           <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-[#ff007f]/20 mx-auto mb-1" />
//                           <div className="w-full h-8 rounded-sm bg-[#ff007f] relative overflow-hidden shadow-[0_0_8px_rgba(255,0,127,0.4)]">
//                             <div className="absolute inset-0 flex items-center justify-center">
//                               <X className="w-3.5 h-3.5 text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]" strokeWidth={3} />
//                             </div>
//                           </div>
//                           <div className="text-center mt-1 flex flex-col items-center">
//                             <span className="text-[5.5px] font-mono text-[#ff007f] uppercase tracking-tighter block font-bold leading-none">FUCSIA</span>
//                             <span className="text-[4.8px] font-sans font-black text-neutral-400 tracking-wide mt-0.5 uppercase leading-none">RESERVE</span>
//                           </div>
//                           
//                           {/* Ink Stamp Overlay */}
//                           <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
//                             <div className="border border-red-500/50 text-red-500/70 font-sans text-[5.5px] font-black tracking-widest uppercase py-0.5 px-1 rotate-[-28deg] rounded-xs bg-black/95 scale-80 border-dashed">
//                               NO GO
//                             </div>
//                           </div>
//                         </div>
//                       </div>
// 
//                       {/* Tag 5: Plata (Reservado) */}
//                       <div className="flex flex-col items-center relative -mt-11">
//                         <div className="w-px h-5 bg-neutral-700 mb-1" />
//                         <div className="w-[58px] md:w-[66px] h-[92px] md:h-[102px] bg-neutral-950 border border-white/20 p-1.5 flex flex-col justify-between relative shadow-2xl rounded-xs">
//                           <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-800 mx-auto mb-1" />
//                           <div className="w-full h-8 rounded-sm bg-linear-to-tr from-[#888] via-[#e6e6e6] to-[#aaa] relative overflow-hidden shadow-[0_0_8px_rgba(255,255,255,0.15)]">
//                             <div className="absolute inset-0 flex items-center justify-center">
//                               <X className="w-3.5 h-3.5 text-black drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]" strokeWidth={3} />
//                             </div>
//                           </div>
//                           <div className="text-center mt-1 flex flex-col items-center">
//                             <span className="text-[5.5px] font-mono text-neutral-300 uppercase tracking-tighter block leading-none">PLATA</span>
//                             <span className="text-[4.8px] font-sans font-black text-neutral-400 tracking-wide mt-0.5 uppercase leading-none">RESERVE</span>
//                           </div>
// 
//                           {/* Ink Stamp Overlay */}
//                           <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
//                             <div className="border border-red-500/50 text-red-500/70 font-sans text-[5.5px] font-black tracking-widest uppercase py-0.5 px-1 rotate-[-28deg] rounded-xs bg-black/95 scale-80 border-dashed">
//                               NO GO
//                             </div>
//                           </div>
//                         </div>
//                       </div>
// 
//                     </div>
// 
//                   </div>
// 
//                   {/* Warning description */}
//                   <p className="font-sans text-[8.5px] text-neutral-500 tracking-[0.2em] leading-relaxed uppercase max-w-sm mx-auto flex items-center justify-center gap-1.5">
//                     <AlertCircle className="w-3.5 h-3.5 text-[#ff007f] shrink-0" strokeWidth={2.5} />
//                     <span>
//                       {siteConfig.dressCode.reservedColorsText.prefix} <span className="text-[#ff007f] font-black">{siteConfig.dressCode.reservedColorsText.color1}</span> Y <span className="text-white font-black">{siteConfig.dressCode.reservedColorsText.color2}</span> {siteConfig.dressCode.reservedColorsText.suffix}
//                     </span>
//                   </p>
// 
//                   <div className="w-full h-[0.5px] bg-linear-to-r from-transparent via-white/10 to-transparent my-6" />
// 
//                   {/* Note */}
//                   <p className="font-sans text-[8px] md:text-[8.5px] tracking-[0.15em] text-neutral-400 uppercase leading-relaxed max-w-sm mx-auto">
//                     {siteConfig.dressCode.extraNotes.prefix}{" "}
//                     <span className="text-white font-semibold">{siteConfig.dressCode.extraNotes.highlight}</span>{" "}
//                     {siteConfig.dressCode.extraNotes.suffix}
//                   </p>
//                 </div>
//               </div>
//             </section>
//           )}
// 
//           {/* === OPCIÓN 5: NYC EDITORIAL COLLAGE / STUDIO 54 === */}
//           {styleType === "collage" && (
//             <section className="relative py-16 md:py-24 px-6 bg-[#050505] flex flex-col items-center justify-center w-full overflow-hidden text-center">
//               
//               <FloatingDecoration
//                 src="/images/decorativas/estrella_glitter.png"
//                 alt="Estrella Glitter"
//                 className="top-[10%] left-[-5%] w-48 h-48 md:w-72 md:h-72 opacity-20 pointer-events-none z-0"
//                 animationStyle="float"
//               />
//               <FloatingDecoration
//                 src="/images/decorativas/estrella_glitter.png"
//                 alt="Estrella Glitter"
//                 className="bottom-[10%] right-[-5%] w-48 h-48 md:w-72 md:h-72 opacity-20 pointer-events-none z-0"
//                 animationStyle="float"
//               />
// 
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ff007f]/5 rounded-full blur-[130px] pointer-events-none z-0" />
//               
//               <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center pt-8">
//                 
//                 {/* Editorial Info Slate */}
//                 <div className="w-full bg-neutral-950/80 border border-white/10 p-8 md:p-10 rounded-2xl relative shadow-2xl backdrop-blur-md text-left overflow-hidden">
//                   
//                   {/* Floating Perfume bottle decorative asset (Left) */}
//                   <img 
//                     src="/images/decorativas/perfume.png" 
//                     alt="Perfume bottle decoration" 
//                     className="absolute -top-1 -right-1 w-16 h-16 md:w-20 md:h-20 object-contain rotate-[-15deg] drop-shadow-[0_10px_15px_rgba(0,0,0,0.6)] opacity-95 select-none pointer-events-none"
//                   />
// 
//                   {/* Floating Lip assets (Right) */}
//                   <img 
//                     src="/images/decorativas/lips.png" 
//                     alt="Fashion lips decoration" 
//                     className="absolute -bottom-4 -right-4 w-16 h-16 object-contain rotate-15 drop-shadow-[0_8px_15px_rgba(255,0,127,0.4)] opacity-95 select-none pointer-events-none"
//                   />
// 
//                   <div className="flex items-center gap-2 mb-3">
//                     <div className="w-1 h-1 bg-[#ff007f] rounded-full" />
//                     <span className="text-[7.5px] tracking-[0.3em] uppercase text-neutral-400 font-bold">
//                       {siteConfig.dressCode.topLabel}
//                     </span>
//                   </div>
// 
//                   <h3 className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase font-light mb-1">
//                     {siteConfig.dressCode.type}
//                   </h3>
//                   <span className="text-[7.5px] tracking-[0.25em] text-[#ff007f] font-bold uppercase block mb-8">
//                     NYC STYLE PROFILE
//                   </span>
// 
//                   <div className="w-full h-[0.5px] bg-neutral-900 my-6" />
// 
//                   <div className="flex flex-col gap-4">
//                     <span className="text-[7px] tracking-[0.3em] text-neutral-400 font-bold uppercase block">
//                       COLORES RESERVADOS EXCLUSIVAMENTE:
//                     </span>
//                     
//                     <div className="flex items-center gap-4">
//                       {/* Swatch 1: Fuchsia */}
//                       <div className="flex items-center gap-2">
//                         <div className="w-6 h-6 rounded-full bg-[#ff007f] border border-white/20 shadow-[0_0_8px_rgba(255,0,127,0.4)]" />
//                         <span className="text-[9px] font-mono text-[#ff007f] font-black uppercase tracking-wider">FUCSIA</span>
//                       </div>
//                       
//                       <div className="w-px h-4 bg-neutral-800" />
// 
//                       {/* Swatch 2: Plata */}
//                       <div className="flex items-center gap-2">
//                         <div className="w-6 h-6 rounded-full bg-linear-to-tr from-[#888] via-[#e6e6e6] to-[#aaa] border border-white/20 shadow-[0_0_8px_rgba(255,255,255,0.15)]" />
//                         <span className="text-[9px] font-mono text-neutral-300 font-black uppercase tracking-wider">PLATEADO</span>
//                       </div>
//                     </div>
// 
//                     <p className="font-sans text-[8.5px] text-neutral-500 tracking-[0.15em] leading-relaxed uppercase mt-1 flex items-start gap-1.5">
//                       <AlertCircle className="w-3.5 h-3.5 text-[#ff007f] shrink-0 mt-0.5" strokeWidth={2.5} />
//                       <span>
//                         {siteConfig.dressCode.reservedColorsText.prefix} {siteConfig.dressCode.reservedColorsText.color1} Y {siteConfig.dressCode.reservedColorsText.color2} {siteConfig.dressCode.reservedColorsText.suffix}
//                       </span>
//                     </p>
//                   </div>
// 
//                   <div className="w-full h-[0.5px] bg-neutral-900 my-6" />
// 
//                   <p className="font-sans text-[8.5px] tracking-[0.15em] text-neutral-400 uppercase leading-relaxed italic">
//                     "{siteConfig.dressCode.extraNotes.prefix} {siteConfig.dressCode.extraNotes.highlight} {siteConfig.dressCode.extraNotes.suffix}"
//                   </p>
// 
//                 </div>
// 
//               </div>
//             </section>
//           )}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// }
// 