"use client";

import React, { useEffect, useRef } from "react";

const FamilyclassPage = () => {
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
      {/* Hero Section */}
      <section
  ref={addToRefs}
  className="relative w-full h-screen flex items-center justify-center text-white bg-hero bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/free.jpeg')",
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative z-10 text-center px-4">
    <h1 className="text-5xl md:text-7xl font-bold opacity-0 animate-fadeUp">
      Family Class
    </h1>
    <p className="mt-4 text-xl md:text-2xl opacity-0 animate-fadeUp delay-200">
      Strengthening families with faith, love, and biblical principles.
    </p>
    <p className="mt-6 text-lg md:text-xl opacity-0 animate-fadeUp delay-400">
      Our mission is to empower families to grow together, foster meaningful relationships, 
      and navigate life's challenges with the guidance of God’s Word.
    </p>
    <p className="mt-6 text-lg md:text-xl opacity-0 animate-fadeUp delay-600">
      Join us in a journey of faith and unity as we explore topics like parenting, 
      communication, and spiritual growth tailored for every member of the family.
    </p>
    <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-500 transition">
      Learn More
    </button>
  </div>
</section>

      {/* What We Cover Section */}
      <section ref={addToRefs} className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">
            What We Cover in Family Class
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our family class helps strengthen the bonds between family members,
            guiding them through biblical principles, love, and communication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Building Strong Marriages",
                description:
                  "Explore the biblical foundation for a loving and lasting marriage.",
              },
              {
                title: "Raising Godly Children",
                description:
                  "Learn how to raise children in a way that honors God and nurtures their spiritual growth.",
              },
              {
                title: "Handling Conflict Biblically",
                description:
                  "Discover ways to resolve conflicts in the family using scripture and godly principles.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg hover:bg-green-500 hover:text-white transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section ref={addToRefs} className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">
            Upcoming Family Events
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Don’t miss our exciting events aimed at bringing families together
            and encouraging spiritual growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Family Retreat",
                description:
                  "Join us for a weekend of relaxation, fun, and spiritual renewal for the whole family.",
                date: "October 28-30, 2024",
              },
              {
                title: "Parenting Seminar",
                description:
                  "A special session focused on biblical parenting tips and advice for raising children in today’s world.",
                date: "November 15, 2024",
              },
            ].map((event, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 shadow-md rounded-lg hover:bg-green-500 hover:text-white transition duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600">{event.description}</p>
                <p className="text-gray-500 mt-2">{event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={addToRefs} className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8">Join Our Family Class</h2>
          <p className="text-lg mb-6">
            We meet every Sunday at 9:00 AM. Strengthen your family and faith by
            joining us this week!
          </p>
          <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default FamilyclassPage;
