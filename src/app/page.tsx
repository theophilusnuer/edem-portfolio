import Hero from "./components/homepage/Hero";
import IntroSection from "./components/homepage/Introsection";
import FeaturedWorks from "./components/homepage/featuredWorks";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
   <div>
    <Hero/>
    <IntroSection/>
    <FeaturedWorks/>
    <ContactForm />
   </div>
  );
}
