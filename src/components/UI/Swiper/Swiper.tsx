// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { ReactNode } from "react";

interface SliderProps {
  children: ReactNode;
}

export const Slider = ({children}: SliderProps) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {children}
    </Swiper>
  );
};