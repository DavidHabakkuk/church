"use client";

import React, { useState } from "react";

const images = {
  All: [
    { src: "/images/music.jpg", height: 2 }, // Tall
    { src: "/images/pja.jpg", height: 1 }, // Regular
    { src: "/images/choir.jpg", height: 1 }, // Regular
    { src: "/images/one.jpg", height: 3 }, // Extra tall
    { src: "/images/two.jpg", height: 1 }, // Regular
    { src: "/images/three.jpg", height: 1 }, // Regular
    { src: "/images/four.jpg", height: 2 }, // Tall
    { src: "/images/five.jpg", height: 1 }, // Regular
  ],
  Pastor: [
    { src: "/images/pja.jpg", height: 2 }, // Tall
    { src: "/images/music.jpg", height: 1 }, // Regular
  ],
  Choir: [
    { src: "/images/choir.jpg", height: 1 }, // Regular
    { src: "/images/music.jpg", height: 3 }, // Extra tall
  ],
  Media: [
    { src: "/images/one.jpg", height: 2 }, // Tall
    { src: "/images/two.jpg", height: 1 }, // Regular
    { src: "/images/three.jpg", height: 1 }, // Regular
  ],
};

const Gallery = () => {
  const [category, setCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const displayedImages =
    category === "All"
      ? Object.values(images).flat()
      : images[category as keyof typeof images];

  const categories = Object.keys(images);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto px-4 py-6">

        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gridAutoRows: "150px",
            gridAutoFlow: "dense",
          }}
        >
          {displayedImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300`}
              style={{
                gridRow: `span ${image.height}`, 
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={`Gallery ${category}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t-4 border-blue-500 shadow-md">
        <div className="flex justify-center space-x-4 py-3">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-white font-medium transition-all duration-300 ${
                category === cat
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-green-600 hover:bg-green-700"
              }`}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-700"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-11/12 md:w-3/4 lg:w-1/2 max-h-screen"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="w-full h-auto object-contain rounded-lg shadow-xl"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold cursor-pointer hover:scale-110 transition-transform duration-300"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
