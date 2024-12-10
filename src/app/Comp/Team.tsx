"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const TeamPage = () => {
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

  const teamMembers = [
    {
      name: "REV DR PJA Olaiya",
      title: "President",
      image: "/Images/pja.jpg",
      description:
        "Rev. PJA Olaiya, President and Founder of the ministry, is a devoted servant of God called to raise individuals who will perform the supernatural, expanding and establishing God's kingdom.",
    },
    {
      name: "Florence Joy Adeolu Olaiya",
      title: "Vice president",
      image: "/Images/music.jpg",
      description:
        "Jane is a dedicated leader committed to guiding our team with wisdom and integrity.",
    },
    {
      name: "Pastor Oluwasegun Samuel",
      title: "District Pastor",
      image: "/Images/pastor.jpg",
      description:
        "Pastor A leads the district with a heart for service and community.",
    },
    {
      name: "Pastor Mr Oluwa Segun Samuel",
      title: "District Pastor",
      image: "/Images/music.jpg",
      description:
        "Pastor Segun Samuel is a devoted man of God, passionately committed to advancing God's kingdom, dedicating his heart and soul to the work of the Lord.",
    },
  ];

  return (
    <div>
      <section ref={addToRefs} className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Meet Our LFF Leaders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
              >
                <div className="relative h-60 w-full">
                  <Image
                    src={member.image}
                    alt={`${member.name}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                    {member.name}
                  </h3>
                  <h4 className="text-md font-semibold mb-4 text-green-600 text-center">
                    {member.title}
                  </h4>
                  <p className="text-gray-700 text-sm text-center">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
