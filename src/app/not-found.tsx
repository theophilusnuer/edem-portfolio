import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-7xl font-medium text-foreground md:text-8xl">
        404
      </p>
      <h1 className="mt-4 font-outfit text-2xl font-semibold text-foreground md:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-foreground/65">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link
        href="/"
        className="mt-8 border border-foreground bg-foreground px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-foreground"
        style={{ borderRadius: "var(--radius-minimal)" }}
      >
        Back to Home
      </Link>
    </div>
  );
}
