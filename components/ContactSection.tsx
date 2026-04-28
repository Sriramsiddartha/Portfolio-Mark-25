"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <SectionWrapper>
          <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-coffee-brown mb-6">
            Let's Build Something
            <br />
            <span className="text-primary">Together.</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed mb-12">
            Whether it's an internship, collaboration, or just to talk about space and ML —
            my inbox is always open.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:bandarusriram25@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-label font-semibold tracking-widest uppercase text-sm hover:brightness-110 hover:scale-105 transition-all shadow-warm-md"
            >
              Send Email ✉
            </a>
            <a
              href="https://www.linkedin.com/in/sriram-siddartha-bandaru/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-outline-variant/50 bg-surface-container text-coffee-brown font-label font-semibold tracking-widest uppercase text-sm hover:bg-surface-container-high hover:scale-105 transition-all"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Social row */}
          <div className="flex justify-center gap-8 pt-6 border-t border-outline-variant/30">
            {[
              { label: "GitHub", href: "https://github.com/Sriramsiddartha" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/sriram-siddartha-bandaru/" },
              { label: "Email", href: "mailto:bandarusriram25@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="font-label text-xs uppercase tracking-widest text-on-surface-variant/50 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </SectionWrapper>
      </div>
    </section>
  );
}
