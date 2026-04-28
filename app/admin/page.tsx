"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AdminProjectForm from "@/components/admin/AdminProjectForm";
import AdminCertForm from "@/components/admin/AdminCertForm";
import AdminSiteContentForm from "@/components/admin/AdminSiteContentForm";
import AdminExperienceForm from "@/components/admin/AdminExperienceForm";
import AdminEducationForm from "@/components/admin/AdminEducationForm";
import AdminHackathonForm from "@/components/admin/AdminHackathonForm";
import { 
  localProjects, localCertificates, localExperience, localEducation, localHackathons,
  type Project, type Certificate, type Experience, type Education, type Hackathon
} from "@/lib/data";

export default function AdminPage() {
  const [tab, setTab] = useState<"content" | "experience" | "education" | "hackathons" | "projects" | "certs">("content");
  const [projects, setProjects] = useState<Project[]>([]);
  const [certs, setCerts] = useState<Certificate[]>([]);
  const [experience, setExperience] = useState<Experience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [loading, setLoading] = useState(true);
  const [firebaseOk, setFirebaseOk] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const { fetchProjects, fetchCertificates, fetchExperience, fetchEducation, fetchHackathons } = await import("@/lib/firestore");
        const [p, c, ex, ed, h] = await Promise.all([
          fetchProjects(), fetchCertificates(), fetchExperience(), fetchEducation(), fetchHackathons()
        ]);
        setProjects(p);
        setCerts(c);
        setExperience(ex);
        setEducation(ed);
        setHackathons(h);
        setFirebaseOk(true);
      } catch {
        setProjects([]);
        setCerts([]);
        setExperience([]);
        setEducation([]);
        setHackathons([]);
        setFirebaseOk(false);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleDeleteProject = async (id: string) => {
    if (!confirm("Delete this project?")) return;
    try {
      const { deleteProject } = await import("@/lib/firestore");
      await deleteProject(id);
      setProjects((p) => p.filter((x) => x.id !== id));
    } catch {
      alert("Delete failed — check Firebase config.");
    }
  };

  const handleDeleteCert = async (id: string) => {
    if (!confirm("Delete this certificate?")) return;
    try {
      const { deleteCertificate } = await import("@/lib/firestore");
      await deleteCertificate(id);
      setCerts((c) => c.filter((x) => x.id !== id));
    } catch {
      alert("Delete failed — check Firebase config.");
    }
  };

  const handleDeleteItem = async (type: string, id: string) => {
    if (!confirm("Delete this item?")) return;
    try {
      if (type === "experience") {
        const { deleteExperience } = await import("@/lib/firestore");
        await deleteExperience(id);
        setExperience((prev) => prev.filter((x) => x.id !== id));
      } else if (type === "education") {
        const { deleteEducation } = await import("@/lib/firestore");
        await deleteEducation(id);
        setEducation((prev) => prev.filter((x) => x.id !== id));
      } else if (type === "hackathons") {
        const { deleteHackathon } = await import("@/lib/firestore");
        await deleteHackathon(id);
        setHackathons((prev) => prev.filter((x) => x.id !== id));
      }
    } catch {
      alert("Delete failed.");
    }
  };

  return (
    <div className="min-h-screen bg-surface-container-low pt-24 pb-20 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <Link href="/" className="font-label text-xs text-on-surface-variant/60 hover:text-primary transition-colors tracking-widest uppercase">
              ← Back to Portfolio
            </Link>
            <h1 className="font-headline font-extrabold text-3xl text-coffee-brown tracking-tighter mt-2">
              Admin Dashboard
            </h1>
            <p className="font-body text-sm text-on-surface-variant mt-1">
              Manage your portfolio content
            </p>
          </div>

          {/* Firebase status */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-label tracking-wide ${
            firebaseOk ? "bg-green-50 text-green-700 border border-green-200" : "bg-amber-50 text-amber-700 border border-amber-200"
          }`}>
            <span className={`w-2 h-2 rounded-full ${firebaseOk ? "bg-green-500" : "bg-amber-500"}`} />
            {firebaseOk ? "Firebase Connected" : "Using Local Data — Configure Firebase"}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap bg-surface-container rounded-3xl p-1 gap-1 mb-8 shadow-warm-sm">
          {(["content", "experience", "education", "hackathons", "projects", "certs"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-label text-xs uppercase tracking-widest font-semibold transition-all ${
                tab === t
                  ? "bg-primary text-white shadow-warm-sm"
                  : "text-on-surface-variant hover:text-coffee-brown hover:bg-surface-container-high"
              }`}
            >
              {t === "projects" ? "Projects" : t === "certs" ? "Badges" : t === "content" ? "Site Bio" : t}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Add Form */}
          <div className="lg:col-span-2">
            <div className="bg-soft-cream rounded-2xl p-6 shadow-warm-sm border border-outline-variant/30 sticky top-28">
              <AnimatePresence mode="wait">
                {tab === "content" && (
                  <motion.div key="content-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <AdminSiteContentForm />
                  </motion.div>
                )}
                {tab === "experience" && (
                  <motion.div key="exp-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <AdminExperienceForm onAdded={(x) => setExperience((prev) => [x, ...prev])} />
                  </motion.div>
                )}
                {tab === "education" && (
                  <motion.div key="edu-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <AdminEducationForm onAdded={(x) => setEducation((prev) => [x, ...prev])} />
                  </motion.div>
                )}
                {tab === "hackathons" && (
                  <motion.div key="hack-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <AdminHackathonForm onAdded={(x) => setHackathons((prev) => [x, ...prev])} />
                  </motion.div>
                )}
                {tab === "projects" && (
                  <motion.div key="proj-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <AdminProjectForm onAdded={(p) => setProjects((prev) => [p, ...prev])} />
                  </motion.div>
                )}
                {tab === "certs" && (
                  <motion.div key="cert-form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <AdminCertForm onAdded={(c) => setCerts((prev) => [c, ...prev])} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Item List */}
          <div className="lg:col-span-3">
            <div className="bg-soft-cream rounded-2xl shadow-warm-sm border border-outline-variant/30 overflow-hidden">
              <div className="px-6 py-4 border-b border-outline-variant/30 flex justify-between items-center">
                <h3 className="font-headline font-bold text-base text-coffee-brown capitalize">
                  {tab === "content" ? "Global Site Content" : `${tab} List`}
                </h3>
              </div>

              {loading ? (
                <div className="flex items-center justify-center h-40">
                  <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                </div>
              ) : (
                <div className="divide-y divide-outline-variant/20">
                  <AnimatePresence>
                    {tab === "content" && (
                      <div className="p-6 text-on-surface-variant font-body text-sm text-center">
                        Edit the Global Site Content using the form on the left.
                      </div>
                    )}
                    
                    {tab === "projects" && projects.map((p) => (
                      <motion.div
                        key={p.id}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        className="flex items-start gap-4 px-6 py-4 hover:bg-surface-container-low transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-0.5">
                            <h4 className="font-headline font-bold text-sm text-coffee-brown truncate">{p.title}</h4>
                            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-label text-[10px] tracking-wide">{p.category}</span>
                          </div>
                          <p className="font-body text-xs text-on-surface-variant line-clamp-2">{p.description}</p>
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {p.tech?.slice(0, 4).map((t) => (
                              <span key={t} className="px-2 py-0.5 rounded bg-surface-container font-label text-[10px] text-on-surface-variant">{t}</span>
                            ))}
                            {p.tech?.length > 4 && <span className="font-label text-[10px] text-on-surface-variant/50">+{p.tech.length - 4}</span>}
                          </div>
                        </div>
                        <div className="flex gap-2 items-center shrink-0">
                          {p.github && (
                            <a href={p.github} target="_blank" rel="noopener noreferrer" className="font-label text-[10px] text-primary hover:underline">
                              GitHub
                            </a>
                          )}
                          <button
                            onClick={() => handleDeleteProject(p.id)}
                            className="px-3 py-1 rounded-full border border-error/30 text-error font-label text-[10px] hover:bg-error/10 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            Delete
                          </button>
                        </div>
                      </motion.div>
                    ))}
                    
                    {tab === "certs" && certs.map((c) => (
                      <motion.div
                        key={c.id}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        className="flex items-center gap-4 px-6 py-4 hover:bg-surface-container-low transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-headline font-bold text-sm text-coffee-brown truncate">{c.title}</h4>
                          <p className="font-body text-xs text-on-surface-variant">{c.issuer}</p>
                          <p className="font-label text-[10px] text-on-surface-variant/50 mt-0.5">{c.date}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteCert(c.id)}
                          className="px-3 py-1 rounded-full border border-error/30 text-error font-label text-[10px] hover:bg-error/10 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          Delete
                        </button>
                      </motion.div>
                    ))}

                    {tab === "experience" && experience.map((x) => (
                      <motion.div
                        key={x.id}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        className="flex items-center gap-4 px-6 py-4 hover:bg-surface-container-low transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-headline font-bold text-sm text-coffee-brown truncate">{x.role}</h4>
                          <p className="font-body text-xs text-on-surface-variant">{x.company}</p>
                          <p className="font-label text-[10px] text-on-surface-variant/50 mt-0.5">{x.period}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteItem("experience", x.id)}
                          className="px-3 py-1 rounded-full border border-error/30 text-error font-label text-[10px] hover:bg-error/10 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          Delete
                        </button>
                      </motion.div>
                    ))}

                    {tab === "education" && education.map((x) => (
                      <motion.div
                        key={x.id}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        className="flex items-center gap-4 px-6 py-4 hover:bg-surface-container-low transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-headline font-bold text-sm text-coffee-brown truncate">{x.degree}</h4>
                          <p className="font-body text-xs text-on-surface-variant">{x.school}</p>
                          <p className="font-label text-[10px] text-on-surface-variant/50 mt-0.5">{x.classOf}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteItem("education", x.id)}
                          className="px-3 py-1 rounded-full border border-error/30 text-error font-label text-[10px] hover:bg-error/10 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          Delete
                        </button>
                      </motion.div>
                    ))}

                    {tab === "hackathons" && hackathons.map((x) => (
                      <motion.div
                        key={x.id}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -16 }}
                        className="flex items-center gap-4 px-6 py-4 hover:bg-surface-container-low transition-colors group"
                      >
                        <div className="flex-1 min-w-0">
                          <h4 className="font-headline font-bold text-sm text-coffee-brown truncate">{x.title}</h4>
                          <p className="font-body text-xs text-on-surface-variant">{x.role}</p>
                          <p className="font-label text-[10px] text-on-surface-variant/50 mt-0.5">{x.date}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteItem("hackathons", x.id)}
                          className="px-3 py-1 rounded-full border border-error/30 text-error font-label text-[10px] hover:bg-error/10 transition-colors opacity-0 group-hover:opacity-100"
                        >
                          Delete
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {((tab === "projects" && projects.length === 0) ||
                    (tab === "certs" && certs.length === 0) ||
                    (tab === "experience" && experience.length === 0) ||
                    (tab === "education" && education.length === 0) ||
                    (tab === "hackathons" && hackathons.length === 0)
                  ) && (
                    <div className="flex items-center justify-center h-32 text-on-surface-variant/40 font-label text-sm">
                      No items yet. Add one using the form.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
