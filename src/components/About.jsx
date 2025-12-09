function About() {
  return (
    <section id="about" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold">
          About Bisbee Technology
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 text-sm md:text-base text-slate-300">
            <p>
              Bisbee Technology India Pvt Ltd is an industrial technology
              startup dedicated to transforming India's insulated construction
              and cold chain infrastructure.
            </p>
            <p>
              We manufacture high-quality PU and PIR sandwich panels using a{" "}
              <span className="font-semibold">
                fully automated continuous production line
              </span>
              , ensuring uniform core density, strong bonding and superior
              thermal performance.
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

          <div className="space-y-5">
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold text-emerald-300">
                Mission
              </h3>
              <p className="mt-2 text-sm text-slate-300">
                To deliver high-quality, customizable PU/PIR panels that enhance
                energy efficiency, support sustainable growth, and meet diverse
                industrial needs through innovation and precision.
              </p>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <h3 className="text-sm font-semibold text-emerald-300">Vision</h3>
              <p className="mt-2 text-sm text-slate-300">
                To lead India’s insulated infrastructure revolution with
                world-class, energy-efficient sandwich panels manufactured using
                advanced continuous production technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
