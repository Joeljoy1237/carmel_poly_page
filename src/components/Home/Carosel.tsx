'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type Slide = {
  title: string;
  year: string;
  description: string;
  highlight: string;
  image: string;
  logo?: string;
};

const slides: Slide[] = [
  {
    title: "Admissions",
    year: "2025 – 2026",
    description: `Carmel Polytechnic College was established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI and is managed by CMI Fathers – a priestly order reputed for their contributions in the field of education and healthcare. The institution draws spiritual inspiration from `,
    highlight: "St. Kuriakose Elias Chavara",
    image: "/slide_001.png",
  },
  {
    title: "Admissions",
    year: "2025 – 2026",
    description: `Carmel Polytechnic College was established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI and is managed by CMI Fathers – a priestly order reputed for their contributions in the field of education and healthcare. The institution draws spiritual inspiration from `,
    highlight: "St. Kuriakose Elias Chavara",
    image: "/slide_002.png",
  },{
    title: "Admissions",
    year: "2025 – 2026",
    description: `Carmel Polytechnic College was established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI and is managed by CMI Fathers – a priestly order reputed for their contributions in the field of education and healthcare. The institution draws spiritual inspiration from `,
    highlight: "St. Kuriakose Elias Chavara",
    image: "/slide_003.png",
  },{
    title: "Admissions",
    year: "2025 – 2026",
    description: `Carmel Polytechnic College was established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI and is managed by CMI Fathers – a priestly order reputed for their contributions in the field of education and healthcare. The institution draws spiritual inspiration from `,
    highlight: "St. Kuriakose Elias Chavara",
    image: "/slide_004.png",
  },{
    title: "Admissions",
    year: "2025 – 2026",
    description: `Carmel Polytechnic College was established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI and is managed by CMI Fathers – a priestly order reputed for their contributions in the field of education and healthcare. The institution draws spiritual inspiration from `,
    highlight: "St. Kuriakose Elias Chavara",
    image: "/slide_005.png",
  },{
    title: "Admissions",
    year: "2025 – 2026",
    description: `Carmel Polytechnic College was established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI and is managed by CMI Fathers – a priestly order reputed for their contributions in the field of education and healthcare. The institution draws spiritual inspiration from `,
    highlight: "St. Kuriakose Elias Chavara",
    image: "/slide_006.png",
  },{
    title: "Admissions",
    year: "2025 – 2026",
    description: `Carmel Polytechnic College was established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI and is managed by CMI Fathers – a priestly order reputed for their contributions in the field of education and healthcare. The institution draws spiritual inspiration from `,
    highlight: "St. Kuriakose Elias Chavara",
    image: "/slide_007.png",
  },{
    title: "Admissions",
    year: "2025 – 2026",
    description: `Carmel Polytechnic College was established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI and is managed by CMI Fathers – a priestly order reputed for their contributions in the field of education and healthcare. The institution draws spiritual inspiration from `,
    highlight: "St. Kuriakose Elias Chavara",
    image: "/slide_008.png",
  },{
    title: "Admissions",
    year: "2025 – 2026",
    description: `Carmel Polytechnic College was established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI and is managed by CMI Fathers – a priestly order reputed for their contributions in the field of education and healthcare. The institution draws spiritual inspiration from `,
    highlight: "St. Kuriakose Elias Chavara",
    image: "/slide_009.png",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      {/* Slide background image */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content Card */}
      <div className="absolute bottom-14 left-4 sm:left-10 bg-black/80 text-white p-4 sm:p-6 rounded-md max-w-xl z-40 backdrop-blur-md">
        <div className="flex items-start gap-2 sm:gap-4">
          {slides[currentIndex].logo && (
            <Image
              src={slides[currentIndex].logo}
              width={200}
              height={200}
              loading='lazy'
              alt="Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
          )}
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-300">
              {slides[currentIndex].title} <span className="text-white font-light">| {slides[currentIndex].year}</span>
            </h2>
            <p className="mt-1 text-sm sm:text-base">
              {slides[currentIndex].description}
              <strong>{slides[currentIndex].highlight}</strong>…
            </p>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black/50 rounded-full p-2 hover:bg-black/70 z-40"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl bg-black/50 rounded-full p-2 hover:bg-black/70 z-40"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-7 w-full flex justify-center gap-2 z-40">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
