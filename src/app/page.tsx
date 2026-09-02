import Hero from "./components/homepage/Hero";
import FeaturedWorks from "./components/homepage/featuredWorks";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
   <div>
    <Hero/>
    <FeaturedWorks/>
    <ContactForm />
   </div>
  );
}
