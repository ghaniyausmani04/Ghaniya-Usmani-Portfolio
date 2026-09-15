import { useRef, type MouseEvent } from "react";
import { Code2, BrainCircuit, Layers, Cpu, Bot } from "lucide-react";
import Reveal from "./Reveal";
import { ABOUT_CARDS } from "../data/content";

const ICONS = [Code2, BrainCircuit, Layers, Cpu, Bot];

function TiltCard({ title, description, Icon }: { title: string; description: string; Icon: typeof Code2 }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;
    card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
  }

  function handleLeave() {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="glass group relative overflow-hidden rounded-2xl p-6 transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:shadow-glow sm:p-7"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-violet-500/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-violet-400">
        <Icon size={20} />
      </div>
      <h3 className="mb-2 font-display text-lg font-medium text-silver-50">{title}</h3>
      <p className="font-body text-sm leading-relaxed text-silver-300">{description}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <Reveal>
        <p className="mb-3 font-body text-sm text-cyan-400">About</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-silver-50 sm:text-4xl">
          Building with code. Creating with purpose.
        </h2>
        <p className="mt-5 max-w-2xl font-body text-[15px] leading-relaxed text-silver-300">
          I'm pursuing a Bachelor's in Computer Science with a passion for building modern digital
          experiences and solving real-world problems through technology. My interests span web
          and app development, AI/ML, and software engineering, with a long-term goal of becoming
          a versatile full-stack developer.
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {ABOUT_CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08}>
            <TiltCard title={card.title} description={card.description} Icon={ICONS[i]} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
