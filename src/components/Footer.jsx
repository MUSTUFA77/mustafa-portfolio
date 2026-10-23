import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center font-mono text-xs text-zinc-600 sm:px-6 md:flex-row md:text-left">
        <p>
          <span className="text-term-400">$</span> © {new Date().getFullYear()} {profile.name} ·
          built with React, Tailwind &amp; Framer Motion
        </p>

        <motion.a
          href="#home"
          whileHover={{ y: -4 }}
          className="inline-flex items-center gap-2 rounded-md border border-white/10 px-4 py-2 text-zinc-400 transition-colors hover:border-term-400 hover:text-term-300"
        >
          cd ~ <ArrowUp size={14} />
        </motion.a>
      </div>
    </footer>
  );
}
