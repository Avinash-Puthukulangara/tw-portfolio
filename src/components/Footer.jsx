import React from 'react'
import {FaGithubSquare, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-12 w-max-[800px] border-gray-500 text-center'>
        <hr class="my-3 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
        <div className='inline-flex text-gray-500 gap-4 text-3xl'>
          <a href="https://github.com/Avinash-Puthukulangara"><FaGithubSquare/></a>
          <a href="https://www.linkedin.com/in/aviputhukulangara/"><FaInstagram/></a>
        </div>
    </div>
  )
}

export default Footer