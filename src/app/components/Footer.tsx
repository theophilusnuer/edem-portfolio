"use client";

import { usePathname } from "next/navigation";

// Background color per route — add an entry here to theme the footer on a new page.
const COLORS_BY_PATH: Record<string, string> = {
  "/": "bg-[#111827]",
  "/about": "bg-[#1c1917]",
  "/afrochampions": "bg-black",
  "/leadership": "bg-[#0f172a]",
  "/roles": "bg-[#111827]",
  "/mediakit": "bg-[#151515]",
  "/contact": "bg-[#111827]",
};

const DEFAULT_COLOR = "bg-[#111827]";

type FooterProps = {
  color?: string;
};

export default function Footer({ color }: FooterProps) {
  const pathname = usePathname();
  const bgColor = color ?? COLORS_BY_PATH[pathname] ?? DEFAULT_COLOR;

  return (
    <footer className={bgColor}>
      <div className="mx-auto max-w-7xl px-6 py-7 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-outfit text-sm font-semibold tracking-[0.12em] text-slate-400">
            EDEM ADZOGENU
          </p>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Copyright
          </p>
        </div>
      </div>
    </footer>
  );
}