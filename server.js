//require files another folder
const dbConfig = require("./Config/server")
const sequlizeIncetance = require("./Config/db.config")


//Require Steps
const express = require("express");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false})); 

app.use(express.json());


// // Register a new user
// app.post('/register', async (req, res) => {
//   const { name, username, email, password,role} = req.body;

//   try {
//     // Hash the password

//     await model.create({
//         name:name,
//         username:username,
//         email:email,
//         password : bcrypt.hashSync(password,8),
//         role
//     })
//     res.status(200).json({ sucess:true, message:"signUp successful"}).end();
    
   
//   }catch (err) {
//     console.error('Password hashing error:', err);
//     return res.status(500).json({ err});
//   }
// });

require("./Routes/auth.route")(app)


app.listen(dbConfig.PORT, () => {
    console.log("Application is started " , dbConfig.PORT)
})