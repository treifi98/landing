import React from 'react'

import mapIcon from '../../assets/map_icon.svg'
import Brochure from './Home/Brochure'
import BoxMaster from './Home/BoxMaster'
import NewTag from './Home/NewTag'

import bedIcon from '../../assets/bed_icon.svg'
import priceIcon from '../../assets/price_tag_og.svg'
import bathIcon from '../../assets/baths.svg'
import sizeIcon from '../../assets/size.svg'
import parkingIcon from '../../assets/parkingIcon.svg'
import appartmentIcon from '../../assets/appartmentIcon.svg'
import statusIcon from '../../assets/statusIcon.svg'
import mortgageIcon from '../../assets/mortgageIcon.svg'
import Contact from './Home/Contact'
import Agent from './Home/Agent'
import agentImg from '../../assets/agent.png'
import InElementSeperator from './Home/InElementSeperator'
import TextType1 from './Home/TextType1'
import DynamicTextWhit from './Home/DynamicTextWhit'
import userIcon from '../../assets/user_icon.svg'
import socity from '../../assets/socity.svg'
import paymentPlanLogo from '../../assets/payment_plan_icon.svg'
import completion from '../../assets/compleationIcon.svg'
const ProjectInfo = () => {
  return (
    <div className=' w-[91.25rem] h-[38.125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] rounded-[0.98125rem] overflow-hidden'>
        <div className='w-full h-[3.75rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex items-center'>
            <div className='ml-[1.5rem]' style={{ width:'8.75rem',height:'2rem' }}>
                <NewTag text='Burj Khalifa' textSize='1.125rem' textWeight='400'/>
            </div>
            <div className='ml-[1.25rem]' style={{ width:'8.75rem',height:'2rem' }}>
                <NewTag text='Downtown' textSize='1.125rem' textWeight='400'/>
            </div>
            <div className='ml-[1.25rem]' style={{ width:'8.75rem',height:'2rem' }}>
                <NewTag text='HClose to canal' textSize='1.125rem' textWeight='400'/>
            </div>
            <div className='ml-[1.25rem]' style={{ width:'8.75rem',height:'2rem' }}>
                <NewTag text='Close to DIFC ' textSize='1.125rem' textWeight='400'/>
            </div>
            <div className='ml-[1.25rem]' style={{ width:'8.75rem',height:'2rem' }}>
                <NewTag text='Fully FURNISHED' textSize='1.125rem' textWeight='400'/>
            </div>
        </div>
        <div className='w-[86.0625rem] flex justify-center mx-auto'>
            <div className='w-[48.3125rem] h-[34.71875rem] mt-[0.725rem]'>
                <div className='text-grade1 text-[1.875rem] font-[600]'>
                    SOCIETY HOUSE
                </div>
                <div className='w-[26.875rem] mt-[0.7rem] text-grade text-[1.25rem] leading-[1.60375rem] font-[600]'>
                    Where Culture, Business, and Iconic Landmarks
                    Collide in Electrifying Harmony
                </div>
                <div className='flex  items-center justify-between w-full mt-[0.6125rem]'>
                    <div className='w-[15.5525rem] items-center flex'>

                        <img src={mapIcon} alt=""  className='w-[1.183125rem] h-[1.1225rem] '/>

                        <div className='text-[1.25rem] text-grade ml-[0.441875rem]'>

                            Downtown Dubai
                        </div>
                    </div>
                    {/* <div>
                        <Brochure mainWidth='8.5rem' mainHeight='2rem' imgHeight='1.19625rem' imgWidth='1.448125rem' imgMT='0.42875rem' imgWrapperWidth='2.214375rem' restWidth='6.07125rem' textSize='1rem' separatorWidth='0.285625rem'/>
                    </div> */}
                </div>


                    <div className='w-[48.325625rem] h-[21.606875rem] flex flex-wrap gap-x-[1.875rem] gap-y-[2.018125rem] mt-[1.564375rem]'>
                        <BoxMaster
                            BoxType='developer'
                            boxArgs={{
                                img:socity,
                                lowerText:'Society House',
                                lowerSectionMT:'1.7475rem'
                            }}
                            flipType='same-developer'
                            flipArgs={
                                {
                                    img:socity,
                                    lowerText:'Society House',
                                    lowerSectionMT:'1.7475rem'
                                }
                            }
                        />

                        <BoxMaster
                            BoxType='standerd'
                            // flipType='zibra'
                            boxArgs={
                                {
                                    mainHeight:'9.794375rem',
                                    mainWidth:'8.1625rem',
                                    text:'Price Starting From AED',
                                    lowerText:'950,000',
                                    img:priceIcon,
                                    imgWidth:'2.99875rem',
                                    imgHeight:'2.99875rem',
                                    imgMT:'0.575625rem',
                                    textSize:'1.150625rem',
                                    textWidth:'8.225rem',
                                    textMT:'0.388125rem',
                                    lowerSectionHeight:'2.5925rem',
                                    textMB:'0.358125rem',
                                    lowerTextSize: '1.150625rem',
                                    lineHeight:'1.40125rem',
                                    flippable:true
                                }
                            }
                            flipArgs={
                                {
                                    isPrice:true,
                                    content:[{'1':'10000','2':'1000000'}]
                                }
                            }
                        />
                        <BoxMaster
                            BoxType='standerd'
                            flipType='zibra'
                            boxArgs={
                                {
                                    mainHeight:'9.794375rem',
                                    mainWidth:'8.1625rem',
                                    text:'Bedrooms',
                                    lowerText:'Studio,1,2,3',
                                    img:bedIcon,
                                    imgWidth:'3.331875rem',
                                    imgHeight:'2.49875rem',
                                    imgMT:'1.344375rem',
                                    textSize:'1.248125rem',
                                    textWidth:'6.225rem',
                                    textMT:'1.058125rem',
                                    lowerSectionHeight:'2.5925rem',
                                    textMB:'0.769111rem',
                                    lowerTextSize: '1.248125rem',
                                    lineHeight:'1.520625rem',
                                    // flippable:true

                                }
                            }
                            flipArgs={
                                {
                                    isPrice:true,
                                    content:[{bed:'1BR',price:''},{bed:'2BR',price:''},{bed:'3BR',price:''}],
                                    mainHeight:'9.794375rem',
                                    mainWidth:'8.1625rem',
                                    zibraWidth:'8.1625rem',
                                    zibraHeight:'1.63rem',
                                    textSize:'1.055rem',
                                    aedSize:'0.67125rem'
                                }
                            }
                        />
                        <BoxMaster
                            BoxType='standerd'
                            flipType='zibra'
                            boxArgs={
                                {
                                    mainHeight:'9.794375rem',
                                    mainWidth:'8.1625rem',
                                    text:'Area sq.ft (Min-Max)',
                                    lowerText:'354 - 2839',
                                    img:sizeIcon,
                                    imgWidth:'3.303125rem',
                                    imgHeight:'3.014375rem',
                                    imgMT:'0.575625rem',
                                    textSize:'1.150625rem',
                                    textWidth:'6.225rem',
                                    textMT:'0.3675rem',
                                    lowerSectionHeight:'2.5925rem',
                                    textMB:'0.42125rem',
                                    lowerTextSize: '1.248125rem',
                                    lineHeight:'1.40125rem',
                                    // flippable:true

                                }
                            }
                            flipArgs={
                                {
                                    isPrice:false,
                                    content:['1BR','688.62 sq.ft','2BR','1158 sq.ft','3BR','2839 sq.ft'],
                                    mainHeight:'9.794375rem',
                                    mainWidth:'8.1625rem',
                                    zibraWidth:'8.1625rem',
                                    zibraHeight:'1.63rem',
                                    textSize:'1.055rem'
                                }
                            }
                        />
                        <BoxMaster
                            BoxType='standerd'
                            flipType='paymentPlan'
                            boxArgs={
                                {
                                    mainHeight:'9.794375rem',
                                    mainWidth:'8.1625rem',
                                    text:'Payment Plan',
                                    lowerText:'4.5 Years',
                                    img:paymentPlanLogo,
                                    imgWidth:'3.165rem',
                                    imgHeight:'3.165rem',
                                    imgMT:'0.575625rem',
                                    textSize:'1.150625rem',
                                    textWidth:'6.225rem',
                                    textMT:'0.268125rem',
                                    lowerSectionHeight:'2.5925rem',
                                    textMB:'0.4025rem',
                                    lowerTextSize: '1.248125rem',
                                    lineHeight:'1.40125rem',
                                }
                            }
                            flipArgs={
                                {
                                    mainHeight:'9.794375rem',
                                    mainWidth:'8.1625',
                                    // isPrice:true,
                                    content:[{installment:'Down Payment',precentage:'20%'},{installment:'During Constriction',precentage:'50%'},{installment:'Post handover',precentage:'30%'}],
                                    rowWidth:'8.1625',
                                    rowHeight:'3.23125rem',
                                    cornerWidth:'2.780625',
                                    textSize:'0.95875rem',
                                    fontWeight:'700'
                                }
                            }
                        />

                        <BoxMaster
                            BoxType='standerd'
                            flipType='simpleFlip'
                            boxArgs={
                                {
                                    mainHeight:'9.794375rem',
                                    mainWidth:'8.1625rem',
                                    text:'Completion Date',
                                    lowerText:'Q2/ 2026',
                                    img:completion,
                                    imgWidth:'2.771875rem',
                                    imgHeight:'2.833125rem',
                                    imgMT:'0.519375rem',
                                    textSize:'1.150625rem',
                                    textWidth:'6.225rem',
                                    textMT:'0.675rem',
                                    lowerSectionHeight:'2.5925rem',
                                    textMB:'0.38375rem',
                                    lowerTextSize: '1.248125rem',
                                    lineHeight:'1.40125rem',
                                }
                            }
                            flipArgs={
                                {
                                    mainHeight:'9.794375rem',
                                    mainWidth:'8.1625rem',
                                    lowerSectionHeight:'2.5925rem',
                                    lowerSectionTextSize: '1.248125rem',
                                    lowerText:'Q2/ 2026',
                                    text:'The handover of the properties',
                                    textSize:'1.150625rem',
                                    textMT:'1.534375rem',
                                    textWidth:'7.125rem',
                                    textHeight:'4.125rem'
                                }
                            }
                        />
                        <BoxMaster
                            BoxType='standerd'
                            // flipType='zibra'
                            boxArgs={
                                {
                                    mainHeight:'9.794375rem',
                                    mainWidth:'8.1625rem',
                                    text:'Property type',
                                    lowerText:'Apartment',
                                    img:appartmentIcon,
                                    imgWidth:'3.16875rem',
                                    imgHeight:'3.16875rem',
                                    imgMT:'1.05625rem',
                                    textSize:'1.200625rem',
                                    textWidth:'8.225rem',
                                    textMT:'0.575rem',
                                    lowerSectionHeight:'2.5925rem',
                                    textMB:'0.826875rem',
                                    lowerTextSize: '1.248125rem',
                                    lineHeight:'1.520625rem'
                                }
                            }
                            flipArgs={
                                {
                                    isPrice:true,
                                    content:[{'1':'10000','2':'1000000'}]
                                }
                            }
                        />
                        <BoxMaster
                            BoxType='standerd'
                            // flipType='zibra'
                            boxArgs={
                                {
                                    mainHeight:'9.794375rem',
                                    mainWidth:'8.1625rem',
                                    text:'Property type',
                                    lowerText:'1',
                                    img:statusIcon,
                                    imgWidth:'3.625rem',
                                    imgHeight:'3.5rem',
                                    imgMT:'0.75rem',
                                    textSize:'1.200625rem',
                                    textWidth:'8.225rem',
                                    textMT:'0.575rem',
                                    lowerSectionHeight:'2.5925rem',
                                    textMB:'0.799875rem',
                                    lowerTextSize: '1.248125rem',
                                    lineHeight:'1.520625rem'
                                }
                            }
                            flipArgs={
                                {
                                    isPrice:true,
                                    content:[{'1':'10000','2':'1000000'}]
                                }
                            }
                        />

                        <Contact
                            mainHeight='9.794375rem'
                            mainWidth='8.1625rem'
                            boxHeight='2.405rem'
                            boxWidth='2.88625rem'
                            mT='0.865625rem'
                            boxMB='0.769375rem'
                            boxMR='0.769375rem'
                            lowerSectionHeight='2.5975rem'
                            videoHeight='0.755rem'
                            videoWidth='1.3525rem'
                            wasupWidth='1.473125rem'
                            wasupHeight='1.473125rem'
                            phoneWidth='1.33875rem'
                            phoneHeight='1.29rem'
                            emailWidth='1.245rem'
                            emailHeight='0.875rem'
                            lowerSectionTextSize='1.248125rem'

                        />
                        <Agent
                            Args={{
                                name:'Nassif',
                                langs:['Arabic','English'],
                                speciality:'Downtown',
                                mainHeight:'9.794375rem',
                                mainWidth:'8.1625rem',
                                imgWrapperWidth:'6.818125rem',
                                imgWrapperHeight:'5.8575rem',
                                imgWrapperMT:'0.671875rem',
                                agentSectionHeight:'2.5925rem',
                                img1Width:'6.43375rem',
                                img1Height:'5.47375rem',
                                img2Width:'6.241875rem',
                                img2Height:'5.47375rem',
                                rounded:'0.48rem',
                                nameTextSize:'1.248125rem',
                                textSize:'0.948125rem',



                            }}
                        />

                    </div>
            </div>
            <div className='h-[38.125rem] z-[2] relative mt-[-3.75rem] ml-[2.9375rem]'>
                <InElementSeperator width='0.375rem'/>
            </div>
            <div className='w-[31.3125rem] ml-[2.9375rem] shadow-[inset_-0.3125rem_-0.3125rem_0.5rem_#FFFFFF,inset_0.3125rem_0.3125rem_0.4375rem_#B6C3C5] h-[29.5625rem] rounded-[0.9375rem] mt-[2.75rem] flex flex-col items-center justify-center '>
                <div className='w-[28.88625rem] h-[27.18125rem] shadow-[-0.250746875rem_-0.250746875rem_0.401195rem_#FFFFFF,0.250746875rem_0.250746875rem_0.351045625rem_#B6C3C5] rounded-[0.75rem] flex justify-center items-center'>
                    <div className='w-[27.18125rem] h-[26.42rem] flex flex-col items-center'>
                        <div className='text-grade text-[1.739375rem] leading-[2.11875rem] font-[600] text-center'>
                            SECURE YOUR PLACE FOR THE LIMITED-TIME OFFER
                        </div>
                        <div className='mt-[1.403125rem]'>

                            <DynamicTextWhit mainHeight='2.77375rem' mainWidth='27.18125rem' icon={userIcon} placeHolder='You full name' imgHeight='1.609375rem' imgWidth='1.609375rem' textWidth='22.98125rem' textHeight='2.77375rem' imgWrapperWidth='4.755rem' imgWrapperHeight='2.77375rem'/>
                        </div>
                        <div className='mt-[2.57625rem]'>

                            <DynamicTextWhit mainHeight='2.77375rem' mainWidth='27.18125rem' icon={userIcon} placeHolder='You full name' imgHeight='1.609375rem' imgWidth='1.609375rem' textWidth='22.98125rem' textHeight='2.77375rem' imgWrapperWidth='4.755rem' imgWrapperHeight='2.77375rem'/>
                        </div>
                        <div className='mt-[2.57625rem]'>

                            <DynamicTextWhit mainHeight='2.77375rem' mainWidth='27.18125rem' icon={userIcon} placeHolder='You full name' imgHeight='1.609375rem' imgWidth='1.609375rem' textWidth='22.98125rem' textHeight='2.77375rem' imgWrapperWidth='4.755rem' imgWrapperHeight='2.77375rem'/>
                        </div>
                        <div className='mt-[2.455rem] w-[13.590625rem] h-[2.718125rem] rounded-[5.4375rem] border-[#DCE3E3] border-[0.0625rem] flex justify-center items-center shadow-[-0.248221875rem_-0.248221875rem_0.397155rem_#FFFFFF,0.248221875rem_0.248221875rem_0.347510625rem_#B6C3C5] cursor-pointer hover:shadow-[inset_-0.248221875rem_-0.248221875rem_0.397155rem_#FFFFFF,inset_0.248221875rem_0.248221875rem_0.347510625rem_#B6C3C5]'>
                            <div className='text-grade text-[1.413125rem] font-[600] '>
                                Submit Details
                            </div>
                        </div>
                        {/* <div className='mt-[1.328125rem] text-[0.87rem]'>
                            By clicking Submit, you agree to our Terms & Privacy Policy.
                        </div> */}
                        {/* <dynamic /> */}
                    </div>
                </div>
            </div>

        </div>
                {/* <div className='w-[100px] h-[100px] bg-[red]'>

                </div> */}
    </div>
  )
}

export default ProjectInfo