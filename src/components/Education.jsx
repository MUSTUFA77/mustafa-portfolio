import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionHeading index="06" path="education" title="Education" />

      <Reveal>
        <div className="panel mx-auto flex max-w-3xl flex-col items-center gap-8 p-8 sm:flex-row sm:p-10">
          {/* CGPA ring */}
          <div className="relative h-36 w-36 shrink-0">
            <svg viewBox="0 0 120 120" className="h-full w-full">
              <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
              <motion.circle
                cx="60"
                cy="60"
                r="52"
                fill="none"
                stroke="#4ade80"
                strokeWidth="8"
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: education.cgpa / 10 }}
                viewport={{ once: true }}
                transition={{ duration: 1.8, ease: "easeOut" }}
                style={{ filter: "drop-shadow(0 0 6px rgba(74,222,128,0.8))" }}
              />
            </svg>
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <p className="font-mono text-3xl font-bold text-term-400">{education.cgpa}</p>
                <p className="font-mono text-[10px] tracking-widest text-zinc-500">CGPA / 10</p>
              </div>
            </div>
          </div>

          <div className="text-center sm:text-left">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-term-400">
              <GraduationCap size={14} /> {education.period}
            </span>
            <h3 className="mt-2 text-2xl font-bold text-white">{education.degree}</h3>
            <p className="mt-1 text-zinc-400">{education.school}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
