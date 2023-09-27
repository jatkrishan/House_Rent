const jwt = require("jsonwebtoken")
const configKey = require("../Config/authKey.config")
const User = require("../Model/User.model")
const constent = require("../unites/Users") 

exports.isValidUser = async function(req, res, next){
    let token = req.headers["x-access-token"]
   
      
    try{
      
        if(!token){
        return res.status(400).json({sucess: false, message: "Please enter a token"})
        }
        
   
        jwt.verify(token, configKey.authKeyss, (error, decoded) => {

            if(error){
                return res.status(401).send({message: "Request cannot be authenticated. Token is invalid"})   
                 }
    
                 req.userId = decoded.id


                 next()
         })

               
                
    }catch(error){
        return res.status(500).json({sucess: false, message: "Error Occured in server fsdf  Process"})
    
    }

   
}



exports.isAdminAndAcademy = async function async(req, res, next){
   
    try{
         let isValidAdmin = await User.findOne({where:{id: req.userId}})
         

         if(isValidAdmin.dataValues.role == constent.userType.student)
        return res.status(400).json({sucess: false, message: "Faild! only admin and academy are allowed"})

             next()

    }catch(error){
       return res.status(500).json({sucess: false, message: "Error Occured in server Process"})
    }

}




exports.isAdmin = async function async(req, res, next){
   
     try{
          let isValidAdmin = await User.findOne({where:{id: req.userId}})
          

          if(isValidAdmin.dataValues.role != constent.userType.admin)
              return res.status(400).json({sucess: false, message: "Faild! only admin allowed"})

              next()

     }catch(error){
        return res.status(500).json({sucess: false, message: "Error Occured in server Process"})
     }

}