"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const MissionPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div
        className={`w-full max-w-5xl bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 transition-transform duration-1000 ease-out`}
      >
        <div
          className={`w-full md:w-1/2 h-64 md:h-96 relative transition-transform duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          }`}
        >
          <Image
            src={"/Images/music.jpg"}
            alt="Mission Image"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div
          className={`w-full md:w-1/2 flex flex-col justify-center text-center md:text-left transition-transform duration-1000 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          }`}
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 text-gray-800 transition-opacity duration-1000 ease-out ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Our vision
          </h2>

          <p
            className={`text-xl md:text-2xl text-gray-700 mb-4 transition-opacity duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >

          The vision of Living Faith Foundattion Church is to passionately embody and share the message of Jesus, dedicated to fulfilling the Great Commission and living out the Greatest Commandment: to love God wholeheartedly and to love others unconditionally. We strive to ignite a movement of discipleship that transforms lives and communities, inspiring everyone to reflect Christ’s love in all there daily activities. 
          </p>         

          
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
