const express = require('express')
const app = express();
app.get("/",(req,res)=>{
res.send ("Team Shashwat welcomes you")
})
app.listen(3000,(req,res)=>{
    console.log("Server is working")
})