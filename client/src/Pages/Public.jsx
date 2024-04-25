import React from 'react'
import { Link } from 'react-router-dom'

function Public() {
  return (
    <div>
        
        <div className=" lg:mt-28 mt-8 flex justify-center  items-center flex-col">
            <div className='w-full    justify-start items-start'>
        <Link to='/'>
        <button className="inline-flex m-3  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
             GO BACK
            </button> 
        </Link>
        </div>
        <h1 className='text-transparent m-8 bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-5xl pt-2 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px]:text-7xl  sm:text-6xl '>
          Public Connect
        </h1>
        <div className='m-10'>
	<div className="container max-w-4xl text-white m-10 px-5 lg:px-10 hover:scale-105 transition-all  duration-300 py-6 mx-auto rounded-xl shadow-inner bg-gray-800">
		<div className="flex items-center justify-between">
			<span className="text-sm text-gray-100">Jun 1, 2020</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-600 hover:bg-violet-700 dark:text-gray-50">Up Vote</a>
		</div>
		<div className="mt-3 lg:max-h-36 max-h-72 overflow-y-auto bg-gray-900 p-4 rounded-2xl shadow-2xl">
			<h1 className="text-2xl font-bold">Nos creasse pendere crescit angelos etc</h1>
			<p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
        <button className="inline-flex m-2  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
             Strike
            </button>			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline text-gray-100">My User</span>
				</a>
			</div>
		</div>
	</div>
    <div className="container max-w-4xl text-white m-10 px-5 lg:px-10 hover:scale-105 transition-all  duration-300 py-6 mx-auto rounded-xl shadow-sm bg-gray-800">
		<div className="flex items-center justify-between">
			<span className="text-sm text-gray-100">Jun 1, 2020</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-600 hover:bg-violet-700 dark:text-gray-50">Up Vote</a>
		</div>
		<div className="mt-3 lg:max-h-36 max-h-72 overflow-y-auto bg-gray-900 p-4 rounded-2xl shadow-2xl">
			<h1 className="text-2xl font-bold">Nos creasse pendere crescit angelos etc</h1>
			<p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.</p>
		</div>
		<div className="flex items-center justify-between mt-4">
        <button className="inline-flex m-2  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
             Strike
            </button>			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline text-gray-100">My User</span>
				</a>
			</div>
		</div>
	</div>
    </div>
</div>
    </div>
  )
}

export default Public