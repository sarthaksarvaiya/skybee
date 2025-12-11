import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

// import img1 from "../assets/hero-1.jpg";
// import img2 from "../assets/hero-2.jpg";
// import img3 from "../assets/hero-3.jpg";
import img4 from "../assets/hero-4.jpg";
import img5 from "../assets/hero-5.jpg";

const heroImages = [img4, img5];

export default function Hero() {
  // adjust this to match your Navbar height (px)
  const NAV_HEIGHT = 64;

  const contentRef = useRef(null);
  const [contentVisible, setContentVisible] = useState(false);

  // Reveal content when it enters viewport
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

  // Scroll handler for the "Scroll" button/link — offsets for fixed navbar
  const scrollToContent = (e) => {
    e.preventDefault();
    const el = contentRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
  };

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
              <div className="relative h-full w-full">
                <img
                  src={src}
                  alt={`hero-${idx}`}
                  loading="lazy"
                  className="h-full w-full object-contain md:object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-sky-900/55 via-sky-700/25 to-transparent mix-blend-multiply" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Optional small top-left label */}
        <div className="absolute top-6 left-6 z-20 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-sky-800 shadow-sm">
          Bisbee Technology
        </div>

        {/* Scroll hint (uses scrollToContent to offset the navbar) */}
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

      {/* Content section (below the full-screen image) */}
      <div
        id="hero-content"
        ref={contentRef}
        className={`mx-auto max-w-6xl px-4 py-16 transition-all duration-700 ease-out ${
          contentVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        } bg-sky-50 border-t border-slate-200`}
      >
        <div className="flex flex-col gap-10 md:flex-row md:items-start">
          {/* LEFT: TEXT CONTENT */}
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

            {/* Desktop small stats */}
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

          {/* RIGHT: image slice / or additional content */}
          {/* <div className="flex-1"> */}
          {/* <div className="relative h-60 sm:h-72 md:h-80 lg:h-96">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-200">
                <Swiper
                  modules={[Autoplay, EffectFade]}
                  effect="fade"
                  loop
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  speed={800}
                  className="h-full w-full"
                >
                  {heroImages.map((src, index) => (
                    <SwiperSlide key={index}>
                      <div className="relative h-full w-full">
                        <img
                          src={src}
                          alt={`panel-${index}`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/60 via-sky-700/35 to-transparent mix-blend-multiply" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-sky-800 shadow-sm">
                  PU / PIR SANDWICH PANELS
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="rounded-2xl bg-white/95 px-4 py-3 text-[11px] sm:text-xs text-slate-700 shadow-md backdrop-blur">
                    <p className="text-[10px] uppercase tracking-wide text-sky-700 font-semibold">
                      Why Bisbee Technology
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      <div>
                        <p className="text-slate-500">Production</p>
                        <p className="font-semibold text-slate-900">
                          Automated continuous line
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500">Performance</p>
                        <p className="font-semibold text-slate-900">
                          Superior thermal efficiency
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500">Applications</p>
                        <p className="font-semibold text-slate-900">
                          Cold chain & infrastructure
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500">USP</p>
                        <p className="font-semibold text-slate-900">
                          Consistent quality at scale
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

          {/* Mobile stats below image */}
          {/* <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] text-slate-700 md:hidden">
              <div className="rounded-lg bg-white border border-slate-200 px-3 py-2">
                <p className="text-slate-500">Technology</p>
                <p className="font-semibold text-slate-900">Automated Line</p>
              </div>
              <div className="rounded-lg bg-white border border-slate-200 px-3 py-2">
                <p className="text-slate-500">Sectors</p>
                <p className="font-semibold text-slate-900">Cold & Pharma</p>
              </div>
              <div className="rounded-lg bg-white border border-slate-200 px-3 py-2">
                <p className="text-slate-500">Advantage</p>
                <p className="font-semibold text-slate-900">Energy Saving</p>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
