import cors from 'cors';
import express from 'express';
import { connectToDB, db } from './db.js';
const app=express();
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.send("server is running")
})

app.post('/input/:name',async(req,res)=>
{
    const details=await db.collection('mouni').insertOne({Name:req.params.name})
    res.json(details);
})


connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})