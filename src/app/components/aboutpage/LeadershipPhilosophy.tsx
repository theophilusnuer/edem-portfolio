export function LeadershipPhilosophy() {
  return (
    <section className="bg-[#f5f4f0] py-16 sm:py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-1.5 w-12 bg-amber-500" />

                <span className="text-base font-semibold uppercase tracking-[0.25em] text-slate-600">
                  Leadership Philosophy
                </span>
            </div>
          </div>

          <div className="mt-8 lg:col-span-8 lg:col-start-5 lg:mt-0">
            <p className="font-outfit text-3xl font-medium leading-[1.2] tracking-[-0.025em] text-slate-900 sm:text-4xl md:text-5xl">
              Africa's future depends on structures capable of responding to
              fast-shifting opportunities.
            </p>

            <div className="mt-8 h-px w-full bg-slate-400" />

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              The work is rooted in systems thinking, collaborative innovation,
              and the belief that meaningful transformation comes from
              connecting the right institutions, people and resources around
              shared objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}