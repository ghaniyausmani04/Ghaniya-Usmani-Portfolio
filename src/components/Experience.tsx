import { Briefcase, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { EXPERIENCE } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-5xl px-6 py-28 lg:px-8">
      <Reveal>
        <p className="mb-3 font-body text-sm text-cyan-400">Journey</p>
        <h2 className="font-display text-3xl font-semibold leading-tight text-silver-50 sm:text-4xl">
          Experience &amp; journey
        </h2>
      </Reveal>

      <div className="relative mt-14 pl-8 sm:pl-10">
        <div className="absolute bottom-2 left-[13px] top-2 w-px bg-gradient-to-b from-violet-500/60 via-electric-500/40 to-transparent sm:left-[17px]" />

        <div className="flex flex-col gap-10">
          {EXPERIENCE.map((entry, i) => {
            const Icon = entry.placeholder ? Briefcase : Sparkles;
            return (
              <Reveal key={entry.kind} delay={i * 0.12}>
                <div className="relative">
                  <span className="absolute -left-8 top-1 flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-void-900 text-violet-400 shadow-glow sm:-left-10 sm:h-9 sm:w-9">
                    <Icon size={14} />
                  </span>
                  <div className="glass rounded-2xl p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display text-base font-medium text-silver-50">{entry.kind}</h3>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-silver-300">
                        {entry.period}
                      </span>
                    </div>
                    <p className="mt-1 font-body text-sm text-electric-400">{entry.org}</p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-silver-300">
                      {entry.description}
                    </p>
                    {entry.placeholder && (
                      <p className="mt-3 font-body text-xs italic text-silver-500">
                        Placeholder — replace with real details once available.
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
