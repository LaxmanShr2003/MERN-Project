const express = require('express');
const connectToDatabase = require('./database/database.config')
const app = express();
const PORT = 3000

connectToDatabase()

app.get('/',(req,res)=>{
    res.send('hello world')
})


app.listen(PORT,()=>{
    console.log(`server is running at port ${PORT}`);
})