"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
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

  // On non-home pages we always want the translucent style
  const isSolid = !isHome || scrolled;

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHome]);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isSolid
          ? "  bg-white/75  backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-center px-5 sm:h-20 sm:px-6">
        {/* DESKTOP NAVIGATION */}
        <div className="hidden w-full items-center justify-between lg:flex">
          {/* LOGO */}
          <Link href="/" className="group flex shrink-0 items-center gap-3">
            <div
              className={`relative h-9 w-9 overflow-hidden rounded-full ring-2 transition-all duration-300 sm:h-10 sm:w-10 ${
                isSolid ? "ring-slate-200 " : "ring-white/40"
              }`}
            >
              <Image
                src={logo}
                alt="Edem Adzogenu"
                fill
                className="object-cover"
                sizes="40px"
                priority
              />
            </div>

            <span
              className={`font-outfit text-base font-semibold tracking-tight transition-colors duration-300 ${
                isSolid ? "text-slate-900" : "text-white"
              }`}
            >
              Edem Adzogenu
            </span>
          </Link>

          {/* CENTRED MENU */}
          <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-6 xl:gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`whitespace-nowrap text-sm font-medium transition-all duration-300 hover:underline hover:underline-offset-4 ${
                  isSolid ? "text-slate-800" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CONTACT */}
          <Link
            href="/contact"
            className={`shrink-0 rounded-sm border px-5 py-2 text-sm font-medium transition-all duration-300 ${
              isSolid
                ? "border-slate-900 bg-slate-900 text-white hover:bg-transparent hover:text-slate-900"
                : "border-white/80 bg-white text-slate-900 hover:bg-transparent hover:text-white"
            }`}
          >
            Get In Touch
          </Link>
        </div>

        {/* MOBILE HEADER */}
        <div className="flex w-full items-center justify-between lg:hidden">
          <Link href="/" className="flex items-center gap-2.5">
            <div
              className={`relative h-9 w-9 overflow-hidden rounded-full ring-2 transition-all duration-300 ${
                isSolid ? "ring-slate-200" : "ring-white/40"
              }`}
            >
              <Image
                src={logo}
                alt="Edem Adzogenu"
                fill
                className="object-cover"
                sizes="36px"
                priority
              />
            </div>

            <span
              className={`font-outfit text-base font-semibold tracking-tight transition-colors duration-300 ${
                isSolid ? "text-slate-900" : "text-white"
              }`}
            >
              Edem Adzogenu
            </span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className={`flex h-10 w-10 items-center justify-center transition-colors ${
              isSolid ? "text-slate-900" : "text-white"
            }`}
          >
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        } ${
          isSolid
            ? "border-t border-slate-200/60 bg-white/90 backdrop-blur-xl"
            : "border-t border-white/10 bg-black/30 backdrop-blur-xl"
        }`}
      >
        <div className="flex flex-col px-5 pb-6 pt-1">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`border-b py-3.5 text-sm font-medium transition-colors ${
                isSolid
                  ? "border-slate-100 text-slate-900"
                  : "border-white/15 text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className={`mt-5 rounded-sm border px-5 py-3 text-center text-sm font-medium transition-all ${
              isSolid
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-white bg-white text-slate-900"
            }`}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;