import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaHashtag } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { FaUserNinja } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { Link } from 'react-router-dom';
const LeftSidebar = () => {
  return (
    <div className='w-[20%]'>
      <div>
        <div>
          <img className='m-4' width= {"34 px"} src="https://logowik.com/content/uploads/images/twitter-x5265.logowik.com.webp" alt="" />
        </div>
        <div className='my-4'>
          <Link  to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200  cursor-pointer rounded-full '>
            <div>
              <FaHome size = "24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Home</h1> 
          </Link>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200  cursor-pointer rounded-full '>
            <div>
              <FaHashtag size = "24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Explore</h1> 
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200  cursor-pointer rounded-full '>
            <div>
              <IoNotifications size = "24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Notification</h1> 
          </div>
          <Link to="/profile" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200  cursor-pointer rounded-full '>
            <div>
              <FaUserNinja size = "24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Profile</h1> 
          </Link>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200  cursor-pointer rounded-full '>
            <div>
              <IoBookmarks size = "24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Bookmark</h1> 
          </div>
          <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200  cursor-pointer rounded-full '>
            <div>
              <LuLogOut size = "24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Logout</h1> 
      </div>
          <button className='px-4 py-2 border-none text-md  bg-blue-700 w-full rounded-full text-white font-bold'>Post</button>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebar