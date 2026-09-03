import type { Metadata } from "next";
import MediaKitHero from "../components/mediakit/mediakithero";

export const metadata: Metadata = {
  title: "Media Kit",
  description: "Media kit and press resources for Edem Adzogenu.",
  alternates: { canonical: "/mediakit" },
  openGraph: { url: "/mediakit", title: "Media Kit | Edem Adzogenu" },
};

export default function MediaKitPage() {
  return <MediaKitHero />;
}
