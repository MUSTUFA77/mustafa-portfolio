import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, Search, CornerDownLeft } from "lucide-react";
import { sections } from "../data/sections";
import { profile } from "../data/portfolio";

/** Ctrl/Cmd + K command palette: jump to a section or run a quick action. */
export default function CommandPalette({ open, setOpen }) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef(null);

  const go = (id) => {
    setOpen(false);
    setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      150
    );
  };

  const items = [
    ...sections.map((s) => ({
      label: `Go to ${s.label}`,
      hint: `~/${s.id}`,
      Icon: s.Icon,
      run: () => go(s.id),
    })),
    {
      label: "Download resume",
      hint: "resume.pdf",
      Icon: Download,
      run: () => {
        const a = document.createElement("a");
        a.href = profile.resume;
        a.download = "Mustafa_Bakrolwala_Resume.pdf";
        a.click();
        setOpen(false);
      },
    },
    {
      label: "Send an email",
      hint: profile.email,
      Icon: Mail,
      run: () => {
        window.location.href = `mailto:${profile.email}`;
        setOpen(false);
      },
    },
    {
      label: "Open GitHub",
      hint: "github.com/MUSTUFA77",
      Icon: Github,
      run: () => {
        window.open(profile.socials.github, "_blank", "noreferrer");
        setOpen(false);
      },
    },
    {
      label: "Open LinkedIn",
      hint: "linkedin.com/in/…",
      Icon: Linkedin,
      run: () => {
        window.open(profile.socials.linkedin, "_blank", "noreferrer");
        setOpen(false);
      },
    },
  ];

  const filtered = items.filter((i) =>
    `${i.label} ${i.hint}`.toLowerCase().includes(q.toLowerCase())
  );

  // global shortcuts
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);

  // reset + focus when opened
  useEffect(() => {
    if (open) {
      setQ("");
      setIdx(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIdx((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIdx((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter") {
      filtered[idx]?.run();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-black/70 px-3 py-[8vh] backdrop-blur-sm sm:px-4 sm:py-[15vh]"
        >
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="panel w-full max-w-xl overflow-hidden shadow-[0_0_60px_-10px_rgba(74,222,128,0.35)]"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-3 py-3 sm:px-4">
              <Search size={16} className="text-term-400" />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setIdx(0);
                }}
                onKeyDown={onInputKey}
                placeholder="Type a command or search…"
                className="w-full bg-transparent font-mono text-base text-white outline-none placeholder:text-zinc-600 sm:text-sm"
              />
              <kbd className="rounded border border-white/15 px-1.5 py-0.5 font-mono text-[10px] text-zinc-500">
                ESC
              </kbd>
            </div>

            <ul className="max-h-[min(20rem,calc(100dvh-10rem))] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center font-mono text-sm text-zinc-600">
                  command not found
                </li>
              )}
              {filtered.map((it, i) => (
                <li key={it.label}>
                  <button
                    onMouseEnter={() => setIdx(i)}
                    onClick={it.run}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition-colors sm:py-2.5 ${
                      i === idx ? "bg-term-500/10 text-white" : "text-zinc-400"
                    }`}
                  >
                    <it.Icon size={16} className={i === idx ? "text-term-400" : "text-zinc-600"} />
                    <span className="flex-1">{it.label}</span>
                    <span className="hidden max-w-[40%] truncate font-mono text-xs text-zinc-600 sm:inline">
                      {it.hint}
                    </span>
                    {i === idx && <CornerDownLeft size={14} className="text-term-400" />}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
