// const app =require('./app')

// const arr=[2,4,7,1,3,8,3];
// console.log(app)

// const fs =require('fs')
// console.log("", __filename)

// console.log("", __dirname)

// const fs=require('fs').writeFileSync
// fs("xyz.txt", "xyz")


// const proxy =
//  http.createServer((req, resp) => {
//     resp.write("hello world");
//     resp.end();
//   }).listen(5000);

// const http = require('http');
// const { json } = require('stream/consumers');

// Create an HTTP tunneling proxy
//     http.createServer((req, resp) => {
//   resp.writeHead(200, { 'Content-Type': 'application\JSON'});
//   resp.write(JSON.stringify ({ name: 'vikas kumar', email:'vikas@gmail.com'}));
//   resp.end();
// }).listen(5000);

// const net = require('node:net');
// const { URL } = require('node:url');

// Create an HTTP tunneling proxy

// const http = require("http");
// const { type } = require("os");
// const Server = http.createServer((req, res) => {
//   res.writeHead(200, {"content-type": "text/plain"});
//   res.end("okay");
// });

// Server.listen(3000,()=>{
//     console.log("Server running on port 3000");
// });


// const os = require('os');

// console.log(os.freemem())

// console.log("Bihar")

// const os = require('os');

// console.log(os.freemem())

// console.log("hello world")

const express= require('express')
const app = express();

app.get('' ,(req,res)=>{
    res.send('Welcome, this is home page')
});


app.get('/about' ,(req,res)=>{
    res.send('Welcome, this is about page')
});


app.get('/help' ,(req,res)=>{
    res.send('Welcome, this is help page')
});

app.listen(5000);