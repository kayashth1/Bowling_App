import NewsSlider from '@/components/NewSlider';
import Timetable from '@/components/Timetable';
import React, { useState } from 'react';

const SchedulePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-col w-full h-[800px]">
      <div className="flex items-start h-full w-full transition-all duration-1000 ease-[ease-in-out]">
        {/* Schedule Section */}
        <div
          className={`schedule md:p-10 flex flex-col gap-10 justify-center items-center transition-all duration-1000 ease-[ease-in-out] ${
            isOpen ? 'w-[20%]' : 'w-[80%]'
          } bg-[#250e1b] h-full p-4`}
        >
          <div
            className={`text-[90px] leading-[80px] lg:text-[180px] font-Bauhaus93 lg:leading-[180px] text-[#f72f4f] flex flex-col justify-center font-bold transition-all duration-1000 ease-[ease-in-out] ${
              isOpen ? '-rotate-90' : 'rotate-0'
            } `}
          >
            Schedule
          </div>
          {!isOpen && <Timetable />}
        </div>

        {/* News Section */}
        <div
          className={`news flex flex-col items-center justify-center transition-all duration-1000 ease-[ease-in-out] ${
            isOpen ? 'w-[80%]' : 'w-[20%]'
          } bg-white text-white h-full p-4`}
        >
          <div
            className={`text-end text-[90px] leading-[80px] lg:text-[180px] font-Bauhaus93 lg:leading-[180px] text-[#0f96aa] transition-all duration-1000 ease-[ease-in-out] ${
              isOpen ? 'rotate-0' : '-rotate-90'
            }`}
          >
            News
          </div>
          {isOpen && (
            <div className="newsSliderContainer w-full flex justify-center">
              <NewsSlider />
            </div>
          )}
        </div>
      </div>

      {/* Toggle Button */}
      <div
        className={`cursor-pointer absolute top-[50%] translate-y-[-50%]  w-[70px] h-[60px] flex justify-center items-center rounded-full text-[#f72f4f] text-[24px] font-bold bg-white transition-all duration-1000 ease-[ease-in-out]`}
        style={{
          left: isOpen ? 'calc(50% + 90px)' : 'calc(80% - 50px)', // Adjust based on the width of the two sections
        }}
        onClick={handleClick}
      >
        {isOpen ? '<' : '>'}
      </div>
    </div>
  );
};

export default SchedulePage;
