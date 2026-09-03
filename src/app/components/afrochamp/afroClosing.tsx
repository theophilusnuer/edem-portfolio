import Link from "next/link";
import { ArrowUpRight } from "lucide-react";


export default function AfroClosing() {
  return (
    <section className="relative overflow-hidden bg-black">

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative mx-auto flex max-w-7xl items-end px-6 py-16 sm:px-10 sm:py-20 lg:px-16">

        <div className="grid w-full lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-9">

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-amber-500">
              Work with AfroChampions
            </span>

            <h2 className="mt-7 max-w-5xl font-outfit text-5xl font-semibold leading-[0.92] tracking-[-0.055em] text-white sm:text-6xl md:text-7xl lg:text-[7rem]">
              Integration is
              <span className="block text-white/35">
                built together.
              </span>
            </h2>

          </div>

          <div className="mt-10 lg:col-span-3 lg:mt-0 lg:flex lg:justify-end">

            <Link
              href="/contact"
              className="group flex w-fit items-center gap-4 border border-amber-500 px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              Start a conversation

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}