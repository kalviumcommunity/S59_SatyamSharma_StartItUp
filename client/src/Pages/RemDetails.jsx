import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { useAppContext } from '../Appcontext';

function RemDetails() {
    const [userID, setUserID] = useState('');
    const [userPass, setUserPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [userIdError, setUserIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const {id,fet,setFet } = useAppContext();


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
    );
}

export default RemDetails;
