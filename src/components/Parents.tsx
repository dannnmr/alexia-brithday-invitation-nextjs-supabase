"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../config/invitation";

export function Parents() {
  const [styleType, setStyleType] = useState<"original" | "neon" | "ticket" | "editorial">("editorial");

  return (
    <div className="relative w-full bg-[#050505] overflow-hidden">
      
      {/* Selector de Estilos Interactivo */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-white/10 p-1 rounded-full shadow-lg">
        <span className="text-[7.5px] text-white/40 uppercase tracking-widest pl-2 pr-1 font-bold select-none">Estilo:</span>
        {(["original", "neon", "ticket", "editorial"] as const).map((type) => (
          <button
            key={type}
            onClick={() => setStyleType(type)}
            className={`px-3 py-1 rounded-full text-[8.5px] uppercase tracking-wider transition-all duration-300 font-black cursor-pointer ${
              styleType === type
                ? "bg-[#ff007f] text-white shadow-[0_0_10px_rgba(255,0,127,0.5)]"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            {type === "original" ? "Original" : type === "neon" ? "Opción 2" : type === "ticket" ? "Opción 3" : "Opción 4"}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={styleType}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="w-full"
        >
          {/* === OPCIÓN 1: ORIGINAL BLANCO === */}
          {styleType === "original" && (
            <section className="relative py-14 md:py-20 px-4 bg-white flex flex-col items-center justify-center overflow-hidden w-full">
              {/* Borde elegante de tarjeta física */}
              <div className="absolute inset-3 md:inset-6 border border-gray-200 pointer-events-none z-0" />
              <div className="absolute inset-[16px] md:inset-[30px] border-[0.5px] border-gray-100 pointer-events-none z-0" />

              {/* Acentos de neón sutiles superior/inferior */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-linear-to-r from-transparent via-[#ff007f]/30 to-transparent blur-[1px]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-[2px] bg-linear-to-r from-transparent via-[#c0c0c0]/50 to-transparent blur-[1px]" />

              <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center pt-8">
                <div className="mb-6 md:mb-10">
                  <h3 className="font-sans text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] text-gray-400 uppercase">
                    {siteConfig.parents.topLabel}
                  </h3>
                </div>

                {/* Padres */}
                <div className="relative w-full flex flex-col md:flex-row items-center justify-center md:gap-6 lg:gap-12 mb-7 md:mb-10">
                  <div className="text-center mb-3 md:mb-0">
                    <h2 className="font-pinyon text-4xl md:text-6xl lg:text-7xl text-[#111111] leading-none">
                      {siteConfig.parents.fatherName}
                    </h2>
                  </div>

                  <div className="z-20 flex items-center justify-center mb-1 md:mb-0">
                    <span className="font-script text-3xl md:text-5xl lg:text-6xl text-[#ff007f]">&amp;</span>
                  </div>

                  <div className="text-center">
                    <h2 className="font-pinyon text-4xl md:text-6xl lg:text-7xl text-[#111111] leading-none">
                      {siteConfig.parents.motherName}
                    </h2>
                  </div>
                </div>

                {/* Padrinos */}
                {siteConfig.parents.godparents && (
                  <div className="text-center mb-8 md:mb-12">
                    <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] md:tracking-[0.5em] text-gray-400 uppercase mb-3">
                      Y mis padrinos
                    </p>
                    <h2 className="font-pinyon text-3xl md:text-5xl lg:text-6xl text-[#111111] leading-none">
                      {siteConfig.parents.godparents}
                    </h2>
                  </div>
                )}

                {/* Texto de Invitación */}
                <div className="relative px-4 max-w-2xl">
                  <p className="font-sans text-[9px] md:text-[11px] lg:text-xs tracking-[0.3em] md:tracking-[0.4em] text-gray-500 uppercase leading-loose text-center">
                    {siteConfig.parents.invitationText}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* === OPCIÓN 2: PLACA NEÓN CON HOVER === */}
          {styleType === "neon" && (
            <section className="relative py-16 md:py-24 px-6 bg-[#050505] flex flex-col items-center justify-center overflow-hidden w-full">
              {/* Glow de fondo */}
              <div className="absolute top-[30%] left-[10%] w-[250px] h-[250px] bg-[#ff007f]/5 rounded-full blur-[80px] pointer-events-none z-0" />
              <div className="absolute bottom-[30%] right-[10%] w-[250px] h-[250px] bg-white/5 rounded-full blur-[80px] pointer-events-none z-0" />

              {/* Marcos perimetrales */}
              <div className="absolute inset-4 md:inset-8 border border-white/3 pointer-events-none z-0 rounded-4xl" />
              <div className="absolute inset-6 md:inset-12 border-[0.5px] border-[#ff007f]/10 pointer-events-none z-0 rounded-[1.8rem]" />

              <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center pt-8">
                <div className="mb-8 md:mb-10">
                  <p className="font-sans text-[8px] min-[380px]:text-[9px] md:text-[10px] uppercase tracking-[0.6em] text-[#ff007f] font-black">
                    {siteConfig.parents.topLabel}
                  </p>
                  <div className="w-12 h-px bg-linear-to-r from-transparent via-[#ff007f]/50 to-transparent mx-auto mt-4" />
                </div>

                <div className="w-full max-w-2xl bg-white/1 border border-white/4 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.02)] relative overflow-hidden">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/2 rounded-full blur-2xl" />

                  {/* Nombres de los Padres */}
                  <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 mb-8 relative z-10">
                    <div className="text-center group cursor-default">
                      <h2 className="font-pinyon text-4xl md:text-6xl text-white tracking-wide transition-all duration-300 group-hover:text-[#ff007f] group-hover:drop-shadow-[0_0_15px_rgba(255,0,127,0.4)]">
                        {siteConfig.parents.fatherName}
                      </h2>
                    </div>
                    <div className="flex items-center justify-center py-2 md:py-0">
                      <span className="font-pinyon text-4xl md:text-5xl text-[#ff007f] drop-shadow-[0_0_10px_rgba(255,0,127,0.3)] font-light">&amp;</span>
                    </div>
                    <div className="text-center group cursor-default">
                      <h2 className="font-pinyon text-4xl md:text-6xl text-white tracking-wide transition-all duration-300 group-hover:text-[#ff007f] group-hover:drop-shadow-[0_0_15px_rgba(255,0,127,0.4)]">
                        {siteConfig.parents.motherName}
                      </h2>
                    </div>
                  </div>

                  {/* Separador y Padrinos */}
                  {siteConfig.parents.godparents && (
                    <>
                      <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-6" />
                      <div className="text-center group cursor-default mb-6 relative z-10">
                        <p className="font-sans text-[7.5px] md:text-[9px] tracking-[0.4em] text-neutral-500 uppercase mb-3 font-bold">
                          Y mis padrinos
                        </p>
                        <h3 className="font-pinyon text-3xl md:text-5xl text-neutral-200 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                          {siteConfig.parents.godparents}
                        </h3>
                      </div>
                    </>
                  )}

                  <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-6" />

                  {/* Texto de Invitación */}
                  <div className="relative z-10 px-4">
                    <p className="font-sans text-[8.5px] md:text-[10px] tracking-[0.25em] text-neutral-400 uppercase leading-relaxed max-w-lg mx-auto">
                      {siteConfig.parents.invitationText}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* === OPCIÓN 3: TICKET VIP BOARDING PASS === */}
          {styleType === "ticket" && (
            <section className="relative py-12 md:py-18 px-4 bg-[#050505] flex flex-col items-center justify-center overflow-hidden w-full">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ff007f]/5 rounded-full blur-[100px] pointer-events-none z-0" />
              <div className="relative z-10 w-full max-w-2xl mx-auto pt-8">
                <div className="relative w-full bg-[#0d0d0d] border border-neutral-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(255,0,127,0.03)] flex flex-col md:flex-row items-stretch overflow-hidden min-h-[220px]">
                  <div className="hidden md:block absolute left-[180px] -top-3 w-6 h-6 rounded-full bg-[#050505] border border-neutral-900 z-20" />
                  <div className="hidden md:block absolute left-[180px] -bottom-3 w-6 h-6 rounded-full bg-[#050505] border border-neutral-900 z-20" />
                  <div className="block md:hidden absolute -left-3 top-[100px] w-6 h-6 rounded-full bg-[#050505] border border-neutral-900 z-20" />
                  <div className="block md:hidden absolute -right-3 top-[100px] w-6 h-6 rounded-full bg-[#050505] border border-neutral-900 z-20" />

                  {/* Talón del Ticket */}
                  <div className="w-full md:w-[192px] bg-neutral-950 p-6 flex flex-row md:flex-col items-center justify-between md:justify-center md:text-center gap-4 shrink-0 border-b md:border-b-0 md:border-r border-dashed border-neutral-900 relative">
                    <div className="flex flex-col items-start md:items-center">
                      <span className="text-[7px] tracking-[0.4em] text-[#ff007f] font-black uppercase">VIP ACCESS</span>
                      <h3 className="text-white font-sans font-black text-xs tracking-wider uppercase mt-1">NYC NIGHT</h3>
                      <span className="text-[8px] text-neutral-500 font-mono tracking-widest mt-0.5">05.06.2026</span>
                    </div>
                    <div className="flex flex-col items-end md:items-center">
                      <div className="flex gap-[2px] items-center h-8 opacity-50">
                        <div className="w-px h-full bg-white" />
                        <div className="w-3px h-full bg-white" />
                        <div className="w-px h-full bg-white" />
                        <div className="w-2px h-full bg-white" />
                        <div className="w-4px h-full bg-white" />
                        <div className="w-1.5px h-full bg-white" />
                        <div className="w-3px h-full bg-white" />
                        <div className="w-px h-full bg-white" />
                        <div className="w-2px h-full bg-white" />
                      </div>
                      <span className="text-[6.5px] font-mono text-neutral-600 tracking-[0.2em] mt-1 uppercase">ALEXIA XV</span>
                    </div>
                  </div>

                  {/* Cuerpo del Ticket */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between relative bg-linear-to-br from-neutral-900/30 to-transparent">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1 h-1 bg-[#ff007f] rounded-full" />
                      <span className="text-[7.5px] md:text-[8px] tracking-[0.3em] uppercase text-neutral-400 font-bold">
                        {siteConfig.parents.topLabel}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 my-auto">
                      <div className="flex flex-col">
                        <span className="text-[7px] tracking-[0.25em] text-[#ff007f] font-bold uppercase mb-1.5">Padres</span>
                        <p className="font-sans text-[11px] md:text-[12px] font-extrabold uppercase text-white tracking-wide">
                          {siteConfig.parents.fatherName}
                        </p>
                        <p className="font-sans text-[11px] md:text-[12px] font-extrabold uppercase text-white tracking-wide mt-0.5">
                          {siteConfig.parents.motherName}
                        </p>
                      </div>

                      {siteConfig.parents.godparents && (
                        <div className="flex flex-col">
                          <span className="text-[7px] tracking-[0.25em] text-[#ff007f] font-bold uppercase mb-1.5">Padrinos</span>
                          <p className="font-sans text-[11px] md:text-[12px] font-extrabold uppercase text-neutral-200 tracking-wide leading-tight">
                            {siteConfig.parents.godparents}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-5 pt-4 border-t border-neutral-900">
                      <p className="font-sans text-[8.5px] md:text-[9px] tracking-[0.15em] text-neutral-500 leading-normal uppercase">
                        "{siteConfig.parents.invitationText}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* === OPCIÓN 4: EDITORIAL MINIMALISTA (ACTUAL) === */}
          {styleType === "editorial" && (
            <section className="relative py-14 md:py-20 px-6 bg-[#050505] flex flex-col items-center justify-center w-full overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-white/2 rounded-full blur-[80px] pointer-events-none" />

              <div className="w-full max-w-xl bg-neutral-950/60 border border-white/10 p-6 md:p-8 relative pt-8 mt-4">
                {/* Acentos de esquina */}
                <div className="absolute -top-px -left-px w-2.5 h-2.5 border-t border-l border-[#ff007f]" />
                <div className="absolute -top-px -right-px w-2.5 h-2.5 border-t border-r border-[#ff007f]" />
                <div className="absolute -bottom-px -left-px w-2.5 h-2.5 border-b border-l border-[#ff007f]" />
                <div className="absolute -bottom-px -right-px w-2.5 h-2.5 border-b border-r border-[#ff007f]" />

                <div className="flex flex-col items-center text-center">
                  <span className="font-sans text-[7.5px] md:text-[8px] uppercase tracking-[0.5em] text-neutral-400 font-bold mb-6">
                    {siteConfig.parents.topLabel.toUpperCase()}
                  </span>

                  {/* Padres */}
                  <div className="flex flex-col items-center mb-4">
                    <span className="font-sans text-[6.5px] uppercase tracking-[0.3em] text-[#ff007f] font-black mb-3">
                      PADRES
                    </span>
                    <div className="flex flex-col items-center">
                      <h2 className="font-serif text-xs md:text-sm text-white tracking-[0.25em] uppercase font-light">
                        {siteConfig.parents.fatherName}
                      </h2>
                      <span className="font-pinyon text-2xl text-[#ff007f] leading-none my-1.5">&amp;</span>
                      <h2 className="font-serif text-xs md:text-sm text-white tracking-[0.25em] uppercase font-light">
                        {siteConfig.parents.motherName}
                      </h2>
                    </div>
                  </div>

                  {/* Padrinos */}
                  {siteConfig.parents.godparents && (
                    <>
                      <div className="w-16 h-[0.5px] bg-white/15 my-4" />
                      <div className="flex flex-col items-center">
                        <span className="font-sans text-[6.5px] uppercase tracking-[0.3em] text-[#ff007f] font-black mb-3">
                          PADRINOS
                        </span>
                        <h3 className="font-serif text-xs md:text-sm text-neutral-200 tracking-[0.25em] uppercase font-light max-w-sm leading-relaxed">
                          {siteConfig.parents.godparents}
                        </h3>
                      </div>
                    </>
                  )}

                  {/* Frase inferior */}
                  <div className="w-full h-[0.5px] bg-linear-to-r from-transparent via-white/10 to-transparent my-6" />
                  <p className="font-sans text-[8px] md:text-[8.5px] tracking-[0.15em] text-neutral-500 uppercase leading-relaxed max-w-sm">
                    "{siteConfig.parents.invitationText}"
                  </p>
                </div>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
