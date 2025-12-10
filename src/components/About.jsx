function About() {
  return (
    <section id="about" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-24 space-y-12">
        <h2 className="text-xl md:text-2xl font-semibold">
          About Bisbee Technology
        </h2>

        {/* Full-width descriptive content */}
        <div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed">
          <p>
            Bisbee Technology India Pvt Ltd is an industrial technology startup
            dedicated to transforming India's insulated construction and cold
            chain infrastructure.
          </p>

          <p>
            We manufacture high-quality PU and PIR sandwich panels using a{" "}
            <span className="font-semibold">
              fully automated continuous production line
            </span>
            , ensuring uniform core density, strong bonding and superior thermal
            performance.
          </p>

          <p>
            Our panels are tailored for applications in{" "}
            <span className="font-semibold">
              cold storage, logistics, pharma, prefab construction, and
              cleanrooms
            </span>
            .
          </p>
        </div>

        {/* Cards stacked vertically (Mission then Vision) */}
        <div className="grid gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-emerald-600">Mission</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              To deliver high-quality, customizable PU/PIR panels that enhance
              energy efficiency, support sustainable growth, and meet diverse
              industrial needs through innovation and precision.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-emerald-600">Vision</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              To lead India’s insulated infrastructure revolution with
              world-class, energy-efficient sandwich panels manufactured using
              advanced continuous production technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
