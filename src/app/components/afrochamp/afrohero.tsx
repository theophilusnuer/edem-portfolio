"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Volume2, VolumeX } from "lucide-react";

const YOUTUBE_VIDEO_ID = "SaRwHGmI4zw";

export default function AfroHero() {
  const [muted, setMuted] = useState(true);

  const videoSrc = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=${
    muted ? 1 : 0
  }&loop=1&playlist=${YOUTUBE_VIDEO_ID}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`;

  return (
    <section className="relative overflow-hidden bg-[#080b0f]">
      <div className="relative h-[75vh] min-h-[520px] w-full overflow-hidden sm:h-[85vh] sm:min-h-[640px]">
        {/* Autoplaying background video */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <iframe
            key={muted ? "muted" : "unmuted"} // force remount when mute changes
            className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2"
            src={videoSrc}
            title="AfroChampions"
            allow="autoplay; encrypted-media"
            aria-hidden="true"
          />
        </div>

        {/* Soft floating lights */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[10%] top-[15%] h-48 w-48 rounded-full bg-amber-300/20 blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[12%] top-[35%] h-64 w-64 rounded-full bg-emerald-300/15 blur-3xl"
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b0f] via-black/45 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

        {/* Centered content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-5">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5 flex items-center justify-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300/90 sm:mb-6 sm:text-xs"
            >
              <span className="h-px w-8 bg-amber-300/60" />
              AfroChampions
              <span className="h-px w-8 bg-amber-300/60" />
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-outfit text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-[3.75rem]"
            >
              Building systems that connect Africa across borders
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/70 sm:mt-7 sm:text-base md:text-lg"
            >
              A public-private partnership platform dedicated to strengthening
              coordination, trust and innovation across the continent.
            </motion.p>
          </div>
        </div>

        {/* Audio toggle */}
        <button
          onClick={() => setMuted((prev) => !prev)}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-6 right-5 z-20 flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3.5 py-2 text-white/80 backdrop-blur-md transition hover:border-white/50 hover:bg-black/55 hover:text-white sm:bottom-8 sm:right-8"
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          <span className="text-[10px] font-medium uppercase tracking-[0.15em]">
            {muted ? "Sound off" : "Sound on"}
          </span>
        </button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 sm:bottom-8"
        >
          <div className="flex flex-col items-center gap-2 text-white/55">
            <span className="text-[9px] uppercase tracking-[0.3em]">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30"
            >
              <ArrowDown size={12} strokeWidth={1.5} />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}