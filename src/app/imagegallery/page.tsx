"use client";
import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const images = [
  { id: 1, src: "/education1.jpg", alt: "Gallery Image 1" },
  { id: 2, src: "/education2.jpg", alt: "Gallery Image 2" },
  { id: 3, src: "/education3.jpg", alt: "Gallery Image 3" },
  { id: 4, src: "/education1.jpg", alt: "Gallery Image 4" },
];

export default function ImageGalleryPage() {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 dark:text-gray-500 mb-8 text-center my-10">
          Image Gallery
        </h1>

        <LightGallery
          plugins={[lgThumbnail, lgZoom]}
          selector="a[data-src]"
          mode="lg-fade"
          onInit={onInit}
          speed={500}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image) => (
              <a
                key={image.id}
                data-src={image.src} // Properly configured data-src
                className="block bg-white dark:bg-gray-700 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
              </a>
            ))}
          </div>
        </LightGallery>
      </div>
    </div>
  );
}
