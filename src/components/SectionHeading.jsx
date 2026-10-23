import { motion } from "framer-motion";

/** Left-aligned, terminal-flavoured section title: "// 02  ~/skills" */
export default function SectionHeading({ index, path, title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-14">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 font-mono text-sm text-term-400"
      >
        <span className="text-zinc-600">{"//"}</span>
        <span>{index}</span>
        <span className="text-zinc-600">~/{path}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl"
      >
        {title}
        <span className="ml-1 inline-block h-8 w-[10px] translate-y-1 animate-blink bg-term-400 md:h-10" />
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="mt-5 h-px w-full origin-left bg-gradient-to-r from-term-500 via-term-500/20 to-transparent"
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 max-w-2xl text-zinc-400"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
