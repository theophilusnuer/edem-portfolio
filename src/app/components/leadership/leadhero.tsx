import Image from "next/image";
import nkrumah from "../../assets/nkrumah.jpeg";
import mandela from "../../assets/mandela.webp";

export default function LeadHero() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-10">
      <div className="mx-auto flex h-[40vh] w-full max-w-5xl gap-4 sm:h-[60vh] sm:gap-8">
        <div className="relative h-full w-1/2">
          <Image
            src={nkrumah}
            alt="Kwame Nkrumah"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="relative h-full w-1/2">
          <Image
            src={mandela}
            alt="Nelson Mandela"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <h1 className="mx-auto max-w-4xl px-4 py-10 text-center font-outfit text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
        Thoughtful Leadership
      </h1>
    </section>
  );
}
