const express =require('express');
const app=express();

app.use(express.static('static'));

app.get("/",function(req,res){
	res.sendFile(__dirname+"/index.html");
});

app.listen(process.env.PORT || 3000,function(req,res){
	console.log('Server is up.');
})