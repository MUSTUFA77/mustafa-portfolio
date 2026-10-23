import { motion } from "framer-motion";
import { Trophy, Github, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Highlight from "./Highlight";
import { projects } from "../data/portfolio";

/** cursor-follow green spotlight */
const spotlight = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

function Bar({ label, value, sign, delay }) {
  return (
    <div>
      <div className="mb-1.5 flex justify-between font-mono text-xs">
        <span className="text-zinc-400">{label}</span>
        <span className="text-term-400">
          {sign}
          {value}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-term-600 to-term-300 shadow-[0_0_14px_rgba(74,222,128,0.7)]"
        />
      </div>
    </div>
  );
}

function ProjectCard({ p, index }) {
  return (
    <Reveal delay={index * 0.1}>
      <motion.article
        onMouseMove={spotlight}
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="panel group relative overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(420px circle at var(--x) var(--y), rgba(74,222,128,0.10), transparent 60%)",
          }}
        />

        {/* header */}
        <div className="relative flex flex-wrap items-start justify-between gap-4 border-b border-white/10 p-6">
          <div>
            <span className="font-mono text-xs text-zinc-600">
              project_0{index + 1}
            </span>
            <h3 className="mt-1 text-2xl font-bold text-white transition-colors group-hover:text-term-300 md:text-3xl">
              {p.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-500">{p.subtitle}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {p.award && (
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 font-mono text-xs text-amber-300">
                <Trophy size={13} /> {p.award}
              </span>
            )}
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="btn-outline !px-4 !py-2 !text-xs"
              >
                <Github size={14} /> source <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>

        <div className="relative grid gap-8 p-6 lg:grid-cols-5">
          <ul className={`space-y-3 ${p.bars ? "lg:col-span-3" : "lg:col-span-5"}`}>
            {p.bullets.map((b, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex gap-3 text-sm leading-relaxed text-zinc-400"
              >
                <span className="mt-0.5 font-mono text-term-400">›</span>
                <span>
                  <Highlight text={b} />
                </span>
              </motion.li>
            ))}
          </ul>

          {p.bars && (
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                <p className="mb-4 font-mono text-xs text-zinc-500">
                  <span className="text-term-400">$</span> ./benchmark --report
                </p>
                <div className="space-y-5">
                  {p.bars.map((b, i) => (
                    <Bar key={b.label} {...b} delay={0.2 + i * 0.2} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* tech */}
        <div className="relative flex flex-wrap gap-2 border-t border-white/10 p-6">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-term-300"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeading
        index="05"
        path="projects"
        title="Featured projects"
        subtitle="Backend systems with measurable results."
      />

      <div className="space-y-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}
