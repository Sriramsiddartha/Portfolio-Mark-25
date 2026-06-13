"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FaFileAlt, FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";

interface ResearchPaper {
  id: string;
  title: string;
  authors: { name: string; highlight?: boolean }[];
  status: string;
  statusColor: string;
  abstract: string;
  keywords: string[];
  pdfUrl: string;
  githubUrl?: string;
  year: string;
}

const papers: ResearchPaper[] = [
  {
    id: "rag-paper",
    title: "Low-Noise RAG: An Academic Retrieval-Augmented Query Answering System",
    authors: [
      { name: "Bandaru Sriram Siddartha", highlight: true },
      { name: "Dr. G. Ramani" },
    ],
    status: "Under Review",
    statusColor: "bg-amber-100 text-amber-800 border-amber-200",
    abstract:
      "The proliferation of academic corpora, such as lecture notes, textbooks, and lab notes, makes it more difficult to manually retrieve particular information. This paper introduces the Academic Low-Noise Query Answering System, a Retrieval Augmented Generation (RAG) framework that includes a multi-stage noise filtration system and a source authority weighting mechanism. An empirical analysis using 50 queries and 147 scholarly documents shows a Retrieval Precision of 87.2% and a 71.6% noise reduction ratio, with consumer-grade hardware having an end-to-end latency of less than two seconds.",
    keywords: ["RAG", "Semantic Search", "Noise Filtering", "Sentence-BERT", "FAISS", "Llama 2"],
    pdfUrl: "/papers/low_noise_rag_academic_qa.pdf",
    year: "2025",
  },
  {
    id: "idcas-paper",
    title: "IDCAS: A Web-Based Intelligent Data Cleaning and Analysis System",
    authors: [
      { name: "Bandaru Sriram Siddartha", highlight: true },
      { name: "Dr. Jyothirmai" },
    ],
    status: "Working Draft",
    statusColor: "bg-primary/10 text-primary border-primary/20",
    abstract:
      "Data science projects often slow down not because of modeling, but because of the repetitive work required to clean and prepare datasets for analysis. This paper presents the Intelligent Data Cleaning and Analysis System (IDCAS), a web-based full-stack application that streamlines data preparation and offers expert-style guidance on data readiness. IDCAS ingests tabular data from CSV and PDF files, computes a deterministic data quality score, and applies user-configured cleaning operations using vectorized routines in Pandas and NumPy. The system integrates a locally hosted Llama 3 model via Ollama, which receives a compact statistical meta-profile instead of raw data, preserving privacy.",
    keywords: ["Data Cleaning", "Pandas", "NumPy", "Llama 3", "Ollama", "Full-Stack"],
    pdfUrl: "/papers/idcas_intelligent_data_cleaning.pdf",
    githubUrl: "https://github.com/Sriramsiddartha/Project-IDCAS-",
    year: "2025",
  },
  {
    id: "healthcare-paper",
    title: "Enhancing Healthcare System Interoperability with a Cloud-Based API",
    authors: [
      { name: "A. Ritesh Reddy" },
      { name: "B. Sriram Siddartha", highlight: true },
      { name: "B. Pushkar Varma" },
      { name: "Ch. Rama Krishna" },
      { name: "Dr. V. Pavan Kumar" },
    ],
    status: "Research Project",
    statusColor: "bg-green-50 text-green-700 border-green-200",
    abstract:
      "One of the biggest challenges in healthcare today is the lack of interoperability between hospitals, labs, and clinics. Patient data is often stored in fragmented systems that don't easily communicate, leading to delays, incomplete information, and potential errors in care. This project addresses the issue by developing a cloud-based API that enables seamless interoperability, allowing different systems to securely share and access patient data.",
    keywords: ["Healthcare", "Cloud API", "Interoperability", "FHIR", "Data Sharing"],
    pdfUrl: "/papers/cloud_healthcare_interoperability.pdf",
    year: "2025",
  },
];

function PaperCard({ paper, index }: { paper: ResearchPaper; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <div className="p-8 rounded-3xl bg-soft-cream border border-outline-variant/30 hover:shadow-warm-lg hover:border-primary/30 transition-all duration-300">
        {/* Status badge & year */}
        <div className="flex items-center gap-3 mb-5">
          <span className={`px-3 py-1 rounded-full text-[10px] font-label font-semibold uppercase tracking-wider border ${paper.statusColor}`}>
            {paper.status}
          </span>
          <span className="font-label text-[10px] text-on-surface-variant/50 tracking-widest uppercase">
            {paper.year}
          </span>
        </div>

        {/* Paper icon + Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            <FaFileAlt className="w-5 h-5" />
          </div>
          <h3 className="font-headline font-bold text-xl text-coffee-brown leading-tight group-hover:text-primary transition-colors">
            {paper.title}
          </h3>
        </div>

        {/* Authors */}
        <p className="font-body text-sm text-on-surface-variant mb-4 pl-16">
          {paper.authors.map((author, i) => (
            <span key={author.name}>
              {i > 0 && ", "}
              {author.highlight ? (
                <strong className="text-primary font-semibold">{author.name}</strong>
              ) : (
                <span>{author.name}</span>
              )}
            </span>
          ))}
        </p>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2 mb-5 pl-16">
          {paper.keywords.map((kw) => (
            <span
              key={kw}
              className="px-2.5 py-1 rounded-full bg-surface-container border border-outline-variant/40 font-label text-[10px] uppercase tracking-wider text-on-surface-variant"
            >
              {kw}
            </span>
          ))}
        </div>

        {/* Abstract toggle */}
        <div className="pl-16 mb-5">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-2 font-label text-xs uppercase tracking-widest text-primary hover:text-coffee-brown transition-colors"
          >
            {expanded ? "Hide Abstract" : "Read Abstract"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FaChevronDown className="w-3 h-3" />
            </motion.span>
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="font-body text-sm text-on-surface-variant leading-relaxed mt-4 p-5 rounded-2xl bg-surface-container/60 border border-outline-variant/20">
                  {paper.abstract}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pl-16">
          <a
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-coffee-brown text-white font-label text-xs uppercase tracking-widest hover:bg-coffee-brown/80 transition-colors shadow-warm-sm"
          >
            <FaFileAlt className="w-3 h-3" />
            Read Paper (PDF)
          </a>
          {paper.githubUrl && (
            <a
              href={paper.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container border border-outline-variant/30 text-coffee-brown font-label text-xs uppercase tracking-widest hover:bg-surface-container-high hover:border-primary/40 transition-all"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              View Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        <SectionWrapper>
          <div className="text-center mb-16">
            <span className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-4 block">
              Academic Work
            </span>
            <h2 className="font-headline font-extrabold text-4xl sm:text-5xl tracking-tighter text-coffee-brown">
              Research & Publications
            </h2>
            <p className="font-body text-base text-on-surface-variant max-w-2xl mx-auto mt-4 leading-relaxed">
              Exploring the intersection of AI, data systems, and healthcare through academic research papers.
            </p>
          </div>
        </SectionWrapper>

        <div className="flex flex-col gap-8">
          {papers.map((paper, i) => (
            <PaperCard key={paper.id} paper={paper} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
