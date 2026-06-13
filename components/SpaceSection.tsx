"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FaAtom, FaMeteor, FaSpaceShuttle, FaSatellite } from "react-icons/fa";
import { SiNasa } from "react-icons/si";
import Image from "next/image";

export default function SpaceSection() {
  const spaceInterests = [
    {
      title: "Theoretical Physics",
      icon: FaAtom,
      items: ["Quantum Mechanics", "Particle Physics", "Quantum Field Theory"],
      description: "Deep dive into the fundamental laws of nature, understanding subatomic particles, and exploring theoretical frameworks that govern the universe at the smallest scales."
    },
    {
      title: "Astrophysics Research",
      icon: FaSpaceShuttle,
      items: ["Quasars & Neutron Stars", "Gravitational Lensing", "Deep Learning Detection"],
      description: "Researching extreme cosmic phenomena. Actively applying Deep Learning (DL) models to detect and analyze Gravitational Lensing events, and studying the high-energy physics of Quasars and Neutron Stars."
    },
    {
      title: "Space Tech Integrations",
      icon: FaSatellite,
      items: ["NASA APIs", "Meteor Shower Prediction", "Astronomical Data"],
      description: "Bridging software engineering and astronomy by building tools that ingest live data from NASA APIs, process astronomical datasets, and predict phenomena like meteor showers."
    }
  ];

  return (
    <section id="space-research" className="relative py-24 px-6 sm:px-10 overflow-hidden" style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #0d1117 40%, #1a0a2e 100%)" }}>
      
      {/* ═══ Animated Background Layers ═══ */}
      
      {/* Starfield */}
      <div className="space-stars-1" />
      <div className="space-stars-2" />
      <div className="space-stars-3" />

      {/* Shooting stars */}
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />
      <div className="shooting-star shooting-star-3" />

      {/* Floating satellite SVG */}
      <div className="space-satellite">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Solar panels */}
          <rect x="2" y="26" width="18" height="12" rx="2" fill="#4a90d9" opacity="0.6" />
          <rect x="44" y="26" width="18" height="12" rx="2" fill="#4a90d9" opacity="0.6" />
          {/* Panel lines */}
          <line x1="8" y1="26" x2="8" y2="38" stroke="#6ab0ff" strokeWidth="0.5" opacity="0.4" />
          <line x1="14" y1="26" x2="14" y2="38" stroke="#6ab0ff" strokeWidth="0.5" opacity="0.4" />
          <line x1="50" y1="26" x2="50" y2="38" stroke="#6ab0ff" strokeWidth="0.5" opacity="0.4" />
          <line x1="56" y1="26" x2="56" y2="38" stroke="#6ab0ff" strokeWidth="0.5" opacity="0.4" />
          {/* Body */}
          <rect x="22" y="22" width="20" height="20" rx="4" fill="#c0c8d4" opacity="0.7" />
          <rect x="26" y="26" width="12" height="12" rx="2" fill="#8ab4f8" opacity="0.5" />
          {/* Antenna */}
          <line x1="32" y1="22" x2="32" y2="14" stroke="#e0e0e0" strokeWidth="1.5" opacity="0.5" />
          <circle cx="32" cy="12" r="2" fill="#ff6b6b" opacity="0.6" />
        </svg>
      </div>

      {/* Nebula glow effects */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(100,60,180,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-20 -right-32 w-80 h-80 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(40,100,200,0.10) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(80,40,160,0.06) 0%, transparent 60%)", filter: "blur(80px)" }} />

      {/* ═══ Content ═══ */}
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-blue-400 mb-4 block">Beyond Software</span>
            <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-white flex items-center justify-center gap-4">
              Astrophysics & Space Tech <SiNasa className="text-blue-400 w-10 h-10" />
            </h2>
            <p className="font-body text-base text-white/60 max-w-2xl mx-auto mt-4 leading-relaxed">
              My passion extends beyond code into the cosmos. I actively research theoretical physics, apply machine learning to astrophysics, and build space-tech software.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Research Areas */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {spaceInterests.map((interest, idx) => (
              <SectionWrapper key={interest.title} delay={0.1 * idx}>
                <div className="p-8 rounded-3xl space-card group">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" style={{ boxShadow: "0 0 20px rgba(100,180,255,0.1)" }}>
                      <interest.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-2xl text-white mb-3 group-hover:text-blue-300 transition-colors">
                        {interest.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {interest.items.map(item => (
                          <span key={item} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-label text-[10px] uppercase tracking-wider text-white/60">
                            {item}
                          </span>
                        ))}
                      </div>
                      <p className="font-body text-sm text-white/50 leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SectionWrapper>
            ))}
          </div>

          {/* Right Column: Certificate Showcase */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <SectionWrapper delay={0.4}>
              <div className="p-8 rounded-3xl space-card relative overflow-hidden group">
                {/* Subtle glow behind card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                
                <h3 className="font-headline font-bold text-xl text-white mb-6 flex items-center gap-2 relative z-10">
                  <FaMeteor className="text-blue-400" /> Agnirva Certification
                </h3>
                
                <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/30 z-10" style={{ boxShadow: "0 0 30px rgba(100,180,255,0.06)" }}>
                  <div className="aspect-[4/3] w-full relative">
                    <Image
                      src="/certificates/agnirva.jpeg"
                      alt="Agnirva Space Certificate"
                      fill
                      className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-headline font-bold text-base">Agnirva</p>
                    <p className="text-white/70 font-body text-xs mt-0.5">Space & Tech Exploration</p>
                  </div>
                </div>
              </div>
            </SectionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
