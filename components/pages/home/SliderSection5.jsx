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
                slidesPerView={2}
                spaceBetween={20}
                slidesPerGroup={1}
                breakpoints={{
                    576: {
                        // width: 576,
                        slidesPerView: 3,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 4,
                    },
                    1200: {
                        // width: 768,
                        slidesPerView: 5,
                    },
                }}
                loop={true}
                centeredSlides={true}
                loopFillGroupWithBlank={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[100%] w-[135%]"
                id="comment-s"
            >
                {
                    comments.map((item, index) => (
                        <SwiperSlide key={index} className="w-[300px] cursor-grab h-[100%] p-4 lg:p-10 flex flex-col  justify-start costom-Card-commnet" style={{ background: item.color }}>
                            <h5 className="mb-2 lg:mb-5 text-[15px] lg:text-[18px]">{item.name}</h5>
                            <p className="px-3 py-1 text-[12px] lg:text-[16px]">{item.text}</p>
                            <div className="flex justify-between items-center mt-auto flex-wrap mt-3">
                                <span className="text-[12px] lg:text-[16px]">{item.AssociateDr}({item.position})</span>
                                <div className="rating mt-3" dir="ltr">
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
