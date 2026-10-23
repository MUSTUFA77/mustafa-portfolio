import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Counter from "./Counter";
import Highlight from "./Highlight";
import TerminalWindow from "./TerminalWindow";
import { profile, metrics } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeading
        index="01"
        path="about"
        title="Professional summary"
        subtitle="Who I am, and the impact my backend work has had."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal direction="right" className="lg:col-span-3">
          <TerminalWindow title="summary.txt" className="h-full">
            <p className="font-mono text-sm text-zinc-500">
              <span className="text-term-400">$</span> cat summary.txt
            </p>
            <p className="mt-4 text-lg leading-relaxed text-zinc-300">
              <Highlight text={profile.summary} />
            </p>
            <p className="mt-6 font-mono text-sm text-zinc-500">
              <span className="text-term-400">$</span>{" "}
              <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-term-400" />
            </p>
          </TerminalWindow>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:col-span-2">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="panel group relative h-full overflow-hidden p-5 transition-colors hover:border-term-500/50"
              >
                <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-term-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="text-glow font-mono text-3xl font-bold text-term-400 sm:text-4xl">
                  <Counter to={m.value} prefix={m.prefix} suffix={m.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-white">{m.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{m.note}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
