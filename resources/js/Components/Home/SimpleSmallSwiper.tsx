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

const SimpleSmallSwiper = () => {
    const [swiper, setSwiper] = useState<any>();

  return (
    <div className='lg:w-[91.25rem] lg:h-[38.125rem] w-full h-max pt-[2rem] lg:py-0   relative overflow-hidden flex items-center lg:block'>
            {/* <div className='absolute md:h-[1.625rem]  md:w-[0.9375rem] h-[2.625rem] w-[0.5375rem]lg:left-[0.5rem]  left-[0.2rem] md:top-[calc(50%-0.46875rem)] top-[calc(50%-0.6125rem)] cursor-pointer' onClick={() => swiper.slideNext()}>
                <img src={simpleGreenArrowLeft} alt="" className='md:h-[1.625rem]  md:w-[0.9375rem] h-[1.225rem] w-[0.5375rem]' />
            </div>
            <div className='absolute md:h-[1.625rem]  md:w-[0.9375rem] h-[4.425rem] w-[0.5375rem] lg:right-[0.5rem] right-[0.2rem] md:top-[calc(50%-0.46875rem)] top-[calc(50%-0.6125rem)] cursor-pointer'onClick={() => swiper.slidePrev()}>
                <img src={simpleGreenArrowRight} alt="" className='md:h-[1.625rem]  md:w-[0.9375rem] h-[1.225rem] w-[0.5375rem]' />
            </div> */}
        <div className='mx-auto  lg:mt-[1.9375rem] lg:w-[87.125rem] w-[100%] '>
            <Swiper

            modules={[Autoplay, EffectCoverflow, Pagination]}
                // slidesPerView={1}
                // // slidesPerGroupSkip={3}
                // spaceBetween={20}
                breakpoints={{
                    1: {
                    slidesPerView: 2.6,
                    spaceBetween: 0,
                    },
                    1530: {
                    slidesPerView: 1.3,
                    spaceBetween: 0,
                    }

                }}

                onSwiper={(swiper) => setSwiper(swiper)}
                loop={true}
                className="simpleSmallSwiper"
            >
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] rounded-[0.2375rem] w-[70%] mx-auto lg:mx-0 aspect-square cursor-pointer '>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.2375rem] w-[100%] aspect-square'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] w-[70%] mx-auto lg:mx-0 aspect-square cursor-pointer '>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.2375rem] w-[100%] aspect-square'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] w-[70%] mx-auto lg:mx-0 aspect-square cursor-pointer '>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.2375rem] w-[100%] aspect-square'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] w-[70%] mx-auto lg:mx-0 aspect-square cursor-pointer '>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.2375rem] w-[100%] aspect-square'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] w-[70%] mx-auto lg:mx-0 aspect-square cursor-pointer '>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.2375rem] w-[100%] aspect-square'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] w-[70%] mx-auto lg:mx-0 aspect-square cursor-pointer '>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.2375rem] w-[100%] aspect-square'/>

                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    </div>
  )
}

export default SimpleSmallSwiper
