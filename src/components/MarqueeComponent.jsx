import React from 'react';

const MarqueeComponent = () => {
  return (
    <div
      className="relative text-white flex overflow-x-hidden text-xl py-2 bg-[#4494a7]"
      style={{ fontFamily: 'Montserrat' }}
    >
      {/* Wrapper for the animations */}
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-4">
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </span>
        {/* Duplicate content to create seamless animation */}
        <span className="mx-4">
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </span>
      </div>
    </div>
  );
};

export default MarqueeComponent;
