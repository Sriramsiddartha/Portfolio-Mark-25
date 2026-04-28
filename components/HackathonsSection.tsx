"use client";

import SectionWrapper from "./SectionWrapper";
import type { Hackathon } from "@/lib/data";

export default function HackathonsSection({ data }: { data: Hackathon[] }) {
  return (
    <section id="hackathons" className="py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-2 block">Competitive Coding</span>
            <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-coffee-brown">
              Hackathons & Workshops
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((hck, i) => (
              <div key={i} className="flex flex-col rounded-3xl bg-surface-container-low border border-outline-variant/30 overflow-hidden shadow-warm-sm hover:shadow-warm-md transition-shadow group">
                {hck.image ? (
                  <div className="h-48 overflow-hidden bg-surface-dim relative border-b border-outline-variant/30 flex items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={hck.image} 
                      alt={hck.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                ) : (
                  <div className="h-2 bg-primary/20 w-full" />
                )}
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-label text-[10px] font-semibold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">{hck.role}</span>
                    <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant/60 mt-1">{hck.date}</span>
                  </div>
                  
                  <h3 className="font-headline font-bold text-2xl text-coffee-brown mb-4 leading-tight">{hck.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-1">
                    {hck.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
