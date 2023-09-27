const Video = require("../Model/Video.model")

exports.createVideo = async function(req, res){
      const { title, courseUrl} = req.body;

    try{
        if(!courseUrl || !title) return res.status(400).json({sucess: false, message: "Pleae enter title and courseUrl"})
      
        let course = await Video.create({courseUrl: courseUrl, title: title})
      
        if(course)    res.status(200).json({sucess: true, course})
         
      

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    
 


}

exports.getAllVideo = async function(req, res){

    try{

        let Video = await Video.findAll({})
      
        if(Video) res.status(200).json({sucess: true, Video})
        
            

    }catch(error){
        return  res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }

}



exports.getVideoById = async function(req, res){
      
    const videoId = req.params.videoId;

    try{
        if(!videoId)  return  res.status(400).json({sucess: true, message: "Faild! please enter a id"})


        let isVideo = await Video.findOne({ where: {id: videoId}})
      
        if(!isVideo)  return  res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
           
        
     
        res.status(200).json({sucess: true, isVideo})

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    


}



exports.updateVideoById = async function(req, res){

     const {videoId} = req.params.videoId
     const {title, courseUrl} = req.body;
       
    try{
        if(!videoId)  return res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
       
       
         
        

        let isVideo = await Video.update({where: {id: videoId}})
      

        if(!isVideo)  return res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
    
          
      
        let updateUser = await User.update({title: title, courseUrl: courseUrl}, {where: { id: videoId}})

      
        if(updateUser)   res.status(200).json({sucess: true , message: "User update sucessfully"})
           
          
        
                                                        
   
    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }

}


exports.destroyVideoById = async function(req, res){
         const {videoId} = req.params.videoId;
    try{


        if(!videoId)   return res.status(400).json({sucess: true, message: "Faild! please enter valid id"})
           
        
        let course = await Video.destroy({where: {id: videoId}})
        

        if(course)  res.status(200).json({sucess: true , message: "User delete sucessfully"})
           

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    

}