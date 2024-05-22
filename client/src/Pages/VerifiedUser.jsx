import React, { useEffect, useState } from 'react'
import { storage } from '../../firebase'
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useAppContext } from '../Appcontext';
import Cookies from 'js-cookie';

function VerifiedUser() {
	const { nam, id,userId,token,setVer,ver,email,pic} = useAppContext();

	const [imageUpload, setImageUpload] = useState(null);
	const [imageList,setImageList]=useState(null);

	const[mobile,setMobile]=useState("");
    const[self,setSelf]=useState("");
	const[tagline,setTagline]=useState("");
	const[socialInsta,setsocialInsta]=useState("");
	const[socialLinked,setsocialLinked]=useState("");

	

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
			toast.info('Please Add Image For Thumbnail');
		} else {
			try {
				const response = await fetch(`${import.meta.env.VITE_URL}/api/verifys`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${token}`,
					},
					body: JSON.stringify({
						uniqueId: id,
						nam:nam,
						userId: userId,
						self: self,
						tagline: tagline,
						likes: 0,
						socialInsta: socialInsta,
						socialLinked: socialLinked,
						email:email,
						picture: pic,
						idProf:imageList,
					}),
				});
				if (response.ok) {
					const data = await response.json(); 
					Cookies.set('verifUserId', data._id); 
					toast.success(`Posted`);
				} else {
					toast.info('Login to Post Content');
				}
			} catch (error) {
				toast.error("Error", error);
			}
			setVer(!ver);
		}
	};
	

    
  return (

    <div className='flex items-center min-[450px]:flex-row  flex-col justify-around'>
<ToastContainer/>
        <div className='p-1 sm:w-2/6 w-full pt-10 sm:pt-0'>
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-7xl p-2 lg:text-9xl font-itim text-center min-[400px]:text-8xl  sm:text-6xl '>Start It Up</h1>

        </div>
    <div className="min-h-screen sm:w-1/2 w-3/4 m-10   flex flex-col  sm:py-12 sm:justify-center" >


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
			<form onSubmit={handleSubmit}  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div class="relative">
							<input onChange={(e)=>setSelf(e.target.value)} value={self} autocomplete="off" id="self-description" name="self-description" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Self Description" />
							<label for="self-description" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Self Description</label>
						</div>
						<div className="relative">
							<input autocomplete="off" onChange={(e)=>setsocialInsta(e.target.value)} value={socialInsta} id="Social Media Insta Account" name="Social Media Account" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Social Media Account" />
							<label for="Social Media Account" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Insta Account</label>
						</div>
						<div className="relative">
							<input autocomplete="off" onChange={(e)=>setsocialLinked(e.target.value)} value={socialLinked} id="Social Media LinkedIn Account" name="Social Media Account" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Social Media Account" />
							<label for="Social Media Account" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">LinkedIn Account</label>
						</div>
						<div className="relative">
							<input autocomplete="off" onChange={(e)=>setMobile(e.target.value)} value={mobile} id="Mobile" name="Social Media Account" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Social Media Account" />
							<label for="Social Media Account" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mobile Number</label>
						</div>
                        <div className="relative">
							<input autocomplete="off" onChange={(e)=>setTagline(e.target.value)} value={tagline}  id="tagline" name="password" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="theme" />
							<label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Tagline</label>

						</div>
						<div className="relative">
							<button type='submit' className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
						</div>
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
</div>
</div>
  )
}

export default VerifiedUser