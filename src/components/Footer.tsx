import { NAV_LINKS, SOCIALS } from "../data/content";
import guMark from "../assets/gu-mark.png";
import { GithubIcon, LinkedinIcon } from "./icons";

const FOOTER_LINKS = NAV_LINKS.filter((l) => l.label !== "Education");

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-14 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center">
        <div className="flex items-center gap-2.5">
          <img src={guMark} alt="GU logo" className="h-7 w-auto opacity-90" />
          <span className="font-display text-sm font-medium text-silver-100">GU — Ghaniya Usmani</span>
        </div>

        <p className="font-display text-xs tracking-[0.15em] text-silver-500">
          Building ideas <span className="text-violet-400">✦</span> Coded for tomorrow
        </p>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {FOOTER_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-body text-sm text-silver-500 transition-colors hover:text-silver-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-silver-500 transition-colors hover:text-silver-50"
          >
            <GithubIcon width={18} height={18} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-silver-500 transition-colors hover:text-silver-50"
          >
            <LinkedinIcon width={18} height={18} />
          </a>
        </div>

        <p className="font-body text-xs text-silver-500">© 2026 Ghaniya Usmani</p>
      </div>
    </footer>
  );
}
