import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useAppContext } from '../Appcontext';

function Contact() {
  const {token,setMain,main,presentDataId} = useAppContext();

  const [address,setAddress]=useState("");
  const [contact,setcontact]=useState("")
  const [preInv,setpreInv]=useState("")
  const [messagInv,setmessagInv]=useState("")

  
  const handleSubmit = async (e) => {
		e.preventDefault();
			try {
				const response = await fetch(`${import.meta.env.VITE_URL}/api/mainDatas/${presentDataId}`, {
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${token}`,
					},
					body: JSON.stringify({
						address: address,
						contactNumber: contact,
						previousInvestor: preInv,
						messageForInvestor: messagInv
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
		
	};


  return (
    
    <div className='flex  justify-center items-center'> 
    <ToastContainer/> 
        <div className='mt-36  rounded-2xl'>
        <div className='w-full fixed lg:top-28 top-10 left-2 lg:mb-20 mb-10 justify-start items-center'>
        <Link to='/publishUser'>
        <button className=" m-2 items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
             GO BACK
            </button>
        </Link>
        </div>  
    <div className="relative flex flex-col bg-white p-2 mb-16  text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
  <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
    Details
  </h4>
  
  <form onSubmit={handleSubmit} className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
    <div className="flex flex-col gap-6 mb-1">
      <h6
        className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
        Address
      </h6>
      <div className="relative h-11 w-full min-w-[200px]">
        <input placeholder="Street , Pin-Code " onChange={(e)=>setAddress(e.target.value)} value={address} required
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />

      </div>
      <h6
        className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
        Contact Number
      </h6>
      <div className="relative h-11 w-full min-w-[200px]">
        <input placeholder="98160XXXXX" onChange={(e)=>setcontact(e.target.value)} value={contact} required type='number'
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />

      </div>
      <h6
        class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
        Pervious Investors
      </h6>
      <div class="relative h-11 w-full min-w-[200px]">
        <input placeholder="Investor Name, Equity They Hold" onChange={(e)=>setpreInv(e.target.value)} value={preInv} required
          class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
      </div>
      <h6
        className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
        Message for Investor
      </h6>
      <div className="relative h-11 w-full min-w-[200px]">
        <input placeholder="Loans, Termsheet, Bank Statement" onChange={(e)=>setmessagInv(e.target.value)} value={messagInv} required
          className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
      </div>

    </div>
    <div className="inline-flex items-center">
      <label className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3" htmlFor="remember">
        <input type="checkbox" required
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
</div>  
</div> 
    </div>
  )
}

export default Contact