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
    <section 
      id="space-research" 
      className="relative py-32 sm:py-40 px-6 sm:px-10 overflow-hidden" 
      style={{ background: "#050508" }}
    >
      
      {/* ═══ Animated Background Layers ═══ */}
      
      {/* Starfields (width/height 1px is set in CSS, but let's ensure no layout issues) */}
      <div className="space-stars-1 pointer-events-none" />
      <div className="space-stars-2 pointer-events-none" />
      <div className="space-stars-3 pointer-events-none" />

      {/* Pulsing Bright Stars */}
      <div className="pulse-star" style={{ top: "15%", left: "15%" }} />
      <div className="pulse-star" style={{ top: "45%", left: "75%" }} />
      <div className="pulse-star" style={{ top: "75%", left: "25%" }} />

      {/* Shooting stars (now moving right-to-left) */}
      <div className="shooting-star shooting-star-1 pointer-events-none" />
      <div className="shooting-star shooting-star-2 pointer-events-none" />
      <div className="shooting-star shooting-star-3 pointer-events-none" />
      <div className="shooting-star shooting-star-4 pointer-events-none" />

      {/* Floating satellite SVG (scaled up to 100px in CSS) */}
      <div className="space-satellite pointer-events-none">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Solar panels */}
          <rect x="2" y="26" width="18" height="12" rx="2" fill="#4a90d9" opacity="0.75" />
          <rect x="44" y="26" width="18" height="12" rx="2" fill="#4a90d9" opacity="0.75" />
          {/* Panel grid lines */}
          <line x1="8" y1="26" x2="8" y2="38" stroke="#ffffff" strokeWidth="0.5" opacity="0.5" />
          <line x1="14" y1="26" x2="14" y2="38" stroke="#ffffff" strokeWidth="0.5" opacity="0.5" />
          <line x1="50" y1="26" x2="50" y2="38" stroke="#ffffff" strokeWidth="0.5" opacity="0.5" />
          <line x1="56" y1="26" x2="56" y2="38" stroke="#ffffff" strokeWidth="0.5" opacity="0.5" />
          <line x1="2" y1="32" x2="20" y2="32" stroke="#ffffff" strokeWidth="0.5" opacity="0.5" />
          <line x1="44" y1="32" x2="62" y2="32" stroke="#ffffff" strokeWidth="0.5" opacity="0.5" />
          {/* Connecting struts */}
          <rect x="18" y="30" width="6" height="4" fill="#888888" />
          <rect x="40" y="30" width="6" height="4" fill="#888888" />
          {/* Main Body */}
          <rect x="22" y="22" width="20" height="20" rx="3" fill="#d0d5dd" />
          {/* Gold foil details */}
          <rect x="25" y="25" width="14" height="14" rx="1" fill="#cca43b" />
          <circle cx="32" cy="32" r="4" fill="#111111" />
          {/* Instrument details */}
          <circle cx="28" cy="28" r="1.5" fill="#3b82f6" />
          <circle cx="36" cy="28" r="1.5" fill="#10b981" />
          {/* Transmitter Dish */}
          <path d="M 24 16 C 28 22, 36 22, 40 16" stroke="#d0d5dd" strokeWidth="2" fill="none" />
          <line x1="32" y1="20" x2="32" y2="10" stroke="#d0d5dd" strokeWidth="1.5" />
          <circle cx="32" cy="8" r="2" fill="#ef4444" />
        </svg>
      </div>

      {/* Earth Horizon Curve at bottom */}
      <div className="earth-horizon pointer-events-none" />

      {/* Nebula glows */}
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(236,72,153,0.03) 0%, transparent 70%)", filter: "blur(100px)" }} />

      {/* Constellation background overlay line (just a cool subtle line pattern) */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <line x1="15%" y1="15%" x2="20%" y2="28%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="20%" y1="28%" x2="15%" y2="45%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="20%" y1="28%" x2="35%" y2="25%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="75%" y1="45%" x2="80%" y2="60%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="3 3" />
        <line x1="80%" y1="60%" x2="70%" y2="75%" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="3 3" />
      </svg>

      {/* ═══ Content ═══ */}
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionWrapper>
          <div className="text-center mb-20">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-blue-400 mb-4 block">Beyond Software</span>
            <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-white flex items-center justify-center gap-4">
              Astrophysics & Space Tech <SiNasa className="text-blue-400 w-10 h-10" />
            </h2>
            <p className="font-body text-base text-white/70 max-w-2xl mx-auto mt-4 leading-relaxed">
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
