"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Certificate } from "@/lib/data";

interface ModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function Modal({ certificate, onClose }: ModalProps) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    if (certificate) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [certificate]);

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-coffee-brown/70 backdrop-blur-md p-4 sm:p-8"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-soft-cream rounded-2xl shadow-warm-xl overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-surface-container-high text-coffee-brown hover:bg-surface-container-highest transition-colors"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Certificate display */}
            <div className="p-2 bg-deep-brown/80">
              <div className="p-6 bg-beige certificate-frame rounded-sm">
                {certificate.image ? (
                  <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden bg-surface-container/50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="w-full h-full object-contain"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                ) : (
                  <div className="w-full min-h-[300px] bg-soft-cream/70 rounded-sm flex flex-col items-center justify-center px-10 py-12 text-center">
                    {/* Decorative header */}
                    <div className="flex items-center gap-3 w-full mb-8">
                      <div className="flex-1 h-px bg-primary/30" />
                      <span className="font-label text-xs tracking-[0.3em] text-primary/60 uppercase">Certificate of Achievement</span>
                      <div className="flex-1 h-px bg-primary/30" />
                    </div>

                    <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-5">
                      <span className="font-headline font-extrabold text-xl text-primary">✦</span>
                    </div>

                    <p className="font-label text-xs tracking-widest uppercase text-on-surface-variant/60 mb-2">
                      This certifies that
                    </p>
                    <h2 className="font-headline font-extrabold text-2xl text-coffee-brown mb-1">
                      Sriram Siddartha Bandaru
                    </h2>
                    <p className="font-body text-sm text-on-surface-variant mb-4">
                      has successfully completed
                    </p>
                    <h3 className="font-headline font-bold text-xl text-primary mb-2 px-4">
                      {certificate.title}
                    </h3>
                    <p className="font-label text-sm text-on-surface-variant/70 mb-8">
                      Issued by <strong className="text-coffee-brown">{certificate.issuer}</strong>
                    </p>
                    <div className="flex items-center gap-3 w-full mt-4">
                      <div className="flex-1 h-px bg-outline-variant/40" />
                      <span className="font-label text-xs text-on-surface-variant/50">{certificate.date || "2025"}</span>
                      <div className="flex-1 h-px bg-outline-variant/40" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Info footer */}
            <div className="px-6 py-5">
              <h3 className="font-headline font-bold text-lg text-coffee-brown mb-1">{certificate.title}</h3>
              <p className="font-body text-sm text-on-surface-variant">{certificate.issuer} · {certificate.date}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
