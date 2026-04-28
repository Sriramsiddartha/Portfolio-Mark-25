"use client";

import SectionWrapper from "./SectionWrapper";
import type { SiteContent } from "@/lib/data";

export default function AboutSection({ data }: { data: SiteContent }) {
  return (
    <section id="about" className="py-24 px-6 sm:px-10 bg-surface-container-low">
      <div className="max-w-4xl mx-auto">
        <SectionWrapper>
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block text-center">About Me</span>
          <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-coffee-brown mb-12 leading-tight text-center">
            Software Engineer<br />
            <span className="text-primary">crafting intelligent solutions & building for space tech.</span>
          </h2>
          
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {data.aboutBio.map((paragraph, i) => (
              <p key={i} className="font-body text-lg sm:text-xl text-on-surface-variant leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
