import type { Metadata } from "next";
import AboutHero from "../components/aboutpage/abouthero";
import CareerMilestones from "../components/aboutpage/CareerMilestones";
import { LeadershipPhilosophy } from "../components/aboutpage/LeadershipPhilosophy";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Edem Adzogenu's career, leadership philosophy, and milestones as an International Business and Policy Consultant.",
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About | Edem Adzogenu" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <LeadershipPhilosophy />
      <CareerMilestones />
    </>
  );
}