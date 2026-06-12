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

export interface CodingProfile {
  id: string;
  platform: string;
  handle: string;
  stats: string;
  link: string;
}

export const localProjects: Project[] = [
  {
    id: "easycmd",
    title: "EasyCMD - AI PowerShell Wrapper",
    description:
      "An intelligent wrapper around Windows PowerShell that translates natural language requests into executable commands using a local Large Language Model (Ollama). Features built-in security guardrails to prevent destructive actions and real-time execution streaming.",
    image: "",
    tech: ["Python", "Ollama", "PowerShell", "LLMs", "Rich CLI"],
    github: "https://github.com/Sriramsiddartha",
    demo: "",
    category: "AI / Tooling",
  },
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
    issuer: "Kaggle",
    image: "/certificates/Introduction to Machine Learning.png",
    date: "2024",
  },
  {
    id: "gen-ai",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    image: "/certificates/CertificateOfCompletion_Career Essentials in Generative AI by Microsoft and LinkedIn.png",
    date: "2025",
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
    role: "AI and Data Science Intern",
    company: "VISWAM.AI (Swecha)",
    period: "June 2025 - July 2025",
    detail: "Contributed to building a large scale Indian language dataset corpus for voice and NLP based AI model training and assisted in data collection, annotation, and quality validation.",
    certificateImage: "/certificates/swecha.png"
  },
];

export const localDSAExperience: Experience[] = [
  {
    id: "exp-smartinterviews",
    role: "DSA Student",
    company: "SmartInterviews",
    period: "2+ Years",
    detail: "Underwent rigorous 2+ years of training in Data Structures and Algorithms. Solved hundreds of problems, optimizing code for time and space complexity, and participated in internal coding contests.",
  },
  {
    id: "exp-gradious",
    role: "DSA Student",
    company: "Gradious",
    period: "1 Year",
    detail: "1 year of intensive training on the Gradious DSA platform. Focused on problem-solving techniques, algorithmic thinking, and competitive programming fundamentals.",
  }
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
  },
  {
    id: "hck-adobe",
    title: "Adobe Hackathon",
    role: "Participant",
    date: "2025",
    description: "Participated in the Adobe hackathon challenge.",
    image: "/certificates/Adobe.png",
  },
  {
    id: "hck-hp",
    title: "HP Hackathon",
    role: "Participant",
    date: "2025",
    description: "Participated in the HP hackathon event.",
    image: "/certificates/Hp Hackathon.png",
  },
  {
    id: "hck-loreal",
    title: "L'Oréal Brandstorm",
    role: "Participant",
    date: "2025",
    description: "Participated in the L'Oréal innovation challenge.",
    image: "/certificates/Loreal.png",
  },
  {
    id: "hck-codedulz",
    title: "CodeDulz Hackathon",
    role: "Participant",
    date: "2025",
    description: "Competed in the CodeDulz coding challenge.",
    image: "/certificates/codedulz.png",
  },
  {
    id: "hck-hackfinity",
    title: "HackFinity",
    role: "Participant",
    date: "2025",
    description: "Built innovative solutions during the HackFinity hackathon.",
    image: "/certificates/hackfinty.png",
  },
  {
    id: "hck-national-space",
    title: "National Space Hackathon",
    role: "Participant",
    date: "2025",
    description: "Developed space-tech solutions for the National Space Hackathon.",
    image: "/certificates/national space hackathon.png",
  },
  {
    id: "hck-tata",
    title: "Tata Imagination Challenge",
    role: "Participant",
    date: "2025",
    description: "Participated in the Tata Imagination Challenge.",
    image: "/certificates/tata imagnation challange.png",
  }
];

export const localCodingProfiles: CodingProfile[] = [
  {
    id: "cp-leetcode",
    platform: "LeetCode",
    handle: "Sriramsiddartha",
    stats: "Solved numerous problems",
    link: "https://leetcode.com/u/Sriramsiddartha/",
  },
  {
    id: "cp-codechef",
    platform: "CodeChef",
    handle: "Sriramsiddartha",
    stats: "Active participant",
    link: "https://www.codechef.com/users/Sriramsiddartha",
  },
  {
    id: "cp-hackerrank",
    platform: "HackerRank",
    handle: "Sriramsiddartha",
    stats: "Multiple badges",
    link: "https://www.hackerrank.com/profile/Sriramsiddartha",
  },
  {
    id: "cp-codeforces",
    platform: "Codeforces",
    handle: "Sriramsiddartha",
    stats: "Competitive programmer",
    link: "https://codeforces.com/profile/Sriramsiddartha",
  }
];
