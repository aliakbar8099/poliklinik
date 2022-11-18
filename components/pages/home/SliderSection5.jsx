import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderSection5({ comments }) {
    return (
        <>
            <Swiper
                slidesPerView={5}
                spaceBetween={55}
                slidesPerGroup={1}
                loop={true}
                centeredSlides={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[100%] w-[135%]"
                id="comment-s"
            >
                {
                    comments.map((item, index) => (
                        <SwiperSlide key={index} className="w-[300px] h-[100%] p-10 flex flex-col  justify-start costom-Card-commnet" style={{ background: item.color }}>
                            <h5 className="text-[18px] mb-5">{item.name}</h5>
                            <p className="px-3 py-1">{item.text}</p>
                            <div className="flex justify-between items-center mt-auto">
                                <span>{item.AssociateDr}({item.position})</span>
                                <div className="rating" dir="ltr">
                                    <input type="radio" name="rating-2" className={`mask mask-star-2 ${item.rate <= 1 ? "bg-[#fff]" : "bg-[#1A535C]"}`} />
                                    <input type="radio" name="rating-2" className={`mask mask-star-2 ${item.rate <= 2 ? "bg-[#fff]" : "bg-[#1A535C]"}`} />
                                    <input type="radio" name="rating-2" className={`mask mask-star-2 ${item.rate <= 3 ? "bg-[#fff]" : "bg-[#1A535C]"}`} />
                                    <input type="radio" name="rating-2" className={`mask mask-star-2 ${item.rate <= 4 ? "bg-[#fff]" : "bg-[#1A535C]"}`} />
                                    <input type="radio" name="rating-2" className={`mask mask-star-2 ${item.rate <= 5 ? "bg-[#fff]" : "bg-[#1A535C]"}`} />
                                </div>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </>
    );
}
