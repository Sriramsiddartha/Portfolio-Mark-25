"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import CertificateCard from "@/components/CertificateCard";
import Modal from "@/components/Modal";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import HackathonsSection from "@/components/HackathonsSection";
import ContactSection from "@/components/ContactSection";
import SectionWrapper from "@/components/SectionWrapper";
import { 
  localProjects, localCertificates, localSiteContent, localExperience, localEducation, localHackathons,
  type Project, type Certificate, type SiteContent, type Experience, type Education, type Hackathon 
} from "@/lib/data";

// Try to load from Firebase; fall back to empty arrays
async function loadProjects(): Promise<Project[]> {
  try {
    const { fetchProjects } = await import("@/lib/firestore");
    return await fetchProjects();
  } catch {
    return [];
  }
}

async function loadCertificates(): Promise<Certificate[]> {
  try {
    const { fetchCertificates } = await import("@/lib/firestore");
    return await fetchCertificates();
  } catch {
    return [];
  }
}

async function loadSiteContent(): Promise<SiteContent> {
  try {
    const { fetchSiteContent } = await import("@/lib/firestore");
    const data = await fetchSiteContent();
    return data || localSiteContent;
  } catch {
    return localSiteContent;
  }
}

async function loadExperience(): Promise<Experience[]> {
  try {
    const { fetchExperience } = await import("@/lib/firestore");
    return await fetchExperience();
  } catch {
    return [];
  }
}

async function loadEducation(): Promise<Education[]> {
  try {
    const { fetchEducation } = await import("@/lib/firestore");
    return await fetchEducation();
  } catch {
    return [];
  }
}

async function loadHackathons(): Promise<Hackathon[]> {
  try {
    const { fetchHackathons } = await import("@/lib/firestore");
    return await fetchHackathons();
  } catch {
    return [];
  }
}

export default function HomePage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [siteContent, setSiteContent] = useState<SiteContent>(localSiteContent);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    loadProjects().then(setProjects);
    loadCertificates().then(setCertificates);
    loadSiteContent().then(setSiteContent);
    loadExperience().then(setExperience);
    loadEducation().then(setEducation);
    loadHackathons().then(setHackathons);
  }, []);
  return (
    <main>
      {/* Hero */}
      <Hero data={siteContent} />

      {/* About */}
      <AboutSection data={siteContent} />

      {/* Experience */}
      <ExperienceSection data={experience} />

      {/* Education */}
      <EducationSection data={education} />

      {/* Skills */}
      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 sm:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-2 block">
                  Selected Work
                </span>
                <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-coffee-brown">
                  Projects
                </h2>
              </div>
              <a
                href="https://github.com/Sriramsiddartha"
                target="_blank"
                rel="noopener noreferrer"
                className="font-label text-xs uppercase tracking-widest text-on-surface-variant/60 hover:text-primary transition-colors pb-1 border-b border-outline-variant/50"
              >
                View all on GitHub ↗
              </a>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons */}
      <HackathonsSection data={hackathons} />

      {/* Certificates Section */}
      <section id="certificates" className="py-24 px-6 sm:px-10 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <SectionWrapper>
            <div className="mb-12">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-2 block">
                Achievements
              </span>
              <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-coffee-brown">
                Certifications & Badges
              </h2>
              <p className="font-body text-sm text-on-surface-variant mt-3">
                Click any badge to view the full preview.
              </p>
            </div>
          </SectionWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certificates.map((cert, i) => (
              <CertificateCard
                key={cert.id}
                certificate={cert}
                index={i}
                onClick={setSelectedCert}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />

      {/* Certificate modal */}
      <Modal certificate={selectedCert} onClose={() => setSelectedCert(null)} />
    </main>
  );
}
