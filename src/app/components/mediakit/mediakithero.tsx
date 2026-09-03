"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Download,
  Mail,
  FileText,
  Camera,
  Building2,
} from "lucide-react";

import edem from "../../assets/edem-hero.jpeg";
import pressHero from "../../assets/press-hero.webp";

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
<<<<<<< HEAD
import { motion } from "framer-motion";
import GlideCarousel from "../GlideCarousel";
=======
>>>>>>> 5710dc9 (new ui update)

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
<<<<<<< HEAD
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
        <p className="mt-2 text-sm leading-relaxed text-foreground/65">
          Edem Adzogenu is an International Business and Policy Consultant and
          African entrepreneur who serves as the Founder and Co‑Chair of
          AfroChampions, the public‑private partnership platform driving
          Africa&apos;s deep continental integration.
        </p>
        <Link
          href="/about"
          className="control mt-4 inline-block bg-foreground px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-dark"
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
        className="mt-2 inline-block text-sm font-medium text-foreground underline underline-offset-4"
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
      <p className="mt-2 text-sm leading-relaxed text-foreground/65">
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
      <p className="mt-2 text-sm leading-relaxed text-foreground/65">
        AfroChampions is a public‑private partnership platform dedicated to
        advancing Africa&apos;s deep integration. Its work focuses on
        building systems that strengthen coordination, trust, and innovation
        across borders.
      </p>
    ),
=======
    number: "01",
    icon: FileText,
    title: "Full Biography",
    description:
      "A detailed profile covering Edem Adzogenu's career, leadership, advisory work, and contribution to Africa's economic and institutional transformation.",
    action: "Read biography",
    href: "/about",
  },
  {
    number: "02",
    icon: FileText,
    title: "Short Biography",
    description:
      "A concise professional biography suitable for event programmes, speaker introductions, publications, and institutional profiles.",
    action: "View biography",
    href: "/",
  },
  {
    number: "03",
    icon: Camera,
    title: "Press Photography",
    description:
      "Approved high-resolution photographs for editorial, media, conference, institutional, and publication use.",
    action: "View gallery",
    href: "#gallery",
  },
  {
    number: "04",
    icon: Building2,
    title: "AfroChampions Profile",
    description:
      "Official description and background information on AfroChampions and its role in advancing Africa's deep continental integration.",
    action: "Explore AfroChampions",
    href: "/afrochampions",
>>>>>>> 5710dc9 (new ui update)
  },
];

export default function MediaKitHero() {
  return (
<<<<<<< HEAD
    <section className="w-full px-4 py-14 sm:px-6 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative aspect-[4/5] w-full max-w-sm overflow-hidden border border-black/10"
          style={{ borderRadius: "var(--radius-minimal)" }}
        >
          <Image src={edem} alt="Edem Adzogenu" fill priority className="object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <span className="font-outfit text-sm font-semibold uppercase tracking-widest text-accent">
            Press &amp; Media
          </span>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
            Media Kit
          </h1>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-foreground/65 sm:text-base md:text-lg">
            Everything you need to feature, introduce, or interview Edem
            Adzogenu — bios, imagery, and official materials, ready to use.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-block border border-foreground bg-foreground px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-foreground"
            style={{ borderRadius: "var(--radius-minimal)" }}
          >
            Request Media Kit
          </Link>
        </motion.div>
      </div>

      {/* Included Materials */}
      <div className="mx-auto mt-16 max-w-6xl md:mt-24">
        <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
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
              className={`group flex flex-col gap-6 border border-black/[0.08] bg-white/50 p-6 transition-colors hover:border-accent/50 ${item.span}`}
              style={{ borderRadius: "var(--radius-minimal)" }}
            >
              <svg
                className="h-8 w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                {item.icon}
              </svg>
              <div>
                <h3 className="font-outfit text-lg font-semibold text-foreground">
=======
    <main className="w-full bg-[#faf9f6] text-slate-900">
      {/* =====================================================
          PRESS HERO
      ====================================================== */}

      <section className="relative isolate overflow-hidden">
        <div className="relative min-h-155 sm:min-h-196">
          <Image
            src={pressHero}
            alt="Press and media interview"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Restrained cinematic treatment */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black/85 via-black/45 to-transparent" />

          {/* Fine editorial line */}
          <div className="absolute left-6 top-8 h-px w-20 bg-white/60 sm:left-10 lg:left-16" />

          <div className="relative mx-auto flex min-h-155 max-w-7xl items-end px-6 pb-16 sm:min-h-196 sm:px-10 sm:pb-20 lg:px-16">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
               

                <h1 className="mt-6 max-w-4xl font-outfit text-5xl font-medium leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-[6.5rem]">
                  Media
                  <span className="block text-white/65">Room.</span>
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                  A central resource for journalists, editors, producers,
                  institutions, event organisers, and partners seeking to
                  feature or engage Edem Adzogenu.
                </p>

                <div className="mt-9 flex flex-wrap gap-4">
                  <Link
                    href="#materials"
                    className="group inline-flex items-center gap-3 bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-amber-400"
                  >
                    Explore media resources
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 border border-white/35 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
                  >
                    Press enquiries
                    <Mail size={16} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom metadata */}
          <div className="absolute bottom-7 right-6 hidden text-right sm:right-10 md:block lg:right-16">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/45">
              Editorial Resources
            </p>
            <p className="mt-1 text-xs text-white/65">
              Edem Adzogenu
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO / PRESS DESK
      ====================================================== */}

      <section className="border-b border-slate-200">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              Press Desk
            </span>
          </div>

          <div className="lg:col-span-7">
            <h2 className="font-outfit text-3xl font-medium leading-tight tracking-[-0.035em] text-slate-900 sm:text-4xl md:text-5xl">
              A reliable source for stories that matter.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Edem Adzogenu works at the intersection of international
              business, public policy, innovation, and African integration.
              This media room provides the essential information and visual
              resources required to accurately introduce his work, profile his
              ideas, or support an interview.
            </p>
          </div>

         
        </div>
      </section>

       {/* =====================================================
          PROFILE FEATURE
      ====================================================== */}

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="relative min-h-130 overflow-hidden">
            <Image
              src={edem}
              alt="Edem Adzogenu"
              fill
              className="object-cover object-top "
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />

            <span className="absolute bottom-6 left-6 text-[10px] uppercase tracking-[0.25em] text-white/75 sm:left-10">
              Official Portrait
            </span>
          </div>

          <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
                Profile
              </span>

              <h2 className="mt-4 font-outfit text-3xl font-medium leading-tight tracking-[-0.035em] text-slate-900 sm:text-4xl md:text-5xl">
                Edem Adzogenu
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-600">
                Edem Adzogenu is an International Business and Policy
                Consultant and African entrepreneur who serves as the Founder
                and Co-Chair of AfroChampions, the public-private partnership
                platform driving Africa&apos;s deep continental integration.
              </p>

              <p className="mt-5 text-base leading-8 text-slate-600">
                His work spans innovation, economic development, Pan-African
                integration, and the design of complex public-private
                partnerships that mobilise investment and strengthen
                institutions across the continent.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-3 border-b border-slate-900 pb-2 text-sm font-semibold text-slate-900 transition-colors hover:border-amber-500 hover:text-amber-600"
              >
                View full profile
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MEDIA MATERIALS
      ====================================================== */}

      <section
        id="materials"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="flex flex-col justify-between gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              Resources
            </span>

            <h2 className="mt-3 font-outfit text-3xl font-medium tracking-[-0.035em] text-slate-900 sm:text-4xl">
              Media materials
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Professional resources prepared for editorial, institutional,
            conference, and broadcast use.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
          {materials.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.06,
                }}
                className="group relative bg-[#faf9f6] p-7 transition-colors duration-300 hover:bg-white sm:p-9 lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="font-outfit text-sm font-medium text-slate-400">
                    {item.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center border border-slate-200 text-slate-700 transition-all duration-300 group-hover:border-amber-500 group-hover:bg-amber-500">
                    <Icon size={18} strokeWidth={1.4} />
                  </div>
                </div>

                <h3 className="mt-12 font-outfit text-2xl font-medium tracking-tight text-slate-900">
>>>>>>> 5710dc9 (new ui update)
                  {item.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-500 sm:text-base">
                  {item.description}
                </p>

                <Link
                  href={item.href}
                  className="group/link mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900"
                >
                  {item.action}
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                  />
                </Link>
              </motion.article>
            );
          })}
        </div>
      </section>

<<<<<<< HEAD
      {/* Gallery */}
      <div className="mx-auto mt-16 max-w-6xl md:mt-24">
        <h2 className="font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
          Gallery
        </h2>

        <div className="mt-8">
          <GlideCarousel perView={4} gap={20}>
            {gallery.map((photo, i) => (
              <div
                key={i}
                className="relative aspect-[4/5] w-full overflow-hidden border border-black/[0.08]"
                style={{ borderRadius: "var(--radius-minimal)" }}
              >
                <Image src={photo} alt={`Edem Adzogenu ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </GlideCarousel>
=======
     

      {/* =====================================================
          GALLERY
      ====================================================== */}

      <section
        id="gallery"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16"
      >
        <div className="flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              Visual Archive
            </span>

            <h2 className="mt-3 font-outfit text-3xl font-medium tracking-[-0.035em] text-slate-900 sm:text-4xl">
              Press Photography
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-slate-500">
            Selected images from engagements, meetings, conferences, and
            institutional activities.
          </p>
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.04,
              }}
              className="group relative mb-5 break-inside-avoid overflow-hidden bg-slate-100"
            >
              <Image
                src={photo}
                alt={`Edem Adzogenu press photograph ${index + 1}`}
                className="h-auto w-full object-cover grayscale-[8%] transition duration-700 group-hover:scale-[1.025] group-hover:grayscale-0"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
>>>>>>> 5710dc9 (new ui update)
        </div>
      </section>

      {/* =====================================================
          PRESS CONTACT
      ====================================================== */}

      <section className="bg-[#151515] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-12 lg:px-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Press & Media Enquiries
            </span>

            <h2 className="mt-4 max-w-3xl font-outfit text-3xl font-medium leading-tight tracking-[-0.035em] sm:text-4xl md:text-5xl">
              Looking for a comment, interview or speaking opportunity?
            </h2>
          </div>

          <div className="flex items-end lg:col-span-5 lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-amber-400"
            >
              Contact the press desk
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

