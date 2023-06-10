import React from 'react'
import InElementSeperator from './InElementSeperator'
import InfoShape from './InfoShape'


import statusIcon from '../../../assets/statusIcon.svg'
import buildingIcon from '../../../assets/bulding.svg'
import mapIcon from '../../../assets/map_icon.svg'
import claender from '../../../assets/calenderIcon.svg'
import elevatorIcon from '../../../assets/elevatorIcon.svg'
import unitIcon from '../../../assets/unitIcon.svg'
import craneIcon from '../../../assets/craneIcon.svg'
import dubaiImage from '../../../assets/dubai.png'
const AboutProperty = () => {
  return (
    <div className='lg:w-[91.1875rem] lg:h-[38.125rem] w-[90vw] h-max bg-[#E6EDED] rounded-[0.9375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,0.3125rem_0.3125rem_0.4375rem_#B6C3C5]'>
        <div className='w-full lg:h-[3.75rem] h-max lg:flex items-center border-[#DCE3E3] border-[0.0625rem] bg-[#E6EDED] rounded-[0.9375rem_0.9375rem_0rem_0rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] pb-[0.5rem] lg:pb-0'>
            <div className='flex items-center'>

                <img src={buildingIcon} alt="" className='lg:w-[2.974375rem] lg:h-[2.551875rem] w-[1.974375rem] h-[2.974375rem]  ml-[0.57625rem]'/>
                <div className='ml-[0.6875rem] hidden lg:block'>
                    <InElementSeperator width='0.5rem' height='3.75rem'/>
                </div>
                <div className='text-grade lg:w-[26.3125rem] lg:text-[1.625rem] text-[1.0375rem] font-[600] lg:ml-[0.6875rem] ml-[0.3rem]'>
                    Society House Tower Information
                </div>
            </div>
            <div className='flex items-center'>

                <div className='ml-[1.125rem] hidden lg:block'>
                    <InElementSeperator width='0.5rem' height='3.75rem'/>
                </div>
                <img src={mapIcon} alt="" className='lg:w-[2.1875rem] lg:h-[2.154375rem] w-[1.774375rem] h-[1.774375rem] ml-[0.5625rem]'/>
                <div className='ml-[0.5625rem] hidden lg:block'>
                    <InElementSeperator width='0.5rem' height='3.75rem'/>
                </div>
                <div className='text-grade lg:text-[1.625rem] lg:ml-[0.5625rem] lg:w-[14.75rem] text-[1.0375rem] ml-[0.3rem]'>
                    Downtown Dubai
                </div>
            </div>
            <div className='lg:w-[13.590625rem] lg:h-[2.718125rem] w-[50%] h-max lg:flex justify-center items-center rounded-[6.25rem] bg-custom-gradient lg:ml-auto mx-auto lg:mr-[1.034375rem] text-[#fff] lg:text-[1.413125rem] text-[1rem] font-[600] shadow-[0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] mt-[0.2rem] lg:mt-0 hidden '>
                Learn More
            </div>
        </div>
        <div className='lg:w-[85.625rem] lg:h-[31.4375rem] w-[95%] h-max mt-[2.0625rem] mx-auto lg:flex gap-[8.743125rem]'>
            <div className='flex flex-col gap-[1.25rem] lg:w-[27.569375rem] w-full scale-[0.73] origin-left mt-[-6rem] lg:mt-0 lg:scale-100'>
                <InfoShape img={statusIcon} text='Status' bluePillText='Off Plan'/>
                <InfoShape img={claender} text='Year Built' bluePillText='2023' imgWidth='2.825rem' imgHeight='3.06rem' imgMt='1.093125rem' imgMl='1.224375rem'/>
                <InfoShape img={elevatorIcon} text='Stories' bluePillText='49' imgWidth='3.29375rem' imgHeight='3.08125rem' imgMt='1.075rem' imgMl='0.95625rem'/>
                <InfoShape img={unitIcon} text='Total Units' bluePillText='404' imgWidth='3.1875rem' imgHeight='2.988125rem' imgMt='1.10875rem' imgMl='1.009375rem'/>
                <InfoShape img={craneIcon} text='developed by' bluePillText='IGO' imgWidth='2.420625rem' imgHeight='3.060625rem' imgMt='1.09rem' imgMl='1.38125rem'/>
            </div>

            <div className='lg:h-[31.4375rem] lg:w-[49.3125rem] w-full aspect-square rounded-[0.87625rem] border-[#CAD4D5] border-[0.0625rem] bg-[#E6EDED] shadow-[inset_-0.350684375rem_-0.350684375rem_0.70136875rem_0.1753425rem_#FFFFFF,inset_0.350684375rem_0.350684375rem_0.70136875rem_#BABFBF] flex justify-center items-center mb-[0.5rem] lg:mb-0 mt-[-2.5rem] lg:mt-0'>
                <img src={dubaiImage} alt="" className='lg:w-[47rem] lg:h-[29.25rem] w-full aspect-square rounded-[0.87625rem]'/>
            </div>
            <div className='lg:w-[13.590625rem] lg:h-[2.718125rem] w-[50%] py-[0.2rem] mt-[0.9rem] h-max flex justify-center items-center rounded-[6.25rem] bg-custom-gradient lg:ml-auto mx-auto lg:mr-[1.034375rem] text-[#fff] lg:text-[1.413125rem] text-[1rem] font-[600] shadow-[0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)]  lg:mt-0 lg:hidden mb-[1rem]'>
                Learn More
            </div>

        </div>
    </div>
  )
}

export default AboutProperty
