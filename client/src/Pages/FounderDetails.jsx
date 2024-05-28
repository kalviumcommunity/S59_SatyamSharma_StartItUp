import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { storage } from '../../firebase'
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useAppContext } from '../Appcontext';

function FounderDetails() {
	const [imageUpload, setImageUpload] = useState(null);
	const [imageList,setImageList]=useState(null);
  const [names,setNames]=useState("")
  const [aboutYou,setAboutYou]=useState("")
  const [socialMedia,setSocialMedia]=useState("")


  const {token,setMain,main,publishId} = useAppContext();


  const uploadImg=()=>{
		if(imageUpload==null) return;
		const imageRef = ref(storage,`images/${imageUpload.name+v4()}`)
		uploadBytes(imageRef,imageUpload).then((file)=>{
			alert("Image Uploaded");
			getDownloadURL(file.ref).then((url)=>{
				setImageList(url);
			});
		})
		.catch((err)=>{
			console.log("Error Occured",err)
		})
	}

  
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!imageList) {
			toast.info('Please Add Image For Profile Pic');
		} else {
			try {
				const response = await fetch(`${import.meta.env.VITE_URL}/api/mainDatas/${publishId}`, {
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${token}`,
					},
					body: JSON.stringify({
						founderName: names,
						aboutYou: aboutYou,
						image: imageList,
						socialMedia: socialMedia
					}),
				});
				if (response.ok) {
					toast.success(`Posted`);
				} else {
					toast.info('Login to Post Content');
				}
			} catch (error) {
				toast.error("Error", error);
			}
			setMain(!main);
		}
	};


  return (
    <div>
      <ToastContainer/>
        <div className='flex  justify-center items-center'>  
        <div className='mt-36  rounded-2xl'>
        <div className='w-full fixed lg:top-28 top-16 left-2 lg:mb-20 mb-10 justify-start items-center'>
        <Link to='/publishUser'>
        <button className=" m-2 items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
             GO BACK
            </button>
        </Link>
        </div>  
    <div className="relative flex flex-col bg-white mb-16 p-2  text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
  <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Founders Details
  </h4>
  
  <form onSubmit={handleSubmit} className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
    <div className="flex flex-col gap-6 mb-1">
      <h6
        className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
        Name
      </h6>
      <div className="relative h-11 w-full min-w-[200px]">
        <input required placeholder="Names Of the Founders"
        onChange={(e)=>setNames(e.target.value)} value={names}
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
      </div>
      <h6
        class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
        About You
      </h6>
      <div class="relative h-11 w-full min-w-[200px]">
        <input required placeholder="Teams Roles ,Work Distribution"
        onChange={(e)=>setAboutYou(e.target.value)} value={aboutYou}
          class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
      </div>
      <h6
        className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
        Social Media
      </h6>
      <div className="relative h-11 w-full min-w-[200px]">
        <input required placeholder="Social Media Profile Link"
        onChange={(e)=>setSocialMedia(e.target.value)} value={socialMedia}
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
      </div>

    </div>
    <div className="inline-flex items-center">
      <label className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3" htmlFor="remember">
        <input required type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
          id="remember" />
        <span
          className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
            stroke="currentColor" stroke-width="1">
            <path fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </span>
      </label>
      <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="remember">
        <p className="flex items-center font-sans text-sm antialiased font-normal leading-normal text-gray-700">
          I agree the
          <a href="#" className="font-medium transition-colors hover:text-gray-900">
            &nbsp;Terms and Conditions
          </a>
        </p>
      </label>
    </div>
    <button
      className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="submit">
      Submit
    </button>
  </form>
  <div className="relative">
							<input type="file" 
							onChange={(e)=>{
								setImageUpload(e.target.files[0])
								}}/>
							<button onClick={uploadImg} className='bg-white text-black'>Upload Image</button>
						</div>
						{imageList?<img src={imageList} className='h-96 w-72'></img>:null}
				
</div>  
</div> 
    </div>
    </div>
  )
}

export default FounderDetails