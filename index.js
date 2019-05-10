var express = require("express");

var app = express();

app.use((req,res,next){
    console.log("Log middleware");
    next();
})


app.listen(8080,()=>{

});