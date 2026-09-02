import Image, { type StaticImageData } from "next/image";

type CardProps = {
  image: StaticImageData | string;
  alt: string;
  title: string;
  description: string;
};

export default function Card({
  image,
  alt,
  title,
  description,
}: CardProps) {
  return (
    <div className="flex w-full max-w-md flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain border-black/20 border-1"
        />
      </div>
      <h3 className="mt-4 font-outfit text-xl font-semibold text-slate-900">
        {title}
      </h3>
      <p className="mt-2 leading-relaxed text-slate-600">
        {description}
      </p>
    </div>
  );
}
