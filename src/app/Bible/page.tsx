"use client";

import React, { useEffect, useRef } from "react";

const BibleStudyPage = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 1.3;
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
    <div className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section
        ref={addToRefs}
        className="hero-section bg-blue-700 text-white py-20 text-center opacity-0 transition-all duration-700"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Discover God's Word
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed">
          Join us every week as we explore the Bible and deepen our faith.
        </p>
      </section>

      {/* Study Topics */}
      <section ref={addToRefs} className="study-topics py-20 bg-white opacity-0 transition-all duration-700">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Study Topics</h2>
          <p className="text-lg text-gray-700 mb-12">
            Dive deeper into the Bible with topics that enrich your understanding and strengthen your faith.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Faith and Works",
                description:
                  "Understanding the relationship between our faith in Christ and how we live our lives.",
              },
              {
                title: "The Fruit of the Spirit",
                description:
                  "Learning how the Holy Spirit transforms our character as we walk with God.",
              },
              {
                title: "Prayer and Intercession",
                description:
                  "Exploring the power of prayer and how we can intercede for others effectively.",
              },
            ].map((topic, idx) => (
              <div
                key={idx}
                className="p-8 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  {topic.title}
                </h3>
                <p className="text-gray-600">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section
        ref={addToRefs}
        className="upcoming-events py-20 bg-gray-100 opacity-0 transition-all duration-700"
      >
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">
            Upcoming Events
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Don’t miss these exciting events designed to help you grow in faith.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Youth Bible Camp",
                description:
                  "A weekend of fun, fellowship, and spiritual growth at our annual Bible camp!",
                date: "November 10-12, 2024",
              },
              {
                title: "Christmas Bible Study Series",
                description:
                  "A special series exploring the birth of Christ and the true meaning of Christmas.",
                date: "December 1-24, 2024",
              },
            ].map((event, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <p className="text-gray-500 italic">Date: {event.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        ref={addToRefs}
        className="call-to-action bg-blue-700 text-white py-20 text-center opacity-0 transition-all duration-700"
      >
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold mb-8">Join Our Bible Study</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            We meet every Wednesday at 7:00 PM. Whether you’re new to the faith
            or a seasoned believer, you’re welcome here.
          </p>
          <button className="px-8 py-3 bg-white text-blue-700 rounded-full font-semibold shadow-md hover:bg-gray-100 transition">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default BibleStudyPage;
