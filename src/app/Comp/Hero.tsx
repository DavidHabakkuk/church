"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import He from "../public/images/images.jpg"; 
import olaiya from "../public/images/olaiya.jpg";
import logo from "../public/images/download.jpg";

const Hero = () => {
  
  const images = [He, logo, olaiya, ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <div className="absolute inset-0">
        <Image
          src={images[currentImage]}
          alt="Ambassadors Assembly"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-80"
          priority
        />,
         <Image
          src={images[currentImage]}
          alt="Ambassadors Assembly"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="relative z-10 text-center p-4 max-w-2xl">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
          Welcome to Ambassadors Assembly
        </h1>
        <p className="text-base md:text-lg lg:text-xl px-4 md:px-8">
          We’re glad to have you with us! Join us as we celebrate our community, faith, and fellowship.
        </p>
      </div>

      <div className="relative z-10 flex space-x-2 mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentImage === index ? 'bg-white' : 'bg-gray-500'
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
