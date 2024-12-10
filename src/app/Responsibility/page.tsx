"use client";

import React, { useEffect, useRef } from "react";



const ResponsibilityclassPage = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 1.2; 
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
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <section ref={addToRefs} className="bg-blue-700 text-white py-16 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Responsibility Class</h1>
          <p className="text-lg">
            Welcome to the Responsibility Class. Learn how to take ownership of your actions and lead with responsibility.
          </p>
        </div>
      </section >

      <section ref={addToRefs} className="bg-white py-16 px-4 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">What is Responsibility?</h2>
          <p className="text-gray-700 leading-relaxed transition-transform duration-300 ease-in-out hover:scale-105">
            Responsibility is an essential trait that guides us to make choices and actions in life. It's about taking charge of your duties and being accountable for your actions.
          </p>
        </div>
      </section>

      <section ref={addToRefs} className="bg-gray-200 py-16 px-4 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">How to Develop Responsibility</h2>
          <p className="text-gray-700 leading-relaxed transition-transform duration-300 ease-in-out hover:scale-105">
            Developing responsibility involves setting goals, managing time effectively, and learning how to make thoughtful decisions. This class provides practical advice on building these habits.
          </p>
        </div>
      </section>

      <section ref={addToRefs} className="bg-white py-16 px-4 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-700 mb-6">Why is Responsibility Important?</h2>
          <p className="text-gray-700 leading-relaxed transition-transform duration-300 ease-in-out hover:scale-105">
            Responsibility empowers you to earn trust, respect, and opportunities. It improves your relationships, professional life, and overall well-being by showing that you are reliable and capable.
          </p>
        </div>
      </section>



    </div>
  );
};

export default ResponsibilityclassPage;
