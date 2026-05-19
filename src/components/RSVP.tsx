"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { RotateCw, Check } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";
import { FloatingDecoration } from "./ui/FloatingDecoration";
import { GlassCard } from "./ui/GlassCard";
import { PrimaryButton } from "./ui/PrimaryButton";
import { submitToGoogleSheets } from "@/lib/googleSheets";

export function RSVP() {
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Por favor, ingresa tu nombre.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const { error: sbError } = await supabase
        .from('invitados')
        .insert([{ nombre: name.trim() }]);

      if (sbError) throw sbError;
      
      // Sincronizar con Google Sheets (no bloquea al usuario si falla)
      try {
        await submitToGoogleSheets("guest", {
          nombre: name.trim(),
        });
      } catch (gsError) {
        console.error("Error syncing with Google Sheets:", gsError);
      }

      setIsSuccess(true);
    } catch (err: any) {
      console.error(err);
      setError("Hubo un error al guardar tu confirmación. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-8 px-6 bg-[#0a0a0a] flex flex-col items-center overflow-hidden">
      
      {/* Fondo Superior / Arco VIP */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vw] md:w-[800px] h-[250px] md:h-[300px] bg-gradient-to-b from-[#ff007f]/10 to-transparent rounded-b-[50%] z-0 " />
      
      {/* Decoración VIP */}
      <FloatingDecoration 
        src="/images/decorativas/coctail2.png" 
        alt="Coctail" 
        className="top-[10%] left-[-15%] w-80 h-80 md:w-[500px] md:h-[500px] opacity-15" 
        animationStyle="slideLeft" 
      />

      <FloatingDecoration 
        src="/images/decorativas/coctail.png" 
        alt="Coctail" 
        className="bottom-[-5%] right-[-10%] w-64 h-64 md:w-[400px] md:h-[400px] opacity-30 mix-blend-screen drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]" 
        animationStyle="slideRight" 
      />

      <AnimatedSection once className="relative z-10 max-w-2xl w-full">
        <GlassCard className="p-6 min-[380px]:p-8 md:p-12">
        {isSuccess ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center justify-center py-8 text-center"
          >
            {/* Animación de Éxito Custom (VIP Night) */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#111111] border border-[#ff007f]/30 shadow-[0_0_30px_rgba(255,0,127,0.4)] flex items-center justify-center mb-6 relative"
            >
               <motion.div
                 initial={{ opacity: 0, scale: 0 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.6, duration: 0.4 }}
                 className="absolute inset-0 border-2 border-dashed border-[#ff007f]/50 rounded-full animate-spin-slow"
               />
               <Check className="w-12 h-12 text-[#ff007f]" strokeWidth={2} />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] text-[#c0c0c0] mb-2 font-medium"
            >
              ¡Te esperamos!
            </motion.p>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="font-script text-5xl min-[350px]:text-6xl min-[380px]:text-7xl md:text-8xl text-white mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              Confirmado
            </motion.h4>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="font-sans text-xs md:text-sm text-gray-400 tracking-widest font-light"
            >
              Tus respuestas han sido guardadas.
            </motion.p>
          </motion.div>
        ) : (
          <>
            <SectionHeader
              subtitle="Lista de Invitados"
              title="RSVP"
              className="mb-6 min-[380px]:mb-10 w-full overflow-hidden px-1"
              titleClassName=" text-4xl min-[350px]:text-5xl min-[380px]:text-6xl md:text-7xl break-words leading-none mb-2 min-[380px]:mb-4 w-full text-white"
              subtitleClassName="text-[#ff007f] font-bold text-[10px] min-[380px]:text-[12px] tracking-[0.4em] min-[380px]:tracking-[0.5em] mb-1 min-[380px]:mb-2"
            />
            <div className="text-center mb-6 w-full -mt-4">
              <p className="font-sans text-[9px] min-[380px]:text-[10px] md:text-xs text-gray-400 tracking-[0.1em] min-[380px]:tracking-[0.15em] font-light max-w-sm mx-auto uppercase leading-relaxed px-2 min-[380px]:px-4">
                Por favor, confírmanos tu presencia antes del {siteConfig.event.rsvpDeadline}.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              
              {/* Campo Nombre (Editorial VIP) */}
              <div className="relative border-b border-white/20 focus-within:border-[#ff007f] transition-colors pb-1 mb-2">
                <label htmlFor="name" className="block font-sans text-[9px] md:text-[10px] text-[#ff007f] mb-1 uppercase tracking-[0.3em] font-bold">
                  Nombre Completo
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. John Travolta"
                  className="w-full bg-transparent border-none focus:outline-none focus:ring-0 font-sans text-sm min-[380px]:text-base md:text-xl text-white placeholder-gray-600 tracking-wider"
                  disabled={isSubmitting}
                />
              </div>

              {error && (
                <p className="text-[#ff007f] text-[10px] text-center font-bold bg-[#ff007f]/10 border border-[#ff007f]/20 p-3 rounded-xl tracking-widest uppercase mt-2">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-3 min-[380px]:mt-4 w-full flex items-center justify-center gap-2 min-[380px]:gap-3 px-4 min-[380px]:px-8 py-4 min-[380px]:py-5 bg-[#ff007f] border border-[#ff007f] text-white rounded-full font-sans tracking-[0.2em] min-[380px]:tracking-[0.3em] uppercase text-[9px] min-[380px]:text-[10px] md:text-xs font-bold shadow-[0_0_15px_rgba(255,0,127,0.4)] hover:shadow-[0_0_25px_rgba(255,0,127,0.6)] hover:bg-[#ff007f]/90 transition-all duration-300 disabled:opacity-50 group"
              >
                {isSubmitting ? (
                  <>
                    <RotateCw className="w-4 h-4 animate-spin relative z-10 text-white" />
                    <span className="relative z-10 text-white">Enviando...</span>
                  </>
                ) : (
                  <span className="relative z-10 text-white">Confirmar Asistencia</span>
                )}
              </button>
            </form>
          </>
        )}
        </GlassCard>
      </AnimatedSection>
    </section>
  );
}
