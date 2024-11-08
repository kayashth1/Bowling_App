import React, { useState } from 'react';
import Slider from '../components/Slider.jsx';

const AboutUsPage = () => {
  const [testOpen, setTestOpen] = useState(false);

  const toggleTest = () => {
    setTestOpen(!testOpen);
  };

  return (
    <div
      className={`about-page relative w-full text-white bg-gradient-to-r from-[#F72F4F] to-[#911C2E] overflow-hidden`}
    >
      {/* About Us Section */}
      <div className="about-us w-full xl:pb-20 2xl:pb-32 text-center flex flex-wrap-reverse justify-center md:text-start xl:flex-col-reverse md:flex-row items-center xl:items-end xl:justify-start text-4xl">
        <div className="about-text w-[70%]">
          <div className="about-heading text-[90px] leading-[80px] lg:text-[180px] font-Bauhaus93 lg:leading-[180px] text-center md:text-center xl:text-start md:p-10">
            About Us
          </div>
          <div
            className="about-desc w-[100%] sm:w-[87%] text-[16px] leading-[20px] font-semibold sm:px-5 m-auto mt-10 text-center md:text-center xl:text-start md:pl-12 md:m-0 md:text-[24px] md:leading-[30px] md:mt-0"
            style={{ fontFamily: 'Montserrat' }}
          >
            At our bowling alley, our manager, Rizwan, is dedicated to ensuring
            an exceptional customer experience. With a focus on maintaining our
            brand&apos;s high standards, Rizwan fosters a welcoming atmosphere
            where fun and enjoyment are paramount. His approach to customer
            relations emphasizes personal connections and attentive service.
            Under his leadership, our team of enthusiastic staff members goes
            above and beyond to ensure every guest leaves with a smile,
            providing top-notch service and creating memorable experiences for
            all who visit.
          </div>
        </div>
        <div className="video mt-[-50px] h-[400px] xl:absolute xl:top-10 xl:right-[-50px] xl:w-[600px] xl:h-[600px]">
          <img src="/ball_crop.gif" autoPlay className="h-full object-cover" />
        </div>
      </div>

      {testOpen && (
        <div
          className={`test h-1/2 transition-all duration-200 ease-in-out `}
          style={{ fontFamily: 'Montserrat' }}
        >
          <div className="w-full flex flex-col items-center justify-center h-full text-2xl mt-16 sm:mt-20">
            <div className="w-full flex flex-col ">
              <div className="heading text-[60px] sm:text-[90px] leading-[80px] lg:text-[180px] font-Bauhaus93 lg:leading-[180px] text-center md:text-center xl:text-end md:p-5">
                Testimonials
              </div>
              <div className="desc  w-[100%] sm:w-[100%] text-[16px] leading-[20px] font-semibold sm:pl-5 sm:pr-24 m-auto mt-5 sm:mt-10 text-center md:text-center xl:text-end md:pl-12 md:m-0 md:text-[24px] md:leading-[30px] md:mt-0">
                Discover Why Our Bowlers Keep Coming Back, in Their Own Words
              </div>
            </div>

            {/* Correct closing tag */}
            <div className="carousel w-full mt-10">
              <Slider className="w-full" />
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={toggleTest}
          className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-800 transition"
        >
          Click me
        </button>
      </div>
    </div>
  );
};

export default AboutUsPage;
