import Image, { type StaticImageData } from "next/image";

type CardProps = {
  image: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
};

export default function Card({ image, alt, title, description }: CardProps) {
  return (
    <div className="group flex h-full w-full flex-col overflow-hidden border border-black/[0.08] bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_18px_40px_-24px_rgba(20,24,31,0.35)]" style={{ borderRadius: "var(--radius-minimal)" }}>
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-black/[0.06] bg-white">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-outfit text-lg font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
          {description}
        </p>
      </div>
    </div>
  );
}
