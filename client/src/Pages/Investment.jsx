import {React} from 'react'
import { Link } from 'react-router-dom'

function Investment() {
  return (
    <div className='sm:mt-24 mt-10 p-2 flex flex-col justify-center items-center'>
        <div className='w-full lg:mb-20 mb-10 justify-start items-center'>
        <Link to='/publishUser'>
        <button className=" m-2 items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
             GO BACK
            </button>
        </Link>
        </div> 
        <section className="bg-gray-900 w-4/5  rounded-xl">    
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-4">
        <Link to='/'>
        <div className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm   rounded-full bg-gray-800 text-white  hover:bg-gray-700" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white bg-blue-700 px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium"><span className='hidden md:block'>Start-It-Up gives you platform for Investment</span>
            <span className='md:hidden block'>Invest With Us</span> </span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </div>
        </Link> 
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none  md:text-5xl lg:text-6xl text-white">We believe in your potential</h1>
        <p className="mb-8 text-lg font-normal  lg:text-xl sm:px-16 xl:px-48 text-gray-400">Here at Start-It-Up we focus on startups where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4  focus:ring-primary-900">
                Let's Do It
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </div>
            <Link to="InvestmentDetails">
            <div className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center  rounded-lg border   text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800">
                Start 
            </div>
            </Link>  
        </div>
    </div>
</section>
    </div>
  )
}

export default Investment