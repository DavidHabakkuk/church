"use client";

import React, { useEffect, useRef } from "react";



const  FamilyclassPage = () => {
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
      <section ref={addToRefs} className="relative w-full h-screen flex items-center justify-center bg-green-600 text-white">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold">Family Class</h1>
          <p className="mt-4 text-xl md:text-2xl">
            Strengthening families with faith, love, and biblical principles.
          </p>
        </div>
      </section>


      <section ref={addToRefs} className="bg-gray-100 py-16 ">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">What We Cover in Family Class</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our family class helps strengthen the bonds between family members, guiding them through biblical principles, love, and communication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-green-500 ">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Building Strong Marriages</h3>
              <p className="text-gray-600">
                Explore the biblical foundation for a loving and lasting marriage.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg hover:bg-green-500 transiduration-3s">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Raising Godly Children</h3>
              <p className="text-gray-600">
                Learn how to raise children in a way that honors God and nurtures their spiritual growth.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg  hover:bg-green-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Handling Conflict Biblically</h3>
              <p className="text-gray-600">
                Discover ways to resolve conflicts in the family using scripture and godly principles.
              </p>
            </div>
          </div>
        </div>
      </section>

   
      <section ref={addToRefs} className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800 ">Upcoming Family Events</h2>
          <p className="text-lg text-gray-700 mb-6">
            Don’t miss our exciting events aimed at bringing families together and encouraging spiritual growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 shadow-md rounded-lg hover:bg-green-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Family Retreat</h3>
              <p className="text-gray-600">
                Join us for a weekend of relaxation, fun, and spiritual renewal for the whole family.
              </p>
              <p className="text-gray-500 mt-2">Date: October 28-30, 2024</p>
            </div>
            <div className="p-6 bg-gray-100 shadow-md rounded-lg hover:bg-green-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Parenting Seminar</h3>
              <p className="text-gray-600">
                A special session focused on biblical parenting tips and advice for raising children in today’s world.
              </p>
              <p className="text-gray-500 mt-2">Date: November 15, 2024</p>
            </div>
          </div>
        </div>
      </section>


      <section ref={addToRefs} className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8">Join Our Family Class</h2>
          <p className="text-lg mb-6">
            We meet every Sunday at 9:00 AM. Strengthen your family and faith by joining us this week!
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Get Involved
          </button>
        </div>
      </section>


    </div>
  );
};

export default FamilyclassPage;
