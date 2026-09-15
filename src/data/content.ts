export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const SOCIALS = {
  github: "https://github.com/ghaniyausmani04",
  linkedin: "https://www.linkedin.com/in/ghaniya-usmani-a51837291",
  email: "codein2nd@gmail.com",
};
export const ABOUT_CARDS = [
  {
    title: "Full-Stack Development",
    description:
      "Building complete, responsive web applications from frontend to backend.",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Exploring intelligent solutions and using data-driven approaches to solve problems.",
  },
  {
    title: "Web & App Development",
    description:
      "Creating modern, intuitive and user-focused digital experiences.",
  },
  {
    title: "Software Engineering",
    description:
      "Learning to design scalable, maintainable and reliable software.",
  },
  {
    title: "AI Engineer",
    description:
    "Building intelligent systems and custom AI solutions that automate, learn, and scale."
  }
];

export const SKILL_GROUPS = [
  {
    label: "Development",
    accent: "#5B8DFF",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Python", "Git & GitHub"],
  },
  {
    label: "AI / ML",
    accent: "#A78BFA",
    items: ["Python", "NumPy", "Pandas", "Scikit-learn", "Machine Learning", "Data Visualization"],
  },
  {
    label: "Backend & Database",
    accent: "#22D3EE",
    items: ["Node.js", "Express", "REST APIs", "SQL", "MongoDB"],
  },
  {
    label: "Currently Exploring",
    accent: "#F5F6FA",
    items: [
      "AI-powered applications",
      "Full-stack development",
      "Generative AI",
      "Advanced React",
      "3D Web Development",
    ],
  },
];

export type ProjectStatus = "Coming Soon" | "Currently Building" | "Completed";

export interface Project {
  index: string;
  title: string;
  status: ProjectStatus;
  description: string;
  tech: string[];
  url?: string;
  repoUrl?: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "AI Study Assistant",
    status: "Coming Soon",
    description:
      "An AI-powered study companion designed to help students understand notes, generate summaries, and interact with learning content.",
    tech: ["Python", "AI/ML", "React"],
  },
  {
    index: "02",
    title: "3D Developer Portfolio",
    status: "Completed",
    description:
      "An interactive personal portfolio designed as a futuristic 3D web experience combining modern frontend development, animation, and immersive visual design.",
    tech: ["React", "Three.js", "React Three Fiber", "GSAP"],
    url: "https://ghaniya-usmani-portfolio.vercel.app/",          
  repoUrl: "https://github.com/ghaniyausmani04/Ghaniya-Usmani-Portfolio",
  image: "/projects/portfolio-preview.png",
  },
  {
    index: "03",
    title: "Full-Stack Productivity App",
    status: "Coming Soon",
    description:
      "A modern productivity platform combining task management, analytics, authentication, and a clean user experience.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
];

export const EXPERIENCE = [
  {
    kind: "Internship / Experience",
    org: "to be added", 
    period: "year month", // 
    description:
      "Add internship responsibilities, achievements, technologies, and contributions here.",
    placeholder: true,
  },
  {
    kind: "Learning & Building",
    org: "Self-Directed",
    period: "Ongoing",
    description: "Web Development • AI/ML • Software Development",
    placeholder: false,
  },
];

export const EDUCATION = {
  degree: "Bachelor's of Science in Computer Science",
  school: "Iqra University", 
  period: "2023 — Present", 
};
