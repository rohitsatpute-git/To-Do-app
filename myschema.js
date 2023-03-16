const mongoose=require('mongoose');

const myschemas=new mongoose.Schema({
    email:String,
    tasks:[{
        id:String,
        task:String
    }]
});

module.exports=mongoose.model("MySchema",myschemas);
