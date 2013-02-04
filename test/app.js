var express = require('express');
var routes = require('./routes');

var app = express();

app.get('/', routes.index);

app.listen(3009);
console.log('Listening on 3009');