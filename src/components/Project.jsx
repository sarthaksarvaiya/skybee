import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import img1 from "../assets/product-1.jpg";
import img2 from "../assets/product-2.jpg";
import img3 from "../assets/product-3.jpg";
import img4 from "../assets/product-4.jpg";

const slides = [img1, img2, img3, img4];

export default function Product() {
  return (
    <section id="product" className="w-full">
      <div className="w-full">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          navigation={true}
          speed={800}
          className="w-full"
          style={{
            height: "60vh",
            background: "linear-gradient(180deg,#f8fafc,#eef2f6)",
          }}
        >
          {slides.map((src, i) => (
            <SwiperSlide key={i}>
              {/* Slide container: consistent height */}
              <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
                {/* 1) Full-bleed blurred background (cover) to give consistent canvas */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 transform-gpu scale-105 filter blur-sm opacity-80"
                  style={{
                    backgroundImage: `url(${src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {/* 2) Soft overlay to reduce contrast between bg and image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/20 mix-blend-overlay pointer-events-none" />

                {/* 3) Centered image that preserves full content (no crop) */}
                <div className="relative z-10 flex items-center justify-center p-6 w-full h-full">
                  <img
                    src={src}
                    alt={`product-${i}`}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain block mx-auto shadow-lg"
                    style={{
                      // optional subtle white card background for images with white canvas
                      backgroundColor: "rgba(255,255,255,0.85)",
                      padding: "18px",
                      borderRadius: "12px",
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
        /* responsive heights */
        @media (min-width: 768px) {
          .swiper { height: 70vh !important; }
          .swiper .swiper-wrapper { height: 70vh !important; }
          .swiper .swiper-slide > div { height: 70vh !important; }
        }
        @media (min-width: 1024px) {
          .swiper { height: 85vh !important; }
          .swiper .swiper-wrapper { height: 85vh !important; }
          .swiper .swiper-slide > div { height: 85vh !important; }
        }

        /* nav arrow styling */
        .swiper-button-prev,
        .swiper-button-next {
          color: rgba(255,255,255,0.95);
          width: 48px;
          height: 48px;
          border-radius: 9999px;
          background: rgba(0,0,0,0.28);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(2,6,23,0.18);
        }
        @media (min-width: 768px) {
          .swiper-button-prev { left: 18px; }
          .swiper-button-next { right: 18px; }
        }
        @media (min-width: 1024px) {
          .swiper-button-prev { left: 36px; }
          .swiper-button-next { right: 36px; }
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          font-size: 18px;
        }
      `}</style>
    </section>
  );
}
