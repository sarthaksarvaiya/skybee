import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

import img1 from "../assets/hero-1.jpg";
import img2 from "../assets/hero-2.jpg";
import img3 from "../assets/hero-3.jpg";

const heroImages = [img1, img2, img3];

function Hero() {
  return (
    <section id="hero" className="border-b border-slate-200 bg-sky-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center">
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
            Bisbee Technology India Pvt Ltd manufactures high-quality PU and PIR
            sandwich panels on a fully automated continuous line—delivering
            consistent density, strong bonding and superior thermal performance
            for cold storage, pharma, logistics and prefab construction.
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

          {/* Small stats bar on desktop */}
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
              <p className="font-semibold text-slate-900">Consistent Quality</p>
            </div>
          </div>
        </div>

        {/* RIGHT: IMAGE SLIDER SLICE WITH OVERLAY */}
        <div className="flex-1">
          <div className="relative h-60 sm:h-72 md:h-80 lg:h-96">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-200">
              {/* Swiper slider */}
              <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                speed={800}
                className="h-full w-full"
              >
                {heroImages.map((src, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative h-full w-full">
                      <img
                        src={src}
                        alt="Bisbee insulated panel application"
                        className="h-full w-full object-cover"
                      />
                      {/* Gradient overlay for readability */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/60 via-sky-700/35 to-transparent mix-blend-multiply" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Top-left label over image */}
              <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium text-sky-800 shadow-sm">
                PU / PIR SANDWICH PANELS
              </div>

              {/* Bottom info card overlay */}
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
          </div>

          {/* Small stats for mobile (under image) */}
          <div className="mt-4 grid grid-cols-3 gap-3 text-[11px] text-slate-700 md:hidden">
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
