var path = require('path');
var express = require('express');

var port = 8000

app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.listen(port)

console.log('Listening on port', port)
