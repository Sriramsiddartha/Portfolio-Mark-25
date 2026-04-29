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
    <section id="space-research" className="py-24 px-6 sm:px-10 bg-soft-cream">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Beyond Software</span>
            <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-coffee-brown flex items-center justify-center gap-4">
              Astrophysics & Space Tech <SiNasa className="text-primary w-10 h-10" />
            </h2>
            <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto mt-4 leading-relaxed">
              My passion extends beyond code into the cosmos. I actively research theoretical physics, apply machine learning to astrophysics, and build space-tech software.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Research Areas */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {spaceInterests.map((interest, idx) => (
              <SectionWrapper key={interest.title} delay={0.1 * idx}>
                <div className="p-8 rounded-3xl bg-surface-container border border-outline-variant/30 hover:shadow-warm-lg hover:border-primary/40 transition-all duration-300 group">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 shadow-warm-sm">
                      <interest.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-headline font-bold text-2xl text-coffee-brown mb-3 group-hover:text-primary transition-colors">
                        {interest.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {interest.items.map(item => (
                          <span key={item} className="px-3 py-1 rounded-full bg-soft-cream border border-outline-variant/50 font-label text-[10px] uppercase tracking-wider text-on-surface-variant">
                            {item}
                          </span>
                        ))}
                      </div>
                      <p className="font-body text-sm text-on-surface-variant leading-relaxed">
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
              <div className="p-8 rounded-3xl bg-surface-container border border-outline-variant/30 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
                
                <h3 className="font-headline font-bold text-xl text-coffee-brown mb-6 flex items-center gap-2 relative z-10">
                  <FaMeteor className="text-primary" /> Agnirva Certification
                </h3>
                
                <div className="relative rounded-2xl overflow-hidden shadow-warm-md border border-outline-variant/20 bg-soft-cream z-10">
                  <div className="aspect-[4/3] w-full relative">
                    <Image
                      src="/certificates/agnirva.jpeg"
                      alt="Agnirva Space Certificate"
                      fill
                      className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-headline font-bold text-base">Agnirva</p>
                    <p className="text-white/80 font-body text-xs mt-0.5">Space & Tech Exploration</p>
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
