"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const images = ["/anthem-image.jpg", "/cover.jpeg", "/building.avif"];

export default function ImageGalleryComp() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        setIsTransitioning(false);
      }, 500); // Match this duration with CSS transition time
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-20 rounded-lg overflow-hidden w-full mx-auto max-w-6xl mb-20 relative flex justify-center items-center">
      {images.map((src, index) => (
        <Image
          key={src}
          fill
          objectFit="cover"
          alt={`image`}
          src={src}
          className={` absolute transition-opacity duration-500 ${
            currentImage === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
      <div className="p-5  rounded-lg z-20 cursor-pointer card-hover bg-blue-600 dark:bg-gray-500 text-white">
        <Link href={"/imagegallery"}>
          <h1>View Gallery</h1>
        </Link>
      </div>
    </div>
  );
}
