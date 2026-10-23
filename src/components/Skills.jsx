import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skillGroups } from "../data/portfolio";

/** Interactive "file explorer": pick a category, see its stack. */
export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active);

  return (
    <section id="skills" className="section">
      <SectionHeading
        index="02"
        path="skills"
        title="Technical skills"
        subtitle="Browse my stack by category."
      />

      <Reveal>
        <div className="grid gap-5 md:grid-cols-[260px_1fr]">
          {/* categories */}
          <div className="panel flex gap-1 overflow-x-auto p-2 md:flex-col md:overflow-visible">
            {skillGroups.map((g) => {
              const isActive = g.id === active;
              return (
                <button
                  key={g.id}
                  onClick={() => setActive(g.id)}
                  className={`relative flex shrink-0 items-center gap-3 rounded-lg px-4 py-3 text-left text-sm transition-colors ${
                    isActive ? "text-white" : "text-zinc-500 hover:text-zinc-200"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="skill-active"
                      className="absolute inset-0 rounded-lg bg-term-500/10 ring-1 ring-term-500/30"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <g.icon size={16} className={`relative ${isActive ? "text-term-400" : ""}`} />
                  <span className="relative whitespace-nowrap">{g.title}</span>
                  <span className="relative ml-auto hidden font-mono text-xs text-zinc-600 md:block">
                    {g.items.length}
                  </span>
                </button>
              );
            })}
          </div>

          {/* contents */}
          <div className="panel min-h-[320px] overflow-hidden">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3 font-mono text-xs text-zinc-500">
              <span className="text-term-400">$</span> ls ~/skills/
              <span className="text-zinc-300">{group.id}</span>/
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="p-6"
              >
                <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                <p className="mt-1 font-mono text-xs text-zinc-600">
                  {group.items.length} {group.items.length === 1 ? "item" : "items"}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {group.items.map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + i * 0.07 }}
                      whileHover={{ x: 6 }}
                      className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 transition-colors hover:border-term-500/50 hover:bg-term-500/5"
                    >
                      <ChevronRight size={14} className="text-term-400 transition-transform group-hover:translate-x-1" />
                      <span className="font-mono text-sm text-zinc-200">{s}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
