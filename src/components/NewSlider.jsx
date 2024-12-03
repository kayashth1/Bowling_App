import * as React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { CloudCog } from 'lucide-react';

const data = [
  {
    imageUrl: 'n1.jpg',
    text: "Starting this September, we're rolling out a fresh fall menu at the Alley Café! Come in and try our seasonal specials, including pumpkin spice lattes and hearty comfort food favorites.",
  },
  {
    imageUrl: 'n2.jpg',
    text: "Our leagues are back starting mid-September! On Thursdays from 6:00 PM to 8:30 PM, we'll be almost at full capacity, but 2-3 lanes will still be open for walk-ins. Join us for some 10-pin fun!",
  },
  {
    imageUrl: 'n3.jpg',
    text: 'Get ready to glow! Our popular Cosmic Bowling Nights are back every Friday from 9:00 PM. Experience the fun of bowling under black lights, with neon balls, and the latest hits pumping through the speakers.',
  },
];

const NewsSlider = () => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-[80%] md:w-[90%] text-black"
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
            <div className="p-5 flex flex-col gap-4">
              <img className="w-[90%]" src={`${item.imageUrl}`} />
              <div className="text w-[90%] text-black font-semibold text-center">
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
