const express=require('express');
const app=express();
const port=process.env.PORT || 2222;

app.get('/yes',(req,res)=>{
    res.send("BETMASTER SECOND SAMPLE BACKEND PROJECT")
});

app.listen(port,()=>{
    console.log("Port is hosted")
})

module.exports=app;