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
            Bisbee Technology India Pvt Ltd is a pioneering manufacturing
            startup focused on producing high-quality continuous{" "}
            <span className="font-semibold">
              PU/PIR & Rockwool sandwich panels
            </span>{" "}
            for India’s rapidly growing cold chain, prefab construction,
            logistics, and industrial infrastructure sectors.
          </p>

          <p>
            By establishing a{" "}
            <span className="font-semibold">
              state-of-the-art fully automated continuous production line
            </span>
            , Bisbee aims to revolutionize the Indian insulated panel market
            with products that deliver superior thermal performance, enhanced
            fire safety, and consistent, reliable quality.
          </p>

          <p>
            Unlike traditional batch manufacturing processes, Bisbee’s advanced
            continuous technology enables{" "}
            <span className="font-semibold">
              high-speed, large-scale production
            </span>{" "}
            with uniform core density and exceptional bonding
            strength—addressing long-standing challenges of inconsistent quality
            and limited supply.
          </p>

          <p>
            Our flexible manufacturing setup allows customization of{" "}
            <span className="font-semibold">
              panel thickness, lengths, surface finishes, and fire-rated
              solutions
            </span>
            , serving a wide range of applications including{" "}
            <span className="font-semibold">
              cold storage, cleanrooms, modular buildings, and warehouses
            </span>
            .
          </p>
        </div>

        {/* Cards stacked vertically (Mission then Vision) */}
        <div className="grid gap-6">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-emerald-600">Mission</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              To revolutionize India's insulated construction and cold chain
              infrastructure by becoming the leading manufacturer of
              world-class, energy-efficient, and customizable sandwich panels
              produced through advanced continuous technology.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-emerald-600">Vision</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              To enhance energy efficiency and construction quality across
              India, Bisbee Technology India Pvt Ltd combines advanced
              manufacturing technology, customercentric solutions, and scalable
              capacity to meet the country's growing demand for modern,
              sustainable building materials.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
