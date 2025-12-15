import React from "react";

import img1 from "../assets/app-1.jpg";
import img2 from "../assets/app-2.jpg";
import img3 from "../assets/app-3.jpg";
import img4 from "../assets/app-4.jpg";
import img5 from "../assets/app-5.jpg";
import img6 from "../assets/app-6.jpg";


function Applications() {
  const applications = [
    { title: "New Construction Projects", img: img1 },
    { title: "Cold Storage & Refrigeration", img: img2 },
    { title: "Agricultural Buildings", img: img3 },
    { title: "Cleanrooms & Laboratories", img: img4 },
    { title: "Porta Cabin", img: img5 },
    { title: "Dairy & Food Processing", img: img6 },
  ];

  return (
    <section
      id="applications"
      className="border-b border-slate-200 bg-white py-10"
    >
      <div className="mx-auto max-w-6xl px-4 space-y-10">
        {/* Heading */}
        {/* <h2 className="text-xl md:text-2xl font-semibold text-slate-900">
          Applications
        </h2> */}

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {applications.map((item, i) => (
            <div key={i} className="space-y-2">
              <p className="text-center text-sm font-medium text-slate-700">
                {item.title}
              </p>
              <div className="overflow-hidden rounded-xl border-2 border-sky-300">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-90 w-full object-contain bg-slate-50 p-3"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm text-slate-700">
          {/* LEFT LIST */}
          <ul className="space-y-2 list-disc list-inside marker:text-sky-500">
            <li>Cold Room / Storage</li>
            <li>Pre Engineered Building</li>
            <li>Clean Rooms</li>
            <li>School / College</li>
            <li>Hospital & Health Care Centres</li>
            <li>Agriculture & Horticulture</li>
            <li>Defense</li>
            <li>Power Industries</li>
          </ul>

          {/* RIGHT LIST */}
          <ul className="space-y-2 list-disc list-inside marker:text-sky-500">
            <li>Warehouse</li>
            <li>Prefab Skybee-house</li>
            <li>Site Office</li>
            <li>Industrial Enclosure & Control Rooms</li>
            <li>Aircraft Hangars</li>
            <li>Oil & Gas</li>
            <li>Meat Processing</li>
            <li>Commercial Building</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Applications;
