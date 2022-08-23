const mongoose=require("mongoose");

const port=27017;
const dbname="pracdb";
mongoose.connect(`mongodb://localhost:${port}/${dbname}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("Connection Established...")).catch((err)=>console.log(err));

