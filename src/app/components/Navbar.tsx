"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../assets/logo.jpeg"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "AfroChampions", href: "/afrochampions" },
  { label: "Leadership", href: "/leadership" },
  { label: "Media Kit", href: "/mediakit" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#ffffff]">
      <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 md:px-4">
        {/* LOGO */}
        <Link href="/" className="font-outfit text-lg font-semibold text-slate-900 flex items-center">
          <Image
            src={logo}
            alt="Edem Adzogenu"
            width={35}
            height={35}
            className="rounded-full"
          />
          <h4 className="ml-4 font-outfit text-lg font-semibold text-slate-900">
            Edem Adzogenu
          </h4>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center space-x-8 lg:flex ">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium text-slate-900 hover:underline hover:underline-offset-4"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="bg-slate-900 px-4 py-1 text-white"
          >
            Get In Touch 
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-slate-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
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
      {mobileOpen && (
        <div className="bg-[#ffffff] lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-4 py-3 text-slate-900"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="p-4">
              <Link
                href="/contact"
                className="block w-full bg-slate-900 p-1 text-center text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get In Touch 
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
