import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Img from '../assets/startitup.png'
import UserPhote from '../assets/user.png'
import { DarkModeToggle } from "react-dark-mode-toggle-2";
import { useAppContext } from '../Appcontext';

function Navebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { logout,nam,pic,id } = useAppContext();

  return (
    <div className='bg-gradient-to-r from-slate-900 z-50 to-slate-800 lg:p-0  w-full fixed p-1 top-0 lg:top-0'>
        <nav className="flex justify-between items-center 
        text-4xl cursor-pointer relative before:absolute before:bg-gradient-to-r from-slate-700 via-slate-600 w-full to-slate-700 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500 before:rounded-xl
        ">
        <div className="flex justify-center flex-col items-center md:flex-row">
          <Link to='/'>
            <img src={Img} alt="logo" className="lg:ml-5 ml-1 hover:scale-110 transform transition w-16 sm:w-44 lg:w-38 sm:rounded-xl rounded-sm"/>
        </Link>
        </div>
        <div className='text-white flex items-center justify-between font-serif font-thin text-xs lg:text-xl lg:p-6 sm:text-xl sm:p-2 '>

        <h3 className='p-1 sm:p-2 hover:scale-110 transform transition font-itim '>Contact Us</h3>
        <Link to='aboutUs'>
            <h3 className='p-1 sm:p-2 hover:scale-110 transform transition font-itim '>About</h3>
            </Link>
            {id?
            <Link to='/Logout'>
              <h3 className='p-1 sm:p-2 hover:scale-110 transform transition font-itim '>{nam}</h3>
            </Link>:
            <Link to='/Login'>
            <h3 className='p-1 sm:p-2 hover:scale-110 transform transition font-itim '>{nam}</h3>
            </Link>
            }
            <Link to='/user'>
            <img src={pic?pic:UserPhote} alt="user" className=" hover:scale-110 transform transition w-6 sm:w-10 rounded-3xl"/>
            </Link>
        </div>
        </nav>
    </div>
  )
}

export default Navebar