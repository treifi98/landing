import React from 'react'
import DynamicTextWhit from './DynamicTextWhit'

import userIcon from '../../../assets/user_icon.svg'
import uaeFlag from '../../../assets/uaeFlag.svg'
import emaiIcon from '../../../assets/emailIcon.svg'
import img from '../../../assets/dubai.png'

import RadioWhit from './RadioWhit'
const InquiryFormWiht = () => {
  return (
    <div className='lg:w-[91.25rem] lg:h-[38.125rem] w-[80vw] h-max  rounded-[0.9375rem] bg-[#E6EDED] flex justify-center items-center shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] border-[#CAD4D5] border-[0.0625rem] !font-[nova]'>
        <div className='lg:w-[83.783125rem] lg:h-[30.9375rem] w-[90%] h-max flex gap-[3.9375rem]'>
            <div className='flex justify-center items-center lg:w-[44.970625rem] lg:h-[30.4375rem] w-full h-max rounded-[0.971875rem] bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF] my-[1rem] lg:my-0'>
            <div className='lg:w-[42.338125rem] lg:h-[27.366875rem] w-full h-max '>
                    <div className='flex lg:flex-row flex-col items-center lg:items-start gap-[2.19375rem] w-full lg:h-[18.975625rem] h-max '>
                        <div className='flex h-full lg:w-[19.195rem] w-full flex-col lg:gap-[2.24875rem] gap-[1.5rem] items-center lg:items-start mt-[1rem] lg:mt-0'>
                            <div className='hidden lg:block'>

                                <DynamicTextWhit textSize='1rem' icon={userIcon} placeHolder='Your full name' imgWrapperWidth='3.290625rem' imgWrapperHeight='2.08375rem' imgWidth='1.11375rem' imgHeight='1.11375rem' textWidth='15.904375rem' textHeight='2.08375rem'/>
                            </div>
                            <div className='hidden lg:block'>

                                <DynamicTextWhit textSize='1rem' icon={emaiIcon} placeHolder='Your email address' imgWrapperWidth='3.290625rem' imgWrapperHeight='2.08375rem' imgWidth='1.26125rem' imgHeight='0.88625rem' textWidth='15.904375rem' textHeight='2.08375rem'/>
                            </div>
                            <div className='hidden lg:block'>
                                <DynamicTextWhit textSize='1rem' icon={uaeFlag} placeHolder='0501234567' imgWrapperWidth='3.290625rem' imgWrapperHeight='2.08375rem' imgWidth='1.480625rem' imgHeight='0.986875rem' textWidth='15.904375rem' textHeight='2.08375rem'/>

                            </div>
                            <div className='block md:hidden'>

                                <DynamicTextWhit textSize='1rem' icon={userIcon} placeHolder='Your full name' imgWrapperWidth='2.890625rem' imgWrapperHeight='2.08375rem' imgWidth='1.11375rem' imgHeight='1.11375rem' textWidth='10.904375rem' textHeight='2.08375rem' mainWidth='13.795rem'/>
                            </div>
                            <div className='block md:hidden'>

                                <DynamicTextWhit textSize='1rem' icon={emaiIcon} placeHolder='Your email address' imgWrapperWidth='2.890625rem' imgWrapperHeight='2.08375rem' imgWidth='1.26125rem' imgHeight='0.88625rem' textWidth='10.904375rem' textHeight='2.08375rem' mainWidth='13.795rem'/>
                            </div>
                            <div className='block md:hidden'>
                                <DynamicTextWhit textSize='1rem' icon={uaeFlag} placeHolder='0501234567' imgWrapperWidth='2.890625rem' imgWrapperHeight='2.08375rem' imgWidth='1.480625rem' imgHeight='0.986875rem' textWidth='10.904375rem' textHeight='2.08375rem' mainWidth='13.795rem'/>

                            </div>
                            <div className='hidden md:block lg:hidden'>

                                <DynamicTextWhit textSize='1rem' icon={userIcon} placeHolder='Your full name' imgWrapperWidth='5.290625rem' imgWrapperHeight='2.28375rem' imgWidth='1.11375rem' imgHeight='1.11375rem' textWidth='19.904375rem' textHeight='2.28375rem' mainWidth='25.195rem'/>
                            </div>
                            <div className='hidden md:block lg:hidden'>

                                <DynamicTextWhit textSize='1rem' icon={emaiIcon} placeHolder='Your email address' imgWrapperWidth='5.290625rem' imgWrapperHeight='2.28375rem' imgWidth='1.26125rem' imgHeight='0.88625rem' textWidth='19.904375rem' textHeight='2.28375rem' mainWidth='25.195rem'/>
                            </div>
                            <div className='hidden md:block lg:hidden'>
                                <DynamicTextWhit textSize='1rem' icon={uaeFlag} placeHolder='0501234567' imgWrapperWidth='5.290625rem' imgWrapperHeight='2.28375rem' imgWidth='1.480625rem' imgHeight='0.986875rem' textWidth='19.904375rem' textHeight='2.28375rem' mainWidth='25.195rem'/>

                            </div>
                            <textarea name="message" id="" className='bg-[#E6EDED] rounded-[0.425rem] lg:w-[19.195rem] w-[13.795rem] md:w-[25.195rem] h-[6.58125rem] focus:border-transparent focus:ring-0 border-none shadow-[inset_-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,inset_0.33392625rem_0.33392625rem_0.66785rem_#BABFBF] text-[1rem]' placeholder='Your message .....'></textarea>
                        </div>

                        <div className='g:w-[20.84rem] w-[90%] h-full  rounded-[0.55rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF] flex justify-center items-center'>
                            <div className='lg:text-[1.25rem] text-[0.9rem] lg:w-[17.75rem] w-[95%] lg:leading-[2.09375rem] leading-[1.65rem] my-[0.5rem] lg:my-0'>
                                Don't miss out the opportunity to secure your place in this iconic Tower. Register now to be part of an exclusive circle of discerning individuals who recognize the true value of luxury living in the heart of Dubai.
                            </div>
                        </div>
                    </div>

                    <div className='mt-[1.5625rem] lg:w-full w-[95%] mx-auto lg:mx-0'>
                        <div className='flex gap-[0.54875rem]'>
                            <RadioWhit/>

                            <div className='text-[#7D8989] text-[0.8225rem] w-[88%] lg:w-max'>
                                I accept the terms of the User Agreement and Privacy Policy
                            </div>

                        </div>
                        <div className='flex gap-[0.54875rem] mt-[0.755rem]'>
                            <RadioWhit/>

                            <div className='text-[#7D8989] text-[0.8225rem] w-[80%] lg:w-max'>
                                I agree to receive information about offers, deals and services from this website (optional)
                            </div>

                        </div>
                        <div className='w-[9.84375rem] h-[2.25rem]  mb-[1rem] lg:mb-0 rounded-[2.74375rem] shadow-[-0.254123125rem_-0.254123125rem_0.406596875rem_#FFFFFF,0.254123125rem_0.254123125rem_0.3557725rem_#B6C3C5] flex justify-center items-center mx-auto mt-[1.5625rem] hover:shadow-[inset_-0.254123125rem_-0.254123125rem_0.406596875rem_#FFFFFF,inset_0.254123125rem_0.254123125rem_0.3557725rem_#B6C3C5] cursor-pointer border-[#DCE3E3] border-[0.0625rem]'>
                            <div className='text-center font-[600] text-[1.125rem] text-grade'>
                                Property inquire
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                <div className='w-[34.75rem] h-[30.9375rem] rounded-[1.075625rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF] border-[#CAD4D5] border-[0.0625rem] lg:flex justify-center items-center hidden'>
                    <div className='w-[32.5rem] h-[28.8125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,inset_0.33392625rem_0.33392625rem_0.66785rem_#BABFBF] rounded-[0.8375rem] flex justify-center items-center'>
                        <img src={img} alt="" className='w-[30.1875rem] h-[26.5625rem] rounded-[1.125rem]'/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default InquiryFormWiht
