"use client";

import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import {
  SiPython, SiCplusplus, SiTypescript,
  SiTensorflow, SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiOpencv,
  SiReact, SiNextdotjs, SiNodedotjs, SiFastapi, SiPostgresql, SiMongodb,
  SiFirebase, SiGit, SiDocker, SiJupyter
} from "react-icons/si";
import { FaJava, FaDatabase, FaAws } from "react-icons/fa";

const skills = [
  {
    cat: "Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "SQL", icon: FaDatabase },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    cat: "Machine Learning",
    items: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "PyTorch", icon: SiPytorch },
      { name: "NLP / LSTM", icon: SiScikitlearn },
      { name: "Satellite Imagery", icon: SiOpencv },
    ],
  },
  {
    cat: "Full-Stack Web",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "FastAPI", icon: SiFastapi },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    cat: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws },
      { name: "Firebase", icon: SiFirebase },
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Jupyter", icon: SiJupyter },
      { name: "NumPy/Pandas", icon: SiPandas },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">Capabilities</span>
            <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-coffee-brown">
              Skills & Tech Stack
            </h2>
            <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto mt-4 leading-relaxed">
              My technical foundation spans across low-level programming, scalable web architectures, and advanced AI/ML implementations.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, gi) => (
            <SectionWrapper key={group.cat} delay={0.1 * gi} className="h-full">
              <div className="h-full bg-soft-cream border border-outline-variant/30 rounded-2xl p-8 hover:shadow-warm-md hover:border-primary/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center mb-6">
                  <span className="font-headline font-extrabold text-lg text-primary">{String(gi + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-headline font-bold text-xl text-coffee-brown mb-6 pb-4 border-b border-outline-variant/30">
                  {group.cat}
                </h3>
                
                <div className="flex flex-col gap-4">
                  {group.items.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-4 group cursor-default"
                    >
                      <div className="w-10 h-10 rounded-full bg-surface border border-outline-variant/50 flex items-center justify-center text-on-surface-variant group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/30 transition-colors shadow-warm-sm">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="font-label text-sm font-medium text-coffee-brown/80 group-hover:text-coffee-brown transition-colors">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
