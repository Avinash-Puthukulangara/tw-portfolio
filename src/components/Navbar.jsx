
import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'



const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }

  return (
    <div className= 'text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-l'>

        <h1 className='text-3xl font-bold ml-4'>My Portfolio</h1>
        <ul className="hidden md:flex">
            <li className='p-7'><a href="#home">Home</a></li>
            <li className='p-7'><a href="#about">About</a></li>
            <li className='p-7'><a href="#projects">Projects</a></li>
            <li className='p-7'><a href="#contact">Contact</a></li>
        </ul>


        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={nav ? 'z-10 text-gray-400 fixed h-full left-0 top-0 w-[60%] border-r-gray-900 bg-[#202121] ease-in-out duration-500'                        
                            : 'fixed left-[-100%]'}>
            <h1 className='text-3xl text-white font-semibold top-10 ml-5 mt-7'>Avinash P</h1>
            <ul className="p-8 text-2xl">
            <li className='p-7'><a href="#home">Home</a></li>
            <li className='p-7'><a href="#about">About</a></li>
            <li className='p-7'><a href="#projects">Projects</a></li>
            <li className='p-7'><a href="#contact">Contact</a></li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar