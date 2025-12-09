function Hero() {
  return (
    <section
      id="hero"
      className="border-b border-slate-800 bg-linear-to-b from-slate-900 to-slate-950"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
        <div className="flex-1 space-y-6">
          <p className="inline-flex rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            Industrial Technology Startup • PU/PIR Sandwich Panels
          </p>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Innovating insulation with{" "}
            <span className="text-emerald-400">precision panels</span> for
            smarter, sustainable infrastructure.
          </h1>

          <p className="text-sm md:text-base text-slate-300 max-w-xl">
            Bisbee Technology India Pvt Ltd specializes in high-quality PU and
            PIR sandwich panels using a fully automated continuous production
            line—delivering consistent density, superior thermal performance,
            and customizable solutions for cold chain and infrastructure.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#offerings"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-slate-600 px-4 py-2 text-sm font-medium text-slate-100 hover:border-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Talk to Our Team
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="text-slate-400">Technology</p>
              <p className="font-semibold">Automated Continuous Line</p>
            </div>
            <div>
              <p className="text-slate-400">Core Focus</p>
              <p className="font-semibold">Energy-efficient Panels</p>
            </div>
            <div>
              <p className="text-slate-400">Key Sectors</p>
              <p className="font-semibold">Cold Storage, Pharma, Infra</p>
            </div>
            <div>
              <p className="text-slate-400">USP</p>
              <p className="font-semibold">Consistent Quality at Scale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
