"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function PageBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#fbfaf8]">
      {/* Grid lines: slow drift, fading out from 90vh to the bottom of the page */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(20,24,31,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(20,24,31,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to bottom, black 0, black 50vh, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0, black 50vh, transparent 100%)",
        }}
        animate={{ backgroundPosition: ["0px 0px", "64px 64px"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Understated shine — a single refined gold accent, no rainbow blobs */}
      <motion.div
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-accent/[0.14] via-accent/[0.06] to-transparent blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-foreground/[0.05] via-transparent to-transparent blur-3xl"
        animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Fading vignette so grid/shine stay subtle */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent" />

      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
    </div>
  );
}
