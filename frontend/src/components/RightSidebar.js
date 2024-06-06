import React from 'react'
import Avatar from 'react-avatar';
import { IoSearch } from "react-icons/io5";

const RightSidebar = () => {
  return (
    <div className='w-[20%] py-3'>
      <div className='flex  items-center p-2 bg-gray-100 outline-none rounded-full' >
        <IoSearch size={"20px"}/>
        <input type = "text" className='bg-transparent outline-none px-2' placeholder='search'/>
      </div>
      <div className='p-4  bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold my-3 text-lg items-center'>Who to Follow</h1>
        <div className='flex items-center justify-between'>
          <div className='flex'>
            <div className='py-2'>
            <Avatar size='40px'/>
            </div>
            <div className='ml-2'>
              <h1 className='font-bold'>Manoj</h1>
              <p className='text-sm'>@Disturbed</p>
            </div>
          </div>
          <div>

          <button className='px-4 py-1 bg-black rounded-full ml-2 mr-2 text-white'>Profile</button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default RightSidebar