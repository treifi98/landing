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
import SliderPagination from './SliderPagination';

const SimpleSwiper = () => {
    const [swiper, setSwiper] = useState<any>();
    const [activeIndex, setActiveIndex] = useState(0)


    const outerNavigation = (callBack) => {
        useEffect(() => callBack(activeIndex),[activeIndex])
    }
    const innerNavigation = (slide) => {
        // alert('f')
        // swiper.slideTo(slide)
        const x = slide - swiper.activeIndex
        console.log (x)
        if(x > 0){
            const y = (((x)%5)+1)-1
            for(let i = 0 ; i<y ;i++){
                swiper.slideNext()
            }
        }
        else{
            const y = (((Math.abs(x))%5)+1)-1
            for(let i = 0 ; i<y ;i++){
                swiper.slidePrev()
            }
        }
        // setSwiper(slide)
        setActiveIndex(swiper.activeIndex)

    }
  return (
    <div className='lg:w-[91.25rem] lg:h-[38.125rem] w-[95vw] h-max py-[0rem] md:py-[0rem] lg:py-0 border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.4375rem_#B6C3C5] rounded-[0.9375rem] relative overflow-hidden flex items-center lg:block'>
            <div className='absolute md:h-[1.625rem]  md:w-[0.9375rem] h-[2.625rem] w-[0.5375rem]lg:left-[0.5rem]  left-[0.2rem] md:top-[calc(50%-0.46875rem)] top-[calc(50%-0.6125rem)] cursor-pointer hidden lg:block' onClick={() => swiper.slideNext()}>
                <img src={simpleGreenArrowLeft} alt="" className='md:h-[1.625rem]  md:w-[0.9375rem] h-[1.225rem] w-[0.5375rem]' />
            </div>
            <div className='absolute md:h-[1.625rem]  md:w-[0.9375rem] h-[4.425rem] w-[0.5375rem] lg:right-[0.5rem] right-[0.2rem] md:top-[calc(50%-0.46875rem)] top-[calc(50%-0.6125rem)] cursor-pointer hidden lg:block'onClick={() => swiper.slidePrev()}>
                <img src={simpleGreenArrowRight} alt="" className='md:h-[1.625rem]  md:w-[0.9375rem] h-[1.225rem] w-[0.5375rem]' />
            </div>
        <div className='mx-auto  lg:mt-[1.9375rem] lg:w-[87.125rem] w-[100%] rounded-[0.9375rem]'>
            <Swiper

            modules={[Autoplay, EffectCoverflow, Pagination]}
                // slidesPerView={1}
                // // slidesPerGroupSkip={3}
                // spaceBetween={20}
                breakpoints={{
                    1: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    },
                    1530: {
                    slidesPerView: 1.3,
                    spaceBetween: 0,
                    }

                }}

                onSwiper={(swiper) => setSwiper(swiper)}
                rewind={true}
                onSlideChangeTransitionEnd={(swiper) => {
                    // alert(swiper.activeIndex)

                    setActiveIndex(swiper.activeIndex)
                    // setSwiper(swiper)

                }}
                className="simpleSwiper"
            >
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] rounded-[0.9375rem] w-full mx-auto lg:mx-0 aspect-[1/1.3]'>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.9375rem] w-[100%] aspect-[1/1.3] scale-[0.95]'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] w-full mx-auto lg:mx-0 aspect-[1/1.3]'>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.9375rem] w-[100%] aspect-[1/1.3] scale-[0.95]'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] w-full mx-auto lg:mx-0 aspect-[1/1.3]'>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.9375rem] w-[100%] aspect-[1/1.3] scale-[0.95]'/>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:w-[64.1875rem] lg:h-[34.375rem] w-full mx-auto lg:mx-0 aspect-[1/1.3]'>
                        <img src={beatchFront} alt="" className='lg:w-[64.1875rem] lg:h-[34.375rem] object-cover object-center  rounded-[0.9375rem] w-[100%] aspect-[1/1.3] scale-[0.95]'/>

                    </div>
                </SwiperSlide>


            </Swiper>
            <div className='absolute bottom-[1.81875rem] left-[calc(50%-2.46625rem)] z-[999999] scale-[0.85] block lg:hidden'>
                <SliderPagination numberOfItems={4} outerNavigation={outerNavigation} innerNavigation={innerNavigation}/>

            </div>
        </div>
    </div>
  )
}

export default SimpleSwiper
