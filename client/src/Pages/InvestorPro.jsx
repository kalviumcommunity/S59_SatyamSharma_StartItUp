import React from 'react'

function InvestorPro() {
  return (
    <div className='h-full w-full bg-black flex-wrap flex justify-center items-center'>
        
    <div className="gap-6 m-24 flex items-center justify-center">
      <div className="bg-gray-100 dark:bg-gray-700 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
        <div className="flex items-center gap-4">
          <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
            alt="profile picture" />
          <div className="w-fit transition-all transform duration-500">
            <h1 className="text-gray-600 dark:text-gray-200 font-bold">
              Mary Phiri
            </h1>
            <p className="text-gray-400">Senior Developer</p>
            <a
              className="text-xs text-gray-500 dark:text-gray-200 group-hover:opacity-100 opacity-0 transform transition-all delay-300 duration-500">
              mary@gmail.com
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