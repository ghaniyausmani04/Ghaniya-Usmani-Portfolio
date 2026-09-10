import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { EDUCATION } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <Reveal>
        <p className="mb-3 font-body text-sm text-cyan-400">Education</p>
        <h2 className="font-display text-3xl font-semibold leading-tight text-silver-50 sm:text-4xl">
          Education
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="glass mt-12 grid grid-cols-1 items-center gap-10 rounded-3xl p-8 sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:p-14">
          <div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-violet-400">
              <GraduationCap size={22} />
            </div>
            <h3 className="font-display text-2xl font-medium text-silver-50 sm:text-[1.7rem]">
              {EDUCATION.degree}
            </h3>
            <p className="mt-2 font-body text-base text-silver-300">{EDUCATION.school}</p>
            <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-sm text-electric-400">
              {EDUCATION.period}
            </p>
          </div>

          {/* subtle 3D-styled education visual (pure CSS, no heavy GL cost) */}
          <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
            <div className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-violet-500/30" />
            <div className="absolute inset-4 rounded-full border border-electric-500/20" />
            <div className="animate-float absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 rotate-6 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-violet-500/20 to-electric-500/20 shadow-glow backdrop-blur-md sm:h-24 sm:w-24">
                <GraduationCap size={34} className="text-silver-100" />
              </div>
            </div>
            <div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_3px_rgba(34,211,238,0.6)]" />
            <div className="absolute bottom-4 left-0 h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_2px_rgba(167,139,250,0.6)]" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
