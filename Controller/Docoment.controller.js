const Docoment = require("../Model/Docoment.model")

exports.createDocoment = async function(req, res){
      const { title, docomentUrl} = req.body;

    try{
        if(!docomentUrl || !title) return res.status(400).json({sucess: false, message: "Pleae enter title and docomentUrl"})
      
        let docoments = await Docoment.create({docomentUrl: docomentUrl, title: title})
      
        if(docoments)    res.status(200).json({sucess: true, docoments})
         
      

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    
 


}

exports.getAllDocoment = async function(req, res){

    try{

        let Docoment = await Docoment.findAll({})
      
        if(Docoment) res.status(200).json({sucess: true, Docoment})
        
            

    }catch(error){
        return  res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }

}



exports.getDocomentById = async function(req, res){
      
    const docomentId = req.params.docomentId;

    try{
        if(!docomentId)  return  res.status(400).json({sucess: true, message: "Faild! please enter a id"})


        let isDocoment = await Docoment.findOne({ where: {id: docomentId}})
      
        if(!isDocoment)  return  res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
           
        
     
        res.status(200).json({sucess: true, isDocoment})

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    


}



exports.updateDocomentById = async function(req, res){

     const {docomentId} = req.params.docomentId
     const {title, docomentUrl} = req.body;
       
    try{
        

        if(!docomentId)  return res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
       
       

        let isDocoment = await Docoment.update({where: {id: docomentId}})
      

        if(!isDocoment)  return res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
    
          
      
        let updateUser = await User.update({title: title, docomentUrl: docomentUrl}, {where: { id: docomentId}})

      
        if(updateUser)   res.status(200).json({sucess: true , message: "User update sucessfully"})
           
          
        
                                                        
   
    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }

}


exports.destroyDocomentById = async function(req, res){
         const {docomentId} = req.params.docomentId;
    try{


        if(!docomentId)   return res.status(400).json({sucess: true, message: "Faild! please enter valid id"})
           
        
        let docoments = await Docoment.destroy({where: {id: docomentId}})
        

        if(docoments)  res.status(200).json({sucess: true , message: "User delete sucessfully"})
           

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    

}