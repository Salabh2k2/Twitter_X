import React, { useState } from 'react'

const Login = () => {
  const [islogin, setIslogin] = useState(true)
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
            <form className='flex flex-col w-[50%]'>
              {
                !islogin && (
                  <>
                  <input type = "text" placeholder='Name' className='outline-blue-500 border border-gray-800 my-1 px-3 py-1 font-semibold rounded-full' />
                  <input type = "text" placeholder='UserName' className='outline-blue-500 border font-semibold border-gray-800 my-1 px-3 py-1 rounded-full'/>

                  </>
                )
              }
              <input type = "text" placeholder='Email' className='outline-blue-500 border font-semibold border-gray-800 my-1 px-3 py-1 rounded-full'/>
              <input type = "password" placeholder='Password' className='outline-blue-500 border font-semibold border-gray-800 my-1 px-3 py-1 rounded-full'/>
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