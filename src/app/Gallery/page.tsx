"use client";

import React, { useState } from "react";

const images = {
  All: [
    "/images/music.jpg",
    "/images/pja.jpg",
    "/images/choir.jpg",
    "/images/one.jpg",
    "/images/two.jpg",
    "/images/three.jpg",
    "/images/four.jpg",
    "/images/five.jpg",
    "/images/code.jpeg",
    "/images/coder.jpeg",
    "/images/download.jpeg",
    "/images/cop.jpeg",
    "/images/sophie.jpg",
    "/images/bayo.jpg",
    "/images/kemi.jpg",
    "/images/a.jpg",
    "/images/b.jpg",
    "/images/c.jpg",
    "/images/d.jpg",
    "/images/e.jpg",
    "/images/f.jpg",
    "/images/i.jpg",
    "/images/j.jpg",
    "/images/k.jpg",
    "/images/l.jpg",
    "/images/m.jpg",
    "/images/n.jpg",
    "/images/o.jpg",
    "/images/p.jpg",
    "/images/q.jpg",
    "/images/r.jpg",
    "/images/s.jpg",
    "/images/t.jpg",
    "/images/u.jpg",
    "/images/v.jpg",
    "/images/w.jpg",
    "/images/x.jpg",
    "/images/y.jpg",
    "/images/z.jpg",
    "/images/ab.jpg",
    "/images/bc.jpg",
    "/images/cd.jpg",
    "/images/bc.jpg",
    "/images/de.jpg",
    "/images/ef.jpg",
    "/images/fg.jpg",
    "/images/xw.jpg",
    "/images/wy.jpg",
    "/images/vx.jpg",
    "/images/tv.jpg",
    "/images/z.jpg",
    "/images/y.jpg",
    "/images/op.jpg",
    "/images/ab.jpg",

  ],
  Pastor: ["/images/pja.jpg", "/images/music.jpg"],
  Choir: ["/images/choir.jpg", "/images/xw.jpg",],
  Minister: ["/images/music.jpg", "/images/music.jpg"],
  Media: [
    "/images/one.jpg",
    "/images/two.jpg",
    "/images/three.jpg",
    "/images/four.jpg",
    "/images/five.jpg",
  ],
  Usher: [
    "/images/code.jpeg",
    "/images/coder.jpeg",
    "/images/download.jpeg",
    "/images/cop.jpeg",
  ],
  Youth: ["/images/sophie.jpg", "/images/bayo.jpg", "/images/kemi.jpg"],
  Children: ["/images/e.jpg","/images/f.jpg",],
};

const Gallery = () => {
  const [category, setCategory] = useState("All");
  const displayedImages =
    category === "All" ? Object.values(images).flat() : images[category];

  const categories = Object.keys(images);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
   
    
       
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
          {displayedImages.length > 0 ? (
            displayedImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Gallery ${category}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">
              No images available in this category.
            </p>
          )}
       
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
    </div>
  );
};

export default Gallery;
