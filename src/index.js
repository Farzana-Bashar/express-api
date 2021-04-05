const express= require('express');

const app= express();

app.use(express.json());

app.get("/api/v1", (req,res)=>{
    res.send({user: 'zerin'});
})

const PORT= 3000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})