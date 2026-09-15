import { useRef, type MouseEvent } from "react";
import { Hammer, Clock, ExternalLink } from "lucide-react"; 
import Reveal from "./Reveal";
import { PROJECTS, type Project } from "../data/content";
import { GithubIcon } from "./icons"; 

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const isBuilding = project.status === "Currently Building";

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -6;
    const rotateY = ((x - rect.width / 2) / rect.width) * 6;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(4px)`;
  }

  function handleLeave() {
    if (ref.current) ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="glass group flex flex-col overflow-hidden rounded-2xl transition-[box-shadow] duration-300 hover:shadow-glow"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* preview area */}
<div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-white/5 bg-gradient-to-br from-void-800 to-void-900">
  {project.image ? (
    <img
      src={project.image}
      alt={`${project.title} preview`}
      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
    />
  ) : (
    <>
      <div className="absolute inset-0 bg-grid-glow opacity-60" />
      <span className="font-display text-5xl font-semibold text-white/[0.06]">{project.index}</span>
    </>
  )}
        <div
          className={`absolute right-3 top-3 flex items-center gap-1.5 rounded-full border px-3 py-1 font-body text-xs font-medium backdrop-blur-md ${
            isBuilding
              ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-300"
              : "border-white/15 bg-white/5 text-silver-300"
          }`}
        >
          {isBuilding ? <Hammer size={12} /> : <Clock size={12} />}
          {project.status}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-medium text-silver-50">{project.title}</h3>
        <p className="mt-2.5 flex-1 font-body text-sm leading-relaxed text-silver-300">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-silver-300"
            >
              {t}
            </span>
          ))}
        </div>

{(project.url || project.repoUrl) && (
  <div className="mt-5 flex items-center gap-4 border-t border-white/5 pt-4">
    {project.url && (
      <a
      href={project.url}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 font-body text-sm text-electric-400 transition-colors hover:text-electric-500"
      >
        <ExternalLink size={14} /> Live demo
      </a>
    )}
    {project.repoUrl && (
      <a
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 font-body text-sm text-silver-300 transition-colors hover:text-silver-50"
      >
        <GithubIcon width={14} height={14} /> Code
      </a>
    )}
  </div>
)}
        
        </div>
    </div>
  );
}



export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <Reveal>
        <p className="mb-3 font-body text-sm text-cyan-400">Projects</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-silver-50 sm:text-4xl">
          Things I'm building
        </h2>
        <p className="mt-4 max-w-xl font-body text-[15px] text-silver-300">
          A collection of ideas, experiments, and digital experiences I'm building and exploring.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
