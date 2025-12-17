import { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiGlobe, FiUser } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch(
        "https://skybee-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

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
          {/* LEFT — INFO (UNCHANGED) */}
          <div className="space-y-3">
            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wide">
                Company
              </p>
              <p className="font-semibold text-slate-800 flex items-center gap-2">
                <FiGlobe className="text-sky-600" />
                BISBEE TECHNOLOGY INDIA PRIVATE LIMITED
              </p>
            </div>

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

            <div>
              <p className="text-slate-400 text-xs uppercase tracking-wide">
                Mobile
              </p>
              <div className="flex items-start gap-2">
                <FiPhone className="text-sky-600 mt-1" />
                <p className="font-semibold leading-relaxed">
                  +91 96873 96878
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — CONNECTED FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            {/* Name */}
            <div>
              <label className="text-xs text-slate-400">Name</label>
              <div className="relative">
                <FiUser className="absolute left-3 top-3 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 pl-10 px-3 py-1.5 text-xs outline-none focus:border-emerald-400"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="text-xs text-slate-400">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={3}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-1.5 text-xs outline-none focus:border-emerald-400"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {/* Status Message */}
            {status === "success" && (
              <p className="text-xs text-emerald-600 font-semibold">
                ✅ Message sent successfully
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-500 font-semibold">
                ❌ Failed to send message
              </p>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-400 disabled:opacity-50 transition-colors"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
