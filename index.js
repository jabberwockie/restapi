const express = require('express');

//set up express app
const app = express();

app.get('/', function(){
  console.log('get request');
});

//listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("Now listening for requests");
});
