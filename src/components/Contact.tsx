import { useState, type FormEvent } from "react";
import { Mail, Send, Check } from "lucide-react";
import Reveal from "./Reveal";
import { SOCIALS } from "../data/content";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to an actual form backend (e.g. Formspree, EmailJS) once ready.
    setSent(true);
  }

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-28 lg:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />

      <Reveal>
        <div className="text-center">
          <p className="mb-3 font-body text-sm text-cyan-400">Contact</p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-silver-50 sm:text-4xl">
            Let's build something together.
          </h2>
          <p className="mx-auto mt-4 max-w-lg font-body text-[15px] text-silver-300">
            Have an idea, opportunity, or project in mind? I'd love to hear about it.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass flex flex-col gap-5 rounded-2xl p-6 sm:p-8">
            <div>
              <label htmlFor="name" className="mb-2 block font-body text-sm text-silver-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-silver-50 outline-none transition-colors placeholder:text-silver-500 focus:border-violet-400/60"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block font-body text-sm text-silver-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@email.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-silver-50 outline-none transition-colors placeholder:text-silver-500 focus:border-violet-400/60"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block font-body text-sm text-silver-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your idea or opportunity..."
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 font-body text-sm text-silver-50 outline-none transition-colors placeholder:text-silver-500 focus:border-violet-400/60"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-electric-500 px-6 py-3.5 font-display text-sm font-medium text-white shadow-glow transition-transform duration-300 hover:scale-[1.015] disabled:opacity-70"
            >
              {sent ? (
                <>
                  <Check size={16} /> Message noted
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
            {sent && (
              <p className="text-center font-body text-xs text-silver-500">
                Form submission isn't connected to a backend yet — hook this up to an email or
                form service to receive messages.
              </p>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex h-full flex-col justify-between gap-10">
            {/* orbit visual */}
            <div className="relative mx-auto h-52 w-52 shrink-0 sm:h-60 sm:w-60">
              <div className="animate-spin-slow absolute inset-0 rounded-full border border-violet-500/25" />
              <div
                className="absolute inset-6 rounded-full border border-electric-500/20"
                style={{ animation: "spin 24s linear infinite reverse" }}
              />
              <div className="animate-float absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/30 to-electric-500/30 shadow-glow backdrop-blur-md">
                  <Mail size={26} className="text-silver-50" />
                </div>
              </div>
              <span className="absolute left-2 top-10 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_3px_rgba(34,211,238,0.6)]" />
              <span className="absolute bottom-6 right-4 h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_10px_3px_rgba(167,139,250,0.6)]" />
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${SOCIALS.email}`}
                className="glass flex items-center gap-3 rounded-xl px-5 py-4 font-body text-sm text-silver-100 transition-colors hover:bg-white/[0.06]"
              >
                <Mail size={18} className="text-violet-400" />
                {SOCIALS.email}
              </a>
              <a
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass flex items-center gap-3 rounded-xl px-5 py-4 font-body text-sm text-silver-100 transition-colors hover:bg-white/[0.06]"
              >
                <LinkedinIcon width={18} height={18} className="text-electric-400" />
                LinkedIn
              </a>
              <a
                href={SOCIALS.github}
                target="_blank"
                rel="noreferrer"
                className="glass flex items-center gap-3 rounded-xl px-5 py-4 font-body text-sm text-silver-100 transition-colors hover:bg-white/[0.06]"
              >
                <GithubIcon width={18} height={18} className="text-cyan-400" />
                GitHub
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
