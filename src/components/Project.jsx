import React from 'react'
import prj1 from '../assets/prj1.png'
import prj2 from '../assets/prj2.png'
import prj3 from '../assets/prj3.png'


const Project = () => {
  return (
    <div className='py-6 max-w-[1200px] mx-auto'>
        <div className='mx-auto px-4 md:px-8'>
            <div className='mb-4 flex items-center justify-between hap-8'>
                <div className='flex flex-col gap-4'>
                    <span className='text-3xl font-semibold mx-8'>My Projects</span>
                    <p className='text-gray-500 mx-8'>
                        * Created a frontend design similar to Youtube using ReactJs.
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 mx-8'>

                <a href="/" className='group h-48 overflow-hideen rounded-lg shadow-lg md:h-80'>
                    <img src={prj2} alt="" className='h-full w-full object-cover object-center transition
                                                      duration-200 group-hover:scale-110'/>
                </a>
                <a href="/" className='group h-48 overflow-hideen rounded-lg shadow-lg md:col-span-2 md:h-80'>
                    <img src={prj1} alt="" className='h-full w-full object-cover object-center transition
                                                      duration-200 group-hover:scale-110'/>
                </a>
                <a href="/" className='group h-48 overflow-hideen rounded-lg shadow-lg md:col-span-2 md:h-80'>
                    <img src={prj3} alt="" className='h-full w-full object-cover object-center transition
                                                      duration-200 group-hover:scale-110'/>
                </a>
            </div>
        </div>



    </div>
  )
}

export default Project