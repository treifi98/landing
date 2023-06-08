import React, { useState } from 'react'


import { useRef, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from 'swiper'


import beatchFront from '../../../assets/Newcircle.png'
import simpleGreenArrowLeft from '../../../assets/simpleGreenArrowLeft.svg'
import simpleGreenArrowRight from '../../../assets/simpleGreenArrowRight.svg'

const SimpleSwiper = () => {
    const [swiper, setSwiper] = useState<any>();

  return (
    <div className='lg:w-[91.25rem] lg:h-[38.125rem] w-[95vw] h-max py-[1.5rem] lg:py-0 border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.4375rem_#B6C3C5] rounded-[0.9375rem] relative overflow-hidden flex items-center lg:block'>
            <div className='absolute lg:h-[1.625rem]  lg:w-[0.9375rem] h-[4.625rem] w-[0.7375rem]lg:left-[0.5rem]  left-[0.3rem] top-[calc(50%-0.46875rem)] cursor-pointer' onClick={() => swiper.slideNext()}>
                <img src={simpleGreenArrowLeft} alt="" className='lg:h-[1.625rem]  lg:w-[0.9375rem] h-[1.425rem] w-[0.7375rem]' />
            </div>
            <div className='absolute lg:h-[1.625rem]  lg:w-[0.9375rem] h-[4.625rem] w-[0.7375rem] lg:right-[0.5rem] right-[0.3rem] top-[calc(50%-0.46875rem)] cursor-pointer'onClick={() => swiper.slidePrev()}>
                <img src={simpleGreenArrowRight} alt="" className='lg:h-[1.625rem]  lg:w-[0.9375rem] h-[1.425rem] w-[0.7375rem]' />
            </div>
        <div className='mx-auto  lg:mt-[1.9375rem] lg:w-[87.125rem] w-[95%] rounded-[0.9375rem]'>
            <Swiper

            modules={[Autoplay, EffectCoverflow, Pagination]}
                // slidesPerView={1}
                // // slidesPerGroupSkip={3}
                // spaceBetween={20}
                breakpoints={{
                    1: {
                    slidesPerView: 1.1,
                    spaceBetween: 0,
                    },
                    1530: {
                    slidesPerView: 1.3,
                    spaceBetween: 0,
                    }

                }}

                onSwiper={(swiper) => setSwiper(swiper)}
                loop={true}
                className="simpleSwiper"
            >
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] rounded-[0.9375rem] w-[97%] aspect-[146/61]'>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.9375rem] w-[100%] aspect-[146/61]'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] w-[97%] aspect-[146/61]'>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.9375rem] w-[100%] aspect-[146/61]'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] w-[97%] aspect-[146/61]'>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.9375rem] w-[100%] aspect-[146/61]'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] w-[97%] aspect-[146/61]'>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.9375rem] w-[100%] aspect-[146/61]'/>

                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    </div>
  )
}

export default SimpleSwiper
