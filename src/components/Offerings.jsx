function Offerings() {
  const items = [
    {
      title: "PU/PIR Sandwich Panels",
      desc: "High-performance insulated panels with excellent thermal efficiency and structural strength.",
    },
    {
      title: "Customizable Panel Solutions",
      desc: "Panels tailored in thickness, length, coating and fire rating to match project needs.",
    },
    {
      title: "Fire-Rated & Specialty Panels",
      desc: "Enhanced safety and compliance for demanding environments like cleanrooms and pharma.",
    },
    {
      title: "Turnkey Solutions (Planned)",
      desc: "End-to-end prefab structures including design, supply and installation.",
    },
    {
      title: "Export-Ready Panel Supply",
      desc: "Panels designed for international standards and export markets.",
    },
  ];

  return (
    <section id="offerings" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold">Our Offerings</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
            >
              <h3 className="text-sm font-semibold text-emerald-300">
                {item.title}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-slate-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offerings;
