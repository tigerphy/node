'use strict';
console.log('Hello there');

const express = require('express'); //give the library 'express'
const app = express(); //express is a server.

app.get('/', (req, res) =>{ //'/'get the link www...../ request & response.
  res.send('Hello World');
});

app.listen(3000); //we are listening until we get any request and answer it.npm