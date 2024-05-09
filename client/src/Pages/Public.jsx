import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../Appcontext';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Img from '../assets/user.png';

function Public() {
    const [open, setOpen] = useState(false);
    const { nam, id, token, pic, pub, setPub, publics } = useAppContext();
    const [heading, setHeading] = useState("");
    const [context, setContext] = useState("");
    const [upvotedPosts, setUpvotedPosts] = useState([]);
    const [strikedPosts, setStrikedPosts] = useState([]);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleHead = (e) => {
        setHeading(e.target.value);
    }

    const handleContext = (e) => {
        setContext(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const currentDate = new Date().toISOString().slice(0, 10);
            const response = await fetch(`${import.meta.env.VITE_URL}/api/contents`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    uniqueId: id,
                    userName: nam,
                    heading: heading,
                    content: context,
                    date: currentDate,
                    pic: pic,
                    strike: 0,
                    upvote: 0
                }),
            });
            if (response.ok) {
                toast.success(`${nam} Sent`);
            } else {
                toast.info('Login to Send Feedback');
            }
        } catch (error) {
            toast.error("Error", error);
        }
        handleOpen();
        setPub(!pub);
    };

    const handleControl = async (postId, type, count) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/api/contents/${postId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    [type]: count
                }),
            });
            if (response.ok) {
                if (type === 'upvote') {
                    toast.success('Upvoted successfully');
                } else {
                    toast.success('Strike added successfully');
                }
            } else {
                toast.error('Failed to update');
            }
        } catch (error) {
            toast.error("Error", error);
        }
        setPub(!pub);
    };

    const handleUpvote = async (postId, presentVote) => {
        const updatedUpvotedPosts = isUpvotedByUser(postId)
            ? upvotedPosts.filter((id) => id !== postId)
            : [...upvotedPosts, postId];
        setUpvotedPosts(updatedUpvotedPosts);
        const newVoteCount = isUpvotedByUser(postId) ? presentVote - 1 : presentVote + 1;
        handleControl(postId, 'upvote', newVoteCount);
    };

    const handleStrike = async (postId, presentStrike) => {
        const updatedStrikedPosts = isStrikedByUser(postId)
            ? strikedPosts.filter((id) => id !== postId)
            : [...strikedPosts, postId];
        setStrikedPosts(updatedStrikedPosts);
        const newStrikeCount = isStrikedByUser(postId) ? presentStrike - 1 : presentStrike + 1;
        handleControl(postId, 'strike', newStrikeCount);
    };

    const isUpvotedByUser = (postId) => {
        return upvotedPosts.includes(postId);
    };

    const isStrikedByUser = (postId) => {
        return strikedPosts.includes(postId);
    };

    return (
        <div>
            <div className="lg:mt-24 mt-8 flex justify-center items-center flex-col">
                <ToastContainer />
                <div className='w-full px-5 mt-6 flex justify-between items-center'>
                    <Link to='/'>
                        <button className="inline-flex items-center lg:px-2 p-1 lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
                            GO BACK
                        </button>
                    </Link>
                    <button onClick={handleOpen} className='px-2 py-1 font-bold rounded bg-violet-600 hover:bg-violet-700 dark:text-gray-50'>
                        Add Post
                    </button>
                </div>
                {open ?
                    <div className='fixed z-40 lg:top-1/4 top-1/4 flex w-full justify-center items-start h-full'>
                        <div>
                            <div className="relative flex flex-col bg-gray-700 p-3 text-white bg-transparent shadow-none rounded-xl bg-clip-border">
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
                                            <input placeholder="Heading Section" required onChange={handleHead}
                                                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 border-gray-300 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50" />
                                        </div>
                                        <h6 className="block -mb-5 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                                            Content
                                        </h6>
                                        <div className="relative h-11 w-full min-w-[200px]">
                                            <input placeholder="Enter Content for your Post" required onChange={handleContext}
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
                <h1 className='text-transparent m-8 bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-5xl pt-2 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px]:text-7xl  sm:text-6xl '>
                    Public Connect
                </h1>
                <div className='m-10'>
                    {publics.map((e) => {
                        return (
                            <div key={e._id} id={e.userId} className="container max-w-4xl text-white m-10 px-5 lg:px-10 hover:scale-105 transition-all duration-300 py-6 mx-auto rounded-xl shadow-inner bg-gray-800">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-100">{e.date}</span>
                                    <button onClick={() => handleUpvote(e._id, e.upvote)} className={`px-2 py-1 font-bold rounded ${isUpvotedByUser(e._id) ? 'bg-green-600' : 'bg-violet-600'} hover:bg-violet-700 dark:text-gray-50`}>Up Votes {e.upvote}</button>
                                </div>
                                <div className="mt-3 lg:max-h-36 max-h-72 overflow-y-auto bg-gray-900 p-4 rounded-2xl shadow-2xl">
                                    <h1 className="text-2xl font-bold">{e.heading}</h1>
                                    <p className="mt-2">{e.content}</p>
                                </div>
                                <div className="flex items-center justify-between mt-4">
                                    <button onClick={() => handleStrike(e._id, e.strike)} className={`inline-flex m-2 items-center lg:px-2 p-1 lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 ${isStrikedByUser(e._id) ? 'bg-yellow-500' : ''}`}>Strikes {e.strike}</button>
                                    <div>
                                        <a rel="noopener noreferrer" href="#" className="flex items-center">
                                            <img src={e.pic ? e.pic : Img} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                                            <span className="hover:underline text-gray-100">{e.userName}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Public;
