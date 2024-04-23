import React from 'react'
import { Link } from 'react-router-dom'

function InvestorPro() {
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
          Investors
      </h1>
        
    <div className="gap-6 m-4  flex-wrap  flex items-center justify-center">
      <div className="bg-gray-100 lg:m-10 mt-5   dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group w-72 lg:w-80 rounded-xl p-2 lg:p-5 transition-all duration-500 transform">
        <div className="flex items-center gap-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2reAyRUbEOfvgWkva6jlWBkwkTvfB0vfAw&s"
            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            alt="profile picture" />
          <div className="w-40 lg:w-fit transition-all transform duration-500">
            <h1 className="text-gray-600 dark:text-gray-200 font-bold">
              Amupan Muttal
            </h1>
            <p className="text-gray-400 text-sm">5M Connect<br/> 4.5 &#9733; </p>
            <a
              className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
              Founder of Shadi.com
            </a>
          </div>
          
        </div>
      
        <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
          
          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
            <button className='text-xs font-itim'>Connect</button>
          </div>
          
        </div>
        
      </div>
      <div className="bg-gray-100 lg:m-10 mt-5    dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group w-72 lg:w-80 lg:p-5 rounded-xl p-2 transition-all duration-500 transform">
        <div className="flex items-center gap-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY2reAyRUbEOfvgWkva6jlWBkwkTvfB0vfAw&s"
            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            alt="profile picture" />
          <div className="w-40 lg:w-fit transition-all transform duration-500">
            <h1 className="text-gray-600 dark:text-gray-200 font-bold">
              Amupan Muttal
            </h1>
            <p className="text-gray-400 text-sm">5M Connect<br/> 4.5 &#9733; </p>
            <a
              className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
              Founder of Shadi.com
            </a>
          </div>
          
        </div>
      
        <div className="absolute group-hover:bottom-1 delay-300 -bottom-16 transition-all duration-500 bg-gray-600 dark:bg-gray-100 right-1 rounded-lg">
          
          <div className="flex justify-evenly items-center gap-2 p-1 text-2xl text-white dark:text-gray-600">
            <span className='text-xs font-itim'>Connect</span>
          </div>
          
        </div>
        
      </div>

      
    </div>

    

    
        </div>
  )
}

export default InvestorPro