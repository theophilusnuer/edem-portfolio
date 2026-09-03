import type { Metadata } from "next";
import LeadHero from "../components/leadership/leadhero";
import SampleTopics from "../components/leadership/sampletopics";

export const metadata: Metadata = {
  title: "Leadership & Speaking",
  description:
    "Explore Edem Adzogenu's leadership engagements and speaking topics on African economic transformation and policy.",
  alternates: { canonical: "/leadership" },
  openGraph: { url: "/leadership", title: "Leadership & Speaking | Edem Adzogenu" },
};

export default function LeadershipPage() {
  return (
    <>
      <LeadHero />
      <SampleTopics />
    </>
  );
}
