function ProblemsSolutions() {
  return (
    <section
      id="problems"
      className="border-b border-slate-800 bg-slate-950/90"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold">
          Industry Problems & Our Solutions
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Problems */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-red-400">Problems</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
                <span className="font-semibold">Limited supply capacity</span> –
                outdated production methods can't meet the rising demand for
                high-performance panels.
              </li>
              <li className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
                <span className="font-semibold">
                  Inconsistent panel quality
                </span>{" "}
                – traditional batch manufacturing leads to variable density and
                poor bonding.
              </li>
              <li className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
                <span className="font-semibold">High energy losses</span> – poor
                insulation increases power consumption and operating costs.
              </li>
              <li className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2">
                <span className="font-semibold">Short service life</span> –
                substandard panels reduce durability and require frequent
                maintenance.
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-emerald-400">
              Our Solutions
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
                <span className="font-semibold">Automated continuous line</span>{" "}
                – ensures uniform core density and strong bonding at scale.
              </li>
              <li className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
                <span className="font-semibold">
                  Superior thermal performance
                </span>{" "}
                – reduces energy usage and operational costs in cold chain and
                industrial setups.
              </li>
              <li className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
                <span className="font-semibold">Customizable panel range</span>{" "}
                – multiple thicknesses, fire ratings and finishes for diverse
                applications.
              </li>
              <li className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 px-3 py-2">
                <span className="font-semibold">
                  High-speed scalable production
                </span>{" "}
                – fast delivery and reliable supply for large infrastructure and
                prefab projects.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemsSolutions;
