var path = require("path");
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
require("dotenv").load();

var Twitter = require("node-tweet-stream");
var t = new Twitter({
  consumer_key: process.env.TWITTER_KEY,
  consumer_secret: process.env.TWITTER_SECRET,
  token: process.env.TWITTER_TOKEN,
  token_secret: process.env.TWITTER_TOKEN_SECRET
});


// Express
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
  res.sendFile("/index.html");
});


// Connect Clientside
io.on("connection", function(socket){
  // Twitter
  t.on("tweet", function(tweet) {
    console.log("emit `tweet`", tweet);
    io.emit("tweet", tweet);
  });

  t.on("error", function(err) {
    console.log("Error!!");
  });

  t.track("node.js");
  t.track("atom");
  t.track("atomeditor");
  t.track("sublimetext");
  t.track("vim");
  t.track("emacs");

  // log
  console.log("a user connected");
});


// HTTP listen on port 4000.
http.listen(4000, function(){
  console.log("listening on *:4000");
});