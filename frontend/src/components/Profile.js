import React from 'react'
import Avatar from 'react-avatar';
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
const Profile = () => {
  return (
    <div className='w-[50%] border-l border-r border-gray-200'>
      <div>
        <div className='flex items-center py-2'>
          <Link to="/" className='p-2 rounded-full hover:bg-gray-100 hover: cursor-pointer'>
          <IoMdArrowRoundBack size = '24px'/>
          </Link>
          <div className='ml-2'>
          <h1 className='font-bold text-lg'>Salabh</h1>
          <p className='text-gray-500 text-sm'>10 Post</p> 
          </div>
        </div>
        <img src='https://f.vividscreen.info/soft/9819553199766ac9678a04875e8a4ee1/Sunset-Silhouettes-1920x1080.jpg' alt = 'banner' />
        <div className='absolute top-56 ml-2 border-4 border-white rounded-full'>
          <Avatar src='https://img.freepik.com/premium-photo/beautiful-picture-3d-cutest-little-krishna-holding-flute-generative-ai_849906-10145.jpg?w=900 ' size='120px' round={true} />
        </div>
        <div className='text-right'>
          <button className='px-4 hover: bg-gray-200 py-1 rounded-full  border-gray-500'>
            Edit Profile
          </button>
        </div>
        <div className=''>
          <h1 className='font-bold text-lg'>
            Salabh
          </h1>
          <p>@Dr_Philosopher</p>
        </div>
        <div className='text-sm'>
          <p>
            Hello developers, I am Salabh rai, and I code in C++ and Try to stay away from User Manoj with username @Disturbed. thanks
          </p>
        </div>
      </div>
    </div>
  )
}

export default Profile