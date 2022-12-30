import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SliderParts({ part, styles }) {
    return (
        <>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
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
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[100%] w-[135%]"
                id="comment-s"
            >
                {
                    part.map((item, index) => (
                        <SwiperSlide key={index} className={`${styles.card_slider} flex justify-around flex-wrap items-center`} style={{ background: item.color }}>
                            <div className='w-full h-full rounded-[20px]'>
                                <img src={item.img} />
                                <p className="font-bold">{item.name}</p>
                            </div>
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </>
    );
}
