import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";
import { SKILL_GROUPS } from "../data/content";

export default function Skills() {
  const [active, setActive] = useState(0);
  const group = SKILL_GROUPS[active];

  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[320px] w-[320px] rounded-full bg-electric-500/10 blur-[100px]" />

      <Reveal>
        <p className="mb-3 font-body text-sm text-cyan-400">Skills</p>
        <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight text-silver-50 sm:text-4xl">
          Technologies I work with
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-wrap gap-2">
          {SKILL_GROUPS.map((g, i) => (
            <button
              key={g.label}
              onClick={() => setActive(i)}
              className={`relative rounded-full border px-4 py-2 font-display text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "border-white/20 bg-white/10 text-silver-50"
                  : "border-white/5 text-silver-500 hover:border-white/10 hover:text-silver-300"
              }`}
            >
              {active === i && (
                <span
                  className="absolute inset-0 -z-10 rounded-full opacity-30 blur-md"
                  style={{ background: g.accent }}
                />
              )}
              {g.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="glass relative mt-6 min-h-[220px] rounded-2xl p-6 sm:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="flex flex-wrap gap-3"
          >
            {group.items.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.3 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 font-body text-sm text-silver-100 transition-colors duration-300 hover:border-white/20"
                style={{ boxShadow: `0 0 0 1px transparent` }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 22px -6px ${group.accent}99`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 1px transparent")}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-5 font-body text-sm text-silver-500">
        Skills reflect areas of active learning and hands-on practice, not expert-level mastery.
      </p>
    </section>
  );
}
