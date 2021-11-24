const express = require('express');

const app = express();

app.use(express.urlencoded());
app.use(express.json());

var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;
mongoose.connect("mongodb://localhost/if1zr1")

app.set('view engine', 'ejs');

require('./route/index')(app);

app.use((err, req, res, next) => {
    res.end('Problem...');
    console.log(err);
});

app.listen(3000, function () {
    console.log('Hello :3000');
});