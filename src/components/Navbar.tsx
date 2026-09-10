import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";
import guMark from "../assets/gu-mark.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "border-white/10 bg-void-900/80 shadow-glow backdrop-blur-xl"
            : "border-white/5 bg-void-900/30 backdrop-blur-md"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5">
          <img src={guMark} alt="GU logo" className="h-8 w-auto drop-shadow-[0_0_14px_rgba(139,92,246,0.55)]" />
          <span className="hidden font-display text-sm font-medium tracking-wide text-silver-100 sm:inline">
            Ghaniya Usmani
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3.5 py-2 font-body text-sm text-silver-300 transition-colors duration-200 hover:bg-white/5 hover:text-silver-50"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-electric-500 px-5 py-2.5 font-display text-sm font-medium text-white shadow-glow transition-transform duration-300 hover:scale-[1.03]"
          >
            Let's Connect
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="rounded-lg p-2 text-silver-100 lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute inset-x-4 top-[74px] z-40 rounded-2xl border border-white/10 bg-void-900/95 p-4 shadow-glow backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block rounded-xl px-4 py-3 font-body text-[15px] text-silver-300 transition-colors hover:bg-white/5 hover:text-silver-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="mt-2 flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 to-electric-500 px-5 py-3 font-display text-sm font-medium text-white"
            >
              Let's Connect
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
