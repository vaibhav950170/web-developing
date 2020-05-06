const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});
app.post("/", function(req, res) {
  var first = req.body.fname;
  var last = req.body.lname;
  var email = req.body.email;
  var data={
    members:[
      {email_address:email,
          status:"subscribed",
        merge_fields: {
          FNAME:first,
          LNAME:last
        }
    }
    ]
  };
var jsonData=JSON.stringify(data);

  var option = {
    url: "https://us8.api.mailchimp.com/3.0/lists/4473ba255f",
    method: "POST",
    headers:{
      "Authorization":"Vaibhav ebcba4090afd89720bac3849f6dcf4fa-us8"
    },
    body:jsonData

  };
  request(option, function(error, response, body) {
    if (error) {
      res.sendFile(__dirname+"/failure.html");
    } else {
      if(response.statusCode===200){
        res.sendFile(__dirname+"/success.html");
      }
      else{
        res.sendFile(__dirname+"/failure.html");
      }
    }
  });

app.post("/failure", function(req,res){
  res.redirect("/");
})
})
app.listen(process.env.PORT || 3000, function() {
  console.log("Server is UP:");
});



