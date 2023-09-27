const Course = require("../Model/Course.model")

exports.createCourse = async function(req, res){
      const {courseName, title, description, price} = req.body;

    try{
          if(!courseName || !title || !description || !price) return res.status(400).json({sucess: false, message: "Pleae enter courseName, title, description and price"})
             
        let course = await Course.create({courseName: courseName, title: title, description: description, price: price})
      
        if(course)     res.status(200).json({sucess: true, course})
         
      

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    
 


}

exports.getAllCourse = async function(req, res){

    try{

        let course = await Course.findAll({})
      
        if(user) res.status(200).json({sucess: true, course})
        
            

    }catch(error){
        return  res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }

}



exports.getCourseById = async function(req, res){
      
    const courseId = req.params.courseId;

    try{
        if(!courseId)  return  res.status(400).json({sucess: true, message: "Faild! please enter a id"})


        let isCourse = await Course.findOne({ where: {courseId: courseId}})
      
        if(!isCourse)  return  res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
           
        
     
        res.status(200).json({sucess: true, isCourse})

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    


}



exports.updateCourseById = async function(req, res){
     const {courseId} = req.params.courseId
     const {courseName, price, title, description} = req.body;
       
    try{
        if(!courseId)  return res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
       
       
         
        

        let isCourse = await Course.update({where: {id: courseId}})
      

        if(!isCourse)  return res.status(400).json({sucess: true, message: "Faild! please enter a valid id"})
    
          
        
       
      
        let updateUser = await User.update({courseName: courseName, price: price, title: title, description: description}, {where: { id: courseId}})

      
        if(updateUser)   res.status(200).json({sucess: true , message: "User update sucessfully"})
           
          
        
                                                        
   
    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }

}


exports.destroyCourseById = async function(req, res){
         const {courseId} = req.params.courseId;
    try{


        if(!courseId)   return res.status(400).json({sucess: true, message: "Faild! please enter valid id"})
           
        
        let course = await Course.destroy({where: {id: courseId}})
        

        if(course)  res.status(200).json({sucess: true , message: "User delete sucessfully"})
           

    }catch(error){
        return res.status(500).json({sucess: false, message: "Error! Occured by server side", error})
    }
    

}