const express = require('express')
const bodyparser = require('body-parser')
const app = express();
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(express.json())

let arr = [];

app.get("/",(req,res)=>{
res.send ("Team Shashwat welcomes you")
})


app.get("/about",(req,res)=>{
res.send ("Team Shashwat is a web developers group")
})

app.get("/contact",(req,res)=>{
    res.send ("Team Shashwat's contact us page")
    })

app.get("/fun",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
    
     
    // res.end();
})

 app.post("/fun",(req,res)=>{
     let n1 = req.body.value;
     arr.push(n1);
     console.log(arr);
     res.end();
    //   res.send(n2)
    //   console.log(n2)
 })

 app.put("/fun/:id",(req,res)=>{
     let n2 = req.params.id
     arr.splice(1,1, 7);
      console.log(n2)
      console.log(arr)
      res.end();
 })



app.listen(3000,(req,res)=>{
    console.log("Server is working")


})