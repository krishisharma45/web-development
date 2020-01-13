const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: "true"}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res){
  var first = req.body.first;
  var last = req.body.last;
  var email = req.body.email;
  var list = 'f5aec4c952';
  var key = '7942b1795441b60e7b935221d65770da-us20';
  //console.log(first, last, email);
  var data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: first,
          LNAME: last
        }
      }
    ]
  };

  var options = {
    url: 'https://us20.api.mailchimp.com/3.0/lists/' + list,
    method: "POST",
    headers: {
      "Authorization": "krishi " + key
    },
    body: JSON.stringify(data)
  };

  request(options, function(error, response, body){
    if (error || response.statusCode != 200) {
      console.log(response.statusCode);
      res.sendFile(__dirname + "/failure.html");
    }

    else {
      console.log(response.statusCode);
      console.log(options);
      res.sendFile(__dirname + "/success.html");
    }
  });
});

app.post("/failure", function(req, res){
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running on port 3000.");
});
