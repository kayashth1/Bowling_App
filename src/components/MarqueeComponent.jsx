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
        We have extended hours throughout the winter break 10Am-1Am everyday including Christmas and New Year’s.
        </span>
        {/* Duplicate content to create seamless animation */}
        {/* <span className="mx-4">
        We are open on Family Day (Monday) from 10 AM till Midnight.
        </span> */}
      </div>
    </div>
  );
};

export default MarqueeComponent;
