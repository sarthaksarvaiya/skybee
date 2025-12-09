function Team() {
  const members = [
    {
      name: "Dr. Ashokbhai R. Bodar",
      role: "Director",
      share: "Shareholding – 90%",
      bio: "BHMS graduate with 7 years of business experience, providing strategic leadership and industrial insight.",
    },
    {
      name: "Jagdishbhai V. Padshala",
      role: "Director",
      share: "Shareholding – 5%",
      bio: "Diploma Mechanical Engineer with 10+ years of industry experience, leading technical and production operations.",
    },
    {
      name: "Prakash C. Savaliya",
      role: "Director",
      share: "Shareholding – 5%",
      bio: "MBA graduate contributing to marketing, operations and business development.",
    },
  ];

  return (
    <section id="team" className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold">Our Leadership</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {members.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300"
            >
              <p className="text-sm font-semibold text-emerald-300">{m.name}</p>
              <p className="text-xs text-slate-400">
                {m.role} · {m.share}
              </p>
              <p className="mt-3 text-xs md:text-sm">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
