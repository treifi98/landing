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
const PaymentPlanNF4 = () => {
    return (
        <div className='lg:w-[91.25rem] lg:pb-[1.5rem] lg:min-h-[38.125rem] h-max rounded-[0.98125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] w-[90vw]'>
            <div className='lg:w-[91.25rem] lg:h-[3.75rem] h-max rounded-[0.9375rem_0.9375rem_0rem_0rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] lg:flex items-center py-[1rem] lg:py-0'>
                <div className='flex items-center'>
                    <img src={cashIcon} alt="" className='w-[2.5925rem] h-[2.914375rem] ml-[0.86rem]' />

                    <div className='lg:ml-[0.86rem] h-full'>
                        <InElementSeperator width='0.5rem'/>
                    </div>
                    <div className='lg:text-[1.625rem] font-[600] ml-[0.375rem] text-[1.0375rem] text-grade'>
                        PAYMENT PLAN OF SOCIETY HOUSE
                    </div>
                </div>
                <div className='lg:ml-[2.5625rem] lg:w-[16.8125rem] lg:h-[2.6875rem] mt-[0.4rem] lg:mt-0 w-[70%] h-max flex justify-center items-center rounded-[6.25rem] bg-custom-gradient text-[#fff] lg:text-[1.413125rem] text-[1.0375rem] mx-auto lg:mx-0 font-[600] shadow-[0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] cursor-pointer hover:shadow-[inset_0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)]'>
                    Downlead  Payment Plan
                </div>
                <div className='ml-auto flex mr-[2.4375rem]'>

                    <div className='ml-auto mr-[5.5rem] hidden lg:block'>
                        <SliderButton title='Price By' options={['AED','USD','EUR']}/>
                    </div>

                </div>

            </div>
            <div className='lg:w-[87.71875rem] mx-auto mt-[3.3125rem]  w-[95%]'>

                <div className='mt-[0.1rem] w-full flex flex-col lg:flex-row h-full items-center'>
                    <div className='flex flex-col justify-center items-center w-full h-full'>
                        <div className='lg:w-[31.4375rem] lg:h-[4.951875rem] w-full h-max grid grid-cols-3 lg:flex flex-wrap gap-x-[1.25rem] gap-y-[0.9375rem]'>
                            <div className='scale-[0.85] origin-left lg:scale-100'>
                                <BedButton text='Studio'/>

                            </div>
                            <div className='scale-[0.85] origin-left lg:scale-100'>

                                <BedButton text='1 Bed'/>
                            </div>
                            <div className='scale-[0.85] origin-left lg:scale-100'>

                                <BedButton text='2 Beds'/>
                            </div>
                            <div className='scale-[0.85] origin-left lg:scale-100'>

                                <BedButton text='3 Beds'/>
                            </div>

                        </div>

                        <div className=' lg:w-[31.4375rem] lg:h-[25.1875rem]  w-full h-max rounded-[0.85rem] shadow-[inset_-0.2830525rem_-0.2830525rem_0.45288375rem_#FFFFFF,inset_0.2830525rem_0.2830525rem_0.396273125rem_#B6C3C5] overflow-hidden mt-[2rem] py-[1rem]'>
                            <div className='lg:mt-[1.315rem] mx-auto lg:w-[28.75rem] lg:h-[4.58125rem] w-[90%] h-max rounded-[0.45rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.50214625rem_-0.50214625rem_0.5725375rem_#FFFFFF,0.381691875rem_0.381691875rem_0.5725375rem_#B6C3C5] overflow-hidden lg:flex'>
                                <div className='flex items-center'>

                                    <div className='lg:w-[4.70875rem] lg:h-auto w-[35%] h-[45%] shadow-[-4.53929px_-4.53929px_7.26286px_#FFFFFF,4.53929px_4.53929px_6.355px_#B6C3C5] flex justify-center items-center'>
                                        <img src={bedIcon} alt="" className='lg:w-[3.125rem] lg:h-[2.25rem] w-[50%] aspect-square' />
                                    </div>
                                    <div className='w-[10.045625rem] flex flex-col justify-evenly items-center'>
                                        <div className='text-grade font-[600] lg:text-[1.01875rem] text-[0.91875rem]'>
                                            Bedrooms
                                        </div>
                                        <div>
                                            <InElementSeperator height='0.22625rem' width='10.07375rem' shadow='inset -0.114135625rem -0.114135625rem 0.182616875rem #FFFFFF, inset 0.114135625rem 0.114135625rem 0.15979rem #B6C3C5'/>
                                        </div>
                                        <div className='text-grade font-[600] lg:text-[1.01875rem] text-[0.91875rem]'>
                                            One Bedroom
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <InElementSeperator height='0.42625rem' width='100%' shadow='inset -0.114135625rem -0.114135625rem 0.182616875rem #FFFFFF, inset 0.114135625rem 0.114135625rem 0.15979rem #B6C3C5'/>
                                </div>
                                <div className='flex items-center'>

                                    <div className='lg:w-[4.70875rem] lg:h-full w-[35%] h-[45%] shadow-[-4.53929px_-4.53929px_7.26286px_#FFFFFF,4.53929px_4.53929px_6.355px_#B6C3C5] flex justify-center items-center'>
                                        <img src={priceIcon} alt="" className='lg:w-[2.9375rem] lg:h-[2.875rem] w-[50%] aspect-square' />
                                    </div>
                                    <div className='w-[10.045625rem] flex flex-col justify-evenly items-center'>
                                        <div className='text-grade font-[600] lg:text-[1.01875rem] text-[0.91875rem]'>
                                            Total Price AED
                                        </div>
                                        <div>
                                            <InElementSeperator height='0.22625rem' width='10.07375rem' shadow='inset -0.114135625rem -0.114135625rem 0.182616875rem #FFFFFF, inset 0.114135625rem 0.114135625rem 0.15979rem #B6C3C5'/>
                                        </div>
                                        <div className='text-grade font-[600] lg:text-[1.01875rem] text-[0.91875rem]'>
                                            5,516,821.93
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='lg:w-[29.005rem] lg:h-[16.4375rem] w-[90%] h-max mt-[1.34125rem] mx-auto rounded-[0.54375rem] overflow-hidden flex flex-wrap shadow-[-0.47717375rem_-0.47717375rem_0.544065rem_#FFFFFF,0.36271rem_0.36271rem_0.544065rem_#B6C3C5] relative justify-center'>
                                <div className='h-full w-[50%] lg:w-[7.3125rem] bg-[#E6EDED]'>
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
                                <div className='h-full w-[50%] lg:w-[7.3125rem] bg-[#CED7D8]'>
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
                                <div className='my-[0.2rem]  lg:hidden'>
                                    <InElementSeperator height='0.400625rem' width='28.990625rem' shadow='inset -4.31354px -4.31354px 6.90167px #FFFFFF, inset 4.31354px 4.31354px 6.03896px #B6C3C5' />
                                </div>
                                <div className='h-full w-[50%] lg:w-[7.3125rem] bg-[#9DAFB2]'>
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
                                <div className='h-full w-[50%] lg:w-[7.3125rem] bg-[#547378]'>
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
                                <div className='absolute top-[12.7375rem] left-0 w-[29.990625rem] hidden lg:block'>
                                    <InElementSeperator height='0.400625rem' width='28.990625rem' shadow='inset -4.31354px -4.31354px 6.90167px #FFFFFF, inset 4.31354px 4.31354px 6.03896px #B6C3C5' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[53.1255rem] w-full h-max lg:ml-[2.0625rem] flex flex-wrap justify-between gap-y-[2.0625rem] mt-[1rem] lg:mt-0'>

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
                        <div className='lg:w-[29.375rem] lg:h-[11.5625rem] w-full h-max border-[#DCE3E3] border-[0.0625rem] shadow-[-0.525168125rem_-0.525168125rem_0.598786875rem_#FFFFFF,0.39919125rem_0.39919125rem_0.598786875rem_#B6C3C5] rounded-[0.220625rem] flex flex-col items-center mb-[0.7rem] lg:mb-0'>
                            <div className='lg:text-[1.25rem] text-[0.9rem] lg:leading-[2.09375rem] leading-[1.9rem] text-grade lg:w-[26.125rem] w-[95%] mt-[0.5rem]'>
                                Discover Convenience and Flexibility: Easy Payment Plans with Post-Handover Options at Society House Downtown
                            </div>
                            <div className='lg:w-[13.590625rem] lg:h-[2.718125rem] w-[60%] h-max flex justify-center items-center rounded-[6.25rem] bg-custom-gradient text-[#fff] lg:text-[1.413125rem] text-[1rem] font-[600] py-[0.2rem] lg:py-0 shadow-[0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] mt-[0.625rem] cursor-pointer hover:shadow-[inset_0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] mb-[0.5rem] lg:mb-0'>
                                Register Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPlanNF4
