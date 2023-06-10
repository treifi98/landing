import ProjectInfo from '../Components/ProjectInfo'
import { Link } from '@inertiajs/react'
import projlogo from '../../assets/sLogo.svg'
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
import attraction from '../../assets/pin.png'

import difc from '../../assets/difc.svg'
import bjk from '../../assets/bjk.png'
import dbml from '../../assets/mall.png'
import DIFC from '../../assets/DIFC.png'
import airplain from '../../assets/airport.png'
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
import MapWIcons from '@/Components/Home/MapWIcons'
import PaymentResponsive from '@/Components/Home/PaymentResponsive'

const Home = () => {
    const [pointsx,setPointsx] = useState([
        {
            point: [55.27435493978062, 25.197221247530983],
            bg:bjk

        },
        {
            point: [55.279738897145506, 25.197278595220233 ],
            bg:dbml

        },
        {
            point: [55.279403912255596,25.210595281320312],
            bg:DIFC

        },
        {
            point: [55.36570498395875,25.25330062298459],
            bg:airplain

        },
        {
            point: [ 55.286839026287055,25.194415200503425],
            bg:attraction

        },
    ])
  return (
    <div className='bg-[#E6EDED] !font-[nova] '>
         <div className={`w-full lg:h-[6.25rem] lg:min-h-[6.25rem] h-[5rem] relative z-10 font-[nova] bg-[#002D31] bg-no-repeat bg-cover bg-right-bottom flex justify-start   `}>
            {/* <div className={` w-full h-full `}> */}
            <div className='flex justify-between lg:w-[93.0625rem] w-[95%] mx-auto'>

                <div className='mt-[0.6rem] lg:w-[11.549375rem] lg:h-[4.8125rem] w-[7.5rem] h-[3.7rem] flex items-center shadow-[-0.2510175rem_-0.2510175rem_0.417528125rem_-0.13917625rem_#007580,0.2510175rem_0.2510175rem_5.25218px_0.13917625rem_#002023] rounded-[0.486875rem] '>
                    <Link href='/' className='w-full h-full flex justify-center items-center'>

                        <img src={projlogo} alt="" className='lg:w-[7.200625rem] lg:h-[3.814375rem] w-[7.5rem] h-[3rem] object-contain object-center'/>
                    </Link>
                </div>
                {/* </div> */}
                <div className='text-[1.375rem] font-[400] text-[#fff] place-self-center hidden lg:block'>
                    Downtown DubaI SOCIETY HOUSE COME HOME TO & BELONG SOMEWHERE EXCEPTIONAL
                </div>
                <div className='place-self-center flex lg:gap-x-[1.875rem] gap-[1rem] gap-y-[0.5rem] flex-wrap '>

                    <div className='lg:w-[3.6375rem] lg:h-[3.6375rem] w-[2.2rem] h-[2.2rem]'>
                        <ActionCircle imgHeight='1.0625' imgWidth='1.0625' imgSrc={phoneIcon} />
                    </div>
                    <div className='lg:w-[3.6375rem] lg:h-[3.6375rem] w-[2.2rem] h-[2.2rem]'>
                        <ActionCircle imgHeight='1.0625' imgWidth='1.0625' imgSrc={phoneIcon} />
                    </div>
                    <div className='lg:w-[3.6375rem] lg:h-[3.6375rem] w-[2.2rem] h-[2.2rem]'>
                        <ActionCircle imgHeight='1.0625' imgWidth='1.0625' imgSrc={phoneIcon} />
                    </div>
                    <div className='lg:w-[3.6375rem] lg:h-[3.6375rem] w-[2.2rem] h-[2.2rem]'>
                        <ActionCircle imgHeight='1.0625' imgWidth='1.0625' imgSrc={phoneIcon} />
                    </div>

                </div>
            </div>
        </div>
        <div className='w-max mx-auto lg:mt-[0rem] mt-[1rem]'>
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
            <div className='lg:w-[91.25rem] lg:h-[40.8125em] w-[90vw] h-max  border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] rounded-[0.98125rem] overflow-hidden'>
                <div className='w-full lg:h-[3.7rem] h-max border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] lg:flex items-center  '>
                    <div className='flex items-center h-[100%]'>
                        <div className='ml-[0.75rem] w-[3.5125rem] h-[3.5125rem] border-r-[0.125rem] border-[#CAD4D5] pr-[0.2rem]  flex justify-center items-center  mt-[0.2rem]'>

                            <img src={amaenitiesIcon} alt="" className='md:w-[3.3125rem] md:h-[3.105625rem] w-[2.5125rem] h-[3.0125rem] '/>
                        </div>
                        <div className='ml-[0.5rem] h-full'>
                            <InElementSeperator width='0.5rem'/>
                        </div>
                        <div className='text-grade md:text-[2rem] text-[1.2rem] font-[600] md:ml-[1.375rem]'>
                            Amenities
                        </div>
                    </div>
                    <div className='ml-[1.375rem] h-full lg:block hidden'>
                        <InElementSeperator width='0.5rem'/>
                    </div>
                    <div className='text-grade1 lg:ml-[3.1875rem] ml-[0.75rem] md:text-[1.625rem] etxt-[1.0375rem]'>
                        EVERY THING YOU COULD WANT, EXACTLY WHERE YOU WANT IT.
                    </div>
                </div>

                <div className='lg:w-[85rem] w-[98%] flex flex-wrap lg:justify-between mx-auto mt-[1.9375rem] gap-y-[1.8125rem] justify-center lg:gap-x-0 gap-x-[2rem] lg:py-0 py-[1.5rem]'>
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
                    <div className='lg:h-[15.75rem] lg:w-[32.125rem] lg:max-w-[32.125rem]  max-w-[30rem] lg:border-[#CAD4D5] lg:border-[0.0625rem] lg:shadow-[-0.33392625rem_-0.33392625rem_0.66785rem_0.166963125rem_#FFFFFF,0.33392625rem_0.33392625rem_0.66785rem_#BABFBF] rounded-[0.83475rem] flex flex-col items-center py-[0.5rem] lg:py-0 pb-[0.7rem] lg:pb-0 mx-[1rem] md:mx-0 '>
                        <div className='lg:w-[30.6rem] w-[90%] mt-[0.75rem] text-[0.9rem] leading-[2.0425rem] text-grade font-[400]'>
                            SOCITY HOUSE DOWNTOWN ENSURES THAT EVERY RESIDANT CAN ENJOY A WORLD-CLASS LIFESTYLE, WHERE CONVENIENCE AND INDULGENCE INTERTWINE. EMBRACE THE EXTRAORDINARY AND MAKE SOCIETY HOUSE YOUR HOME. REGISTER NOW TO EMBARK ON AN EXCEPTIONAL LIVING EXPERIENCE!
                        </div>
                        <div className='lg:w-[13.590625rem] lg:h-[2.718125rem] max-w-[13.5rem] lg:max-w-[14rem] flex justify-center items-center bg-custom-gradient md:place-self-end rounded-[6.25rem] shadow-[0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] md:mt-[-1.5rem] md:mr-[3.596875rem] cursor-pointer hover:shadow-[inst_0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] mt-[0.5rem] lg:mt-0 '>
                            <div className='text-[#fff] lg:text-[1.413125rem] text-[1rem] font-[600] px-[0.7rem] py-[0.1rem] lg:py-0 lg:px-0 '>
                                Register Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto'>
            <div className='lg:w-[91.25rem] lg:h-[38.125rem] w-[90vw] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] rounded-[0.981875rem] overflow-hidden '>
                <div className='w-full lg:h-[3.75rem] h-max border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_7.30575rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] lg:flex items-center py-[1rem] lg:py-0 ipad::justify-between'>
                    <div className='flex items-center overflow-hidden'>

                        <img src={mapLogo} alt="" className='lg:w-[2.4375rem] lg:h-[2.4375rem] w-[1.4375remr] h-[1.4375rem] ml-[1rem]'/>
                        <div className='h-full lg:ml-[1.125rem]'>
                            <InElementSeperator width='0.5rem'/>
                        </div>
                        <div className='lg:ml-[0.1875rem] text-grade lg:text-[1.875rem] md:text-[1.25rem] text-[1.0375rem] font-[600] '>
                            Society House Location
                        </div>
                    </div>
                    <div className='lg:w-[13.590625rem] lg:h-[2.718125rem] py-[0.25rem] px-[1rem] lg:py-0 lg:px:0 mx-auto lg:mx-0 w-fit hidden lg:flex justify-center items-center rounded-[6.25rem] bg-custom-gradient lg:ml-auto ipad:mr-[2.096875rem] text-[#fff] lg:text-[1.413125rem] text-[0.9rem] font-[600] shadow-[0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] mt-[0.2rem] lg:mt-0'>
                        Learn More
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col-reverse lg:w-[86.75rem] w-[95%] mx-auto h-full mb-[3rem]'>
                    <div className='lg:h-[31.625rem] lg:w-[38.6875rem] mt-[1.5rem] rounded-[0.98125rem] w-full h-max aspect-square lg:aspect-auto mb-[0.5rem]  lg:mb-0'>
                        <div className='w-full h-full relative '>

                            <MapWIcons
                                points={pointsx}
                                // changes={changes}
                                // rchanges={rchanges}
                                zoom={9}
                                isZoom={true}

                            />
                            <div className='lg:w-[13.590625rem] lg:h-[2.718125rem] py-[0.25rem] px-[1rem] lg:py-0 lg:px:0 mx-auto lg:mx-0 w-fit lg:hidden flex justify-center items-center rounded-[6.25rem] bg-custom-gradient lg:ml-auto ipad:mr-[2.096875rem] text-[#fff] lg:text-[1.413125rem] text-[0.9rem] font-[600] shadow-[0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] mt-[1rem] lg:mt-0 absolute bottom-[-2.5rem] left-[calc(50%-3.5rem)]'>
                                Learn More
                            </div>
                        </div>
                    </div>
                    <div className='h-fll ml-[1rem] hidden lg:block'>
                        <InElementSeperator width='0.375rem'/>
                    </div>
                    <div className='h-[0.375rem] block lg:hidden mt-[-7.5rem] mmd1:mt-[-5.8rem] mmd2:mt-[-4.3rem] md:mt-[-2.3rem] ipad:mt-[-0.5rem]'>
                        <InElementSeperator width='100%'/>
                    </div>
                    <div className='lg:w-[44.75rem] lg:ml-auto lg:mt-[2.1875rem] w-full lg:scale-100 scale-[0.47] lg:block flex flex-col items-center mt-[-7rem] smd:scale-[0.49] msmd:scale-[0.508] mmd1:scale-[0.6] mmd1:mt-[-5.5rem] mmd2:scale-[0.7] mmd2:mt-[-4rem] md:scale-[0.78] md:mt-[-1.7rem] ipad:scale-[0.95] ipad:mt-[0.5rem]'>
                        <div className=''>

                            <DistanceContainer distance={3.75} img={burjkhalifa} text='Burj Khalifa' />
                        </div>
                        <div className='mt-[3.25rem] '>

                            <DistanceContainer distance={3.75} img={DubaiMall} imgWidth='3.4375rem' imgHeight='1.54625rem' text='The Dubai Mall'/>
                        </div>
                        <div className='mt-[3.25rem] '>

                            <DistanceContainer distance={3.75} img={airPlain} imgWidth='2.495625rem' imgHeight='2.663125rem' text='DXB Airport'/>
                        </div>
                        <div className='mt-[3.25rem] '>

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
        <div className='mt-[3.625rem] w-max mx-auto mb-[1rem] lg:hidden'>
            <PaymentPlanNF4/>

        </div>
        <div className='mt-[3.625rem] w-max mx-auto mb-[1rem] hidden lg:block'>
            <PaymentResponsive/>

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
