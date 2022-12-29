import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper";

export default function SliderMain({ slider }) {
  return (
    <>
      <Swiper autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-[100%]">
        {
          slider?.map((item) => (
            <SwiperSlide
              key={item.id}
            >
              <img className="w-full h-full object-cover" src={item.img} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}