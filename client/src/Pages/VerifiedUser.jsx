import React, { useState } from 'react';
import { storage } from '../../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useAppContext } from '../Appcontext';

function VerifiedUser() {
  const { nam, id, userId, token, setVer, ver, email, pic } = useAppContext();

  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState(null);
  const [mobile, setMobile] = useState("");
  const [self, setSelf] = useState("");
  const [tagline, setTagline] = useState("");
  const [socialInsta, setSocialInsta] = useState("");
  const [socialLinked, setSocialLinked] = useState("");
  const [showInstructions, setShowInstructions] = useState(false);

  const uploadImg = async () => {
    if (!imageUpload) return;
    const imageRef = ref(storage, `images/${imageUpload.name + uuidv4()}`);
    try {
      const snapshot = await uploadBytes(imageRef, imageUpload);
      const url = await getDownloadURL(snapshot.ref);
      setImageList(url);
      toast.success("Image Uploaded Successfully");
    } catch (err) {
      console.log("Error Occurred", err);
      toast.error("Image Upload Failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageList) {
      toast.info('Please Add Image For Thumbnail');
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_URL}/api/verifys`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          uniqueId: id,
          nam: nam,
          userId: userId,
          self: self,
          tagline: tagline,
          likes: 0,
          socialInsta: socialInsta,
          socialLinked: socialLinked,
          email: email,
          picture: pic,
          idProf: imageList,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success(`Profile Posted Successfully`);

        // PATCH request to update the investorId
        try {
          const patchResponse = await fetch(`${import.meta.env.VITE_URL}/auth/register/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              investorId: data._id
            }),
          });

          if (patchResponse.ok) {
            toast.success('Investor Profile Successfully Updated');
          } else {
            toast.error('Failed to Update Investor Profile');
          }
        } catch (err) {
          toast.error('Error Occurred During Profile Update');
        }

        setVer(!ver);
      } else {
        toast.info('Login to Post Content');
      }
    } catch (error) {
      toast.error("Error Occurred", error);
    }
  };

  const handleShowInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  return (
    <div className='flex items-center min-[450px]:flex-row flex-col justify-around'>
      <ToastContainer />
      <div>
        <button 
          onClick={handleShowInstructions} 
          className="inline-flex m-2 items-center lg:px-2 p-1 lg:py-1 text-sm font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600"
        >
          Instructions
        </button>
      </div>
      {showInstructions && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h2 className="text-xl font-bold mb-4">Instructions for Investors</h2>
            <ol className="list-decimal pl-5 text-sm text-left">
              <li>
                <strong>ID Proof Submission</strong>
                <ul className="list-disc pl-5">
                  <li>Submission: Submit any of the accepted ID proofs in the provided format.</li>
                  <li>Verification: Our team will verify the submitted ID proof against the details you have entered.</li>
                  <li>Mismatch Consequence: If the ID proof does not match your entered details, your verified investor subscription will be terminated.</li>
                </ul>
              </li>
              <li>
                <strong>One-Time Subscription Fee</strong>
                <ul className="list-disc pl-5">
                  <li>Fee Amount: A one-time subscription fee of ₹50 is required to obtain the verified investor tag.</li>
                  <li>Payment Requirement: You must pay this fee to access exclusive investor features.</li>
                  <li>Exclusive Features:
                    <ul className="list-disc pl-5">
                      <li>Chat functionality on our site.</li>
                      <li>Ability to create connections with other investors and startups.</li>
                      <li>Option to add blog posts.</li>
                      <li>Capability to invest in startups.</li>
                      <li>Option to buy tokens of startups.</li>
                      <li>Access to additional contact and financial details of startups.</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong>Investment Risk</strong>
                <ul className="list-disc pl-5">
                  <li>Risk Acknowledgment: Investing in startups involves risks. You are responsible for making informed decisions based on your own assessment.</li>
                </ul>
              </li>
              <li>
                <strong>Strike Policy</strong>
                <ul className="list-disc pl-5">
                  <li>Strike Limit: Accumulating more than 10 valid strikes will result in the termination of your subscription.</li>
                  <li>Strike Definition: A strike is issued for violations of platform rules and guidelines.</li>
                </ul>
              </li>
            </ol>
            <button 
              onClick={handleShowInstructions} 
              className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div className='p-1 sm:w-2/6 w-full pt-10 sm:pt-0'>
        <h1 className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 text-7xl p-2 lg:text-9xl font-itim text-center min-[400px]:text-8xl sm:text-6xl'>Start It Up</h1>
      </div>
      <div className="min-h-screen sm:w-1/2 w-3/4 m-10 flex flex-col sm:py-12 sm:justify-center">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 bg-gradient-to-r from-slate-400 to-gray-600 shadow-lg sm:rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="font-semibold font-itim text-4xl">Investor Profile</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form onSubmit={handleSubmit} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input onChange={(e) => setSelf(e.target.value)} value={self} autoComplete="off" id="self-description" name="self-description" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Self Description" />
                    <label htmlFor="self-description" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Self Description</label>
                  </div>
                  <div className="relative">
                    <input autoComplete="off" onChange={(e) => setSocialInsta(e.target.value)} value={socialInsta} id="Social Media Insta Account" name="Social Media Account" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Social Media Account" />
                    <label htmlFor="Social Media Account" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Insta Account</label>
                  </div>
                  <div className="relative">
                    <input autoComplete="off" onChange={(e) => setSocialLinked(e.target.value)} value={socialLinked} id="Social Media LinkedIn Account" name="Social Media Account" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Social Media Account" />
                    <label htmlFor="Social Media Account" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">LinkedIn Account</label>
                  </div>
                  <div className="relative">
                    <input autoComplete="off" onChange={(e) => setMobile(e.target.value)} value={mobile} id="Mobile" name="Mobile" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Mobile Number" />
                    <label htmlFor="Mobile" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Mobile Number</label>
                  </div>
                  <div className="relative">
                    <input autoComplete="off" onChange={(e) => setTagline(e.target.value)} value={tagline} id="tagline" name="tagline" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Tagline" />
                    <label htmlFor="tagline" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Tagline</label>
                  </div>
                  <div className="relative">
                    <button type='submit' className="bg-blue-500 text-white rounded-md px-2 py-1">Submit</button>
                  </div>
                </form>
                <div className="relative">
                  <input type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
                  <button onClick={uploadImg} className='bg-white text-black'>Upload Image</button>
                </div>
                {imageList ? <img src={imageList} className='h-96 w-72' alt="Uploaded" /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifiedUser;
