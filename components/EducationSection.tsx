"use client";

import SectionWrapper from "./SectionWrapper";
import type { Education } from "@/lib/data";

export default function EducationSection({ data }: { data: Education[] }) {
  return (
    <section id="education" className="py-24 px-6 sm:px-10 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="mb-16 text-center">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-2 block">Academic Background</span>
            <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-coffee-brown">
              Education
            </h2>
          </div>

          <div className="flex justify-center">
            {data.map((edu, i) => (
              <div key={i} className="max-w-3xl w-full p-8 md:p-12 rounded-3xl bg-surface border border-outline-variant/30 shadow-warm-sm hover:shadow-warm-md transition-shadow relative overflow-hidden">
                {/* Decorative background element replacing the old material icon */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                
                <span className="font-label text-sm font-semibold text-primary uppercase tracking-widest mb-3 block">{edu.school}</span>
                <h3 className="font-headline font-extrabold text-3xl sm:text-4xl text-coffee-brown mb-2">{edu.degree}</h3>
                <p className="font-body text-base text-on-surface-variant/80 mb-8">{edu.location}</p>

                <div className="grid grid-cols-2 sm:flex sm:items-center gap-6 sm:gap-12 pt-6 border-t border-outline-variant/30 mb-6">
                  <div>
                    <span className="block font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant/60 mb-1">Class Of</span>
                    <span className="block font-headline font-bold text-2xl text-coffee-brown">{edu.classOf}</span>
                  </div>
                  <div className="hidden sm:block w-px h-10 bg-outline-variant/30" />
                  <div>
                    <span className="block font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant/60 mb-1">CGPA</span>
                    <span className="block font-headline font-bold text-2xl text-primary">{edu.cgpa}</span>
                  </div>
                </div>

                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  <strong className="text-coffee-brown font-medium">Core Focus:</strong> {edu.details}
                </p>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
