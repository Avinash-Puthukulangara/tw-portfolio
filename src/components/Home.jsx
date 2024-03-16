import React from 'react'
import profileimg from '../assets/prfimg.jpg'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import {TypeAnimation} from 'react-type-animation'

const Home = () => {
  return (
    <div>
        <div className='bg-white max-w-[1200px] h-[83vh] mx-auto flex flex-col-reverse sm:flex-row
                        justify-center align-center'>

        <div className='bg-blue-300 flex-col my-auto mx-auto'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-100'>Hi, I'm Avinash</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
              <TypeAnimation
                sequence={[
                  "Web Developer",1000,
                  "Frontend Developer",1000,
                ]}
                wrapper='span' speed={60} repeat={Infinity} />
            </h1>
            <div className='flex justify-center items-center'>
              <div className='text-5xl flex justify-start gap-16 my-6 text-cyan-950'>
                <AiFillGithub />
                <AiFillLinkedin />
                <AiFillInstagram />
              </div>
              
            </div>

        </div>

        <div className='my-auto'>
            <img className='w-[300px] sm:w-[500px] mx-auto h-auto' src={profileimg} alt='Profile Picture'/>
        </div>

        </div>
    </div>
  )
}

export default Home