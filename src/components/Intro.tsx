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
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number; color: string }[]>([]);

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
    // Generate explosion particles radiating outwards
    const newParticles = Array.from({ length: 32 }).map((_, i) => {
      const angle = (i * 360) / 32 + (Math.random() * 15 - 7.5);
      const distance = 100 + Math.random() * 150;
      const size = 5 + Math.random() * 7;
      const colors = ["#ff007f", "#ffffff", "#00ffff", "#ffd700", "#c0c0c0"]; // Fuchsia, White, Cyan, Gold, Silver
      const color = colors[Math.floor(Math.random() * colors.length)];
      const rad = (angle * Math.PI) / 180;
      return {
        id: i,
        x: Math.cos(rad) * distance,
        y: Math.sin(rad) * distance,
        size,
        color
      };
    });
    setParticles(newParticles);

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
                animate={{
                  scale: [1, 1.03, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  scale: { duration: 2.2, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.08, rotate: 3 }}
                whileTap={{ scale: 0.92 }}
                exit={{ scale: 1.8, opacity: 0 }}
                className="absolute z-20 w-56 h-56 md:w-56 md:h-56 lg:w-64 lg:h-64 cursor-pointer drop-shadow-2xl flex items-center justify-center"
              >
                <Image
                  src="/images/invitation/brocheOF.png"
                  alt="Abrir invitación"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.button>
            )}
          </AnimatePresence>

          {/* Explosion Particles */}
          <AnimatePresence>
            {particles.length > 0 && (
              <div className="absolute inset-0 z-30 pointer-events-none flex items-center justify-center">
                {particles.map((p) => (
                  <motion.div
                    key={p.id}
                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                    animate={{ 
                      x: p.x, 
                      y: p.y, 
                      scale: 0, 
                      opacity: 0,
                      rotate: Math.random() * 360 
                    }}
                    transition={{ duration: 1.2, ease: [0.1, 0.8, 0.3, 1] }}
                    className="absolute rounded-full"
                    style={{
                      width: p.size,
                      height: p.size,
                      backgroundColor: p.color,
                      boxShadow: `0 0 10px ${p.color}`,
                    }}
                  />
                ))}
              </div>
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
