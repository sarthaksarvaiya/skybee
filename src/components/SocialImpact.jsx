function SocialImpact() {
  const impacts = [
    "Reduces energy consumption in cold storage and infrastructure, supporting environmental conservation.",
    "Strengthens cold chain reliability, minimizing post-harvest losses and supporting food security.",
    "Creates skilled and semi-skilled employment through advanced manufacturing operations.",
    "Supports modern, durable structures in rural and industrial areas.",
    "Uses eco-friendly practices that minimize material waste and carbon footprint.",
  ];

  return (
    <section id="impact" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold">Social Impact</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="text-sm text-slate-300">
            <p>
              Bisbee Technology is not just improving industrial insulation—it
              is enabling more sustainable, efficient and secure infrastructure
              across India.
            </p>
          </div>

          <ul className="space-y-3 text-sm text-slate-300">
            {impacts.map((item, i) => (
              <li
                key={i}
                className="rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SocialImpact;
