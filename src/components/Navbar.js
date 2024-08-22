import React, { useState } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'

const Navbar = () => {
  const [showNavMobile, setShowNavMobile] = useState(false);
  const handleClick = () => setShowNavMobile(!showNavMobile);
  return (
    <div className="flex fixed w-full h-[80px] justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-30">
      <div>
        <img
          src="https://t3.ftcdn.net/jpg/03/37/20/30/240_F_337203054_mWnGmCGVVbRnAXqgNjfS1Jv13mUKaZDC.jpg"
          style={{ height: "80px", width: "80px", zIndex: 10 }}
        />
      </div>

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      <div className="md:hidden z-10" onClick={handleClick}>
        {!showNavMobile ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu*/}
      <ul
        className={
          showNavMobile
            ? `absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center`
            : "hidden"
        }
      >
        <li className="py-6">Home</li>
        <li className="py-6">About</li>
        <li className="py-6">Skills</li>
        <li className="py-6">Work</li>
        <li className="py-6">Contact</li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0077B5] hover:bg-pink-600'>
                <a href='/' className='flex justify-between items-center w-full'>
                LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] hover:bg-pink-600'>
                <a href='/' className='flex justify-between items-center w-full'>
                Github <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#548565] hover:bg-pink-600'>
                <a href='/' className='flex justify-between items-center w-full'>
                Mail <HiOutlineMail size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] hover:bg-pink-600'>
                <a href='/' className='flex justify-between items-center w-full'>
                Resume <BsFillPersonLinesFill size={30}/>
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
