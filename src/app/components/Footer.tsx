import Link from "next/link";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "AfroChampions", href: "/afrochampions" },
      { label: "Leadership", href: "/leadership" },
      { label: "Advisory & Governance Roles", href: "/roles" },
    ],
  },
  {
    heading: "Press",
    links: [
      { label: "Media Kit", href: "/mediakit" },
      { label: "Get In Touch", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-black/[0.06]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-2 md:px-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-16">
        <div>
          <p className="font-display text-2xl italic text-foreground">
            Edem Adzogenu
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/60">
            International Business and Policy Consultant, entrepreneur, and
            Founder &amp; Co Chair of AfroChampions.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h3 className="font-outfit text-xs font-semibold uppercase tracking-[0.2em] text-foreground/40">
              {col.heading}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-black/[0.06] px-6 py-6 text-xs text-foreground/40 sm:flex-row md:px-10 lg:px-16">
        <p>&copy; {year} Edem Adzogenu. All rights reserved.</p>
        <p>Founder &amp; Co Chair, AfroChampions</p>
      </div>

      <p
        aria-hidden
        className="select-none overflow-hidden whitespace-nowrap pb-2 text-center font-outfit text-4xl font-normal leading-none text-black/[0.04] sm:text-5xl md:text-7xl lg:text-9xl"
      >
        EDEM ADZOGENU
      </p>
    </footer>
  );
}
