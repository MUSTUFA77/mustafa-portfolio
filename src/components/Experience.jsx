import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Highlight from "./Highlight";
import TerminalWindow from "./TerminalWindow";
import { experience } from "../data/portfolio";

const tags = ["OK", "INFO", "OK", "OK", "INFO"];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeading
        index="04"
        path="experience"
        title="Work experience"
        subtitle="What I've been shipping, in log form."
      />

      <Reveal>
        <TerminalWindow title="tail -f experience.log" bodyClass="p-6 md:p-8">
          {/* header */}
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/10 pb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">{experience.role}</h3>
              <p className="mt-1 text-term-300">{experience.company}</p>
            </div>
            <div className="text-right font-mono text-xs text-zinc-500">
              <p className="text-term-400">{experience.period}</p>
              <p className="mt-1">{experience.location}</p>
            </div>
          </div>

          {/* log lines */}
          <ul className="mt-6 space-y-4">
            {experience.logs.map((l, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4"
              >
                <span
                  className={`mt-0.5 h-fit shrink-0 rounded px-2 py-0.5 font-mono text-[11px] font-bold ${
                    tags[i] === "OK"
                      ? "bg-term-500/15 text-term-400"
                      : "bg-sky-400/15 text-sky-300"
                  }`}
                >
                  {tags[i]}
                </span>
                <p className="leading-relaxed text-zinc-400">
                  <Highlight text={l} />
                </p>
              </motion.li>
            ))}
          </ul>

          <p className="mt-8 font-mono text-sm text-zinc-500">
            <span className="text-term-400">$</span>{" "}
            <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-term-400" />
          </p>
        </TerminalWindow>
      </Reveal>
    </section>
  );
}
