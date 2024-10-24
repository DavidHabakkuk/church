"use client";

import Image from 'next/image';

const departments = [
  { id: 1, name: "Music Ministry", description: "Worship through music.", image: "/images/departments/music.jpg" },
  { id: 2, name: "Children's Ministry", description: "Teaching children about faith.", image: "/images/departments/children.jpg" },
  { id: 3, name: "Youth Ministry", description: "Empowering the next generation.", image: "/images/departments/youth.jpg" },
  { id: 4, name: "Ushering Department", description: "Welcoming members and guests.", image: "/images/departments/ushering.jpg" },
  { id: 5, name: "Prayer Ministry", description: "Dedicated to intercession.", image: "/images/departments/prayer.jpg" },
  { id: 6, name: "Media & Tech Ministry", description: "Handling church media and tech.", image: "/images/departments/media.jpg" },
];

const DepartmentsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800 opacity-0 transition-opacity duration-700 delay-200 animate-fadeIn">
        Church Departments
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((department, index) => (
          <div
            key={department.id}
            className={`bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 
              hover:scale-105 hover:shadow-xl opacity-0 transition-opacity duration-700 delay-${index * 100} animate-fadeIn`}
          >
            {/* Image for each department */}
            <div className="mb-4">
              <Image
                src={department.image}
                alt={department.name}
                width={300}
                height={200}
                className="rounded-lg w-full object-cover"
              />
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-800 mb-2 opacity-0 transition-opacity duration-500 delay-200 animate-fadeIn">
              {department.name}
            </h3>
            <p className="text-gray-600 opacity-0 transition-opacity duration-500 delay-300 animate-fadeIn">
              {department.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentsPage;
