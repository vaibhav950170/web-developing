const express=require('express');
const bodyParser= require('body-parser');
const app=express();

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});

app.listen(process.env.PORT ||3000,function(req,res){
  console.log(("Server is Up"));
})
