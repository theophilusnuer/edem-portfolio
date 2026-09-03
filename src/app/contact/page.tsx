import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Edem Adzogenu.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact | Edem Adzogenu" },
};

export default function ContactPage() {
  return <ContactForm />;
}
