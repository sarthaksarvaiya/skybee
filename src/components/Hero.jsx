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
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   className="h-7 w-7"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeWidth="2"
    // >
    //   <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" />
    // </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="219.000000pt"
      height="182.000000pt"
      viewBox="0 0 219.000000 182.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,182.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path d="M1060 1505 c-36 -8 -108 -35 -160 -61 -80 -40 -109 -61 -186 -138 -99 -100 -145 -175 -186 -306 -33 -108 -33 -292 0 -400 41 -130 87 -206 187 -305 155 -156 323 -222 540 -212 309 13 556 202 657 503 20 59 23 89 23 214 0 125 -3 155 -23 214 -78 232 -238 394 -467 472 -100 33 -280 43 -385 19z m355 -65 c116 -36 183 -78 276 -170 70 -70 94 -102 128 -172 95 -196 95 -400 0 -596 -51 -105 -168 -229 -269 -285 -112 -61 -197 -82 -335 -81 -104 0 -130 4 -200 28 -109 38 -187 87 -271 171 -124 127 -187 279 -188 460 -1 123 13 184 69 300 90 186 252 313 460 361 84 19 241 12 330 -16z" />
        <path d="M1075 1405 c-143 -37 -290 -141 -371 -262 -21 -31 -51 -96 -68 -143 -27 -76 -30 -98 -30 -200 0 -102 3 -124 30 -200 38 -107 88 -183 170 -259 122 -111 277 -167 444 -158 164 8 293 65 408 179 114 113 172 244 180 406 14 284 -144 519 -417 620 -85 31 -255 39 -346 17z m113 -117 c-3 -37 -7 -44 -27 -46 -28 -4 -41 12 -41 51 0 36 16 35 24 -3 7 -38 28 -40 26 -2 -3 37 -2 42 11 42 6 0 9 -17 7 -42z m98 -5 c1 -45 -8 -55 -25 -25 -6 9 -11 11 -11 5 0 -14 -30 -18 -30 -4 0 5 3 23 6 40 6 27 11 32 33 29 23 -3 26 -7 27 -45z m94 5 c0 -13 3 -33 6 -45 5 -17 2 -23 -10 -23 -9 0 -16 4 -16 9 0 5 -11 11 -25 13 l-25 3 22 32 c27 38 48 43 48 11z m-302 0 c21 -21 14 -57 -14 -70 -28 -13 -38 -5 -50 41 -10 35 36 57 64 29z m401 -27 c17 -17 18 -24 8 -45 -12 -27 -40 -33 -67 -16 -12 8 -12 13 3 44 19 41 29 44 56 17z m-514 -91 c-5 -8 -11 -8 -20 0 -18 15 -42 3 -26 -13 14 -14 14 -27 0 -27 -14 0 -48 41 -49 58 0 8 8 10 27 6 22 -6 25 -4 20 10 -13 33 4 36 29 6 14 -16 22 -34 19 -40z m563 17 c-12 -18 -23 -34 -24 -36 -2 -1 -7 0 -13 4 -7 4 -2 19 15 41 33 42 52 34 22 -9z m62 -5 c0 -5 -9 -17 -20 -27 -15 -14 -17 -21 -9 -32 19 -22 1 -28 -21 -8 l-20 18 27 29 c27 28 43 35 43 20z m-750 -46 c0 -8 -5 -16 -12 -18 -15 -5 -1 -28 18 -28 11 0 13 6 9 20 -7 21 1 25 24 11 12 -8 12 -13 -3 -35 -18 -29 -28 -31 -57 -16 -21 12 -25 50 -7 68 16 16 28 15 28 -2z m525 -27 c63 -30 134 -100 165 -164 21 -42 25 -64 25 -145 0 -113 -21 -167 -95 -240 -72 -72 -128 -95 -235 -95 -76 0 -98 4 -145 26 -72 34 -136 97 -168 167 -22 48 -27 71 -26 142 0 90 13 133 60 202 31 45 115 104 175 124 65 21 182 13 244 -17z m284 -2 c-50 -39 -63 -46 -72 -40 -6 3 5 18 24 34 21 17 38 24 43 19 5 -6 8 -11 5 -13z m36 -49 c15 -22 14 -23 -12 -29 -16 -4 -36 -10 -45 -14 -27 -11 -22 12 7 31 14 9 22 20 19 25 -12 20 16 7 31 -13z m-872 -17 c17 -11 25 -21 18 -25 -12 -8 -71 20 -71 34 0 15 22 12 53 -9z m-34 -42 c34 -12 44 -41 11 -32 -14 4 -20 0 -20 -11 0 -9 5 -16 10 -16 6 0 10 -7 10 -14 0 -13 -5 -13 -37 -2 -41 14 -56 36 -24 36 22 0 28 14 11 25 -12 8 -13 25 -1 25 4 0 22 -5 40 -11z m941 -8 c0 -5 -7 -12 -16 -15 -8 -3 -13 -10 -9 -15 3 -6 12 -8 20 -4 10 3 15 -1 15 -12 0 -13 -8 -16 -37 -13 -50 4 -56 16 -24 44 27 24 51 31 51 15z m-955 -191 c0 -31 -3 -35 -27 -38 -19 -2 -30 3 -38 17 -16 32 4 63 38 59 24 -3 27 -7 27 -38z m975 25 c26 -32 -13 -81 -47 -59 -35 22 -23 74 17 74 10 0 23 -7 30 -15z m-958 -163 c-20 -6 -13 -32 8 -32 32 0 23 -17 -16 -30 -38 -13 -55 -7 -36 12 20 20 14 37 -9 31 -15 -4 -20 -2 -17 7 6 18 72 41 77 27 2 -6 -1 -13 -7 -15z m916 0 c18 -16 29 -32 25 -35 -10 -11 -83 -8 -83 3 0 6 10 10 23 10 20 1 21 2 5 14 -19 14 -24 36 -10 36 5 0 23 -13 40 -28z m-38 -90 c34 -31 30 -51 -6 -27 -13 8 -30 12 -38 9 -19 -7 -20 0 -6 27 13 24 13 24 50 -9z m-832 7 c-2 -5 -18 -19 -36 -30 -27 -18 -32 -19 -32 -5 0 8 12 22 28 30 32 18 45 20 40 5z m46 -61 c5 -9 7 -21 3 -25 -5 -4 -12 -1 -17 6 -9 15 -40 8 -40 -9 0 -5 9 -10 20 -10 23 0 26 -10 8 -28 -16 -16 -48 13 -48 44 0 41 52 56 74 22z m760 -12 c10 -8 15 -19 11 -25 -4 -7 -19 -2 -41 15 -18 14 -31 30 -28 35 5 9 24 1 58 -25z m-40 -57 c23 19 28 -4 6 -24 -20 -18 -21 -18 -50 10 -16 15 -27 32 -24 37 4 5 17 0 30 -13 19 -17 26 -20 38 -10z m-668 0 c2 -29 4 -31 18 -20 27 22 28 -8 2 -39 -14 -17 -28 -26 -31 -20 -3 5 -3 15 0 20 11 17 -5 32 -20 20 -27 -22 -36 0 -13 30 24 30 42 34 44 9z m601 -31 c31 -44 16 -59 -18 -18 -25 30 -30 50 -11 50 4 0 17 -15 29 -32z m-42 -35 c17 -26 17 -27 -5 -45 -30 -24 -33 -23 -55 18 -16 30 -17 37 -4 45 25 16 46 10 64 -18z m-414 -3 c23 -13 25 -52 4 -70 -18 -15 -65 -5 -65 15 0 24 19 65 30 65 6 0 20 -5 31 -10z m317 -48 l25 -32 -32 0 c-17 0 -31 -4 -31 -10 0 -5 -4 -10 -10 -10 -5 0 -10 17 -10 38 0 63 17 67 58 14z m-240 1 c-2 -16 2 -29 7 -31 6 -1 11 9 13 23 2 14 9 25 16 25 14 0 9 -67 -6 -76 -5 -3 -20 -3 -34 0 -19 5 -24 13 -24 40 0 18 3 36 7 39 14 15 24 6 21 -20z m140 -23 c0 -44 -5 -48 -24 -22 -13 16 -13 16 -14 0 0 -10 -4 -18 -10 -18 -5 0 -10 8 -10 18 0 9 -3 27 -6 40 -6 20 -3 22 29 22 35 0 36 -1 35 -40z" />
        <path d="M1250 1300 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z" />
        <path d="M1040 1261 c0 -12 6 -21 16 -21 9 0 14 7 12 17 -5 25 -28 28 -28 4z" />
        <path d="M1115 997 l-90 -32 -9 -53 c-11 -64 10 -161 49 -221 26 -43 104 -107 141 -117 51 -13 156 73 195 160 24 54 35 145 25 199 -6 35 -9 36 -99 66 -51 17 -99 31 -107 30 -8 0 -55 -15 -105 -32z m210 -92 c32 -31 31 -45 -5 -80 -35 -34 -42 -14 -7 23 l22 24 -24 19 -25 20 -40 -40 c-38 -38 -39 -41 -23 -59 9 -10 14 -22 10 -25 -10 -10 -43 23 -43 43 0 18 82 100 100 100 6 0 22 -11 35 -25z m-67 -77 c21 -21 13 -51 -25 -90 -40 -41 -66 -47 -95 -21 -26 24 -22 55 12 88 34 33 42 14 9 -21 -23 -25 -20 -50 7 -61 10 -4 28 7 52 31 32 32 35 39 24 56 -6 11 -12 22 -12 25 0 9 16 5 28 -7z" />
        <path d="M1455 360 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8 -4 -11 -10z" />
        <path d="M1040 339 c0 -24 23 -21 28 4 2 10 -3 17 -12 17 -10 0 -16 -9 -16 -21z" />
        <path d="M1250 330 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4 -4 -4 -10z" />
      </g>
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

          {/* <div className="absolute inset-0 bg-black/30 z-20"></div> */}

          <div
            className="
            absolute inset-0 
            flex flex-col items-center justify-center  /* Mobile layout */
            md:block md:inset-auto md:bottom-40 md:left-1/2 md:-translate-x-1/2  /* Desktop layout */
            z-30 text-center px-4  bg-black/30"
          >
            <h2 className="text-white text-lg md:text-3xl font-semibold tracking-wide drop-shadow-lg leading-snug">
              INDIA'S LEADING MANUFACTURER OF
            </h2>

            <h2 className="text-white text-lg md:text-3xl font-semibold tracking-wide drop-shadow-lg leading-snug">
              FULLY AUTOMATED CONTINUOUS
            </h2>

            <h2 className="text-white text-lg md:text-3xl font-semibold tracking-wide drop-shadow-lg leading-snug">
              PU/PIR & ROCKWOOL SANDWICH PUF PANEL LINE
            </h2>
          </div>

          <div
            className="
            absolute inset-0 flex items-end justify-center pb-6  /* Mobile: bottom center */
            md:inset-auto md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:block md:pb-0  /* Desktop: bottom */
            z-30 text-center px-4 bg-black/30"
          >
            <p className="text-sky-200 text-xs md:text-sm font-medium tracking-[0.15em] drop-shadow-lg">
              BISBEE TECHNOLOGY INDIA PRIVATE LIMITED
            </p>
          </div>
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
              Industrial Insulated Panel Solutions • PU / PIR Sandwich Puf
              Panels
            </p>

            <h1 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-900">
              Precision engineered{" "}
              <span className="text-sky-700">PU / PIR sandwich panels</span> for
              energy-efficient infrastructure.
            </h1>

            <p className="text-sm md:text-base text-slate-600 max-w-xl">
              Bisbee Technology India Pvt Ltd manufactures high-quality PU and
              PIR puf sandwich panels on a fully automated continuous
              line—delivering consistent density, strong bonding and superior
              thermal performance for cold storage, pharma, logistics and prefab
              construction.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#product"
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
