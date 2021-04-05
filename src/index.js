const express= require('express');

const app= express();

app.use(express.json());


var data={};

app.post("/api/user", (req,res)=>{
    data=req.body;
    console.log(data);
    res.send(data);
})

app.get("/api/v1", (req,res)=>{
    res.send(data);
})


const PORT= 3000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})