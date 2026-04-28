// lib/data.ts
// Static local data seeded from Sriram's resume.
// The admin panel writes to Firebase; this file serves as the fallback seed.

export interface SiteContent {
  id: string; // "global"
  heroName: string;
  heroSubtitle: string;
  aboutBio: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  detail: string;
  link?: string;
  projectsBuilt?: { name: string; url: string }[];
  certificateImage?: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  location: string;
  classOf: string;
  cgpa: string;
  details: string;
}

export interface Hackathon {
  id: string;
  title: string;
  role: string;
  date: string;
  description: string;
  image?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  category: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  image: string;
  date?: string;
}

export const localProjects: Project[] = [
  {
    id: "ssms",
    title: "Solar Storm Monitoring & Analysis System",
    description:
      "AI-powered space weather platform with real-time visualization. Achieved 94% forecasting accuracy using LSTM + Random Forest ML algorithms to assess threats to critical infrastructure from solar storms.",
    image: "",
    tech: ["React", "TypeScript", "FastAPI", "Python", "LSTM", "Random Forest", "AWS"],
    github: "https://github.com/Sriramsiddartha",
    demo: "",
    category: "AI / Space Tech",
  },
  {
    id: "space-explorer",
    title: "Space Explorer Web App",
    description:
      "Full-stack web platform for space enthusiasts featuring meteor shower predictions, user accounts, and dynamic data visualization of astronomical events.",
    image: "",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/Sriramsiddartha",
    demo: "",
    category: "Full Stack",
  },
  {
    id: "idcas",
    title: "IDCAS — Intelligent Data Cleaning & Analysis System",
    description:
      "AI data cleaning platform using Statistical Meta Profile for privacy-safe LLM integration. Exports reproducible Jupyter Notebooks and Markdown audit reports.",
    image: "",
    tech: ["React", "FastAPI", "Python", "Pandas", "NumPy", "Llama 3", "Ollama"],
    github: "https://github.com/Sriramsiddartha/Project-IDCAS-",
    demo: "",
    category: "AI / ML",
  },
  {
    id: "eventplanner",
    title: "EventPlannerAI",
    description:
      "Full-stack AI-powered event planning platform built during Infosys Springboard internship. Features JWT authentication, bcrypt hashing, and role-based Admin/User dashboards.",
    image: "",
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/Sriramsiddartha",
    demo: "",
    category: "Full Stack",
  },
];

export const localCertificates: Certificate[] = [
  {
    id: "isro-ai",
    title: "AI in Geo Data Analysis",
    issuer: "ISRO",
    image: "/certificates/ISRO CARTIFIACTE 1.png",
    date: "2025",
  },
  {
    id: "aws-cloud",
    title: "AWS Course Completion",
    issuer: "Amazon Web Services",
    image: "/certificates/134_3_6079729_1730552312_AWS Course Completion Certificate.png",
    date: "2025",
  },
  {
    id: "cpa-cert",
    title: "Partner CPA Certificate",
    issuer: "Official Certification",
    image: "/certificates/SRIRAM SIDDARTHABANDARU-Partner CPA - Pr-certificate.png",
    date: "2025",
  },
  {
    id: "ml-intro",
    title: "Introduction to Machine Learning",
    issuer: "Certification Authority",
    image: "/certificates/Introduction to Machine Learning.png",
    date: "2024",
  },
  {
    id: "viswam-ai",
    title: "AI & Data Science Internship",
    issuer: "VISWAM.AI",
    image: "/certificates/WhatsApp Image 2026-03-19 at 8.50.45 PM.jpeg",
    date: "2025",
  }
];

export const localSiteContent: SiteContent = {
  id: "global",
  heroName: "Sriram Siddartha\nBandaru.",
  heroSubtitle: "Building intelligent systems for space, ML, and scalable software.\nCS undergrad @ BVRIT · CGPA 9.01 · Hyderabad, India.",
  aboutBio: [
    "I'm Sriram Siddartha Bandaru, a Computer Science undergraduate at BVRIT Hyderabad. I build things at the intersection of AI, space tech, and full-stack engineering.",
    "I'm drawn to hard problems — predicting solar storms, cleaning data with privacy-safe LLMs, or visualizing space events for everyday users. My goal is to engineer scalable systems that process massive datasets seamlessly."
  ]
};

export const localExperience: Experience[] = [
  {
    id: "exp-infosys",
    role: "Java Full Stack Intern",
    company: "Infosys Springboard",
    period: "Nov 2025 – Mar 2026",
    detail: "Built EventPlannerAI: JWT auth, bcrypt, role-based dashboards using Node.js + PostgreSQL.",
    projectsBuilt: [
      { name: "EventPlannerAI", url: "https://github.com/Sriramsiddartha/EventPlannerAI" }
    ],
    certificateImage: "/certificates/infosys_internship.png"
  },
  {
    id: "exp-viswam",
    role: "AI & Data Science Intern",
    company: "VISWAM.AI",
    period: "Jun 2025 – Jul 2025",
    detail: "Contributed to large-scale Indian language dataset for voice/NLP AI model training.",
    certificateImage: "/certificates/WhatsApp Image 2026-03-19 at 8.50.45 PM.jpeg"
  },
];

export const localEducation: Education[] = [
  {
    id: "edu-bvrit",
    degree: "B.Tech in Computer Science and Engineering",
    school: "B V Raju Institute of Technology",
    location: "Hyderabad, Telangana",
    classOf: "2027",
    cgpa: "9.01",
    details: "Relevant Coursework: Data Structures & Algorithms, Database Management Systems, Machine Learning, Cloud Computing."
  }
];

export const localHackathons: Hackathon[] = [
  {
    id: "hck-isro",
    title: "Bharatiya Anthariksh Hackathon",
    role: "Participant / Team Lead",
    date: "2024",
    description: "Developed a comprehensive solar storm visualization Dashboard using ISRO data to warn critical infra operators of impending space weather threats.",
    image: "/certificates/ISRO CARTIFIACTE 1.png",
  }
];
