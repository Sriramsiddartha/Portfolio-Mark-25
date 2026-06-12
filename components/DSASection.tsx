"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import type { Experience, CodingProfile } from "@/lib/data";
import { SiLeetcode, SiCodeforces, SiHackerrank, SiCodechef } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import Image from "next/image";

export default function DSASection({ 
  dsaExperiences, 
  codingProfiles 
}: { 
  dsaExperiences: Experience[], 
  codingProfiles: CodingProfile[] 
}) {
  
  const getIcon = (platform: string) => {
    const p = platform.toLowerCase();
    if (p.includes("leetcode")) return <SiLeetcode className="w-6 h-6" />;
    if (p.includes("codeforces")) return <SiCodeforces className="w-6 h-6" />;
    if (p.includes("hackerrank")) return <SiHackerrank className="w-6 h-6" />;
    if (p.includes("codechef")) return <SiCodechef className="w-6 h-6" />;
    return <FaLaptopCode className="w-6 h-6" />;
  };

  return (
    <section id="dsa" className="py-24 px-6 sm:px-10 bg-surface">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Problem Solving</span>
            <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-coffee-brown">
              DSA & Competitive Programming
            </h2>
            <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto mt-4 leading-relaxed">
              My journey of algorithmic thinking and solving complex computational problems across various platforms and intensive training programs.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Experiences & Profiles */}
          <div className="flex flex-col gap-12">
            {/* Coding Profiles */}
            <SectionWrapper delay={0.1}>
              <h3 className="font-headline font-bold text-2xl text-coffee-brown mb-6 flex items-center gap-2">
                <FaLaptopCode className="text-primary" /> Coding Profiles
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {codingProfiles.map((cp, idx) => (
                  <motion.a
                    key={cp.id}
                    href={cp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-primary/40 hover:shadow-warm-md transition-all group flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      {getIcon(cp.platform)}
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-base text-coffee-brown group-hover:text-primary transition-colors">{cp.platform}</h4>
                      <p className="font-label text-xs text-on-surface-variant mt-1 mb-2">@{cp.handle}</p>
                      <p className="font-body text-xs text-on-surface-variant/80">{cp.stats}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </SectionWrapper>

            {/* DSA Experience */}
            <SectionWrapper delay={0.2}>
              <h3 className="font-headline font-bold text-2xl text-coffee-brown mb-6">
                Training & Experience
              </h3>
              <div className="flex flex-col gap-6">
                {dsaExperiences.map((exp) => (
                  <div key={exp.id} className="p-6 rounded-3xl bg-soft-cream border border-outline-variant/30 relative">
                    <span className="font-label text-xs font-semibold text-primary uppercase tracking-wider mb-2 block">{exp.company}</span>
                    <h4 className="font-headline font-bold text-xl text-coffee-brown mb-2">{exp.role}</h4>
                    <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 block mb-4">{exp.period}</span>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {exp.detail}
                    </p>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          </div>

          {/* Right Column: Certificate Showcase */}
          <SectionWrapper delay={0.3} className="lg:sticky lg:top-32">
            <h3 className="font-headline font-bold text-2xl text-coffee-brown mb-6">
              Featured Certification
            </h3>
            <div className="relative group rounded-3xl overflow-hidden shadow-warm-lg border border-outline-variant/20 bg-surface-container">
              <div className="aspect-[4/3] w-full relative">
                <Image
                  src="/certificates/smartinterviews 2.png"
                  alt="SmartInterviews Certificate"
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-headline font-bold text-lg">SmartInterviews Certificate</p>
                <p className="text-white/80 font-body text-sm mt-1">2+ Years Rigorous DSA Training</p>
              </div>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </section>
  );
}
