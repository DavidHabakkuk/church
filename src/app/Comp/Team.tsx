"use client";

import Image from 'next/image';
import Olaiya from "../public/images/olaiya.jpg"; 

const teamMembers = [
  {
    name: "REV DR PJA Olaiya",
    title: "CEO",
    image: Olaiya, 
    description: "Rev. PJA Olaiya, President and Founder of the ministry, is a devoted servant of God called to raise individuals who will perform the supernatural, expanding and establishing God's kingdom."
  },
  {
    name: "Florence Joy Adeolu Olaiya",
    title: "Leader",
    image: Olaiya,
    description: "Jane is a dedicated leader committed to guiding our team with wisdom and integrity."
  },
  {
    name: "Pastor A",
    title: "District Pastor",
    image: Olaiya,
    description: "Pastor A leads the district with a heart for service and community."
  },
  {
    name: "Pastor Mr Oluwa Segun Samuel",
    title: "District Pastor",
    image: Olaiya,
    description: "Pastor Segun Samuel is a devoted man of God, passionately committed to advancing God's kingdom, dedicating his heart and soul to the work of the Lord."
  },
];

const Team = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Meet Our LFF Leaders</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-60">
                <Image
                  src={member.image} 
                  alt={`${member.name}`}
                  layout="fill"
                  objectFit="cover"
                  quality={90}
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h3>
                <h4 className="text-lg font-semibold mb-2 text-green-600">{member.title}</h4>
                <p className="text-gray-700">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
