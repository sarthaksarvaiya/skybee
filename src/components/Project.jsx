import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import img1 from "../assets/product-1.jpg";
import img2 from "../assets/product-2.jpg";
import img3 from "../assets/product-3.jpg";
import img4 from "../assets/product-4.jpg";

export default function Product() {
  return (
    <section id="product" className="w-full">
      {/* 📱 MOBILE – single swiper */}
      <div className="w-full md:hidden">
        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          autoplay={{ delay: 3000 }}
          navigation={true}
          className="w-full"
          style={{ height: "60vh" }}
        >
          {[img1, img2, img3, img4].map((img, i) => (
            <SwiperSlide key={i}>
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={img}
                  alt="slide"
                  className="max-w-full max-h-full object-contain p-4"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🖥️ DESKTOP – Split two swipers side-by-side */}
      <div className="hidden md:flex w-full gap-6 px-6 py-8">
        {/* LEFT – Swiper 1 & 2 */}
        <div className="w-1/2">
          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            autoplay={{ delay: 3500 }}
            navigation={true}
            className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-white"
            style={{ height: "70vh" }}
          >
            {[img1, img2].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={img}
                    alt="product"
                    className="max-w-full max-h-full object-contain p-6"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* RIGHT – Swiper 3 & 4 */}
        <div className="w-1/2">
          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            autoplay={{ delay: 3500 }}
            navigation={true}
            className="w-full h-full rounded-xl overflow-hidden shadow-lg bg-white"
            style={{ height: "70vh" }}
          >
            {[img3, img4].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={img}
                    alt="product"
                    className="max-w-full max-h-full object-contain p-6"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Product Details Tables */}
      <div className="w-full px-4 md:px-16 py-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT TABLE */}
        <table className="w-full border border-gray-300 text-left">
          <tbody>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Infill Material</th>
              <td className="px-4 py-2">PUR/PIR & Rockwool panel</td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">
                Outer & Inner Skin Sheet
              </th>
              <td className="px-4 py-2">
                PPGI, PPGL, BGL, Stainless Steel, Aluminium, Craft Paper
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Thickness</th>
              <td className="px-4 py-2">0.35mm to 0.8mm</td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Effective Width</th>
              <td className="px-4 py-2">1000mm</td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Overall Width</th>
              <td className="px-4 py-2">1075mm</td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Length</th>
              <td className="px-4 py-2">
                2 meters to 16 meters (customizable)
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Thickness</th>
              <td className="px-4 py-2">
                40, 50, 60, 80, 100, 120, 150, 200mm available
              </td>
            </tr>
          </tbody>
        </table>

        {/* RIGHT TABLE */}
        <table className="w-full border border-gray-300 text-left">
          <tbody>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Infill Material</th>
              <td className="px-4 py-2">
                Infill as PUR/PIR & Rockwool Panels with tongue and groove
                joints.
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Density</th>
              <td className="px-4 py-2">
                PUR 40 ÷ 2kg/m3 and PIR 45 ÷ 2kg/m3 (As per the requirement)
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">
                Outer & Inner Skin Sheet
              </th>
              <td className="px-4 py-2">
                PPGI, PPGL, BGL, Stainless Steel, Aluminium, Craft Paper.
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Thickness</th>
              <td className="px-4 py-2">(0.35mm TO 0.8mm)</td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Sheet Profile</th>
              <td className="px-4 py-2">Baby Rib, Plain</td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Length</th>
              <td className="px-4 py-2">
                2 meters to 16 meters (also customized length available)
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Covered Width</th>
              <td className="px-4 py-2">1118 mm</td>
            </tr>
            <tr className="border-b border-gray-300">
              <th className="px-4 py-2 bg-gray-100">Thickness</th>
              <td className="px-4 py-2">
                50, 60, 80, 100, 120, 150, 200 mm available
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <style>{`
      .swiper-button-prev,
      .swiper-button-next {
        color: #ffffff;
        width: 36px;
        height: 40px;
        border-radius: 6px;
        background: #9ca3af;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 0.25s ease, background 0.25s ease;
        z-index: 20;
      }
      .swiper-button-prev:hover,
      .swiper-button-next:hover {
        transform: scale(1.1);
        background: #6b7280;
      }
      .swiper-button-prev:after,
      .swiper-button-next:after {
        font-size: 14px;
        font-weight: 700;
      }
      `}</style>
    </section>
  );
}
