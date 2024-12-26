import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';

import n1 from '../../assets/n1.jpg';
import n2 from '../../assets/n2.jpg';
import n5 from '../../assets/n5.png';

const data = [
  {
    imageUrl: n5,
    text: 'We have open morning and evening time slots for league admins to arrange leagues. Contact for more details. We do Corporate Parties, School Trips, Team events and Private Parties. Contact for more details.',
  },
  {
    imageUrl: n1,
    text: "Starting this September, we're rolling out a fresh fall menu at the Alley Café! Come in and try our seasonal specials, including pumpkin spice lattes and hearty comfort food favorites.",
  },
  {
    imageUrl: n2,
    text: "Our leagues are back starting mid-September! On Thursdays from 6:00 PM to 8:30 PM, we'll be almost at full capacity, but 2-3 lanes will still be open for walk-ins. Join us for some 10-pin fun!",
  },
];

const NewsSlider = () => {
  // Duplicate the data for seamless looping
  const items = [...data, ...data];

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
        containScroll: 'trimSnaps',
      }}
      className="w-[80%] md:w-[90%] text-black"
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false, // Ensures continuous autoplay
        }),
      ]}
    >
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-full sm:basis-[40%] md:basis-[40%] lg:basis-[40%] shrink-0"
          >
            <div className="p-5 flex flex-col gap-4">
              <img className="w-[90%]" src={item.imageUrl} alt={`Slide ${index + 1}`} />
              <div className="text w-[90%] text-black font-semibold text-left">
                {item.text}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default NewsSlider;
