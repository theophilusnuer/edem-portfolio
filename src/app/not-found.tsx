import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="font-outfit text-7xl font-bold text-slate-900 md:text-8xl">
        404
      </p>
      <h1 className="mt-4 font-outfit text-2xl font-semibold text-slate-900 md:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or may have been
        moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-transform hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}
