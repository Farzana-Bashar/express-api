const express= require('express');

const app= express();

app.get("/api/v1", (req,res)=>{
    res.send('Hello there!!');
})

const PORT= 3000;

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})