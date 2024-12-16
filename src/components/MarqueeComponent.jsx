import React from 'react';

const MarqueeComponent = () => {
  return (
    <div
      className="relative text-white flex overflow-x-hidden text-xl py-2 bg-[#4494a7]"
      style={{ fontFamily: 'Montserrat' }}
    >
      {/* Wrapper for the animations */}
      <div className="flex animate-marquee whitespace-nowrap text-[20px] font-semibold">
        <span className="mx-4">
        We will be open all throughout the winter break despite our displayed hours from 10:30 am to midnight.
        </span>
        {/* Duplicate content to create seamless animation */}
        <span className="mx-4">
        We will be open all throughout the winter break despite our displayed hours from 10:30 am to midnight.
        </span>
      </div>
    </div>
  );
};

export default MarqueeComponent;
