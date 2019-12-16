var express = require('express');
var MongoClient = require('mongodb').MongoClient;

var app = express();

app.get('/', function(req, res) {
    res.send('It is alive');
});

app.listen(4242, function() {
    console.log('Server is runnig on port 4242');
});