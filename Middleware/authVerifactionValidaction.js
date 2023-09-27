
const User = require("../Model/User.model")

exports.validactionVerify = async function (req, res, next){
         
   const { email , name, username, password} = req.body;
   
   if(!name || typeof(name) != "string")
    
   return res.status(400).json({sucess: false , message: "Faild! please enter name"})

    
    if(!username || typeof(username) != "string")
    
       return res.status(400).json({sucess: false , message: "Faild! please enter username"})

      if(!password || typeof(password) != "string") 
          
      return res.status(400).json({sucess: false , message: "Faild! please enter password"})
   

    if(!email || typeof(email) != "string" )
    
      return res.status(400).json({sucess: false , message: "Faild! email isn't valid"})

     const Email = await User.findOne({where: {email}})
     
    if(Email)

     return res.status(400).json({sucess: false , message: "Faild! email alredy present"})


    next()
}