import { useEffect, useState } from "react";

const images = [
  "/images/church.jpg",
  "/images/hall.jpg",
  "/images/faith.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setAnimate(false), 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center text-white">
    
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-300 ${animate ? "opacity-50" : "opacity-100"}`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />

    
      <div className="z-10 px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold  overflow-hidden border-r-4 border-white animate-typing">
          Welcome to LFF Ambassadors' Assembly
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-4 opacity-0 animate-fadeIn">
          We're glad to have you here.
        </p>
      </div>
    </div>
  );
};

export default Hero;
