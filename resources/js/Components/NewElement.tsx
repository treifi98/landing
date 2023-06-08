import React from 'react'
import NewCardImage from './Home/NewCardImage'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'

const NewElement = () => {
    return (
        <div className='lg:w-[91.25rem] lg:h-[38.125rem] w-[70vw] h-max border-[#CAD4D5] border-[0.0625rem] rounded-[0.981875rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] flex justify-center items-center '>
            <div className='lg:w-[86.37rem] lg:h-[34.69rem] w-[94.65%] h-max flex lg:gap-[4.125rem] flex-wrap lg:justify-start justify-center gap-[5rem]  lg:py-0 py-[2rem]'>
                <div className='lg:w-[29.75rem] lg:h-[34.69rem] w-[90%] lg:pb-0 pb-[1rem] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.43430625rem_-0.542883125rem_0.814325rem_#FFFFFF,inset_0.43430625rem_0.43430625rem_0.814325rem_#B6C3C5] rounded-[0.779375rem] h-max md:aspect-[9673/13675]'>
                    <div className='text-[1.1375rem] lg:text-[1.7375rem] md:text-[1.9375rem] text-grade1 lg:w-[25.08125rem] w-[95%] px-[0.5rem] lg:px-0 lg:h-[11rem] h-max leading-[2.37625rem] lg:leading-[2.77625rem] md:leading-[3.17625rem] ml-[1.194375rem] mt-[1.303125rem]'>
                        Society HOUSE DOWNTOWN WAS DESiGNED WITH BOTH AESTHETICS AND FUNCTIONALITY IN MIND.
                    </div>
                    <div className='text-grade text-[0.885625rem] lg:text-[1.085625rem] md:text-[1.285625rem] leading-[1.5375rem] lg:leading-[1.7375rem] md:leading-[2.1375rem] lg:w-[26.6875rem] w-[95%] px-[0.5rem] lg:px-0 ml-[1.194375rem] mt-[1.8875rem]'>
                        The building’s floor area and height are carefully balanced to create a structure that’s both beautiful and practical. The result is a tower that is as striking as it is purposeful.
                    </div>
                    <div className='text-grade text-[0.885625rem] lg:text-[1.085625rem] md:text-[1.285625rem] leading-[1.5375rem] lg:leading-[1.7375rem] md:leading-[2.1375rem] lg:w-[26.6875rem] w-[95%] px-[0.5rem] lg:px-0 ml-[1.194375rem] mt-[1.4875rem]'>
                        Society House consists of 404 fully and semi furnished units, spaced across various configurations to match whatever life you lead. The units are spaced over 49 floors, with apartments structured into zones, from micro units on the lower floors and zones up to the expansive 3-bedroom corner units.
                    </div>
                </div>
                <div className='lg:h-[34.1875rem] lg:w-[24.1825rem] w-[90%] aspect-[9673/13675] border-[#CAD4D5] border-[0.0625rem] rounded-[0.981875rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] flex justify-center items-center'>
                    <div className='lg:h-[31.675625rem] lg:w-[21.82875rem] w-[95%] aspect-[9673/13675] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.43430625rem_-0.542883125rem_0.814325rem_#FFFFFF,inset_0.43430625rem_0.43430625rem_0.814325rem_#B6C3C5] rounded-[0.981875rem] flex justify-center items-center'>
                        <div className='lg:w-[19.8125rem] lg:h-[29.75rem] w-[95%]  aspect-[9673/13675] flex justify-normal items-center'>
                            <NewCardImage rounded='0.981875' src={img1}/>
                        </div>
                    </div>
                </div>
                <div className='lg:h-[34.1875rem] lg:w-[24.1825rem] w-[90%] aspect-[9673/13675] border-[#CAD4D5] border-[0.0625rem] rounded-[0.981875rem] shadow-[-0.39291625rem_-0.39291625rem_0.78583125rem_0.196458125rem_#FFFFFF,0.39291625rem_0.39291625rem_0.78583125rem_#BABFBF] flex justify-center items-center'>
                    <div className='lg:h-[31.675625rem] lg:w-[21.82875rem] w-[95%] aspect-[9673/13675] border-[#DCE3E3] border-[0.0625rem] shadow-[inset_-0.43430625rem_-0.542883125rem_0.814325rem_#FFFFFF,inset_0.43430625rem_0.43430625rem_0.814325rem_#B6C3C5] rounded-[0.981875rem] flex justify-center items-center'>
                        <div className='lg:w-[19.8125rem] lg:h-[29.75rem] w-[95%]  aspect-[9673/13675] flex justify-normal items-center'>
                            <NewCardImage rounded='0.981875' src={img2}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewElement
