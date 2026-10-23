import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const lines = [
  "Mounting /dev/portfolio",
  "Starting django-rest-framework.service",
  "Connecting to postgresql://localhost:5432",
  "Starting celery workers + redis broker",
  "Registering azure-functions timer triggers",
  "Reached target: mustafa-bakrolwala",
];

/** Fake Linux boot sequence shown on first load. */
export default function BootLoader({ onDone }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < lines.length) {
      const t = setTimeout(() => setCount((c) => c + 1), 280);
      return () => clearTimeout(t);
    }
    const t = setTimeout(onDone, 700);
    return () => clearTimeout(t);
  }, [count, onDone]);

  return (
    <motion.div
      exit={{ opacity: 0, filter: "blur(8px)" }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[100] flex items-center bg-black px-6"
    >
      <div className="mx-auto w-full max-w-2xl font-mono text-sm">
        {lines.slice(0, count).map((l) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-2 text-zinc-400"
          >
            <span className="text-zinc-500">[ </span>
            <span className="text-term-400">OK</span>
            <span className="text-zinc-500"> ] </span>
            {l}
          </motion.div>
        ))}
        <div className="mt-4 text-term-400">
          <span className="text-zinc-500">mustafa@dev:~$ </span>
          <span className="inline-block h-4 w-2 translate-y-0.5 animate-blink bg-term-400" />
        </div>
      </div>
    </motion.div>
  );
}
