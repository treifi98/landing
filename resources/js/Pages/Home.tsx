import ProjectInfo from '../Components/ProjectInfo'
import { Link } from '@inertiajs/react'
import projlogo from '../../assets/projlogo.svg'
import React from 'react'
import ImgGallery from '@/Components/Home/ImgGallery'
import SimpleSwiper from '@/Components/Home/SimpleSwiper'
import LogoTextLR from '@/Components/Home/LogoTextLR'
import InquiryFormGreen from '@/Components/Home/InquiryFormGreen'
import LogoTextRL from '@/Components/LogoTextRL'
import MapContainer from '@/Components/Home/MapContainer'
import ActionCircle from '@/Components/Home/ActionCircle'

import phoneIcon from '../../assets/phoneIconFooter.svg'
import NewElement from '@/Components/NewElement'

const Home = () => {
  return (
    <div className='bg-[#E6EDED] !font-[nova]'>
         <div className={`w-full h-[6.25rem] relative z-10 font-[nova] bg-[#002D31] bg-no-repeat bg-cover bg-right-bottom flex justify-start   `}>
            {/* <div className={` w-full h-full `}> */}
            <div className='flex justify-between w-[93.0625rem] mx-auto'>

                <div className='mt-[0.7rem] w-[11.549375rem] h-[4.110625rem] flex items-center shadow-[-4.01628px_-4.01628px_6.68045px_-2.22682px_#007580,4.01628px_4.01628px_5.25218px_2.22682px_#002023] rounded-[0.486875rem] '>
                    <Link href='/' className='w-full h-full flex justify-center items-center'>

                        <img src={projlogo} alt="" className='w-[9.200625rem] h-[2.740625rem] object-contain object-center'/>
                    </Link>
                </div>
                {/* </div> */}
                <div className='text-[1.375rem] font-[400] text-[#fff] place-self-center '>
                    Downtown DubaI SOCIETY HOUSE COME HOME TO & BELONG SOMEWHERE EXCEPTIONAL
                </div>
                <div className='place-self-center flex gap-[1.875rem] '>

                    <div className='w-[3.4375rem] h-[3.4375rem] '>
                        <ActionCircle imgHeight='1.5625' imgWidth='1.5625' imgSrc={phoneIcon} />
                    </div>
                    <div className='w-[3.4375rem] h-[3.4375rem] '>
                        <ActionCircle imgHeight='1.5625' imgWidth='1.5625' imgSrc={phoneIcon} />
                    </div>
                    <div className='w-[3.4375rem] h-[3.4375rem] '>
                        <ActionCircle imgHeight='1.5625' imgWidth='1.5625' imgSrc={phoneIcon} />
                    </div>
                    <div className='w-[3.4375rem] h-[3.4375rem] '>
                        <ActionCircle imgHeight='1.5625' imgWidth='1.5625' imgSrc={phoneIcon} />
                    </div>
                </div>
            </div>
        </div>
        <div className='w-max mx-auto mt-[0rem]'>
            <ImgGallery/>
        </div>
        <div className='mt-[3.625rem] w-max mx-auto'>
            <ProjectInfo/>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto'>
            <NewElement/>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto'>
            <SimpleSwiper/>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto'>
            <LogoTextLR/>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto'>
            <InquiryFormGreen/>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto'>
            <LogoTextRL/>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto'>
            <SimpleSwiper/>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto'>
            <MapContainer/>

        </div>
    </div>
  )
}

export default Home
