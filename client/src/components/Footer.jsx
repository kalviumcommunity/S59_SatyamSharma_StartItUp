import React from 'react'
import linked from '../assets/linkedIn.png'
import github from '../assets/githunLogo1.png'

function Footer() {
  return (
    <div className='text-white bg-opacity-70 flex items-center justify-between fixed bottom-0 w-full bg-black'>
        <div className='pl-1 text-xs sm:text-xl font-itim ml-4'>
            Made By :- Satyam
        </div>
        <div className='flex justify-center items-center'>
          <a href="https://github.com/Satyamsharmahp36" target='_blank'>
            <img className='w-10 sm:w-10 hover:scale-110 transform transition' src={github} alt='GitHub' />
          </a>
          <a href="https://www.linkedin.com/in/satyam-sharma-a21041289/" target='_blank'>
            <img className='w-10 sm:w-10 hover:scale-110 transform transition' src={linked}  alt='LinkedIn' />
          </a>
        </div>
    </div>
  )
}

export default Footer