"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const MissionPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4 md:p-8">
      <div
        className={`w-full max-w-5xl bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col items-center  space-y-6 md:space-y-0 md:space-x-6 transition-transform duration-1000 ease-out text-gray-800`}
      >
        <h2 className="font-serif text-center text-2xl md:text-5xl mb-6 md:mb-20">
          Hello world, are you there? We would like to have you in Living Faith Foundation Ambassador's Assembly.
        </h2>
        <Link href="/About">
          <button className="bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold hover:bg-green-700 transition">
            More about us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MissionPage;
