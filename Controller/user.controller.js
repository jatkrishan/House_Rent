const User = require("../Model/user.model")
const convertUserObject = require("../unites/convertUserObj")

exports.getByIdUser = async function(req, res){
      
    const email = req.params.emailId;


    if(!email){
        return  res.status(400).json({sucess: true, message: "Faild! please enter a id"})
    }
    try{
        let user = await User.findOne({attributes: ["name", "username", "id", "role"], where: {email}})
      
        if(!user){
            return  res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
        }
     
        res.status(200).json({sucess: true, user})

    }catch(error){
    res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    
 


}

exports.getAllUser = async function(req, res){

    try{

        let user = await User.findAll({attributes: ["name", "username", "id", "role", "email"]})
      
        if(user){
             res.status(200).json({sucess: true, user})
            }

    }catch(error){
        res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }

}

exports.getByIdAdmin = async function(req, res){
      
    const email = req.params.emailId;

    if(!email){
        return  res.status(400).json({sucess: true, message: "Faild! please enter a id"})
    }
    try{
        let user = await User.findOne({attributes: ["name", "username", "id", "role"], where: {email}})
      
        if(!user){
            return  res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
        }
     
        res.status(200).json({sucess: true, user})

    }catch(error){
    res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    


}



exports.updateByIdAdmin = async function(req, res){
        const {name, username, role} = req.body;
       
    try{

        let user = await User.findOne({where: {email: req.params.emailId}})
      
        if(!user){
       
           return res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
        }
       
      
        let updateUser = await User.update({name:name}, {where: {email: req.params.emailId}})

      
        if(updateUser){
           
            res.status(200).json({sucess: true , message: "User update sucessfully"})
        }
                                                        
   
    }catch(error){
    res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }

}


exports.deleteByIdAdmin = async function(req, res){
   
    try{
        let user = await User.destroy({where: {email: req.params.emailId}})
        if(!user){
            return res.status(400).json({sucess: true, message: "Faild! please enter valid id"})
        }
           
       
        res.status(200).json({sucess: true , message: "User delete sucessfully"})
   
    }catch(error){
    res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    

}