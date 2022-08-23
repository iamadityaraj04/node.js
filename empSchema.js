const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String,
        min:10,
        max:10
    }
})

const employees=new mongoose.model("pracdb",schema);
module.exports=employees;