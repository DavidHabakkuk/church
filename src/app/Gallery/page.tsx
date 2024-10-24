"use client";

import { useState } from 'react';
import Image from 'next/image';
// import Logo from "../public/images/olaiya.jpg"; 
// import Olaiya from "../public/images/download.jpg";
// import image from "../public/images/images.jpg";

const galleryCategories = {
  pastors: Array(30).fill(Olaiya),
  youth: Array(30).fill(Logo),
  events: Array(25).fill(image),
};

const Gallery = () => {
  const [currentCategory, setCurrentCategory] = useState('all');

  const getImagesForCategory = (category) => {
    if (category === 'all') {
      return Object.values(galleryCategories).flat();
    }
    return galleryCategories[category] || [];
  };

  return (
    <section className="min-h-screen bg-gray-100 pt-32 overflow-hidden"> 
      <div className="container mx-auto h-full overflow-y-auto pb-20"> 
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {getImagesForCategory(currentCategory).map((imageSrc, index) => (
            <div
              key={index}
              className="relative h-60 w-full overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <Image
                src={imageSrc}
                alt={`Gallery image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>

        <div className="fixed bottom-4 left-0 w-full flex justify-center space-x-4 z-10"> 
          <button
            onClick={() => setCurrentCategory('all')}
            className={`py-2 px-4 rounded-full ${
              currentCategory === 'all'
                ? 'bg-blue-500 text-white'
                : 'bg-white text-blue-500 border border-blue-500'
            }`}
          >
            All
          </button>

          {Object.keys(galleryCategories).map((category) => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`py-2 px-4 rounded-full ${
                currentCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-blue-500 border border-blue-500'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
