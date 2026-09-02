import Image from "next/image";
import nkrumah from "../../assets/nkrumah.jpeg";
import mandela from "../../assets/mandela.webp";

export default function LeadHero() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-10">
      <div className="mx-auto flex h-[40vh] w-full max-w-5xl gap-1 overflow-hidden border border-black/10 sm:h-[60vh] sm:gap-2" style={{ borderRadius: "var(--radius-minimal)" }}>
        <div className="relative h-full w-1/2">
          <Image
            src={nkrumah}
            alt="Kwame Nkrumah"
            fill
            priority
            className="object-cover grayscale"
          />
        </div>
        <div className="relative h-full w-1/2">
          <Image
            src={mandela}
            alt="Nelson Mandela"
            fill
            priority
            className="object-cover grayscale"
          />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-10 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Writing &amp; Ideas
        </span>
        <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Thoughtful Leadership
        </h1>
      </div>
    </section>
  );
}
