import React from 'react'
import profileimg from '../assets/prfimg.jpg'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import {TypeAnimation} from 'react-type-animation'

const Hero = () => {
  return (
    <div>
        <div className='bg-white max-w-[1200px] h-[83vh] mx-auto flex flex-col-reverse sm:flex-row
                        justify-center align-center'>

        <div className='text-8xl'>
            Text
        </div>

        <div className='my-auto'>
            <img className='w-[300px] sm:w-[500px] mx-auto h-auto' src={profileimg} alt='Profile Picture'/>
        </div>

        </div>
    </div>
  )
}

export default Hero