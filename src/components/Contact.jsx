import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import TerminalWindow from "./TerminalWindow";
import { profile } from "../data/portfolio";

const rows = [
  { Icon: Mail, key: "EMAIL", text: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, key: "PHONE", text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { Icon: MapPin, key: "LOCATION", text: profile.location },
  { Icon: Github, key: "GITHUB", text: "github.com/MUSTUFA77", href: profile.socials.github, external: true },
  { Icon: Linkedin, key: "LINKEDIN", text: "linkedin.com/in/mustufa-bakrolwala", href: profile.socials.linkedin, external: true },
];

const field =
  "w-full rounded-md border border-white/10 bg-black/50 px-4 py-3 font-mono text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-term-400 focus:shadow-[0_0_28px_-8px_rgba(74,222,128,0.8)]";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // Opens the visitor's mail app with the message prefilled.
    // Swap for EmailJS / your own API to send from the page.
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <SectionHeading
        index="07"
        path="contact"
        title="Let's talk"
        subtitle="Have a backend project or role in mind? Send a message or reach out directly."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <Reveal direction="right" className="min-w-0 lg:col-span-2">
          <TerminalWindow title="contact.sh" className="h-full">
            <ul className="space-y-5">
              {rows.map(({ Icon, key, text, href, external }) => (
                <li key={key}>
                  <p className="font-mono text-xs text-zinc-600">
                    <span className="text-term-400">$</span> echo ${key}
                  </p>
                  <div className="mt-1.5 flex items-center gap-3">
                    <Icon size={16} className="shrink-0 text-term-400" />
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="break-all text-sm text-zinc-200 transition-colors hover:text-term-300"
                      >
                        {text}
                      </a>
                    ) : (
                      <span className="text-sm text-zinc-200">{text}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </TerminalWindow>
        </Reveal>

        <Reveal direction="left" className="min-w-0 lg:col-span-3">
          <form onSubmit={onSubmit} className="panel space-y-5 p-6 md:p-8">
            <p className="font-mono text-xs text-zinc-500">
              <span className="text-term-400">$</span> mail --to{" "}
              <span className="break-all">{profile.email}</span>
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-mono text-xs text-zinc-500">name=</span>
                <input name="name" value={form.name} onChange={onChange} required placeholder="Your name" className={field} />
              </label>
              <label className="block">
                <span className="mb-2 block font-mono text-xs text-zinc-500">email=</span>
                <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="you@company.com" className={field} />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block font-mono text-xs text-zinc-500">message=</span>
              <textarea name="message" value={form.message} onChange={onChange} required rows={6} placeholder="Tell me about your project…" className={`${field} resize-none`} />
            </label>

            <motion.button whileTap={{ scale: 0.97 }} type="submit" className="btn-term group w-full justify-center">
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.span
                    key="sent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="inline-flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} /> message queued ✓
                  </motion.span>
                ) : (
                  <motion.span
                    key="send"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="inline-flex items-center gap-2"
                  >
                    $ send
                    <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
