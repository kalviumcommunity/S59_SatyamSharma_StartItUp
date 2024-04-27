import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div>
        
        <div className=" lg:mt-28 mt-8 flex justify-center  items-center flex-col">
            <div className='w-full justify-start items-start'>
        <Link to='/'>
        <button className="inline-flex m-3  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
             GO BACK
            </button> 
        </Link>
        </div>
        <h1 className='text-transparent m-8 bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-5xl pt-2 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px]:text-7xl  sm:text-6xl '>
          Admin Page
        </h1>
        <div className='m-10'>
	<div className="container max-w-4xl text-white m-10 px-5 lg:px-10 hover:scale-105 transition-all  duration-300 py-6 mx-auto rounded-xl shadow-inner bg-gray-800">
		<div className="flex items-center justify-between">
			<span className="text-sm text-gray-100">Jun 1, 2020</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-green-600 hover:bg-green-700 dark:text-gray-50">FeedBack</a>
		</div>
		<div className="mt-3 flex-col justify-center items-center flex md:flex-row bg-gray-900 p-4 rounded-2xl shadow-2xl">
            <div className='md:w-1/2 w-full lg:max-h-96 overflow-y-auto max-h-72 p-2 m-2'>
			<h1 className="text-2xl font-bold">Topic Is this</h1>
			<p className="mt-2">Tamquam ita veritas res equidem. Ea in ad expertus paulatim poterunt. Imo volo aspi novi tur. Ferre hic neque vulgo hae athei spero. Tantumdem naturales excaecant notaverim etc cau perfacile occurrere. Loco visa to du huic at in dixi aër.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam nostrum dolorum vero libero omnis odit repudiandae error nobis laborum animi cupiditate optio iste, qui facilis assumenda provident at iure labore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem autem vel placeat ipsa, veritatis beatae ad illo impedit incidunt quae dignissimos perspiciatis magnam totam mollitia reiciendis rerum nesciunt sit alias? Non ipsam optio porro quod asperiores minima similique, exercitationem facere! </p>
            </div>
            <div className='md:w-1/2 w-full p-6 m-2'>
            <div className="relative sm:max-w-xl sm:mx-auto">
    <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div className="relative px-2 bg-gradient-to-r from-slate-400 to-gray-600 shadow-lg sm:rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
            <div>
                <h1 className=" font-semibold font-itim text-4xl">Reply Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
    <div className="py-1 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                        <input autocomplete="off" id="Heading" name="Heading" type="contentbox" className="peer text-center placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Heading" />
                        <label for="Heading" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Heading</label>
                    </div>
                    <textarea
                    type='text'
                    name='line'
                    placeholder='Line'
                    className='text-black font-bold text-center rounded-2xl max-h-36  resize-y  my-2 '
                    required
                    />
                    <div className="relative">
                        <button className="bg-blue-500 text-white rounded-md px-2 py-1">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
		</div>
		<div className="flex items-center justify-between mt-4">
        <button className="inline-flex m-2  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
             Status Pending ... 
            </button>			<div>
				<a rel="noopener noreferrer" href="#" className="flex items-center">
					<img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
					<span className="hover:underline text-gray-100">My User</span>
				</a>
			</div>
		</div>
	</div>
	<div className="container max-w-4xl text-white m-10 px-5 lg:px-10 hover:scale-105 transition-all  duration-300 py-6 mx-auto rounded-xl shadow-inner bg-gray-800">
		<div className="flex items-center justify-between">
			<span className="text-sm text-gray-100">Jun 1, 2020</span>
			<a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-green-600 hover:bg-green-700 dark:text-gray-50">FeedBack</a>
		</div>
		<div className="mt-3 flex-col justify-center items-center flex md:flex-row bg-gray-900 p-4 rounded-2xl shadow-2xl">
            <div className='md:w-1/2 w-full lg:max-h-96 overflow-y-auto max-h-72 p-2 m-2'>
			<h1 className="text-2xl font-bold">Topic Is this</h1>
			<p className="mt-2"> Aliquam nostrum dolorum vero libero omnis odit repudiandae error nobis laborum animi cupiditate optio iste, qui facilis assumenda provident at iure labore! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem autem vel placeat ipsa, veritatis beatae ad illo impedit incidunt quae dignissimos perspiciatis magnam totam mollitia reiciendis rerum nesciunt sit alias? Non ipsam optio porro quod asperiores minima similique, exercitationem facere! </p>
            </div>
            <div className='md:w-1/2 w-full p-6 m-2'>
            <div className="relative sm:max-w-xl sm:mx-auto">
    <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div className="relative px-2 bg-gradient-to-r from-slate-400 to-gray-600 shadow-lg sm:rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
            <div>
                <h1 className=" font-semibold font-itim text-4xl">Reply Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
    <div className="py-1 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                        <input autocomplete="off" id="Heading" name="Heading" type="contentbox" className="peer text-center placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Heading" />
                        <label for="Heading" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Heading</label>
                    </div>
                    <textarea
                    type='text'
                    name='line'
                    placeholder='Line'
                    className='text-black font-bold text-center rounded-2xl max-h-36  resize-y  my-2 '
                    required
                    />
                    <div className="relative">
                        <button className="bg-blue-500 text-white rounded-md px-2 py-1">Send</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
            </div>
		</div>
		<div className="flex items-center justify-between mt-4">
        <button className="inline-flex m-2  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
             Status Pending ... 
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

export default Admin