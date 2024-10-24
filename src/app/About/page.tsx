"use client";

import React, { useEffect, useRef } from "react";
import Mission from "../Comp/mission";
import Vision from "../Comp/vision";
import Location from "../Comp/location";
import Contact from "../Comp/contact";
import Team from "../Comp/Team";

const About = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 1.2; // Change this value to control when the sections appear
      sectionsRef.current.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < offset) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it once to set the initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section
        ref={addToRefs}
        className="bg-white flex flex-col items-center justify-center py-16 bg-gray-100 opacity-0 transition-opacity duration-700 visible"
      >
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">About Us</h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          "Go therefore and make disciples of all nations, baptizing them in the name of the Father and the Son and the Holy Spirit."
          <span className="flex text-gray-700 mt-4">– Matthew 28:19</span>
        </p>

        <div className="flex gap-10">
          <Team />
        </div>
      </section>

      <section
        ref={addToRefs}
        className="py-16 container mx-auto text-center opacity-0 transition-opacity duration-700 visible"
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-gray-800">Who We Are</h3>
          <p className="text-lg text-gray-700 mb-8">
            "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."
            <span className="block text-gray-700 mt-4">– Jeremiah 29:11</span>
          </p>
          <p className="text-lg text-gray-700">
            We are on a mission to share God's love and truth with the world. Our focus is on raising disciples who will be empowered to carry the message of Christ across the nations. Let us walk in faith together, as we spread the Gospel and build His kingdom.
          </p>
        </div>
      </section>

      <Mission />
      <Vision />
      <Location />
      <Contact />
      
    </div>
  );
};

export default About;
