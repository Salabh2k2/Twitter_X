import React from 'react'
import Avatar from 'react-avatar'
import { FaRegCommentDots } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
const Tweet = () => {
  return (
    <div className='border-b border-gray-200'>
      <div>
        <div className='flex items-center p-4'>
          <Avatar size='45px'/>
          <div className='ml-2 w-full'>
          <div className='flex items-center'>
            <h1 className='font-bold'>Salabh</h1>
            <p className='text-gray-500 text-sm ml-1'>@Dr_Philosopher</p>
          </div>
          <div>
            <p>Hello developers let's connect together.</p>
          </div>
          <div className='flex justify-between'>
            <div  className='flex items-center'>
              <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
              <FaRegCommentDots  size={"18px"} />
              </div>
              
              <p>0</p>
            </div>
            <div className='flex items-center'>
              <div className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
              <FaHeart size={"18px"} />
              </div>
              
              <p>0</p>
            </div>
            <div className='flex items-center'>
              <div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>
              <FaSave size={"18px"} />
              </div>
             
              <p>0</p>
            </div>
          </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Tweet