import React from 'react'
import {savefile} from 'file-saver'

import profileimg from '../assets/prfimg1.jpg'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai'
import {TypeAnimation} from 'react-type-animation'

const Home = () => {

      const onButtonClick = () => {
        const pdfUrl = "Avi.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Avinash P.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

  return (
    <div>
        <div className='max-w-[1200px] h-[83vh] mx-auto flex flex-col-reverse sm:flex-row
                        justify-center align-center' id='home'>

        <div className='flex-col my-auto mx-auto'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-100 my-1'>Hi, I'm Avinash </p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 my-2'>
              <TypeAnimation
                sequence={[
                  "Web Developer",1000,
                  "Web  Designer",1000,
                ]}
                wrapper='span' speed={60} repeat={Infinity} />
            </h1>
              <div className='text-5xl flex text-white justify-center gap-16 my-3 text--950'>
                 <a href="https://github.com/Avinash-Puthukulangara"><AiFillGithub /></a>
                 <a href="https://www.linkedin.com/in/aviputhukulangara/"><AiFillLinkedin/></a>
                 <a href="https://www.instagram.com/__._avi__.___nash/"><AiFillInstagram /></a>
              </div>
              <div className='relative inline-flex group my-3'>
                <div class='absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r
                from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100
                group-hover:-inset-1 group-hover:duration-200 animate-tilt'>
                </div>

                <a href="/" title='Download CV' role='button' onClick={onButtonClick}
                     class="w-[190px] h-[60px] relative items-center justify-center px-8 py-4
                     text-lg font-bold transition-all duration-200 bg-primary-color font-pj
                     rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                     Download CV</a>
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