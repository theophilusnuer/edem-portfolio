"use client";

import { motion } from "framer-motion";

const roles = [
  { position: "Co‑Chair", institution: "Pandemic Fund External Advisory Council" },
  { position: "Member", institution: "Governing Council — African Public Health Foundation" },
  { position: "Non‑Executive Director", institution: "Capital Hospital Group" },
  { position: "Board Member", institution: "PEPFAR Scientific Advisory Board" },
  { position: "Vice Chairman", institution: "Nigeria Digital Health Initiative" },
  { position: "Board Member", institution: "Agridex" },
  { position: "Senior Advisor on Innovation and Digitization", institution: "Africa CDC" },
];

const expertise = [
  {
    label: "Systems design",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a7.712 7.712 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.127.332-.184.582-.496.644-.87l.214-1.28Z"
      />
    ),
  },
  {
    label: "Public‑private partnerships",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.001-3.197a3 3 0 0 1 4.682-2.72M12 6.375a3 3 0 1 0 0 5.25 3 3 0 0 0 0-5.25Zm-8.25 3.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm18 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    ),
  },
  {
    label: "Innovation strategy",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
      />
    ),
  },
  {
    label: "Governance reform",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    ),
  },
  {
    label: "Continental integration",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A8.959 8.959 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
      />
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const badge = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function RolesHero() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-14 sm:px-6 md:px-10 md:py-20 lg:px-16">
      {/* Watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-outfit text-[22vw] font-bold leading-none text-foreground/[0.03] sm:text-[16vw]"
      >
        Roles
      </span>

      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-2xl text-center"
      >
        <span className="font-outfit text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Advisory &amp; Governance
        </span>
        <h1 className="mt-4 font-display text-5xl font-medium tracking-tight text-foreground sm:text-6xl">
          Roles
        </h1>
        <div className="mx-auto mt-6 h-px w-16 bg-accent/40" />
        <p className="mt-6 text-[15px] leading-relaxed text-foreground/65 sm:text-base md:text-lg">
          Edem serves on boards and advisory councils that shape health,
          innovation, and governance systems across Africa and globally.
        </p>
      </motion.div>

      {/* Current Roles */}
      <div className="relative mx-auto mt-20 max-w-5xl md:mt-28">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
        >
          Current Roles
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {roles.map((role, i) => (
            <motion.div
              key={role.institution}
              variants={item}
              className="group relative overflow-hidden border border-black/[0.08] bg-white/50 p-6 transition-colors hover:border-accent"
            >
              <span className="absolute -right-2 -top-4 font-outfit text-6xl font-bold text-foreground/5 transition-colors group-hover:text-accent/10">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="relative font-outfit text-lg font-semibold text-foreground sm:text-xl">
                {role.position}
              </p>
              <p className="relative mt-1 text-sm text-foreground/65 sm:text-base">
                {role.institution}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Expertise Areas */}
      <div className="relative mx-auto mt-20 max-w-4xl md:mt-28">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl"
        >
          Expertise Areas
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {expertise.map((area) => (
            <motion.div
              key={area.label}
              variants={badge}
              className="group flex items-center gap-4 border border-black/[0.08] bg-white/50 p-5 transition-colors hover:border-accent"
            >
              <svg
                className="h-6 w-6 shrink-0 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                {area.icon}
              </svg>
              <p className="font-outfit text-sm font-semibold text-foreground sm:text-base">
                {area.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
