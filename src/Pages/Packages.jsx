import React from 'react';
import BirthdayPackages from '../components/BirthdayPackages';

const Packages = () => {
  return (
    <div
      className="packages bg-[#250e1b] text-white w-full"
      style={{ fontFamily: 'Montserrat' }}
    >
      <div className="heading text-[90px] leading-[80px] lg:text-[200px] font-Bauhaus93 lg:leading-[180px] text-center md:pt-36 text-[#f72f4f]">
        Packages
      </div>
      <div className="desc w-[80%] text-center pt-10 m-auto text-[24px] leading-[30px] font-semibold text-[#D9D9D9] ">
        Celebrate in Style with Our Exclusive Birthday Packages! Whether
        it&apos;s for kids, teens, or adults, we offer tailored experiences to
        make your special day unforgettable. Bowl, dine, and create lasting
        memories with us!
      </div>
      <BirthdayPackages />
    </div>
  );
};

export default Packages;
