"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const CATEGORY_COLORS: Record<string, string> = {
  "AI / Space Tech": "bg-primary/10 text-primary",
  "Full Stack": "bg-tertiary-container text-on-tertiary-container",
  "AI / ML": "bg-secondary-container text-on-secondary-container",
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative bg-surface-container-low rounded-2xl overflow-hidden shadow-warm-sm hover:shadow-warm-lg transition-shadow duration-300 flex flex-col"
    >
      {/* Image / Placeholder */}
      <div className="relative h-48 w-full overflow-hidden bg-surface-container">
        {project.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface-container to-surface-container-high">
            <div className="text-center px-6">
              <div className="font-headline font-bold text-4xl text-outline/30 mb-2">
                {project.title.slice(0, 2).toUpperCase()}
              </div>
              <div className="font-label text-xs text-on-surface-variant/50 tracking-widest uppercase">
                {project.category}
              </div>
            </div>
          </div>
        )}
        {/* Category tag */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-label font-semibold tracking-wide ${CATEGORY_COLORS[project.category] || "bg-surface-container text-on-surface-variant"}`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-headline font-bold text-lg text-coffee-brown leading-tight mb-2 tracking-tight">
          {project.title}
        </h3>
        <p className="font-body text-sm text-on-surface-variant leading-relaxed flex-1 mb-4">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 rounded-full bg-surface-container border border-outline-variant/40 font-label text-xs text-on-surface-variant"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-full border border-outline-variant/50 font-label text-xs font-semibold uppercase tracking-widest text-coffee-brown hover:bg-surface-container-high transition-colors"
            >
              GitHub ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-full bg-primary text-white font-label text-xs font-semibold uppercase tracking-widest hover:brightness-110 transition-all"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
