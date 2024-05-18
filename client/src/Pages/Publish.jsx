import React, { useEffect, useState } from 'react'
import ham from '../assets/ham.png'
import cross from '../assets/cro.png'
import { Link } from 'react-router-dom'
import { storage } from '../../firebase'
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
import {v4} from 'uuid'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useAppContext } from '../Appcontext';
import Cookies from 'js-cookie';



function Publish() {
	const { nam, id,userId,token,setMain,main} = useAppContext();

    const [isOpen, setIsOpen] = useState(false);
	const [imageUpload, setImageUpload] = useState(null);
	const [imageList,setImageList]=useState(null);

	const[heading,setheading]=useState("");
    const[description,setDescription]=useState("");
	const[driveLink,setDriveLink]=useState("");


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
				const currentDate = new Date().toISOString().slice(0, 10);
				const response = await fetch(`${import.meta.env.VITE_URL}/api/mainDatas`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${token}`,
					},
					body: JSON.stringify({
						uniqueId: id,
						userId: userId,
						startUpName: heading,
						description: description,
						thumbnail: imageList,
						driveLink: driveLink,
						date: currentDate,
						inventAsked:false,
						likeCount: 0,
						strikeButton: 0,
					}),
				});
				if (response.ok) {
					const data = await response.json(); 
					Cookies.set('presentPostId', data._id); 
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
<div className=' bg-black w-full h-full lg:h-screen text-white flex justify-between flex-col lg:flex-row pt-20 lg:pt-0 items-center'>
	<ToastContainer/>
      <div className='lg:hidden top-10 sm:top-20 left-2 z-30 absolute'>
      <button  onClick={() => setIsOpen(!isOpen)}>{isOpen?null:<img src={ham} alt="ham" className="sm:rounded-xl w-8 rounded-md"/>}</button>
      </div>
      <div className= {`bg-gradient-to-r from-slate-900 to-slate-800 lg:h-3/4 h-5/6 lg:flex sm:top-20  lg:items-center z-20 left-0 top-10 p-2  lg:flex-col rounded-lg lg:m-5 lg:mt-20 ${isOpen?"fixed":"hidden"}  `}>
      <button  onClick={() => setIsOpen(!isOpen)}>{isOpen?<img src={cross} alt="close" className="transform transition w-8 rounded-md"/>:null}</button>
        <div className='flex h-full items-center flex-col '>
        <button className='text-black bg-white p-2 font-itim  hover:scale-105 rounded m-2 sm:mt-6 w-32 mx-6'>Instructions</button>
		<Link to='founderDetails'>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-2 w-32 mx-6'>Founder Details</button>
		</Link>
		<Link to='investment'>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-2 w-32 mx-6'>Investment</button>
		</Link>
		<Link to='tokenization'>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-2 w-32 mx-6'>Tokenization</button>
		</Link>
		<Link to='contact'>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-2 w-32 mx-6'>Details</button>
		</Link>
		<Link to='requestBox'>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-2 w-32'>Request Box</button>
		</Link>
		<Link to='addOn'>
        <button className='text-black bg-white p-2 font-itim hover:scale-105  rounded m-2 w-32'>Add-On's</button>
		</Link>
        

        {isOpen?
		
        <div className='bottom-5 absolute'>
		<Link to='/report'>
        <button className='bg-gradient-to-r from-pink-500 to-rose-500 p-2 font-itim font-semibold  hover:scale-105 rounded '>Report Issue</button>
		</Link>
        </div>
		:null}
        </div>
        {isOpen?null:
        <div>
		<Link to='/report'>
        <button className='bg-gradient-to-r from-pink-500 to-rose-500 p-2 font-itim font-semibold  hover:scale-105 rounded lg:m-6'>Report Issue</button>
		</Link>
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
					<h1 className=" font-semibold font-itim text-4xl">Content Details</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative text-center">
							<input autocomplete="off" required value={heading} onChange={(e)=>setheading(e.target.value)} id="heading" name="heading" type="text" className="peer rounded-xl placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Company Name" />
							<label for="heading"  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Company Name</label>
						</div>
						<div className="relative">
							<input autocomplete="off" required value={driveLink} onChange={(e)=>setDriveLink(e.target.value)} id="driveLink" name="driveLink" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="driveLink"  className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Drive Link</label>
						</div>
                        <div className="relative">
							<input autocomplete="off" required value={description} onChange={(e)=>setDescription(e.target.value)} id="description" name="description" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
							<label for="description" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Description</label>
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

export default Publish