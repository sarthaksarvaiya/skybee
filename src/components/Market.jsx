function Market() {
  return (
    <section id="market" className="border-b border-slate-800 bg-slate-950/90">
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold">Market & Clients</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
            <h3 className="text-sm font-semibold text-emerald-300">
              India Sandwich Panel Market
            </h3>
            <p>
              Projected CAGR of <span className="font-semibold">8.07%</span>{" "}
              from FY2025–FY2032, growing from{" "}
              <span className="font-semibold">USD 558.61 million</span> to{" "}
              <span className="font-semibold">USD 1,039.32 million</span>.
            </p>

            <h3 className="mt-4 text-sm font-semibold text-emerald-300">
              India Construction Market
            </h3>
            <p>
              Valued at <span className="font-semibold">USD 1.04 trillion</span>{" "}
              in 2024, projected to reach{" "}
              <span className="font-semibold">USD 2.13 trillion</span> by 2030
              with a CAGR of <span className="font-semibold">12.1%</span>.
            </p>
          </div>

          <div className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
            <h3 className="text-sm font-semibold text-emerald-300">
              Target Customers
            </h3>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                Contractors & developers in industrial and prefab projects
              </li>
              <li>
                Cold storage, food processing, pharma and logistics park owners
              </li>
              <li>Refrigeration & modular building companies</li>
              <li>Export market clients in neighboring countries</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Market;
