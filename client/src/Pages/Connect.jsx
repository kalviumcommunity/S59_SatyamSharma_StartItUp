import React, { useState } from 'react'
import '../index.css'
import leftWing from '../assets/left.png'
import rightWing from '../assets/right.png'
import { Link } from 'react-router-dom'


function ProfileCard() {

    const [open,setopen]=useState(false);


const handleClick=()=>{
    setopen(!open);
}

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
                <img src={leftWing} className='p-1 lg:w-48 w-16' alt="right wind" />
            <div>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-slate-100 from-sky-200 w-36 lg:w-full text-4xl pt-8 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px]:text-7xl  sm:text-6xl '>
                Connect With Us
            </h1>
            </div>
            <img src={rightWing} alt="right wing" className='p-1 lg:w-48 w-16'  />
            </div>
            <div className='w-full flex justify-center items-center fixed z-50 top-2/3'>
                
                    <button onClick={()=>handleClick()} class="play-btn"></button>       
            </div>
            {open?
            <div className='text-white  w-full flex justify-around items-center fixed z-50 mt-20 top-2/3'>
            <Link to='investorsPro'> <div className='bg-blue-700 p-1 rounded-md text-sm lg:text-2xl' >Investor</div> </Link>
            <Link to='founderPro'> <div className='bg-blue-700 p-1 rounded-md text-sm lg:text-2xl'>Founders</div></Link>
            </div>:null}
		</div>
  )
}

export default ProfileCard