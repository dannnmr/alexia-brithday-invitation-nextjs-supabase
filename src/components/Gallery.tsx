"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, Image as ImageIcon, UploadCloud, RotateCw, X, Plus, Heart } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { submitToGoogleSheets } from "@/lib/googleSheets";

type Photo = {
  id: string;
  url_foto: string;
  creado_en: string;
};

export function Gallery() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [uploadError, setUploadError] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [exitDirection, setExitDirection] = useState<'left' | 'right'>('left');

  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x > 80) {
      setExitDirection('right');
      setCurrentIndex((prev) => prev + 1);
    } else if (info.offset.x < -80) {
      setExitDirection('left');
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const fetchPhotos = async () => {
    try {
      const { data, error } = await supabase
        .from('fotos')
        .select('*')
        .order('creado_en', { ascending: false });
      
      if (!error && data) {
        setPhotos(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPhotos();

    const channel = supabase
      .channel('public:photos')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'fotos' },
        (payload) => {
          setPhotos(prev => {
            const exists = prev.some(p => p.id === payload.new.id);
            if (exists) return prev;
            return [payload.new as Photo, ...prev];
          });
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setUploadError("La imagen excede el límite (Max: 5MB)");
      return;
    }

    setIsUploading(true);
    setUploadError("");

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
      const filePath = `gallery/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('invitation_assets')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('invitation_assets')
        .getPublicUrl(filePath);

      const { error: dbError, data: insertedData } = await supabase
        .from('fotos')
        .insert([{ url_foto: publicUrl }])
        .select()
        .single();

      if (dbError) throw dbError;

      // Agregar la foto al estado local de forma inmediata (sin esperar Realtime)
      if (insertedData) {
        setPhotos(prev => {
          const exists = prev.some(p => p.id === insertedData.id);
          if (exists) return prev;
          return [insertedData as Photo, ...prev];
        });
        // Si el usuario ya pasó todas las fotos, volver al inicio para ver la nueva
        setCurrentIndex(0);
      }

      // Registrar foto en Google Sheets
      try {
        await submitToGoogleSheets("foto", { foto_url: publicUrl });
      } catch (gsError) {
        console.error("Error syncing photo to Google Sheets:", gsError);
      }
    } catch (err) {
      console.error(err);
      setUploadError("Error al procesar la imagen. Intenta nuevamente.");
    } finally {
      setIsUploading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
    disabled: isUploading
  });

  return (
    <section className="relative py-8 md:py-16 px-6 bg-[#050505] flex flex-col items-center overflow-hidden">
      
      {/* Decorative Neon Lighting (Cyberpunk/Disco VIP) */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-linear-to-tr from-[#ff007f]/10 to-transparent rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[300px] h-[300px] bg-linear-to-bl from-cyan-500/10 to-[#ff007f]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-6xl w-full relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-10 w-full flex flex-col items-center"
        >
          <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.5em] text-[#ff007f] mb-2 font-bold drop-shadow-[0_0_10px_rgba(255,0,127,0.5)]">
            Captura el Momento
          </p>
          <h3 className="font-pinyon text-5xl md:text-8xl text-white leading-none mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            Galería Live
          </h3>
          <p className="font-sans text-xs md:text-sm text-gray-400 tracking-[0.15em] font-light max-w-lg mx-auto uppercase px-4">
            Sube tus fotos favoritas de la fiesta. ¡Construyamos el álbum de recuerdos juntos!
          </p>

          {/* UPLOAD ZONE - Neon Glassmorphism VIP */}
          <div 
            {...getRootProps()} 
            className={`mt-8 max-w-md mx-auto p-8 border-2 border-dashed rounded-[2.5rem] cursor-pointer transition-all duration-300 ${
              isDragActive ? "border-[#ff007f] bg-[#ff007f]/10 shadow-[0_0_30px_rgba(255,0,127,0.3)]" : "border-white/20 bg-[#111111]/80 hover:bg-[#1a1a1a] hover:border-[#ff007f]/50 hover:shadow-[0_0_20px_rgba(255,0,127,0.2)]"
            } ${isUploading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <input {...getInputProps()} />
            <div className="flex flex-col items-center gap-4">
              {isUploading ? (
                <>
                  <RotateCw className="w-10 h-10 text-[#ff007f] animate-spin" />
                  <p className="font-sans text-white font-medium tracking-wide text-sm drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">Subiendo foto...</p>
                </>
              ) : (
                <>
                  <UploadCloud className="w-10 h-10 text-[#ff007f] drop-shadow-[0_0_10px_rgba(255,0,127,0.5)]" />
                  <div>
                    <p className="font-sans text-white/80 font-medium text-base mb-1">Toca aquí o arrastra una foto</p>
                    <p className="font-sans text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest">JPG, PNG, WEBP (Max 5MB)</p>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <AnimatePresence>
            {uploadError && (
               <motion.p 
                 initial={{ opacity: 0, y: -10 }} 
                 animate={{ opacity: 1, y: 0 }} 
                 exit={{ opacity: 0, y: -10 }}
                 className="text-[#ffffff] text-xs font-semibold tracking-widest uppercase mt-6"
               >
                 {uploadError}
               </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* STACKED CARD SWIPER - TINDER STYLE */}
        <div className="w-full relative z-10 flex flex-col items-center">
          {isLoading ? (
            <div className="w-full py-20 flex justify-center text-white">
              <RotateCw className="w-10 h-10 animate-spin mx-auto block" />
            </div>
          ) : photos.length === 0 ? (
            <div className="w-full py-20 text-center text-gray-500 font-sans tracking-widest uppercase text-xs md:text-sm">
              El mural interactivo está vacío. ¡Haz los honores!
            </div>
          ) : currentIndex >= photos.length ? (
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="text-center py-10"
            >
              <p className="text-gray-400 font-sans text-[10px] md:text-xs tracking-widest uppercase mb-4 font-medium">¡Has visto todas las fotos!</p>
              <button 
                onClick={() => setCurrentIndex(0)} 
                className="px-5 py-2.5 bg-[#111111] backdrop-blur-md border border-white/20 text-white rounded-full font-sans uppercase text-[9px] md:text-[10px] tracking-widest hover:bg-[#222222] shadow-[0_5px_15px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center gap-2 mx-auto hover:scale-105"
              >
                <RotateCw className="w-3 h-3 md:w-4 md:h-4" /> Volver a ver galería
              </button>
            </motion.div>
          ) : (
            <>
              <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[360px] h-[340px] sm:h-[400px] md:h-[480px] mt-2">
                <AnimatePresence>
                  {photos.slice(currentIndex, currentIndex + 3).reverse().map((photo, reversedIndex, arr) => {
                    const isTop = reversedIndex === arr.length - 1;
                    const visualIndex = arr.length - 1 - reversedIndex;
                    
                    return (
                      <motion.div
                        key={photo.id}
                        layout
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={{ 
                          scale: 1 - visualIndex * 0.05, 
                          y: visualIndex * 20, 
                          rotate: visualIndex % 2 === 0 ? visualIndex * 2 : -visualIndex * 2,
                          opacity: 1 - visualIndex * 0.2
                        }}
                        exit={{ 
                          x: exitDirection === 'left' ? -300 : 300, 
                          opacity: 0, 
                          rotate: exitDirection === 'left' ? -20 : 20,
                          transition: { duration: 0.3 } 
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={`absolute top-0 left-0 w-full h-full bg-[#111111] p-4 md:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.8)] rounded-xl border border-white/10 flex flex-col ${isTop ? 'cursor-grab active:cursor-grabbing' : 'cursor-default pointer-events-none'}`}
                        style={{ zIndex: photos.length - currentIndex - visualIndex }}
                        drag={isTop ? "x" : false}
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.7}
                        onDragEnd={isTop ? handleDragEnd : undefined}
                      >
                        <div className="relative overflow-hidden w-full h-full bg-[#050505] rounded-md pointer-events-none">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={photo.url_foto} 
                            alt="Party memory" 
                            className="w-full h-full object-cover"
                            draggable="false"
                          />
                        </div>
                        <div className="mt-4 flex justify-between items-center px-2">
                           {/* Decorative heart, doesn't do anything on drag */}
                           <Heart className={`w-5 h-5 md:w-6 md:h-6 text-[#ff007f] transition-colors ${isTop ? 'fill-[#ff007f]/20' : 'fill-transparent'}`} />
                           
                           <span className="font-sans text-[10px] md:text-xs text-gray-500 tracking-[0.2em] font-medium uppercase pointer-events-none">
                             {isTop ? 'Desliza →' : ''}
                           </span>
                           
                           <ImageIcon 
                              className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${isTop ? 'text-white/50 hover:text-white cursor-pointer pointer-events-auto' : 'text-white/20'}`} 
                              onClick={(e) => { 
                                if(isTop) {
                                  e.stopPropagation();
                                  setSelectedImage(photo.url_foto); 
                                }
                              }}
                           />
                        </div>
                      </motion.div>
                    )
                  })}
                </AnimatePresence>
              </div>

              {/* ACTION BUTTONS (LIKE/PASS) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4 md:gap-8 mt-6 md:mt-10 relative z-20"
              >
                <button 
                  onClick={() => { setExitDirection('left'); setCurrentIndex(prev => prev + 1); }} 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111111] shadow-[0_5px_15px_rgba(0,0,0,0.5)] flex items-center justify-center text-gray-400 hover:bg-[#222222] hover:text-white hover:scale-110 active:scale-95 transition-all border border-white/10 hover:border-gray-500"
                  aria-label="Siguiente foto"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <button 
                  onClick={() => { setExitDirection('right'); setCurrentIndex(prev => prev + 1); }} 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#111111] shadow-[0_0_15px_rgba(255,0,127,0.2)] flex items-center justify-center text-[#ff007f] hover:bg-[#ff007f]/10 hover:shadow-[0_0_25px_rgba(255,0,127,0.6)] hover:scale-110 active:scale-95 transition-all border border-white/10 hover:border-[#ff007f]"
                  aria-label="Me gusta"
                >
                  <Heart className="w-5 h-5 md:w-6 md:h-6 fill-[#ff007f]" />
                </button>
              </motion.div>
            </>
          )}
        </div>
      </div>

      {/* Cinematic Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-[#050505]/95 backdrop-blur-xl flex justify-center items-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors bg-[#111111] shadow-lg p-4 rounded-full border border-white/20 z-50 hover:scale-110"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
            <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               transition={{ type: "spring", damping: 25, stiffness: 300 }}
               className="relative max-w-5xl w-full h-full flex items-center justify-center"
               onClick={(e) => e.stopPropagation()} /* Prevent closing when clicking the image itself */
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selectedImage} 
                alt="Fullscreen view" 
                className="max-w-full max-h-[90vh] object-contain shadow-[0_20px_50px_rgba(0,0,0,0.2)] bg-[#0a0a0a] p-2"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
