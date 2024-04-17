import React, { useState } from 'react'
import slidshow from '../assets/slidshow.gif'
import ham from '../assets/ham.png'
import cross from '../assets/cro.png'
import { Link } from 'react-router-dom';

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=' bg-black w-full h-full lg:h-screen text-white flex justify-between flex-col lg:flex-row pt-20 lg:pt-0 items-center'>
      <div className='lg:hidden top-10 sm:top-20 left-2 z-30 absolute'>
      <button  onClick={() => setIsOpen(!isOpen)}>{isOpen?null:<img src={ham} alt="ham" className="sm:rounded-xl w-8 rounded-md"/>}</button>
      </div>
      <div className= {`bg-gradient-to-r from-slate-900 to-slate-800 lg:h-3/4 h-4/5 lg:flex sm:top-20  lg:items-center z-20 left-0 top-10 p-2  lg:flex-col rounded-lg lg:m-5 lg:mt-20 ${isOpen?"fixed":"hidden"}  `}>
      <button  onClick={() => setIsOpen(!isOpen)}>{isOpen?<img src={cross} alt="close" className="transform transition w-8 rounded-md"/>:null}</button>
        <div className='flex h-full items-center flex-col '>
          <Link to='/feedback'>
        <button className='text-black bg-white p-2 font-itim  hover:scale-105 rounded m-3 w-32 mx-6'>Feedback</button>
        </Link>
        <Link to='/trending'>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-3 w-32 mx-6'>Trending</button>
        </Link>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-3 w-32 mx-6'>Connect</button>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-3 w-32 mx-6'>Investor</button>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-3 w-32 mx-6'>Strike</button>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-3 w-32 mx-6'>New</button>
        

        {isOpen?
        <div className='bottom-5 absolute'>
        <button className='bg-gradient-to-r from-pink-500 to-rose-500 p-2 font-itim font-semibold  hover:scale-105 rounded '>Report Issue</button>
        </div>:null}
        </div>
        {isOpen?null:
        <div>
        <button className='bg-gradient-to-r from-pink-500 to-rose-500 p-2 font-itim font-semibold  hover:scale-105 rounded lg:m-6'>Report Issue</button>
        </div>
}

      </div>

      <div className='p-1 lg:w-1/2 text-center flex flex-col justify-center items-center font-caveat'>
        <div>
        <h1 className='p-1 xl:text-9xl text-6xl lg:mt-12 lg:mb-5 mb-3 lg:text-7xl  font-itim'>Start It Up</h1>
        </div>
        <div className='text-2xl lg:mb-8 mb-4'>
        Your ultimate destination for all startup things
        </div>
        <div className='p-1 w-4/5 text-sm font-itim'>
        Whether you're an aspiring entrepreneur seeking guidance, an investor hunting for promising ventures, or simply passionate about the world of startups, we've got you covered. Dive into insightful articles , pitches , expert advice, and engaging discussions to fuel your entrepreneurial spirit.
        </div>
        <Link to="/streaming">
        <div className='text-3xl lg:mt-10 mt-6 p-3  hover:scale-105 bg-gradient-to-r from-blue-600 font-itim to-violet-600 rounded-xl'>
          Start Streaming
        </div>
        </Link>
      </div>
      <div className='p-1 flex flex-col h-3/4 justify-between lg:mt-9  items-center text-center'>
      <div className='lg:mt-20 mt-10 flex w-full items-center justify-center'>
      <img src={slidshow} alt="SideShow" className="scale-110  transform transition w-3/4  lg:w-4/5 sm:rounded-xl rounded-md"/>
      </div>
      <Link to='/publishUser'>
      <div className='text-2xl mt-10 p-3 font-itim   hover:scale-105 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl'>
          Publish Content
        </div>
      </Link>
        
        <Link to='/verifiedUser'>
        <div className='text-2xl mt-10 p-3 lg:mb-0 mb-16  hover:scale-105 font-itim bg-gradient-to-r  from-cyan-600 to-blue-600 rounded-xl'>
          Verified Investor
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Home