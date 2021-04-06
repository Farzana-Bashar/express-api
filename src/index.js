const express= require('express');
const fetch= require('node-fetch');
const redis= require('redis');

const app= express();

const PORT= 3000;
const REDIS_PORT= 6379;

const client= redis.createClient(REDIS_PORT);

app.use(express.json());

var data={};

const setData=(user,dept)=>{
    return `<h2> ${user} is from ${dept} Department </h2>`
}

const getData=(req,res,next)=>{
    try {
        data=req.body.dept;
        var {user}= req.params;
        client.SETEX(user,3600,data);
    
        res.status(200).send(setData(user,data));
    } 
        
    catch (error) {
        console.log(error);
        res.status(500);
    }
    
}

const database=(req,res,next)=>{
    const {user}= req.params;
    client.GET(user,(err,data)=>{
        if (err)
            throw err;
        if(data!==null){
            res.status(200).send(setData(user,data));
            console.log(`user= ${user}'s data is showing from redis cache`)
        }
        else
            next();

    })
}

app.post("/api/:user", database, getData);

// app.get("/api/v1", (req,res)=>{
//     res.send(data);
// })

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})