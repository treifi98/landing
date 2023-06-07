import ProjectInfo from '../Components/ProjectInfo'
import { Link } from '@inertiajs/react'
import projlogo from '../../assets/projlogo.svg'
import React, { useState } from 'react'
import ImgGallery from '@/Components/Home/ImgGallery'
import SimpleSwiper from '@/Components/Home/SimpleSwiper'
import LogoTextLR from '@/Components/Home/LogoTextLR'
import InquiryFormGreen from '@/Components/Home/InquiryFormGreen'
import LogoTextRL from '@/Components/LogoTextRL'
import MapContainer from '@/Components/Home/MapContainer'
import ActionCircle from '@/Components/Home/ActionCircle'

import phoneIcon from '../../assets/phoneIconFooter.svg'
import amaenitiesIcon from '../../assets/amaenitiesIcon.svg'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img9 from '../../assets/img9.png'
import img10 from '../../assets/img10.png'
import img11 from '../../assets/img11.png'
import mapLogo from '../../assets/map.svg'
import burjkhalifa from '../../assets/burjkhalifa.svg'
import DubaiMall from '../../assets/DubaiMall.svg'
import airPlain from '../../assets/airPlain.svg'
import difc from '../../assets/difc.svg'
import NewElement from '@/Components/NewElement'
import InElementSeperator from '@/Components/Home/InElementSeperator'
import NewCardImage from '@/Components/Home/NewCardImage'
import Map from '@/Components/Home/Map'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { DistanceContainer } from '@/Components/Home/DistanceContainer'
import DistanceProgress from '@/Components/Home/DistanceProgress'
import FloorPlan from '@/Components/Home/FloorPlan'
import PaymentPlanNF4 from '@/Components/Home/PaymentPlanNF4'
import AboutProperty from '@/Components/Home/AboutProperty'
import InquiryFormWiht from '@/Components/Home/InquiryFormWhit'

const Home = () => {
    const [pointsx,setPointsx] = useState([
        {
            point: [55.27435493978062, 25.197221247530983],
            bg:'#002d31'

        },
        {
            point: [55.279738897145506, 25.197278595220233 ],
            bg:'#002d31'

        },
        {
            point: [55.3657800858067, 25.253378250856844 ],
            bg:'#002d31'

        },
        {
            point: [55.27761347874597, 25.21108549912775],
            bg:'#002d31'

        },
    ])
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
            <div className='w-[91.25rem] h-[40.8125em] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] rounded-[0.98125rem] overflow-hidden'>
                <div className='w-full h-[3.7rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex items-center  '>
                    <img src={amaenitiesIcon} alt="" className='w-[3.3125rem] h-[3.105625rem] ml-[0.75rem]'/>
                    <div className='ml-[0.5rem] h-full'>
                        <InElementSeperator width='0.5rem'/>
                    </div>
                    <div className='text-grade text-[2rem] font-[600] ml-[1.375rem]'>
                        Amenities
                    </div>
                    <div className='ml-[1.375rem] h-full'>
                        <InElementSeperator width='0.5rem'/>
                    </div>
                    <div className='text-grade1 ml-[3.1875rem] text-[1.625rem]'>
                        EVERY THING YOU COULD WANT, EXACTLY WHERE YOU WANT IT.
                    </div>
                </div>

                <div className='w-[85rem] flex flex-wrap justify-between mx-auto mt-[1.9375rem] gap-y-[1.8125rem]'>
                    <div className='cursor-pointer hover:scale-[1.1] transition-all h-[15.75rem] w-[14.5rem] flex flex-col items-center border-[#CAD4D5] border-[0.0625rem] rounded-[0.85rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]'>
                        <div className='w-[13.3125rem] h-[12rem] mt-[0.75rem]'>
                            <NewCardImage src={img3} rounded='0.3125'/>
                        </div>
                        <div className='text-grade text-[1.375rem] font-[600] mt-[0.5125rem]'>
                            25m lap pool
                        </div>
                    </div>
                    <div className='cursor-pointer hover:scale-[1.1] transition-all h-[15.75rem] w-[14.5rem] flex flex-col items-center border-[#CAD4D5] border-[0.0625rem] rounded-[0.85rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]'>
                        <div className='w-[13.3125rem] h-[12rem] mt-[0.75rem]'>
                            <NewCardImage src={img4} rounded='0.3125'/>
                        </div>
                        <div className='text-grade text-[1.375rem] font-[600] mt-[0.5125rem]'>
                            Private cinema
                        </div>
                    </div>
                    <div className='cursor-pointer hover:scale-[1.1] transition-all h-[15.75rem] w-[14.5rem] flex flex-col items-center border-[#CAD4D5] border-[0.0625rem] rounded-[0.85rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]'>
                        <div className='w-[13.3125rem] h-[12rem] mt-[0.75rem]'>
                            <NewCardImage src={img5} rounded='0.3125'/>
                        </div>
                        <div className='text-grade text-[1.375rem] font-[600] mt-[0.5125rem]'>
                            Fitness studio
                        </div>
                    </div>
                    <div className='cursor-pointer hover:scale-[1.1] transition-all h-[15.75rem] w-[14.5rem] flex flex-col items-center border-[#CAD4D5] border-[0.0625rem] rounded-[0.85rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]'>
                        <div className='w-[13.3125rem] h-[12rem] mt-[0.75rem]'>
                            <NewCardImage src={img6} rounded='0.3125'/>
                        </div>
                        <div className='text-grade text-[1.375rem] font-[600] mt-[0.5125rem]'>
                            Outdoor CrossFit ‘box’
                        </div>
                    </div>
                    <div className='cursor-pointer hover:scale-[1.1] transition-all h-[15.75rem] w-[14.5rem] flex flex-col items-center border-[#CAD4D5] border-[0.0625rem] rounded-[0.85rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]'>
                        <div className='w-[13.3125rem] h-[11.3125rem] mt-[0.5625rem]'>
                            <NewCardImage src={img7} rounded='0.3125'/>
                        </div>
                        <div className='text-grade text-[1.375rem] font-[600] mt-[0.1125rem] leading-[1.675rem] text-center'>
                            Serviced office space and meeting rooms
                        </div>
                    </div>
                    <div className='cursor-pointer hover:scale-[1.1] transition-all h-[15.75rem] w-[14.5rem] flex flex-col items-center border-[#CAD4D5] border-[0.0625rem] rounded-[0.85rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]'>
                        <div className='w-[13.3125rem] h-[11.0625rem] mt-[0.75rem]'>
                            <NewCardImage src={img9} rounded='0.3125'/>
                        </div>
                        <div className='text-grade text-[1.375rem] font-[600] mt-[0.7125rem]'>
                            Golf simulator
                        </div>
                    </div>
                    <div className='cursor-pointer hover:scale-[1.1] transition-all h-[15.75rem] w-[14.5rem] flex flex-col items-center border-[#CAD4D5] border-[0.0625rem] rounded-[0.85rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]'>
                        <div className='w-[13.3125rem] h-[11.0625rem] mt-[0.75rem]'>
                            <NewCardImage src={img10} rounded='0.3125'/>
                        </div>
                        <div className='text-grade text-[1.375rem] font-[600] mt-[0.7125rem]'>
                            Residents lounge
                        </div>
                    </div>
                    <div className='cursor-pointer hover:scale-[1.1] transition-all h-[15.75rem] w-[14.5rem] flex flex-col items-center border-[#CAD4D5] border-[0.0625rem] rounded-[0.85rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF]'>
                        <div className='w-[13.3125rem] h-[11.0625rem] mt-[0.75rem]'>
                            <NewCardImage src={img11} rounded='0.3125'/>
                        </div>
                        <div className='text-grade1 text-[1.375rem] font-[600] mt-[0.1125rem] text-center w-[11.125rem] leading-[1.675rem]'>
                            Outdoor horizon deck and bar area
                        </div>
                    </div>
                    <div className='h-[15.75rem] w-[32.125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF] rounded-[0.83475rem] flex flex-col items-center'>
                        <div className='w-[30.6rem] mt-[0.75rem] text-[1.1rem] leading-[2.0425rem] text-grade font-[400]'>
                            SOCITY HOUSE DOWNTOWN ENSURES THAT EVERY RESIDANT CAN ENJOY A WORLD-CLASS LIFESTYLE, WHERE CONVENIENCE AND INDULGENCE INTERTWINE. EMBRACE THE EXTRAORDINARY AND MAKE SOCIETY HOUSE YOUR HOME. REGISTER NOW TO EMBARK ON AN EXCEPTIONAL LIVING EXPERIENCE!
                        </div>
                        <div className='w-[13.590625rem] h-[2.718125rem] flex justify-center items-center bg-custom-gradient place-self-end rounded-[6.25rem] shadow-[0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] mt-[-1.5rem] mr-[3.596875rem] cursor-pointer hover:shadow-[inst_0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)]'>
                            <div className='text-[#fff] text-[1.413125rem] font-[600] '>
                                Register Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto'>
            <div className='w-[91.25rem] h-[38.125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] rounded-[0.981875rem] overflow-hidden '>
                <div className='w-full h-[3.75rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_7.30575rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex items-center'>
                    <img src={mapLogo} alt="" className='w-[2.4375rem] h-[2.4375rem] ml-[1rem]'/>
                    <div className='h-full ml-[1.125rem]'>
                        <InElementSeperator width='0.5rem'/>
                    </div>
                    <div className='ml-[0.1875rem] text-grade text-[1.875rem] font-[600] '>
                        Society House Location
                    </div>
                    <div className='w-[13.590625rem] h-[2.718125rem] flex justify-center items-center rounded-[6.25rem] bg-custom-gradient ml-auto mr-[2.096875rem] text-[#fff] text-[1.413125rem] font-[600] shadow-[0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)]'>
                        Learn More
                    </div>
                </div>
                <div className='flex w-[86.75rem] mx-auto h-full'>
                    <div className='h-[31.625rem] w-[38.6875rem] overflow-hidden mt-[1.5rem] rounded-[0.98125rem]'>
                        <Map
                            points={pointsx}
                            // changes={changes}
                            // rchanges={rchanges}
                            zoom={11.7}
                            isZoom={false}
                        />
                    </div>
                    <div className='h-fll ml-[1rem]'>
                        <InElementSeperator width='0.375rem'/>
                    </div>
                    <div className='w-[44.75rem] ml-auto mt-[2.1875rem]'>
                        <div>

                            <DistanceContainer distance={3.75} img={burjkhalifa} text='Burj Khalifa'/>
                        </div>
                        <div className='mt-[3.25rem]'>

                            <DistanceContainer distance={3.75} img={DubaiMall} imgWidth='3.4375rem' imgHeight='1.54625rem' text='The Dubai Mall'/>
                        </div>
                        <div className='mt-[3.25rem]'>

                            <DistanceContainer distance={3.75} img={airPlain} imgWidth='2.495625rem' imgHeight='2.663125rem' text='DXB Airport'/>
                        </div>
                        <div className='mt-[3.25rem]'>

                            <DistanceContainer distance={3.75} img={difc} imgWidth='1.9375rem' imgHeight='2.25rem' text='DIFC'/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto'>
            <MapContainer/>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto'>
            <FloorPlan/>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto mb-[1rem]'>
            <PaymentPlanNF4/>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto mb-[1rem]'>
            <AboutProperty/>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto mb-[1rem]'>
            <InquiryFormWiht/>

        </div>
    </div>
  )
}

export default Home
