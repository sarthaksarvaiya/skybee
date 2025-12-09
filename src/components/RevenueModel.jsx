function RevenueModel() {
  const streams = [
    {
      title: "Direct Panel Sales",
      desc: "Core revenue from PU/PIR panels sold per square meter to contractors, developers and industrial clients.",
    },
    {
      title: "Customized High-Margin Products",
      desc: "Specialty panels such as fire-rated and coated variants tailored to specific requirements.",
    },
    {
      title: "Turnkey Prefab Solutions",
      desc: "Design and installation services for complete prefab structures.",
    },
    {
      title: "Export Sales",
      desc: "Secondary revenue from exports to international markets.",
    },
    {
      title: "Scrap & Offcut Sales",
      desc: "Income from selling leftover materials and production waste.",
    },
  ];

  return (
    <section id="revenue" className="border-b border-slate-200 bg-slate-50/90">
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold">Revenue Model</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {streams.map((stream) => (
            <div
              key={stream.title}
              className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-sm text-slate-600"
            >
              <h3 className="text-sm font-semibold text-emerald-300">
                {stream.title}
              </h3>
              <p className="mt-2 text-xs md:text-sm">{stream.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm text-xs md:text-sm text-slate-600">
          <h3 className="text-sm font-semibold text-emerald-300">
            Fund Utilization Snapshot (₹ 20,00,000)
          </h3>
          <p className="mt-2">
            Technology & machinery setup (30%), raw material procurement (20%),
            marketing & branding (15%), team salaries for 3 months (15%),
            testing & certifications (10%), contingency reserve (10%).
          </p>
        </div>
      </div>
    </section>
  );
}

export default RevenueModel;
