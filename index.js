var express = require("express");

var app = express();
var port = 8080;
app.use(function(req,res,next){
    console.log("Log middleware");
    next();
})

app.post("/",function(req,res,next){
    console.log("main post function");
    next();
})

app.post("/api",function(req,res,next){
    console.log("api post function");
    next();
})

app.listen(port,()=>{

});