import React, { useState } from 'react'

function Streaming() {

     const handleThumb = (event) => {
        event.target.hidden = true;
      };




  return (
    <div className='bg-black pt-32'>
        <div className='flex justify-between text-white items-center'>
            <button className='bg-slate-300 text-black p-1 rounded'>Filter</button>
            <div>
            <input className='rounded-3xl' type="text" name="" id=""  />
            </div>
            <button className='bg-slate-300 text-black p-1 rounded'>Filter</button>
        </div>
        <div className='flex justify-center  flex-wrap pb-10 items-center'>
            <div className='bg-slate-800 min-w-64 flex justify-center items-center flex-col  m-5 p-3 rounded-xl text-center text-white w-2/5'>
                <div className='mb-2 flex justify-between items-center w-full '>
                <h1 className='bg-slate-600 p-1 rounded'>Strike</h1>
                <h1 className='text-3xl font-itim'>Start Up Name</h1> 
                <h2 className='bg-slate-600 p-1 rounded'>Add To Fav</h2>
                </div>
                <div className='flex items-center w-full justify-center flex-col'>
                <img className={`lg:h-56 z-10 absolute   xl:h-72 md:h-42  rounded-lg h-32`} onClick={handleThumb}   src='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'></img>
                <iframe src="https://drive.google.com/file/d/1u_KuT0SmMnwkfdivcyfQHgEREkwCBIML/preview"  className='lg:h-56 w-full px-10 xl:h-72 md:h-42 h-32'   allowFullScreen='allowFullScreen'  allow="autoplay"></iframe>
                </div>
                <div className='flex mt-3'>
                    <div className='flex flex-col lg:w-2/3   lg:mt-3 mt-0 '>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Founder Details</button>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Investment</button>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Contact Details</button>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Request Box</button>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex justify-around'>
                            <button className='text-black bg-white rounded-xl p-1 text-xs lg:my-1.5 my-1'>Like</button>
                            <button className='text-black bg-white rounded-xl p-1 text-xs lg:my-1.5 my-1'>Share</button>

                            <button className='text-black bg-white rounded-xl p-1 text-xs lg:my-1.5 my-1'>Comment</button>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-2xl font-itim' >Discription</h1>
                            <div className='h-24 w-4/5 overflow-y-auto'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. wewmhb jhbdj j jbdj bjwbdjb jwwjkdb j kjdb jbkjb jkbk wbdkj bk bkjb  kjnvdjk n njkfn jkn nfkj nkj  njkvn kj nf nkj nfkj nkjfn  Asperiores perferendis magni dolores nobis! Quibusdam saepe quod facere fugit, fuga dolorem.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-slate-800 min-w-64 flex justify-center items-center flex-col  m-5 p-3 rounded-xl text-center text-white w-2/5'>
                <div className='mb-2 flex justify-between items-center w-full '>
                <h1 className='bg-slate-600 p-1 rounded'>Strike</h1>
                <h1 className='text-3xl font-itim'>Start Up Name</h1> 
                <h2 className='bg-slate-600 p-1 rounded'>Add To Fav</h2>
                </div>
                <div className='flex items-center w-full justify-center flex-col'>
                <img className={`lg:h-56 z-10 absolute   xl:h-72 md:h-42  rounded-lg h-32`} onClick={handleThumb}   src='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'></img>
                <iframe src="https://drive.google.com/file/d/1u_KuT0SmMnwkfdivcyfQHgEREkwCBIML/preview"  className='lg:h-56 w-full px-10 xl:h-72 md:h-42 h-32'   allowFullScreen='allowFullScreen'  allow="autoplay"></iframe>
                </div>
                <div className='flex mt-3'>
                    <div className='flex flex-col lg:w-2/3   lg:mt-3 mt-0 '>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Founder Details</button>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Investment</button>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Contact Details</button>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Request Box</button>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex justify-around'>
                            <button className='text-black bg-white rounded-xl p-1 text-xs lg:my-1.5 my-1'>Like</button>
                            <button className='text-black bg-white rounded-xl p-1 text-xs lg:my-1.5 my-1'>Share</button>

                            <button className='text-black bg-white rounded-xl p-1 text-xs lg:my-1.5 my-1'>Comment</button>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-2xl font-itim' >Discription</h1>
                            <div className='h-24 w-4/5 overflow-y-auto'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. wewmhb jhbdj j jbdj bjwbdjb jwwjkdb j kjdb jbkjb jkbk wbdkj bk bkjb  kjnvdjk n njkfn jkn nfkj nkj  njkvn kj nf nkj nfkj nkjfn  Asperiores perferendis magni dolores nobis! Quibusdam saepe quod facere fugit, fuga dolorem.
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    </div>
  )
}

export default Streaming