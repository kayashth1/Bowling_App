import React, { useState } from 'react';

const AboutUsPage = () => {
  const [testOpen, setTestOpen] = useState(false);

  const toggleTest = () => {
    setTestOpen(!testOpen);
  };

  return (
    <div
      className={`about-page w-full text-white bg-gradient-to-r from-[#F72F4F] to-[#911C2E]`}
    >
      {/* About Us Section */}
      <div className="about-us w-full flex flex-col-reverse md:flex-row items-center justify-center text-4xl">
        <div className="about-text w-full">
          <div className="about-heading text-[90px] leading-[80px] lg:text-[200px] font-Bauhaus93 lg:leading-[180px] text-center md:text-start md:p-10">
            About Us
          </div>
          <div
            className="about-desc w-[87%] text-[16px] leading-[20px] font-semibold  pl-5 pr-5 m-auto mt-10 text-center md:text-start md:pl-12 md:m-0 md:text-[24px] md:leading-[30px] md:mt-0 "
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
        <div className="video w-2/5">
          <img src="/ball.png" alt="bowling-ball" />
        </div>
      </div>

      {/* Test Section */}
      <div
        className={`test h-1/2 transition-all duration-200 ease-in-out ${
          testOpen ? 'h-[40vh]' : 'h-0'
        } overflow-hidden`}
      >
        <div className="flex items-center justify-center h-full text-2xl">
          Test
        </div>
      </div>

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
