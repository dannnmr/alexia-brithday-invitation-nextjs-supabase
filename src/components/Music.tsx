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
      console.error("Supabase error code:", err?.code);
      console.error("Supabase error message:", err?.message);
      console.error("Supabase error details:", err?.details);
      console.error("Supabase error hint:", err?.hint);
      setError("Error al enviar la sugerencia. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative pt-0 pb-10 md:pb-12 px-6 bg-[#000000] flex flex-col items-center overflow-hidden">
      
      {/* Fondo Disco VIP oscuro y difuminado */}
      <div className="absolute inset-0 bg-[#050505] z-0" />
      
      {/* Luces de fiesta difuminadas de fondo */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#ff007f]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#c0c0c0]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-3xl w-full flex flex-col items-center">
        

        <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.5 }}
            className="relative w-24 h-24 md:w-32 md:h-32 mb-4 group -mt-2"
        >
         <motion.div 
           animate={{ 
             rotate: [-8, 8], 
             filter: [
               "drop-shadow(0 0 10px rgba(255, 0, 127, 0.4))", 
               "drop-shadow(0 0 25px rgba(255, 255, 255, 0.6))"
            ]
           }} 
           transition={{ 
             duration: 3, 
             repeat: Infinity, 
             repeatType: "reverse", 
             ease: "easeInOut" 
           }} 
        className="w-full h-full relative origin-top"
        >
     <Image 
       src="/images/decorativas/boladisco2.png" 
       alt="Decoración Sunset" 
       fill 
       className="object-contain" 
     />
  </motion.div>
</motion.div>
        

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-8 relative z-10"
        >
          <p className="font-sans text-[9px] min-[380px]:text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#ff007f] mb-2 font-bold">
            Playlist
          </p>
          <h3 className="font-pinyon text-5xl min-[380px]:text-6xl md:text-8xl text-white mb-4" style={{ textShadow: "0 0 20px rgba(255,255,255,0.3)" }}>
            Música
          </h3>
          <p className="font-sans text-[9px] min-[380px]:text-[10px] md:text-xs text-gray-400 leading-relaxed tracking-[0.1em] min-[380px]:tracking-[0.15em] font-light max-w-md mx-auto uppercase px-2 md:px-4">
            ¿Qué canción no puede faltar en la fiesta?
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="w-full max-w-xl relative"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full relative z-20">
            {/* Input & Button Container (Glassmorphism Pill) */}
            <div className="relative flex items-center w-full p-1.5 md:p-2 bg-[#111111]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all focus-within:shadow-[0_0_20px_rgba(255,0,127,0.15)] focus-within:border-white/20">
              
              <input
                type="text"
                value={song}
                onChange={(e) => setSong(e.target.value)}
                placeholder="Ej: New York..."
                className="flex-1 min-w-0 bg-transparent border-none focus:outline-none focus:ring-0 px-4 md:px-6 font-sans font-medium text-xs min-[380px]:text-sm md:text-base text-white placeholder-gray-500 tracking-wide md:tracking-wider h-10 min-[380px]:h-12"
                disabled={isSubmitting || isSuccess}
              />
              
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="flex items-center justify-center shrink-0 w-10 h-10 min-[380px]:w-12 min-[380px]:h-12 md:w-auto md:px-8 bg-[#ff007f] border border-[#ff007f] text-white rounded-full shadow-[0_0_15px_rgba(255,0,127,0.4)] hover:shadow-[0_0_25px_rgba(255,0,127,0.6)] hover:bg-[#ff007f]/90 transition-all duration-300 disabled:opacity-50 group"
              >
                {isSubmitting ? (
                  <RotateCw className="w-4 h-4 animate-spin text-white" />
                ) : isSuccess ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : (
                  <>
                    <Send className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    <span className="hidden md:block ml-2 font-sans tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold text-white">Enviar</span>
                  </>
                )}
              </button>
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.p 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute -bottom-8 left-0 right-0 text-[#ff007f] text-[10px] md:text-xs text-center font-bold tracking-widest uppercase"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Success Message */}
            <AnimatePresence>
               {isSuccess && (
                 <motion.p 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -bottom-8 left-0 right-0 text-[#ff007f]/80 text-[10px] md:text-xs text-center font-medium tracking-widest uppercase"
                 >
                   ¡Canción añadida a la playlist!
                 </motion.p>
               )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
