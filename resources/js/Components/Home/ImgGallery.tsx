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
    <div className='w-[95.625rem] h-[41.1875rem] border-[#CAD4D5] border-[0.0625rem]  shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] flex flex-col items-center mt-[0rem] overflow-hidden'>
        <div className='w-[91.74125rem] h-[34.468125rem] flex justify-between items-center mt-[1.6875rem]'>
            <div className='flex justify-center items-center w-[56.798125rem] h-[33.1875rem] border-[#DCE3E3] border-[0.0625rem] rounded-[0.84375rem] shadow-[inset_-0.2805075rem_-0.2805075rem_0.448811875rem_#FFFFFF,inset_0.2805075rem_0.2805075rem_0.39271rem_#B6C3C5]'>
                <div className='w-[54.8125rem] h-[31.3125rem] rounded-[0.84375rem] relative'>
                    <NewCardImage src={landingHero} rounded='0.84375'/>
                    <div className='absolute top-[1.5rem] left-[1.84375rem] w-[20.875rem] h-[28.4375rem] flex flex-col items-center gap-[2.1875rem]'>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                Fully FURNISHED LUXURY APARTMENTS
                            </div>
                        </div>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                WALKING DISTANCE TO DUBAI MALL
                            </div>
                        </div>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                ACCESS TO PRE-LAUNCH OFFERS
                            </div>
                        </div>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                4.5 YEARS PAYMENT
                            </div>
                        </div>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                POST HANDOVER PAYMENT PLAN
                            </div>
                        </div>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                HANDOVER IN Q2 2026
                            </div>
                        </div>
                        <div className='w-full h-[2.1875rem] birder-[#E6EDED] border-[0.0625rem] rounded-[6.25rem] flex justify-center items-center'>
                            <div className='font-[600] text-[#fff] text-[1rem] '>
                                STARTING PRICE  AED 960,000 / $263,000
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-[32.86625rem] h-[33.188125rem] flex flex-wrap'>
                <div className='w-[15.920625rem] h-[16.07rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                    <img src={imgLT} alt="" className='w-[14.68125rem] h-[14.86625rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem]'/>

                </div>
                <div className='w-[15.920625rem] h-[16.07rem] rounded-[5.4473125rem_0.551694375rem_5.4473125rem_0.367384375rem] ml-[0.985625rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                    <img src={imgRT} alt="" className='w-[14.68125rem] h-[14.86625rem] rounded-[5.4473125rem_0.367384375rem_5.4473125rem_0.367384375rem]'/>

                </div>
                <div className='w-[15.920625rem] h-[16.07rem] rounded-[5.4473125rem_0.551694375rem_5.4473125rem_0.367384375rem] mr-[0.985625rem] mt-[0.985625rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                    <img src={imgLB} alt="" className='w-[14.68125rem] h-[14.86625rem] rounded-[5.4473125rem_0.551694375rem_5.4473125rem_0.367384375rem]'/>
                </div>
                <div className='w-[15.920625rem] h-[16.07rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem] mt-[0.985625rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center cursor-pointer' onClick={handleClick}>
                    <div className='w-[14.68125rem] h-[14.86625rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem] relative'>

                        <img src={imgRB} alt="" className='w-[14.68125rem] h-[14.86625rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem]'/>
                        <div className='absolute bottom-[0.576875rem] right-[0.87875rem] flex gap-[0.4375rem]'>
                            <div className='text-[#fff] text-[1.125rem] font-[600]'>
                                12+
                            </div>
                            <img src={moreImgs} alt="" className='w-[1.87875rem] h-[1.67375rem] '/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className='w-[91.74125rem] h-[2.315625rem] justify-between mx-auto mt-[1.6875rem] flex'>
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
        </div>
        <div className='w-[100vw] h-[100vh] fixed top-0 z-[-1] opacity-0 left-0 bg-[#0000006c] flex justify-center items-center gap-[1.875rem] transition-all closer' ref={gallery} onClick={close}>

            <div className=''>
                <GallerySwiper imgs={[dubai,dubaiP,beatchFront]}/>
            </div>

        </div>
    </div>
  )
}

export default ImgGallery
