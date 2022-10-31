const express = require('express');
const bodyParse = require('body-parser');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser')
const url = require('url');
const { resourceLimits } = require('worker_threads');
const app = express();

app.use(bodyParse.json());


app.get("/", function(req, res, next){
    res.send("You reached home page");
})

app.post("/", function(req, res, next){
    console.log(req.body);
    res.send("received");
})

app.get("/user/:id", function(req, res, next){
    console.log(req.params);
    res.send("done");
})

app.get("/query", function(req, res, next){
    console.log(req.url);
    const u = url.parse(req.url,true );
    console.log(u);
    console.log(req.params);
    console.log(req.query);
    res.send("done");
})

app.pa("/delete", function(req, res, next){
    console.log(req.body);
    res.send("received");
});

app.post("/login", function(req, res, next){
      
});

app.get("/cookie", function(req, res, next){
      let token = jwt.sign({id:1}, "hii", {})
});




app.listen(3000, function(){
    console.log("app has started");
})