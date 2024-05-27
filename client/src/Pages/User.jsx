import React, { useState } from 'react';
import { useAppContext } from '../Appcontext';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function User() {
    const { nam, token, setVer, id, ver, presentVerfId, verify } = useAppContext();

    const [open, setOpen] = useState(false);
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    const [description, setDescription] = useState("");

    const handleOpen = () => {
        setOpen(!open);
    }

    const index = verify.findIndex(item => item.uniqueId === id);
    const preData = verify[index]?.blogPost || [];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const currentDate = new Date().toISOString().slice(0, 10);

            const updatedBlogPost = [
                
                {
                    date: currentDate,
                    topic: heading,
                    subHeading: subHeading,
                    description: description
                }
            ];

            const response = await fetch(`${import.meta.env.VITE_URL}/api/verifys/${presentVerfId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    uniqueId: id,
                    blogPost: updatedBlogPost
                }),
            });

            if (response.ok) {
                toast.success(`${nam}'s Blog Added`);
            } else {
                toast.info('Login to Send Feedback');
            }
        } catch (error) {
            toast.error("Error", error);
        }

        handleOpen();
        setVer(!ver);
    };
  return (
    <div>
        <ToastContainer/>
    <div className='lg:mt-36 mt-10'>
        

        <button onClick={handleOpen} className='px-2 py-1 font-bold rounded bg-violet-600 hover:bg-violet-700 dark:text-gray-50'>
                        Add Post
                </button>
        <h1 className='text-transparent m-3 bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-5xl pt-8 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px]:text-7xl  sm:text-6xl'>
            Connected Accounts
        </h1>
        {open ?
                    <div className='fixed z-40 lg:top-1/4 top-1/4 flex w-full justify-center items-start h-full'>
                        <div> 
                            <div className="relative flex flex-col p-3 text-white bg-transparent shadow-none rounded-xl animated-background  bg-gradient-to-r from-slate-600 via-slate-700 to-slate-600 ">
                                <button onClick={handleOpen} className='bg-red-600 absolute top-2 right-3 px-2 text-center rounded-xl text-white'>X</button>
                                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    Public Post
                                </h4>

                                <form onSubmit={handleSubmit} className="max-w-screen-lg w-80 sm:w-96">
                                    <div className="flex flex-col gap-6 mb-1">
                                        <h6 className="block -mb-5 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            Heading
                                        </h6>
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input placeholder="Heading Section" required onChange={(e)=>setHeading(e.target.value)} value={heading}
                                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 border-gray-300 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                        </div>
                                        <h6 className="block -mb-5 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            Sub Heading
                                        </h6>
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input placeholder="Enter Content for your Post" onChange={(e)=>setSubHeading(e.target.value)} value={subHeading}
                                                className="peer h-full w-full rounded-md border border-blue-gray-900 border-t-transparent !border-t-blue-gray-800 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-gray-300 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                        </div>
                                        <h6 className="block -mb-5 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            Description
                                        </h6>
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input placeholder="Enter Content for your Post" onChange={(e)=>setDescription(e.target.value)} value={description}
                                                className="peer h-full w-full rounded-md border border-blue-gray-900 border-t-transparent !border-t-blue-gray-800 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-gray-300 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
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
                                                    stroke="currentColor" strokeWidth="1">
                                                    <path fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                        <label className="mt-px font-light text-white cursor-pointer select-none" htmlFor="remember">
                                            <p className="flex items-center font-sans text-sm antialiased font-normal leading-normal ">
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
                    </div> : null}

    </div>

    </div>
  )
}

export default User