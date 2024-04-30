import React from 'react'
import { Link } from 'react-router-dom'

function Tokenization() {
  return (
    <div>
        <div className='lg:mt-24 mt-12  p-4' >
        <div className='w-full lg:mb-5 mb-10 justify-start items-center'>
        <Link to='/publishUser'>
        <button className=" m-2 items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
             GO BACK
            </button>
        </Link>
        </div> 
    <section className="bg-gray-900 rounded-xl">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">Tokenization Makes Investing In You More accessible</h1>
            <p className="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-gray-400">Your Ask Amount of 20 Lakh Rs will in converted into 1000 Tokens each worth 2000 Rs , which makes It more accessible</p>
            <div className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4  focus:ring-primary-900">
                Get started
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
            <button href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                Apply
            </button> 
        </div>
        <div className="lg:mt-0 flex m-6 justify-center items-center lg:col-span-5 rounded-2xl lg:flex">
            <img src="https://media.tenor.com/qshBbodG94sAAAAM/swiss-salary-swiss-salary-ltd.gif" alt="mockup" />
        </div>                
    </div>
</section>
</div>
    </div>
  )
}

export default Tokenization