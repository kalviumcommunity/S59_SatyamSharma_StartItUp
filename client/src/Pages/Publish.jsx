import React, { useState } from 'react'
import ham from '../assets/ham.png'
import cross from '../assets/cro.png'


function Publish() {
    const [isOpen, setIsOpen] = useState(false)
  return (
<div className=' bg-black w-full h-full lg:h-screen text-white flex justify-between flex-col lg:flex-row pt-20 lg:pt-0 items-center'>
      <div className='lg:hidden top-10 sm:top-20 left-2 z-30 absolute'>
      <button  onClick={() => setIsOpen(!isOpen)}>{isOpen?null:<img src={ham} alt="ham" className="sm:rounded-xl w-8 rounded-md"/>}</button>
      </div>
      <div className= {`bg-gradient-to-r from-slate-900 to-slate-800 lg:h-3/4 h-5/6 lg:flex sm:top-20  lg:items-center z-20 left-0 top-10 p-2  lg:flex-col rounded-lg lg:m-5 lg:mt-20 ${isOpen?"fixed":"hidden"}  `}>
      <button  onClick={() => setIsOpen(!isOpen)}>{isOpen?<img src={cross} alt="close" className="transform transition w-8 rounded-md"/>:null}</button>
        <div className='flex h-full items-center flex-col '>
        <button className='text-black bg-white p-2 font-itim  hover:scale-105 rounded m-2 sm:mt-6 w-32 mx-6'>Instructions</button>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-2 w-32 mx-6'>Investment</button>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-2 w-32 mx-6'>Tokenization</button>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-2 w-32 mx-6'>Category</button>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-2 w-32 mx-6'>Contact</button>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-2 w-32'>Request Box</button>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-2 w-32'>Add-On's</button>
        

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
    <div className="min-h-screen w-4/5   flex flex-col justify-center sm:py-12" >

	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4  bg-gradient-to-r from-slate-400 to-gray-600 shadow-lg sm:rounded-3xl sm:p-10">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className=" font-semibold font-itim text-4xl">Investor Profile</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative text-center">
							<input autocomplete="off" id="email" name="email" type="text" className="peer rounded-xl placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
							<label for="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
						</div>
						<div className="relative">
							<input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
                        <div className="relative">
							<input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
						</div>
                        <div className="relative">
							<input autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Profile Pic" />
							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Profile pic</label>
						</div>
						<div className="relative">
							<button className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

    </div>
  )
}

export default Publish