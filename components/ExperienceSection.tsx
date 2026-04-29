"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import ExperienceModal from "./ExperienceModal";
import type { Experience } from "@/lib/data";

export default function ExperienceSection({ data }: { data: Experience[] }) {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <section id="experience" className="py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-2 block">Career</span>
            <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-coffee-brown">
              Professional Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data?.map((exp, i) => (
              <button
                key={exp?.id || i}
                onClick={() => setSelectedExp(exp)}
                className="w-full text-left p-8 rounded-3xl bg-soft-cream border border-outline-variant/30 hover:shadow-warm-lg hover:border-primary/40 transition-all duration-300 group relative cursor-pointer"
                aria-label={`View details for ${exp?.company || 'Experience'}`}
              >
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-primary/70 text-2xl">open_in_full</span>
                </div>
                
                <span className="font-label text-xs font-semibold text-primary uppercase tracking-wider mb-4 block">{exp?.company || ''}</span>
                <h3 className="font-headline font-bold text-2xl text-coffee-brown group-hover:text-primary transition-colors pr-10">{exp?.role || ''}</h3>
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60 block mt-3 mb-6">{exp?.period || ''}</span>
                
                <p className="font-body text-base text-on-surface-variant leading-relaxed line-clamp-2">{typeof exp?.detail === 'string' ? exp.detail : ''}</p>

                <div className="mt-6 flex items-center gap-2 text-primary font-label text-xs uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  View Full Details <span className="material-symbols-outlined text-[1rem]">arrow_forward</span>
                </div>
              </button>
            ))}
          </div>
        </SectionWrapper>

        {/* The Interactive Experience Modal */}
        <ExperienceModal experience={selectedExp} onClose={() => setSelectedExp(null)} />
      </div>
    </section>
  );
}
