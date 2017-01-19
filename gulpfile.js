var express = require('express');
var open = require('open');
var path = require('path');
var gulp = require('gulp');

var app = express();

app.use(express.static(path.join(__dirname, 'output')));
app.use(express.static(path.join(__dirname, 'example')));
app.use(express.static(__dirname));

app.listen(8000, function(err) {
    if (err) {
        console.log("======Fail to listen 8000 port");
    }

    open("http://127.0.0.1:8000/index.html");
});

gulp.task('default', function() {

});