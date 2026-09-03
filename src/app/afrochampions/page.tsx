import type { Metadata } from "next";
import AfroHero from "../components/afrochamp/afrohero";
import Overview from "../components/afrochamp/overview";
import Activities from "../components/afrochamp/activities";
import WhyAfro from "../components/afrochamp/whyAfro";
import AfroClosing from "../components/afrochamp/afroClosing";

export const metadata: Metadata = {
  title: "AfroChampions",
  description:
    "AfroChampions is a pan-African platform founded by Edem Adzogenu to mobilise investment and advance Africa's economic transformation.",
  alternates: { canonical: "/afrochampions" },
  openGraph: { url: "/afrochampions", title: "AfroChampions | Edem Adzogenu" },
};

export default function AfroChampionsPage() {
  return (
    <>
      <AfroHero />
      <Overview />
      <WhyAfro />
      <Activities />
      <AfroClosing />
    </>
  );
}
