"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Volume2, VolumeX } from "lucide-react";
import { siteConfig } from "../config/invitation";

export function Intro() {
  const [isOpening, setIsOpening] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Prevent scrolling while intro is open
    if (!isClosed) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isClosed]);

  // Handle page visibility change (Pause on lock/background)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && audioRef.current && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  // Setup Media Session API (Lock screen controls)
  useEffect(() => {
    if ("mediaSession" in navigator && audioRef.current) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: "Canción de la Invitación",
        artist: siteConfig.client.name,
        album: siteConfig.client.eventType,
        artwork: [
          { src: "/images/decorativas/flor.png", sizes: "512x512", type: "image/png" }
        ]
      });

      navigator.mediaSession.setActionHandler("play", () => {
        if (audioRef.current) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
        }
      });

      navigator.mediaSession.setActionHandler("pause", () => {
        if (audioRef.current) {
          audioRef.current.pause();
          setIsPlaying(false);
        }
      });
    }
  }, []);

  useEffect(() => {
    if (isOpening) {
      const timer = setTimeout(() => {
        setIsClosed(true);
      }, 1500); // Wait for the split animation to finish
      return () => clearTimeout(timer);
    }
  }, [isOpening]);

  const handleOpen = () => {
    setIsOpening(true);
    if (audioRef.current) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch((e) => console.log("Audio play prevented:", e));
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src="/audio/new_york.mp3" type="audio/mpeg" />
      </audio>

      {!isClosed && (
        <div className="fixed inset-0 z-100 w-screen h-screen min-h-screen flex items-center justify-center overflow-hidden pointer-events-auto">
          {/* Background Sobre Completo */}
          <AnimatePresence>
            {!isOpening && (
              <motion.div
                className="absolute inset-0 w-full h-screen min-h-screen z-20 bg-black"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                <Image
                  src="/images/invitation/sobre_completo.png"
                  alt="Sobre"
                  fill
                  className="object-cover object-center scale-[1.15] sm:scale-[1.2] md:scale-[1.1]"
                  priority
                  sizes="100vw"
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Left Envelope */}
          <motion.div
            className="absolute inset-0 w-full h-screen min-h-screen z-10"
            initial={{ x: 0 }}
            animate={{ x: isOpening ? "-100%" : 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <Image
              src="/images/invitation/sobre_izquierdo.png"
              alt="Sobre izquierdo"
              fill
              className="object-cover object-left scale-[1.15] sm:scale-[1.2] md:scale-[1.1]"
              priority
              sizes="100vw"
            />
          </motion.div>

          {/* Right Envelope */}
          <motion.div
            className="absolute inset-0 w-full h-screen min-h-screen z-10"
            initial={{ x: 0 }}
            animate={{ x: isOpening ? "100%" : 0 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
          >
            <Image
              src="/images/invitation/sobre_derecho.png"
              alt="Sobre derecho"
              fill
              className="object-cover object-right scale-[1.15] sm:scale-[1.2] md:scale-[1.1]"
              priority
              sizes="100vw"
            />
          </motion.div>

          {/* Seal / Clasp */}
          <AnimatePresence>
            {!isOpening && (
              <motion.button
                onClick={handleOpen}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                exit={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute z-20 w-56 h-56 md:w-56 md:h-56 lg:w-64 lg:h-64 cursor-pointer drop-shadow-2xl flex items-center justify-center"
              >
                <Image
                  src="/images/invitation/broche_sobre.png"
                  alt="Abrir invitación"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* Floating Music Control Button */}
      {isClosed && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleAudio}
          className="fixed bottom-6 right-6 z-99 w-12 h-12 bg-[#0a0a0a]/40 backdrop-blur-md border border-white/60 rounded-full flex items-center justify-center shadow-[0_8px_20px_rgba(214,25,88,0.15)] text-[#ff007f] transition-colors hover:bg-[#0a0a0a]/60"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? <Volume2 size={24} strokeWidth={1.5} /> : <VolumeX size={24} strokeWidth={1.5} />}
        </motion.button>
      )}
    </>
  );
}
