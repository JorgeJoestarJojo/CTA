const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const postRoute= require("./routes/posts")

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("backEnd/images")));

mongoose.connect("mongodb+srv://aronspartan:ZaiKHcKdXxoZzFJ9@cluster0.bqoiqmz.mongodb.net/node-angulars?retryWrites=true&w=majority")

.then(()=>{
  console.log('Base de datos conectada');
})
.catch(()=>{
console.log('conexion fallida:()');
});

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*" );
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  //res.setHeader("Allow", "GET, POST, PATCH, PUT, DELETE, OPTIONS");//
  next();
});

app.use("/api.posts", postRoute);



module.exports = app;

