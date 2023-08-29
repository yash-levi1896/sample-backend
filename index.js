const express=require('express')
const app=express()


app.get("/get",(req,res)=>{
    console.log(req.get('host'))
    res.send("response ends")
})

app.listen(3000,()=>{
    console.log("server is running")
    
})