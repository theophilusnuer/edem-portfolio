"use client"
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";  

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};
export default function Expertise() {
  const expertise = [
  "Systems design",
  "Public-private partnerships",
  "Innovation strategy",
  "Governance reform",
  "Continental integration",
];

    return (
    <section className="bg-[#f1efe9]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-32">
          <div className="grid lg:grid-cols-12 lg:gap-16">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <p className="text-base font-semibold uppercase tracking-[0.3em] text-amber-600">
                 Areas of expertise
              </p>

              <h2 className="mt-5 max-w-md font-outfit text-4xl font-medium leading-[1] tracking-[-0.045em] text-slate-950 sm:text-5xl">
                Where experience
                <span className="block text-slate-400">
                  meets influence.
                </span>
              </h2>
            </motion.div>

            <div className="mt-12 lg:col-span-8 lg:mt-0">
              <p className="max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                These roles reflect a broader body of work focused on
                designing systems, connecting institutions, and creating
                practical pathways for collaboration across sectors and
                borders.
              </p>

              <div className="mt-12 border-t border-slate-900/15">
                {expertise.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                    className="group flex items-center justify-between border-b border-slate-900/10 py-5 sm:py-6"
                  >
                    <div className="flex items-center gap-5">
                      <span className="font-outfit text-xs text-slate-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="font-outfit text-lg font-medium tracking-[-0.015em] text-slate-800 sm:text-xl">
                        {area}
                      </span>
                    </div>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.2}
                      className="text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-amber-600"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}