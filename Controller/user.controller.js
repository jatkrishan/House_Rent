const User = require("../Model/User.model")


exports.getUsrById = async function(req, res){
      
    const {userId} = req.params.userId;
     
    
    try{

        if(!userId) return  res.status(400).json({sucess: true, message: "Faild! user not found"})


        let isUser = await User.findOne({attributes: ["name", "username", "id", "role"], where: {email:userId}})
      
        if(!isUser) return  res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
        
        
        res.status(200).json({sucess: true, isUser})

    }catch(error){
        return  res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    
 


}

exports.getAllUser = async function(req, res){

    try{

        let user = await User.findAll({attributes: ["name", "username", "id", "role", "email"]})
      
        if(user) return res.status(200).json({sucess: true, user})
           

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }

}

exports.getUserById = async function(req, res){
      
    const {userId} = req.params.userId;

    if(!userId)  return  res.status(400).json({sucess: true, message: "Faild! user not found"})
      
    
    try{
        let user = await User.findOne({attributes: ["name", "username", "id", "role"], where: {email: userId}})
      
        if(!user)   return  res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
          
        
        res.status(200).json({sucess: true, user})

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    


}



exports.updateUserById = async function(req, res){
       const {userId} = req.params.userId
        const {name, userName, role} = req.body;
       
    try{

        let user = await User.update({where: {email: userId}})
      
        if(!user)  return res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
       
      
        let updateUser = await User.update({name:name, userName, role: role}, {where: {email: userId}})

      
        if(!updateUser) return  res.status(400).json({sucess: true, message: "Faild! user not found"})
           
          
       return res.status(200).json({sucess: true , message: "User update sucessfully"})
                                                        
   
    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }

}


exports.destroyUserById = async function(req, res){
    const {userId} = req.params.userId
   
try{
    
    if(!userId)  return res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})

    let user = await User.destroy({where: {email: userId}})
  
    if(!user)  return res.status(400).json({sucess: true, message: "Faild! user not found"})
       
      if(user)  return res.status(200).json({sucess: true , message: "User delete sucessfully"})
  
                                                    

}catch(error){
return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
}
    

}