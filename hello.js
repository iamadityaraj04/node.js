
const express=require('express');
const app=express();

require("./pracdb.js");

const employees=require("./empSchema.js")
const port = 3000;

app.use(express.json());

app.post("/api/data",(req,res)=>{
  const emp=new employees(req.body);
  console.log(emp);
  emp.save().then(()=>{
    res.send(emp);
  }).catch((err)=>{
    res.send(err);
  })
})

app.listen(port,()=>{
  console.log(`app is running...`);
})