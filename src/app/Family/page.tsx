'use client'; // Ensure this is client-side

const FamilyClassPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-green-600 text-white">
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold">Family Class</h1>
          <p className="mt-4 text-xl md:text-2xl">
            Strengthening families with faith, love, and biblical principles.
          </p>
        </div>
      </section>

      {/* Section: What We Cover */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8">What We Cover in Family Class</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our family class helps strengthen the bonds between family members, guiding them through biblical principles, love, and communication.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Building Strong Marriages</h3>
              <p className="text-gray-600">
                Explore the biblical foundation for a loving and lasting marriage.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Raising Godly Children</h3>
              <p className="text-gray-600">
                Learn how to raise children in a way that honors God and nurtures their spiritual growth.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Handling Conflict Biblically</h3>
              <p className="text-gray-600">
                Discover ways to resolve conflicts in the family using scripture and godly principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Upcoming Events */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-semibold mb-8">Upcoming Family Events</h2>
          <p className="text-lg text-gray-700 mb-6">
            Don’t miss our exciting events aimed at bringing families together and encouraging spiritual growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Family Retreat</h3>
              <p className="text-gray-600">
                Join us for a weekend of relaxation, fun, and spiritual renewal for the whole family.
              </p>
              <p className="text-gray-500 mt-2">Date: October 28-30, 2024</p>
            </div>
            <div className="p-6 bg-gray-100 shadow-md rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Parenting Seminar</h3>
              <p className="text-gray-600">
                A special session focused on biblical parenting tips and advice for raising children in today’s world.
              </p>
              <p className="text-gray-500 mt-2">Date: November 15, 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Join Us */}
      <section className="bg-green-600 text-white py-16">
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

export default FamilyClassPage;
