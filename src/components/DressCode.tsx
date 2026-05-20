"use client";

import React from "react";
import { SparkleField } from "./ui/SparkleField";
import { motion } from "framer-motion";
import { siteConfig } from "../config/invitation";
import { SectionHeader } from "./ui/SectionHeader";
import { FloatingDecoration } from "./ui/FloatingDecoration";

export function DressCode() {
  return (
    <div className="relative w-full bg-[#050505] overflow-hidden">
      <section className="relative py-10 md:py-14 px-6 md:px-10 bg-[#050505] flex flex-col items-center overflow-hidden w-full">
        {/* Glow Central Plateado y Rosa */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[400px] md:h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,rgba(255,0,127,0.06)_40%,transparent_70%)] rounded-full blur-3xl pointer-events-none z-0" />

        <FloatingDecoration
          src="/images/decorativas/estrella_glitter.png"
          alt="Estrella Glitter"
          className="top-[5%] left-[-5%] w-40 h-40 md:w-60 md:h-60 opacity-30 pointer-events-none z-0 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          animationStyle="float"
        />
        <FloatingDecoration
          src="/images/decorativas/estrella_glitter.png"
          alt="Estrella Glitter"
          className="bottom-[5%] right-[-5%] w-40 h-40 md:w-60 md:h-60 opacity-30 pointer-events-none z-0 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          animationStyle="float"
        />

        <SparkleField mobileCount={6} desktopCount={15} />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_85%)] pointer-events-none" />

        {/* Borde decorativo interior */}
        <div className="absolute inset-3 md:inset-6 border border-white/5 rounded-sm pointer-events-none z-0" />
        <div className="absolute inset-[15px] md:inset-[28px] border-[0.5px] border-white/5 rounded-sm pointer-events-none z-0" />

        <div className="relative z-10 max-w-4xl text-center w-full flex flex-col items-center pt-4">
          <SectionHeader
            title={siteConfig.dressCode.mainTitle}
            subtitle={siteConfig.dressCode.topLabel}
            titleClassName="font-pinyon text-5xl md:text-6xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            subtitleClassName="text-[#ff007f] tracking-[0.5em] font-sans font-bold text-[9px] md:text-xs mb-2 drop-shadow-[0_0_10px_rgba(255,0,127,0.5)]"
            className="mb-0"
          />

          <div className="flex flex-col items-center w-full mt-5">
            {/* Sello Central VIP con iluminación mejorada */}
            <div className="mb-6 md:mb-8 relative flex items-center justify-center w-[160px] h-[160px] md:w-[220px] md:h-[220px]">
              {/* Aro de luz de neón rosa exterior */}
              <div className="absolute w-[150px] h-[150px] md:w-[208px] md:h-[208px] rounded-full border border-[#ff007f]/30 blur-[4px] pointer-events-none" />

              {/* Aro de luz plateada exterior */}
              <div className="absolute w-[138px] h-[138px] md:w-[190px] md:h-[190px] rounded-full border border-white/10 blur-[1px] pointer-events-none" />

              {/* Línea punteada giratoria blanca */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                style={{ willChange: "transform" }}
                className="absolute w-[144px] h-[144px] md:w-[200px] md:h-[200px] rounded-full border border-dashed border-white/20 pointer-events-none"
              />

              {/* Sello Central Metalizado (Borde plateado y destellos) */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative flex items-center justify-center w-28 h-28 md:w-38 md:h-38 rounded-full bg-linear-to-b from-white via-zinc-600 to-white p-[1.5px] shadow-[0_0_35px_rgba(255,0,127,0.25),0_0_15px_rgba(255,255,255,0.15),inset_0_0_15px_rgba(255,255,255,0.2)] transition-transform duration-700 ease-out z-10"
              >
                <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center relative">
                  <div className="absolute inset-[5px] md:inset-[8px] border border-white/10 rounded-full pointer-events-none" />
                  <span className="font-serif text-lg md:text-2xl tracking-[0.25em] text-white font-light uppercase text-center z-10 ml-1.5 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
                    {siteConfig.dressCode.type}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Colores reservados */}
            <div className="flex flex-col gap-4 text-center max-w-xl w-full mx-auto px-4 md:px-8">
              <div className="flex flex-col items-center gap-2.5">
                <div className="flex items-center justify-center gap-4 mb-0.5">
                  <div className="w-7 h-7 rounded-full bg-[#ff007f] shadow-[0_0_20px_rgba(255,0,127,0.7)] border border-white/25" />
                  <div className="w-px h-5 bg-white/20" />
                  <div className="w-7 h-7 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.6)] bg-linear-to-tr from-[#777] via-white to-[#ccc] border border-white/40" />
                </div>

                <p className="font-sans text-[9.5px] md:text-[10px] text-gray-400 leading-relaxed tracking-[0.2em] uppercase max-w-sm">
                  {siteConfig.dressCode.reservedColorsText.prefix}{" "}
                  <strong className="text-[#ff007f] font-bold tracking-[0.22em] drop-shadow-[0_0_6px_rgba(255,0,127,0.4)]">
                    {siteConfig.dressCode.reservedColorsText.color1}
                  </strong>{" "}
                  Y{" "}
                  <strong className="text-white font-extrabold tracking-[0.22em] drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">
                    {siteConfig.dressCode.reservedColorsText.color2}
                  </strong>
                  <br />
                  <span className="mt-1 block text-[8px] tracking-[0.18em] text-gray-500">
                    ESTÁN RESERVADOS EXCLUSIVAMENTE PARA LA QUINCEAÑERA.
                  </span>
                </p>
              </div>

              <div className="w-12 h-px bg-linear-to-r from-transparent via-white/20 to-transparent mx-auto" />

              <p className="font-sans text-[8.5px] md:text-[9.5px] text-gray-500 leading-relaxed tracking-[0.2em] uppercase max-w-xs mx-auto">
                {siteConfig.dressCode.extraNotes.prefix}{" "}
                <strong className="text-white font-semibold">
                  {siteConfig.dressCode.extraNotes.highlight}
                </strong>{" "}
                {siteConfig.dressCode.extraNotes.suffix}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
