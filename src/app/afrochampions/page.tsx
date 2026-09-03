import AfroHero from "../components/afrochamp/afrohero";
import Overview from "../components/afrochamp/overview";
import Activities from "../components/afrochamp/activities";
import WhyAfro from "../components/afrochamp/whyAfro";
import AfroClosing from "../components/afrochamp/afroClosing";

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
