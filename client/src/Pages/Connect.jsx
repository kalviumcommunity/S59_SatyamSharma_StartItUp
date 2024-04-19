import React from 'react'
import '../index.css'
import leftWing from '../assets/left.png'
import rightWing from '../assets/right.png'
import { Link } from 'react-router-dom'


function ProfileCard() {
  return (
		<div>
            <div class="area" >
			<ul class="circles">
				<li className='text-white text-center flex justify-center items-center p-1'>
                    <span>Invest</span>
                    </li>
				<li></li>
				<li></li>
				<li className='text-white text-center flex justify-center items-center p-1'>
                    <span>Stream
                    </span>
                    </li>
				<li></li>
				<li></li>
				<li className='text-white text-4xl text-center flex justify-center items-center p-4'>
                    <span>Start-It Up</span>
                    </li>
				<li></li>
				<li></li>
				<li className='text-white text-3xl text-center flex justify-center items-center p-2'>
                    <span>Connect Invest Publish</span>
                    </li>   
			</ul>
            </div>
            <div className='w-full bg-transparent fixed  h-full  flex justify-center items-center'>
                <img src={leftWing} className='p-1 w-48' alt="right wind" />
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-slate-100 from-sky-200 text-6xl pt-8 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px]:text-7xl  sm:text-6xl '>
                Connect With Us
            </h1>
            <img src={rightWing} alt="right wing" className='p-1 w-48'  />
            </div>
            <div className='w-full flex justify-center items-center fixed z-50 top-2/3'>
                <Link to='investorsPro'><button class="play-btn"></button></Link>
            </div>
		</div>
  )
}

export default ProfileCard