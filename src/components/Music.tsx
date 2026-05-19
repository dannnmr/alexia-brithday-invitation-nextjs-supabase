"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, RotateCw } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { submitToGoogleSheets } from "@/lib/googleSheets";
import { FloatingDecoration } from "./ui/FloatingDecoration";

export function Music() {
  const [song, setSong] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!song.trim()) {
      setError("Por favor, escribe una canción.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const { error: sbError } = await supabase
        .from('canciones')
        .insert([{ cancion: song.trim() }]);

      if (sbError) throw sbError;
      
      // Sincronizar con Google Sheets en segundo plano (no bloquea al usuario)
      submitToGoogleSheets("song", { cancion: song.trim() })
        .catch(gsError => console.error("Error syncing song to Google Sheets:", gsError));

      setIsSuccess(true);
      setSong("");
      setTimeout(() => setIsSuccess(false), 4000);
    } catch (err: any) {
      console.error("Supabase error:", err);
      setError("Error al enviar la sugerencia. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const visualizerBars = Array.from({ length: 24 });

  return (
    <section className="relative pt-8 pb-5 md:pb-16 px-6 bg-[#050505] flex flex-col items-center overflow-hidden w-full">
      
      {/* Glow de fondo */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#ff007f]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#ff007f]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Decoración de Leopardo */}
      <FloatingDecoration 
        src="/images/decorativas/leopardo.png" 
        alt="Leopardo" 
        className="bottom-[-5%] left-[-10%] w-72 h-72 md:w-[450px] md:h-[450px] opacity-45 pointer-events-none z-0" 
        animationStyle="slideLeft" 
      />


      <div className="relative z-10 max-w-4xl w-full flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
        
        {/* === TOCADISCOS / VINILO GIRATORIO INTERACTIVO (MICRO-WIDGET) === */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 group flex items-center justify-center shrink-0">
          
          {/* Base del Tocadiscos (Estilo Scrapbook en Blanco) */}
          <div className="absolute inset-[-8px] bg-[#fdfbf7] border-[3px] border-[#0c0c0c] rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] pointer-events-none rotate-[-2.5deg]">
             {/* Tornillos vintage en las esquinas */}
             <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-neutral-300 border border-neutral-500" />
             <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-neutral-300 border border-neutral-500" />
             <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-neutral-300 border border-neutral-500" />
             <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-neutral-300 border border-neutral-500" />
          </div>

          {/* Cinta Scotch Decorativa (Detalle Scrapbook) */}
          <div className="absolute -top-4 -left-2.5 w-9 h-3.5 bg-white/40 backdrop-blur-xs border-x border-dashed border-black/10 rotate-[-15deg] shadow-xs z-20 pointer-events-none" />
          
          {/* Vinilo */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ willChange: "transform" }}
            className="relative w-22 h-22 md:w-26 md:h-26 rounded-full bg-neutral-950 border-[5px] border-neutral-900 flex items-center justify-center shadow-2xl before:absolute before:inset-3 before:rounded-full before:border before:border-neutral-800/20 after:absolute after:inset-6 before:pointer-events-none after:pointer-events-none z-10"
          >
            {/* Grooves del vinilo (brillo radial) */}
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.02)_60deg,transparent_120deg,rgba(255,255,255,0.03)_180deg,transparent_240deg,rgba(255,255,255,0.03)_300deg,transparent_360deg)] pointer-events-none" />

            {/* Label Central Fucsia */}
            <div className="w-8 h-8 rounded-full bg-[#ff007f] flex flex-col items-center justify-center relative shadow-md">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0c0c0c] border border-white/10 z-10" />
              <span className="absolute text-[3.5px] tracking-[0.25em] text-white font-black font-sans top-1.5 uppercase">PLAYLIST</span>
              <span className="absolute text-[3px] tracking-[0.15em] text-white/80 font-semibold font-sans bottom-1.5 uppercase">NYC NIGHT</span>
            </div>
          </motion.div>

          {/* Brazo de Tocadiscos (Tonearm) */}
          <div className="absolute -top-2 right-0 w-8 h-16 origin-top-left transition-transform duration-1000 -rotate-12 group-hover:-rotate-3 pointer-events-none z-20">
            {/* Pivote */}
            <div className="absolute top-0 left-3 w-4 h-4 rounded-full bg-neutral-800 border border-neutral-700 shadow-md flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff007f]/50" />
            </div>
            {/* Brazo metálico */}
            <div className="w-0.5 h-11 bg-linear-to-b from-neutral-400 to-neutral-600 rounded-full ml-[17px] mt-2 shadow-sm" />
            {/* Cabezal / Aguja */}
            <div className="absolute bottom-2.5 right-[8px] w-1.5 h-2 bg-neutral-900 border border-neutral-800 rounded-sm shadow-md flex flex-col items-center justify-center">
              <div className="w-0.5 h-0.5 bg-[#ff007f] rounded-full" />
            </div>
          </div>
        </div>

        {/* Columna Derecha: Cabecera + Formulario */}
        <div className="flex-1 max-w-md w-full flex flex-col items-center md:items-start">
          
          {/* Cabecera Sección */}
          <motion.div
             initial={{ opacity: 0, y: 15 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center md:text-left mb-4 relative z-10 w-full"
          >
            <p className="font-sans text-[8px] min-[380px]:text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-[#ff007f] mb-1 font-black">
              Playlist
            </p>
            <h3 className="font-pinyon text-4xl min-[380px]:text-5xl md:text-6xl text-white mb-1.5 leading-none">
              Música
            </h3>
            <p className="font-sans text-[8px] min-[380px]:text-[9px] md:text-[10px] text-gray-400 tracking-[0.15em] font-light uppercase">
              ¿Qué canción no puede faltar en la pista?
            </p>
          </motion.div>

          {/* Formulario */}
          <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="w-full relative"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full relative z-20">
              {/* Input pill */}
              <div className="relative flex items-center w-full p-1 bg-[#0d0d0d] border border-white/8 rounded-full shadow-[0_15px_30px_rgba(0,0,0,0.5)] transition-all duration-300 focus-within:border-[#ff007f]/40 focus-within:shadow-[0_0_20px_rgba(255,0,127,0.15)]">
                
                <input
                  id="song"
                  name="song"
                  type="text"
                  value={song}
                  onChange={(e) => setSong(e.target.value)}
                  placeholder="Escribe el nombre o artista..."
                  className="flex-1 min-w-0 bg-transparent border-none focus:outline-none focus:ring-0 px-4 md:px-5 font-sans font-medium text-[10px] min-[380px]:text-xs text-white placeholder-neutral-600 tracking-wide h-8 min-[380px]:h-10"
                  disabled={isSubmitting || isSuccess}
                  autoComplete="off"
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="flex items-center justify-center shrink-0 w-8 h-8 min-[380px]:w-10 min-[380px]:h-10 md:w-auto md:px-6 bg-[#ff007f] border border-[#ff007f] text-white rounded-full shadow-[0_0_12px_rgba(255,0,127,0.3)] hover:shadow-[0_0_20px_rgba(255,0,127,0.5)] hover:bg-[#ff007f]/90 transition-all duration-300 disabled:opacity-50 group cursor-pointer"
                >
                  {isSubmitting ? (
                    <RotateCw className="w-3.5 h-3.5 animate-spin text-white" />
                  ) : isSuccess ? (
                    <CheckCircle2 className="w-4.5 h-4.5 text-white" />
                  ) : (
                    <>
                      <Send className="w-3 h-3 md:w-3.5 md:h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span className="hidden md:block ml-2 font-sans tracking-[0.25em] uppercase text-[8px] font-bold text-white">Sugerir</span>
                    </>
                  )}
                </button>
              </div>

              {/* Visualizer bars animadas (EQ) */}
              <div className="flex items-end justify-center md:justify-start gap-[2px] h-4 mt-1 overflow-hidden pointer-events-none select-none px-2">
                {visualizerBars.map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-[2.5px] h-4 bg-[#ff007f]/20 rounded-full origin-bottom"
                    style={{ willChange: "transform" }}
                    animate={{
                      scaleY: isSubmitting 
                        ? [0.125, 1, 0.125] 
                        : isSuccess 
                        ? [0.375, 0.375, 0.375] 
                        : [0.1875, (Math.floor(Math.random() * 11) + 3) / 16, 0.1875],
                      backgroundColor: isSuccess ? "#22c55e" : "#ff007f"
                    }}
                    transition={{
                      duration: isSubmitting ? 0.3 : 0.6 + (i % 5) * 0.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Error Message */}
              <AnimatePresence>
                {error && (
                  <motion.p 
                    initial={{ opacity: 0, y: -6 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -6 }}
                    className="text-[#ff007f] text-[8px] text-center md:text-left font-bold tracking-widest uppercase mt-0.5"
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Success Message */}
              <AnimatePresence>
                 {isSuccess && (
                   <motion.p 
                    initial={{ opacity: 0, y: 6 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: 6 }}
                    className="text-green-500 text-[8px] text-center md:text-left font-bold tracking-widest uppercase mt-0.5"
                   >
                     ¡Canción añadida con éxito!
                   </motion.p>
                 )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
