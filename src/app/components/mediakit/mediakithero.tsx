"use client";

import Image from "next/image";
import Link from "next/link";
import edem from "../../assets/edem-hero.jpeg";
import abm1 from "../../assets/abm1.jpg";
import amb2 from "../../assets/amb2.jpeg";
import abm3 from "../../assets/abm3.jpeg";
import abm4 from "../../assets/abm4.webp";
import abm5 from "../../assets/abm5.jpg";
import abm6 from "../../assets/abm6.jpg";
import abm7 from "../../assets/abm7.jpg";
import abm8 from "../../assets/abm8.jpg";
import abm9 from "../../assets/abm9.jpg";
import abm10 from "../../assets/abm10.jpeg";
import abm11 from "../../assets/abm11.jpeg";
import abm12 from "../../assets/abm12.jpeg";
import abm13 from "../../assets/abm13.jpeg";
import { motion } from "framer-motion";

const gallery = [
  abm1,
  amb2,
  abm3,
  abm4,
  abm5,
  abm6,
  abm7,
  abm8,
  abm9,
  abm10,
  abm11,
  abm12,
  abm13,
];

const materials = [
  {
    title: "Full Bio",
    span: "sm:col-span-2",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    ),
    body: (
      <>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Edem Adzogenu is an International Business and Policy Consultant and
          African entrepreneur who serves as the Founder and Co‑Chair of
          AfroChampions, the public‑private partnership platform driving
          Africa&apos;s deep continental integration.
        </p>
        <Link
          href="/about"
          className="mt-4 inline-block rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white shadow-lg shadow-slate-900/10 transition-transform hover:scale-105"
        >
          Read Full Biography
        </Link>
      </>
    ),
  },
  {
    title: "Professional Contact Email",
    span: "",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0a2.25 2.25 0 0 0-2.25-2.25h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    ),
    body: (
      <a
        href="mailto:press@edemadzogenu.com"
        className="mt-2 inline-block text-sm font-medium text-slate-900 underline underline-offset-4"
      >
        info@edemadzogenu.com
      </a>
    ),
  },
  {
    title: "Short Bio",
    span: "",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 12h16.5M3.75 6h16.5M3.75 18h16.5"
      />
    ),
    body: (
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Edem Adzogenu is an International Business and Policy Consultant,
        entrepreneur, and Founder &amp; Co Chair of AfroChampions. His work
        focuses on designing continental platforms that strengthen
        coordination, mobilise investment, and advance the African Union&apos;s
        Agenda 2063.
      </p>
    ),
  },
  {
    title: "Official AfroChampions Description",
    span: "sm:col-span-2",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"
      />
    ),
    body: (
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        AfroChampions is a public‑private partnership platform dedicated to
        advancing Africa&apos;s deep integration. Its work focuses on
        building systems that strengthen coordination, trust, and innovation
        across borders.
      </p>
    ),
  },
];

export default function MediaKitHero() {
  return (
    <section className="w-full px-4 py-14 sm:px-6 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full max-w-sm overflow-hidden"
        >
          <Image src={edem} alt="Edem Adzogenu" fill priority className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <span className="font-outfit text-sm font-semibold uppercase tracking-widest text-amber-600">
            Press &amp; Media
          </span>
          <h1 className="mt-3 font-outfit text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Media Kit
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-slate-600 sm:text-base md:text-lg">
            Everything you need to feature, introduce, or interview Edem
            Adzogenu — bios, imagery, and official materials, ready to use.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-transform hover:scale-105"
          >
            Request Media Kit
          </Link>
        </motion.div>
      </div>

      {/* Included Materials */}
      <div className="mx-auto mt-16 max-w-6xl md:mt-24">
        <h2 className="font-outfit text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Included Materials
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {materials.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              className={`group flex flex-col gap-6 border border-slate-200 bg-white/60 p-6 transition-colors hover:border-slate-900 ${item.span}`}
            >
              <svg
                className="h-8 w-8 text-slate-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                {item.icon}
              </svg>
              <div>
                <h3 className="font-outfit text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                {item.body}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery */}
      <div className="mx-auto mt-16 max-w-6xl md:mt-24">
        <h2 className="font-outfit text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Gallery
        </h2>

        <div className="mt-8 columns-2 gap-4 sm:columns-3 md:gap-6">
          {gallery.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.06 }}
              className="relative mb-4 break-inside-avoid overflow-hidden md:mb-6"
            >
              <Image
                src={photo}
                alt="Edem Adzogenu"
                className="h-auto w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
