"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
// import flyer1 from '../public/images/flyer1.jpg';  // Replace with your flyer image


const events = [
  {
    id: 1,
    title: "Youth Empowerment Conference",
    date: "December 10, 2024",
    description: "A day of inspiring talks, worship, and fellowship for the youth.",
    // flyer: flyer1,
  },
  {
    id: 2,
    title: "Christmas Eve Service",
    date: "December 24, 2024",
    description: "Join us as we celebrate the birth of our Lord Jesus Christ.",
    // flyer: flyer2,
  },
  {
    id: 3,
    title: "New Year's Prayer Vigil",
    date: "December 31, 2024",
    description: "Pray with us as we usher in the new year, seeking God’s blessings.",
    // flyer: flyer3,
  },
  {
    id: 4,
    title: "Easter Celebration Service",
    date: "April 5, 2025",
    description: "Come together to celebrate the resurrection of Christ.",
    // flyer: flyer4,
  },
  {
    id: 5,
    title: "Community Outreach",
    date: "June 10, 2025",
    description: "Serving our community with love and compassion.",
    // flyer: flyer5,
  },
  {
    id: 6,
    title: "Family Fun Day",
    date: "July 22, 2025",
    description: "A fun-filled day for the entire family with games, food, and fellowship.",
    // flyer: flyer6,
  },
  {
    id: 7,
    title: "Thanksgiving Service",
    date: "November 25, 2025",
    description: "Join us for a special thanksgiving service.",
    // flyer: flyer7,
  },
  {
    id: 8,
    title: "Church Anniversary",
    date: "October 14, 2025",
    description: "Celebrating the journey and growth of our church.",
    // flyer: flyer8,
  },
];

const EventPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold text-center text-gray-800 mt-10">
        Upcoming Events
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`bg-white p-6 rounded-lg shadow-lg transform transition-all duration-700 ease-out 
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"} 
              delay-${index * 200}`}
          >
            {/* Event Flyer */}
            <div className="mb-4">
              <Image
                src={event.flyer}
                alt={event.title}
                width={300}
                height={200}
                className="rounded-lg w-full object-cover"
              />
            </div>

            {/* Event Title */}
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{event.title}</h3>

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
