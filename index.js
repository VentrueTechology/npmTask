'use strict';
var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.use('/assets', express.static('assets'));

app.get('/', (req, res)=>{
  res.render('index');
});

app.listen(1234, function () {
  console.log('Example app listening on port 3000!');
});


// let express = require('express');
// var path = require('path');
// let app = express();
// app.set('view engine', 'pug');

// app.use(express.static(path.join(__dirname, 'assets')));

// const port = (process.env.PORT) ? process.env.PORT : 1234;
// app.listen(port);
// module.exports = app;
// console.log("Up on port:", port);
