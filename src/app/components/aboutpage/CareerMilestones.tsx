"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import plh from "../../assets/plh.jpeg";
import abm1 from "../../assets/abm1.jpg";
import abm3 from "../../assets/abm3.jpeg";
import edemFooter from "../../assets/edem-footer.png";

type Milestone = {
  image: StaticImageData;
  year: string;
  title: string;
};

// Placeholder milestones — replace image, year, and title with real career milestones.
const milestones: Milestone[] = [
  { image: plh, year: "Year", title: "Founder & Co Chair, AfroChampions" },
  { image: abm1, year: "Year", title: "Architect of PanaBIOS" },
  { image: abm3, year: "Year", title: "Co designer of AfCFTA Hub" },
  { image: abm1, year: "Year", title: "Guided adoption of TDF by AU Heads of State" },
  { image: abm1, year: "Year", title: "Co creator of the 4D Agenda" },
  { image: edemFooter, year: "Year", title: "Advisor to governments, DFIs, and global institutions" },
];


export default function CareerMilestones() {
  return (
    <section className="w-full px-4 py-14 sm:px-6 md:px-10 md:py-16 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-outfit text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Career Milestones
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-10">
          {milestones.map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              className="flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="mt-4 text-sm font-medium text-slate-500">
                {/* {milestone.year} */}
              </span>
              <h3 className="mt-1 font-outfit text-xl font-semibold text-slate-900">
                {milestone.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
