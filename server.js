const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const MySchema=require('./myschema');
const fs=require("fs");
const Myschema = require('./myschema');

// require('dotenv').config();

const app=express();
const path=require('path');
const router=express.Router();

app.use('/.netlify/functions/api',router);
app.use(express.static(path.join(__dirname+"/public")));
app.use(cors());

app.use(express.json({extended:false}));

app.get('/',(req,res)=>{
    console.log("runnig")
    res.send("hello");
})

app.get('/message',async (req,res)=>{
    console.log(req.body)
    const k=await Myschema.find({});
    res.send("in message");
    
})

app.post('/message',async (req,res)=>{

    const alr=await Myschema.find({email:req.body.email});
    if(alr.length==0){
        Myschema.insertMany({email:req.body.email})
    }
    if(req.body.name!="#")
    {
     console.log("inside")
    // const newshema=new MySchema({
    //     task:req.body.name
    // })
    // console.log(req.body.name)
    await Myschema.updateOne({email:req.body.email},{$push:{tasks:{id:req.body.id,task:req.body.name}}});
    
   }
   console.log(req.body.email)
   const k=await Myschema.find({email:req.body.email});
   if(k.length==0) {
    console.log(k)
    res.send("");
   }else{
   console.log(k[0].tasks)
   res.send(k[0].tasks);
   }
    
})

app.delete('/message',async(req,res)=>{
    // let k=await MySchema.find({email:req.body.email});
    console.log(req.body.idno)
   await Myschema.updateOne({email:req.body.email},{$pull:{tasks:{_id:req.body.idno}}});
   let k=await Myschema.find({email:req.body.email});
    res.send(k[0].tasks);
})

let port=process.env.PORT;
if(port==null || port==""){
    port=8000;
}

app.listen(port,()=>{
    console.log("server is running on port 8000");
})
// mongodb+srv://rohitsatpute480:<password>@cluster0.dspc0vx.mongodb.net/?retryWrites=true&w=majority

mongoose.connect("mongodb+srv://rohitsatpute480:Mongodb%40dark31@cluster0.dspc0vx.mongodb.net/test?retryWrites=true&w=majority",
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}

);


// module.exports.handler=serverless(app);


// exports.app=functions.https.onRequest(app);
