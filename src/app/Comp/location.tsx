"use client";

import React from "react";
import Image from "next/image";


const LocationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        
        <div className="w-full md:w-1/2 h-64 md:h-96 relative">
          <Image
            src={"/Images/music.jpg"}
            alt="Mission Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Our Location
          </h2>

  
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1697722242044!6m8!1m7!1ssOcH7QpVcZHdHzAG3v64cw!2m2!1d6.628015!2d3.3724529!3f189.96!4f0!5f0.7820865974627469"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Street View"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
