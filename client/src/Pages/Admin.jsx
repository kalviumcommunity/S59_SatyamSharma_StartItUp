import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../Appcontext';
import Img from '../assets/user.png';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FadeLoader } from 'react-spinners';

function Admin() {
  const { token, setFeed, feed, feedback } = useAppContext();
  const [heading, setHeading] = useState("");
  const [context, setContext] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleHead = (e) => {
    setHeading(e.target.value);
  };

  const handleContext = (e) => {
    setContext(e.target.value);
  };

  const handleSubmit = async (e, feedbackId) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/api/feedbacks/${feedbackId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: "Done",
          replyHead: heading,
          replyContext: context
        }),
      });
      if (response.ok) {
        toast.success(`Sent Response`);
      } else {
        toast.info('Login to Send Feedback');
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false); 
      setFeed(!feed);
    }
  };

  const handleDelete = async (feedbackId) => {
    setLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/api/feedbacks/${feedbackId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.ok) {
        toast.success(`Deleted Feedback`);
        setFeed(!feed);
      } else {
        toast.info('Login to Delete Feedback');
      }
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="lg:mt-28 mt-8 flex justify-center items-center flex-col">
        <ToastContainer />
        <div className='w-full justify-start items-start'>
          <Link to='/'>
            <button className="inline-flex m-3  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
              GO BACK
            </button>
          </Link>

          <h1 className='text-transparent m-8 bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-5xl pt-2 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px]:text-7xl  sm:text-6xl '>
            Admin Page
          </h1>
          {feedback.map((e) => {
            return (
              <div key={e._id} className="container w-5/6 lg:w-2/3  text-white m-10 px-5 lg:px-10 hover:scale-105 transition-all  duration-300 py-6 mx-auto rounded-xl shadow-inner bg-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-100">{e.date}</span>
                  {e.type == 'FeedBack' ?
                    <button rel="noopener noreferrer" className="px-2 py-1 font-bold rounded bg-green-600 hover:bg-green-700 dark:text-gray-50">FeedBack</button> :
                    <button rel="noopener noreferrer" className="px-2 py-1 font-bold rounded bg-red-600 hover:bg-red-700 dark:text-gray-50">Report</button>
                  }
                </div>
                <div className="mt-3 flex-col justify-center items-center flex md:flex-row bg-gray-900 p-4 rounded-2xl shadow-2xl">
                  <div className='md:w-1/2 w-full lg:max-h-96 overflow-y-auto max-h-72 p-2 m-2'>
                    <h1 className="text-2xl font-bold">{e.heading}</h1>
                    <p className="mt-2">{e.content}</p>
                  </div>
                  <div className='md:w-1/2 w-full p-6 m-2'>
                    <div className="relative sm:max-w-xl sm:mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 hover:-rotate-12 transition-all duration-300 sm:rounded-3xl">
                      </div>
                      <div className="relative px-2 bg-gradient-to-r from-slate-400 to-gray-600 shadow-lg sm:rounded-3xl sm:p-10">
                        <div className="max-w-md mx-auto">
                          <div>
                            <h1 className=" font-semibold font-itim text-4xl">Reply Form</h1>
                          </div>
                          <div className="divide-y divide-gray-200">
                            <form onSubmit={(event) => handleSubmit(event, e._id)} className="py-8 flex flex-col justify-center items-center text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                              <h1 className='w-full flex justify-start items-center font-bold'>Heading</h1>
                              <input
                                onChange={handleHead}
                                required
                                placeholder={e.replyHead}
                                name="heading"
                                type='text'
                                className="peer rounded-2xl text-center placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                              ></input>
                              {console.log(e.replyHead, e.replyContext)}
                              <textarea
                                onChange={handleContext}
                                name='content'
                                placeholder={e.replyContext}
                                className='text-black font-bold text-center rounded-2xl max-h-36 resize-y my-2'
                                required
                              ></textarea>
                              <button type='submit' className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  {e.status == "Pending" ?
                    <button className="inline-flex m-2  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600">
                      Status Pending ...
                    </button> :
                    <button className="inline-flex m-2  items-center lg:px-2 p-1  lg:py-1 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                      Done Response
                    </button>}
                  <div>
                    <a rel="noopener noreferrer" href="#" className="flex items-center">
                      <img src={e.pic ? e.pic : Img} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                      <span className="hover:underline text-gray-100">{e.userName}</span>
                    </a>
                  </div>
                  <button
                    onClick={() => handleDelete(e._id)}
                    className="inline-flex m-2 items-center lg:px-2 p-1 lg:py-1 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {loading && (
        <div className="loader-overlay">
          <FadeLoader color="#00BFFF" loading={true} height={15} radius={2} margin={4} />
        </div>
      )}
    </div>
  )
}

export default Admin;
