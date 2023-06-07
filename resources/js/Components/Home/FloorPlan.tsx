import React from 'react'
import InElementSeperator from './InElementSeperator'

import cashIcon from '../../../assets/cahIcon.svg'
import bedIcon from '../../../assets/bed_icon.svg'
import priceIcon from '../../../assets/price_tag_og.svg'
import sizeIcon from '../../../assets/size.svg'
import priceTag from '../../../assets/price_tag_og.svg'
import PrecantageSmall from './PrecantageSmall'
import FloorPlanSwiper from './FloorPlanSwiper'
import InfoShape from './InfoShape'
import BedButton from './BedButton'
import SliderButton from './SliderButton'
const FloorPlan = () => {
    return (
        <div className='w-[91.25rem] h-[38.125rem] rounded-[0.98125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF]'>
            <div className='w-[91.25rem] h-[3.75rem] rounded-[0.9375rem_0.9375rem_0rem_0rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex items-center'>
                <div className='flex items-center w-[87.96875rem]'>

                    <img src={cashIcon} alt="" className='w-[2.5925rem] h-[2.914375rem] ml-[0.86rem]' />
                    <div className='ml-[0.86rem] h-full'>
                        <InElementSeperator width='0.5rem'/>
                    </div>
                    <div className='text-[1.625rem] font-[600] ml-[0.375rem] text-grade'>
                        Payment Plan Creek Rise tower 2 west side
                    </div>
                    <div className='ml-auto flex mr-[2.4375rem]'>

                        <div className='ml-auto mr-[1.5625rem]'>
                            <SliderButton title='Price By' options={['AED','USD','EUR']}/>
                        </div>
                        <div className='ml-auto x'>
                            <SliderButton title='Size By' options={['SQ','USD','EUR']}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[87.96875rem] mx-auto flex mt-[1.625rem] '>
                <div className='w-[31.875rem] h-[31.8125rem] '>
                    <div className='w-[31.4375rem] h-[5.889375rem] flex flex-wrap gap-x-[1.25rem] gap-y-[1.875rem] items-center'>
                        <BedButton text='Studio'/>
                        <BedButton text='1 Bed'/>
                        <BedButton text='2 Beds'/>
                        <BedButton text='3 Beds'/>

                    </div>

                    <div className='mt-[2.423125rem] w-[31.875] h-[23.1875rem] rounded-[0.85rem] shadow-[inset_-0.2830525rem_-0.2830525rem_0.45288375rem_#FFFFFF,inset_0.2830525rem_0.2830525rem_0.396273125rem_#B6C3C5] flex flex-col justify-evenly items-center overflow-hidden'>
                        <InfoShape bluePillText='Studio' img={bedIcon} text='Number of Bedrooms' barHeight='2.8125rem' barWidth='24.5625rem' bluePillWidth='8.46125rem' circleWidth='5.625rem' mainHeight='5.625rem' mainWidth='28.33625rem' imgHeight='2.3125rem' imgWidth='3.125rem'/>
                        <InfoShape bluePillText='888' img={sizeIcon} text='Size by Sq.ft' barHeight='2.8125rem' barWidth='24.5625rem' bluePillWidth='8.46125rem' circleWidth='5.625rem' mainHeight='5.625rem' mainWidth='28.33625rem' imgHeight='2.835rem' imgWidth='3.125rem' imgMt='1.375rem' imgMl='1.25rem'/>
                        <InfoShape bluePillText='1,125,0000' img={priceIcon} text='Starting Price' barHeight='2.8125rem' barWidth='24.5625rem' bluePillWidth='8.46125rem' circleWidth='5.625rem' mainHeight='5.625rem' mainWidth='28.33625rem' imgHeight='3.125rem' imgWidth='3.130625rem' imgMt='1.25rem' imgMl='1.0625rem'/>
                    </div>
                </div>
                <div className='w-[53.90625rem] h-[31.8125rem] ml-[2.1875rem] flex justify-center'>

                    <FloorPlanSwiper/>
                </div>
            </div>
        </div>
    )
}

export default FloorPlan
