const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/index.html", function(req, res){
  var crypto = req.body.crypto;
  var currency = req.body.currency;
  var amount = req.body.amount;
  //var url = "https://apiv2.bitcoinaverage.com/indices/global/ticker/" + crypto + currency;
  var url = "https://apiv2.bitcoinaverage.com/convert/global?from=" + crypto + "&to=" + currency + "&amount=" + amount;
  request(url, function(error, response, body){
    var date = JSON.parse(body).time;
    var price = JSON.parse(body).price;
    res.write("<p>The current date is " + date + "</p>");
    res.write("<h1>The current price of " + amount + " " + crypto + " is " + price + " " + currency + ".</h1>");
    res.send();
  });
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
