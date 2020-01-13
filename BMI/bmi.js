const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
  response.sendFile(__dirname + "/bmi.html");
})

app.post("/bmi.html", function(request, response){
  var weight = parseFloat(request.body.weight);
  var height = parseFloat(request.body.height);

  var bmi = weight/(height*height);
  response.send("Your BMI is " + bmi);
})

app.listen(3000, function() {
  console.log("Server started on port 3000.");
});
