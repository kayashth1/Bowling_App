import React from 'react';
import { MdLocationOn } from 'react-icons/md';

const Hero = () => {
  return (
    <div className="hero text-white pl-10 pr-10 mt-12">
      <div className="heading text-[90px] leading-[80px] lg:text-[200px] font-Bauhaus93 text-[#f72f4f] lg:leading-[180px]">
        BOWL YOUR WAY TO FUN
      </div>
      <div className="desc flex gap-3 pl-3 pt-3 flex-col text-[15px] lg:text-[20px]">
        <div className="1">
          Enjoy Lanes, Games, and Great Times Together at Brampton Bowling
          Centre
        </div>
        <div className="2 h-full">
          <span className="flex items-center gap-3 h-full">
            <MdLocationOn className="text-[30px]" />
            12 Beech St, Brampton, ON L6V 1V1, Canada
          </span>
        </div>
      </div>
      <div className="button w-[200px] bg-[#0f96aa] flex justify-center items-center p-3 rounded-[30px] mt-16 ml-3">
        <button className="font-semibold h-full w-full outline-none">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Hero;