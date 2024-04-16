import React from 'react'

function Feedback() {
  return (
    <div className='flex items-center min-[450px]:flex-row  flex-col justify-around'>

        <div className='p-1 sm:w-2/6 w-full pt-10 sm:pt-0'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-5xl pt-8 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px]:text-7xl  sm:text-6xl '>Your FeedBack Will Be Marked</h1>

        </div>
    <div className="min-h-screen sm:w-1/2 w-3/4 m-10   flex flex-col  sm:py-12 sm:justify-center" >


<div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div
        className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
    </div>
    <div className="relative px-4  bg-gradient-to-r from-slate-400 to-gray-600 shadow-lg sm:rounded-3xl sm:p-10">
        <div className="max-w-md mx-auto">
            <div>
                <h1 className=" font-semibold font-itim text-4xl">FeedBack Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
    <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
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

export default Feedback