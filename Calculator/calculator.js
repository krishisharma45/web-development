const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

//var answer = a + b;

app.get("/", function (request, response){
  response.sendFile(__dirname + "/calculator.html");
});

app.post("/calculator.html", function(request, response){
  var num1 = Number(request.body.a);
  var num2 = Number(request.body.b);
  var answer = num1 + num2;

  response.send("The result is " + answer);
});

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
