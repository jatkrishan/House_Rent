const Test = require("../Model/Test.model")

exports.createTest = async function(req, res){
      const {title} = req.body;

    try{
        if(!title) return res.status(400).json({sucess: false, message: "Pleae enter title an"})
      
        let test = await Test.create({title: title})
      
        if(test)   res.status(200).json({sucess: true, docoments})
         
      

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    
 


}

exports.getAllTest = async function(req, res){

    try{

        let test = await Test.findAll({})
      
        if(test) res.status(200).json({sucess: true, Test})
        
            

    }catch(error){
        return  res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }

}



exports.getTesttById = async function(req, res){
      
    const testId = req.params.testId;

    try{
        if(!testId)  return  res.status(400).json({sucess: false, message: "Faild! please enter a id"})


        let isTest = await Test.findOne({ where: {id: testId}})
      
        if(!isTest)  return  res.status(400).json({sucess: false, message: "Faild! please enter a valid id"})
           
        
     
        res.status(200).json({sucess: true, isTest})

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    


}



exports.updateTestById = async function(req, res){

     const {testId} = req.params.testId
     const {title} = req.body;
       
    try{
        

        if(!testId)  return res.status(400).json({sucess: false, message: "Faild! please enter a valid id"})
       
       

        let isTest = await Test.update({where: {id: testId}})
      

        if(!isTest)  return res.status(400).json({sucess: false, message: "Faild! please enter a valid id"})
    
          
      
        let updateUser = await User.update({title: title}, {where: { id: testId}})

      
        if(updateUser)   res.status(200).json({sucess: true , message: "User update sucessfully"})
           
          
        
                                                        
   
    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }

}


exports.destroyTestById = async function(req, res){
         const {testId} = req.params.testId;
    try{


        if(!testId)   return res.status(400).json({sucess: false, message: "Faild! please enter valid id"})
           
        
        let docoments = await Test.destroy({where: {id: testId}})
        

        if(docoments)  res.status(200).json({sucess: true , message: "User delete sucessfully"})
           

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    

}