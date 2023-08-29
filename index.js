const express=require('express')
const app=express()


app.get("/get",(req,res)=>{
    res.send(req.get('host'))
    
})

app.listen(3000,()=>{
    console.log("server is running")
    
})