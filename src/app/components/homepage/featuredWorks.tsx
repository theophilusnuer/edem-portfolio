import afcfta from "../../assets/afcfta.svg";
import pnb from "../../assets/pnb.webp";
import tdf from "../../assets/tdf.webp";
import dag from "../../assets/dag.jpg";
import FeatureCard from "../Card";

const works = [
  {
    image: pnb,
    alt: "PanaBIOS ",
    title: "PanaBIOS ",
    description:
      "AU aligned biosurveillance architecture enabling safe mobility and coordinated public health responses.",
  },
  {
    image: afcfta,
    alt: "AfCFTA Hub ",
    title: "AfCFTA Hub ",
    description:
      "Africa’s first trade super app, providing AfCFTA numbers, trust building tools, and cross border business enablement.",
  },
  {
    image: tdf,
    alt: "Trillion-Dollar Investment Framework (TDF)",
    title: "Trillion-Dollar Investment Framework (TDF)",
    description:
      "Private sector led investment framework designed to mobilise large scale capital for AfCFTA implementation.",
  },
  {
    image: dag,
    alt: "4D Agenda",
    title: "4D Agenda",
    description:
      "Collaborative innovation engine linking African governments, the AU, the diaspora, and development finance institutions.",
  },
];

export default function FeaturedWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20">
      <h2 className="text-center font-outfit text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        Featured Works
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
        {works.map((work) => (
          <FeatureCard key={work.title} {...work} />
        ))}
      </div>
    </section>
  );
}