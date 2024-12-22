import React, { useState, useEffect } from 'react';

const TimetableRow = ({ day, startHour, endHour, startTime, endTime }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let unitWidth = 0;

  if (windowWidth >= 1440) unitWidth = 2.5;
  else if (windowWidth >= 1280 && windowWidth < 1440) unitWidth = 2.5;
  else if (windowWidth >= 1024 && windowWidth < 1280) unitWidth = 2.5;
  else if (windowWidth >= 768 && windowWidth < 1024) unitWidth = 2.3;
  else if (windowWidth >= 480 && windowWidth < 768) unitWidth = 3;
  else unitWidth = 1.7;

  const timespace = (endHour - startHour) * unitWidth;

  const clubStartingTime = 10; // 10am
  const gapFromStartingTime = startHour - clubStartingTime;
  const emptySpace = gapFromStartingTime * unitWidth;

  return (
    <div className="flex gap-0 md:gap-16 w-full font-semibold p-1 h-[40px] lg:ml-[5vw]">
      <div className="day w-[110px]  flex-shrink-0">{day}</div>
      <div className="w-[calc(100vw - 110px)] flex">
        <div
          className={`emptySpace`}
          style={{ width: `${emptySpace}vw` }}
        ></div>
        <div className="time flex gap-2 md:gap-5 mr-2">
          <div
            className={`border-2 border-[#f72f4f] rounded-[20px] w-[${timespace}vw]`}
            style={{ width: `${timespace}vw` }}
          ></div>
        </div>
        <div className="hours text-nowrap font-normal">
          {startTime} - {endTime}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    day: 'Monday',
    startHour: 10,
    endHour: 25,
    startTime: '10 am',
    endTime: '1 am',
  },
  {
    day: 'Tuesday',
    startHour: 10,
    endHour: 25,
    startTime: '10 am',
    endTime: '1 am',
  },
  {
    day: 'Wednesday',
    startHour: 10,
    endHour: 25,
    startTime: '10 am',
    endTime: '1 am',
  },
  {
    day: 'Thursday',
    startHour: 10,
    endHour: 25,
    startTime: '10 am',
    endTime: '1 am',
  },
  {
    day: 'Friday',
    startHour: 10,
    endHour: 25,
    startTime: '10 am',
    endTime: '1 am',
  },
  {
    day: 'Saturday',
    startHour: 10,
    endHour: 25,
    startTime: '10 am',
    endTime: '1 am',
  },
  {
    day: 'Sunday',
    startHour: 10.5,
    endHour: 25,
    startTime: '10:30 am',
    endTime: '1 am',
  },
];

const Timetable = ({ isOpen }) => {
  return (
    <div
      className={`text-white w-full flex flex-col justify-center gap-3 md:gap-0 transition-all duration-500`}
      style={{ fontFamily: 'Montserrat' }}
    >
      {data.map((item, index) => (
        <TimetableRow
          key={index}
          day={item.day}
          startHour={item.startHour}
          endHour={item.endHour}
          startTime={item.startTime}
          endTime={item.endTime}
        />
      ))}
    </div>
  );
};

export default Timetable;
