"use client"
import React from 'react'
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
export default function CurrentRole() {

    const roles = [
  {
    position: "Co-Chair",
    institution: "Pandemic Fund External Advisory Council",
    category: "GLOBAL HEALTH",
  },
  {
    position: "Member",
    institution: "Governing Council — African Public Health Foundation",
    category: "PUBLIC HEALTH",
  },
  {
    position: "Non-Executive Director",
    institution: "Capital Hospital Group",
    category: "HEALTHCARE",
  },
  {
    position: "Board Member",
    institution: "PEPFAR Scientific Advisory Board",
    category: "GLOBAL HEALTH",
  },
  {
    position: "Vice Chairman",
    institution: "Nigeria Digital Health Initiative",
    category: "DIGITAL HEALTH",
  },
  {
    position: "Board Member",
    institution: "Agridex",
    category: "AGRITECH",
  },
  {
    position: "Senior Advisor on Innovation and Digitization",
    institution: "Africa CDC",
    category: "INNOVATION",
  },
];
  return (
    <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:px-16 lg:py-36">
          <div className="grid lg:grid-cols-12 lg:gap-16">
            {/* Section heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-3"
            >

              <h2 className="mt-5 font-outfit text-3xl font-medium tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Current
                <span className="block text-slate-400">roles.</span>
              </h2>

              <p className="mt-6 max-w-xs text-sm leading-7 text-slate-500">
                Institutional responsibilities spanning public health,
                technology, investment, governance, and continental
                development.
              </p>
            </motion.div>

            {/* Role list */}
            <div className="mt-12 lg:col-span-9 lg:mt-0">
              <div className="border-t border-slate-900">
                {roles.map((role, index) => (
                  <motion.div
                    key={role.institution}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                      once: true,
                      margin: "-50px",
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.06,
                    }}
                    className="group relative border-b border-slate-200"
                  >
                    <div className="grid grid-cols-12 gap-4 py-7 transition-all duration-300 sm:py-9 lg:py-10">
                      {/* Number */}
                      <div className="col-span-2 sm:col-span-1">
                        <span className="font-outfit text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:text-amber-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      {/* Main information */}
                      <div className="col-span-9 sm:col-span-8">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                          {role.category}
                        </p>

                        <h3 className="font-outfit text-xl font-medium leading-tight tracking-[-0.025em] text-slate-900 transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl lg:text-[1.7rem]">
                          {role.position}
                        </h3>

                        <p className="mt-2 max-w-xl text-sm leading-6 text-amber-500 sm:text-base">
                          {role.institution}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="col-span-1 flex items-center justify-end">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white sm:h-10 sm:w-10">
                          <ArrowUpRight
                            size={15}
                            strokeWidth={1.4}
                            className="transition-transform duration-300 group-hover:rotate-45"
                          />
                        </span>
                      </div>
                    </div>

                    {/* Hover accent */}
                    <div className="absolute bottom-0 left-0 h-px w-0 bg-amber-500 transition-all duration-500 group-hover:w-full" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

  )
};