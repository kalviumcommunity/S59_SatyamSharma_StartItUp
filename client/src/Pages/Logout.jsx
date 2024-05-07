import React, {useEffect, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../Appcontext';


export default function LogoutPage(){

    const [loading, setLoading] = useState(false);
    const [done, setdone] = useState(false);
    const [counter, setCounter] = useState(3);

    const { logout,nam,pic} = useAppContext();


    const handleLogout = async() => {
        console.log("done")
        logout();
        setLoading(true);
        toast.success('Logged out successfully');
        setLoading(false);
        setdone(true);
    }

    useEffect(() => {
        if (done) {
          const timer = setInterval(() => {
            setCounter((prev) => prev - 1);
          }, 1000);
          setTimeout(() => {
            window.location.href = '/';
          }, 3000);
          return () => clearInterval(timer);
        }
      }, [done])

      


    return(
        <div className='flex h-screen text-center flex-col w-full justify-center items-center '>
            {done?<div className='text-2xl lg:text-3xl text-white bg-blue-700 font-itim  py-10 px-1 mx-1 font bold mb-12 overflow-auto lg:px-12 rounded-3xl '>Your Will Be Redirected to Home Page In <span className='text-3xl lg:text-4xl text-green-200'> {counter}</span></div>
            :<div>
            <div className='text-4xl text-white bg-slate-800 flex justify-center items-center flex-col   py-10 px-1 mx-1 font bold mb-12 overflow-auto lg:px-12 rounded-3xl  '
            >
                <img src={pic} className='w-10 my-3 rounded-3xl' />
                Logout from {nam}<br/>
            <Link to='/register'>
                <div className='text-sm mt-8  text-blue-400 hover:text-blue-500  hover:scale-110'>
                Register with another account?
                </div>
            </Link>
            </div>
            <button 
            className=' p-3 text-2xl font-semibold rounded-lg hover:scale-105  text-white bg-red-700   text-center'
            type="submit" 
            value='Logout' 
            onClick={handleLogout}>Logout</button>
            </div>}
            <ToastContainer />
        </div>
    )
}