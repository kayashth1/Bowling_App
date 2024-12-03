import React, { useContext } from 'react';
import BirthdayPackages from '../components/BirthdayPackages';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { TestContext } from '@/components/Testcontext';

const Packages = () => {
  const { testOpen, toggleTest } = useContext(TestContext);

  return (
    <div
      className="packages relative bg-[#250e1b] text-white w-full pb-20"
      style={{ fontFamily: 'Montserrat' }}
      id="packages"
    >
      <div
        onClick={toggleTest}
        className="button  text-[80px] font-semibold cursor-pointer  absolute flex justify-center items-center w-[72px] h-[72px] bg-[#250e1b] -top-6 translate-x-[-50%] left-[50%] rounded-[50%] "
      >
        {testOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </div>
      <div className="heading text-[70px] sm:text-[90px] leading-[80px] lg:text-[200px] font-Bauhaus93 lg:leading-[180px] text-center pt-10 md:pt-36 text-[#f72f4f]">
        Packages
      </div>
      <div className="desc w-[80%] text-center pt-10 m-auto text-[20px] sm:text-[24px] leading-[30px] font-semibold text-[#D9D9D9] ">
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
