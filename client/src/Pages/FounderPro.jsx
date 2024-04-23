import React, { useState } from 'react'
import linkedIn from '../assets/linkedIn.png'
import { Link } from 'react-router-dom';

function FounderPro() {

    const [founderopen,setfounderopen]= useState(false);
    const [founderDetails,setfounderDetails]= useState(false);


    const handleOpen=()=>{
        setfounderopen(!founderopen);
    }

    const handleDetails=()=>{
        setfounderDetails(!founderDetails);
    }

  return (
    <div className='h-full flex-col lg:pt-28 pt-10 w-full bg-black flex-wrap flex justify-center items-center'>
        <div className='flex justify-start items-center w-full'>
    
        <Link to='/Connect'>
        <button className="inline-flex m-2  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
             GO BACK
            </button>
        </Link>
        </div>
        <h1 className='text-transparent m-5 bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-5xl pt-8 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px]:text-7xl  sm:text-6xl '>
          Founders
        </h1>
    <div className='flex flex-wrap justify-center items-center lg:m-10 m-5'>
    <div className="max-w-sm m-5 bg-white border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:scale-105 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=' absolute lg:w-96  flex justify-center items-center  text-white'>

    {founderopen?<div className='bg-slate-600 m-7 p-3 flex flex-col justify-center items-center rounded-xl w-5/6'>
        <button onClick={()=>handleOpen()} className=" top-7 lg:right-8 right-7 absolute inline-flex m-1  items-center lg:px-2 p-0.5    lg:py-1 text-xs font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
            Close
            </button>
        <h1 className='text-2xl m-2 font-bold'>
            Work Out
            </h1>
        <div className='flex justify-center  items-center'>
            <img className='w-2/3 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2reAyRUbEOfvgWkva6jlWBkwkTvfB0vfAw&s" alt="" />
        </div>
        <h1 className='m-4'>
            Satyam Mittal
            </h1>
        <div className='overflow-y-auto bg-slate-700  text-center p-2 rounded-3xl h-28'>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, vel cupiditate dolor deleniti rerum in ab ipsum cumque officia fugiat!
        </div>
        <button className="items-center justify-around w-full  flex lg:px-3 p-1 lg:py-2 text-m font-medium text-center">
          <img src={linkedIn} alt="" className='w-10' />
          <img src={linkedIn} alt="" className='w-10' />
          <img src={linkedIn} alt="" className='w-10' />
        </button>


    </div>:null}
    {founderDetails?<div className='bg-slate-600 m-7 p-3 flex flex-col justify-center items-center rounded-xl w-5/6'>
        <button onClick={()=>handleDetails()} className=" top-7 lg:right-8 right-7 absolute inline-flex m-1  items-center lg:px-2 p-0.5   lg:py-1 text-xs font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
            Close
        </button>
        <h1 className='text-2xl m-2 font-bold'>
            Work Out
            </h1>
        <div className='overflow-y-auto text-center pt-12 bg-slate-700 w-full flex justify-center items-center  p-2 rounded-3xl h-64'>
            <div>
            <div className='text-sm my-2'> <span className='text-xl'>Valuation - </span> 54 lakh</div>
            <div className='text-sm my-2'> <span className='text-xl'>Sales Per Month- </span>4481,771</div>
            <div className='text-sm my-2'> <span className='text-xl'>Current Status - </span>Profitable</div>
            <div className='text-sm my-2'> <span className='text-xl'>Category - </span>Tech</div>
            <div className='text-sm my-2'> <span className='text-xl'>Investors - </span>Sdsb sducn skcn</div>
            <a href="https://www.shadi.com/" target='_blank'>
            <button className="inline-flex  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
            Visit Site
            </button>
            </a>

            </div>
        </div>
    </div>:null}
    </div>

    <div className='flex justify-center items-center text-center w-full'>
        
          <h5 className="text-3xl m-4 font-bold tracking-tight text-gray-900 dark:text-white">Work Fit</h5>
        </div>
      <div className='w-full justify-center items-center flex p-2'>
        <img className="rounded-xl w-4/5 h-1/2" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm91bmRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="founder Company Image " />
      </div>
      <div className="m-4 flex flex-col justify-center items-center ">
        <div className='flex m-2 justify-evenly w-full items-center'>
        <p className="text-gray-100 text-sm">5M+ Connect</p><br/>   
        <p className="text-gray-100 text-sm"> 4.5 &#9733; Ratings</p>
        </div>
        <div className="mb-3 text-center  h-16 overflow-y-auto font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology , We have created with tech world .</div>
        <div className='flex justify-between items-center w-full'>
        <button onClick={()=>handleOpen()} className="inline-flex  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-600">
          Founder
        </button>
        <button className="inline-flex  items-center lg:px-3 p-1 lg:py-2 text-m font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Connect
        </button>
        <button onClick={()=>handleDetails()} className="inline-flex  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-600">
          Details
        </button>
        </div>
      </div>
    </div>

    <div className="max-w-sm m-5 bg-white border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:scale-105 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=' absolute lg:w-96  flex justify-center items-center  text-white'>

    {founderopen?<div className='bg-slate-600 m-7 p-3 flex flex-col justify-center items-center rounded-xl w-5/6'>
        <button onClick={()=>handleOpen()} className=" top-7 lg:right-8 right-7 absolute inline-flex m-1  items-center lg:px-2 p-0.5    lg:py-1 text-xs font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
            Close
            </button>
        <h1 className='text-2xl m-2 font-bold'>
            Work Out
            </h1>
        <div className='flex justify-center  items-center'>
            <img className='w-2/3 rounded-xl' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2reAyRUbEOfvgWkva6jlWBkwkTvfB0vfAw&s" alt="" />
        </div>
        <h1 className='m-4'>
            Satyam Mittal
            </h1>
        <div className='overflow-y-auto bg-slate-700  text-center p-2 rounded-3xl h-28'>
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, vel cupiditate dolor deleniti rerum in ab ipsum cumque officia fugiat!
        </div>
        <button className="items-center justify-around w-full  flex lg:px-3 p-1 lg:py-2 text-m font-medium text-center">
          <img src={linkedIn} alt="" className='w-10' />
          <img src={linkedIn} alt="" className='w-10' />
          <img src={linkedIn} alt="" className='w-10' />
        </button>


    </div>:null}
    {founderDetails?<div className='bg-slate-600 m-7 p-3 flex flex-col justify-center items-center rounded-xl w-5/6'>
        <button onClick={()=>handleDetails()} className=" top-7 lg:right-8 right-7 absolute inline-flex m-1  items-center lg:px-2 p-0.5   lg:py-1 text-xs font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
            Close
        </button>
        <h1 className='text-2xl m-2 font-bold'>
            Work Out
            </h1>
        <div className='overflow-y-auto text-center pt-12 bg-slate-700 w-full flex justify-center items-center  p-2 rounded-3xl h-64'>
            <div>
            <div className='text-sm my-2'> <span className='text-xl'>Valuation - </span> 54 lakh</div>
            <div className='text-sm my-2'> <span className='text-xl'>Sales Per Month- </span>4481,771</div>
            <div className='text-sm my-2'> <span className='text-xl'>Current Status - </span>Profitable</div>
            <div className='text-sm my-2'> <span className='text-xl'>Category - </span>Tech</div>
            <div className='text-sm my-2'> <span className='text-xl'>Investors - </span>Sdsb sducn skcn</div>
            <a href="https://www.shadi.com/" target='_blank'>
            <button className="inline-flex  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
            Visit Site
            </button>
            </a>

            </div>
        </div>
    </div>:null}
    </div>

    <div className='flex justify-center items-center text-center w-full'>
        
          <h5 className="text-3xl m-4 font-bold tracking-tight text-gray-900 dark:text-white">Work Fit</h5>
        </div>
      <div className='w-full justify-center items-center flex p-2'>
        <img className="rounded-xl w-4/5 h-1/2" src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm91bmRlcnxlbnwwfHwwfHx8MA%3D%3D" alt="founder Company Image " />
      </div>
      <div className="m-4 flex flex-col justify-center items-center ">
        <div className='flex m-2 justify-evenly w-full items-center'>
        <p className="text-gray-100 text-sm">5M+ Connect</p><br/>   
        <p className="text-gray-100 text-sm"> 4.5 &#9733; Ratings</p>
        </div>
        <div className="mb-3 text-center  h-16 overflow-y-auto font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology , We have created with tech world .</div>
        <div className='flex justify-between items-center w-full'>
        <button onClick={()=>handleOpen()} className="inline-flex  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-600">
          Founder
        </button>
        <button className="inline-flex  items-center lg:px-3 p-1 lg:py-2 text-m font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Connect
        </button>
        <button onClick={()=>handleDetails()} className="inline-flex  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-600">
          Details
        </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default FounderPro