import { motion } from "framer-motion";
import { Smartphone, Server, Workflow, Database, Clock, Plug, Activity } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const pipeline = [
  { Icon: Smartphone, title: "Web & Mobile Clients", desc: "Consume secure, versioned REST APIs" },
  { Icon: Server, title: "Django REST API", desc: "Auth flows, business logic, integrations" },
  { Icon: Workflow, title: "Celery + Redis", desc: "Async tasks, scheduled jobs, notifications" },
  { Icon: Database, title: "PostgreSQL", desc: "Optimized queries & indexing strategies" },
];

/** Animated connector with a packet travelling along it. */
function Connector() {
  return (
    <>
      {/* vertical (mobile) */}
      <div className="relative mx-auto h-10 w-px bg-white/10 lg:hidden">
        <motion.span
          animate={{ top: ["0%", "100%"] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-term-400 shadow-[0_0_12px_rgba(74,222,128,1)]"
        />
      </div>
      {/* horizontal (desktop) */}
      <div className="relative hidden h-px flex-1 bg-white/10 lg:block">
        <motion.span
          animate={{ left: ["0%", "100%"] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-term-400 shadow-[0_0_12px_rgba(74,222,128,1)]"
        />
      </div>
    </>
  );
}

const extras = [
  {
    Icon: Clock,
    title: "Scheduled automation",
    desc: "Business processes and transaction workflows run on a schedule.",
    chips: ["Azure Time Trigger Functions", "Azure Microservices"],
  },
  {
    Icon: Plug,
    title: "Integrations & webhooks",
    desc: "Third-party systems connected with retries, audit logging and error handling.",
    chips: ["Salesforce", "Capillary CRM", "Paytm", "WhatsApp Business"],
  },
  {
    Icon: Activity,
    title: "Monitoring & deployment",
    desc: "Observability and delivery tooling for reliable releases.",
    chips: ["New Relic", "Papertrail", "Docker", "Linux", "Heroku"],
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="section">
      <SectionHeading
        index="03"
        path="architecture"
        title="How my systems flow"
        subtitle="A typical request and job flow across the backend platforms I build."
      />

      {/* pipeline */}
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        {pipeline.map((n, i) => (
          <div key={n.title} className="flex flex-col lg:flex-row lg:flex-1 lg:items-center last:lg:flex-none">
            <Reveal delay={i * 0.12} className="lg:w-52">
              <motion.div
                whileHover={{ y: -6 }}
                className="panel group relative h-full overflow-hidden p-5 text-center transition-colors hover:border-term-500/60"
              >
                <span className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-term-500/10 text-term-400 ring-1 ring-term-500/30 transition-shadow group-hover:shadow-[0_0_30px_-4px_rgba(74,222,128,0.8)]">
                  <n.Icon size={22} />
                </span>
                <h3 className="font-semibold text-white">{n.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500">{n.desc}</p>
              </motion.div>
            </Reveal>
            {i < pipeline.length - 1 && <Connector />}
          </div>
        ))}
      </div>

      {/* supporting systems */}
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {extras.map((e, i) => (
          <Reveal key={e.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              className="panel h-full p-6 transition-colors hover:border-term-500/50"
            >
              <div className="flex items-center gap-3">
                <e.Icon size={18} className="text-term-400" />
                <h3 className="font-semibold text-white">{e.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">{e.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-term-300"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
