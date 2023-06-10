import React, { useRef } from 'react'
import NewCardImage from './NewCardImage'
import NewSocial from './NewSocial'
import TagWithImageANdSeperator from './TagWithImageANdSeperator'


import dubai from '../../../assets/dubai.png'
import imgLT from '../../../assets/imgLT.png'
import imgRT from '../../../assets/imgRT.png'
import imgLB from '../../../assets/imgLB.png'
import imgRB from '../../../assets/imgRB.png'
import moreImgs from '../../../assets/imgs.svg'
import shareIcon from '../../../assets/sharefilled.svg'
import favIcon from '../../../assets/favfilled.svg'
import viewIcon from '../../../assets/viewfilled.svg'
import mapIcon from '../../../assets/map_icon.svg'
import arrowIcon from '../../../assets/arrowWhite.svg'
import GallerySwiper from './GallerySwiper'
import beatchFront from '../../../assets/Newcircle.png'
// import dubai from '../../../assets/dubai.png'
import dubaiP from '../../../assets/Dubai-Properties-Logo1.png'
import landingHero from '../../../assets/landingHero.png'
import infiIcon from '../../../assets/infiIcon.svg'
import imgGalleryIcon from '../../../assets/imgGalleryIcon.svg'
import paymentplanIcon from '../../../assets/paymentplanIcon.svg'
import floorplanIcon from '../../../assets/floorplanIcon.svg'
import brochurIcon from '../../../assets/brochure.svg'
import brochreLightIcona from '../../../assets/brochreLightIcona.svg'
import SimpleSmallSwiper from './SimpleSmallSwiper'
const ImgGallery = () => {
    const handleClick = () => {
        gallery.current.style.zIndex = '9999999999999'
        gallery.current.style.opacity = '1'
    }
    const close = (e) => {
        console.log(e.target.classList.value)
        if(e.target.classList.value.includes('closer')){
            // alert('d')
            gallery.current.style.opacity = '0'
            gallery.current.style.zIndex = '-1'
        }
    }
    const gallery = useRef(null)
  return (
        <div className='lg:w-[95.625rem] lg:h-[41.1875rem] h-max  pb-[1rem] lg:pb-0 w-[90vw] border-[#CAD4D5] border-[0.0625rem] rounded-[0.7875rem]  shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] flex flex-col items-center mt-[0rem] overflow-hidden mx-auto'>
            <div className='lg:w-[91.74125rem] lg:h-[34.468125rem] h-max flex lg:flex-row justify-between items-center mt-[0.6875rem]  w-[100%] flex-col mx-auto '>
            <div className='flex justify-center items-center lg:w-[56.798125rem] w-[95%] h-max lg:h-[33.1875rem] lg:py-0 py-[0.5rem] border-[#DCE3E3] border-[0.0625rem] rounded-[0.84375rem] shadow-[inset_-0.2805075rem_-0.2805075rem_0.448811875rem_#FFFFFF,inset_0.2805075rem_0.2805075rem_0.39271rem_#B6C3C5]'>
                <div className='lg:w-[54.8125rem] w-[95%] h-max lg:h-[31.3125rem] rounded-[0.84375rem] relative '>
                    <div className='lg:block hidden'>

                        <NewCardImage src={landingHero} rounded='0.84375'/>
                    </div>
                    <div className=' lg:hidden w-[100%] h-full rounded-[0.84375rem] flex  absolute'>
                        <img src={landingHero} alt="" className='w-[100%] rounded-[0.84375rem]'/>
                        <div className={`w-full h-full absolute top-0 left-0 bg-[#01141666] mix-blend-overlay rounded-[0.84375rem]`}></div>
                    </div>
                    <div className='absolute top-[1.5rem] lg:left-[1.84375rem] w-[20.875rem] h-[28.4375rem] flex-col items-center gap-[2.1875rem]  left-[calc(50%-10.4375rem)] hidden lg:flex'>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center hover:bg-[#dbe9e94d] transition-all cursor-pointer'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                Fully FURNISHED LUXURY APARTMENTS
                            </div>
                        </div>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center hover:bg-[#dbe9e94d] transition-all cursor-pointer'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                WALKING DISTANCE TO DUBAI MALL
                            </div>
                        </div>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center hover:bg-[#dbe9e94d] transition-all cursor-pointer'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                ACCESS TO PRE-LAUNCH OFFERS
                            </div>
                        </div>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center hover:bg-[#dbe9e94d] transition-all cursor-pointer'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                4.5 YEARS PAYMENT
                            </div>
                        </div>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center hover:bg-[#dbe9e94d] transition-all cursor-pointer'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                POST HANDOVER PAYMENT PLAN
                            </div>
                        </div>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center hover:bg-[#dbe9e94d] transition-all cursor-pointer'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                HANDOVER IN Q2 2026
                            </div>
                        </div>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center hover:bg-[#dbe9e94d] transition-all cursor-pointer'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                STARTING PRICE  AED 960,000 / $263,000
                            </div>
                        </div>
                    </div>
                    {/* replacment */}
                    <div className='aspect-[877/510] w-[95%] relative top-0 left-0  justify-start md:items-start flex md:flex  items-center gap-x-[10%] flex-col  lg:hidden mx-auto'>
                        <div className='w-fit md:w-[45%] h-[2.1875rem]  rounded-[6.25rem] flex justify-center items-center  transition-all cursor-pointer text-center p-[1.2rem] my-[1.09375rem]'>
                        <div className='font-[600] text-[#fff] lg:text-[1rem] text-[0.7rem] '>
                            FURNISHED LUXURY APARTMENTS
                        </div>
                        </div>
                        <div className='w-fit md:w-[45%] h-[2.1875rem]  rounded-[6.25rem] flex justify-center items-center  transition-all cursor-pointer text-center p-[1.2rem] my-[1.09375rem]'>
                            <div className='font-[600] text-[#fff] lg:text-[1rem] text-[0.7rem] '>
                                WALKING DISTANCE TO DUBAI MALL
                            </div>
                        </div>
                        <div className='w-fit md:w-[45%] h-[2.1875rem]  rounded-[6.25rem] flex justify-center items-center  transition-all cursor-pointer text-center p-[1.2rem] my-[1.09375rem]'>
                            <div className='font-[600] text-[#fff] lg:text-[1rem] text-[0.7rem] '>
                                ACCESS TO PRE-LAUNCH OFFERS
                            </div>
                        </div>
                        <div className='w-fit md:w-[45%] h-[2.1875rem]  rounded-[6.25rem] flex justify-center items-center  transition-all cursor-pointer text-center p-[1.2rem] my-[1.09375rem]'>
                            <div className='font-[600] text-[#fff] lg:text-[1rem] text-[0.7rem] '>
                                4.5 YEARS PAYMENT
                            </div>
                        </div>
                        <div className='w-fit md:w-[45%] h-[2.1875rem]  rounded-[6.25rem] flex justify-center items-center  transition-all cursor-pointer text-center p-[1.2rem] my-[1.09375rem]'>
                            <div className='font-[600] text-[#fff] lg:text-[1rem] text-[0.7rem] '>
                                POST HANDOVER PAYMENT PLAN
                            </div>
                        </div>
                        <div className='w-fit md:w-[45%] h-[2.1875rem]  rounded-[6.25rem] flex justify-center items-center  transition-all cursor-pointer text-center p-[1.2rem] my-[1.09375rem]'>
                            <div className='font-[600] text-[#fff] lg:text-[1rem] text-[0.7rem] '>
                                HANDOVER IN Q2 2026
                            </div>
                        </div>
                        <div className='w-fit md:w-[45%] h-[2.1875rem]  rounded-[6.25rem] flex justify-center items-center  transition-all cursor-pointer text-center p-[1.2rem] my-[1.09375rem]'>
                            <div className='font-[600] text-[#fff] lg:text-[1rem] text-[0.7rem] '>
                                STARTING PRICE  AED 960,000 / $263,000
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:w-[32.86625rem] lg:h-[33.188125rem] h-max lg:flex hidden flex-wrap w-[95%] mx-auto justify-between lg:mt-[0rem] mt-[2rem]'>
                <div className='lg:w-[15.920625rem] w-[46%] aspect-square lg:h-[16.07rem] rounded-[3.6%_33.9%_2.4%_33.9%] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center group overflow-hidden'>
                    <img src={imgLT} alt="" className='lg:w-[14.68125rem] lg:h-[14.86625rem] w-[94%]  aspect-square rounded-[3.6%_33.9%_2.4%_33.9%] group-hover:scale-[1.3] transition-all '/>

                </div>
                <div className='lg:w-[15.920625rem] w-[46%] lg:h-[16.07rem] aspect-[1/1] rounded-[33.9%_3.6%_33.9%_2.4%] ml-[0.985625rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center group overflow-hidden'>
                    <img src={imgRT} alt="" className='lg:w-[14.68125rem] lg:h-[14.86625rem] w-[94%]  aspect-square rounded-[33.9%_3.6%_33.9%_2.4%] group-hover:scale-[1.3] transition-all'/>

                </div>
                <div className='lg:w-[15.920625rem] w-[46%] lg:h-[16.07rem] aspect-[1/1] rounded-[33.9%_3.6%_33.9%_2.4%] mr-[0.985625rem] mt-[0.985625rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center group overflow-hidden'>
                    <img src={imgLB} alt="" className='lg:w-[14.68125rem] lg:h-[14.86625rem] w-[94%]  aspect-square rounded-[33.9%_3.6%_33.9%_2.4%] group-hover:scale-[1.3] transition-all'/>
                </div>
                <div className='lg:w-[15.920625rem] w-[46%] lg:h-[16.07rem] aspect-[1/1] rounded-[3.6%_33.9%_2.4%_33.9%] mt-[0.985625rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center cursor-pointer group overflow-hidden' onClick={handleClick}>
                    <div className='lg:w-[14.68125rem] lg:h-[14.86625rem] w-[100%] aspect-square rounded-[3.6%_33.9%_2.4%_33.9%] relative flex justify-center items-center'>

                        <img src={imgRB} alt="" className='lg:w-[14.68125rem] lg:h-[14.86625rem] w-[94%]  aspect-square rounded-[3.6%_33.9%_2.4%_33.9%] group-hover:scale-[1.3] transition-all'/>
                        <div className='absolute bottom-[0.576875rem] right-[0.87875rem] flex gap-[0.4375rem]'>
                            <div className='text-[#fff] text-[1.125rem] font-[600]'>
                                12+
                            </div>
                            <img src={moreImgs} alt="" className='w-[1.87875rem] h-[1.67375rem] '/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='lg:hidden w-[90%] h-max  mx-auto'>
                <SimpleSmallSwiper/>
            </div>

        </div>
        {/* <div className='lg:w-[91.74125rem] w-full h-[2.315625rem] justify-between mx-auto mt-[1.6875rem] flex flex-wrap'>
            <div className='' style={{ width:'2.315625rem',height:'2.315625rem' }}>

                <NewSocial img={shareIcon} img_h='1.16375' img_w='1.16375'/>
            </div>
            <div className='h-[2.25rem]' style={{ width:'11.5rem' }}>
                <TagWithImageANdSeperator img={infiIcon} imgWidth='2rem' imgHeight='1.816875rem' imgML='0.625rem' seperatorWidth='0.3125rem' text='Information' textSize='1.125rem' />
            </div>
            <div className='h-[2.25rem]' style={{ width:'11.5rem' }}>
                <TagWithImageANdSeperator img={imgGalleryIcon} imgWidth='2rem' imgHeight='1.41rem' imgML='0.829375rem' seperatorWidth='0.3125rem' text='Image Glary ' textSize='1.125rem' />
            </div>
            <div className='h-[2.25rem]' style={{ width:'11.5rem' }}>
                <TagWithImageANdSeperator img={paymentplanIcon} imgWidth='1.670625rem' imgHeight='1.798125rem' imgML='0.73875rem' seperatorWidth='0.3125rem' text='Payment Plan ' textSize='1.125rem' />
            </div>
            <div className='h-[2.25rem]' style={{ width:'11.5rem' }}>
                <TagWithImageANdSeperator img={floorplanIcon} imgWidth='1.875rem' imgHeight='1.875rem' imgML='0.855625rem' seperatorWidth='0.3125rem' text='Floor Plan' textSize='1.125rem' />
            </div>
            <div className='h-[2.25rem]' style={{ width:'11.5rem' }}>
                <TagWithImageANdSeperator img={mapIcon} imgWidth='1.6875rem' imgHeight='1.6875rem' imgML='0.8125rem' seperatorWidth='0.3125rem' text='Location' textSize='1.125rem' />
            </div>
            <div className='h-[2.25rem]' style={{ width:'11.5rem' }}>
                <TagWithImageANdSeperator img={brochreLightIcona} imgWidth='1.849375rem' imgHeight='1.544375rem' imgML='0.8875rem' seperatorWidth='0.3125rem' text='Brochure' textSize='1.125rem' />
            </div>
        </div> */}
        <div className='w-[100vw] h-[100vh] fixed top-0 z-[-1] opacity-0 left-0 bg-[#0000006c] flex justify-center items-center gap-[1.875rem] transition-all closer' ref={gallery} onClick={close}>

            <div className=''>
                <GallerySwiper imgs={[dubai,dubaiP,beatchFront]}/>
            </div>

        </div>
    </div>
  )
}

export default ImgGallery
