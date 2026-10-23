import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { profile } from "../data/portfolio";
import useTypewriter from "../hooks/useTypewriter";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* tiny syntax-highlight helpers for the JSON panel */
const K = ({ children }) => <span className="text-sky-300">{children}</span>;
const S = ({ children }) => <span className="text-term-300">{children}</span>;
const P = ({ children }) => <span className="text-zinc-500">{children}</span>;
const Arr = ({ items }) => (
  <>
    <P>[</P>
    {items.map((t, i) => (
      <span key={t}>
        <S>"{t}"</S>
        {i < items.length - 1 && <P>, </P>}
      </span>
    ))}
    <P>]</P>
  </>
);

const jsonLines = [
  { i: 0, c: <P>{"{"}</P> },
  { i: 1, c: <><K>"name"</K><P>: </P><S>"Mustafa Bakrolwala"</S><P>,</P></> },
  { i: 1, c: <><K>"role"</K><P>: </P><S>"Backend Developer"</S><P>,</P></> },
  { i: 1, c: <><K>"experience"</K><P>: </P><S>"3+ years"</S><P>,</P></> },
  { i: 1, c: <><K>"stack"</K><P>: </P><Arr items={["Python", "Django", "DRF", "PostgreSQL"]} /><P>,</P></> },
  { i: 1, c: <><K>"cloud"</K><P>: </P><Arr items={["Azure Functions", "Microservices"]} /><P>,</P></> },
  { i: 1, c: <><K>"async"</K><P>: </P><Arr items={["Celery", "Redis"]} /><P>,</P></> },
  { i: 1, c: <><K>"integrations"</K><P>: </P><Arr items={["Salesforce", "Capillary", "Paytm"]} /><P>,</P></> },
  { i: 1, c: <><K>"award"</K><P>: </P><S>"Spot Award · Jan 2025"</S><P>,</P></> },
  { i: 1, c: <><K>"location"</K><P>: </P><S>"Ahmedabad, Gujarat"</S></> },
  { i: 0, c: <P>{"}"}</P> },
];

export default function Hero() {
  const role = useTypewriter(profile.roles);
  const [first, ...rest] = profile.name.split(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pt-24 pb-16 sm:px-6"
    >
      <div className="absolute top-1/4 -left-40 h-[420px] w-[420px] rounded-full bg-term-500/10 blur-[130px]" />
      <div className="absolute -right-32 bottom-10 h-[380px] w-[380px] rounded-full bg-emerald-400/10 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* left */}
        <motion.div variants={container} initial="hidden" animate="show" className="min-w-0">
          <motion.p variants={item} className="font-mono text-sm text-zinc-500">
            <span className="text-term-400">{profile.firstName.toLowerCase()}@dev</span>
            :~$ <span className="text-zinc-300">whoami</span>
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-4xl leading-[1.05] font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl"
          >
            {first}
            <br />
            <span className="text-glow text-term-400">{rest.join(" ")}</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="mt-6 min-h-9 font-mono text-base text-zinc-300 sm:text-lg md:text-2xl"
          >
            <span className="text-term-400">&gt; </span>
            {role}
            <span className="ml-1 inline-block h-5 w-[10px] translate-y-0.5 animate-blink bg-term-400 md:h-6" />
          </motion.h2>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            I design scalable REST APIs, microservices and enterprise applications with{" "}
            <span className="text-term-300">Python</span>,{" "}
            <span className="text-term-300">Django</span> and{" "}
            <span className="text-term-300">Azure</span>, and make them fast, reliable and
            automated.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
            <a href="#projects" className="btn-term group justify-center sm:justify-start">
              $ view --projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={profile.resume}
              download="Mustafa_Bakrolwala_Resume.pdf"
              className="btn-outline justify-center sm:justify-start"
            >
              <Download size={16} /> resume.pdf
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-3">
            {[
              { Icon: Github, href: profile.socials.github, label: "GitHub", external: true },
              { Icon: Linkedin, href: profile.socials.linkedin, label: "LinkedIn", external: true },
              { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              { Icon: Phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, label: "Phone" },
            ].map(({ Icon, href, label, external }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                whileHover={{ y: -4 }}
                className="grid h-11 w-11 place-items-center rounded-md border border-white/10 text-zinc-400 transition-colors hover:border-term-400 hover:text-term-300 hover:shadow-[0_0_25px_-5px_rgba(74,222,128,0.7)]"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* right: API response panel */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-w-0"
        >
          <div className="absolute -inset-4 rounded-3xl bg-term-500/10 blur-3xl" />
          <div className="relative animate-float">
            <div className="panel relative overflow-hidden shadow-2xl shadow-term-900/30">
              {/* moving scan line */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 animate-scan bg-gradient-to-b from-transparent via-term-400/10 to-transparent" />

              <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                <div className="flex min-w-0 items-center gap-3 font-mono text-xs">
                  <span className="rounded bg-sky-400/15 px-2 py-0.5 font-bold text-sky-300">GET</span>
                  <span className="truncate text-zinc-400">/api/v1/developers/mustafa</span>
                </div>
                <span className="flex shrink-0 items-center gap-2 font-mono text-xs text-term-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-term-400" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-term-400" />
                  </span>
                  200 OK
                </span>
              </div>

              <pre className="overflow-x-auto p-3 font-mono text-[11px] leading-6 sm:p-5 sm:text-[13px] sm:leading-7">
                <code>
                  {jsonLines.map((l, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + idx * 0.09 }}
                      style={{ paddingLeft: `${l.i * 1.5}rem` }}
                      className="whitespace-pre"
                    >
                      {l.c}
                    </motion.div>
                  ))}
                </code>
              </pre>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="panel absolute -top-5 -right-3 px-3 py-1.5 font-mono text-xs text-amber-300"
            >
              🏆 Spot Award · Jan 2025
            </motion.div>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="panel absolute -bottom-5 -left-3 px-3 py-1.5 font-mono text-xs text-term-300"
            >
              latency −35% · queries −60%
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-term-400"
        aria-label="Scroll down"
      >
        <ChevronDown />
      </motion.a>
    </section>
  );
}
