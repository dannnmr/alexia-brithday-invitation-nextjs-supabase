"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, RotateCw } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { submitToGoogleSheets } from "@/lib/googleSheets";

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
      
      // Sincronizar con Google Sheets
      try {
        await submitToGoogleSheets("song", {
          cancion: song.trim(),
        });
      } catch (gsError) {
        console.error("Error syncing song to Google Sheets:", gsError);
      }

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
    <section className="relative pt-6 pb-12 md:pb-16 px-6 bg-[#050505] flex flex-col items-center overflow-hidden w-full">
      
      {/* Glow de fondo */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#ff007f]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#ff007f]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center">
        
        {/* === TOCADISCOS / VINILO GIRATORIO INTERACTIVO (MICRO-WIDGET) === */}
        <div className="relative w-25 h-25 md:w-40 md:h-40 mb-6 group flex items-center justify-center shrink-0">
          
          {/* Base del Tocadiscos */}
          <div className="absolute inset-[-8px] bg-[#0c0c0c] border border-white/5 rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] pointer-events-none" />
          
          {/* Vinilo */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="relative w-26 h-26 md:w-30 md:h-30 rounded-full bg-neutral-950 border-[6px] border-neutral-900 flex items-center justify-center shadow-2xl before:absolute before:inset-4 before:rounded-full before:border before:border-neutral-800/20 after:absolute after:inset-8 before:pointer-events-none after:pointer-events-none"
          >
            {/* Grooves del vinilo (brillo radial) */}
            <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(255,255,255,0.02)_60deg,transparent_120deg,rgba(255,255,255,0.03)_180deg,transparent_240deg,rgba(255,255,255,0.03)_300deg,transparent_360deg)] pointer-events-none" />

            {/* Label Central Fucsia */}
            <div className="w-11 h-11 rounded-full bg-[#ff007f] flex flex-col items-center justify-center relative shadow-md">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0c0c0c] border border-white/10 z-10" />
              <span className="absolute text-[4.5px] tracking-[0.25em] text-white font-black font-sans top-2 uppercase">PLAYLIST</span>
              <span className="absolute text-[4px] tracking-[0.15em] text-white/80 font-semibold font-sans bottom-2 uppercase">NYC NIGHT</span>
            </div>
          </motion.div>

          {/* Brazo de Tocadiscos (Tonearm) */}
          <div className="absolute -top-3 right-0.5 w-10 h-20 origin-top-left transition-transform duration-1000 -rotate-12 group-hover:-rotate-3 pointer-events-none">
            {/* Pivote */}
            <div className="absolute top-0 left-4 w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700 shadow-md flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#ff007f]/50" />
            </div>
            {/* Brazo metálico */}
            <div className="w-0.5 h-14 bg-linear-to-b from-neutral-400 to-neutral-600 rounded-full ml-[22px] mt-3 shadow-sm" />
            {/* Cabezal / Aguja */}
            <div className="absolute bottom-3 right-[11px] w-2 h-3 bg-neutral-900 border border-neutral-800 rounded-sm shadow-md flex flex-col items-center justify-center">
              <div className="w-0.5 h-0.5 bg-[#ff007f] rounded-full" />
            </div>
          </div>
        </div>

        {/* Cabecera Sección */}
        <motion.div
           initial={{ opacity: 0, y: 15 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-6 relative z-10"
        >
          <p className="font-sans text-[8px] min-[380px]:text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-[#ff007f] mb-1 font-black">
            Playlist
          </p>
          <h3 className="font-pinyon text-5xl min-[380px]:text-6xl md:text-7xl text-white mb-2">
            Música
          </h3>
          <p className="font-sans text-[9px] min-[380px]:text-[10px] md:text-xs text-gray-400 tracking-[0.15em] font-light max-w-sm mx-auto uppercase">
            ¿Qué canción no puede faltar en la pista?
          </p>
        </motion.div>

        {/* Formulario */}
        <motion.div
           initial={{ opacity: 0, scale: 0.98 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="w-full max-w-lg relative"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full relative z-20">
            {/* Input pill */}
            <div className="relative flex items-center w-full p-1.5 bg-[#0d0d0d] border border-white/8 rounded-full shadow-[0_25px_50px_rgba(0,0,0,0.6)] transition-all duration-300 focus-within:border-[#ff007f]/40 focus-within:shadow-[0_0_25px_rgba(255,0,127,0.15)]">
              
              <input
                type="text"
                value={song}
                onChange={(e) => setSong(e.target.value)}
                placeholder="Escribe el nombre o artista..."
                className="flex-1 min-w-0 bg-transparent border-none focus:outline-none focus:ring-0 px-5 md:px-7 font-sans font-medium text-xs min-[380px]:text-sm text-white placeholder-neutral-600 tracking-wide h-10 min-[380px]:h-12"
                disabled={isSubmitting || isSuccess}
              />
              
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="flex items-center justify-center shrink-0 w-10 h-10 min-[380px]:w-12 min-[380px]:h-12 md:w-auto md:px-8 bg-[#ff007f] border border-[#ff007f] text-white rounded-full shadow-[0_0_15px_rgba(255,0,127,0.4)] hover:shadow-[0_0_25px_rgba(255,0,127,0.6)] hover:bg-[#ff007f]/90 transition-all duration-300 disabled:opacity-50 group cursor-pointer"
              >
                {isSubmitting ? (
                  <RotateCw className="w-4 h-4 animate-spin text-white" />
                ) : isSuccess ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 md:w-4 md:h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span className="hidden md:block ml-2 font-sans tracking-[0.25em] uppercase text-[9px] font-bold text-white">Sugerir</span>
                  </>
                )}
              </button>
            </div>

            {/* Visualizer bars animadas (EQ) */}
            <div className="flex items-end justify-center gap-[3px] h-6 mt-2 overflow-hidden pointer-events-none select-none">
              {visualizerBars.map((_, i) => (
                <motion.div
                  key={i}
                  className="w-[3px] bg-[#ff007f]/20 rounded-full"
                  animate={{
                    height: isSubmitting 
                      ? [3, 24, 3] 
                      : isSuccess 
                      ? [8, 8, 8] 
                      : [4, Math.floor(Math.random() * 16) + 4, 4],
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
                  initial={{ opacity: 0, y: -8 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -8 }}
                  className="text-[#ff007f] text-[9px] text-center font-bold tracking-widest uppercase mt-1"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Success Message */}
            <AnimatePresence>
               {isSuccess && (
                 <motion.p 
                  initial={{ opacity: 0, y: 8 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 8 }}
                  className="text-green-500 text-[9px] text-center font-bold tracking-widest uppercase mt-1"
                 >
                   ¡Canción añadida con éxito!
                 </motion.p>
               )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
