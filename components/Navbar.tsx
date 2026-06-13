"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#certificates", label: "Badges" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-soft-cream/80 backdrop-blur-xl shadow-warm-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-headline font-extrabold text-xl tracking-tighter text-coffee-brown hover:text-primary transition-colors">
          SS<span className="text-primary">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-label text-xs font-semibold uppercase tracking-widest text-coffee-brown/60 hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/admin"
            className="ml-4 px-5 py-2 rounded-full bg-primary text-white font-label text-xs font-semibold uppercase tracking-widest hover:brightness-110 transition-all shadow-warm-sm"
          >
            Admin
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-coffee-brown transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-coffee-brown transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-coffee-brown transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-soft-cream/95 backdrop-blur-xl border-t border-outline-variant/30 px-6 pb-6"
          >
            <div className="flex flex-col gap-5 pt-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-label text-sm font-semibold uppercase tracking-widest text-coffee-brown/70 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <Link
                href="/admin"
                onClick={() => setMenuOpen(false)}
                className="w-fit px-5 py-2 rounded-full bg-primary text-white font-label text-xs font-semibold uppercase tracking-widest"
              >
                Admin
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
