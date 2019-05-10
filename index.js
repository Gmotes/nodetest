var express = require("express");

var app = express();

app.use((req,res,next){
    console.log("Log middleware");
    next();
})

app.post("/",function(req,res,next){
    console.log("main post function");
    next();
})

app.listen(8080,()=>{

});