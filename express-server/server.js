// Importing the express module
const express=require("express");

// Initializing the express and port number
const app=express();
const port=3000;

// starting server and App listening on the below port
app.listen(port,()=> {
    console.log(`Server has started at port no. ${port} ...`);
})

//handling request
app.get("/", (req,res)=>{
     res.send("<h1>Hello!</h1> How are you?");// sending response to the browser.
})

//routing to about page and sending html as response
app.get("/about", (req,res)=>{
     res.send("<h1>About Me</h1> Name: Aditya Raj <br> Reg No.- 11911045 <br> Domain: Web Development");// sending response to the browser.
})

app.get("/contact", (req,res)=>{
     res.send("<h1>Contacts</h1> Email: adityarohitraj@gmail.com <br> Phone No.- 8340711285");// sending response to the browser.
})
 