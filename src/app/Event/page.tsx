"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const events = [
  {
    id: 4321,
    title: "Christmas Carol",
    date: "December 15, 2024",
    description:
      "An evening of joyful carols, worship, and celebration of Christ's birth.",
    flyer: "/images/christ.jpg",
  },
  {
    id: 23456,
    title: "GSA Meeting",
    date: "December 10, 2024",
    description: "A gathering for spiritual growth and community worship.",
    flyer: "/images/music.jpg",
  },
  {
    id: 123,
    title: "Youth Empowerment Conference",
    date: "December 10, 2024",
    description:
      "A conference designed to inspire and empower the next generation of leaders.",
    flyer: "/images/music.jpg",
  },
  {
    id: 2,
    title: "Christmas Eve Service",
    date: "December 24, 2024",
    description:
      "Join us for a special service as we celebrate the birth of Jesus Christ.",
    flyer: "/images/music.jpg",
  },
  {
    id: 3,
    title: "New Year's Prayer Vigil",
    date: "December 31, 2024",
    description:
      "Start the new year with powerful prayers and divine blessings.",
    flyer: "/images/music.jpg",
  },
  {
    id: 4,
    title: "Easter Celebration Service",
    date: "April 5, 2025",
    description: "Celebrate the resurrection of Jesus Christ with us.",
    flyer: "/images/music.jpg",
  },
  {
    id: 5,
    title: "Community Outreach",
    date: "June 10, 2025",
    description:
      "Reach out and serve the community with love, care, and compassion.",
    flyer: "/images/music.jpg",
  },
  {
    id: 6,
    title: "Family Fun Day",
    date: "July 22, 2025",
    description:
      "A fun-filled day for families with games, food, and fellowship.",
    flyer: "/images/music.jpg",
  },
  {
    id: 7,
    title: "Thanksgiving Service",
    date: "Every First Sunday of the Month",
    description:
      "Join us every first Sunday to give thanks and praise to God for His blessings.",
    flyer: "/images/music.jpg",
  },
  {
    id: 8,
    title: "Church Anniversary",
    date: "October 14, 2025",
    description: "Celebrate the journey and growth of our church community.",
    flyer: "/images/music.jpg",
  },
];

const EventPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mt-10">
        Upcoming Events
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-700 ease-out 
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} 
              delay-${index * 200}`}
          >
            {/* Event Flyer */}
            <div className="relative w-full h-48 mb-4">
              <Image
                src={event.flyer}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Event Title */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {event.title}
            </h3>

            {/* Event Date */}
            <p className="text-gray-600 mb-2">
              <strong>Date:</strong> {event.date}
            </p>

            {/* Event Description */}
            <p className="text-gray-700">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
