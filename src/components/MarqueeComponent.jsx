import React from "react";

const MarqueeComponent = () => {
  return (
    <div
      className="relative overflow-hidden bg-[#4494a7] text-white py-2"
      style={{ fontFamily: "Montserrat" }}
    >
      {/* Animated track */}
      <div className="marquee-track flex">
        <span className="mx-8 text-xl font-semibold whitespace-nowrap">
          We have extended hours throughout the winter break 10 AM – 1 AM everyday including Christmas and New Year’s.
        </span>
        <span className="mx-8 text-xl font-semibold whitespace-nowrap">
          We have extended hours throughout the winter break 10 AM – 1 AM everyday including Christmas and New Year’s.
        </span>
      </div>
    </div>
  );
};

export default MarqueeComponent;
