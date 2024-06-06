export const Register = async (req,res) =>{
  try {
    const {name, username, email, password} = req.body
    if(!name || !username || !email || !password)
      {
        return res.status(401).json({
          message:"All fields are required"
        })
      }
  } catch (error) {
    
  }
}