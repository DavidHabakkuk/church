import React from 'react';


const Video = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-4xl w-full p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Messages </h1>
        <div className="relative pb-[56.25%] h-0">
          <video
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            controls
            autoPlay
            muted
            src="/videos/solt.mp4"
          >
          </video>
        </div>
      </div>
    </div>
  );
};

export default Video;
