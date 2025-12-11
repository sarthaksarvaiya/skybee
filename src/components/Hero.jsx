import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

import img4 from "../assets/hero-4.jpg";
import img5 from "../assets/hero-5.jpg";

const heroImages = [img4, img5];

export default function Hero() {
  // adjust this to match your Navbar height (px)
  const NAV_HEIGHT = 64;

  const contentRef = useRef(null);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setContentVisible(true);
            observer.unobserve(el);
          }
        });
      },
      { root: null, threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToContent = (e) => {
    e.preventDefault();
    const el = contentRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  };

  /* icons and Feature component unchanged... (kept as in your original) */
  const ShieldIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
    </svg>
  );
  const ExteriorIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
  const InteriorIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 6h16v12H4z" />
      <path d="M8 6v12M16 6v12" />
    </svg>
  );
  const AirtightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
  const CoatingIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 2v20" />
      <path d="M5 7h14M5 12h14M5 17h14" />
    </svg>
  );

  const Feature = ({ icon, label }) => (
    <div className="group flex flex-col items-center text-center cursor-pointer transition-all">
      <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-sky-100 text-sky-700 shadow-sm group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
        {icon}
      </div>
      <p className="mt-2 text-sm font-semibold text-slate-800">{label}</p>
    </div>
  );

  return (
    <section id="hero" className="relative">
      {/* Top full-viewport image slider — height = viewport minus navbar */}
      <div
        className="w-full overflow-hidden h-auto md:h-[calc(100vh-var(--nav-height))]"
        style={{ "--nav-height": `${NAV_HEIGHT}px` }}
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={800}
          className="h-full w-full"
        >
          {heroImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              {/* make slide a flex container so object-contain images center nicely */}
              <div className="relative h-full w-full flex items-center justify-center">
                <img
                  src={src}
                  alt={`hero-${idx}`}
                  loading="lazy"
                  /* Key change: use object-cover on small screens, object-contain on md+.
                     Also limit max-height on md+ so the image fits the viewport minus navbar. */
                  className="w-full h-full object-cover md:object-contain md:max-h-[calc(100vh-var(--nav-height))]"
                  style={{ "--nav-height": `${NAV_HEIGHT}px` }}
                />
                <div className="absolute inset-0 bg-linear-to-tr from-sky-900/55 via-sky-700/25 to-transparent mix-blend-multiply" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-6 left-6 z-20 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-sky-800 shadow-sm">
          Bisbee Technology
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
          <a
            href="#hero-content"
            onClick={scrollToContent}
            className="inline-flex flex-col items-center gap-1 text-white/90"
            aria-label="Scroll to content"
          >
            <span className="text-xs uppercase tracking-wider text-white/90">
              Scroll
            </span>
            <div className="h-7 w-7 rounded-full border border-white/70 flex items-center justify-center bg-white/10 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white/90"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* ...the rest of your content section is unchanged (kept as you had it) */}
      <div
        id="hero-content"
        ref={contentRef}
        className={`mx-auto max-w-6xl px-4 py-16 transition-all duration-700 ease-out ${
          contentVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        } bg-sky-50 border-t border-slate-200`}
      >
        {/* ...rest omitted for brevity - keep your original content */}
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          <div className="flex-1 space-y-6">
            <p className="inline-flex rounded-full border border-sky-100 bg-white px-3 py-1 text-xs font-medium text-sky-700 shadow-sm">
              Industrial Insulated Panel Solutions • PU / PIR Sandwich Panels
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
              Precision engineered{" "}
              <span className="text-sky-700">PU / PIR sandwich panels</span> for
              energy-efficient infrastructure.
            </h1>

            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              Bisbee Technology India Pvt Ltd manufactures high-quality PU and
              PIR sandwich panels on a fully automated continuous
              line—delivering consistent density, strong bonding and superior
              thermal performance for cold storage, pharma, logistics and prefab
              construction.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#offerings"
                className="rounded-lg bg-sky-700 px-4 py-2 text-sm font-medium text-white hover:bg-sky-800 transition-colors shadow-sm"
              >
                View Panel Solutions
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 bg-white hover:border-sky-600 hover:text-sky-700 transition-colors"
              >
                Get a Project Quote
              </a>
            </div>

            <div className="hidden md:grid grid-cols-3 gap-4 pt-4 text-xs">
              <div>
                <p className="text-slate-500">Technology</p>
                <p className="font-semibold text-slate-900">Automated Line</p>
              </div>
              <div>
                <p className="text-slate-500">Key Sectors</p>
                <p className="font-semibold text-slate-900">
                  Cold Storage, Pharma
                </p>
              </div>
              <div>
                <p className="text-slate-500">Advantage</p>
                <p className="font-semibold text-slate-900">
                  Consistent Quality
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights (unchanged) */}
        <div className="py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="sm:hidden relative w-full h-64">
              <div className="absolute top-0 left-0">
                <Feature icon={<ShieldIcon />} label="Durability" />
              </div>
              <div className="absolute top-0 right-0">
                <Feature icon={<ExteriorIcon />} label="Exterior Metal Skin" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Feature icon={<InteriorIcon />} label="Interior Metal Skin" />
              </div>
              <div className="absolute bottom-0 left-0">
                <Feature icon={<AirtightIcon />} label="Airtight System" />
              </div>
              <div className="absolute bottom-0 right-0">
                <Feature icon={<CoatingIcon />} label="Coatings Superiority" />
              </div>
            </div>

            <div className="hidden sm:grid grid-cols-3 md:grid-cols-5 gap-8">
              <Feature icon={<ShieldIcon />} label="Durability" />
              <Feature icon={<ExteriorIcon />} label="Exterior Metal Skin" />
              <Feature icon={<InteriorIcon />} label="Interior Metal Skin" />
              <Feature icon={<AirtightIcon />} label="Airtight System" />
              <Feature icon={<CoatingIcon />} label="Coatings Superiority" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
