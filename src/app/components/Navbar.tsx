"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "AfroChampions", href: "/afrochampions" },
  { label: "Leadership", href: "/leadership" },
  { label: "Advisory & Governance Roles", href: "/roles" },
  { label: "Media Kit", href: "/mediakit" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-black/[0.06] bg-white/80 backdrop-blur-md"
          : "border-transparent bg-white/40 backdrop-blur-sm"
      }`}
    >
      <div className="relative mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-6">
        {/* LOGO */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-outfit text-lg font-semibold tracking-tight text-foreground"
        >
          <span
            className="relative block h-9 w-9 overflow-hidden border border-black/10 grayscale transition-all duration-300 group-hover:grayscale-0"
            style={{ borderRadius: "var(--radius-minimal)" }}
          >
            <Image src={logo} alt="Edem Adzogenu" fill sizes="36px" className="object-cover" />
          </span>
          <span className="font-display text-lg italic leading-none">Edem Adzogenu</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-x-7 lg:flex">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className="group relative py-2 text-[13px] font-medium tracking-wide text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-accent transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="border border-foreground bg-foreground px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-transparent hover:text-foreground"
            style={{ borderRadius: "var(--radius-minimal)" }}
          >
            Get In Touch
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="flex h-9 w-9 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <svg
            className="h-5 w-5 text-foreground"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-black/[0.06] bg-white/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-black/[0.04] px-5 py-3.5 text-sm font-medium text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              <div className="p-5">
                <Link
                  href="/contact"
                  className="block w-full bg-foreground p-3 text-center text-sm font-semibold text-white"
                  style={{ borderRadius: "var(--radius-minimal)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
