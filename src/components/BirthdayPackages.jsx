import React, { useState } from 'react';
import { FaUserGroup } from 'react-icons/fa6';
import { BsClockFill } from 'react-icons/bs';
import { MdFastfood } from 'react-icons/md';

const BirthdayPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      title: '10 Pin Birthday Package',
      description:
        'Strike Up the Fun: Celebrate Your Big Day with Action-Packed 10-Pin Bowling Adventures!',
      details: {
        minParticipents: 10,
        time: '2 Hours Total',
        activities: '1 Hour of Bowling and Shoe Rental + 1 Hour of Party Space',
        food: '2 Slices of Pizza per participant, Unlimited Fountain Drinks (as available), 1 Bag of Chips per participant',
      },
    },
    {
      id: 2,
      title: '5 Pin Birthday Package',
      description:
        'Perfect for Little Hands: Enjoy a Fun-Filled Birthday with Our Exciting 5-Pin Bowling Experience!',
      details: {
        minParticipents: 5,
        time: '2 Hours Total',
        activities: '1 Hour of Bowling and Shoe Rental + 1 Hour of Party Space',
        food: '2 Slices of Pizza per participant, Unlimited Fountain Drinks (as available), 1 Bag of Chips per participant',
      },
    },
  ];

  return (
    <div
      className="flex flex-col items-center text-white p-4 w-full mt-20"
      style={{ fontFamily: 'Montserrat' }}
    >
      <div className="flex flex-col justify-center md:flex-row gap-4 w-full">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-[#F72F4F] rounded-[70px] text-center 
              ${!selectedPackage ? 'w-[45%] p-16' : ''}
              ${selectedPackage === pkg.id ? 'w-[90%]' : ''}
            `}
          >
            {!selectedPackage && (
              <>
                <h2 className="text-[48px] leading-[45px] font-bold text-start">
                  {pkg.title}
                </h2>
                <p className="mt-2 text-start text-[24px] leading-[30px] font-semibold">
                  {pkg.description}
                </p>
                <div className="flex justify-end">
                  <button
                    onClick={() => setSelectedPackage(pkg.id)}
                    className="mt-6 p-6 bg-white font-bold text-[24px] leading-[30px] text-black rounded-full "
                  >
                    Learn More
                  </button>
                </div>
              </>
            )}
            {selectedPackage === pkg.id ? (
              <div className="p-16 w-full flex flex-col">
                <div className="flex">
                  <div className="div1 w-1/2">
                    <div>
                      <h2 className="text-[48px] leading-[45px] font-bold text-start">
                        {pkg.title}
                      </h2>
                    </div>
                    <div>
                      <p className="mt-2 text-start text-[24px] leading-[30px] font-semibold">
                        {pkg.description}
                      </p>
                    </div>
                    <div>
                      <p className="mt-6 flex gap-5 items-center text-start text-[24px] leading-[30px] font-semibold">
                        <FaUserGroup />
                        Minimum {pkg.details.minParticipents} participents
                        required
                      </p>
                    </div>
                  </div>
                  <div className="div2 w-1/2">
                    <p className="mt-6 flex gap-5  text-start text-[24px] leading-[30px] font-semibold">
                      <BsClockFill className="text-[48px]" />
                      {pkg.details.time}
                      <br />
                      {pkg.details.activities}
                    </p>
                    <p className="mt-6 flex gap-5  text-start text-[24px] leading-[30px] font-semibold">
                      <MdFastfood className="text-[96px]" />
                      {pkg.details.food}
                    </p>
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <button
                    onClick={() => setSelectedPackage(null)}
                    className=" mt-6 px-14 py-4 bg-white font-bold text-[24px] leading-[30px] text-black rounded-full"
                  >
                    Back
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayPackages;