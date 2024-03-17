import React from 'react'

const About = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-auto' id='about'>
      <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6
      gap-12 px-10 max-w-6xl mx-auto'>
        
        <div>
          <div className='p-2'>
            <div className='text-gray-300 my-3'>
              <h3 className='text-4xl font-semibold mb-5'>About Me</h3>
              <p className='text-justify leading-7 w-11/12 mx-auto'>
                Hi, I'm Avinash P. As a passionate and driven individual, I am 
                eager to embark on a career in web development. Although new to the 
                field, I am committed to honing my craft by collaborating with 
                experienced professionals, staying updated on industry trends, and 
                continuously learning in a professional environment. With a keen eye
                for detail and a determination to succeed, I aim to apply my existing
                skills and contribute innovative, user-friendly web solutions as I 
                grow into this ever-evolving field.
              </p>
            </div>

          </div>
          
        </div>

      </div>
    </div>
  )
}

export default About