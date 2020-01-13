const express = require("express");

const app = express();

app.get("/", function (request, response){
  //console.log(request);
  response.send("Hello");
});

app.get("/contact", function(request, response){
  response.send("Contact me at krishisharma@gmail.com");
});

app.get("/about", function(request, response){
  response.send("I'm Krishi, an artist and engineer-in-training.");
});

app.get("/activities", function(request, response){
  response.send("My hobbies are oil painting and front end development.");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
