import React from 'react'


import imgLT from '../../assets/imgLT.png'
import imgRT from '../../assets/imgRT.png'
import imgLB from '../../assets/imgLB.png'
import imgRB from '../../assets/imgRB.png'
const LogoTextRL = () => {
  return (
    <div className='w-[91.25rem] h-[38.125rem] flex items-center justify-center bg-[#E6EDED] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] rounded-[0.9822875rem]'>
        <div className='w-[86.1875rem] h-[33.6875rem] flex gap-[2.5rem]'>

            <div className='h-full w-[50.375rem] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.5rem_-0.625rem_0.9375rem_#FFFFFF,inset_0.5rem_0.5rem_0.9375rem_#B6C3C5] rounded-[0.9822875rem] box-border py-[2rem] flex justify-center items-center'>


                <div className='w-[46.0625rem]'>
                    <div className='font-[400] text-grade1 text-[1.625rem] leading-[2.4rem]'>
                        EVERY FEATURE CONSIDERED. EVERY CURAELEMENTTED DOWNTOWN LIVING ISN’T JUST ABOUT BEING CONNECTED OR HAVING THE BEST OF EVERYTHING.
                    </div>
                    <div className='text-[1.25rem] leading-[2rem]  mt-[1.25rem]'>
                        <p className=' text-grade'>
                            It’s about taking a considered view of every element that makes up the ideal inner-city residence, from the furniture and finishes to the art and amenities.
                        </p>
                        <p className='mt-[0.5rem] text-grade'>
                            And when it comes to finishes, we’ve hand-selected only the best. Marble, brass and gold add a touch of discernment, while rich textures and bold patterns give the space a striking feel.
                        </p>
                        <p className='mt-[0.5rem] text-grade'>
                            This all comes together to create a space both stylish and modern, yet feel warm and inviting. The perfect place to escape, belong, entertain and feel connected. What more could you want
                        </p>
                        <div className='mt-[1.5rem] h-[3.196875rem] w-[31.25rem] rounded-[6.25rem] bg-custom-gradient shadow-[0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] hover:shadow-[inset_0rem_0.309226875rem_0.309226875rem_rgba(0,0,0,0.25)] cursor-pointer flex justify-center items-center mx-auto'>
                            <div className='!text-[#fff] text-[1.739375rem] font-[600]'>
                                Obtain Access to the Special Offer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[33.299375rem] h-full flex flex-wrap'>
                <div className='w-[16.125rem] h-[16.28125rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                    <img src={imgLT} alt="" className='w-[14.931875rem] h-[15.19625rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem]'/>

                </div>
                <div className='w-[16.125rem] h-[16.28125rem] rounded-[5.4473125rem_0.551694375rem_5.4473125rem_0.367384375rem] ml-[1rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                    <img src={imgRT} alt="" className='w-[14.931875rem] h-[15.19625rem] rounded-[5.4473125rem_0.367384375rem_5.4473125rem_0.367384375rem]'/>

                </div>
                <div className='w-[16.125rem] h-[16.28125rem] rounded-[5.4473125rem_0.551694375rem_5.4473125rem_0.367384375rem] mr-[1rem] mt-[1rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                    <img src={imgLB} alt="" className='w-[14.931875rem] h-[15.19625rem] rounded-[5.4473125rem_0.551694375rem_5.4473125rem_0.367384375rem]'/>
                </div>
                <div className='w-[16.125rem] h-[16.28125rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem] mt-[1rem] border-[#CAD4D5] border-[0.0625rem] shadow-[inset_-0.1424525rem_-0.1424525rem_0.284905rem_0.07122625rem_#FFFFFF,inset_0.1424525rem_0.1424525rem_0.284905rem_#BABFBF] flex justify-center items-center'>
                    <img src={imgRB} alt="" className='w-[14.931875rem] h-[15.19625rem] rounded-[0.551694375rem_5.4473125rem_0.367384375rem_5.4473125rem]'/>

                </div>
            </div>
        </div>

        </div>
  )
}

export default LogoTextRL
