import React, { useState } from 'react'

function Streaming() {

     const[open,setopen]=useState(false);

     const handleThumb=()=>{
        setopen(!open);
     }

  return (
    <div className='bg-black pt-32'>
        <div className='flex justify-between text-white items-center'>
            <button>Filter</button>
            <div className=' bg-slate-300'>
            <input type="text" name="" id=""  />
            </div>
            <button>Filter</button>
        </div>
        <div className='flex justify-center  flex-wrap pb-10 items-center'>
            <div className='bg-slate-800 min-w-64 flex justify-center items-center flex-col  m-5 p-3 rounded-xl text-center text-white w-2/5'>
                <div className='mb-2'>
                <h1 className='text-3xl font-itim'>Start Up Name</h1>
                </div>
                {open?
                <iframe src="https://drive.google.com/file/d/1u_KuT0SmMnwkfdivcyfQHgEREkwCBIML/preview"  className='w-full lg:h-56 xl:h-72 md:h-42 h-32'   allowFullScreen='allowFullScreen'  allow="autoplay"></iframe>:
                <img className='lg:h-56 xl:h-72 md:h-42 rounded-lg  h-32'  src='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg' onClick={()=>handleThumb()}></img>
}
                <div className='flex mt-3'>
                    <div className='flex flex-col lg:w-2/3   lg:mt-3 mt-0 '>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Request Box</button>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Request Box</button>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Request Box</button>
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
                <div className='mb-2'>
                <h1 className='text-3xl font-itim'>Start Up Name</h1>
                </div>
                {open?
                <iframe src="https://drive.google.com/file/d/1u_KuT0SmMnwkfdivcyfQHgEREkwCBIML/preview"  className='w-full lg:h-56 xl:h-72 md:h-42 h-32'   allowFullScreen='allowFullScreen'  allow="autoplay"></iframe>:
                <img className='lg:h-56 xl:h-72 md:h-42 rounded-lg  h-32'  src='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg' onClick={()=>handleThumb()}></img>
}
                <div className='flex mt-3'>
                    <div className='flex flex-col lg:w-2/3   lg:mt-3 mt-0 '>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Request Box</button>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Request Box</button>
                        <button className='text-black bg-white rounded-xl p-0.5 text-xs lg:my-1.5 my-1'>Request Box</button>
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