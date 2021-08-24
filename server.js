const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("BETMASTER SECOND SAMPLE BACKEND PROJECT")
});

app.listen(5001,()=>{
    console.log("Port is hosted")
})

module.exports=app;