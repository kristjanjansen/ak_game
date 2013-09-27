var path = require('path');
var express = require('express');
var exec = require('child_process').exec

var port = 8000

app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.listen(port)

console.log('Listening on port', port)


setInterval(function() {

child = exec('./build.sh',
  function (error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log(error);
    }
});

}, 10000)