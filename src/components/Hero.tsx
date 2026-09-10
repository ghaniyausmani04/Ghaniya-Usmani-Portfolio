import { motion, type Variants } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { lazy, Suspense } from "react";
import { SOCIALS } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { GithubIcon, LinkedinIcon } from "./icons";

const HeroScene = lazy(() => import("./HeroScene"));

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden pt-28 sm:pt-32"
    >
      {/* ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-10 h-[380px] w-[380px] rounded-full bg-electric-500/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="order-2 max-w-xl lg:order-1"
        >
          <motion.p
            variants={item}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-body text-sm text-silver-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]" />
            Hi, I'm Ghaniya Usmani.
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[2.6rem] font-semibold leading-[1.08] tracking-tight text-silver-50 sm:text-6xl lg:text-[3.4rem]"
          >
            Turning ideas into{" "}
            <span className="text-gradient">interactive digital experiences.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-lg font-body text-[15px] leading-relaxed text-silver-300 sm:text-base">
            I'm pursuing a Bachelor's in Computer Science with a passion for building modern
            digital experiences and solving real-world problems through technology. My interests
            span web and app development, AI/ML, and software engineering, with a long-term goal
            of becoming a versatile full-stack developer.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-electric-500 px-6 py-3.5 font-display text-sm font-medium text-white shadow-glow transition-transform duration-300 hover:scale-[1.03]"
            >
              Explore My Work
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-display text-sm font-medium text-silver-100 transition-colors duration-300 hover:bg-white/10"
            >
              Let's Connect
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-silver-500 transition-colors duration-300 hover:text-silver-50"
            >
              <GithubIcon width={20} height={20} />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-silver-500 transition-colors duration-300 hover:text-silver-50"
            >
              <LinkedinIcon width={20} height={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Right: 3D scene */}
        <div className="relative order-1 h-[340px] sm:h-[420px] lg:order-2 lg:h-[560px]">
          {!reduced ? (
            <Suspense fallback={<div className="h-full w-full animate-pulse rounded-3xl bg-white/[0.02]" />}>
              <HeroScene />
            </Suspense>
          ) : (
            <div className="flex h-full items-center justify-center">
              <div className="glass rounded-3xl px-10 py-16 text-center font-display text-silver-300">
                Interactive scene reduced for motion preference
              </div>
            </div>
          )}
        </div>
      </div>

      {/* scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 hidden flex-col items-center gap-2 sm:flex"
      >
        <span className="font-body text-xs uppercase tracking-[0.2em] text-silver-500">Scroll</span>
        <motion.div
          animate={reduced ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-silver-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
