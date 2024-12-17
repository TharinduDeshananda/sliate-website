"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type ImageType = {
  title: string;
  imageLink: string;
};

const images: ImageType[] = [
  { imageLink: "/education1.jpg", title: "First Image" },
  { imageLink: "/education2.jpg", title: "Second Image" },
  { imageLink: "/education3.jpg", title: "Third Image" },
];

export default function CorousalComp() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-screen mb-10 overflow-hidden">
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="relative w-full h-full group">
            {/* Image */}
            <Image
              fill
              src={image.imageLink}
              alt={image.title}
              objectFit="cover"
              className={`transition-transform duration-500 ${
                index === current ? "group-hover:scale-110" : ""
              }`}
            />
            {/* Title Overlay */}
            {index === current && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-3xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {image.title}
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-20"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-20"
      >
        &#8594;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === current
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-gray-300"
            } transition-all`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
