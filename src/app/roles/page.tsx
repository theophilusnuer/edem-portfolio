import type { Metadata } from "next";
import RolesHero from "../components/roles/roleshero";
import CurrentRole from "../components/roles/currentrole";
import Expertise from "../components/roles/expertise";

export const metadata: Metadata = {
  title: "Roles & Expertise",
  description:
    "Discover Edem Adzogenu's current roles and areas of expertise in international business and policy.",
  alternates: { canonical: "/roles" },
  openGraph: { url: "/roles", title: "Roles & Expertise | Edem Adzogenu" },
};

export default function RolesPage() {
  return (
    <div>
      <RolesHero />
      <CurrentRole />
      <Expertise/>
    </div>
    
  )
}
