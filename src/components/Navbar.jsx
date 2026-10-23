import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { sections } from "../data/sections";
import { profile } from "../data/portfolio";

const navLinks = sections.filter((s) => s.nav);

export default function Navbar({ onOpenPalette }) {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-black/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-term-400 shadow-[0_0_12px_rgba(74,222,128,0.9)]"
      />

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-mono text-sm text-white">
          <span className="text-term-400">{profile.firstName.toLowerCase()}</span>
          <span className="text-zinc-500">@dev</span>
          <span className="text-zinc-500">:~$</span>
          <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-term-400" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative rounded-md px-3 py-2 font-mono text-xs transition-colors ${
                  active === l.id ? "text-term-300" : "text-zinc-500 hover:text-white"
                }`}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-md bg-term-500/10 ring-1 ring-term-500/30"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                ~/{l.id}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={onOpenPalette}
            className="hidden items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 font-mono text-xs text-zinc-400 transition-colors hover:border-term-400 hover:text-term-300 md:inline-flex"
          >
            <Command size={12} /> Ctrl K
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-black/95 lg:hidden"
          >
            <ul className="flex flex-col px-4 py-3 sm:px-6">
              {sections.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block rounded-md px-3 py-3 font-mono text-sm ${
                      active === l.id ? "bg-term-500/10 text-term-300" : "text-zinc-400"
                    }`}
                  >
                    ~/{l.id}
                  </a>
                </motion.li>
              ))}
              <li className="mt-2 border-t border-white/10 pt-2 md:hidden">
                <button
                  onClick={() => {
                    setOpen(false);
                    onOpenPalette();
                  }}
                  className="flex w-full items-center gap-2 rounded-md px-3 py-3 text-left font-mono text-sm text-zinc-400 transition-colors hover:bg-term-500/10 hover:text-term-300"
                >
                  <Command size={15} />
                  Search commands
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
