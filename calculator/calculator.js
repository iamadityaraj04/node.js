const express=require("express");
const app=express();

const bodyparser=require("body-parser");

app.use(bodyparser.urlencoded({extended:true}));//using urlencoded we can access form data;

app.listen(8080,()=>{
    console.log("Server is running on 8080...");
})

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");// __dirname gives the path in current directory
})

/* calculating BMI */
app.get("/bmi",(req,res)=>{
    res.sendFile(__dirname+"/bmiCalculator.html");
})
app.post("/bmi",(req,res)=>{
    let num1=parseFloat(req.body.height);
    let num2=parseFloat(req.body.weight);
    // console.log(num1+" "+num2);
    let bmi=num2/(num1*num1);
    res.send(`BMI = ${bmi.toFixed(2)}`);
})

/* Adding two number*/
//handling post request
app.post("/",(req,res)=>{
    //var num1=req.body.num1;// here num is passed as text
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result=num1+num2;
    res.send(`Sum is ${result} .`);
})