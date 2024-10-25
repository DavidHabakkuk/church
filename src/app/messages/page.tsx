"use client";

import { useState } from 'react';

const MessageDownload = () => {
  // aray that of the message 
  const messages = [
    { id: 1, title: 'Sunday Message', date: '19th October 2024', teacher: 'John Doe' },
    { id: 2, title: 'Wednesday Bible Study', date: '17th October 2024', teacher: 'Jane Smith' },
    { id: 3, title: 'Youth Conference', date: '15th October 2024', teacher: 'Pastor Mike' },
    { id: 4, title: 'Family Gathering', date: '14th October 2024', teacher: 'Pastor Sarah' },
    { id: 5, title: 'Men’s Retreat', date: '12th October 2024', teacher: 'John Doe' },
    { id: 6, title: 'Women’s Conference', date: '10th October 2024', teacher: 'Jane Smith' },
    { id: 7, title: 'Children’s Day', date: '8th October 2024', teacher: 'Pastor Mike' },
    { id: 8, title: 'Christmas Special', date: '25th December 2024', teacher: 'Pastor Sarah' },
    { id: 9, title: 'New Year Service', date: '1st January 2025', teacher: 'John Doe' },
  ];

  // Function to handle the download of a file
  const handleDownload = (fileUrl: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Messages</h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {messages.map((message) => (
          <div
            key={message.id}
            className="bg-gray-100 shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-4"
          >
            {/* Video at the top */}
            <div className="w-full mb-4">
              <video
                controls
                className="w-full h-40 rounded-lg" 
                src={`/videos/message${message.id}.mp4`}
              />
            </div>

            {/* Message Information */}
            <div className="text-center mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{message.title}</h3>
              <p className="text-gray-600">Date: {message.date}</p>
              <p className="text-gray-600">Teacher: {message.teacher}</p>
            </div>

            {/* Download Section */}
            <div className="w-full">
              <p className="text-lg font-semibold mb-2 text-center">Download Options:</p>

              {/* MP3 Download */}
              <button
                onClick={() => handleDownload(`/path-to-your-audio-file-${message.id}.mp3`, `message-audio-${message.id}.mp3`)} // Replace with actual MP3 URL
                className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mb-4"
              >
                Download MP3
              </button>

              {/* MP4 Download */}
              <button
                onClick={() => handleDownload(`/path-to-your-video-file-${message.id}.mp4`, `message-video-${message.id}.mp4`)} // Replace with actual MP4 URL
                className="bg-green-500 text-white px-4 py-2 rounded-lg w-full"
              >
                Download MP4
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessageDownload;
