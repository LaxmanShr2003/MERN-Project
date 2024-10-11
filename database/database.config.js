const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");
 const connectToDatabase = async () => {
    try{
  await mongoose.connect(process.env.CONNECTIONSTRING);
  console.log("database connected successfully");
    }catch(error){
        console.log("unable to connect databse");
    }
};
module.exports= connectToDatabase
