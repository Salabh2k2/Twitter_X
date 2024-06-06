import {User} from "../models/userSchema.js"
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
export const Register = async (req,res) =>{
  try {
    const {name, username, email, password} = req.body
    if(!name || !username || !email || !password)
      {
        return res.status(401).json({
          message:"All fields are required.",
          success:false
        })
      }
      const user = await User.findOne({email})
      if(user)
        {
          return res.status(401).json({
            message:"User already exists.",
            success:false
          })
        }
        const hashedPassword = await bcryptjs.hash(password,16)
        await User.create({
          name,
          username,
          email,
          password:hashedPassword
        })
        return res.status(201).json({
          message:"User registered successfully.",
          success:true
        })
  } catch (error) {
    console.log(error)
  }
}

export const Login = async (req,res)=>{
  try {
    const {email,password} = req.body
    if(!email || !password)
      {
        return res.status(401).json({
          message:"All fields are required.",
          success:false
        })
      }
      const user = await User.findOne({email}) // Add await here
      if(!user)
        {
          return res.status(401).json({
            message:"User does'nt exist",
            success: false
          })
        }
        const isPassword = await bcryptjs.compare(password,user.password)
        if(!isPassword)
          {
            return res.status(401).json({
              message:"Invalid credentials",
              success:false
            })
          }
          const tokenData = {
            userId: user._id // Use user._id instead of user_id
          }
          const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET, {expiresIn:"1d"})

          return res.status(201).cookie("token",token,{expiresIn:"1d",httpOnly:true}).json({
            message:`Welcome Back ${user.name}`,
            success:true
          
          })

  } catch (error) {
    console.log(error);
  }
}

export const Logout = (req,res)=>{
  return res.cookie("token","",{expiresIn:new Date(Date.now())}).json({
    message:"Logged out successfully",
    success:true
  })
}