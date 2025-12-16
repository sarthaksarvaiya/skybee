import { FiPhone, FiMail, FiMapPin, FiGlobe, FiUser } from "react-icons/fi";

function Contact() {
  return (
    <section
      id="contact"
      className="border-b border-slate-200 bg-linear-to-b from-sky-50 to-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Contact Us
        </h2>

        <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-600">
          {/* LEFT — INFO (Old Style With Icons Added) */}
          <div className="space-y-3">
            {/* Company */}
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wide">
                Company
              </p>
              <p className="font-semibold text-slate-800 flex items-center gap-2">
                <FiGlobe className="text-sky-600" />
                BISBEE TECHNOLOGY INDIA PRIVATE LIMITED
              </p>
            </div>

            {/* Head office & Factory address */}
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wide">
                Head office & Factory address
              </p>
              <div className="flex items-start gap-2">
                <FiMapPin className="text-sky-600 mt-1" />
                <p>
                  Khata No. 137, R.Survey No. 2, Nabipur Jhanor Road,
                  <br />
                  Bambusar, Bharuch, Gujarat –{" "}
                  <span className="font-semibold">392210</span>
                </p>
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wide">
                Email
              </p>
              <div className="flex items-center gap-2 pt-1">
                <FiMail className="text-sky-600" />
                <a
                  href="mailto:info@skybeepufpanel.com"
                  className="text-emerald-600 underline-offset-2 hover:underline font-semibold"
                >
                  info@skybeepufpanel.com
                </a>
              </div>
            </div>

            {/* Website */}
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wide">
                Website
              </p>
              <div className="flex items-center gap-2">
                <FiGlobe className="text-sky-600" />
                <p className="font-semibold text-slate-800">
                  www.skybeepufpanel.com
                </p>
              </div>
            </div>

            {/* Phone */}
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wide">
                Mobile
              </p>
              <div className="flex items-start gap-2">
                <FiPhone className="text-sky-600 mt-1" />
                <p className="font-semibold leading-relaxed">+91 96873 96878</p>
              </div>
            </div>
          </div>

          {/* RIGHT — OLD STYLE FORM + Icons */}
          <form className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            {/* Name */}
            <div>
              <label className="text-xs text-slate-400">Name</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 px-3 py-1.5 text-xs outline-none focus:border-emerald-400"
                  placeholder="Your name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs text-slate-400">Email</label>
              <div className="relative">
                <FiMail className="absolute left-3 top-3.5 text-slate-400" />
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 px-3 py-1.5 text-xs outline-none focus:border-emerald-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            {/* Phone */}
            <div>
              <label className="text-xs text-slate-400">Phone</label>
              <div className="relative">
                <FiPhone className="absolute left-3 top-3 text-slate-400" />
                <input
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 px-3 py-1.5 text-xs outline-none focus:border-emerald-400"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-xs text-slate-400">Message</label>
              <textarea
                rows={3}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs outline-none focus:border-emerald-400"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="button"
              className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-400 transition-colors"
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
