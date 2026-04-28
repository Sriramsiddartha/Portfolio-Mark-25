"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface Experience {
  role: string;
  company: string;
  period: string;
  detail: string;
  link?: string;
  projectsBuilt?: { name: string; url: string }[];
  certificateImage?: string;
}

interface ExperienceModalProps {
  experience: Experience | null;
  onClose: () => void;
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  // Lock body scroll when modal is active
  useEffect(() => {
    if (experience) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [experience]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {experience && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-coffee-brown/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-soft-cream rounded-2xl sm:rounded-3xl shadow-warm-xl flex flex-col md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 bg-surface border border-outline-variant rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors z-10"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Left Content */}
            <div className="flex-1 p-8 sm:p-12 border-b md:border-b-0 md:border-r border-outline-variant/30 flex flex-col justify-center">
              <span className="font-label text-xs font-semibold text-primary uppercase tracking-widest mb-3 block">
                {experience.company}
              </span>
              <h2 className="font-headline font-bold text-3xl sm:text-4xl text-coffee-brown mb-2">
                {experience.role}
              </h2>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60 mb-8 block">
                {experience.period}
              </span>

              <p className="font-body text-base text-on-surface-variant leading-relaxed mb-8">
                {experience.detail}
              </p>

              {/* Projects Built during Internship */}
              {experience.projectsBuilt && experience.projectsBuilt.length > 0 && (
                <div>
                  <h4 className="font-label text-xs uppercase tracking-[0.2em] text-coffee-brown mb-4 border-b border-outline-variant/30 pb-2">
                    Projects Built
                  </h4>
                  <div className="flex flex-col gap-3">
                    {experience.projectsBuilt.map((proj) => (
                      <a
                        key={proj.name}
                        href={proj.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 rounded-xl bg-surface border border-outline-variant/40 hover:border-primary/50 hover:bg-surface-container transition-all group"
                      >
                        <span className="font-label text-sm font-semibold text-coffee-brown group-hover:text-primary transition-colors">
                          {proj.name}
                        </span>
                        <span className="material-symbols-outlined text-[1rem] text-on-surface-variant/60 group-hover:text-primary transition-colors">
                          open_in_new
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Content: Certificate / Image Viewer */}
            {experience.certificateImage ? (
              <div className="flex-1 bg-surface-container-low p-8 sm:p-12 flex items-center justify-center min-h-[300px]">
                <img
                  src={experience.certificateImage}
                  alt={`Certificate from ${experience.company}`}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-xl shadow-warm-md border border-outline-variant/20"
                />
              </div>
            ) : (
              <div className="flex-1 bg-surface-container-low p-8 sm:p-12 flex flex-col items-center justify-center min-h-[300px] text-center">
                <div className="w-16 h-16 rounded-full bg-surface-dim flex items-center justify-center mb-4 border border-outline-variant/30">
                  <span className="material-symbols-outlined text-2xl text-on-surface-variant/40">work_history</span>
                </div>
                <p className="font-body text-sm text-on-surface-variant/60 max-w-[200px]">
                  Experience details fully documented in resume scope.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
