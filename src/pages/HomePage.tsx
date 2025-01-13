import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

export const HomePage: React.FC = () => {
  const [link, setLink] = useState('');

  const handleProtectLink = () => {
    // Handle the link protection logic here
    console.log('Protecting link:', link);
  };

  // Slider settings
  const settings = {
    dots: false, // Disable dots
    infinite: false, // Disable infinite scrolling
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Enable default arrows
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
      <div className="w-11/12 h-5/6"> {/* Set width and height to 90% */}
        <Slider {...settings} className="h-full"> {/* Ensure slider takes full height */}
          {/* Card 1: Lorem Ipsum Text */}
          <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-2 text-black">Lorem Ipsum</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Card 2: Call to Action */}
          <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 h-full flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-2 text-black">Protect Your Link</h2>
            <p className="text-gray-600 mb-4">
              Enter your link below to protect it.
            </p>
            <div className="flex">
              <input
                type="text"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Enter your link"
                className="border border-gray-300 rounded-l-lg p-2 flex-grow"
              />
              <button
                onClick={handleProtectLink}
                className="bg-main text-white rounded-r-lg p-2 hover:bg-blue-700"
              >
                Protect my link
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
