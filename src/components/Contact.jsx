import React from 'react'
import eml from '../assets/email.png'

const Contact = () => {
  return (
    <div className='flex justify-center my-5 h-full sm:h-[70vh] items-center'>
        <div className='max-w-[1200px] mx-auto'>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2'>

                    <div className='p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-around'>
                        <h1 className='text-4xl sm:text-5xl text-white'>Contact Me</h1>
                        <p className='text-normal text-lg font-medium text-gray-400 mt-2'>
                            Let's Connect on Linkedin <br/>or Send an Email.</p> 

                        <div className='flex items-center mt-2 text-gray-400'>
                          <img src={eml} alt="" className='h-5'/>
                          <div className='ml-4 text-md tracking-wide w-30'>
                            <p>aviputhukulangara@gmail.com</p>
                          </div>
                        </div>
                    </div>

                    <form action="https://getform.io/f/wardkqxa" method='post' className='p-6 flex flex-col justify-center max-w-[700px]'>
                        <div className='flex flex-col'>
                            <input type="name" name="name" id="name" placeholder='Full Name' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white'/>
                        </div>
                        <div className='flex flex-col'>
                            <input type="email" name="email" id="email" placeholder='Email' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white'/>
                        </div>
                        <div className='flex flex-col'>
                            <textarea name="message" id="message" placeholder='Write Message Here...' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border-gray-700 text-white'/>
                        </div>
                        <button type='submit' className=' bg-primary-color py-3 px-6 text-white rounded-lg mt-3'>Submit</button>
                    </form>


                </div>
            </div>

        </div>

    </div>
  )
}

export default Contact