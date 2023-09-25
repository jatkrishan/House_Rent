const bcrypt = require("bcrypt")
const authKeys = require("../Config/authKey.config")
const jwt = require("jsonwebtoken")
const User = require("../Model/user.model")



exports.signup =  async (req, res) => {

   const user = await User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    role: req.body.role
  })
   try{
     if(user){
        res.status(200).json({sucess: true, message: "User registration sucessfully"}).end()
     }
   }catch(error){
    res.status(400).json({sucess: false, message: "Error Occured in SignUp Process", error}).end()
   }

}


exports.signin =  async (req, res) => {
   
   const {email, password,} = req.body;
  
 try{

  if(!email || !password){

    return res.status(400).json({sucess: false, message: "Faild! please enter email & password"}).end()
  }


   const user = await User.findOne({where: {email: email}})


    if(!user ){
    return res.status(400).json({sucess:false, message:'Error! User not found'}).end()
   }
    
     let isValid = bcrypt.compareSync(password, user.password)
    

if(isValid == null){
  return res.status(400).json({sucess:false, message:'Error! passwrd is invalid'}).end()
}

const token = jwt.sign({id: user.id}, authKeys.authKeyss, {
  expiresIn: 86400
})
    
   res.status(200).json({name: user.name, id: user.id, role: user.role, accessToken: token})
   
 }catch(error){
  return res.status(500).json({sucess:false, message:'Error Occured in SignUp Process' }).end()
 }
 }