import React from 'react'
import { Link } from 'react-router-dom';

function Collection() {
  return (
    <div className='lg:mt-24 mt-10'>
        
        <Link to='/'>
        <button className="inline-flex m-2  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
             GO BACK
            </button>
        </Link>
        <h1 className='text-transparent m-3 bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-5xl pt-8 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px]:text-7xl  sm:text-6xl'>
            Connected Accounts
        </h1>
    <div className="lg:scale-90 md:scale-75 p-4">
      <div className="container hover:scale-105 transition-all duration-500 hover:shadow-2xl m-16  animated-background  bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-300 rounded-3xl  mx-auto py-8">
        <div className="grid justify-center items-center grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-slate-800 shadow rounded-lg p-3">
              <div className="flex flex-col items-center">
                <img src="https://avatars.githubusercontent.com/u/80953200?v=4" className="w-32 h-32 bg-gray-300 rounded-full mb-2 shrink-0" alt="John Doe" />
                <h1 className="text-xl text-white font-bold">Anshul Kyashap</h1>
                <p className="text-white">Investor</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Up-Vote</a>
                  <a href="#" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Remove</a>
                </div>
              </div>
              <hr className="my-3 border-t border-gray-300" />
              <div className="flex p-2 justify-around items-center">
                <span className="text-white text-center uppercase font-bold tracking-wider">Find Me At</span>
                <div className='flex justify-between items-center'>
                  <div className='px-4'>
                <a className="text-white hover:text-indigo-300" aria-label="Visit TrendyMinds Instagram" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                    <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                    </path>
                  </svg>
                </a>
                </div>
                <a className="text-white hover:text-sky-600" aria-label="Visit TrendyMinds LinkedIn" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-6">
                    <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                    </path>
                  </svg>
                </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-slate-800 shadow rounded-lg max-h-96 overflow-y-auto p-6">
                <h1 className='font-itim text-xl text-white'>Latest Posts By Anshul</h1>
                <div className='bg-white p-2 my-4 rounded-lg'>
            <h2 className="text-xl  font-bold mt-6 mb-4">Excited for new Startups</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description :- </span>
                  <p>
                    <span className="text-gray-700">3 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                As a tech enthusiast, I'm eagerly awaiting the next wave of startups. The innovation and potential in new ventures inspire me to explore investment opportunities that can reshape industries and drive societal change.
                </p>
              </div>
              </div>
              <div className='bg-white p-2 my-4 rounded-lg'>
              <h2 className="text-xl font-bold mt-6 mb-4">My Goal</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">1 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                Investing in startups isn't just about potential returns; it's about supporting groundbreaking ideas. I'm looking forward to discovering new ventures that align with my passion for sustainability and tech innovation.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container hover:scale-105 transition-all duration-500 hover:shadow-2xl m-16  animated-background  bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-300 rounded-3xl  mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-slate-800 shadow rounded-lg p-3">
              <div className="flex flex-col items-center">
                <img src="https://avatars.githubusercontent.com/u/144758360?v=4" className="w-32 h-32 bg-gray-300 rounded-full mb-2 shrink-0" alt="John Doe" />
                <h1 className="text-xl text-white font-bold">Shubham Thakur</h1>
                <p className="text-white">Investor</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Up-Vote</a>
                  <a href="#" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Remove</a>
                </div>
              </div>
              <hr className="my-3 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-white w-full text-center uppercase font-bold tracking-wider">Find Me At</span>
              <div className="flex justify-center items-center lg:gap-6   sm:gap-2 gap-6  my-4">

                <a className="text-white hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                    </path>
                  </svg>
                </a>
                <a className="text-white hover:text-blue-500" aria-label="Visit TrendyMinds Facebook" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                    <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                    </path>
                  </svg>
                </a>

                <a className="text-white hover:text-indigo-400" aria-label="Visit TrendyMinds Twitter" href="#" target="_blank">
                  <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                  </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-slate-800 shadow rounded-lg max-h-96 overflow-y-auto p-6">
                <h1 className='font-itim text-xl text-white'>Latest Posts By Shubham</h1>
                <div className='bg-white p-2 my-4 rounded-lg'>
            <h2 className="text-xl  font-bold mt-6 mb-4">Innovation</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">7 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                Innovation fuels my excitement for new startups. I'm keeping a keen eye out for disruptive technologies that promise to redefine industries. Ready to invest in ideas that push boundaries and create value.
                </p>
              </div>
              </div>
              <div className='bg-white p-2 my-4 rounded-lg'>
              <h2 className="text-xl font-bold mt-6 mb-4">Vision</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">4 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                As an investor, I thrive on discovering promising startups. Each new venture brings the potential for growth and impact. I'm eagerly anticipating opportunities to back innovative ideas that can transform markets.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container hover:scale-105 transition-all duration-500 hover:shadow-2xl m-16  animated-background  bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-300 rounded-3xl  mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-slate-800 shadow rounded-lg p-3">
              <div className="flex flex-col items-center">
                <img src="https://avatars.githubusercontent.com/u/37077407?v=4" className="w-32 h-32 bg-gray-300 rounded-full mb-2 shrink-0" alt="John Doe" />
                <h1 className="text-xl text-white font-bold">Diwanshu</h1>
                <p className="text-white">Investor</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Up-Vote</a>
                  <a href="#" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Remove</a>
                </div>
              </div>
              <hr className="my-3 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-white w-full text-center uppercase font-bold tracking-wider">Find Me At</span>
              <div className="flex justify-center items-center lg:gap-6   sm:gap-2 gap-6  my-4">

                <a className="text-white hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                    </path>
                  </svg>
                </a>
                <a className="text-white hover:text-blue-500" aria-label="Visit TrendyMinds Facebook" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                    <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                    </path>
                  </svg>
                </a>

                <a className="text-white hover:text-indigo-400" aria-label="Visit TrendyMinds Twitter" href="#" target="_blank">
                  <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                  </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-slate-800 shadow rounded-lg max-h-96 overflow-y-auto p-6">
                <h1 className='font-itim text-xl text-white'>Latest Posts By Diwanshu</h1>
                <div className='bg-white p-2 my-4 rounded-lg'>
            <h2 className="text-xl  font-bold mt-6 mb-4">Eco System</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">13 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                The startup ecosystem is where dreams meet reality. I'm eagerly waiting for the next big idea that could revolutionize how we live and work. Excited to invest in startups that are poised to make a difference.
                </p>
              </div>
              </div>
              <div className='bg-white p-2 my-4 rounded-lg'>
              <h2 className="text-xl font-bold mt-6 mb-4">Topic</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Why I Invest</span>
                  <p>
                    <span className="text-gray-700">10 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                Investing in startups is about more than just financial gain; it's about supporting visionary founders. I'm enthusiastic about upcoming opportunities to invest in innovative startups that align with my values.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container hover:scale-105 transition-all duration-500 hover:shadow-2xl m-16  animated-background  bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-300 rounded-3xl  mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-slate-800 shadow rounded-lg p-3">
              <div className="flex flex-col items-center">
                <img src="https://avatars.githubusercontent.com/u/144793835?v=4" className="w-32 h-32 bg-gray-300 rounded-full mb-2 shrink-0" alt="John Doe" />
                <h1 className="text-xl text-white font-bold">Swasti</h1>
                <p className="text-white">Investor</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Up-Vote</a>
                  <a href="#" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Remove</a>
                </div>
              </div>
              <hr className="my-3 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-white w-full text-center uppercase font-bold tracking-wider">Find Me At</span>
              <div className="flex justify-center items-center lg:gap-6   sm:gap-2 gap-6  my-4">

                <a className="text-white hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                    </path>
                  </svg>
                </a>
                <a className="text-white hover:text-blue-500" aria-label="Visit TrendyMinds Facebook" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                    <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                    </path>
                  </svg>
                </a>

                <a className="text-white hover:text-indigo-400" aria-label="Visit TrendyMinds Twitter" href="#" target="_blank">
                  <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                  </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-slate-800 shadow rounded-lg max-h-96 overflow-y-auto p-6">
                <h1 className='font-itim text-xl text-white'>Latest Posts By Swasti</h1>
                <div className='bg-white p-2 my-4 rounded-lg'>
            <h2 className="text-xl  font-bold mt-6 mb-4">My Believe</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">15 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                I believe in the power of startups to drive innovation and change. Excitedly waiting for new ventures that challenge the status quo and offer compelling investment opportunities in emerging industries.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container hover:scale-105 transition-all duration-500 hover:shadow-2xl m-16  animated-background  bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-300 rounded-3xl  mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-slate-800 shadow rounded-lg p-3">
              <div className="flex flex-col items-center">
                <img src="https://avatars.githubusercontent.com/u/144683235?v=4" className="w-32 h-32 bg-gray-300 rounded-full mb-2 shrink-0" alt="John Doe" />
                <h1 className="text-xl text-white font-bold">Ananya Tewari</h1>
                <p className="text-white">Investor</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Up-Vote</a>
                  <a href="#" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Remove</a>
                </div>
              </div>
              <hr className="my-3 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-white w-full text-center uppercase font-bold tracking-wider">Find Me At</span>
              <div className="flex justify-center items-center lg:gap-6   sm:gap-2 gap-6  my-4">

                <a className="text-white hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                    </path>
                  </svg>
                </a>
                <a className="text-white hover:text-blue-500" aria-label="Visit TrendyMinds Facebook" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                    <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                    </path>
                  </svg>
                </a>

                <a className="text-white hover:text-indigo-400" aria-label="Visit TrendyMinds Twitter" href="#" target="_blank">
                  <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                  </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-slate-800 shadow rounded-lg max-h-96 overflow-y-auto p-6">
                <h1 className='font-itim text-xl text-white'>Latest Posts By Ananya</h1>
                <div className='bg-white p-2 my-4 rounded-lg'>
            <h2 className="text-xl  font-bold mt-6 mb-4">Reality</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">18 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                The startup scene is a breeding ground for creativity and disruption. I'm eagerly anticipating new ventures that could redefine markets and create meaningful impact. Ready to invest in bold ideas with potential.
                </p>
              </div>
              </div>
              <div className='bg-white p-2 my-4 rounded-lg'>
              <h2 className="text-xl font-bold mt-6 mb-4">What I see</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">16 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                "As an investor, I'm always on the lookout for promising startups. I'm excited about the potential of new ventures to transform industries and solve complex challenges. Looking forward to investing in innovation."
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container hover:scale-105 transition-all duration-500 hover:shadow-2xl m-16  animated-background  bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-300 rounded-3xl  mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-slate-800 shadow rounded-lg p-3">
              <div className="flex flex-col items-center">
                <img src="https://avatars.githubusercontent.com/u/144687484?v=4" className="w-32 h-32 bg-gray-300 rounded-full mb-2 shrink-0" alt="John Doe" />
                <h1 className="text-xl text-white font-bold">Abhinandan Gupta</h1>
                <p className="text-white">Investor</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Up-Vote</a>
                  <a href="#" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Remove</a>
                </div>
              </div>
              <hr className="my-3 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-white w-full text-center uppercase font-bold tracking-wider">Find Me At</span>
              <div className="flex justify-center items-center lg:gap-6   sm:gap-2 gap-6  my-4">

                <a className="text-white hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                    </path>
                  </svg>
                </a>
                <a className="text-white hover:text-blue-500" aria-label="Visit TrendyMinds Facebook" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                    <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                    </path>
                  </svg>
                </a>

                <a className="text-white hover:text-indigo-400" aria-label="Visit TrendyMinds Twitter" href="#" target="_blank">
                  <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                  </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-slate-800 shadow rounded-lg max-h-96 overflow-y-auto p-6">
                <h1 className='font-itim text-xl text-white'>Latest Posts By Abhinandan</h1>
                <div className='bg-white p-2 my-4 rounded-lg'>
            <h2 className="text-xl  font-bold mt-6 mb-4">Why I Invest</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">20 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                Investing in startups fuels my passion for entrepreneurship and innovation. I'm eagerly awaiting the next wave of promising ventures that could disrupt industries and deliver substantial returns.
                </p>
              </div>
              </div>
              <div className='bg-white p-2 my-4 rounded-lg'>
              <h2 className="text-xl font-bold mt-6 mb-4">My Promise</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">19 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                Supporting startups is about backing visionary ideas that can make a difference. I'm excitedly waiting for new opportunities to invest in innovative ventures that align with my interests and values..
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container hover:scale-105 transition-all duration-500 hover:shadow-2xl m-16  animated-background  bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-300 rounded-3xl  mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-slate-800 shadow rounded-lg p-3">
              <div className="flex flex-col items-center">
                <img src="https://avatars.githubusercontent.com/u/134442940?v=4" className="w-32 h-32 bg-gray-300 rounded-full mb-2 shrink-0" alt="John Doe" />
                <h1 className="text-xl text-white font-bold">Aman Agarwal</h1>
                <p className="text-white">Investor</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Up-Vote</a>
                  <a href="#" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Remove</a>
                </div>
              </div>
              <hr className="my-3 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-white w-full text-center uppercase font-bold tracking-wider">Find Me At</span>
              <div className="flex justify-center items-center lg:gap-6   sm:gap-2 gap-6  my-4">

                <a className="text-white hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                    </path>
                  </svg>
                </a>
                <a className="text-white hover:text-blue-500" aria-label="Visit TrendyMinds Facebook" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                    <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                    </path>
                  </svg>
                </a>

                <a className="text-white hover:text-indigo-400" aria-label="Visit TrendyMinds Twitter" href="#" target="_blank">
                  <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                  </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-slate-800 shadow rounded-lg max-h-96 overflow-y-auto p-6">
                <h1 className='font-itim text-xl text-white'>Latest Posts By Aman</h1>
                <div className='bg-white p-2 my-4 rounded-lg'>
            <h2 className="text-xl  font-bold mt-6 mb-4">Potential</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">15 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                The startup ecosystem is dynamic and full of potential. I'm eagerly anticipating the next big thing in tech and beyond. Ready to invest in startups that demonstrate vision, resilience, and transformative potential.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container hover:scale-105 transition-all duration-500 hover:shadow-2xl m-16  animated-background  bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-300 rounded-3xl  mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-slate-800 shadow rounded-lg p-3">
              <div className="flex flex-col items-center">
                <img src="https://avatars.githubusercontent.com/u/143877487?v=4" className="w-32 h-32 bg-gray-300 rounded-full mb-2 shrink-0" alt="John Doe" />
                <h1 className="text-xl text-white font-bold">Sarthak Gupta</h1>
                <p className="text-white">Investor</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Up-Vote</a>
                  <a href="#" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Remove</a>
                </div>
              </div>
              <hr className="my-3 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-white w-full text-center uppercase font-bold tracking-wider">Find Me At</span>
              <div className="flex justify-center items-center lg:gap-6   sm:gap-2 gap-6  my-4">

                <a className="text-white hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                    </path>
                  </svg>
                </a>
                <a className="text-white hover:text-blue-500" aria-label="Visit TrendyMinds Facebook" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                    <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                    </path>
                  </svg>
                </a>

                <a className="text-white hover:text-indigo-400" aria-label="Visit TrendyMinds Twitter" href="#" target="_blank">
                  <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                  </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-slate-800 shadow rounded-lg max-h-96 overflow-y-auto p-6">
                <h1 className='font-itim text-xl text-white'>Latest Posts By Sarthak</h1>
                <div className='bg-white p-2 my-4 rounded-lg'>
            <h2 className="text-xl  font-bold mt-6 mb-4">Start Up World</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">14 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                Discovering new startups is like uncovering hidden gems. I'm eagerly awaiting innovative ideas that can change the game in tech and beyond. Excited to invest in ventures that lead with vision and purpose.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container hover:scale-105 transition-all duration-500 hover:shadow-2xl m-16  animated-background  bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-300 rounded-3xl  mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-slate-800 shadow rounded-lg p-3">
              <div className="flex flex-col items-center">
                <img src="https://avatars.githubusercontent.com/u/138446502?s=400&u=5348ca71e02a192b105d8e1f13e3e8fbefa913d1&v=4" className="w-32 h-32 bg-gray-300 rounded-full mb-2 shrink-0" alt="John Doe" />
                <h1 className="text-xl text-white font-bold">Satyam Sharma</h1>
                <p className="text-white">Investor</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Up-Vote</a>
                  <a href="#" className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Remove</a>
                </div>
              </div>
              <hr className="my-3 border-t border-gray-300" />
              <div className="flex flex-col">
                <span className="text-white w-full text-center uppercase font-bold tracking-wider">Find Me At</span>
              <div className="flex justify-center items-center lg:gap-6   sm:gap-2 gap-6  my-4">

                <a className="text-white hover:text-orange-600" aria-label="Visit TrendyMinds YouTube" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-6">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                    </path>
                  </svg>
                </a>
                <a className="text-white hover:text-blue-500" aria-label="Visit TrendyMinds Facebook" href="#" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="h-6">
                    <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                    </path>
                  </svg>
                </a>

                <a className="text-white hover:text-indigo-400" aria-label="Visit TrendyMinds Twitter" href="#" target="_blank">
                  <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                    </path>
                  </svg>
                </a>
              </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-slate-800 shadow rounded-lg max-h-96 overflow-y-auto p-6">
                <h1 className='font-itim text-xl text-white'>Latest Posts By Satyam</h1>
                <div className='bg-white p-2 my-4 rounded-lg'>
            <h2 className="text-xl  font-bold mt-6 mb-4">It's Thrilling</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">14 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                The thrill of discovering new startups fuels my investment journey. I'm excitedly waiting for ventures that blend creativity with market potential. Ready to back founders who dare to innovate.
                </p>
              </div>
              </div>
              <div className='bg-white p-2 my-4 rounded-lg'>
              <h2 className="text-xl font-bold mt-6 mb-4">My Support</h2>
              <div className="mb-6">
                <div className="flex justify-between flex-wrap gap-2 w-full">
                  <span className="text-gray-700 font-bold">Description</span>
                  <p>
                    <span className="text-gray-700">23 June - 2024</span>
                  </p>
                </div>
                <p className="mt-2">
                Supporting startups is about more than financial returns—it's about fostering innovation and progress. I'm eagerly anticipating opportunities to invest in ventures that can solve pressing global challenges.
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    
  );
}

export default Collection