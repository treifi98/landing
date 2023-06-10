import React from 'react'
import InElementSeperator from './InElementSeperator'

import cashIcon from '../../../assets/cahIcon.svg'
import bedIcon from '../../../assets/bed_icon.svg'
import priceIcon from '../../../assets/price_tag_og.svg'
import PrecantageSmall from './PrecantageSmall'
import FloorPlanSwiper from './FloorPlanSwiper'
import PrecantageCard from './PrecantageCard'
import BedButton from './BedButton'
import SliderButton from './SliderButton'
const PaymentResponsive = () => {
    return (
        <div className='w-[91.25rem] pb-[1.5rem] min-h-[38.125rem] rounded-[0.98125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF]'>
            <div className='w-[91.25rem] h-[3.75rem] rounded-[0.9375rem_0.9375rem_0rem_0rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex items-center'>
                <img src={cashIcon} alt="" className='w-[2.5925rem] h-[2.914375rem] ml-[0.86rem]' />
                <div className='ml-[0.86rem] h-full'>
                    <InElementSeperator width='0.5rem'/>
                </div>
                <div className='text-[1.625rem] font-[600] ml-[0.375rem] text-grade'>
                    PAYMENT PLAN OF SOCIETY HOUSE
                </div>
                <div className='ml-[2.5625rem] w-[16.8125rem] h-[2.6875rem] flex justify-center items-center rounded-[6.25rem] bg-custom-gradient text-[#fff] text-[1.413125rem] font-[600] shadow-[0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] cursor-pointer hover:shadow-[inset_0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)]'>
                    Downlead  Payment Plan
                </div>
                <div className='ml-auto flex mr-[2.4375rem]'>

                    <div className='ml-auto mr-[5.5rem]'>
                        <SliderButton title='Price By' options={['AED','USD','EUR']}/>
                    </div>

                </div>

            </div>
            <div className='w-[87.71875rem] mx-auto mt-[3.3125rem] '>

                <div className='mt-[0.1rem] w-full flex h-full items-center'>
                    <div className='flex flex-col justify-center items-center h-full'>
                        <div className='w-[31.4375rem] h-[4.951875rem] flex flex-wrap gap-x-[1.25rem] gap-y-[0.9375rem]'>
                            <BedButton text='Studio'/>
                            <BedButton text='1 Bed'/>
                            <BedButton text='2 Beds'/>
                            <BedButton text='3 Beds'/>

                        </div>

                        <div className=' w-[31.4375rem] h-[25.1875rem] rounded-[0.85rem] shadow-[inset_-0.2830525rem_-0.2830525rem_0.45288375rem_#FFFFFF,inset_0.2830525rem_0.2830525rem_0.396273125rem_#B6C3C5] overflow-hidden mt-[2rem]'>
                            <div className='mt-[1.315rem] mx-auto w-[28.75rem] h-[4.58125rem] rounded-[0.45rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.50214625rem_-0.50214625rem_0.5725375rem_#FFFFFF,0.381691875rem_0.381691875rem_0.5725375rem_#B6C3C5] overflow-hidden flex'>
                                <div className='w-[4.70875rem] h-full shadow-[-4.53929px_-4.53929px_7.26286px_#FFFFFF,4.53929px_4.53929px_6.355px_#B6C3C5] flex justify-center items-center'>
                                    <img src={bedIcon} alt="" className='w-[3.125rem] h-[2.25rem]' />
                                </div>
                                <div className='w-[10.045625rem] flex flex-col justify-evenly items-center'>
                                    <div className='text-grade font-[600] text-[1.01875rem]'>
                                        Bedrooms
                                    </div>
                                    <div>
                                        <InElementSeperator height='0.22625rem' width='10.07375rem' shadow='inset -0.114135625rem -0.114135625rem 0.182616875rem #FFFFFF, inset 0.114135625rem 0.114135625rem 0.15979rem #B6C3C5'/>
                                    </div>
                                    <div className='text-grade font-[600] text-[1.01875rem]'>
                                        One Bedroom
                                    </div>

                                </div>
                                <div className='w-[4.70875rem] h-full shadow-[-4.53929px_-4.53929px_7.26286px_#FFFFFF,4.53929px_4.53929px_6.355px_#B6C3C5] flex justify-center items-center'>
                                    <img src={priceIcon} alt="" className='w-[2.9375rem] h-[2.875rem]' />
                                </div>
                                <div className='w-[10.045625rem] flex flex-col justify-evenly items-center'>
                                    <div className='text-grade font-[600] text-[1.01875rem]'>
                                        Total Price AED
                                    </div>
                                    <div>
                                        <InElementSeperator height='0.22625rem' width='10.07375rem' shadow='inset -0.114135625rem -0.114135625rem 0.182616875rem #FFFFFF, inset 0.114135625rem 0.114135625rem 0.15979rem #B6C3C5'/>
                                    </div>
                                    <div className='text-grade font-[600] text-[1.01875rem]'>
                                        5,516,821.93
                                    </div>

                                </div>
                            </div>
                            <div className='w-[29.005rem] h-[16.4375rem] mt-[1.34125rem] mx-auto rounded-[0.54375rem] overflow-hidden flex shadow-[-0.47717375rem_-0.47717375rem_0.544065rem_#FFFFFF,0.36271rem_0.36271rem_0.544065rem_#B6C3C5] relative'>
                                <div className='h-full w-[7.3125rem] bg-[#E6EDED]'>
                                    <div className='mt-[2.021875rem] mx-auto w-min'>
                                        <PrecantageSmall prcantage={10}key={1}/>
                                    </div>
                                    <div className='text-grade text-[1.08875rem] font-[600] w-min mx-auto text-center mt-[1.241875rem]'>
                                        Down Payment
                                    </div>
                                    <div className='text-grade font-[600] mt-[2rem] text-[1.03rem] w-min mx-auto mb-[0.97rem]'>
                                        516,821.93
                                    </div>

                                </div>
                                <div className='h-full w-[7.3125rem] bg-[#CED7D8]'>
                                    <div className='mt-[2.021875rem] mx-auto w-min'>
                                        <PrecantageSmall prcantage={80}key={12} bg='#CED7D8'/>
                                    </div>
                                    <div className='text-grade text-[1.08875rem] font-[600] w-min mx-auto text-center mt-[1.241875rem]'>
                                        During constriction
                                    </div>
                                    <div className='text-grade font-[600] mt-[2rem] text-[1.03rem] w-min mx-auto mb-[0.97rem]'>
                                        516,821.93
                                    </div>

                                </div>
                                <div className='h-full w-[7.3125rem] bg-[#9DAFB2]'>
                                    <div className='mt-[2.021875rem] mx-auto w-min'>
                                        <PrecantageSmall prcantage={30}key={13} bg='#9DAFB2'/>
                                    </div>
                                    <div className='text-grade text-[1.08875rem] font-[600] w-min mx-auto text-center mt-[1.241875rem]'>
                                        Handover In Q2021
                                    </div>
                                    <div className='text-grade font-[600] mt-[2rem] text-[1.03rem] w-min mx-auto mb-[0.97rem]'>
                                        516,821.93
                                    </div>

                                </div>
                                <div className='h-full w-[7.3125rem] bg-[#547378]'>
                                    <div className='mt-[2.021875rem] mx-auto w-min'>
                                        <PrecantageSmall prcantage={30} bg='#547378'/>
                                    </div>
                                    <div className='text-grade text-[1.08875rem] font-[600] w-min mx-auto text-center mt-[1.241875rem]'>
                                        Post handover
                                    </div>
                                    <div className='text-grade font-[600] mt-[2rem] text-[1.03rem] w-min mx-auto mb-[0.97rem]'>
                                        516,821.93
                                    </div>

                                </div>
                                <div className='absolute top-[12.7375rem] left-0 w-[29.990625rem]'>
                                    <InElementSeperator height='0.400625rem' width='28.990625rem' shadow='inset -4.31354px -4.31354px 6.90167px #FFFFFF, inset 4.31354px 4.31354px 6.03896px #B6C3C5' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[53.1255rem] h-max ml-[2.0625rem] flex flex-wrap justify-between gap-y-[2.0625rem] '>

                        {/* <FloorPlanSwiper/> */}
                        <PrecantageCard/>
                        <PrecantageCard/>
                        <PrecantageCard/>
                        <PrecantageCard/>
                        <PrecantageCard/>
                        <PrecantageCard/>
                        <PrecantageCard/>
                        <PrecantageCard/>
                        <PrecantageCard/>
                        <PrecantageCard/>
                        <PrecantageCard/>
                        <PrecantageCard/>
                        <div className='w-[29.375rem] h-[11.5625rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.525168125rem_-0.525168125rem_0.598786875rem_#FFFFFF,0.39919125rem_0.39919125rem_0.598786875rem_#B6C3C5] rounded-[0.220625rem] flex flex-col items-center'>
                            <div className='text-[1.25rem] leading-[2.09375rem] text-grade w-[26.125rem] mt-[0.5rem]'>
                                Discover Convenience and Flexibility: Easy Payment Plans with Post-Handover Options at Society House Downtown
                            </div>
                            <div className='w-[13.590625rem] h-[2.718125rem] flex justify-center items-center rounded-[6.25rem] bg-custom-gradient text-[#fff] text-[1.413125rem] font-[600] shadow-[0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] mt-[0.625rem] cursor-pointer hover:shadow-[inset_0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)]'>
                                Register Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentResponsive
