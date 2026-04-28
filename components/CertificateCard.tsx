"use client";

import { motion } from "framer-motion";
import type { Certificate } from "@/lib/data";

interface CertificateCardProps {
  certificate: Certificate;
  index?: number;
  onClick: (cert: Certificate) => void;
}

const ISSUER_ABBR: Record<string, string> = {
  "ISRO (Indian Space Research Organisation)": "ISRO",
  "Amazon Web Services (AWS)": "AWS",
  "Microsoft & LinkedIn": "MS",
  "Cisco Networking Academy": "Cisco",
  "Infosys Springboard": "Infosys",
};

export default function CertificateCard({ certificate, index = 0, onClick }: CertificateCardProps) {
  const abbr = ISSUER_ABBR[certificate.issuer] || certificate.issuer.slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.03, y: -6 }}
      onClick={() => onClick(certificate)}
      className="group cursor-pointer"
    >
      {/* Outer frame — like a picture frame */}
      <div className="relative p-3 bg-deep-brown/80 rounded-lg shadow-warm-lg group-hover:shadow-warm-xl transition-shadow duration-300">
        {/* Inner mat */}
        <div className="p-4 bg-beige rounded certificate-frame">
          {/* Certificate content */}
          <div className="bg-soft-cream/60 rounded-sm p-5 min-h-[180px] flex flex-col">
            {/* Top seal line */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-0.5 bg-primary/40" />
              <span className="font-label text-[10px] text-primary/60 tracking-[0.25em] uppercase">
                Certificate of
              </span>
              <div className="flex-1 h-0.5 bg-primary/40" />
            </div>

            {/* Issuer badge */}
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-3">
              <span className="font-headline font-extrabold text-xs text-primary">{abbr}</span>
            </div>

            {/* Title */}
            <h3 className="font-headline font-bold text-sm text-coffee-brown leading-tight mb-2 flex-1">
              {certificate.title}
            </h3>

            {/* Issuer  */}
            <p className="font-label text-xs text-on-surface-variant/70 mb-3">
              {certificate.issuer}
            </p>

            {/* Bottom line */}
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-outline-variant/30">
              <span className="font-label text-[10px] text-on-surface-variant/50 tracking-widest uppercase">
                {certificate.date || "2025"}
              </span>
              <span className="font-label text-[10px] text-primary/60 tracking-widest uppercase">
                Click to view ↗
              </span>
            </div>
          </div>
        </div>

        {/* Full image overlay if image exists */}
        {certificate.image && (
          <div className="absolute inset-3 rounded overflow-hidden opacity-0 group-hover:opacity-0 bg-surface-container">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={certificate.image} 
              alt={certificate.title} 
              className="w-full h-full object-cover" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        )}
      </div>
    </motion.div>
  );
}
