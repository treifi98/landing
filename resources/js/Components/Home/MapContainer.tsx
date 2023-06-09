import React, { useEffect, useState } from 'react'
import InElementSeperator from './InElementSeperator'
import Map from './Map'
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ZoomRange from './ZoomRange';
mapboxgl.accessToken = 'pk.eyJ1IjoidHJldmk5OCIsImEiOiJjbDNwcWhyOWgwMnppM2twN3JicG5wMmY2In0.m_eFeF9ZP_4xkJA9e5N05Q';


import diningLogo from '../../../assets/DiningLogo.svg'
import shoppingIcon from '../../../assets/shoppingIcon.svg'
import transportationIcon from '../../../assets/transportationIcon.svg'
import schoolIcon from '../../../assets/schoolIcon.svg'
import HospitalIcon from '../../../assets/HospitalIcon.svg'
import Eicon from '../../../assets/Eicon.svg'
import activitiesIcon from '../../../assets/activitiesIcon.svg'

const MapContainer = () => {

    const [changes,setChanges] = useState(-1)
    const [rchanges,setRChanges] = useState(-1)
    const [zoom,setZoom] = useState(14)

    const [points,setPoints] = useState([
        {
            point: [55.2667940551224,25.18752435627845],
            bg:'#002d31'

        },
        {
            point: [55.20497582813278,25.039942764298452],
            bg:'#002d31'

        }
    ])
    useEffect(()=>{
        setPoints(
            [
                {
                    point: [55.2667940551224,25.18752435627845],
                    bg:'#002d31'

                },
                {
                    point: [55.20497582813278,25.039942764298452],
                    bg:'#002d31'

                }
            ]
        )
    },[])
    // const [changes, setChanges] = useState(-1)
    const handleMouseEnter = (i) => {
        setChanges(i)
        setRChanges(-1)

        // alert ('s'+i)
    }
    const handleMouseLeave = (i) => {
        setRChanges(i)
        setChanges(-1)

    }





  return (
    <div className='lg:w-[91.25rem] lg:h-[38.125rem] w-[90vw] h-max rounded-[0.98125rem] border-[#CAD4D5] border-[0.0625rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] overflow-hidden '>
        <div className='w-full lg:h-[4rem] h-max py-[1rem] lg:py-0  border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] '>
            <div className='lg:w-[89.875rem] w-[99%] h-full grid grid-cols-2 lg:flex items-center lg:justify-start justify-center gap-[1.5625rem] flex-wrap ml-[1rem]'>

                <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer scale-[0.7] smd:scale-[0.77] md:scale-[1] origin-left'>
                    <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] '>
                        <img src={diningLogo} alt="" className='w-[1.828125rem] h-[1.7675rem] object-contain ml-[0.670625rem] mt-[0.21rem]' />
                    </div>
                    <div className='h-full'>
                        <InElementSeperator width='0.3125rem'/>
                    </div>
                    <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                        <div className='text-grade font-[600] text-[1.25rem]'>
                            Dining
                        </div>
                    </div>
                </div>
                <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer scale-[0.7] smd:scale-[0.77] md:scale-[1] origin-left'>
                    <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                        <img src={shoppingIcon} alt="" className='w-[1.49375rem] h-[1.521875rem] object-contain ml-[0.971875rem] mt-[0.346875rem]' />

                    </div>
                    <div className='h-full'>
                        <InElementSeperator width='0.3125rem'/>
                    </div>
                    <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                        <div className='text-grade font-[600] text-[1.25rem]'>
                            Shopping
                        </div>
                    </div>
                </div>
                <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer scale-[0.7] smd:scale-[0.77] md:scale-[1] origin-left'>
                    <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                        <img src={transportationIcon} alt="" className='w-[1.88625rem] h-[1.890625rem] object-contain ml-[0.85125rem] mt-[0.22625rem]' />

                    </div>
                    <div className='h-full'>
                        <InElementSeperator width='0.3125rem'/>
                    </div>
                    <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                        <div className='text-grade font-[600] text-[1.125rem]'>
                            Transportation
                        </div>
                    </div>
                </div>
                <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer scale-[0.7] smd:scale-[0.77] md:scale-[1] origin-left'>
                    <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                        <img src={schoolIcon} alt="" className='w-[2rem] h-[2rem] object-contain ml-[0.8125rem] mt-[0.125rem] ' />

                    </div>
                    <div className='h-full'>
                        <InElementSeperator width='0.3125rem'/>
                    </div>
                    <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                        <div className='text-grade font-[600] text-[1.25rem]'>
                            Schools
                        </div>
                    </div>
                </div>
                <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer scale-[0.7] smd:scale-[0.77] md:scale-[1] origin-left'>
                    <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                        <img src={HospitalIcon} alt="" className='w-[1.9375rem] h-[1.9375rem] object-contain ml-[0.875rem] mt-[0.1875rem] ' />

                    </div>
                    <div className='h-full'>
                        <InElementSeperator width='0.3125rem'/>
                    </div>
                    <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                        <div className='text-grade font-[600] text-[1.25rem]'>
                            Hospitals
                        </div>
                    </div>
                </div>
                <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer scale-[0.7] smd:scale-[0.77] md:scale-[1] origin-left'>
                    <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>

                        <img src={Eicon} alt="" className='w-[1.78125rem] h-[1.78125rem] object-contain ml-[0.6875rem] mt-[0.25rem] ' />
                    </div>
                    <div className='h-full'>
                        <InElementSeperator width='0.3125rem'/>
                    </div>
                    <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                        <div className='text-grade font-[600] text-[1.125rem]'>
                            Entertainment
                        </div>
                    </div>
                </div>
                <div className='w-[11.5rem] h-[2.25rem] flex group cursor-pointer scale-[0.7] smd:scale-[0.77] md:scale-[1] origin-left'>
                    <div className='w-[3rem] h-full rounded-[5.7075rem_0rem_0rem_5.7075rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5]'>
                        <img src={activitiesIcon} alt="" className='w-[2.1875rem] h-[1.625rem] object-contain ml-[0.6875rem] mt-[0.25rem] ' />

                    </div>
                    <div className='h-full'>
                        <InElementSeperator width='0.3125rem'/>
                    </div>
                    <div className='w-[8.1875rem] h-full border-[#DCE3E3] border-[0.0625rem] rounded-[0rem_5.7075rem_5.7075rem_0rem] shadow-[0rem_-0.285380625rem_0.456609375rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] group-hover:shadow-[inset_0rem_-0.285380625rem_0.456609375rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] flex justify-center items-center'>
                        <div className='text-grade font-[600] text-[1.25rem]'>
                            Activities
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='lg:w-[88.3125rem] lg:flex mx-auto lg:h-[34.1875rem] items-center'>
            <div className='lg:w-[36.375rem] lg:max-h-[30rem] h-min  md:flex flex-wrap gap-[2.5rem] lg:justify-start justify-center items-start mt-[1rem] lg:mt-0 hidden'>
                <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                    <div className='text-grade text-[1.125rem]'>
                        Binary Tower
                    </div>
                </div>
                <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                    <div className='text-grade text-[1.125rem]'>
                        Elite 8
                    </div>
                </div>
                <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                    <div className='text-grade text-[1.125rem]'>
                        Binary Tower
                    </div>
                </div>
                <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                    <div className='text-grade text-[1.125rem]'>
                        Elite 8
                    </div>
                </div>
                <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                    <div className='text-grade text-[1.125rem]'>
                        Binary Tower
                    </div>
                </div>
                <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                    <div className='text-grade text-[1.125rem]'>
                        Elite 8
                    </div>
                </div>
                <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                    <div className='text-grade text-[1.125rem]'>
                        Binary Tower
                    </div>
                </div>
                <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                    <div className='text-grade text-[1.125rem]'>
                        Elite 8
                    </div>
                </div>
                <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(0)} onMouseLeave={()=>handleMouseLeave(0)}>
                    <div className='text-grade text-[1.125rem]'>
                        Binary Tower
                    </div>
                </div>
                <div className='w-[16.9375rem] h-[4rem] flex justify-center items-center rounded-[0.3125rem] border-[#DCE3E3] border-[0.0625rem] shadow-[-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] hover:shadow-[inset_-0.285380625rem_-0.285380625rem_0.45660625rem_#FFFFFF,inset_0.285380625rem_0.285380625rem_0.399533125rem_#B6C3C5] cursor-pointer' onMouseEnter={()=>handleMouseEnter(1)} onMouseLeave={()=>handleMouseLeave(1)}>
                    <div className='text-grade text-[1.125rem]'>
                        Elite 8
                    </div>
                </div>

            </div>

            <div className='lg:w-[36.375rem] lg:max-h-[30rem] h-min w-full flex flex-wrap gap-[2.5rem] lg:justify-start justify-center items-start mt-[1rem] lg:mt-0 md:hidden'>
                <div className='text-grade text-[1.125rem] w-[40%] text-center'>
                    Binary Tower
                </div>
                <div className='text-grade text-[1.125rem] w-[40%] text-center'>
                    Binary Tower
                </div>
                <div className='text-grade text-[1.125rem] w-[40%] text-center'>
                    Binary Tower
                </div>
                <div className='text-grade text-[1.125rem] w-[40%] text-center'>
                    Binary Tower
                </div>
                <div className='text-grade text-[1.125rem] w-[40%] text-center'>
                    Binary Tower
                </div>
                <div className='text-grade text-[1.125rem] w-[40%] text-center'>
                    Binary Tower
                </div>
                <div className='text-grade text-[1.125rem] w-[40%] text-center'>
                    Binary Tower
                </div>
                <div className='text-grade text-[1.125rem] w-[40%] text-center'>
                    Binary Tower
                </div>
            </div>

            <div className='w-[1.311875rem] h-[34.1875rem] ml-[1.875rem] mr-[1.875rem] hidden lg:block'>
                <ZoomRange
                    rtl={false}
                    func={setZoom}
                />
            </div>
            <div className='h-[31.619375rem] w-[46.8675rem] rounded-[0.98125rem] overflow-hidden hidden lg:block'>
                <Map
                    points={points}
                    changes={changes}
                    rchanges={rchanges}
                    zoom={zoom}
                    isZoom={false}
                />

            </div>
            <div className='w-[95%] mx-auto mt-[1rem] mb-[1rem] aspect-square rounded-[0.98125rem] overflow-hidden block lg:hidden'>
                <Map
                    points={points}
                    changes={changes}
                    rchanges={rchanges}
                    zoom={4}
                    isZoom={true}
                />

            </div>
        </div>
    </div>
  )
}

export default MapContainer
