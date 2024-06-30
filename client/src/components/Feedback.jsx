import React, { useState } from 'react';
import { useAppContext } from '../Appcontext';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FadeLoader } from 'react-spinners';

function Feedback(props) {
  const { nam, id, token, setFeed, feed, pic } = useAppContext();
  const [heading, setHeading] = useState("");
  const [context, setContext] = useState("");
  const [loading, setLoading] = useState(false); 

  const handleHead = (e) => {
    setHeading(e.target.value);
  }

  const handleContext = (e) => {
    setContext(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 

    try {
      const currentDate = new Date().toISOString().slice(0, 10);
      const response = await fetch(`${import.meta.env.VITE_URL}/api/feedbacks`, {
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
          type: props.nam,
          date: currentDate,
          status: "Pending",
          pic: pic
        }),
      });
      if (response.ok) {
        toast.success(`${props.nam} Sent`);
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

  return (
    <div className={`flex items-center min-[450px] flex-col justify-around ${loading ? 'blur' : ''}`}>
      <ToastContainer />
      {loading && (
        <div className="loader-overlay">
          <FadeLoader color="#00BFFF" loading={true} height={15} radius={2} margin={4} />
        </div>
      )}
      <div className='p-1 sm:w-2/6 w-1/2 pt-10 sm:pt-0'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-5xl pt-8 p-2 lg:text-7xl xl:text-8xl font-itim text-center min-[400px] sm:text-6xl '>Your {props.nam} Will Be Marked</h1>
      </div>
      <div className="min-h-screen sm:w-1/2 w-1/2 m-10 flex flex-col sm:py-12 sm:justify-center">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-700 rounded-2xl shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 transition-all duration-300 hover:-rotate-12 sm:rounded-3xl"></div>
          <div className="relative px-4 bg-gradient-to-r from-slate-400 to-gray-600 rounded-2xl shadow-lg sm:rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="font-semibold font-itim text-4xl">{props.nam}</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form onSubmit={handleSubmit} className="py-8 flex flex-col justify-center items-center text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <h1 className='w-full flex justify-start items-center font-bold'>Heading</h1>
                  <input
                    onChange={handleHead}
                    required
                    placeholder='Heading'
                    name="heading"
                    type='text'
                    className="peer rounded-2xl text-center placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                  />
                  <textarea
                    onChange={handleContext}
                    name='content'
                    placeholder='Enter Feedback'
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
  );
}

export default Feedback;