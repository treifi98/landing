import React from 'react'
import DynamicTextGreen from './DynamicTextTypeGreen'

import userIcon from '../../../assets/userIconWhite.svg'
import uaeFlag from '../../../assets/uaeFlag.svg'
import emaiIcon from '../../../assets/emailIconWhite.svg'
import img from '../../../assets/dubai.png'

import Radio from './Radio'
const InquiryFormGreen = () => {
  return (
    <div className='lg:w-[91.25rem] lg:h-[38.125rem] w-[90vw] h-max rounded-[0.9375rem] bg-[#002D31] flex justify-center items-center !font-[nova]'>
        <div className='lg:w-[83.783125rem] lg:h-[30.9375rem] w-[90%] h-max flex gap-[3.9375rem]'>
            <div className='flex justify-center items-center lg:w-[44.970625rem] lg:h-[30.4375rem] w-full h-max rounded-[0.971875rem] bg-[#002D31] border-[#19464B] border-[0.0625rem] shadow-[-0.274211875rem_-0.274211875rem_0.43873875rem_#04626B,0.274211875rem_0.274211875rem_0.43873875rem_#011618] my-[1rem] lg:my-0'>
                <div className='lg:w-[42.338125rem] lg:h-[27.366875rem] w-full h-max '>
                    <div className='flex lg:flex-row flex-col-reverse items-center lg:items-start lg:gap-[2.19375rem] w-full lg:h-[18.975625rem] h-max '>
                        <div className='flex h-full lg:w-[19.195rem] w-full flex-col lg:gap-[2.24875rem] gap-[1.5rem] items-center lg:items-start mt-[1rem] lg:mt-0'>
                            <div className='hidden lg:block'>

                                <DynamicTextGreen textSize='1rem' icon={userIcon} placeHolder='Your full name' imgWrapperWidth='3.290625rem' imgWrapperHeight='2.08375rem' imgWidth='1.11375rem' imgHeight='1.11375rem' textWidth='15.904375rem' textHeight='2.08375rem'/>
                            </div>
                            <div className='hidden lg:block'>

                                <DynamicTextGreen textSize='1rem' icon={emaiIcon} placeHolder='Your email address' imgWrapperWidth='3.290625rem' imgWrapperHeight='2.08375rem' imgWidth='1.26125rem' imgHeight='0.88625rem' textWidth='15.904375rem' textHeight='2.08375rem'/>
                            </div>
                            <div className='hidden lg:block'>
                                <DynamicTextGreen textSize='1rem' icon={uaeFlag} placeHolder='0501234567' imgWrapperWidth='3.290625rem' imgWrapperHeight='2.08375rem' imgWidth='1.480625rem' imgHeight='0.986875rem' textWidth='15.904375rem' textHeight='2.08375rem'/>

                            </div>
                            <div className='block md:hidden'>

                                <DynamicTextGreen textSize='1rem' icon={userIcon} placeHolder='Your full name' imgWrapperWidth='2.890625rem' imgWrapperHeight='2.08375rem' imgWidth='1.11375rem' imgHeight='1.11375rem' textWidth='10.904375rem' textHeight='2.08375rem' mainWidth='13.795rem'/>
                            </div>
                            <div className='block md:hidden'>

                                <DynamicTextGreen textSize='1rem' icon={emaiIcon} placeHolder='Your email address' imgWrapperWidth='2.890625rem' imgWrapperHeight='2.08375rem' imgWidth='1.26125rem' imgHeight='0.88625rem' textWidth='10.904375rem' textHeight='2.08375rem' mainWidth='13.795rem'/>
                            </div>
                            <div className='block md:hidden'>
                                <DynamicTextGreen textSize='1rem' icon={uaeFlag} placeHolder='0501234567' imgWrapperWidth='2.890625rem' imgWrapperHeight='2.08375rem' imgWidth='1.480625rem' imgHeight='0.986875rem' textWidth='10.904375rem' textHeight='2.08375rem' mainWidth='13.795rem'/>

                            </div>
                            <div className='hidden md:block lg:hidden'>

                                <DynamicTextGreen textSize='1rem' icon={userIcon} placeHolder='Your full name' imgWrapperWidth='5.290625rem' imgWrapperHeight='2.28375rem' imgWidth='1.11375rem' imgHeight='1.11375rem' textWidth='19.904375rem' textHeight='2.28375rem' mainWidth='25.195rem'/>
                            </div>
                            <div className='hidden md:block lg:hidden'>

                                <DynamicTextGreen textSize='1rem' icon={emaiIcon} placeHolder='Your email address' imgWrapperWidth='5.290625rem' imgWrapperHeight='2.28375rem' imgWidth='1.26125rem' imgHeight='0.88625rem' textWidth='19.904375rem' textHeight='2.28375rem' mainWidth='25.195rem'/>
                            </div>
                            <div className='hidden md:block lg:hidden'>
                                <DynamicTextGreen textSize='1rem' icon={uaeFlag} placeHolder='0501234567' imgWrapperWidth='5.290625rem' imgWrapperHeight='2.28375rem' imgWidth='1.480625rem' imgHeight='0.986875rem' textWidth='19.904375rem' textHeight='2.28375rem' mainWidth='25.195rem'/>

                            </div>
                            <textarea name="message" id="" className='text-[#fff] bg-[#002D31] rounded-[0.425rem] lg:w-[19.195rem] w-[13.795rem] md:w-[25.195rem] h-[6.58125rem] focus:border-transparent focus:ring-0 border-none shadow-[inset_-0.137583125rem_-0.137583125rem_0.228848125rem_-1.22052px_#007580,inset_0.137583125rem_0.137583125rem_0.179920625rem_#011618] text-[1rem]' placeholder='Your message .....' ></textarea>
                        </div>

                        <div className='lg:w-[20.84rem] w-[90%]  h-full rounded-[0.55rem] lg:shadow-[-0.274211875rem_-0.274211875rem_0.43873875rem_#04626B,0.274211875rem_0.274211875rem_0.43873875rem_#011618] flex justify-center items-center my-[1rem]'>
                            <div className='text-[#E6EDED] lg:text-[1.25rem] text-[0.78rem] md:text-[0.9rem] lg:w-[17.75rem] w-[95%] lg:leading-[2.09375rem] leading-[1.65rem] my-[0.5rem] lg:my-0'>

                                THERE'S ONLY ONE PLACE THAT CAN MATCH THE MOVEMENT, MAGIC AND MOMENTUM YOU BRING TO THE TABLE. ONLY ONE SPACE WHERE YOU AND THE SELECT FEW JUST LIKE YOU GATHER.
                            </div>
                        </div>
                    </div>

                    <div className='mt-[1.5625rem] lg:w-full w-[95%] mx-auto lg:mx-0'>
                        <div className='flex gap-[0.54875rem] '>
                            <Radio/>

                            <div className='text-[#7D8989] text-[0.8225rem] w-[88%] lg:w-max'>
                                I accept the terms of the User Agreement and Privacy Policy
                            </div>

                        </div>
                        <div className='lg:flex gap-[0.54875rem] mt-[0.755rem] hidden'>
                            <Radio/>

                            <div className='text-[#7D8989] text-[0.8225rem] w-[80%] lg:w-max'>
                                I agree to receive information about offers, deals and services from this website (optional)
                            </div>

                        </div>
                        <div className='w-[9.84375rem] h-[2.25rem] mb-[1rem] lg:mb-0 rounded-[2.74375rem] shadow-[-0.164526875rem_-0.164526875rem_0.219369375rem_#04626B,0.219369375rem_0.219369375rem_0.0137105859375rem_#011618] flex justify-center items-center mx-auto mt-[1.5625rem] hover:shadow-[inset_-0.164526875rem_-0.164526875rem_0.219369375rem_#04626B,inset_0.219369375rem_0.219369375rem_0.329054375rem_#011618] cursor-pointer'>
                            <div className='text-center font-[600] text-[1.125rem] text-[#7D8989]'>
                                Property inquire
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className='w-[34.75rem] h-[30.9375rem]  rounded-[1.075625rem] shadow-[-0.269021875rem_-0.269021875rem_0.430435rem_#04626B,0.269021875rem_0.269021875rem_0.430435rem_#011618] border-[#19464B] border-[0.0625rem] lg:flex justify-center items-center hidden'>
                    <div className='w-[32.5rem] h-[28.8125rem] border-[#19464B] border-[0.0625rem] shadow-[inset_-0.269021875rem_-0.269021875rem_0.430435rem_#04626B,inset_0.269021875rem_0.269021875rem_0.430435rem_#011618] flex justify-center items-center'>
                        <img src={img} alt="" className='w-[30.1875rem] h-[26.5625rem] rounded-[1.125rem]'/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default InquiryFormGreen
