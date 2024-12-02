import React from 'react';

const TimetableRow = ({ day, startHour, endHour, startTime, endTime }) => {
  const unitWidth = 2.5;
  const timespace = (endHour - startHour) * unitWidth;

  const clubStartingTime = 10; // 10am
  const gapFromStartingTime = startHour - clubStartingTime;
  const emptySpace = gapFromStartingTime * unitWidth;

  return (
    <div className="flex gap-20 w-full font-semibold p-1">
      <div className="day w-[110px]">{day}</div>
      <div className="w-[calc(100vw - 110px)] flex">
        <div
          className={`emptySpace`}
          style={{ width: `${emptySpace}vw` }}
        ></div>
        <div className="time flex gap-5">
          <div
            className=" border-2 border-[#f72f4f] rounded-[20px]"
            style={{ width: `${timespace}vw` }}
          ></div>
          <div className="hours">
            {startTime} - {endTime}
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    day: 'Monday',
    startHour: 17,
    endHour: 23.5,
    startTime: '5 pm',
    endTime: '11:30 pm',
  },
  {
    day: 'Tuesday',
    startHour: 17,
    endHour: 23.5,
    startTime: '5 pm',
    endTime: '11:30 pm',
  },
  {
    day: 'Wednesday',
    startHour: 17,
    endHour: 22,
    startTime: '5 pm',
    endTime: '10 pm',
  },
  {
    day: 'Thursday',
    startHour: 17,
    endHour: 23,
    startTime: '5 pm',
    endTime: '11 pm',
  },
  {
    day: 'Friday',
    startHour: 17,
    endHour: 25,
    startTime: '5 pm',
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

const Timetable = () => {
  return (
    <div className="text-white w-full" style={{ fontFamily: 'Montserrat' }}>
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
