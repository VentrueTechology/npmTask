'use strict';
var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.use('/assets', express.static('assets'));

app.get('/', (req, res)=>{
  res.render('index');
});

const port = (process.env.PORT) ? process.env.PORT : 1234;

app.listen(port, function () {
  console.log('Up and running ' + port);
});
