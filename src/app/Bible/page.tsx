'use client'; // Mark as client-side for interactivity

const BibleStudyPage = () => {
  console.log("i am here with you");
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-blue-600 text-white">
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold">Our Bible Study</h1>
          <p className="mt-4 text-xl md:text-2xl">Join us as we explore the Word of God and grow in faith together.</p>
        </div>
      </section>

      {/* Section: Study Topics */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8">Study Topics</h2>
          <p className="text-lg text-gray-700 mb-6">
            Each week, we dive into various topics that help us understand the Bible in a deeper way.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Faith and Works</h3>
              <p className="text-gray-600">Understanding the relationship between our faith in Christ and how we live our lives.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">The Fruit of the Spirit</h3>
              <p className="text-gray-600">Learning how the Holy Spirit transforms our character as we walk with God.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Prayer and Intercession</h3>
              <p className="text-gray-600">Exploring the power of prayer and how we can intercede for others effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Upcoming Events */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8">Upcoming Events</h2>
          <p className="text-lg text-gray-700 mb-6">
            Stay connected and don’t miss our exciting upcoming events designed to help you grow in your walk with Christ.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Youth Bible Camp</h3>
              <p className="text-gray-600">Join us for a weekend of fun, fellowship, and spiritual growth at our annual Bible camp!</p>
              <p className="text-gray-500 mt-2">Date: November 10-12, 2024</p>
            </div>
            <div className="p-6 bg-gray-100 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Christmas Bible Study Series</h3>
              <p className="text-gray-600">A special series exploring the birth of Christ and the true meaning of Christmas.</p>
              <p className="text-gray-500 mt-2">Date: December 1-24, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Join Us */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8">Join Our Bible Study</h2>
          <p className="text-lg mb-6">We meet every Wednesday at 7:00 PM. We’d love to have you with us as we grow in faith together.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Get Involved
          </button>
        </div>
      </section>
    </div>
  );
};

export default BibleStudyPage;
