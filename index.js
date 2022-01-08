//Import the necessary libraries/declare the necessary objects
var path =require('path')
var express = require("express");
// var myParser = require("body-parser");
var app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
    // console.log(req.url)
    res.sendFile(path.join(__dirname,'\game.html'))
})
app.post("/snakeGame", function (request, response) {
    console.log("POST")
    response.send("POST")
    console.log(request.body); //This prints the JSON document received (if it is a JSON document)
});

//Start the server and make it listen for connections on port 8080

app.listen(5000);