import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import img1 from "../assets/product-1.jpg";
import img2 from "../assets/product-2.jpg";
import img4 from "../assets/product-4.jpg";

const heroImages = [img1, img2, img4];

function Product() {
  return (
    <section id="product" className="w-screen h-screen">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation={true}
        speed={800}
        className="w-full h-full"
      >
        {heroImages.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-screen h-screen">
              <img
                src={src}
                alt="Bisbee insulated panel application"
                className="w-full h-full object-cover"
              />

              {/* Optional gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-900/60 via-sky-700/35 to-transparent mix-blend-multiply" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Product;
