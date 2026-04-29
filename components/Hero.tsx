"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import type { SiteContent } from "@/lib/data";

const ROLES = ["Software Engineer", "ML Engineer", "Space Tech", "Full Stack Dev", "AI Builder"];

function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const current = ROLES[roleIdx];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, deleting, roleIdx]);

  return (
    <span className="text-primary font-headline font-extrabold">
      {displayed}
      <span className="cursor-blink text-primary">|</span>
    </span>
  );
}

export default function Hero({ data }: { data: SiteContent }) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 sm:px-10 max-w-7xl mx-auto pt-24 pb-20">
      <div className="max-w-4xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-outline-variant/40 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-label text-xs text-on-surface-variant tracking-widest uppercase">
            Open to Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="font-headline font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-coffee-brown leading-[0.92] mb-6 whitespace-pre-wrap"
        >
          {data.heroName}
        </motion.h1>

        {/* Typing roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-2xl sm:text-3xl font-headline tracking-tight text-coffee-brown/60 mb-6 h-10"
        >
          <TypingText />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.5 }}
          className="font-body text-lg sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10 whitespace-pre-wrap"
        >
          {data.heroSubtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-label font-semibold text-sm uppercase tracking-widest hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-warm-md"
          >
            View Work
          </a>
          <a
            href="/23211A0523_SriramSiddartha.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-white font-label font-semibold text-sm uppercase tracking-widest hover:brightness-110 hover:scale-105 transition-all duration-200 shadow-warm-md"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-surface-container border border-outline-variant/50 text-coffee-brown font-label font-semibold text-sm uppercase tracking-widest hover:bg-surface-container-high hover:scale-105 transition-all duration-200"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/Sriramsiddartha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-surface-container border border-outline-variant/50 text-coffee-brown font-label font-semibold text-sm uppercase tracking-widest hover:bg-surface-container-high hover:scale-105 transition-all duration-200"
          >
            GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  );
}
