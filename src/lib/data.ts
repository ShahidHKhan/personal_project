export const PROFILE = {
  name: "Shahid Khan",
  tagline: "CS student building RAG systems, LLM tools, and ML pipelines",
  location: "New York, USA",
  focus:
    "Currently an IT Technician at SUNY New Paltz, where the AI tools I built are part of the service desk's daily workflow.",
  about:
    "Computer Science student at SUNY New Paltz (B.S., GPA 3.4, expected May 2027). I focus on applied AI engineering: retrieval-augmented generation, LLM evaluation, fine-tuning, and turning models into tools real teams use every day. Google Cloud Generative AI Leader certified, 1st place at the 2026 New Paltz Hackathon, and President of the Muslim Student Association.",
  links: {
    github: "https://github.com/ShahidHKhan",
    linkedin: "https://www.linkedin.com/in/shahid-h-khan",
    email: "shahidhkhan.dev@gmail.com",
    phone: "315-746-1247",
    resume: "/Shahid_Khan_Resume.pdf",
  },
} as const;

export function buildEmailLink(
  to: string,
  subject = "Inquiry from your portfolio",
  body = "Hi Shahid, I saw your portfolio and…"
) {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    to
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export type ExperienceItem = {
  role: string;
  org: string;
  orgNote?: string;
  time: string;
  location: string;
  bullets: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Information Technology Technician",
    org: "SUNY New Paltz",
    time: "Aug 2025 – Present",
    location: "New Paltz, NY",
    bullets: [
      "Resolved ~30 tickets per week for 100+ users by troubleshooting hardware and software issues in TeamDynamix",
      "Secured campus user access by managing accounts, permissions, and password resets in Microsoft Azure",
      "Prepared new laptops and devices for day-one use by imaging, configuring, and deploying them to faculty and staff",
      "Restored Wi-Fi, printer, and classroom AV service by diagnosing connectivity and hardware issues on-site",
    ],
  },
  {
    role: "AI Engineer Intern",
    org: "SUNY New Paltz",
    time: "Jun 2026 – Aug 2026",
    location: "New Paltz, NY",
    bullets: [
      "Cut resolution time on difficult tickets by 30% by designing and deploying HawkEye, an LLM-powered RAG assistant",
      "Halved schedule generation time (4 weeks to 2) by building Desk-Scheduler, an LLM and constraint-solver pipeline",
      "Improved HawkEye's retrieval quality by 25% by benchmarking two embedding designs and shipping the stronger one",
      "Drove adoption across a 20-person IT office (2–3 uses per day) by tracking usage, applying feedback, and cutting latency and cost",
    ],
  },
  {
    role: "AI Quality Engineer Intern",
    org: "GridDevs",
    time: "Sep 2025 – Dec 2025",
    location: "Remote",
    bullets: [
      "Identified the most reliable retrieval configuration for a RAG system, as measured by MRR, nDCG, and keyword coverage, by benchmarking multiple embedding models and LLMs against each other",
      "Assessed LangChain-based versus native code implementations of the RAG pipeline against performance, stability, and maintainability criteria to inform quality decisions",
      "Built automated Gradle test suites to validate data workflows and catch regressions across pipeline iterations",
    ],
  },
];

export type ProjectItem = {
  title: string;
  tagline: string;
  tech: string[];
  links: { label: string; href: string }[];
  github?: { owner: string; repo: string };
  pypi?: string;
};

export const PROJECTS: ProjectItem[] = [
  {
    title: "HawkEye",
    tagline:
      "RAG assistant for SUNY New Paltz's IT help desk that answers technician questions from an 850+ article knowledge base with cited sources. Multi-stage retrieval (query expansion, source merging, LLM reranking) evaluated with MRR and nDCG, a vector store migrated from ChromaDB to Postgres/pgvector on Supabase (4,000+ chunks re-embedded), and a weekly GitHub Actions pipeline that re-embeds only changed articles, with a circuit breaker against mass deletions. Cut resolution time on difficult tickets by 30%.",
    tech: ["Python", "LangChain", "Gemini API", "PostgreSQL/pgvector", "Supabase", "Gradio", "Docker", "GitHub Actions"],
    links: [{ label: "Code", href: "https://github.com/ShahidHKhan/HawkEye" }],
    github: { owner: "ShahidHKhan", repo: "HawkEye" },
  },
  {
    title: "AutoPricer",
    tagline:
      "Chrome extension that flags mispriced used cars in real time. Trained on 500K used-car listings: a tuned XGBoost model cut baseline MAE by 71% ($9,781 → $2,799), a QLoRA fine-tuned Llama-3.2-3B cut its own error by 63% on a free Colab T4 GPU, and a multi-agent ensemble with RAG-augmented Gemini over 300K ChromaDB embeddings reduced MAE another 25% ($1,599 → $1,202). Served as a streaming FastAPI service on Modal serverless GPUs.",
    tech: ["Python", "PyTorch", "Hugging Face", "XGBoost", "FastAPI", "Modal", "ChromaDB"],
    links: [{ label: "Code", href: "https://github.com/ShahidHKhan/AutoPricer" }],
    github: { owner: "ShahidHKhan", repo: "AutoPricer" },
  },
  {
    title: "Desk-Scheduler",
    tagline:
      "Automates the IT service desk's semester work schedule. A LangGraph workflow uses the Gemini API to extract availability from messy PDFs, spreadsheets, and photos, then Google OR-Tools (CP-SAT) builds the schedule under 6 hard rules, keeping LLM parsing separate from provable assignment logic. Verified by a 16-test pytest suite, with infeasibility diagnosis and an LLM-as-a-judge that fact-checks explanations against solver data. Cut schedule creation from 4 weeks to 2.",
    tech: ["Python", "LangGraph", "Gemini API", "OR-Tools", "Streamlit", "SQLite", "Docker"],
    links: [{ label: "Code", href: "https://github.com/ShahidHKhan/scheduler" }],
    github: { owner: "ShahidHKhan", repo: "scheduler" },
  },
  {
    title: "Chamble",
    tagline:
      "Chess + gamble: a real-time multiplayer chess platform with three variants. Win a blackjack hand to keep a capture (Chess-21), solve a math challenge to capture (Chess-Matics), or move only the piece a roulette wheel lands on (Chess-Roulette). Real-time play over Socket.IO with ELO wagers, move timers, and room-code invites, plus custom bcrypt + JWT auth with email verification. React frontend on Cloudflare Pages, Express backend on Fly.io, Postgres on Supabase.",
    tech: ["React", "TypeScript", "Socket.IO", "Express", "Supabase", "Fly.io"],
    links: [
      { label: "Code", href: "https://github.com/ShahidHKhan/Chamble" },
      { label: "Live", href: "https://chamble.net" },
    ],
    github: { owner: "ShahidHKhan", repo: "Chamble" },
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "AI & LLM Engineering",
    items: [
      "RAG",
      "Reranking",
      "LangChain",
      "LangGraph",
      "Agents / Tool Calling",
      "Pydantic",
      "LLM-as-a-Judge Evals",
      "Gemini API",
    ],
  },
  {
    title: "Machine Learning",
    items: [
      "PyTorch",
      "Hugging Face (TRL, QLoRA)",
      "scikit-learn",
      "XGBoost",
      "Weights & Biases",
      "Google OR-Tools",
    ],
  },
  {
    title: "Web & Backend",
    items: ["React", "Node.js", "Express", "FastAPI", "Socket.IO", "Streamlit", "Gradio", "REST APIs"],
  },
  {
    title: "Databases & Deployment",
    items: [
      "PostgreSQL (pgvector)",
      "Supabase",
      "SQLite",
      "ChromaDB",
      "Docker",
      "Modal",
      "Fly.io",
      "Cloudflare",
      "GitHub Actions",
      "Git",
      "Microsoft Azure",
    ],
  },
];

export type EducationItem = {
  school: string;
  degree: string;
  gpa: string;
  time: string;
};

export const EDUCATION: EducationItem[] = [
  {
    school: "SUNY New Paltz",
    degree: "B.S. in Computer Science",
    gpa: "3.4",
    time: "Aug 2023 – May 2027",
  },
];

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;
