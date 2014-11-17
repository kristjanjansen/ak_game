var http = require('http');
var exec = require('child_process').exec

var ecstatic = require('ecstatic');
var ip = require('ip');

var port = process.argv[2] ? process.argv[2] : 8000
var app = http.createServer(
  ecstatic({ root: __dirname + '/public'})
).listen(port);

console.log(
  '\nServer is running\n' +
  'In this machine: http://localhost:' + port + '\n' +
  'In local network: http://' + ip.address() + ':' + port
)


setInterval(function() {

child = exec('./build.sh',
  function (error, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
});

}, 5000)
