function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-slate-200 bg-linear-to-b from-sky-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
        <h2 className="text-xl md:text-2xl font-semibold">Contact Us</h2>

        <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-600">
          <div className="space-y-2">
            <p className="text-slate-400 text-xs uppercase tracking-wide">
              Reach Out
            </p>
            <p>
              Phone: <span className="font-semibold">+91 96873 96878</span>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:bisbeetechnology@gmail.com"
                className="text-emerald-300 underline-offset-2 hover:underline"
              >
                bisbeetechnology@gmail.com
              </a>
            </p>
            <p>
              Location:{" "}
              <span className="font-semibold">Gujarat, India – 393002</span>
            </p>
            <p>
              Website:{" "}
              <span className="font-semibold">
                bisbeetechnology.com · bisbeetechnology.in
              </span>
            </p>
          </div>

          <form className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs text-slate-400">
              (Frontend demo form – can be wired to backend later)
            </p>
            <div>
              <label className="text-xs text-slate-400">Name</label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-emerald-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400">Email</label>
              <input
                type="email"
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-emerald-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400">Message</label>
              <textarea
                rows={3}
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-50 px-3 py-2 text-xs outline-none focus:border-emerald-400"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="button"
              className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
