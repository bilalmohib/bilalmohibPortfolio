export const profile = {
  name: "Bilal Mohib",
  fullName: "Muhammad Bilal Mohib",
  initials: "BM",
  location: "Lahore, Pakistan",
  rate: "$15.00/hr",
  rating: "5.0",
  reviews: 24,
  jobSuccess: "100%",
  jobsCompleted: "53",
  publicRepos: "218",
  githubFollowers: "178",
  avatar: "/avatar.jpg",
  github: "https://github.com/bilalmohib",
  linkedin: "https://www.linkedin.com/in/bilalmohib",
  upwork: "https://www.upwork.com/freelancers/bilalmohib",
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Open Source", href: "/open-source" },
  { label: "Services", href: "/services" },
];

export const stats = [
  { value: "100%", label: "Job Success", icon: "CircleCheck" },
  { value: "53", label: "Jobs Completed", icon: "TrendingUp" },
  { value: "218", label: "Public Repos", icon: "Github" },
  { value: "178", label: "GitHub Followers", icon: "Star" },
] as const;

export const skills = [
  {
    icon: "CodeXml",
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Material UI"],
  },
  {
    icon: "Database",
    title: "Backend & Data",
    items: ["Node.js", "PostgreSQL", "Supabase", "Firebase", "Firestore", "Redis"],
  },
  {
    icon: "Cloud",
    title: "DevOps & Infra",
    items: ["Vercel", "AWS Amplify", "CI/CD", "Docker", "SSR / ISR"],
  },
  {
    icon: "Smartphone",
    title: "Mobile & Other",
    items: ["React Native", "Electron", "Stripe Billing", "SEO", "NestJS"],
  },
] as const;

export type Project = {
  slug: string;
  title: string;
  client: string;
  rating: number;
  period: string;
  stack: string[];
  summary: string;
  url: string | null;
  featured?: boolean;
  preview?: string;
  role?: string;
  problem?: string;
  solution?: string;
  outcome?: string;
  highlights?: string[];
};

export const work: Project[] = [
  {
    slug: "beyond-intelligence",
    title: "Beyond Intelligence — ATLAS® Marketing Site + Signup Flows",
    client: "Environmental Intelligence SaaS",
    rating: 5,
    period: "2024 — 2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "API Integration", "LCP / SEO"],
    summary:
      "Production marketing site and conversion flows for ATLAS®, a regulator-safe environmental-health risk signal used by insurance portfolios.",
    url: "https://www.beyondintelligence.ai/",
    featured: true,
    preview: "/projects/beyond-intelligence.jpg",
    role: "Full-stack frontend — marketing site, product pages, and signup flows",
    problem:
      "A complex B2B insurance product needed a cinematic, high-trust site that could explain ATLAS®, convert enterprise visitors, and stay fast under real traffic.",
    solution:
      "Shipped a Next.js + TypeScript site with multi-step signup, conversion-first product pages, and LCP-optimized media so the story loads instantly.",
    outcome:
      "A live, investor-grade site at beyondintelligence.ai — the first thing prospects see before a validation call.",
    highlights: [
      "Cinematic ATLAS® product narrative with high-resolution media",
      "Multi-step signup and Calendly conversion paths",
      "Core Web Vitals / LCP work so the hero stays instant",
      "Responsive, accessible UI across every breakpoint",
    ],
  },
  {
    slug: "smartlyq",
    title: "SmartlyQ — All-in-one AI Marketing Platform",
    client: "SmartlyQ",
    rating: 5,
    period: "2025 — 2026",
    stack: ["Next.js", "TypeScript", "AI APIs", "Dashboards", "Stripe Billing"],
    summary:
      "Live SaaS marketing platform that replaces an entire tool stack — copy, design, video, social, CRM, and ads — with one workspace and an AI operator.",
    url: "https://smartlyq.com/",
    featured: true,
    preview: "/projects/smartlyq.jpg",
    role: "Product engineering — marketing site, app surfaces, and conversion UX",
    problem:
      "Marketers were paying €800+/month across eight tools. SmartlyQ needed a sharp public site and product experience that proves the all-in-one story in seconds.",
    solution:
      "Built a high-converting Next.js frontend with a live product preview, clear pricing story, and a workspace that feels like a real operator dashboard.",
    outcome:
      "A production site at smartlyq.com that sells the platform on sight — hero, product UI, and get-started path in one scroll.",
    highlights: [
      "Hero that states the offer: replace €843/month with one platform",
      "Live product UI preview (publishing, AI Captain, metrics)",
      "Signup and demo conversion built into the first screen",
      "Trusted-by social proof and a 30-day guarantee path",
    ],
  },
  {
    slug: "half-byte",
    title: "Half Byte — Bilingual Website from Figma",
    client: "Bilingual Content Platform",
    rating: 5,
    period: "2025",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
    summary:
      "Pixel-perfect, internationalized website built directly from Figma designs with full responsive coverage and accessibility.",
    url: null,
  },
  {
    slug: "poem-generator",
    title: "Poem Generator SaaS",
    client: "Subscription Content Platform",
    rating: 5,
    period: "Jul — Nov 2024",
    stack: ["Next.js", "JavaScript", "Stripe", "API"],
    summary:
      "Subscription-based poem generator with Stripe billing integration, end-to-end build from concept to production.",
    url: null,
  },
  {
    slug: "saas-seo-content",
    title: "React + Next.js Developer (SaaS SEO Content)",
    client: "SaaS Marketing Team",
    rating: 5,
    period: "Aug 2025 — Jan 2026",
    stack: ["React", "Next.js", "On-Page SEO", "Ahrefs", "Landing Pages"],
    summary:
      "Long-term engagement building SEO-optimized landing pages and content systems with technical SEO and keyword research.",
    url: null,
  },
  {
    slug: "startup-website",
    title: "Startup Website Development",
    client: "Early-Stage Startup",
    rating: 5,
    period: "Mar — May 2026",
    stack: ["JavaScript", "WordPress", "CSS", "Web Design"],
    summary:
      "Full-stack website development for a startup — professional, responsive, and ready for real users.",
    url: null,
  },
  {
    slug: "firebase-auth-debugging",
    title: "Firebase Auth Debugging (Next.js)",
    client: "Next.js Web App",
    rating: 5,
    period: "Apr 2025",
    stack: ["React", "Next.js", "Firebase", "Node.js", "Vue.js"],
    summary:
      "Troubleshot and debugged complex Firebase authentication issues in a production Next.js application.",
    url: null,
  },
  {
    slug: "remote-browser",
    title: "Secure Remote-Browser App (Electron/Node)",
    client: "Desktop Security Tool",
    rating: 3,
    period: "Jun — Nov 2025",
    stack: ["Electron", "Node.js", "React", "JavaScript"],
    summary:
      "Created a secure remote-browser application using Electron and Node.js with a React frontend.",
    url: null,
  },
  {
    slug: "rsbuild-migration",
    title: "React Migration to Rsbuild",
    client: "Existing Web App",
    rating: 5,
    period: "Oct — Nov 2025",
    stack: ["React", "Rsbuild", "CI/CD", "Legacy Migration"],
    summary:
      "Migrated a React web app frontend to Rsbuild and upgraded legacy libraries with a clean CI/CD pipeline.",
    url: null,
  },
];

export const featuredWork = work.filter((project) => project.featured);

export function getProject(slug: string) {
  return work.find((project) => project.slug === slug);
}

export const services = [
  {
    icon: "Layers",
    title: "Full-Stack Architecture",
    desc: "End-to-end system design — from data modeling to deployment. Clean, layered architecture that scales with product growth instead of breaking under it.",
    points: ["Next.js + TypeScript", "Supabase / Postgres", "API design", "Data modeling"],
  },
  {
    icon: "Zap",
    title: "Performance & SEO",
    desc: "LCP optimization, lazy-loaded sections, SSR-friendly structure, and technical SEO. Software that ships fast and stays fast under real load.",
    points: ["SSR / ISR", "Core Web Vitals", "On-page SEO", "Vercel deployment"],
  },
  {
    icon: "Shield",
    title: "Billing & Auth",
    desc: "Stripe integration done correctly — subscriptions, one-time payments, and webhooks. Firebase/Supabase auth flows including multi-factor authentication.",
    points: ["Stripe subscriptions", "Firebase Auth", "MFA", "Webhook handling"],
  },
  {
    icon: "Search",
    title: "Frontend Engineering",
    desc: "Pixel-perfect, performant interfaces built from Figma designs. Responsive across every breakpoint, cross-browser polished, accessible by default.",
    points: ["React / Vue", "React Native", "Material UI", "Tailwind CSS"],
  },
] as const;

export const projectTypes = [
  "Web Platform",
  "SaaS Product",
  "Mobile App",
  "Frontend System",
  "Full-Stack Build",
  "Other",
] as const;

export const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  "C++": "#f34b7d",
  CSS: "#563d7c",
  Shell: "#89e051",
};

export type Repo = {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
  homepage?: string;
  updated_at?: string;
};

export const fallbackRepos: Repo[] = [
  {
    name: "ProgrammingBooks",
    description: "Repository contains books related to programming",
    language: null,
    stargazers_count: 54,
    forks_count: 14,
    html_url: "https://github.com/bilalmohib/ProgrammingBooks",
    updated_at: "2026-09-08",
  },
  {
    name: "React-JS-Alumtec-Website",
    description:
      "Company website with responsive design. Collects contact form data and shows it in the admin panel.",
    language: "JavaScript",
    stargazers_count: 11,
    forks_count: 1,
    html_url: "https://github.com/bilalmohib/React-JS-Alumtec-Website",
    homepage: "https://alumtec.ca/",
  },
  {
    name: "TaskEncher",
    description: "Project management tool to enhance productivity and increase performance.",
    language: "TypeScript",
    stargazers_count: 6,
    forks_count: 0,
    html_url: "https://github.com/bilalmohib/TaskEncher",
    homepage: "https://streak-task-encher.vercel.app/",
  },
  {
    name: "ShaurEducationalComplex",
    description:
      "School website with a dynamic quiz portal for remote exams and automatic results using Firebase.",
    language: "HTML",
    stargazers_count: 8,
    forks_count: 1,
    html_url: "https://github.com/bilalmohib/ShaurEducationalComplex",
    homepage: "https://shaureducationalcomplex.website/",
  },
  {
    name: "AlumTecRedesign",
    description:
      "Aluminium curtain wall, windows and doors company. Construction services.",
    language: "TypeScript",
    stargazers_count: 4,
    forks_count: 1,
    html_url: "https://github.com/bilalmohib/AlumTecRedesign",
    homepage: "https://www.alumtec.ca/",
  },
  {
    name: "NextJS-RedisDatabaseProjects",
    description: "Projects built with Next.js and Redis database performing CRUD operations.",
    language: "JavaScript",
    stargazers_count: 4,
    forks_count: 2,
    html_url: "https://github.com/bilalmohib/NextJS-RedisDatabaseProjects",
  },
  {
    name: "RDP-in-python",
    description: "A remote desktop application in Python.",
    language: "Python",
    stargazers_count: 4,
    forks_count: 5,
    html_url: "https://github.com/bilalmohib/RDP-in-python",
  },
  {
    name: "olx-clone",
    description:
      "OLX clone using React. Users can post ads, create accounts, search and categorize.",
    language: "JavaScript",
    stargazers_count: 3,
    forks_count: 4,
    html_url: "https://github.com/bilalmohib/olx-clone",
    homepage: "https://fastsellat.web.app/",
  },
];

export async function fetchGithubRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/bilalmohib/repos?sort=updated&per_page=100&type=owner",
      { headers: { Accept: "application/vnd.github+json" } },
    );
    if (!res.ok) throw new Error("rate-limited");
    const data = (await res.json()) as Array<Repo & { fork?: boolean }>;
    return data
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 8)
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        html_url: repo.html_url,
        homepage: repo.homepage,
      }));
  } catch {
    return fallbackRepos;
  }
}
