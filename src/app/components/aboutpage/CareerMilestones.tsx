import Image, { type StaticImageData } from "next/image";
import pnb from "../../assets/pnb.webp";
import tdf from "../../assets/tdf.webp";
import afch from "../../assets/afch.webp";
import afcfta from "../../assets/afcfta.svg";
import abm4 from "../../assets/abm4.webp";
import dag from "../../assets/dag.jpg";
import GlideCarousel from "../GlideCarousel";

type Milestone = {
  image: StaticImageData;
  title: string;
};

// Placeholder milestones — replace image and title with real career milestones.
const milestones: Milestone[] = [
  { image: afch, title: "Founder & Co Chair, AfroChampions" },
  { image: pnb, title: "Architect of PanaBIOS" },
  { image: afcfta, title: "Co designer of AfCFTA Hub" },
  { image: tdf, title: "Guided adoption of TDF by AU Heads of State" },
  { image: dag, title: "Co creator of the 4D Agenda" },
  { image: abm4, title: "Advisor to governments, DFIs, and global institutions" },
];

export default function CareerMilestones() {
  return (
    <section className="w-full px-4 py-14 sm:px-6 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Trajectory
        </span>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
          Career Milestones
        </h2>

        <div className="mt-10">
          <GlideCarousel perView={3} gap={28} bullets={false}>
            {milestones.map((milestone, i) => (
              <div key={i} className="flex h-full flex-col">
                <span
                  className="mb-4 font-display text-sm italic text-accent"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="relative aspect-[4/3] w-full overflow-hidden border border-black/[0.08] bg-white"
                  style={{ borderRadius: "var(--radius-minimal)" }}
                >
                  <Image src={milestone.image} alt={milestone.title} fill className="object-contain p-4" />
                </div>
                <h3 className="mt-4 font-outfit text-lg font-semibold leading-snug text-foreground">
                  {milestone.title}
                </h3>
              </div>
            ))}
          </GlideCarousel>
        </div>
      </div>
    </section>
  );
}
