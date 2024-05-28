import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useAppContext } from '../Appcontext';

function ContactUs() {
    const [userID, setUserID] = useState('');
    const [userPass, setUserPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [userIdError, setUserIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const { logout,nam,pic,id,fet,setFet } = useAppContext();


    const handleLogin = async (e) => {
        e.preventDefault();
        const userIdPattern = /^(?!@)(?=.*\d)[^\s]{6,}$/;
        if (!userIdPattern.test(userID)) {
            setUserIdError('User must contain at least 6 characters including one number, it should not start with @, and EmptySpace not allowed');
            return;
        } else {
            setUserIdError('');
        }

        const passwordPattern = /^(?!.*\s)(?=.*[a-zA-Z0-9])(?=.*[\W_]).{6,}$/;
        if (!passwordPattern.test(userPass)) {
            setPasswordError('Password must contain at least 6 characters including one special character, and space not allowed.');
            return;
        } else {
            setPasswordError('');
        }

        if (userPass !== confirmPass) {
            setConfirmPasswordError('Passwords do not match');
            return;
        } else {
            setConfirmPasswordError('');
        }

        try {
            const response = await fetch(`${import.meta.env.VITE_URL}/auth/register/${id}`, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  userId: userID,
                  password: userPass,
                }),
              });
            if(response.ok)
            toast.success('Password and UserId Successfully Set');
        else{
            toast.info('UserId Already Taken');
        }
        } catch (err) {
            toast.error('Some error occurred.');
        }
        setFet(!fet)
    };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg mb-4">
          Welcome to our website! My name is Satyam Sharma, and I am a 19-year-old student currently pursuing a Bachelor of Engineering in Computer Science and Engineering (BE.CSE) at Chitkara University. I am passionate about technology and dedicated to pushing the boundaries of innovation and development.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
        <p className="text-lg mb-4">
          I am currently working with Kalvium as a Full Stack Developer. My expertise lies in the MERN stack (MongoDB, Express.js, React.js, Node.js), and I have a strong background in building robust, scalable, and efficient web applications. Here’s a glimpse into my professional journey:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="text-lg mb-2">
            <strong>100+ Projects on GitHub:</strong> With a strong portfolio of diverse projects, I have honed my skills in various aspects of full stack development.
          </li>
          <li className="text-lg mb-2">
            <strong>50+ Project Assignments on Stackbuzz:</strong> My contributions to Stackbuzz demonstrate my ability to tackle complex problems and deliver high-quality solutions.
          </li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg mb-4">
          Our mission is to develop full stack expandable sites that cater to your specific needs. We strive to provide top-notch development services and ensure that every project we undertake meets the highest standards of quality and functionality.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside mb-4">
          <li className="text-lg mb-2">
            <strong>Proven Expertise:</strong> With a rich experience in the MERN stack and numerous successful projects, we bring a wealth of knowledge to the table.
          </li>
          <li className="text-lg mb-2">
            <strong>Quality Assurance:</strong> We are committed to delivering products that are not only functional but also robust and scalable.
          </li>
          <li className="text-lg mb-2">
            <strong>Customer Satisfaction:</strong> Your satisfaction is our priority. We work closely with our clients to understand their requirements and deliver solutions that exceed their expectations.
          </li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-4">
          If you are looking for reliable and skilled developers to bring your project to life, you’ve come to the right place. We are here to ensure that you get everything you need to achieve your goals.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">
          Please fill out the contact form below, and we will get back to you as soon as possible:
        </p>
        
        <div className="w-full mt-6">
          
          <div className="bg-gray-200 p-4 rounded-lg text-center">
          <section>
            <ToastContainer/>
            <div className="flex flex-col items-center justify-center">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-4 space-y-4 sm:p-8">
                        <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Complete Registration
                        </h1>
                        <form className="space-y-2">
                            <div>
                                <label
                                    htmlFor="userId"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    User Id
                                </label>
                                <input
                                    type="text"
                                    name="userId"
                                    id="userId"
                                    onChange={(e) => setUserID(e.target.value)}
                                    className={`bg-gray-50 border  border-gray-300 text-center text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                                        userIdError ? 'border-red-500' : ''
                                    }`}
                                    placeholder="User ID"
                                    required
                                />
                                {userIdError && (
                                    <p className="text-red-500 text-center hover:scale-110 font-semibold  text-xs mt-1">
                                        {userIdError}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={(e) => setUserPass(e.target.value)}
                                    className={`bg-gray-50 text-center border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                                        passwordError ? 'border-red-500' : ''
                                    }`}
                                    placeholder="Password"
                                    required
                                />
                                {passwordError && (
                                    <p className="text-red-500 text-xs text-center hover:scale-110 font-semibold mt-1">
                                        {passwordError}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="confirm-password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    name="confirm-password"
                                    id="confirm-password"
                                    value={confirmPass}
                                    onChange={(e) => setConfirmPass(e.target.value)}
                                    className={`bg-gray-50 text-center border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                                        confirmPasswordError ? 'border-red-500' : ''
                                    }`}
                                    placeholder="Confirm Password"
                                    required
                                />
                                {confirmPasswordError && (
                                    <p className="text-red-500 text-center hover:scale-110 font-semibold text-xs mt-1">
                                        {confirmPasswordError}
                                    </p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-white hover:text-black hover:scale-105 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={handleLogin}
                            >
                                Done
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
