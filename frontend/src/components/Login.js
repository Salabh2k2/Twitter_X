import React, { useState } from 'react'
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constants';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [islogin, setIslogin] = useState(true)

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    // code here
    e.preventDefault()
    //console.log(name,username,email,password)
    if(islogin)
      {
        try {
          const res = await axios.post(`${USER_API_END_POINT}/login`,{email,password},{
            headers:{
              "Content-Type":"application/json"
            },
            withCredentials:true
          })
          if(res.data.success)
            {
              navigate("/")
              toast.success(res.data.message)
            }
        } catch (error) {
          toast.success(error.response.data.message)
          console.log(error);
        }
      }
      else{
        try {
          const res = await axios.post(`${USER_API_END_POINT}/register`,{name,username,email,password},{
            headers:{
              "Content-Type":"application/json"
            },
            withCredentials:true
          })
          if(res.data.success)
            {
              setIslogin(true)
              toast.success(res.data.message)
            }
        } catch (error) {
          toast.success(error.response.data.message)
          console.log(error);
        }
      }
  };

  const loginSignupHandler = ()=>{
    setIslogin(!islogin)

  
  }
  return (
   
    <div className='w-screen h-screen flex items-center justify-center ml-20'>
      <div className='flex items-center justify center w-[80%]'>
        <div>
          <img className='ml-5' src='https://logowik.com/content/uploads/images/twitter-x5265.logowik.com.webp' alt='Twitter' width={"300px"}/>
        </div>
        <div>
            <div className=''>
              <h1 className='font-bold text-6xl'>Happening Now...</h1>
            </div>
            <h1 className='mt-4 mb-2 font-bold text-2xl '>{islogin?"Login":"Signup"}</h1>
            <form onSubmit={submitHandler} className='flex flex-col w-[50%]'>
              {
                !islogin && (
                  <>
                  <input type = "text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' className='outline-blue-500 border border-gray-800 my-1 px-3 py-1 font-semibold rounded-full' />
                  <input type = "text" placeholder='UserName' value={username} onChange={(e)=>setUsername(e.target.value)}  className='outline-blue-500 border font-semibold border-gray-800 my-1 px-3 py-1 rounded-full'/>

                  </>
                )
              }
              <input type = "email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}  className='outline-blue-500 border font-semibold border-gray-800 my-1 px-3 py-1 rounded-full'/>
              <input type = "password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}  className='outline-blue-500 border font-semibold border-gray-800 my-1 px-3 py-1 rounded-full'/>
              <button className='bg-blue-500 border-none py-2 my-3 rounded-full text-md text-white'>{islogin?"Login":"Create Account"}</button>
              <h1>
                {
                islogin?"Don't Have an Account? ":" Already Have an Account? "
                }
                <span className='font-bold text-blue-500 cursor-pointer' onClick={loginSignupHandler}>
                  {
                    islogin?"SignUp":"Login"
                  }
                </span>
              </h1>

            </form>
        </div>
      </div>
    </div>
  )
}

export default Login