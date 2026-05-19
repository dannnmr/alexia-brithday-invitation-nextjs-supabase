"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, RotateCw, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { AnimatedSection } from "./ui/AnimatedSection";
import { FloatingDecoration } from "./ui/FloatingDecoration";
import { PrimaryButton } from "./ui/PrimaryButton";

type Wish = {
  id: string;
  autor: string;
  mensaje: string;
  creado_en: string;
};

export function Wishes() {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    if (wishes.length > 0) {
      if (scrollLeft === 0) {
        setActiveIndex(0);
      } else if (Math.ceil(scrollLeft + clientWidth) >= scrollWidth) {
        setActiveIndex(wishes.length - 1);
      } else {
        const progress = scrollLeft / (scrollWidth - clientWidth);
        const index = Math.round(progress * (wishes.length - 1));
        setActiveIndex(index);
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === 'left' ? -350 : 350;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const fetchWishes = async () => {
    try {
      const { data, error } = await supabase
        .from('deseos')
        .select('*')
        .order('creado_en', { ascending: false })
        .limit(30);
      
      if (!error && data) {
        setWishes(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWishes();

    const channel = supabase
      .channel('schema-db-changes')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'deseos' },
        (payload) => {
          setWishes(prev => {
            const exists = prev.some(w => w.id === payload.new.id);
            if (exists) return prev;
            return [payload.new as Wish, ...prev];
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    try {
      const { error: sbError } = await supabase
        .from('deseos')
        .insert([{ autor: name.trim(), mensaje: message.trim() }]);

      if (sbError) throw sbError;
      
      setName("");
      setMessage("");
    } catch (err) {
      console.error(err);
      alert("Hubo un error al enviar tu mensaje.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Variaciones para el Masonry Scrapbook
  const cardStyles = [
    { bg: "bg-[#0a0a0a]", rotate: "rotate-[-2deg]", tape: "bg-zinc-800/50" },
    { bg: "bg-[#fffaf9]", rotate: "rotate-[1deg]", tape: "bg-zinc-800/50" },
    { bg: "bg-[#0a0a0a]", rotate: "rotate-[3deg]", tape: "bg-yellow-100/50" },
    { bg: "bg-[#0a0a0a]", rotate: "rotate-[-1deg]", tape: "bg-rose-100/50" },
  ];

  return (
    <section className="relative py-10 md:py-12 px-6 bg-[#f0eadd] flex flex-col items-center overflow-hidden">
      
      {/* Background Texture/Elements */}
      <FloatingDecoration 
        src="/images/decorativas/flor2.png" 
        alt="Flores" 
        className="top-0 right-[-10%] w-[400px] h-[400px] opacity-20" 
        animationStyle="fade" 
      />
      <FloatingDecoration 
        src="/images/decorativas/flor.png" 
        alt="Flores" 
        className="bottom-[-5%] left-[-5%] w-[300px] h-[300px] opacity-20" 
        animationStyle="slideLeft" 
      />

      <div className="max-w-7xl w-full z-10 flex flex-col items-center">
        
        {/* HEADER & FORM ROW */}
        <div className="flex flex-col lg:flex-row gap-8 mb-10 w-full max-w-6xl items-center lg:items-start justify-between">
          
          <AnimatedSection 
            once 
            className="text-center lg:text-left lg:w-1/2 flex flex-col justify-center h-full pt-2 md:pt-6"
          >
            <SectionHeader
              subtitle="Un Recuerdo Eterno"
              title="Guestbook"
              className="mb-3 w-full lg:text-left text-center"
              titleClassName="text-6xl md:text-6xl lg:text-7xl leading-none"
              subtitleClassName="font-semibold"
            />
            <p className="font-sans text-xs md:text-sm text-[#a1a1aa]/80 tracking-widest uppercase leading-relaxed max-w-sm mx-auto lg:mx-0 px-4 lg:px-0">
              Déjame un mensaje, un consejo o un deseo para guardar este día en mi memoria para siempre.
            </p>
            
            <div className="hidden lg:block mt-6 w-24 h-24 relative opacity-60 mix-blend-multiply">
               <Image src="/images/decorativas/skyscrapper.png" alt="Estrella" fill className="object-contain" />
            </div>
          </AnimatedSection>

          {/* EDITORIAL FORM - NOT GLASSMORPHISM */}
          <AnimatedSection
            once
            delay={0.2}
            className="w-full lg:w-1/2 bg-[#faf6f0] p-6 md:p-10 rounded-tl-[3rem] rounded-br-[3rem] shadow-[15px_15px_0px_rgba(214,25,88,0.1)] border border-white relative"
          >
            {/* Cinta Adhesiva Decorativa para el bloc de notas */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#0a0a0a]/40 block rotate-[-3deg] shadow-sm backdrop-blur-md border border-white/50"></div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-2">
              <div className="relative group">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Tu Nombre..."
                  className="w-full bg-transparent border-b-2 border-[#ff007f]/20 pb-1.5 focus:outline-none focus:border-[#ff007f] transition-colors font-sans text-sm md:text-base text-[#e4e4e7] placeholder-[#a1a1aa]/30 uppercase tracking-widest"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div className="relative group w-full">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={`Querida ${siteConfig.client.name}...`}
                  rows={3}
                  className="w-full bg-transparent border-b-2 border-[#ff007f]/20 pb-1.5 focus:outline-none focus:border-[#ff007f] transition-colors font-script text-3xl text-[#ffffff] focus:text-[#e4e4e7] placeholder-[#a1a1aa]/30 resize-none leading-relaxed"
                  required
                  disabled={isSubmitting}
                />
                {/* Lined paper effect on textarea */}
                <div className="absolute top-0 left-0 w-full h-[85%] pointer-events-none" style={{ backgroundImage: 'linear-gradient(transparent 95%, rgba(214,25,88,0.1) 100%)', backgroundSize: '100% 2.8rem' }}></div>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#ff007f] text-white rounded-none font-sans tracking-[0.3em] font-medium text-[10px] md:text-xs uppercase hover:bg-[#a1a1aa] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[3px_3px_0px_#a1a1aa] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0px_#a1a1aa]"
              >
                {isSubmitting ? <RotateCw className="w-4 h-4 animate-spin" /> : "Sellar Carta"}
                {!isSubmitting && <Heart className="w-3 h-3 md:w-4 md:h-4 fill-white shrink-0" />}
              </button>
            </form>
          </AnimatedSection>

        </div>

        {/* MASONRY WISHES GRID -> HORIZONTAL GALLERY */}
        <div className="w-full mx-auto overflow-hidden relative">
           {isLoading ? (
             <div className="py-12 flex justify-center text-[#ffffff]">
               <RotateCw className="w-8 h-8 md:w-10 md:h-10 animate-spin" />
             </div>
           ) : wishes.length === 0 ? (
             <div className="py-12 text-center text-[#a1a1aa]/50 font-sans tracking-widest uppercase text-xs md:text-sm">
               El libro está en blanco. ¡Sé el primero en firmar!
             </div>
           ) : (
             <div className="relative w-full">
               
               {/* SCROLL ARROWS */}
               {wishes.length > 1 && (
                 <>
                   <button 
                     onClick={() => scroll('left')}
                     className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 bg-[#ff007f] p-2 md:p-3 rounded-full shadow-[0_5px_15px_rgba(214,25,88,0.3)] border border-white/40 text-white transition-all transform hover:scale-110 hover:bg-[#a1a1aa] ${activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                   >
                     <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                   </button>
                   <button 
                     onClick={() => scroll('right')}
                     className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 bg-[#ff007f] p-2 md:p-3 rounded-full shadow-[0_5px_15px_rgba(214,25,88,0.3)] border border-white/40 text-white transition-all transform hover:scale-110 hover:bg-[#a1a1aa] ${activeIndex === wishes.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                   >
                     <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                   </button>
                 </>
               )}

               <div 
                 ref={scrollRef}
                 onScroll={handleScroll}
                 className="flex w-full overflow-x-auto snap-x snap-mandatory gap-4 pb-4 pt-4 px-4 sm:px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
               >
                 <AnimatePresence>
                   {wishes.map((wish, idx) => {
                     // Randomize style based on index
                     const style = cardStyles[idx % cardStyles.length];
                     
                     return (
                       <motion.div
                         key={wish.id}
                         initial={{ opacity: 0, scale: 0.9, y: 20 }}
                         animate={{ opacity: 1, scale: 1, y: 0 }}
                         exit={{ opacity: 0, scale: 0.9 }}
                         transition={{ duration: 0.5, delay: Math.min(idx, 10) * 0.1 }}
                         className={`shrink-0 w-[80vw] sm:w-[280px] md:w-[320px] snap-center ${style.bg} p-6 md:p-8 shadow-[0_10px_20px_rgba(0,0,0,0.04)] flex flex-col relative transform transition-all duration-300 hover:scale-[1.02] hover:z-20 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] ${style.rotate}`}
                       >
                          {/* Tape effect */}
                          <div className={`absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-5 ${style.tape} block rotate-[2deg] shadow-sm backdrop-blur-sm`}></div>
                          
                          <Quote className="w-5 h-5 md:w-6 md:h-6 text-[#ffffff]/20 absolute top-4 left-4 md:top-5 md:left-5" />
                          
                          <p className="font-script text-2xl md:text-3xl leading-relaxed text-[#ffffff] mb-6 mt-4 relative z-10 w-full overflow-hidden text-ellipsis break-words">
                            {wish.mensaje}
                          </p>
                          
                          <div className="mt-auto flex items-center justify-between border-t border-[#ffffff]/10 pt-3 relative z-10 w-full">
                             <span className="font-sans text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#a1a1aa] max-w-[80%] truncate">
                               {wish.autor}
                             </span>
                             <Heart className="w-3 h-3 text-[#ff007f]/30 fill-[#ff007f]/30 shrink-0" />
                          </div>
                       </motion.div>
                     );
                   })}
                 </AnimatePresence>
               </div>

               {/* BOTTOM DOTS PAGINATION */}
               {wishes.length > 1 && (
                 <div className="flex justify-center flex-wrap gap-2 mt-4 px-4 w-full max-w-[90vw] mx-auto">
                   {wishes.map((_, i) => (
                     <button 
                       key={i} 
                       onClick={() => {
                         if(scrollRef.current) {
                           const { scrollWidth, clientWidth } = scrollRef.current;
                           const targetLeft = (i / (wishes.length - 1)) * (scrollWidth - clientWidth);
                           scrollRef.current.scrollTo({ left: targetLeft, behavior: 'smooth' });
                         }
                       }}
                       aria-label={`Ir al deseo ${i + 1}`}
                       className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'bg-[#ff007f] w-6 md:w-8' : 'bg-[#ff007f]/20 w-1.5 md:w-2 hover:bg-[#ff007f]/40'}`}
                     />
                   ))}
                 </div>
               )}
             </div>
           )}
        </div>
      </div>
    </section>
  );
}
